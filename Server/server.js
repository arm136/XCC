import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Axios from 'axios';
import multer from "multer";
import path from "path";
import bodyParser from "body-parser";




// Create Express app
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Middleware
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET", "PUT"],
        credentials: true
    }
));


// Session middleware
// app.use(
//     session({
//         secret: "mysecretkey",
//         resave: false,
//         saveUninitialized: true,
//         cookie: { secure: false },
//     })
// );

// Create MySQL connection
const con = mysql.createConnection({
    host: "db4free.net",
    user: "amanrohit",
    password: "amanrohit@123",
    database: "codingclub",
    port: 3306

})


// Connect to MySQL
con.connect(function (err) {
    if (err) {
        console.log("Error in Connection", err);
    } else {
        console.log("Connected to Database");
    }
})

/// Jwt token verifying user
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "You are not Authenticated" });
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return res.json({ Error: "Token wrong" });
            req.role = decoded.role;
            req.id = decoded.id;
            next();
        })
    }
}


// ********* Verifying User pages****************
app.get('/Resources', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})

app.get('/Playground', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})

app.get('/Discussion', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})

app.get('/Profile/:id', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})
// *********End of user page verification**********


// ********* Verifying Admin pages************

// app.get('/aresources', verifyUser, (req, res) => {
//     return res.json({ Status: "Success", role: "admin" , id: req.id })
// })

app.get('/admin', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})

app.get('/adminmanageusers', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})

app.get('/adminevents', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})

app.get('/adminresources', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})

app.get('/adminteams', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})

app.get('/admingallery', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})

app.get('/adminAddEvents', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})

app.get('/adminresources', verifyUser, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id })
})





// app.get('/teams', verifyUser, (req, res) => {
//     return res.json({ Status: "Success", role: "user", id: req.id })
// })

// app.get('/manageusers', verifyUser, (req, res) => {
//     return res.json({ Status: "Success", role: "admin", id: req.id })
// })

// app.get('/adevents', verifyUser, (req, res) => {
//     return res.json({ Status: "Success", role: req.role, id: req.id })
// })
// ***************************************




//User Login verification
app.post('/Login', (req, res) => {
    const sql = "SELECT * FROM users Where email = ? AND  password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Your Query is Wrong" });
        if (result.length > 0) {
            const id = result[0].id;
            const token = jwt.sign({ role: "user", id: result[0].id }, "jwt-secret-key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: "Success", id: result[0].id })
        } else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
    })
})


//Admin Lgoin Verificaion
app.post('/AdLogin', (req, res) => {
    const sql = "SELECT * FROM admin Where email = ? AND  password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Your Query is Wrong" });
        if (result.length > 0) {
            const id = result[0].id;
            const token = jwt.sign({ role: "admin", id: result[0].id }, "jwt-secret-key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: "Success", id: result[0].id })
        } else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
    })
})

// Logout endpoint
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ Status: "Success" });
})

// Protected endpoint
app.get("/protected", (req, res) => {
    // Check if user is authenticated
    if (!req.session.userId) {
        res.write("Unauthorized")
        return res.status(401).json({ message: "Unauthorized" });
    }


    // Return protected data
    return res.status(200).json({ message: "Protected data" });

});

// ***************PDF for Users*********************

app.get('/resources/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT file FROM resources WHERE id = ?';

    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error retrieving PDF' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'PDF not found' });
        }

        const pdfData = result[0].files;

        res.contentType('application/pdf');
        res.send(pdfData);
    });
});

//**************************************
app.post("/compile", (req, res) => {
    //getting the required data from the request
    let code = req.body.code;
    let language = req.body.language;
    let input = req.body.input;

    if (language === "python") {
        language = "py"
    }

    let data = ({
        "code": code,
        "language": language,
        "input": input
    });
    let config = {
        method: 'post',
        url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    //calling the code compilation API
    Axios(config)
        .then((response) => {
            res.send(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
})

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });

// *********************USER***************************
app.get("/uprofile/:id", (req, res) => {
    const id= req.params.id;
    const sql = "SELECT * FROM users WHERE id= ?";
    con.query(sql,[id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get resources error" });
        } 
            console.log("profile");
            return res.status(200).json({ Status: "profile", Result: result });
        
    });
});
// ****************************************************

// ******************ADMIN****************************
//Admin server code form  file upload (mutler)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/pdf");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});
const upload = multer({
    storage: storage,
});

// **********Admin Profile**********
app.get("/aprofile/:id", (req, res) => {
    const id= req.params.id;
    const sql = "SELECT * FROM admin WHERE id= ?";
    con.query(sql,[id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get resources error" });
        } 
            console.log("aprofile");
            return res.status(200).json({ Status: "aprofile", Result: result });
        
    });
});

// APIs FOR Resources
app.get("/aresources", (req, res) => {
    const sql = "SELECT * FROM resources";
    con.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get resources error" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success", Result: result });
        }
    });
});

app.delete("/deleteResources/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM resources WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get resources error" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success", Result: result });
        }
    });
});

app.post("/addresources", upload.single("file"), (req, res) => {
    const sql = "INSERT INTO resources (`id`,`title`,`file`) values (?)";

    const values = [req.body.id, req.body.title, req.file.filename];
    con.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Inside file query" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success" });
        }
    });
});

// APIs FOR Events
app.post("/addevents", upload.single("file"), (req, res) => {
    const sql = "INSERT INTO events(`id`,`date`,`event`,`contact`) values (?)";

    const values = [req.body.id, req.body.date, req.body.event, req.body.contact];
    con.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Inside file query" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success" });
        }
    });
});

app.get("/adevents", (req, res) => {
    const sql = "SELECT * FROM events";
    con.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get resources error" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success", Result: result });
        }
    });
});

app.delete("/deleteEvents/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM events WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get resources error" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success", Result: result });
        }
    });
});

// APIs for Teams
app.post("/addteams", upload.single("image"), (req, res) => {
    const sql =
        "INSERT INTO teams(`id`,`image`,`name`,`title`,`email`,`mobile`,`linkdin`) VALUES (?)";

    const values = [
        req.body.id,
        req.file.filename,
        req.body.name,
        req.body.title,
        req.body.email,
        req.body.mobile,
        req.body.linkdin,
    ];
    con.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Inside file query" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success" });
        }
    });
});

app.get("/teams", (req, res) => {
    const sql = "SELECT * FROM teams";
    con.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get resources error" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success", Result: result });
        }
    });
});

//   app.delete("/deleteTeams/:id", (req, res) => {
//     const id = req.params.id;
//     const sql = "DELETE FROM teams WHERE id = ?";
//     con.query(sql, [id], (err, result) => {
//       if (err) {
//         console.error(err);
//         return res.status(400).json({ Error: "Get resources error" });
//       } else {
//         console.log("deleted");
//         return res.status(200).json({ Status: "deleted", Result: result });
//       }
//     });
//   });
app.delete("/deleteTeams/:id", (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ Error: "Invalid ID provided" });
    }

    const sql = "DELETE FROM teams WHERE id = ?";

    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Failed to delete team" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ Error: "Team not found" });
        }

        console.log("Success");
        return res.status(200).json({ Status: "deleted", Result: result });
    });
});


// APIs for Gallery
app.post("/addgallery", upload.single("image"), (req, res) => {
    const sql =
        "INSERT INTO gallery(`id`,`image`,`description`,`date`) VALUES (?)";

    const values = [
        req.body.id,
        req.file.filename,
        req.body.description,
        req.body.date,
    ];
    con.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Inside file query" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success" });
        }
    });
});

app.get("/gallery", (req, res) => {
    const sql = "SELECT * FROM gallery";
    con.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get gallery error" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success", Result: result });
        }
    });
});

app.delete("/deleteGallery/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM gallery WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get gallery error" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success", Result: result });
        }
    });
});

// APIs for Users
app.post("/addusers", upload.single("image"), (req, res) => {
    const sql =
        "INSERT INTO users(`id`,`image`,`name`,`roll`,`mobile`,`email`,`password`) VALUES (?)";

    const values = [
        req.body.id,
        req.file.filename,
        req.body.name,
        req.body.roll,
        req.body.mobile,
        req.body.email,
        req.body.password,
    ];
    con.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Inside file query" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success" });
        }
    });
});

app.get("/manageusers", (req, res) => {
    const sql = "SELECT * FROM users";
    con.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get resources error" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success", Result: result });
        }
    });
});

app.delete("/deleteUsers/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM users WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Error: "Get resources error" });
        } else {
            console.log("success");
            return res.status(200).json({ Status: "success", Result: result });
        }
    });
});


// Start server
app.listen(8081, () => {
    console.log("Running");
})