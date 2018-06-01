var connection = require ("./connection");

// ?? for tableName or colName ; ? for specific cell in table
var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(tableName, dataObj, cb) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [tableName, dataObj], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(tableName, dataObjUpdate, valueName, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?? = ?";
        connection.query(queryString, [tableName, dataObjUpdate, valueName], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
}

module.exports = orm;