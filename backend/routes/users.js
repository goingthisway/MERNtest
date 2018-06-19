var express = require('express');
var router = express.Router();
//var userSearch = require('./myscript');

const oracledb = require('oracledb');

const config = {
  user: 'max',                // Update me
  password: 'Kennedy1',        // Update me
  connectString: 'localhost/XE'   // Update me
};

async function getUser() {
  let conn;

  try {
    conn = await oracledb.getConnection(config);

    const result = await conn.execute(
      `SELECT *
        FROM users`,
    );
    return result;
    console.log(result.rows[0]);
  } catch (err) {
    console.log('Ouch!', err);
  } finally {
    if (conn) { // conn assignment worked, need to close
       await conn.close();
    }
  }
}

async function createUser(name,pword) {
  let conn;
console.log(name);
console.log(pword);
  try {
    conn = await oracledb.getConnection(config);

    const result = await conn.execute(
      `INSERT INTO users(username, password)
       VALUES(name = :name, pword = :pword)`,
    [name, pword],
    );
    console.log("hi");
  } catch (err) {
    console.log('Ouch!', err);
  } finally {
    if (conn) { // conn assignment worked, need to close
       await conn.close();
    }
  }
}

// /* GET users listing. */
// router.get('/', function(req, res, next) {

//     res.json(["max"]);
// });

router.get('/', async (req, res, next) => {
  try {
    const result = await getUser();
    console.log(result)
    res.json(result);
  } catch (e) {
    next(e) 
  }
})

router.post('/' ,(req, res) => {
  try {
  	console.log(req.body.username);
console.log(req.body.password);
    createUser(req.body.username, req.body.password);
  } catch (e) {
    next(e) 
  }
})

module.exports = router;
