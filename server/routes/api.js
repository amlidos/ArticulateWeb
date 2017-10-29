const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://admin:haveyouever@articulate-shard-00-00-ztzkw.mongodb.net:27017,articulate-shard-00-01-ztzkw.mongodb.net:27017,articulate-shard-00-02-ztzkw.mongodb.net:27017/ar?ssl=true&replicaSet=Articulate-shard-0&authSource=admin', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/speeches', (req, res) => {
    connection((db) => {
        db.collection('speech')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/recordings', (req, res) => {
    connection((db) => {
        db.collection('recording')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;