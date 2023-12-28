const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.post("/submitForm", async (req, res) => {
  try {
    const { Name, email, phone, service, budget } = req.body;
    const newContact = await Contact.create({
      Name,
      email,
      phone,
      service,
      budget,
    });
    res.status(201).json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
