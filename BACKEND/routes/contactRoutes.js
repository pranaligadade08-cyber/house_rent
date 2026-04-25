const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  await Contact.create({ name, email, message });

  res.json({ message: "Message Sent Successfully" });
});

module.exports = router;