var express = require("express");
var router = express.Router();
var pool = require("../query.js");

// Route untuk menampilkan data list category
router.get("/", (req, res) => {
    pool.query("SELECT * FROM category", (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
    });
});

module.exports = router;