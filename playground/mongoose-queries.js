const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5893a68ab2f3d1e144431b75';
var uid = '589396dbddb705c242b31bf1';

if (!ObjectID.isValid(id)) {
  console.log('ID is not valid.');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

Todo.findById(id)
  .then((todo) => {
    if (!todo) {
      return console.log('Could not find that id');
    }
    console.log('Todo by id: ', todo);
  })
  .catch((err) => console.log(err));


User.findById(uid)
  .then((user) => {
    if (!user) {
      return console.log('User not found.');
    }

    console.log('User: ', user);
  })
  .catch((err) => console.log(err));
