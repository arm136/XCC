import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());


// Create MySQL connection
const con = mysql.createConnection({
  host: "db4free.net",
  user: "amanrohit",
  password: "amanrohit@123",
  database: "codingclub",
  port:3306

})


// Connect to MySQL
con.connect(function(err){
    if(err) {
        console.log("Error in Connection", err);
    }  else {
        console.log("Connected to Database");
    }
})


//Login Validation
// app.post('/login', (req,res) => {
//     const sql ="Select * FROM users Where email= ? AND password = ?";
//     con.query(sql, [req.body.username, req.body.pass], (err, result) => {
//         if(err){
//             return res.json({Status: "Error in the Server"})
//         } 
//         if(result.length > 0) {
//             return res.json({Status: "Success"})
//         } else {
//             return res.json({Status: "Error in the Server"})
//         }
//     })
// })

// Start server
app.listen(8081, () => {
    console.log("Running");
})