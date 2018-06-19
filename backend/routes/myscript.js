const oracledb = require('oracledb');

const config = {
  user: 'max',                // Update me
  password: 'Kennedy1',        // Update me
  connectString: 'localhost/XE'   // Update me
};

async function getUser(name) {
  let conn;

  try {
    conn = await oracledb.getConnection(config);

    const result = await conn.execute(
      `SELECT username, password
        FROM users
        WHERE username= :name`,
        [name]
    );

    console.log(result.rows[0]);
  } catch (err) {
    console.log('Ouch!', err);
  } finally {
    if (conn) { // conn assignment worked, need to close
       await conn.close();
    }
  }
}