const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM about", (err, results) => {
    if (err) throw err;
     console.log(results);
    if (req.headers.accept && req.headers.accept.includes("application/json")) {
      res.send(results);
    }
    else{
    res.render("indexAbout", { data: results });
    }
  });
});



router.post("/add", (req, res) => {
  const { about_title } = req.body;
  const insertQuery = "INSERT INTO about (about_title) VALUES (?)";
  connection.query(insertQuery, [about_title], (err, results) => {
    if (err) throw err;
    res.redirect("/about");
  });
});

router.get("/delete/:id", (req, res) => {
  const aboutId = req.params.id;
  const deleteQuery = "DELETE FROM about WHERE about_id = ?";
  connection.query(deleteQuery, [aboutId], (err, results) => {
    if (err) throw err;
    res.redirect("/about");
  });
});

router.get("/edit/:id", (req, res) => {
  const aboutId = req.params.id;
  const selectQuery = "SELECT * FROM about WHERE about_id = ?";
  connection.query(selectQuery, [aboutId], (err, results) => {
    if (err) throw err;
    res.render("editAbout", { about: results[0] });
  });
});

router.post("/update/:id", (req, res) => {
  const aboutId = req.params.id;
  const { about_title } = req.body;
  const updateQuery = "UPDATE about SET about_title = ? WHERE about_id = ?";
  connection.query(updateQuery, [about_title, aboutId], (err, results) => {
    if (err) throw err;
    res.redirect("/about");
  });
});

module.exports = router;
