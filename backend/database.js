const Datastore = require('nedb');
const path = require('path');

// Create NeDB datastores
const db = {
  users: new Datastore({ filename: path.join(__dirname, 'data/users.db'), autoload: true }),
  programs: new Datastore({ filename: path.join(__dirname, 'data/programs.db'), autoload: true }),
  workouts: new Datastore({ filename: path.join(__dirname, 'data/workouts.db'), autoload: true }),
  exercises: new Datastore({ filename: path.join(__dirname, 'data/exercises.db'), autoload: true }),
  trainers: new Datastore({ filename: path.join(__dirname, 'data/trainers.db'), autoload: true }),
  recipes: new Datastore({ filename: path.join(__dirname, 'data/recipes.db'), autoload: true }),
  progress: new Datastore({ filename: path.join(__dirname, 'data/progress.db'), autoload: true })
};

// Promisify NeDB methods
const promisify = (db, method) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      db[method](...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
};

// Create helper functions
const dbHelpers = {
  find: (collection, query = {}) => promisify(db[collection], 'find')(query),
  findOne: (collection, query) => promisify(db[collection], 'findOne')(query),
  insert: (collection, doc) => promisify(db[collection], 'insert')(doc),
  update: (collection, query, update, options = {}) => promisify(db[collection], 'update')(query, update, options),
  remove: (collection, query, options = {}) => promisify(db[collection], 'remove')(query, options)
};

module.exports = { db, dbHelpers };
