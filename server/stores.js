var db = require('./pghelper'),
    winston = require('winston');

/**
 * Get a list of stores
 * @param req
 * @param res
 * @param next
 */

// ********************************************
// A BUG HAS BEEN INTRODUCED on purpose to demonstrate Heroku flow
// DELETE WHERE name = 'bug' in the SELECT QUERY below to fix the bug
// ********************************************


function findAll(req, res, next) {
    db.query("SELECT id, name, location__latitude__s AS latitude, location__longitude__s AS longitude FROM salesforce.store__c WHERE name = 'bug'")
        .then(function (stores) {
            return res.send(JSON.stringify(stores));
        })
        .catch(next);
};

exports.findAll = findAll;
