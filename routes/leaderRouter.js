const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leaders: '+ req.body.name + 
    ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end ('Deleting all the leaders');
    // next();//just added
});

leaderRouter.route('/:leaderId') //edddited
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the details of the leader ' + 
        req.params.leaderId + 'to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/');
})
.put((req, res, next) => {
    res.write('Updating the leaders: ' + req.body.leaderId);
    res.end('Will update the leaders: ' + req.body.name + 
        ' with details: '+ req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting all the leaders (/leaders/:leaderId) : '+ req.params.leaderId);
});


module.exports = leaderRouter;