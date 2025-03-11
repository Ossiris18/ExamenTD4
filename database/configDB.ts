import mysql from "mysql2"

const configDB = mysql.createConnection({
    host:"localhost",
    user:"ossiris",
    password:"admin",
    database:"productos"
})

export default configDB;