const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM company", (err, results) => {
    if (err) throw err;
    res.render("indexCompany", { data: results });
  });
});

router.post("/add", (req, res) => {
  const { company_name } = req.body;
  const insertQuery = `INSERT INTO company (company_name) VALUES (?)`;
  connection.query(
    insertQuery,
    [company_name],
    (err, results) => {
      if (err) throw err;
      res.redirect("/company");
    }
  );
});

router.get("/delete/:id", (req, res) => {
  const companyId = req.params.id;
  const deleteQuery = "DELETE FROM company WHERE company_id = ?";
  connection.query(deleteQuery, [companyId], (err, results) => {
    if (err) throw err;
    res.redirect("/company");
  });
});

router.get("/edit/:id", (req, res) => {
  const companyId = req.params.id;
  const selectQuery = "SELECT * FROM company WHERE company_id = ?";
  connection.query(selectQuery, [companyId], (err, results) => {
    if (err) throw err;
    res.render("editCompany", { company: results[0] });
  });
});

router.post("/update/:id", (req, res) => {
  const companyId = req.params.id;
  const { company_name } = req.body;
  const updateQuery =
    "UPDATE company SET company_name = ? WHERE company_id = ?";
  connection.query(
    updateQuery,
    [company_name, companyId],
    (err, results) => {
      if (err) throw err;
      res.redirect("/company");
    }
  );
});

module.exports = router;
