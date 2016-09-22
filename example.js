/**
 * Created by chunfat on 9/22/16.
 */

var cantonese2pinyin = require('./cantonese2pinyin');

// Return null when not found
console.log(cantonese2pinyin.getCodePoint(19958));
console.log(cantonese2pinyin.getPinyin(199990));
console.log(cantonese2pinyin.getChar("一"));


// Return a matched Array object
console.log(cantonese2pinyin.getCodePoint("一"));
console.log(cantonese2pinyin.getPinyin("一"));
console.log(cantonese2pinyin.getPinyin(19968));
console.log(cantonese2pinyin.getChar("yat"));
console.log(cantonese2pinyin.getChar(19968));


