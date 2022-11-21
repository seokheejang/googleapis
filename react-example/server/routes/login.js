var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const { code, redirect_uri } = req.query;
    const { data } = await axios.post(
      "https://www.googleapis.com/oauth2/v4/token",
      {
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET_ID,
        grant_type: "authorization_code",
        redirect_uri,
      }
    );
    console.log("login data", data);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
