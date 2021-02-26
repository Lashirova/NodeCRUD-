const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./app/config/db.config");
const app = express();
const port = 3002
const router = require("./app/routes/db.routes");





let corsOptions = {
  origin: "http://127.0.0.1:5500",
  optionsSuccessStatus: 200

};
app.use(cors(corsOptions));


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/customers', router);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Node CRUD application." });
});


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});