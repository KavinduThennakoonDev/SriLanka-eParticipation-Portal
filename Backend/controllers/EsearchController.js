const db = require("../database/connection");
const esearchContent = (req, res) => {
  const { query } = req.query;
  const q = `
  SELECT * FROM tbl_event WHERE (event_topic LIKE '%${query}%' or event_short_description LIKE '%${query}%' OR event_description LIKE '%${query}%')`;

  db.query(q, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Error fetching data" });
    }
    return res.json(data);
  });
};
exports.esearchContent = esearchContent;
