"use strict";

const fs = require("fs"),
      path = require('path');

const gulp = require('gulp');

const Win = require('./myModules/windows');


// 打开指定目录
gulp.task('od-www', function(){
    let win = new Win();
    win.openDir('E:\\lining\\WWW');
});
gulp.task('od-gits', function(){
    let win = new Win();
    win.openDir('E:\\lining\\WWW\\gits');
});
gulp.task('od-test', function(){
    let win = new Win();
    win.openDir('E:\\lining\\WWW\\test');
});
gulp.task('od-cs', function(){
    let win = new Win();
    win.openDir('E:\\lining\\WWW\\CS');
});
gulp.task('od-2017', function(){
    let win = new Win();
    win.openDir('E:\\lining\\WWW\\Funca\\FuncaProjects\\2017');
});
gulp.task('od-d', function(){
    let win = new Win();
    win.openDir('D:');
});


// 打开指定文件
gulp.task('of-ftp', function(){
    let win = new Win();
    win.openFile('E:\\lining\\WWW\\8UFTP.exe');
});


//
