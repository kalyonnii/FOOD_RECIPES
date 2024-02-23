// userController.js
const bcrypt = require("bcrypt");
const User = require('../models/user');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password before saving it to the database
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  console.log("Inside the login function")
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Here, you might generate a JWT token for authenticated users

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
