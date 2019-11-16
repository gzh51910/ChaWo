//引入第三方模块
const express = require('express');
//引入Router模块
const Router = express.Router();
//引入mongodb数据库
const mongodb = require('../db/mongodb-me')
    //引入工具文件
const {
    formatData
} = require('../utils')

//列表页查询数据接口--左侧列表数据
Router.get('/find', async(req, res) => {
        let { page, size, sort } = req.query;
        let index = (page - 1) * size
            // mongodb查询数据库（1）
        let data = await mongodb.Find('GoodsAll', {}, { skip: index, limit: size, sort });
        res.send(formatData({
            data
        }))
    })
    //列表页增加商品数据接口--内容直接在响应体中获取
Router.post('/add', async(req, res) => {
        let {
            dwd,
            gc_name,
            brad_name,
            ImgMin,
            Title,
            Price,
            Juan,
            Xl,
            brand_id,
        } = req.body;

        let result = await mongodb.Create('GoodsAll', {
            dwd,
            gc_name,
            brad_name,
            ImgMin,
            Title,
            Price,
            Juan,
            Xl,
            brand_id,
        })

        if (result.insertedCount > 0) {
            res.send(formatData());
        } else {
            res.send(formatData({
                status: 0
            }));
        }
    })
    //删除
Router.delete('/del/:id', async(req, res) => {
        let {
            id
        } = req.params;
        // 查询数据库
        let result = await mongodb.Remove('GoodsAll', {
            _id: id
        });

        if (result.deletedCount > 0) {
            res.send(formatData())
        } else {
            res.send(formatData({
                status: 0
            }))
        }
    })
/* --------------------------------------------------------------------------------------------- */
//列表页查询数据接口--左侧列表数据
Router.get('/classify', async (req, res) => {
     // mongodb查询数据库（1）
     let data = await mongodb.Find('列表左侧', {});
     res.send(formatData({
         data
     }))
})



/* --------------------------------------------------------------------------------------------- */
    
    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
    //列表页修改商品数据接口--
Router.patch('/update/:id', async(req, res) => {
    let {
        id
    } = req.params;
    let {
        dwd,
        gc_name,
        brad_name,
        ImgMin,
        Title,
        Price,
        Juan,
        Xl,
        brand_id,
        nb
    } = req.body;
    let result = await mongodb.Update('GoodsAll', {
        _id: id
    }, {
        dwd,
        gc_name,
        brad_name,
        ImgMin,
        Title,
        Price,
        Juan,
        Xl,
        brand_id,
        nb
    });

    if (result.modifiedCount > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})

module.exports = Router