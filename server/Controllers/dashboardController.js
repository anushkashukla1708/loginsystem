const User = require("../models/User");

const getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password -otp -otpExpiry");

    res.status(200).json({
      success: true,
      message: "Welcome to Dashboard",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getDashboard,
};