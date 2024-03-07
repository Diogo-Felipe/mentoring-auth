const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const validateToken = require("./middleware/authMiddleware");
const auth = require("./routes/authRoutes");
const user = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/auth", auth);

app.use("*", validateToken);

app.use("/user", user);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
