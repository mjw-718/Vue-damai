const path = require('path')

function resolve(url) {
    return path.resolve(__dirname, url)
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('components', resolve('./src/components'))
            .set('styles', resolve('./src/assets/styles'))
            .set('pages', resolve('./src/pages'))
            .set('utils',resolve('./src/utils'))
            .set('modules',resolve('./src/store/modules'))
    },
    devServer: {
        proxy: {
            '/h5': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                // headers: {
                //     referer: 'https://mtop.damai.cn',
                //     host: 'mtop.damai.cn'
                // },
                // hostRewrite: 'mtop.damai.cn'
            },
            '/Show': {
                target: 'https://m.juooo.com',
                changeOrigin: true,
                // headers: {
                //     referer: 'https://mtop.damai.cn',
                //     host: 'mtop.damai.cn'
                // },
                // hostRewrite: 'mtop.damai.cn'
            },
        }
    }

}
