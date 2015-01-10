var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data){
        res.json({results: data});
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(){
        res.send("success");
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      var user = req.body;
      models.users.post(user, function() {
        res.send("success");
      });
    }
  }
};

