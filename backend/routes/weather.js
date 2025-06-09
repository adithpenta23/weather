const express = require("express");
const axios = require("axios");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.OPENWEATHER_API_KEY;

router.get("/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data" });
  }
});

module.exports = router;
