const db = require("../database/connection");
const { sendEmail } = require("../controllers/emailController");

const addnewsletter = (req, res) => {
  const q =
    "INSERT INTO tbl_newsletter (`province`, `email`, `created_at`) VALUES (?)";
  const values = [req.body.province, req.body.email, "2023-06-06 12:12:12"];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error("Error adding newsletter:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    sendEmail(
      req.body.email,
      "Confirmation of Content Subscription | eParticipation Portal Sri Lanka",
      "Dear User,\n\nWarm greetings and a heartfelt welcome to the eParticipation community!\n\nWe are thrilled to confirm your subscription for content updates, ensuring you stay informed about the latest Public Consultations and Events on our eParticipation portal.\n\nAs a subscriber, you'll receive timely notifications about new content, including details about upcoming public consultations and events, directly in your inbox.\n\nTo explore the latest updates and engage with our vibrant community, visit our website at www.eParticipation.gov.lk.\n\nYour involvement is instrumental in fostering a participatory environment, and we look forward to sharing valuable insights with you. Should you ever wish to share your thoughts or suggestions, feel free to use the General Feedback Form available on our site.\n\nThank you for joining us on this exciting journey of eParticipation!\n\nBest regards,\neParticipation Administration  Unit"
    );

    return res.json(data);
  });
};

// const getprovince = (req, res) => {
//   const q = "SELECT * FROM tbl_province ";

//   db.query(q, (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }

//     if (data.length === 0) {
//       return res.status(404).json({ error: "Content not found" });
//     }

//     return res.json(data[0]);
//   });
// };

exports.addnewsletter = addnewsletter;
// exports.getprovince = getprovince;
