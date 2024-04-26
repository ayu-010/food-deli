const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

const Routes=require("./routes/foodRoutes");

require("./config/config").dbconnect();
const{cloudinaryConnect}=require('./config/cloudinary');

const fileUpload=require("express-fileupload");
cloudinaryConnect();

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
)
app.use("/api/v1",Routes);






app.listen(PORT, () => {
    console.log(`Connection is done on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("This is a homepage");
});
