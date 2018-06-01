var orm = require("../config/orm");

var burger = {
    // don't need tableName because we're defining it in orm.method()
    // cb comes burgers_controller.js
    selectAll: function(cb) {
        orm.selectAll("burgers", cb); // cb comes from orm.js
    },
    insertOne: function(dataObj, cb) {
        orm.insertOne("burgers", dataObj, cb);
    },
    updateOne: function(dataObjUpdate, valueName, cb) {
        orm.updateOne("burgers", dataObjUpdate, valueName, cb);
    }
};

module.exports = burger;