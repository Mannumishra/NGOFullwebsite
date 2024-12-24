const SignUp = require("../Models/SignupModel");
const UserRelation = require("../Models/UserRelationSchema");
const bcrypt = require("bcrypt");
const { transporter } = require("../utils/mailConfig");
const mongoose = require("mongoose");

exports.createUserRelation = async (req, res) => {
  try {
    const { user, leftUser, rightUser } = req.body;
    console.log("Request body:", req.body); // Log the entire request body
    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({ message: "Invalid main user ID." });
    }

    const mainUser = await SignUp.findById(user);
    if (!mainUser) {
      return res.status(404).json({ message: "Main user not found." });
    }

    // Check if leftUser and rightUser mobile or email are provided
    if (leftUser && (!leftUser.mobile && !leftUser.email)) {
      console.log("Left user mobile or email not provided:", leftUser);
      return res.status(400).json({ message: "Left user must have either mobile or email." });
    }
    if (rightUser && (!rightUser.mobile && !rightUser.email)) {
      console.log("Right user mobile or email not provided:", rightUser);
      return res.status(400).json({ message: "Right user must have either mobile or email." });
    }

    let leftUserId = null;
    let leftLogId = null;
    if (leftUser) {
      console.log("Processing left user:", leftUser); // Log leftUser object
      console.log("Left user mobile:", leftUser.mobile); // Log mobile of left user
      let leftUserDoc = await SignUp.findOne({ mobile: leftUser.mobile });
      if (leftUserDoc) {
        return res.status(400).json({ message: "Mobile number already exists for left user." });
      }

      leftUserDoc = await SignUp.findOne({ email: leftUser.email });
      if (!leftUserDoc) {
        // Generate unique logId for left user
        let isUnique = false;
        while (!isUnique) {
          const potentialLogId = `SBVKS${Date.now().toString().slice(-3)}${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;
          const existingLogId = await SignUp.findOne({ logId: potentialLogId });
          if (!existingLogId) {
            leftLogId = potentialLogId;
            isUnique = true;
          }
        }

        const hashedPassword = await bcrypt.hash(leftUser.password, 12);
        const hashedConfPassword = await bcrypt.hash(leftUser.confirmPassword, 12);

        const newLeftUser = new SignUp({
          ...leftUser,
          logId: leftLogId,
          password: hashedPassword,
          confirmPassword: hashedConfPassword,
        });
        await newLeftUser.save();
        leftUserId = newLeftUser._id;

        const newUserRelatation = new UserRelation({
          user: leftUserId
        })

        await newUserRelatation.save()

        // Send email with login details to the left user
        const mailOptions = {
          from: process.env.MAIL_USERNAME,
          to: newLeftUser.email,
          subject: "Welcome to Sai Balika Vikas Kalyan Society - Your Login Details",
          html: `
            <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f8f8f8;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <div style="text-align: center; padding: 20px 0;">
                        <h1 style="color: #ff6600; margin: 0;">Sai Balika Vikas Kalyan Society</h1>
                    </div>
                    <div style="padding: 20px;">
                        <p style="font-size: 16px; line-height: 1.5;">Hello <span style="font-weight: bold; color: #ff6600;">${newLeftUser.firstName} ${newLeftUser.lastName}</span>,</p>
                        <p style="font-size: 16px; line-height: 1.5;">Welcome to Sai Balika Vikas Kalyan Society! Your account has been successfully created.</p>
                        <p style="font-size: 16px; line-height: 1.5; font-weight: bold;">Your Login Details:</p>
                        <p style="font-size: 16px; line-height: 1.5;">Log IN ID: <span style="font-weight: bold; color: #ff6600;">${newLeftUser.logId}</span></p>
                        <p style="font-size: 16px; line-height: 1.5;">Password: <span style="font-weight: bold; color: #ff6600;">${leftUser.password}</span> (Please change it after logging in for security reasons)</p>
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
      } else {
        leftUserId = leftUserDoc._id;
      }
    }

    let rightUserId = null;
    let rightLogId = null;
    if (rightUser) {
      console.log("Processing right user:", rightUser); // Log rightUser object
      console.log("Right user mobile:", rightUser.mobile); // Log mobile of right user
      let rightUserDoc = await SignUp.findOne({ mobile: rightUser.mobile });
      if (rightUserDoc) {
        return res.status(400).json({ message: "Mobile number already exists for right user." });
      }

      rightUserDoc = await SignUp.findOne({ email: rightUser.email });
      if (!rightUserDoc) {
        // Generate unique logId for right user
        let isUnique = false;
        while (!isUnique) {
          const potentialLogId = `SBVKS${Date.now().toString().slice(-3)}${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;
          const existingLogId = await SignUp.findOne({ logId: potentialLogId });
          if (!existingLogId) {
            rightLogId = potentialLogId;
            isUnique = true;
          }
        }

        const hashedPassword = await bcrypt.hash(rightUser.password, 12);
        const hashedConfPassword = await bcrypt.hash(rightUser.confirmPassword, 12);

        const newRightUser = new SignUp({
          ...rightUser,
          logId: rightLogId,
          password: hashedPassword,
          confirmPassword: hashedConfPassword,
        });
        await newRightUser.save();
        rightUserId = newRightUser._id;

        const newUserRelatation = new UserRelation({
          user: rightUserId
        })

        await newUserRelatation.save()
        // Send email with login details to the right user
        const mailOptions = {
          from: process.env.MAIL_USERNAME,
          to: newRightUser.email,
          subject: "Welcome to Sai Balika Vikas Kalyan Society - Your Login Details",
          html: `
            <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f8f8f8;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <div style="text-align: center; padding: 20px 0;">
                        <h1 style="color: #ff6600; margin: 0;">Sai Balika Vikas Kalyan Society</h1>
                    </div>
                    <div style="padding: 20px;">
                        <p style="font-size: 16px; line-height: 1.5;">Hello <span style="font-weight: bold; color: #ff6600;">${newRightUser.firstName} ${newRightUser.lastName}</span>,</p>
                        <p style="font-size: 16px; line-height: 1.5;">Welcome to Sai Balika Vikas Kalyan Society! Your account has been successfully created.</p>
                        <p style="font-size: 16px; line-height: 1.5; font-weight: bold;">Your Login Details:</p>
                        <p style="font-size: 16px; line-height: 1.5;">Log IN ID: <span style="font-weight: bold; color: #ff6600;">${newRightUser.logId}</span></p>
                        <p style="font-size: 16px; line-height: 1.5;">Password: <span style="font-weight: bold; color: #ff6600;">${rightUser.password}</span> (Please change it after logging in for security reasons)</p>
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
      } else {
        rightUserId = rightUserDoc._id;
      }
    }






    let field = {}
    if (leftUserId) {
      field.leftUser = leftUserId

    }

    if (rightUserId) {
      field.rightUser = rightUserId

    }

    console.log("field")
    await UserRelation.findOneAndUpdate({ user }, field)


    res.status(200).json({ message: "User relation created successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
};






exports.getAll = async (req, res) => {
  try {
    const data = await UserRelation.find().populate("user").populate("rightUser").populate("leftUser")
    // console.log(data)
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
}
exports.getUserRelation = async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from request params

    // Step 1: Find user relation by userId
    const userRelation = await UserRelation.findOne({ user: userId });

    if (!userRelation) {
      return res.status(404).json({
        message: 'No user relation found for this user.',
      });
    }

    // Step 2: Return the user relation data (including left and right user info if present)
    res.status(200).json({
      message: 'User relation found successfully',
      userRelation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error fetching user relation data',
      error: error.message,
    });
  }
};


exports.Delete = async (req, res) => {
  try {
    const data = await UserRelation.findById(req.params.id).populate("user")
    // console.log(data)
    await data.deleteOne()
    res.status(200).json({
      message: "Delete successfully"
    })
  } catch (error) {
    console.log(error)
  }
}