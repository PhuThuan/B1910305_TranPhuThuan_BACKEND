var express = require('express');
var cors = require('cors');
const contactsRouter = require("./app/routes/contact.route");


var app = express();

app.use("/api/contacts", contactsRouter);

app.use(cors());
app.use(express.json());
app.get('/',  (req, res)=> {
  res.json({message: 'Welcome to contact book application!'})
});

module.exports = app;