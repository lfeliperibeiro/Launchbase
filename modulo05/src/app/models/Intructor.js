const db = require("../../config/db");
const { age, date } = require("../../lib/utils");

module.exports = {
  all(callback) {
    db.query(`SELECT * FROM instructors`, (err, results) => {
      if (err) res.send("Database error");

      callback(results.rows);
    });
  },

  create(data, callback) {
    const query = `
    INSERT INTO instructors(
      name,
      avatar_url,
      gender,
      services,
      birth,
      created_at
    )VALUES($1,$2,$3,$4,$5,$6)
    RETURNING id
    `;

    const values = [
      data.name,
      data.avatar_url,
      data.gender,
      data.services,
      date(data.birth).iso,
      date(Date.now()).iso,
    ];

    db.query(query, values, (err, results) => {
      if (err) res.send("Database error");

      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(
      `SELECT * FROM instructors WHERE id = $1`,
      [id],
      (err, results) => {
        if (err) res.send("DataBase error");

        callback(results.rows[0]);
      }
    );
  },
};
