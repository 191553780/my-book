var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId
var url = 'mongodb://localhost:27017/h5'// 数据库地址
 
module.exports = {
    getDB: function (callback) {
        MongoClient.connect(url, {useNewUrlParser:true},  function (err, db) {
            callback(db) 
        })
    },
	ObjectId:ObjectId
}