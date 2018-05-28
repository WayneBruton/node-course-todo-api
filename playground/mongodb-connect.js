// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb'); // These two are the same

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');//Use return instead of else if
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo:', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });


    db.collection('Users').insertOne({
        name: 'Wayne',
        age: 52,
        location: 'Cape Town'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user:', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));

    });





    //mongodb v3 has changed: Please see lecture 63 14:16
    db.close();
});