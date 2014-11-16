'use strict';
var util = require('util'),
    fs = require("fs"),
    path = require('path'),
    formidable = require('formidable');


exports.index=function(req,res){
    
    var myDate=new Date();
    var month=myDate.getMonth();
    var day=myDate.getDay();
    var uploadDir="./public/upload/"+month+"/"+day+"/";
    // mkdirs(uploadDir,to)


        var form = new formidable.IncomingForm();
        //获取当前日期作为目录
        form.uploadDir ="./public/upload/";
        form.keepExtensions = true;//保存后缀
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
            
        });
        form.on('error', function(err) {
            res.send(500,err);
        });

  

    return;
};
// 创建所有目录
var mkdirs = function(dirpath, mode, callback) {
    try{
        fs.exists(dirpath, function(exists) {
            if(exists) {
                    if(callback)callback(dirpath);
            } else {
                    //尝试创建父目录，然后再创建当前目录
                    mkdirs(path.dirname(dirpath), mode, function(){
                            fs.mkdir(dirpath, mode, callback);

                    });
            }
        });
    }
    catch (e) {
        console.log(e);

    }

};