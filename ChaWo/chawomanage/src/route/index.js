const express = require('express');
const token= require('../tools/token');
let Router = express.Router();

let miaoshaRouter = require('./login');

Router.use((req,res,next)=>{
    // 支持CORS跨域，只需要设置响应头
    // res.header('Access-Control-Allow-Origin','*');
    let currentOrigin = req.get('Origin');
    let allowOrigin = ['http://localhost:8080','http://localhost:8081']
    if(allowOrigin.includes(currentOrigin)){
        res.set({
            'Access-Control-Allow-Origin':currentOrigin,
            'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,OPTIONS',
            'Access-Control-Allow-HEADERS':"Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
        })
        
    }
    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
})
// 格式化请求体中的参数
Router.use(express.json(),express.urlencoded());

Router.use('/miaosha',miaoshaRouter);
Router.get('/verify',(req,res)=>{
    // 获取请求头上的token
    let Authorization = req.get('Authorization');
    console.log(Authorization);
    if(token.verify(Authorization)){
        res.send({id:Authorization.id,code:1})
    }else{
        res.send({code:0})
    }
})
// 必须导出（暴露）一个中间件
module.exports = Router;