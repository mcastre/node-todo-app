//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Creates a var from a property from the mongodb object : ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to db server.');
  }

  console.log('Successfully connected to mongodb server.');

  // db.collection('Todos')
  //   .findOneAndUpdate({
  //     _id: new ObjectID('58938d67c95f38db33009ecb')
  //   }, {
  //     $set: { completed: true }
  //   }, {
  //     returnOriginal: false
  //   })
  //   .then((res) => {
  //     console.log('Updated \n', res);
  //   });

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('58938fee9c04b141fb2af001')
    }, {
      $inc: { age: 1 }
    }, {
      returnOriginal: false
    })
    .then((res) => {
      console.log('Updated \n', res);
    });

  //db.close();
});
