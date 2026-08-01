const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

dotenv.config();
dns.setServers(["8.8.8.8", "8.8.4.4"]);

connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://loginsystem12345.vercel.app",
      "https://loginsystem12345-git-main-anushka-self.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});