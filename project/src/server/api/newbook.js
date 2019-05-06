var mongo = require('../mongoMap')

var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
	mongo.getDB((db)=>{
		var dbo = db.db('h5')
		dbo.collection("book"). find({"progress" : "连载中"}).limit(3).toArray(function(err, result) { // 返回集合中所有数据
			if (err) throw err;
			res.send(result);
		});
	})
});
module.exports = router;