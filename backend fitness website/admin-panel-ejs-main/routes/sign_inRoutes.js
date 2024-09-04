// Filename: sign_inRoutes.js
const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM sign_in", (err, results) => {
    if (err) throw err;
    console.log(results);
    res.render("indexSignIn", { data: results });
  });
});

router.post("/add", (req, res) => {
  const { name, email, password } = req.body;
  const insertQuery = `INSERT INTO sign_in (Name, Email, Password) VALUES (?, ?, ?)`;
  connection.query(
    insertQuery,
    [name, email, password],
    (err, results) => {
      if (err) throw err;
      res.redirect("/sign_in");
    }
  );
});

router.get("/delete/:id", (req, res) => {
  const userId = req.params.id;
  const deleteQuery = "DELETE FROM sign_in WHERE id = ?";
  connection.query(deleteQuery, [userId], (err, results) => {
    if (err) throw err;
    res.redirect("/sign_in");
  });
});

router.get("/edit/:id", (req, res) => {
  const userId = req.params.id;
  const selectQuery = "SELECT * FROM sign_in WHERE id = ?";
  connection.query(selectQuery, [userId], (err, results) => {
    if (err) throw err;
    res.render("editSignIn", { user: results[0] });
  });
});

router.post("/update/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;
  const updateQuery =
    "UPDATE sign_in SET Name = ?, Email = ?, Password = ? WHERE id = ?";
  connection.query(
    updateQuery,
    [name, email, password, userId],
    (err, results) => {
      if (err) throw err;
      res.redirect("/sign_in");
    }
  );
});


//code begins
router.post("/sign_in", (req, res) => {
  const { Email, Password } = req.body;
  console.log("sign_in");

  connection.query(
    "SELECT * FROM sign_in WHERE Email = ?",
    [Email],
    (err, results) => {
      if (err) {
        console.error("Error querying database:", err);
        return res.send("error");
      }

      const user = results[0];

      if (user && bcrypt.compareSync(Password, user.Password)) {
        req.session.user = user;
        req.session.save();
        console.log(req.session.cookie);

        res.send({ message: "success", user: user });
      } else {
        res.send({ message: "password dont match" });
      }
    }
  );
});

router.get("/sign_in", (req, res) => {
  try {
    // console.log(req.session.user);
    console.log(req.session.user);

    if (req.session.user) {
      res.send({ session: req.session.user });
    } else {
      res.send({ session: null });
    }
  } catch (error) {
    res.send(err);
  }
});

module.exports = router;
