let express = require("express");
// var proxyMiddleWare= require('http-proxy-middleware');
let app = express();
 
// var proxyOption ={
//     target:"http://www.vamk.cn:82",
//     changeOrigoin:true,
//     ws: true,
//     pathRewrite: { '^/': '' }
// };

app.use(express.static("dist"));//关键是这一句，我的目录是dist的目录
// app.use("/",proxyMiddleWare(proxyOption))
app.listen(3000, ()=>{
    console.log("服务启动成功。");
})