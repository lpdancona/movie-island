const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
})
.then(() => console.log("DB connection stablished"))
.catch(err => console.log("Error is: ", err))

app.use(express.json())

app.use("/api/auth", authRoute);

app.listen(3001, () => {
  console.log("app is listening on port 3001");
})