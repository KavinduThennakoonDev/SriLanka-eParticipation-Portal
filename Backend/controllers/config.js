const dotenv = require("dotenv");

require("dotenv").config({ path: "../.env" });

module.exports = {
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
};
