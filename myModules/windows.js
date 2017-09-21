'use strict';

const CP = require('child_process');

function Win(){

}

Win.prototype = {
    constructor: Win,
    openFile(sFile){
        CP.exec(sFile);
    },
    openDir(sDir){
        CP.exec('start "" ' +sDir);
    }
};

module.exports = Win;
