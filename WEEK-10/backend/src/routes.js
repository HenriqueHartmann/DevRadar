const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//DevController Routes
routes.get('/devs/index', DevController.index);
routes.post('/devs/store', DevController.store);
routes.put('/devs/update', DevController.update);
routes.delete('/devs/delete', DevController.destroy);

//SearchController Routes
routes.get('/search', SearchController.index);

module.exports = routes;
