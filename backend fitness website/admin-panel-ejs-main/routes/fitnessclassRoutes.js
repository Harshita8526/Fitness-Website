const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM fitnessclass", (err, results) => {
    if (err) throw err;
    console.log(results);
    res.render("indexFitnessClass", { data: results });
  });
});

router.post("/add", (req, res) => {
  const { user_id, class_name, schedule_day, schedule_time, months_joined } = req.body;
  const insertQuery = `INSERT INTO fitnessclass (User_Id, Class_Name, Schedule_Day, Schedule_Time, Months_Joined) VALUES (?, ?, ?, ?, ?)`;
  connection.query(
    insertQuery,
    [user_id, class_name, schedule_day, schedule_time, months_joined],
    (err, results) => {
      if (err) throw err;
      res.redirect("/fitnessclass");
    }
  );
});

router.get("/delete/:id", (req, res) => {
  const fitnessClassId = req.params.id;
  const deleteQuery = "DELETE FROM fitnessclass WHERE Fitness_Class_Id = ?";
  connection.query(deleteQuery, [fitnessClassId], (err, results) => {
    if (err) throw err;
    res.redirect("/fitnessclass");
  });
});

router.get("/edit/:id", (req, res) => {
  const fitnessClassId = req.params.id;
  const selectQuery = "SELECT * FROM fitnessclass WHERE Fitness_Class_Id = ?";
  connection.query(selectQuery, [fitnessClassId], (err, results) => {
    if (err) throw err;
    res.render("editFitnessClass", { fitnessclass: results[0] });
  });
});

router.post("/update/:id", (req, res) => {
  const fitnessClassId = req.params.id;
  const { user_id, class_name, schedule_day, schedule_time, months_joined } = req.body;
  const updateQuery =
    "UPDATE fitnessclass SET User_Id = ?, Class_Name = ?, Schedule_Day = ?, Schedule_Time = ?, Months_Joined = ? WHERE Fitness_Class_Id = ?";
  connection.query(
    updateQuery,
    [user_id, class_name, schedule_day, schedule_time, months_joined, fitnessClassId],
    (err, results) => {
      if (err) throw err;
      res.redirect("/fitnessclass");
    }
  );
});

module.exports = router;
