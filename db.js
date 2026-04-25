// db.js - 数据库连接配置

const mysql = require('mysql2');

// 创建连接池
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'WenWen2005',        // 你的密码是空的，所以留空
    database: 'lvyu',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 测试连接
pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ 数据库连接失败:', err.message);
    } else {
        console.log('✅ 数据库连接成功！');
        connection.release();
    }
});

// 导出 Promise 版本的连接池
const promisePool = pool.promise();
module.exports = promisePool;