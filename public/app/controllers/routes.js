var todo = require('../models/todo');
let fileupload = require("express-fileupload");
module.exports = {
//
  configure: function(app) {

    app.post('/crawl/',function(req,res) {
      todo.crawl(req,res);
    });
    app.post("/AjoutPhoto", fileupload(), function (req, res) {
      todo.uploadPicture(
          req,
          res
      );
    })
  }
};
