const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const dns = require('dns');
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
dns.setServers(['8.8.8.8', '8.8.4.4']);

// ...rest of your existing requires and code below
dotenv.config();

connectDB();

const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://loginsystem1234.vercel.app",
      "https://loginsystem1234-git-main-anushka-self.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});