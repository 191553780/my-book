const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const getHot = require('./api/hotbook');
const getNew = require('./api/newbook');
const getRank = require('./api/rank');
const getRankFree = require('./api/rankFree');
const getRankEnd = require('./api/rankEnd');
const getItemBook = require('./api/itemBook');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/getHot', getHot);
app.use('/getNew', getNew);
app.use('/getRank', getRank);
app.use('/getRankFree', getRankFree);
app.use('/getRankEnd', getRankEnd);
app.use('/getItemBook', getItemBook);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');