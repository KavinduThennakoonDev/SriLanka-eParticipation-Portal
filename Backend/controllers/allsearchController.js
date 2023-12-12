const db = require("../database/connection");

const allsearchContent = (req, res) => {
  const { query } = req.query;
  const q = `
    SELECT content_topic COLLATE utf8mb4_general_ci AS topic, content_url COLLATE utf8mb4_general_ci AS url, "eparticipation" as tm
    FROM eparticipation.tbl_content 
    WHERE (content_topic LIKE '%${query}%')  
    UNION
    SELECT event_topic COLLATE utf8mb4_general_ci AS topic, event_url COLLATE utf8mb4_general_ci AS url, "event" as tm
    FROM tbl_event 
    WHERE (event_topic LIKE '%${query}%')
  `;

  db.query(q, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Error fetching data" });
    }
    return res.json(data);
  });
};

exports.allsearchContent = allsearchContent;
