const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default {
    port: process.env.PORT || 5000,
    //  基本信息配置
    base: {
        version: '1.0.0',
        host: IS_PRODUCTION ? 'https://shop.jczxw.cn' : 'http://127.0.0.1:5000',
        cdn: IS_PRODUCTION ? 'https://shop.jczxw.cn' : 'http://127.0.0.1:5000',
        keywords: "Egg,nodejs, node, express,egg,koa2,ThinkJS, socket.io,关注Web前端开发技术",
        description: "Egg,nodejs, node, express,egg,koa2,ThinkJS, socket.io",
        title: "LzShop",
        clas: '0',
    },
    //session-redis配置
    SessionRedis: {
        host: process.env.SESSION_PORT_6379_TCP_ADDR || '127.0.0.1',
        port: process.env.SESSION_PORT_6379_TCP_PORT || 6379,
        ttl: 60*60
    },
    //redis数据库配置
    Redis: {
        host: process.env.SESSION_PORT_6379_TCP_ADDR || '127.0.0.1',
        port: process.env.SESSION_PORT_6379_TCP_PORT || 6379,       
        prefix: "lzShop:", //存诸前缀
        ttl: 0, //过期时间
        db: 0
    }
}