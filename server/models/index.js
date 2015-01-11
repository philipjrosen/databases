var db = require('../db').dbConnection;


module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT message, username, createdAt, roomname FROM messages JOIN users ON messages.user_id=users.id JOIN rooms ON messages.room_id=rooms.id;', function(err, rows, fields) {
      if (err) throw (err);
      callback(rows);
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      db.query('INSERT INTO messages (message, user_id, createdAt, room_id) values ("' + message.message + '", 21, STR_TO_DATE("1-01-2012", "%d-%m-%Y"), 1);',
        function (err, results, fields) {
        if (err) throw err;
        else {
          callback();
        }
      });
      /*var user_id;
      module.exports.users.get(message, function(rows){
        if (rows.length){
          user_id = rows[0];
          console.log("user_id", user_id);
        }
      });
*/
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (name, callback) {
      db.query("SELECT id FROM users ON users.username='" + name.username + "';", function(err, rows, fields) {
      if (err) throw (err);
      callback(rows);
      });
    },
    post: function(user, callback) {
      db.query("INSERT INTO users (username) values ('" + user.username + "');",
        function (err, results, fields) {
        if (err) throw err;
        else {
          callback();
        }
      });
    }
  }
};



// console.log("username", rows[0].username);
// console.log("message", rows[0].message);
