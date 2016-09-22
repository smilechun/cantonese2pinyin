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

