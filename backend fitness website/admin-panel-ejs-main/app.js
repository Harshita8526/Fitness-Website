const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const connection = require("./utils/database");
const usersRoutes = require("./routes/usersRoutes");
const contactusRoutes = require("./routes/contactusRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const productsRoutes = require("./routes/productsRoutes");
const instructorsRoutes = require("./routes/instructorsRoutes");
const sign_inRoutes=require("./routes/sign_inRoutes");
const aboutRoutes=require("./routes/aboutRoutes");

const app = express();
const cors = require("cors");
app.use(express.json());

connection.connect((err) => {
  if (err) throw err;
  console.log("connected to database");
});

const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { sameSite: "strict", secure: false },
  })
);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRoutes);
app.use("/contactus", contactusRoutes);
app.use("/enrollment", enrollmentRoutes);
app.use("/products", productsRoutes);
app.use("/instructors", instructorsRoutes);
 app.use("/sign_in",sign_inRoutes);
 app.use("/about",aboutRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  let sql = 'SELECT * FROM sign_in WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (result.length > 0) {
      res.send({ msg: 'Login successful' });
    } else {
      res.send({ msg: 'Login Failure' });
    }
  });
});


app.get('/api/products', (req, res) => {
    const sql = 'SELECT * FROM products';
  
    connection.query(sql, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      res.json(results);
    });
  });
app.listen(8000, () => {
  console.log("app running on port 8000");
});




app.post('/signup_submit', function(req, res){
  try {
      var {email, pass, name} = req.body;
      console.log('Received signup request:', name, email, pass);
      let sqlcheck = "select * from sign_in where email = '" + email + "'";
      connection.query(sqlcheck, function(err, result, fields){
          if(err)
              throw err;
          if(result.length > 0){
              req.session.msg = "Account with this email already exists"
             
              res.status(401).send({ message: 'Account with this email already exists' });
          }
          else{
              let sql = "insert into sign_in(email, password, name) values ( '" + email + "', '" + pass + "', '" + name + "');"
              console.log(sql);
              connection.query(sql, function(err1, result1, fields1){
                  if(err1)
                      throw err1;
                  else{
                      console.log("User Created");

                      let sqlquery = "select * from sign_in where email = '" + email + "' and password='" + pass + "'";
                      console.log(sqlquery);
                      connection.query(sqlquery, function(err, result, fields){
                          if(err)
                              throw err;
                          
                          else{
                              req.session.uid = result[0].userid;
                              req.session.msg = null;
                              
                              res.status(200).send({ message: `User created with email: ${email} `});
                          }
                      })
                  }
              })
          }
      })

  } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).send({ message: 'Internal Server Error' });
  }
  
})