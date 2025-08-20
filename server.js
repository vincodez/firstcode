const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args)); // 👈 for Node < 18

const app = express();
const port = 3001;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ GET /login -> fetch external API
app.get("/login", async (req, res) => {
  try {
    const mydata = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsondata = await mydata.json();
    console.log("Received request to login");
    res.json(jsondata);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST /register -> create user in DB safely
app.post("/register", async (req, res) => {
  try {
    const { name, email } = req.body || {};

    // Validate input
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const newUser = await prisma.user.create({
      data: { name, email },
    });

    res.json(newUser);
  } catch (err) {
    console.error("❌ Error creating user:", err);
    res.status(500).json({ error: "Something went wrong while creating user" });
  }
});

// ✅ GET /users -> fetch all users from DB
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    console.error("❌ Error fetching users:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Example app listening on port ${port}`);
});
