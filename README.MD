## music-api
> 原项目地址：[https://github.com/Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

### 项目简介
项目为NeteaseCloudMusicApi项目的缩减版，只保留了部分个人所需的API，并且增加一些mock数据

### 环境要求
需要 NodeJS 6.0+ 环境

### 安装  
``` shell
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
$ npm install
```
### 运行
``` shell
$ node app.js 
```
服务器启动默认端口为3000,若不想使用3000端口,可使用以下命令:  
Mac/Linux
```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:  
```shell
$ set PORT=4000 && node app.js
```
