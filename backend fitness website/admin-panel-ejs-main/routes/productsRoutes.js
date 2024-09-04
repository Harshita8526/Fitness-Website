const express = require("express");
const router = express.Router();
const connection = require("../utils/database");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    console.log(results);
    if (req.headers.accept && req.headers.accept.includes("application/json")) {
      res.send(results);
    }else{
      res.render("indexProducts", { data: results });
    }
    
  });
});

router.post("/add", (req, res) => {
  const { product_name, description, category, price, image } = req.body;
  console.log(image,"hello world jedje")
  const insertQuery = "INSERT INTO products (Product_Name, Description, Category, Price, image) VALUES (?, ?, ?, ?, ?)";
  connection.query(
    insertQuery,
    [product_name, description, category, price,image],
    (err, results) => {
      if (err) throw err;
      res.redirect("/products");
    }
  );
});

router.get("/delete/:id", (req, res) => {
  const productId = req.params.id;
  const deleteQuery = "DELETE FROM products WHERE Product_Id = ?";
  connection.query(deleteQuery, [productId], (err, results) => {
    if (err) throw err;
    res.redirect("/products");
  });
});

router.get("/edit/:id", (req, res) => {
  const productId = req.params.id;
  const selectQuery = "SELECT * FROM products WHERE Product_Id = ?";
  connection.query(selectQuery, [productId], (err, results) => {
    if (err) throw err;
    res.render("editProducts", { product: results[0] });
  });
});

router.post("/update/:id", (req, res) => {
  const productId = req.params.id;
  const { product_name, description, category, price,image } = req.body;
  const updateQuery =
    "UPDATE products SET Product_Name = ?, Description = ?, Category = ?, Price = ?, image=? WHERE Product_Id = ?";
  connection.query(
    updateQuery,
    [product_name, description, category, price,image, productId],
    (err, results) => {
      if (err) throw err;
      res.redirect("/products");
    }
  );
});

module.exports = router;
