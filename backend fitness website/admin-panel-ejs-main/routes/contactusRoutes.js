const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM contactus", (err, results) => {
    if (err) throw err;
   
    if (req.headers.accept && req.headers.accept.includes("application/json")) {
      res.send(results);
    }
    else{
      res.render("indexContactus", { data: results });
    }
    
  });
});

router.post("/add", (req, res) => {
  const { Name, Email, Message } = req.body;
  
  const insertQuery = `INSERT INTO contactus (Name, Email, Message) VALUES (?, ?, ?)`;
  connection.query(
    insertQuery,
    [Name, Email, Message],
    (err, results) => {
      if (err) throw err;
      res.redirect("/contactus");
    }
  );
});

router.get("/delete/:id", (req, res) => {
  const messageId = req.params.id;
  const deleteQuery = "DELETE FROM contactus WHERE Message_Id = ?";
  connection.query(deleteQuery, [messageId], (err, results) => {
    if (err) throw err;
    res.redirect("/contactus");
  });
});

router.get("/edit/:id", (req, res) => {
  const messageId = req.params.id;
  const selectQuery = "SELECT * FROM contactus WHERE Message_Id = ?";
  connection.query(selectQuery, [messageId], (err, results) => {
    if (err) throw err;
    res.render("editContactus", { message: results[0] });
  });
});

router.post("/update/:id", (req, res) => {
  const messageId = req.params.id;
  const {  name, email, message } = req.body;
  const updateQuery =
    "UPDATE contactus SET  Name = ?, Email = ?, Message = ? WHERE Message_Id = ?";
  connection.query(
    updateQuery,
    [ name, email, message, messageId],
    (err, results) => {
      if (err) throw err;
      res.redirect("/contactus");
    }
  );
});

module.exports = router;
