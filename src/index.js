// ref:
// - https://umijs.org/plugin/develop.html

const request = require('request');
const fs = require('fs');
const path = require('path');

export default function (api, options = {scriptUrl: '', fontPath: ''}) {

    const {absOutputPath} = api.paths;

    api.onOptionChange(newOpts => {
        api.restart();
    });

    let newFontPath = options.fontPath || './iconfont';
    let absFontPath = path.join(absOutputPath, newFontPath);
    let fileName = "/iconfont.js";

    const addScript = () => {
        if (process.env.NODE_ENV == 'development') {
            // 开发环境直接使用
            api.addHTMLHeadScript({src: options.scriptUrl});
        } else {
            api.addHTMLHeadScript({src: `${newFontPath}${fileName}`});
            api.onBuildSuccess(({stats}) => {
                // 打包的时候需要先下载js
                if (!fs.existsSync(absFontPath)) {
                    fs.mkdirSync(absFontPath, {recursive: true});
                }
                request('http:' + options.scriptUrl).pipe(fs.createWriteStream(absFontPath + fileName));
            });
        }

    };

    addScript();

}

