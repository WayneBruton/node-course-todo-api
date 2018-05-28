// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb'); // These two are the same

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');//Use return instead of else if
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').find({name: 'Wayne'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count} `);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    //mongodb v3 has changed: Please see lecture 63 14:16
    db.close();
});