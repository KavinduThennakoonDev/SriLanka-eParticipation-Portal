const db = require("../database/connection");
const searchContent = (req, res) => {
  const { query } = req.query;
  const q = `
    SELECT * FROM tbl_content 
    WHERE (content_topic LIKE '%${query}%' OR content_short_description LIKE '%${query}%' OR content_description LIKE '%${query}%') 
    AND content_status = 100
  `;

  db.query(q, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Error fetching data" });
    }
    return res.json(data);
  });
};
exports.searchContent = searchContent;
