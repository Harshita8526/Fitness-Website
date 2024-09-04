const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    console.log(results);
    res.render("indexUsers", { data: results });
  });
});

router.post("/add", (req, res) => {
  const { username, date_of_birth, email, password, phone_no, gender, address } = req.body;
  const insertQuery = `INSERT INTO users (Username, Date_Of_Birth, Email, Password, Phone_No, Gender, Address) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  connection.query(
    insertQuery,
    [username, date_of_birth, email, password, phone_no, gender, address],
    (err, results) => {
      if (err) throw err;
      res.redirect("/users");
    }
  );
});

router.get("/delete/:id", (req, res) => {
  const userId = req.params.id;
  const deleteQuery = "DELETE FROM users WHERE User_Id = ?";
  connection.query(deleteQuery, [userId], (err, results) => {
    if (err) throw err;
    res.redirect("/users");
  });
});

router.get("/edit/:id", (req, res) => {
  const userId = req.params.id;
  const selectQuery = "SELECT * FROM users WHERE User_Id = ?";
  connection.query(selectQuery, [userId], (err, results) => {
    if (err) throw err;
    res.render("editUsers", { user: results[0] });
  });
});

router.post("/update/:id", (req, res) => {
  const userId = req.params.id;
  const { username, date_of_birth, email, password, phone_no, gender, address } = req.body;
  const updateQuery =
    "UPDATE users SET Username = ?, Date_Of_Birth = ?, Email = ?, Password = ?, Phone_No = ?, Gender = ?, Address = ? WHERE User_Id = ?";
  connection.query(
    updateQuery,
    [username, date_of_birth, email, password, phone_no, gender, address, userId],
    (err, results) => {
      if (err) throw err;
      res.redirect("/users");
    }
  );
});

module.exports = router;


