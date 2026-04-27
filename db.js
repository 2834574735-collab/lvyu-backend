// db.js - 数据库连接配置

const mysql = require('mysql2');

// 创建连接池（使用环境变量，支持云端部署）
const pool = mysql.createPool({
    host: process.env.MYSQLHOST || 'localhost',
    port: process.env.MYSQLPORT || 3306,
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || '',
    database: process.env.MYSQLDATABASE || 'lvyu',
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