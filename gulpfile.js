var gulp = require('gulp'),
    dir = require("./webpack-config/base/dir-vars.config"),
    runSequence = require('run-sequence'),
    vfs  = require('vinyl-fs'),
    rm  = require('gulp-rm'),
    sftp  = require('gulp-sftp');
const dir_test = "/path";
//测试服务器
gulp.task('ftp_test', function () {
    var globs = ["./path"]
    var temp = vfs.src(globs,{buffer: false });
    temp.pipe(sftp({
        host:'host',
        user:"root",
        pass:"pass",
        remotePath:dir_test,
        callback:function () {
            temp.pipe(rm());
        }
    }) );
});
gulp.task('publish_tset', function (callback) {
    runSequence("ftp_tset",callback);
});