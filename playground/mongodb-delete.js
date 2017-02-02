//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Creates a var from a property from the mongodb object : ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to db server.');
  }

  console.log('Successfully connected to mongodb server.');

  db.collection('Todos').findOneAndDelete({text: 'Eat Dinner'})
    .then((res) => {
      console.log('Deleted record: \n', res);
    });

  //db.close();
});
