module.exports = function (app, db) {
    return {
        get: function () {
            return new Promise(function (fulfill, reject) {
                db.loadDatabase({}, function () {
                    try {
                        var employees = db.getCollection('employees');
                        fulfill(employees);
                    } catch (ex) {
                        reject(ex);
                    }
                })
            });
        },
        getById: function (id) {
            return new Promise(function (fulfill, reject) {
                db.loadDatabase({}, function () {
                    try {
                        var employees = db.getCollection('employees');
                        var emp = employees.findOne({id: id });
                        fulfill(emp);
                    } catch (ex) {
                        reject(ex);
                    }
                })
            });

        },
        post: function (emp) {
            return new Promise(function (fulfill, reject) {
                db.loadDatabase({}, function () {
                    try {
                        var employees = db.getCollection('employees');
                        employees.insert(emp);
                        db.saveDatabase();
                        fulfill(employees);
                    } catch (ex) {
                        reject(ex);
                    }
                })
            });
        },
        delete: function () {
            return new Promise(function (fulfill, reject) {
                db.loadDatabase({}, function () {
                    try {
                        var employees = db.getCollection('employees');
                        employees.removeDataOnly({id: req.params.id});
                        db.saveDatabase();
                        fulfill(employees);
                    } catch (ex) {
                        reject(ex);
                    }
                })
            });
        }
    }
};