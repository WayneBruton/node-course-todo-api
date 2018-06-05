const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(password);
//         console.log('*****');
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$WULWKMdGfPo.fx0wcQWAEexg69WOpaa737BBliPcmm9fWjD1YJlGS';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res); // returns true or false
});











// var data = {
//     id: 10
// };

// var token = jwt.sign(data, 'My Secret');//codes
// console.log(token);

// var decoded = jwt.verify(token, 'My Secret');
// console.log('Decoded:',  decoded);


// var message = 'I am user number 4';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log('**********')
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed.');
// } else {
//     console.log('Data was changed, DO NOT TRUST!!');
// };
