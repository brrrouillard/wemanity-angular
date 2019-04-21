const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI || require("./config/private_keys").mongoURI;

// DATABASE CONNEXION
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongoose connected"))
  .catch(err => console.log(err));

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API ROUTES
const contactsRouter = require("./api/contacts");
app.use("/contacts", contactsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
