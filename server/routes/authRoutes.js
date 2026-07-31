const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  verifyOTP,
} = require("../Controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify-otp", verifyOTP);

module.exports = router;