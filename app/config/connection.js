var mysql = require('mysql');

function Connection() {
  
  this.pool = mysql.createPool({
      
    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    connectionLimit:10,
    multipleStatements:true,
    database:"jeu"
     //mysql connection pool length
  //  database: "todo"
    
});

  this.init = function() {
    this.pool = mysql.createPool({
      
        host:"localhost",
        port:"3306",
        user:"root",
        password:"",
        connectionLimit:10,
        multipleStatements:true,
        database:"jeu"
         //mysql connection pool length
      //  database: "todo"
        
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      console.log(err);
      callback(err, connection);

    });
  };
}

module.exports = new Connection();
