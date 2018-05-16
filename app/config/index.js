const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default {
    port: process.env.PORT || 5000,
    //  基本信息配置
    base: {
        version: '1.0.1',
        host: IS_PRODUCTION ? 'https://shop.jczxw.cn' : 'http://127.0.0.1:5000',
        cdn: IS_PRODUCTION ? 'https://shop.jczxw.cn' : 'http://127.0.0.1:5000',
        keywords: "Egg,nodejs, node, express,egg,koa2,ThinkJS, socket.io,关注Web前端开发技术",
        description: "Egg,nodejs, node, express,egg,koa2,ThinkJS, socket.io",
        title: "LzShop",
        clas: '0',
    },
}