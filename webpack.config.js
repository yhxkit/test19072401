var path = require('path');

module.exports = {
    // context: path.resolve(__dirname, 'src/main/jsx'),
    entry: {
        test: './src/main/jsx/testPage.jsx',
        main: './src/main/jsx/MainPage.jsx',
        page1: './src/main/jsx/Page1Page.jsx'

    },
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/[name]-bundle.js'
    },
    mode: 'none',
    module: {
        rules: [ {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env', '@babel/preset-react' ]
                }
            }
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        } ]
    }
};
//React 소스 경로는 src/main/jsx로 한다
// (현재로서는) MainPage.jsx, Page1Page.jsx 두 스크립트를 각각 빌드한다
// 빌드한 결과 js 파일들은 src/main/webapp/js/react 아래에 [웹페이지 이름].bundle.js 파일로 놓는다
// .jsx 파일은 ES6 등의 JavaScript 구문을 사용하며 React 스크립트다
// .css 파일은 웹페이지내에 포함한다
