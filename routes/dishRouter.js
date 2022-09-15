const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
// const dishRouter1 = express.Router(); //just added

dishRouter.use(bodyParser.json());
// dishRouter1.use(bodyParser.json()); //just added

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dishes: '+ req.body.name + 
    ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end ('Deleting all the dishes');
    // next();//just added
});

dishRouter.route('/:disheId') //edddited
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    next();
})
.get((req, res, next) => {
    res.end('Will send the details of the dish ' + 
        req.params.dishId + 'to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/(/dishes/:dishId)');
})
.put((req, res, next) => {
    res.write('Updating the dish: ' + req.body.dishId);
    res.end('Will update the dish: ' + req.body.name + 
        ' with details: '+ req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting all the dish(/dishes/:dishId) : '+ req.params.dishId);
});

// dishRouter.route('/')
// .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('content-Type', 'text/html');
//     next();
// })
// .get((req, res, next) => {
//     res.end('Will send the details of the dish ' + 
//         req.params.dishId + 'to you!');
// })
// .post((req, res, next) => {
//     res.statusCode = 403;
//     res.end('POST operation not supported on /dishes/');
// })
// .put((req, res, next) => {
//     res.write('Updating the dish: ' + req.body.dishId);
//     res.end('Will update the dish: ' + req.body.name + 
//         ' with details: '+ req.body.description);
// })
// .delete('/dishes/:dishId', (req, res, next) => {
//     res.end('Deleting all the dish: '+ req.params.dishId);
// });

module.exports = dishRouter;