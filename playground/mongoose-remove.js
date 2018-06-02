const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => { //This removes all records
//     console.log(result);
// });

// Todo.findOneAndRemove() - find one and remove, you get the data back

// Todo.findByIdAndRemove() - as explained

Todo.findByIdAndRemove('5b12604490ee3aa9aa0f2e59').then((todo) => {
    console.log(todo);
});