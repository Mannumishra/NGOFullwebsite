const SignUp = require("../Models/SignupModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { transporter } = require("../utils/mailConfig");
const UserRelation = require("../Models/UserRelationSchema");

// Create a new signup
const createSignup = async (req, res) => {
    try {
        const { password, confirmPassword, firstName, lastName, dateOfBirth, mobile, email, address, state, city, pincode, country, } = req.body;
        if (!firstName || !lastName || !dateOfBirth || !mobile || !email || !address || !state || !city || !pincode || !country) {
            return res.status(400).json({ success: false, message: "All required fields must be filled." });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match." });
        }

        const existingUser = await SignUp.findOne({
            $or: [{ email }, { mobile }],
        });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email or mobile number already exists.",
            });
        }
        const logId = `SBVKS${Date.now().toString().slice(-3)}${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;

        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const hashedconfPassword = await bcrypt.hash(req.body.confirmPassword, 12);
        const newSignup = new SignUp({
            ...req.body,
            logId,
            password: hashedPassword,
            confirmPassword: hashedconfPassword
        });
        const savedSignup = await newSignup.save();
        const latestRelationForCurrentUser = new UserRelation({
            user: newSignup._id
        })
        await latestRelationForCurrentUser.save()
        // Send email with login details to the user
        const mailOptions = {
            from: process.env.MAIL_USERNAME, // Sender's email
            to: savedSignup.email, // Recipient's email (user's email)
            subject: "Welcome to Sai Balika Vikas Kalyan Society - Your Login Details",
            html: `
                <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f8f8f8;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                        <div style="text-align: center; padding: 20px 0;">
                            <h1 style="color: #ff6600; margin: 0;">Sai Balika Vikas Kalyan Society</h1>
                        </div>
                        <div style="padding: 20px;">
                            <p style="font-size: 16px; line-height: 1.5;">Hello <span style="font-weight: bold; color: #ff6600;">${savedSignup.firstName} ${savedSignup.lastName}</span>,</p>
                            <p style="font-size: 16px; line-height: 1.5;">Welcome to Sai Balika Vikas Kalyan Society! Your account has been successfully created.</p>
                            <p style="font-size: 16px; line-height: 1.5; font-weight: bold;">Your Login Details:</p>
                            <p style="font-size: 16px; line-height: 1.5;">Log IN ID: <span style="font-weight: bold; color: #ff6600;">${savedSignup.logId}</span></p>
                            <p style="font-size: 16px; line-height: 1.5;">Password: <span style="font-weight: bold; color: #ff6600;">${req.body.password}</span> (Please change it after logging in for security reasons)</p>
                            <p style="font-size: 16px; line-height: 1.5;">Thank you for joining us! We are excited to have you as part of our community.</p>
                        </div>
                        <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #888888;">
                            <p>&copy; ${new Date().getFullYear()} Sai Balika Vikas Kalyan Society. All rights reserved.</p>
                            <p>For any inquiries, feel free to <a href="mailto:contact@sai-balika-vikas.org" style="color: #ff6600; text-decoration: none;">contact us</a>.</p>
                        </div>
                    </div>
                </body>
            `,
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error("Error sending email:", err);
            } else {
                console.log("Email sent:", info.response);
            }
        });
        res.status(201).json({
            success: true,
            message: "Signup successful. Login details have been sent to your email.",
            data: savedSignup,
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({
            success: false,
            message: "An error occurred while processing your request.",
        });
    }
};

// Get all signups
const getAllSignups = async (req, res) => {
    try {
        const signups = await SignUp.find();
        res.status(200).json({
            success: true,
            message: "Record Found Successfully",
            data: signups.reverse()
        });
    } catch (err) {
        handleError(err);
        res.status(500).json({ success: false, errors: errorMessage });
    }
};

// Get a single signup by ID
const getSignupById = async (req, res) => {
    try {
        const signup = await SignUp.findById(req.params.id);
        if (!signup) {
            return res.status(404).json({ success: false, errors: ["Signup not found"] });
        }
        res.status(200).json({
            success: true,
            message: "Record Found Successfully",
            data: signup
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


// Get a single signup by ID
const getSignupByLogId = async (req, res) => {
    try {
        console.log(req.params.logid)
        const signup = await SignUp.findOne({ logId: req.params.logid });
        if (!signup) {
            return res.status(404).json({ success: false, errors: ["Signup not found"] });
        }
        res.status(200).json({
            success: true,
            message: "Record Found Successfully",
            data: signup
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// Update a signup by ID
const updateSignupById = async (req, res) => {
    try {
        const { leftUser, rightUser } = req.body;  // Assuming these are ObjectIds of other users to be linked
        const updatedSignup = await SignUp.findByIdAndUpdate(
            req.params.id,  // Find the user by ID
            {
                $set: {
                    leftUser,  // Set the leftUser to the passed ObjectId
                    rightUser,  // Set the rightUser to the passed ObjectId
                }
            },
            { new: true, runValidators: true }  // Return the updated document
        );

        if (!updatedSignup) {
            return res.status(404).json({ success: false, errors: ["Signup not found"] });
        }

        res.status(200).json(updatedSignup);
    } catch (err) {
        console.log(err);
        if (err.name === 'ValidationError') {
            res.status(400).json({ success: false, errors: errorMessage });
        } else {
            res.status(500).json({ success: false, errors: ['Internal Server Error'] });
        }
    }
};


// Delete a signup by ID
const deleteSignupById = async (req, res) => {
    try {
        const deletedSignup = await SignUp.findByIdAndDelete(req.params.id);
        if (!deletedSignup) {
            return res.status(404).json({ success: false, errors: ["Signup not found"] });
        }
        res.status(200).json({ success: true, message: "Signup deleted successfully" });
    } catch (err) {
        handleError(err);
        res.status(500).json({ success: false, errors: errorMessage });
    }
};


const loginUser = async (req, res) => {
    const { logId, password } = req.body;
    try {
        const user = await SignUp.findOne({ logId });
        if (!user) {
            return res.status(404).json({ success: false, errors: ["Invalid Log In Id"] });
        }
        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, errors: ["Invalid Password"] });
        }

        // Determine role and set corresponding key
        const secretKey = user.role === "ADMIN"
            ? process.env.SALT_KEY_ADMIN
            : process.env.SALT_KEY_USER;

        // Generate JWT Token
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role,
            },
            secretKey,
            { expiresIn: "1h" } // Token expiry
        );

        // Respond with token and user details
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName,
                logId: user.logId
            }
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ success: false, errors: ["Internal Server Error"] });
    }
};














// const getchild = async (req, res) => {
//     try {
//          let myChilds = [];
 
//         // Recursive function to traverse the tree and collect donations
//         const collectChilds = async (userId) => {
            
//             // Fetch user relations for the current user
//             const myChild = await UserRelation.findOne({user: userId })
            
//             if (!myChild) return; // Stop if no child exists

//             // Process left child
//             if (myChild.leftUser) {
//                 const leftChild = await UserRelation.findOne({ user: myChild.leftUser }).populate("user")
//                 myChilds = [...myChilds, ...leftChild];
//                 await collectChilds(myChild.leftUser); // Recursive call for left child
//             }
          
//             // Process right child
//             if (myChild.rightUser) {
//                 const rightChild = await UserRelation.findOne({ user: myChild.rightUser }).populate("user")
//                 myChilds = [...myChilds, ...rightChild];
//                 await collectChilds(myChild.rightUser); // Recursive call for right child
//             }
//         };
 
//         // Start the recursion from the given user
//         await collectChilds(req.params.id);
 
//         res.status(200).json({
//             success: true,
//             message: "Record Found Successfully",
             
//             myChilds,
//         });
//     } catch (err) {
//         console.error(err); // Log error for debugging
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };
const getChild = async (req, res) => {
    try {
        let myChilds = [];

        // Recursive function to traverse the tree and collect children
        const collectChilds = async (userId) => {
            // Fetch user relations for the current user
            const myChild = await UserRelation.findOne({ user: userId });

            if (!myChild) return; // Stop if no child exists

            // Add the current user details to the result
            const currentUser = await UserRelation.findOne({ user: userId }).populate("user");
            if (currentUser) myChilds.push(currentUser);
            
           
            // Process right child
            if (myChild.rightUser) {
                await collectChilds(myChild.rightUser); // Recursive call for right child
            }
        };

        // Start the recursion from the given user
        await collectChilds(req.params.id);
 
        res.status(200).json({
            success: true,
            message: "Record Found Successfully",
            myChilds,
        });
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};



module.exports = {
    createSignup,
    getchild:getChild,
    getAllSignups,
    getSignupById,
    updateSignupById,
    deleteSignupById,
    loginUser,
    getSignupByLogId
};
