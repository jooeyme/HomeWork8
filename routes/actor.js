var express = require("express");
var router = express.Router();
var pool = require("../query.js");

// Route untuk menampilkan data list actor
router.get("/", (req, res) => {
    pool.query("SELECT * FROM actor", (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
    });
});

module.exports = router;