const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b0d1f863430ce0cff30d1c3';

if (!ObjectID.isValid(id)) {
    console.log('ID is not valid!');
} else {
    User.findById(id).then((user) => {
        if (!user) {
            return console.log('User not found');
        }
        console.log('User by id:', user);
    }).catch((e) => {
        console.log(e);
    });
};




// var id = '5b0e66827b5c5506b940a872';

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid!');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id:', todo);
// }).catch((e) => {
//     console.log(e);
// })