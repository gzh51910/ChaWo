const { MongoClient, ObjectId } = require('mongodb');

// 连接MongoDB数据库
const { dbUrl, dbName } = require('../config.json');

async function connect() {
    const client = await MongoClient.connect(dbUrl, { useUnifiedTopology: true })
    const db = client.db(dbName);
    return { client, db }
}

//查询相关的数据
async function Find(colName, query = {}, options = {}) {
    let { fields, limit } = options;
    let { db, client } = await connect();

    // 集合或文档操作
    // 获取集合
    let collection = db.collection(colName);

    // 处理id查询
    if (query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }

    let result = await collection.find(query, { fields })
        // 限制数量
    if (limit) {
        result = result.limit(limit * 1)
    }
    result = result.toArray()

    // 在操作完成后，需要关闭数据库连接，释放资源占用
    client.close();

    return result;
}

//增加相关的数据
async function Create(colName, data) {
    const { db, client } = await connect();

    let collection = db.collection(colName);

    // 判断传入的Data是否为数组
    if (!Array.isArray(data)) {
        data = [data]
    }

    let result = await collection.insertMany(data);

    client.close();

    return result;
}

//删除指定数据
async function Remove(colName, query) {
    const { db, client } = await connect();
    let collection = db.collection(colName);

    if (query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }

    let result = await collection.deleteMany(query);

    client.close();

    return result
}
//更新指定数据
async function Update(colName, query, data) {
    const { db, client } = await connect();
    let collection = db.collection(colName);


    if (query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }


    let result = await collection.updateMany(query, { $set: data });

    client.close();
    return result;
}
module.exports = {
    Find,
    Create,
    Remove,
    Update
}