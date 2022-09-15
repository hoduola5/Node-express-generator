const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promo: '+ req.body.name + 
    ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end ('Deleting all the promotions');
    // next();//just added
});

promoRouter.route('/:promoId') //edddited
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the details of the promotions ' + 
        req.params.promoId + 'to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/');
})
.put((req, res, next) => {
    res.write('Updating the promotions: ' + req.body.promoId);
    res.end('Will update the promotions: ' + req.body.name + 
        ' with details: '+ req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting all the promotions (/promotions/:promoId) : '+ req.params.promoId);
});


module.exports = promoRouter;