const SignUp = require("../Models/SignupModel");
const UserRelation = require("../Models/UserRelationSchema");
const bcrypt = require("bcrypt");
const { transporter } = require("../utils/mailConfig");
const mongoose = require("mongoose");

// Helper function for user creation logic
const createUser = async (userDetails) => {
  const { mobile, email, password, confirmPassword, firstName, lastName } = userDetails;
  let userDoc = await SignUp.findOne({ mobile }) || await SignUp.findOne({ email });

  if (userDoc) {
    return { error: "Mobile number or email already exists." };
  }

  let logId = await generateLogId();

  const hashedPassword = await bcrypt.hash(password, 12);
  const hashedConfPassword = await bcrypt.hash(confirmPassword, 12);

  const newUser = new SignUp({
    ...userDetails,
    logId,
    password: hashedPassword,
    confirmPassword: hashedConfPassword,
  });

  await newUser.save();
  return newUser;
};

// Helper function to generate a unique logId
const generateLogId = async () => {
  let isUnique = false;
  let logId;
  while (!isUnique) {
    logId = `SBVKS${Date.now().toString().slice(-3)}${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;
    const existingLogId = await SignUp.findOne({ logId });
    if (!existingLogId) {
      isUnique = true;
    }
  }
  return logId;
};

// Helper function to send email to a user
const sendWelcomeEmail = (user, userType, parentUser) => {
  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: user.email,
    subject: `Welcome to Sai Balika Vikas Kalyan Society - Your Login Details`,
    html: `
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f8f8f8;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <div style="text-align: center; padding: 20px 0;">
                  <h1 style="color: #ff6600; margin: 0;">Sai Balika Vikas Kalyan Society</h1>
              </div>
              <div style="padding: 20px;">
                  <p style="font-size: 16px; line-height: 1.5;">Hello <span style="font-weight: bold; color: #ff6600;">${user.firstName} ${user.lastName}</span>,</p>
                  <p style="font-size: 16px; line-height: 1.5;">Welcome to Sai Balika Vikas Kalyan Society! Your account has been successfully created.</p>
                  <p style="font-size: 16px; line-height: 1.5; font-weight: bold;">Your Login Details:</p>
                  <p style="font-size: 16px; line-height: 1.5;">Log IN ID: <span style="font-weight: bold; color: #ff6600;">${user.logId}</span></p>
                  <p style="font-size: 16px; line-height: 1.5;">Password: <span style="font-weight: bold; color: #ff6600;">${userType.password}</span> (Please change it after logging in for security reasons)</p>
                  
                  ${parentUser ? `
                  <p style="font-size: 16px; line-height: 1.5; font-weight: bold;">Parent Details:</p>
                  <p style="font-size: 16px; line-height: 1.5;">Parent User ID: <span style="font-weight: bold; color: #ff6600;">${parentUser.logId}</span></p>
                  <p style="font-size: 16px; line-height: 1.5;">Parent Name: <span style="font-weight: bold; color: #ff6600;">${parentUser.firstName} ${parentUser.lastName}</span></p>
                  ` : `
                  <p style="font-size: 16px; line-height: 1.5;">You do not have a parent assigned.</p>
                  `}
                  
                  <p style="font-size: 16px; line-height: 1.5;">Thank you for joining us! We are excited to have you as part of our community.</p>
                  <div style="text-align: center; margin-top: 20px;">
                      <a href="${process.env.LOGIN_URL}" style="display: inline-block; padding: 10px 20px; background-color: #ff6600; color: #ffffff; text-decoration: none; font-size: 16px; border-radius: 5px;">Login</a>
                  </div>
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
};

// Main controller method
exports.createUserRelation = async (req, res) => {
  try {
    const { user, leftUser, rightUser } = req.body;

    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({ message: "Invalid main user ID." });
    }

    const mainUser = await SignUp.findById(user);
    if (!mainUser) {
      return res.status(404).json({ message: "Main user not found." });
    }

    let leftUserId = null;
    if (leftUser) {
      const newLeftUser = await createUser(leftUser);
      if (newLeftUser.error) {
        return res.status(400).json({ message: newLeftUser.error });
      }

      await new UserRelation({ user: newLeftUser._id }).save();
      sendWelcomeEmail(newLeftUser, leftUser, mainUser);
      leftUserId = newLeftUser._id;
    }

    let rightUserId = null;
    if (rightUser) {
      const newRightUser = await createUser(rightUser);
      if (newRightUser.error) {
        return res.status(400).json({ message: newRightUser.error });
      }

      await new UserRelation({ user: newRightUser._id }).save();
      sendWelcomeEmail(newRightUser, rightUser, mainUser);
      rightUserId = newRightUser._id;
    }

    let updateFields = {};
    if (leftUserId) updateFields.leftUser = leftUserId;
    if (rightUserId) updateFields.rightUser = rightUserId;

    await UserRelation.findOneAndUpdate({ user }, updateFields);

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
    const userRelation = await UserRelation.findOne({ user: userId }).populate("user").populate("rightUser").populate("leftUser");

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