"use strict";

const args = require('./arguments');


// modules ---------------------------------------------------------------------
const fs = require("fs"),
      path = require('path');

const gulp = require('gulp');
const rename = require('gulp-rename');

const Win = require('./myModules/windows');
const win = new Win();



// 打开指定目录 ------------------------------------------------------------------
for(let dirName in args.od){
    gulp.task('od-'+dirName, function(){
        win.openDir(args.od[dirName]);
    });
}


// 打开指定文件 ------------------------------------------------------------------
for(let fileName in args.of){
    gulp.task('of-'+fileName, function(){
        win.openFile(args.of[fileName]);
    });
}


// 文件操作 ---------------------------------------------------------------------

// 从0开始对 indexRenamePic 文件夹中的文件以序号重命名
// 使用时要保证indexRenamePic文件夹中只有待重命名的文件
gulp.task('indexRenamePic', function(){
    let index = 0;
    gulp.src('tools/indexRenamePic/*.*')
        .pipe(rename(function(path){
            path.basename = index++;
        }))
        .pipe(gulp.dest('tools/indexRenamePic/renamed'));
});

// 获得 filenames 文件夹里所有文件的名字，生成 names.txt 文件中并写入获得的文件名
gulp.task('filenames', function(){
    let aNames = fs.readdirSync('tools/filenames/');
    aNames.forEach((name)=>{
        let basename = name.slice(0, name.indexOf('.'));
        fs.appendFileSync('tools/filenames/names.txt', basename + '\r\n');
    });
});

// 文件名加后缀
// 可以递归所有的子目录
gulp.task('addSuffix', function(){
    if(!args.addSuffix) return;
    gulp.src('tools/addSuffix/*.*')
        .pipe(rename(function(path){
            path.basename += args.addSuffix;
        }))
        .pipe(gulp.dest('tools/addSuffix/withSuffix'));
});
