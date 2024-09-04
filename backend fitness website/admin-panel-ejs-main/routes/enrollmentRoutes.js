// const express = require("express");
// const router = express.Router();
// const connection = require("../utils/database");

// router.get("/enrollment", (req, res) => {
//   connection.query("SELECT * FROM enrollment", (err, results) => {
//     if (err) throw err;
//     console.log(results);
//     res.render("indexEnrollment", { data: results });
//   });
// });

// router.post("/enrollment/add", (req, res) => {
//   const { user_id, fitness_class_id, enrollment_date } = req.body;
//   const insertQuery = `INSERT INTO enrollment (User_Id, Fitness_Class_Id, Enrollment_Date) VALUES (?, ?, ?)`;
//   connection.query(
//     insertQuery,
//     [user_id, fitness_class_id, enrollment_date],
//     (err, results) => {
//       if (err) throw err;
//       res.redirect("/enrollment");
//     }
//   );
// });

// router.get("/enrollment/delete/:id", (req, res) => {
//   const enrollmentId = req.params.id;
//   const deleteQuery = "DELETE FROM enrollment WHERE Enrollment_Id = ?";
//   connection.query(deleteQuery, [enrollmentId], (err, results) => {
//     if (err) throw err;
//     res.redirect("/enrollment");
//   });
// });

// router.get("/enrollment/edit/:id", (req, res) => {
//   const enrollmentId = req.params.id;
//   const selectQuery = "SELECT * FROM enrollment WHERE Enrollment_Id = ?";
//   connection.query(selectQuery, [enrollmentId], (err, results) => {
//     if (err) throw err;
//     res.render("editEnrollment", { enrollment: results[0] });
//   });
// });

// router.post("/enrollment/update/:id", (req, res) => {
//   const enrollmentId = req.params.id;
//   const { user_id, fitness_class_id, enrollment_date } = req.body;
//   const updateQuery =
//     "UPDATE enrollment SET User_Id = ?, Fitness_Class_Id = ?, Enrollment_Date = ? WHERE Enrollment_Id = ?";
//   connection.query(
//     updateQuery,
//     [user_id, fitness_class_id, enrollment_date, enrollmentId],
//     (err, results) => {
//       if (err) throw err;
//       res.redirect("/enrollment");
//     }
//   );
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM enrollment", (err, results) => {
    if (err) throw err;
    console.log(results);
    res.render("indexEnrollment", { data: results });
  });
});

router.post("/add", (req, res) => {
  const { user_id, fitness_class_id, enrollment_date } = req.body;
  const insertQuery = `INSERT INTO enrollment (User_Id, Fitness_Class_Id, Enrollment_Date) VALUES (?, ?, ?)`;
  connection.query(
    insertQuery,
    [user_id, fitness_class_id, enrollment_date],
    (err, results) => {
      if (err) throw err;
      res.redirect("/enrollment");
    }
  );
});

router.get("/delete/:id", (req, res) => {
  const enrollmentId = req.params.id;
  const deleteQuery = "DELETE FROM enrollment WHERE Enrollment_Id = ?";
  connection.query(deleteQuery, [enrollmentId], (err, results) => {
    if (err) throw err;
    res.redirect("/enrollment");
  });
});

router.get("/edit/:id", (req, res) => {
  const enrollmentId = req.params.id;
  const selectQuery = "SELECT * FROM enrollment WHERE Enrollment_Id = ?";
  connection.query(selectQuery, [enrollmentId], (err, results) => {
    if (err) throw err;
    res.render("editEnrollment", { enrollment: results[0] });
  });
});

router.post("/update/:id", (req, res) => {
  const enrollmentId = req.params.id;
  const { user_id, fitness_class_id, enrollment_date } = req.body;
  const updateQuery =
    "UPDATE enrollment SET User_Id = ?, Fitness_Class_Id = ?, Enrollment_Date = ? WHERE Enrollment_Id = ?";
  connection.query(
    updateQuery,
    [user_id, fitness_class_id, enrollment_date, enrollmentId],
    (err, results) => {
      if (err) throw err;
      res.redirect("/enrollment");
    }
  );
});

module.exports = router;
