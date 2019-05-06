const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const getHot = require('./api/hotbook');
const getNew = require('./api/newbook');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/getHot', getHot);
app.use('/getNew', getNew);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');