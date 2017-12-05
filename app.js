const express = require("express");
const apicache = require("apicache");

const app = express();
let cache = apicache.middleware;

// 跨域设置
app.all("*", function(req, res, next) {
  if (req.path !== "/" && !req.path.includes(".")) {
    res.header("Access-Control-Allow-Credentials", true);
    // 这里获取 origin 请求头 而不是用 *
    res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  next();
});
const onlyStatus200 = (req, res) => res.statusCode === 200;

app.use(cache("1440 minutes", onlyStatus200));

app.use(
  express.static("public", {
    maxAge: 86400000,
    setHeaders: function(res, path, stat) {
      if (/\.html$/.test(path)) {
        res.header("Content-Length", stat.size);
        res.header("Content-Range", `bytes 0-${stat.size - 1}/${stat.size}`);
      }
    }
  })
);

// 获取每日推荐歌曲
app.use("/recommend/songs", require("./router/recommend_songs"));

// 获取专辑内容
app.use("/album", require("./router/album"));
app.use("/comment/album", require("./router/comment_album"));

// 获取歌手单曲
app.use("/artists", require("./router/artists"));

// 推荐歌单
app.use("/personalized", require("./router/personalized"));
//推荐新音乐
app.use("/personalized/newsong", require("./router/personalized_newsong"));

// 搜索
app.use("/search", require("./router/search"));
// 搜索 multimatch
app.use("/search/multimatch", require("./router/search_multimatch"));
// 搜索 suggest,搜索结果包含单曲,歌手,歌单,mv信息
app.use("/search/suggest", require("./router/search_suggest"));

app.use("/user/detail", require("./router/user_detail"));
// 获取用户歌单
app.use("/user/playlist", require("./router/user_playlist"));

// 获取音乐详情
app.use("/song/detail", require("./router/song_detail"));
// 获取音乐 url
app.use("/music/url", require("./router/musicUrl"));
app.use("/comment/music", require("./router/comment_music"));
// 获取歌词
app.use("/lyric", require("./router/lyric"));

// 获取歌单内列表
app.use("/playlist/detail", require("./router/playlist_detail"));
app.use("/comment/playlist", require("./router/comment_playlist"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running @${port}`);
});

module.exports = app;
