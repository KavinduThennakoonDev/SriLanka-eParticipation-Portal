const db = require("../database/connection");

const getContents = (req, res) => {
  const q =
    "SELECT * FROM tbl_content WHERE content_status = 100 ORDER BY content_id DESC LIMIT 3"; //
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};

const getContentsBySlug = (req, res) => {
  const { slug } = req.params;
  const q = "SELECT * FROM tbl_content WHERE content_url = ? ";

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

const getContentviews = (req, res) => {
  const q =
    "SELECT * FROM tbl_content WHERE content_status = 100 order by content_id desc "; //
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};
const getnotContentviews = (req, res) => {
  const q =
    "SELECT * FROM tbl_content WHERE content_status = 101 order by content_id desc"; //
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};
const getCarousel = (req, res) => {
  const q =
    "SELECT * FROM tbl_content WHERE content_status = 100 ORDER BY content_id DESC LIMIT 1"; //
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};

exports.getContents = getContents;
exports.getContentsBySlug = getContentsBySlug;
exports.getContentviews = getContentviews;
exports.getCarousel = getCarousel;
exports.getnotContentviews=getnotContentviews;
