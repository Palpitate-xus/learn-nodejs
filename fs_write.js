const fs = require('fs')

// 参数：路径，写入内容，[编码],回调函数

fs.writeFile('test.txt', "Hello Node.js!", 'utf-8', function (err) {
    console.log(err);  // 写入文件成功则为null，写入失败则为错误对象
})

fs.writeFile('test.txt', "Hello Node.js!", 'utf-8', function (err) {
    if (err) {
        return console.log('文件写入失败' + err.message);
    }
    console.log('文件写入成功');
})