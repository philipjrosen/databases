var db = require('../db').dbConnection;


module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT username, message, createdAt, roomname FROM messages JOIN users ON messages.user_id=users.id JOIN rooms ON messages.room_id=rooms.id;', function(err, rows, fields) {
      if (err) throw (err);
      callback(rows);
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

// console.log("username", rows[0].username);
// console.log("message", rows[0].message);

