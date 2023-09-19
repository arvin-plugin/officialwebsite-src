const db = require("./db_config");
const sql = `INSERT INTO products(id, product) VALUES ('1','Arvin GA-1')`;

db.query(sql, function (err,result) {
    if(err) throw err;
    console.log("1 record inserted");
});