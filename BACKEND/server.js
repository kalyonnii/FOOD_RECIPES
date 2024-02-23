// app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require('./Routes/routes');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:admin123@cluster0.hrhuaiu.mongodb.net/foodrecipes?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(error => console.error("Error connecting to MongoDB:", error.message));

// Use routes
app.use('/api', routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


























// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// var cors = require('cors');


// const app = express();
// app.use(express.json());
// app.use(cors());
// async function connectToDatabase() {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://admin:admin123@cluster0.hrhuaiu.mongodb.net/foodrecipes?retryWrites=true&w=majority",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     console.log("Connected to MongoDB");
//     // Any further code that depends on the database connection can go here
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//   }
// }

// connectToDatabase();

// const User = mongoose.model("User", {
//   username: String,
//   email: String,
//   password: String,
// });

// app.post("/api/register", async (req, res) => {
//   const { username, email, password } = req.body;

//   // Hash the password before saving it to the database
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const user = new User({ username, email, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Registration failed" });
//   }
// });

// app.post("/api/login", async (req, res) => {
//   console.log("Inside the post function")
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     const validPassword = await bcrypt.compare(password, user.password);

//     if (!validPassword) {
//       return res.status(401).json({ error: "Invalid password" });
//     }

//     // Here, you might generate a JWT token for authenticated users

//     res.status(200).json({ message: "Login successful" });
//   } catch (error) {
//     res.status(500).json({ error: "Login failed" });
//   }
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
