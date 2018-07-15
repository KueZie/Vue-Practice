(() => {
    const MongoClient = require('mongodb').MongoClient;
    const config = {
        pass: '(gNN(Re)TEVH8+V64H8^jUv9f_D5+_Vx',
        url: () => {
            
        }
    };

    module.exports.connection = (callback) => {
        MongoClient.connect(url, callback);
    };


})