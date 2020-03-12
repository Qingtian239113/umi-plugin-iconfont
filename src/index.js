// ref:
// - https://umijs.org/plugin/develop.html
import React from "react";

const request = require('request');
const fs = require('fs');

export default function (api, options = {scriptUrl: '', fontPath: ''}) {
    const {outputPath} = api.paths;

    let newFontPath = options.fontPath || './iconfont';

    const addScript = () => {
        if (process.env.NODE_ENV !== 'development') {
            // 开发环境直接使用
            api.addHTMLHeadScript({src: options.scriptUrl});
        } else {
            // 打包的时候需要先下载js
            let fileName = "iconfont.js";
            let filePath = outputPath + newFontPath;
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true});
            }
            request('http:' + options.scriptUrl).pipe(fs.createWriteStream(filePath + fileName));
            api.addHTMLHeadScript({src: `${newFontPath}${fileName}`});
        }
    };

    addScript();

}

