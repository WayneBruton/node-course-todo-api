const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const userThreeId = new ObjectID();


const users = [
{
    _id: userOneId,
    email: 'wayne@wayne.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}, 
{
    _id: userTwoId,
    email: 'hazel@hazel.com',
    password: 'userTwoPass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}];


const todos = [{
    _id: new ObjectID(),
    text: 'First test todo',
    _creator: userOneId
},{
    _id: new ObjectID(),
    text: 'Second test todo',
    complete: true,
    completedAt: 333,
    _creator: userTwoId
},{
    _id: new ObjectID(),
    text: 'Third test todo',
    _creator: userThreeId
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};