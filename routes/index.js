const newRoute = require('./news');

function route(app) {
    app.use('/', newRoute);
}

module.exports = route;