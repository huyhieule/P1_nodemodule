console.log("Hi,it's me");
const fastify = require("fastify")();
const fastifyStatic = require('@fastify/static');
const path = require('path');
//Cấu hình server
const serverOptions = {
    port: 3000,
    host: "127.0.0.1",
};
//Xử lý sự kiện khi khởi động Server
const onServerStart = (error, address) => {
    if (error) {
        fastify.log.error(error);
        process.exit(1);
    }
    console.log(`Server is running at ${address}`);
};

// Định nghĩa route cho trang chủ
fastify.get('/', (request, reply) => {
    reply.sendFile("index.html")
});


// Định nghĩa route cho sản phẩm
fastify.get('/trangsanpham', (request, reply) => {
    reply.sendFile("trangsanpham.html")
});


// trang Tài khoản
fastify.get('/dangky', (request, reply) => {
    reply.sendFile("dangky.html")
});

// Trang Liên hệ
fastify.get('/cskh', (request, reply) => {
    reply.sendFile("cskh.html")
});

// Trang giới thiệu
fastify.get('/introduct', (request, reply) => {
    reply.sendFile("introduct.html")
});


// Đăng ký fastify-static để phục vụ file tĩnh
fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/', // Định nghĩa đường dẫn
});

// Đăng ký handler cho lỗi 404
fastify.setNotFoundHandler((request, reply) => {
    reply.sendFile('404.html');
});
//Khởi động server
fastify.listen(serverOptions, onServerStart);
