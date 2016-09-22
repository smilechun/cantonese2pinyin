'use strict';

var cantCharDict = require('./dict/cantCharDic.json');
var pinyinDict = require('./dict/pinyinDict.json');
var codePointDict = require('./dict/codePointDict.json');

function getPinyin (c) {
    var result = (!isNaN(c) ? codePointDict[c] : cantCharDict[c]);
    return Array.isArray(result) ? result.map(function (child) {
        return child.pinyin
    }) : null;
}

function getCodePoint (c) {
    c = c.toString();
    var result = (c.match(/^[a-z]+$/i) ? pinyinDict[c] : cantCharDict[c]);
    return Array.isArray(result) ? result.map(function (child) {
        return child.codepoint
    }) : null;
}

function getChar (c) {
    var result = (!isNaN(c) ? codePointDict[c] : pinyinDict[c]);
    return Array.isArray(result) ? result.map(function (child) {
        return child.char
    }) : null;
}

module.exports = {
    getPinyin: getPinyin,
    getChar: getChar,
    getCodePoint: getCodePoint
};

//console.log(getCodePoint(19958));
//console.log(getPinyin(199990));
//console.log(getChar("一"));



//console.log(getCodePoint("一"));
//console.log(getPinyin("一"));
//console.log(getPinyin(19968));
//console.log(getChar("yat"));
//console.log(getChar(19968));

/**
 * For Development Purpose.

 */

 /**

 {
    "codepoint": 19968,
    "char": "一",
    "pinyin": "yat"
  },

* */
//var pinyin = {};
//char2pinyinSet.forEach(function (child) {
//
//    var py = child.pinyin.split('/');
//
//    py.forEach(function (pyChild) {
//        if (!pinyin.hasOwnProperty(pyChild)) pinyin[pyChild] = [];
//
//        pinyin[pyChild].push(child);
//    });
//
//
//});
//
//writeile('./pinyinDict.json', pinyin);

//var cantChar = {};
//char2pinyinSet.forEach(function (child) {
//
//    var c = child.char;
//
//    if (!cantChar.hasOwnProperty(c)) cantChar[c] = [];
//
//    cantChar[c].push(child);
//
//});
//
//writeile('./cantCharDic.json', cantChar);

//var codePoint = {};
//char2pinyinSet.forEach(function (child) {
//
//    var c = child.codepoint;
//
//    if (!codePoint.hasOwnProperty(c)) codePoint[c] = [];
//
//    codePoint[c].push(child);
//
//});
//
//writeile('./codePointDict.json', codePoint);
//
//
//function writeile(path, jObj) {
//    var fs = require('fs');
//    fs.writeFile(path, JSON.stringify(jObj, null, 4), function (err) {
//        if (err) return console.log(err);
//        console.log("Write to " + path + " Done.");
//    });
//}

//console.log(pinyin);