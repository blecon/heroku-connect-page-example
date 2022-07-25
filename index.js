const express = require("express");
const req = require("express/lib/request");
const axios = require("axios");

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({
  extended: true,
});

const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/connect", function (req, res) {
    // Blecon sends your users to this page 
    res.render("pages/connect", {
      query: req.query,
    });
  })
  .post("/connect-submit", urlencodedParser, async function (req, res) {
    try {

      // Call the Blecon API and register the device

      await axios.post(
        "https://api.blecon.net/devices?account=" + process.env.BLECON_ACCOUNT,
        {
          device_id: req.body.device_id,
          public_key: req.body.device_public_key,
          network_id: req.body.network_id,
          model: req.body.device_model,
        },
        {
          headers: {
            Authorization: `${process.env.BLECON_API_KEY}`,
          },
        }
      );

      // Here you would call to your own API and record the device and any additional related data

      res.render("pages/connect-success", {});
    } catch (e) {

      // Handle errors appropriately

      res.render("pages/connect-error", {
        error: e,
      });
    }
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
