const express  = require("express");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage});

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("pages/index");
});

app.get("/login", function(req, res) {
    res.render("pages/login");
});

app.post("/", upload.single("fileUpload"), (req, res, err) => {
    console.log(req.body, req.file)
    res.render("pages/sentSuccessfully")
});

app.listen(3000, () => {
    console.log("Running...")
});
