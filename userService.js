const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('nodenew.db');

module.exports.getDataFromDBService = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users';
    db.all(query, [], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports.createUserDBService = (userDetails) => {
  return new Promise((resolve, reject) => {
    const { name, address, phone } = userDetails;
    const query = 'INSERT INTO users (name, address, phone) VALUES (?, ?, ?)';
    db.run(query, [name, address, phone], function (error) {
      if (error) {
        reject(error);
      } else {
        resolve({ id: this.lastID, name, address, phone });
      }
    });
  });
};
