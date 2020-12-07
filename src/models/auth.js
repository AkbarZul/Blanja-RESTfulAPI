const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../configs/mySQL");

module.exports = {
    postNewUser: (body) => {
        return new Promise((resolve, reject) => {
            const saltRound = 10;
            bcrypt.genSalt(saltRound, (err, salt) => {
                if(err) {
                    reject(err);
                }
                bcrypt.hash(body.password, salt, (err, hashedPassword) => {
                    if(err) {
                        reject(err);
                    }
                    const newBody = {...body, password: hashedPassword};
                    const qs = "INSERT INTO users SET ?"
                    db.query(qs, newBody, (err, data) => {
                        if(!err) {
                            resolve(data);
                        } else {
                            reject(err);
                        }
                    });
                });
            });
        });
    },

    postLogin: (body) => {
        return new Promise((resolve, reject) => {
            const { username, password } = body;
            const qs = "SELECT password, level_id FROM users WHERE username = ?";
            db.query(qs, username, (err, data) => {
                if (err) {
                    reject({
                        msg: "Error SQL",
                        status: 500,
                        err,
                    });
                } 
                if(!data[0]) {
                    reject({
                        msg: "user tidak ditemukan",
                        status: 404,
                    });
                } else {
                    bcrypt.compare(password, data[0].password, (err, result) => {
                        if(err) {
                            reject({
                                msg: "error",
                                status: 500,
                                err,
                            });
                        }
                        if(!result) {
                            reject({
                                msg: "passwordnya salah",
                                status: 401,
                            });
                        } else {
                            const payload = {
                                username,
                                level: data[0].level_id,
                            }
                            const secret = process.env.SECRET_KEY;
                            const token = jwt.sign(payload, secret);
                            resolve({ token });
                        }
                       
                    })
                }
                
            });
        })
    }
}

// {
//     "username": "Akbar123",
//     "password": "gantengsekali"
// }

// {
//     "username": "winteriscoming",
//     "password": "mantapsss123"
// }

// SELECT users.id, users.username, levels.level FROM `users` JOIN levels ON users.level_id = levels.id

// {
//     "username": "winter",
//     "password": "mantapsss123",
//     "level_id": 2
// }

