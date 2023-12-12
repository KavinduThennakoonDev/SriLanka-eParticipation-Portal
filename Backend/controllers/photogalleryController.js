const db = require("../database/connection");

const getPhoto = (req, res) => {
  const q =
    "SELECT  gi.id,g.gallery_id,g.gallery_title,g.gallery_status,gi.image_path FROM tbl_gallery g JOIN tbl_gallery_image gi ON g.gallery_id = gi.gallery_id;"; 
  
  db.query(q, (err, data) => {
    // console.log('backend-------->',data);
    if (err) {
      console.log(err);
      return res.json(err);
    }
    
    return res.json(data);
  });
};
exports.getPhoto = getPhoto;



// const getGalleryphoto = (req, res) => {
//   console.log();
//   const q1 =
//     "SELECT image_path FROM tbl_gallery_image WHERE gallery_id = $data->gallery_id"; //
//   db.query(q1, (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// };
// exports.getGalleryphoto = getGalleryphoto;