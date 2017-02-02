module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('default 1s')
    });
    app.get('/about', function (req, res) {
        res.send('holla');
    });
};