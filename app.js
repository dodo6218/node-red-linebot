const express = require('express');
const RED = require('node-red');
const http = require('http');

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/api",
  userDir: "./.nodered",
  flowFile: "flows.json",
};

// 初始化 Node-RED
RED.init(server, settings);

// 配置 Express 以使用 Node-RED 的 HTTP 路由
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

// 啟動伺服器
server.listen(3000, () => {
  console.log("Node-RED server is running on http://localhost:3000");
});

// 啟動 Node-RED
RED.start();
