//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Creates a var from a property from the mongodb object : ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to db server.');
  }

  console.log('Successfully connected to mongodb server.');

  // db.collection('Todos').insertOne({
  //   text: 'Make Dinner',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to add record.', err);
  //   }
  //   console.log('Added new record. \n', JSON.stringify(res.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Jennifer Castre',
    age: 29,
    location: 'Birmingham, AL'
  }, (err, res) => {
    if (err) {
      return console.log('Unable to add user record.', err);
    }
    console.log('Added new user record. \n', JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
  });

  db.close();
});
