const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM instructors", (err, results) => {
    if (err) throw err;
    console.log(results);
    res.render("indexInstructors", { data: results });
  });
});

router.post("/add", (req, res) => {
  const { instructor_name, specialization, experience_years } = req.body;
  const insertQuery = `INSERT INTO instructors (Instructor_Name, Specialization, Experience_Years) VALUES (?, ?, ?)`;
  connection.query(
    insertQuery,
    [instructor_name, specialization, experience_years],
    (err, results) => {
      if (err) throw err;
      res.redirect("/instructors");
    }
  );
});

router.get("/delete/:id", (req, res) => {
  const instructorId = req.params.id;
  const deleteQuery = "DELETE FROM instructors WHERE Instructor_Id = ?";
  connection.query(deleteQuery, [instructorId], (err, results) => {
    if (err) throw err;
    res.redirect("/instructors");
  });
});

router.get("/edit/:id", (req, res) => {
  const instructorId = req.params.id;
  const selectQuery = "SELECT * FROM instructors WHERE Instructor_Id = ?";
  connection.query(selectQuery, [instructorId], (err, results) => {
    if (err) throw err;
    res.render("editInstructors", { instructor: results[0] });
  });
});

router.post("/update/:id", (req, res) => {
  const instructorId = req.params.id;
  const { instructor_name, specialization, experience_years } = req.body;
  const updateQuery =
    "UPDATE instructors SET Instructor_Name = ?, Specialization = ?, Experience_Years = ? WHERE Instructor_Id = ?";
  connection.query(
    updateQuery,
    [instructor_name, specialization, experience_years, instructorId],
    (err, results) => {
      if (err) throw err;
      res.redirect("/instructors");
    }
  );
});

module.exports = router;
