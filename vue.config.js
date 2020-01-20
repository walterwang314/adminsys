const webpack = require('webpack');
// const path = require('path');
// const url = require('url');
// const querystring = require('querystring');

module.exports = {
    publicPath: '',
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    },
    configureWebpack: {
        devtool: 'inline-source-map',
        plugins: [
            new webpack.ProvidePlugin({
                _: "lodash",
                $: "jquery",
                jQuery: "jquery",
            })
        ],
        module: {
        }
    },
    devServer: {
        host: 'abc.console.ksyun.com',
        port: '3000',
        disableHostCheck: true,
        open: true,
        // proxy: {
        //     '/i/network/api': {
        //         target: "https://network.console.ksyun.com",
        //         changeOrigin: true
        //     }
        // },
        // before: function(app, server) {
        //     app.get('/', function(req, res, next) {
        //         let cookies = req.headers.cookie;
        //         let lang;
        //         cookies = cookies.split('; ');
        //         cookies.forEach(function(v, i) {
        //             v = v.split('=');
        //             if (v[0] === 'ksc_lang') {
        //                 lang = v[1];
        //             }
        //         });
        //         if (!lang) {
        //             lang = 'zh';
        //         }
        //         const version = '?' + new Date() * 1;
        //         const fs = server.middleware.fileSystem;
        //         let fileData = fs.readFileSync(path.resolve(__dirname, './dist/index.html')).toString();
        //         fileData = fileData.replace('{{lang}}', lang);
        //         fileData = fileData.replace('{{version}}', version);
        //         res.writeHead(200, {"Content-Type": "text/html"});
        //         res.write(fileData, 'utf8');
        //         res.end();
        //     });
        // }
    },
}
