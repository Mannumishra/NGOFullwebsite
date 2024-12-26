const Razorpay = require("razorpay");
const Donation = require("../Models/DonateModel");
const UserRelation = require("../Models/UserRelationSchema");

// Razorpay instance setup
const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_APT_KEY, // Your Razorpay Key ID
    key_secret: process.env.RAZORPAY_APT_SECRET, // Your Razorpay Key Secret
});

const createDonation = async (req, res) => {
    try {
        const { userId, amount } = req.body;

        // Parse amount to a number to prevent type mismatch
        const donationAmount = parseFloat(amount);

        if (!userId || !donationAmount || isNaN(donationAmount)) {
            return res.status(400).json({ message: "Valid userId and amount are required." });
        }

        // Create an order on Razorpay
        const order = await razorpayInstance.orders.create({
            amount: donationAmount * 100, // Razorpay expects amount in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        });

        // Save the donation record with payment status "pending"
        const donation = new Donation({
            userId,
            paymentId: order.id,
            paymentStatus: "pending",
            amount: donationAmount, // Store the amount as a number
        });

        await donation.save();

        res.status(201).json({ message: "Donation created successfully", order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating donation", error: error.message });
    }
};


// Update donation status after payment verification
const updateDonationStatus = async (req, res) => {
    try {
        const { paymentId, razorpayPaymentId, razorpaySignature } = req.body;

        if (!paymentId || !razorpayPaymentId || !razorpaySignature) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Verify the Razorpay payment
        const crypto = require("crypto");
        const generatedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
            .update(paymentId + "|" + razorpayPaymentId)
            .digest("hex");

        if (generatedSignature !== razorpaySignature) {
            return res.status(400).json({ message: "Payment verification failed." });
        }

        // Update the donation record
        const donation = await Donation.findOneAndUpdate(
            { paymentId },
            { paymentStatus: "success" },
            { new: true }
        );

        if (!donation) {
            return res.status(404).json({ message: "Donation not found." });
        }

        res.status(200).json({ message: "Payment verified and donation updated.", donation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating donation status", error: error.message });
    }
};


const getAllDonatation = async (req, res) => {
    try {
        const data = await Donation.find().populate("userId")
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Donatation Not Found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Donatation Found Successfully",
            data:data
        })
    } catch (error) {
        console.log(error)
    }
}


 

 

const getDonationList = async (req, res) => {
    try {
        const myDonation = await Donation.find({ userId: req.params.id }).populate("userId")
        let myChildsDonation = [];
 
        // Recursive function to traverse the tree and collect donations
        const collectDonations = async (userId) => {
            
            // Fetch user relations for the current user
            const myChild = await UserRelation.findOne({user: userId })
            
            if (!myChild) return; // Stop if no child exists

            // Process left child
            if (myChild.leftUser) {
                const leftDonations = await Donation.find({ userId: myChild.leftUser }).populate("userId")
                myChildsDonation = [...myChildsDonation, ...leftDonations];
                await collectDonations(myChild.leftUser); // Recursive call for left child
            }
          
            // Process right child
            if (myChild.rightUser) {
                const rightDonations = await Donation.find({ userId: myChild.rightUser }).populate("userId")
                myChildsDonation = [...myChildsDonation, ...rightDonations];
                await collectDonations(myChild.rightUser); // Recursive call for right child
            }
        };
 
        // Start the recursion from the given user
        await collectDonations(req.params.id);
 
        res.status(200).json({
            success: true,
            message: "Record Found Successfully",
            myDonation,
            myChildsDonation,
        });
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};













module.exports = {
    createDonation,
    updateDonationStatus,getDonatationList:getDonationList,getAllDonatation
};
