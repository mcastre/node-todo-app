//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Creates a var from a property from the mongodb object : ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to db server.');
  }

  console.log('Successfully connected to mongodb server.');

  // db.collection('Todos')
  //   .find()
  //   .toArray()
  //   .then((docs) => {
  //     console.log('Todos collection:');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch Todos', err);
  //   });

    db.collection('Todos')
      .find()
      .count()
      .then((count) => {
        console.log(`Todos count: ${count}`);
      }, (err) => {
        console.log('Unable to fetch Todos', err);
      });

  //db.close();
});
