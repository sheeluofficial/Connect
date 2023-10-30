const express = require("express");
const dotenv = require("dotenv");


const cloudinary = require("cloudinary");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
var cors = require("cors");
const connectDB = require("./config/db");
const errorMiddleware = require("./middleware/errorHandler")
const app = express();

dotenv.config();
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());
app.use(errorMiddleware);
connectDB();

app.use(express.json()); // to accept json data


// routes
const userRoute = require("./route/userRoute");
const chatRuote = require("./route/chatRoute");
const messageRoute = require("./route/messageRoutes");



app.use("/api/user", userRoute);
app.use("/api/chat", chatRuote);
app.use("/api/message", messageRoute);
app.use(cors());
// conncet with cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/cc", (req, res) => {
    res.send({data:"API is running.."});
  });
}

// --------------------------deployment------------------------------



const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

