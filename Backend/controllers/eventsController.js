const db = require("../database/connection");

const getEventBySlug = (req, res) => {
  const { slug } = req.params;
  const q = "SELECT * FROM tbl_event WHERE event_url = ?";

  db.query(q, [slug], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (data.length === 0) {
      return res.status(404).json({ error: "Content not found" });
    }

    return res.json(data[0]);
  });
};

const getAllEvents = (req, res) => {
  const q = "SELECT * FROM tbl_event";

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    return res.json(data);
  });
};
exports.getAllEvents = getAllEvents;
exports.getEventBySlug = getEventBySlug;
