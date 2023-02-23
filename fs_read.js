const fs = require('fs')

fs.readFile("./hello world.js", 'utf-8', function(err, dataStr) {
    console.log(err);  // 如果读取成功则为null，读取失败则为错误对象
    console.log('-----');
    console.log(dataStr);  // 读取成功的结果，读取错误则为undefined
} )

fs.readFile("./hello world.js", 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败' + err.message);
    }
    console.log('读取文件成功' + dataStr);
} )
