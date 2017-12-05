const express = require("express");
const router = express();
const { createWebAPIRequest } = require("../util/util");
const mock = require("../mock");

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    offset: 0,
    total: true,
    limit: 20,
    csrf_token: ""
  };

  createWebAPIRequest(
    "music.163.com",
    "/weapi/v1/discovery/recommend/songs",
    "POST",
    data,
    cookie,
    music_req => {
      if (!music_req.msg || music_req.code == 301) {
        res.send(mock);
      } else {
        res.send(music_req);
      }
    },
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;
