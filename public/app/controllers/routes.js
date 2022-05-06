var todo = require('../models/todo');

module.exports = {
//
  configure: function(app) {

    app.post('/crawl/',function(req,res) {
      todo.crawl(req,res);
    });
  }
};
