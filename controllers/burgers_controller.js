var express = require("express");
var burger = require("../models/burger");

// Router() contains all of the api routes
var router = express.Router();

// GET route to get all the burgers
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burger: data });
    });
});

// POST route to create a new burger
router.post("/burgers/new", function(req, res) {
    burger.insertOne(req.body, function(data) {
        console.log(data);
        res.redirect("/");
    });
});

// PUT route to update a burger from not devoured to devoured
router.put("/burgers/:id", function(req, res) {
    burger.updateOne({devoured : 1}, req.params.id, function(data) {
        console.log(data);
        res.redirect("/");
    });
});

module.exports = router;
