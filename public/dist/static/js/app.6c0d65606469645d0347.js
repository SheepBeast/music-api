webpackJsonp(
  [7],
  {
    "/uOj": function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("audio", {
            ref: "player",
            staticStyle: { display: "none" },
            attrs: { src: (t.currentPlays && t.currentPlays.url) || "" },
            on: {
              canplay: t.canplay,
              durationchange: t.durationchange,
              ended: t.ended,
              loadedmetadata: t.loadedmetadata,
              pause: t.pause,
              playing: t.playing,
              timeupdate: t.timeupdate,
              stalled: t.stalled,
              error: t.error
            }
          });
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    "0M4l": function(t, e, n) {
      "use strict";
      e.a = {
        props: { placeholder: { type: String, default: "搜索..." } },
        data: function() {
          return { value: "" };
        },
        methods: {
          input: function(t) {
            this.$emit(
              "searchbar:input",
              (this.value = this.$refs.search.value)
            );
          },
          submit: function(t) {
            t.preventDefault(),
              this.$emit(
                "searchbar:submit",
                (this.value = this.$refs.search.value)
              );
          },
          cancel: function() {
            (this.value = this.$refs.search.value = ""),
              this.$emit("searchbar:cancel");
          },
          init: function() {
            this.$emit("searchbar:init", this);
          }
        },
        mounted: function() {
          this.init();
        }
      };
    },
    1540: function(t, e, n) {
      "use strict";
      var i = n("gQ4O"),
        a = n("nHQ4"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    "1naP": function(t, e, n) {
      "use strict";
      var i = n("ljHZ"),
        a = n("xUHO"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    "4ZUE": function(t, e, n) {
      "use strict";
      var i = n("KMp1"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    "50lx": function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "tab-label", on: { click: t.select } },
            [n("a", [t._t("default")], 2)]
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    "5yqE": function(t, e, n) {
      "use strict";
      var i = n("Ukzt"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    "7U0y": function(t, e, n) {
      "use strict";
      var i = n("bOdI"),
        a = n.n(i);
      e.a = {
        props: {
          span: {
            type: Number,
            required: !0,
            validator: function(t) {
              return (
                [10, 20, 25, 33, 40, 50, 60, 66, 75, 80, 90, 100].indexOf(t) >
                -1
              );
            }
          }
        },
        computed: {
          computedSpan: function() {
            return a()({}, "cell-" + this.span, !0);
          }
        }
      };
    },
    "7U2f": function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "page",
            { staticClass: "home" },
            [
              n(
                "toolbar",
                { staticClass: "shadow-3d", attrs: { fixed: "" } },
                [
                  n(
                    "router-link",
                    {
                      staticClass: "btn-icon",
                      attrs: { to: { name: "search" } }
                    },
                    [
                      n("icon", {
                        staticStyle: { "vertical-align": "middle" },
                        attrs: { ligature: "search" }
                      })
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "toolbar-inner",
                    [
                      n(
                        "tabs-navigation",
                        { on: { "tabs:afterChange": t.viewChange } },
                        t._l(t.tabs, function(e, i) {
                          return n(
                            "tab-label",
                            { key: i, attrs: { index: i } },
                            [t._v("\n          " + t._s(e.zh) + "\n        ")]
                          );
                        })
                      )
                    ],
                    1
                  ),
                  t._v(" "),
                  t.currentPlays
                    ? n(
                        "router-link",
                        {
                          staticClass: "btn-icon",
                          attrs: { to: { name: "musicPlayer" } }
                        },
                        [n("spectrum", { class: { playing: t.playing } })],
                        1
                      )
                    : n("div", {
                        staticClass: "btn-icon",
                        staticStyle: { width: "40px", height: "20px" }
                      })
                ],
                1
              ),
              t._v(" "),
              n("keep-alive", [n(t.currentView, { tag: "component" })], 1)
            ],
            1
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    "7e0o": function(t, e, n) {
      "use strict";
      var i = n("ajNV"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    "7hdd": function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "searchbar-container" }, [
            n(
              "div",
              { staticClass: "searchbar-inner" },
              [
                n("icon", { attrs: { ligature: "search" } }),
                t._v(" "),
                n(
                  "form",
                  { staticClass: "searchbar-form", on: { submit: t.submit } },
                  [
                    n("input", {
                      ref: "search",
                      staticClass: "searchbar-input",
                      attrs: {
                        type: "search",
                        autocomplete: "off",
                        placeholder: t.placeholder
                      },
                      on: { input: t.input }
                    })
                  ]
                ),
                t._v(" "),
                n("icon", {
                  staticClass: "cancel",
                  class: { visible: !!t.value },
                  attrs: { ligature: "cancel" },
                  nativeOn: {
                    click: function(e) {
                      t.cancel(e);
                    }
                  }
                })
              ],
              1
            )
          ]);
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    "8YLC": function(t, e) {
      t.exports =
        "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
    },
    "9iNX": function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("ul", { staticClass: "spectrum" }, [
            n("li", { staticClass: "s1", style: t.computedColor }),
            t._v(" "),
            n("li", { staticClass: "s2", style: t.computedColor }),
            t._v(" "),
            n("li", { staticClass: "s3", style: t.computedColor })
          ]);
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    "9rlP": function(t, e, n) {
      "use strict";
      var i = n("fknX"),
        a = n("gn1g"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    A1mk: function(t, e, n) {
      "use strict";
      function i() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 36e5;
        (this.expire = t), (this.startTime = Date.now());
      }
      (i.prototype.get = function(t) {
        if (this.has(t)) return this[t];
      }),
        (i.prototype.set = function(t, e) {
          if (t && e) return (this[t] = e), (this.startTime = Date.now()), e;
        }),
        (i.prototype.has = function(t) {
          return !(!t || !this[t]);
        }),
        (i.prototype.isExpire = function() {
          return this.expire + this.startTime < Date.now();
        }),
        (e.a = i);
    },
    A9TN: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "ul",
            { staticClass: "list" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    AmHV: function(t, e, n) {
      "use strict";
      var i = n("LOkV"),
        a = n("OTGz"),
        s = n("1540");
      e.a = {
        install: function(t, e) {
          Object(i.a)("$tip", a.a), Object(i.a)("$loadingTip", s.a);
        }
      };
    },
    BiHy: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "page shadow-3d" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    CnPT: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "li",
            { staticClass: "list-item" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    DV1V: function(t, e, n) {
      "use strict";
      e.a = new Vue();
    },
    Da2x: function(t, e, n) {
      "use strict";
      var i = n("pVTJ"),
        a = n("/uOj"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    "E+c7": function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "card" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    EVRK: function(t, e, n) {
      "use strict";
      e.a = new Vue();
    },
    Fjnb: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "app", attrs: { id: "app" } },
            [
              n("router-view"),
              t._v(" "),
              n("musicPlayer", { tag: "component" })
            ],
            1
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    G07w: function(t, e, n) {
      "use strict";
      var i = n("//Fk"),
        a = n.n(i),
        s = n("LOkV"),
        r = n("DV1V"),
        u = n("gyMJ"),
        c = /\[\d*:\d*\.\d*\]/g,
        l = /\[|\]/g,
        o = {
          _mode: "shuffle",
          _currentTime: 0,
          _duration: 0,
          _playing: !1,
          _playlist: [],
          _playIndex: 0,
          _musicUrl: "",
          _recentlyPlaying: !0,
          _supported: !0,
          _currentLyricLine: -1,
          _nextCursor: 0
        },
        m = {
          currentTime: function(t) {
            return t._currentTime;
          },
          duration: function(t) {
            return t._duration;
          },
          currentTimeString: function(t, e) {
            if (e.lyric[t._nextCursor]) {
              var n = e.lyric[t._nextCursor];
              n &&
                t._currentTime >= n.time &&
                ((t._currentLyricLine = t._nextCursor), ++t._nextCursor);
            }
            return Object(s.d)(t._currentTime);
          },
          durationString: function(t) {
            return Object(s.d)(t._duration);
          },
          playing: function(t) {
            return t._playing;
          },
          currentPlays: function(t) {
            return t._playlist[t._playIndex];
          },
          playlist: function(t) {
            return t._playlist;
          },
          playIndex: function(t) {
            return t._playIndex;
          },
          mode: function(t) {
            return t._mode;
          },
          switch_button: function(t) {
            return t._playing ? "pause" : "play_arrow";
          },
          recentlyPlaying: function(t) {
            return t._recentlyPlaying;
          },
          lyric: function(t) {
            var e = t._playlist[t._playIndex].lyric;
            if (e) {
              var n = e.split("\n"),
                i = [];
              n.pop();
              for (var a, s, r, u, o, m, d = 0, p = n.length; d < p; d++)
                (r = n[d]),
                  (a = r.match(c)),
                  (a = a ? a[0].replace(l, "") : "00:00"),
                  (s = r.replace(c, "").trim()) &&
                    ((u = a.split(":")),
                    (o = parseInt(u[0])),
                    (m = parseFloat(u[1])),
                    i.push({ time: 60 * o + m, clause: s }));
              return (t._currentLyricLine = -1), (t._nextCursor = 0), i;
            }
            return [];
          },
          currentLyricLine: function(t) {
            return t._currentLyricLine;
          },
          nextCursor: function(t) {
            return t._nextCursor;
          },
          musicUrl: function(t) {
            return t._musicUrl;
          },
          supported: function(t) {
            return t._supported;
          }
        },
        d = {
          setMode: function(t) {
            switch (t._mode) {
              case "shuffle":
                t._mode = "repeat";
                break;
              case "repeat":
                t._mode = "repeat_one";
                break;
              case "repeat_one":
                t._mode = "shuffle";
            }
          },
          skipPrevious: function(t) {
            var e = t._playIndex - 1;
            e < 0 && (e = t._playlist.length - 1),
              (t._playIndex = e),
              t._playlist[e].supported || r.a.$emit("unsupported");
          },
          skipNext: function(t) {
            var e = t._playIndex + 1;
            e > t._playlist.length - 1 && (e = 0),
              (t._playIndex = e),
              t._playlist[e].supported || r.a.$emit("unsupported");
          },
          setRecentlyPlaying: function(t, e) {
            var n = e.recentlyPlaying;
            t._recentlyPlaying = n;
          },
          canplay: function(t, e) {
            var n = e.recentlyPlaying;
            t._recentlyPlaying = n;
          },
          durationchange: function(t, e) {
            var n = e.duration;
            t._duration = n;
          },
          ended: function(t) {
            if (
              ((t._currentTime = 0),
              (t._recentlyPlaying = !0),
              (t._currentLyricLine = -1),
              (t._nextCursor = 0),
              t._playlist.length > 1)
            )
              switch (t._mode) {
                case "shuffle":
                  var e = t._playIndex,
                    n = t._playlist.length;
                  do {
                    e = Math.floor(Math.random() * n);
                  } while (e == t._playIndex);
                  t._playIndex = e;
                  break;
                case "repeat":
                  var i = t._playIndex + 1;
                  t._playIndex = i == t._playlist.length ? 0 : i;
              }
          },
          loadedmetadata: function(t, e) {
            var n = e.duration;
            t._duration = n;
          },
          pause: function(t) {
            t._playing = !1;
          },
          playing: function(t) {
            (t._supported = !0), (t._playing = !0), (t._recentlyPlaying = !0);
          },
          timeupdate: function(t, e) {
            var n = e.currentTime;
            t._currentTime = n;
          },
          addSong: function(t, e) {
            var n = e.song,
              i = n.id,
              a = n.name,
              r = n.ar,
              u = n.al,
              c = e.url,
              l = e.comments,
              o = e.total,
              m = e.more,
              d = e.lyric,
              p = e.supported,
              f = e.done;
            l.forEach(function(t) {
              var e = new Date(t.time);
              if (
                ((t.timeString =
                  e.getFullYear() +
                  "年" +
                  (e.getMonth() + 1) +
                  "月" +
                  e.getDate() +
                  "日"),
                (t.translatedMessage = Object(s.c)(t.content)),
                t.beReplied.length > 0)
              ) {
                var n = t.beReplied[0];
                t.translatedBeReplied = {
                  user: { id: n.user.userId, nickname: n.user.nickname },
                  content: "@" + n.user.nickname + "：" + Object(s.c)(n.content)
                };
              }
            }),
              t._playlist.push({
                id: i,
                name: a,
                ar: r,
                al: u,
                url: c,
                comments: l,
                total: o,
                more: m,
                lyric: d,
                supported: p
              }),
              (t._playIndex = t._playlist.length - 1),
              f();
          },
          setNextCursor: function(t, e) {
            var n = e.cursor;
            t._nextCursor = n;
          },
          setSupported: function(t, e) {
            var n = e.id,
              i = e.supported;
            if (!n) return !1;
            var a = t._playlist.findIndex(function(t) {
              return t.id == n && t.supported;
            });
            a > -1 && ((t._playlist[a].supported = i), i || (t._playing = !1));
          },
          cut: function(t, e) {
            var n = e.index;
            (t._playIndex = n),
              t._playlist[n].supported || r.a.$emit("unsupported");
          },
          remove: function(t, e) {
            var n = e.index,
              i = e.vm;
            t._playlist.length > 1
              ? (t._playlist.splice(n, 1), (t._playIndex = 0))
              : (i.$router.back(),
                setTimeout(function() {
                  t._playlist = [];
                }, 300));
          }
        },
        p = {
          getSongDetail: function(t, e) {
            var n = t.commit,
              i = t.getters,
              s = e.id,
              c = e.done,
              l = !1;
            if (!i.currentPlays || (s && i.currentPlays.id != s)) {
              if (s && i.playlist) {
                var o = i.playlist.findIndex(function(t) {
                  return t.id == s;
                });
                o > -1 && ((l = !0), n("cut", { index: o }));
              }
            } else l = !0;
            if (l) return c(), !1;
            var m = Vue.http.get(u.e + "?ids=" + s),
              d = Vue.http.get(u.g + "?id=" + s),
              p = Vue.http.get(u.d + "?limit=20&id=" + s),
              f = Vue.http.get(u.f + "?id=" + s);
            a.a
              .all([m, d, p, f])
              .then(function(t) {
                var e = t[0].body.songs[0],
                  i = t[1].body.data[0].url,
                  s = void 0;
                return (
                  n("addSong", {
                    song: t[0].body.songs[0],
                    url: i,
                    comments: t[2].body.comments,
                    total: t[2].body.total,
                    more: t[2].body.more,
                    lyric: ((s = t[3].body.lrc) && s.lyric) || null,
                    supported: !0,
                    done: c
                  }),
                  i
                    ? new a.a(function(t, n) {
                        Vue.http.get(u.a + "?id=" + e.al.id).then(function(e) {
                          -3 != e.body.album.status ? t(i) : n();
                        });
                      })
                    : new a.a(function(t, e) {
                        e();
                      })
                );
              })
              .catch(function(t) {
                r.a.$emit("unsupported");
              });
          }
        };
      e.a = { namespaced: !0, state: o, getters: m, mutations: d, actions: p };
    },
    IIW1: function(t, e, n) {
      "use strict";
      var i = n("v7QK"),
        a = n("REBQ"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    IUIu: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "list-item-holder" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    IcnI: function(t, e, n) {
      "use strict";
      var i = n("wSq6"),
        a = n("xTkV"),
        s = n("dI8L"),
        r = n("G07w"),
        u = n("sA0W"),
        c = n("s+dX"),
        l = n("nMV2"),
        o = n("bREw");
      Vue.use(Vuex),
        Vue.use(VueResource),
        (Vue.http.options.xhr = { withCredentials: !0 }),
        (e.a = new Vuex.Store({
          modules: {
            find: i.a,
            playlist: a.a,
            search: s.a,
            musicPlayer: r.a,
            recommend: u.a,
            album: c.a,
            artist: l.a,
            user: o.a
          }
        }));
    },
    "J+5o": function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.playlist && t.newSong
            ? n("page-content", { attrs: { id: "wrapper" } }, [
                n("div", { staticClass: "find" }, [
                  n(
                    "section",
                    { staticClass: "recommend-playlist" },
                    [
                      n("h4", { staticClass: "section-header" }, [
                        t._v("推荐歌单")
                      ]),
                      t._v(" "),
                      n(
                        "grid",
                        {
                          staticClass: "section-content",
                          attrs: { gutter: "" }
                        },
                        t._l(t.playlist, function(e) {
                          return n(
                            "cell",
                            { key: e.id, attrs: { span: 33 } },
                            [
                              n(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "playlist",
                                      query: { id: e.id }
                                    },
                                    tag: "div"
                                  }
                                },
                                [
                                  n(
                                    "card",
                                    [
                                      n("card-media", [
                                        n("img", {
                                          directives: [
                                            {
                                              name: "lazyload",
                                              rawName: "v-lazyload",
                                              value: {
                                                src: e.picUrl,
                                                wrapper: "#find"
                                              },
                                              expression:
                                                "{src: p.picUrl, wrapper: '#find'}"
                                            }
                                          ],
                                          staticClass: "lazyload"
                                        })
                                      ]),
                                      t._v(" "),
                                      n(
                                        "card-content",
                                        { staticClass: "intro" },
                                        [
                                          n(
                                            "div",
                                            { staticClass: "title f-elpsl-2" },
                                            [t._v(t._s(e.name))]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          );
                        })
                      )
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "section",
                    { staticClass: "new-song" },
                    [
                      n("h4", { staticClass: "section-header" }, [
                        t._v("最新音乐")
                      ]),
                      t._v(" "),
                      n(
                        "list",
                        t._l(t.newSong, function(e) {
                          return n(
                            "list-item",
                            { key: e.id },
                            [
                              n(
                                "router-link",
                                {
                                  staticClass: "list-item-holder dense",
                                  attrs: {
                                    to: {
                                      name: "musicPlayer",
                                      query: { id: e.id }
                                    },
                                    tag: "div"
                                  }
                                },
                                [
                                  n("list-item-inner", [
                                    n(
                                      "div",
                                      {
                                        staticClass: "primary-title f-elpsl-1"
                                      },
                                      [t._v(t._s(e.name))]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      { staticClass: "third-title f-elpsl-1" },
                                      [
                                        t._v(
                                          t._s(e.artists) +
                                            " - " +
                                            t._s(e.album)
                                        )
                                      ]
                                    )
                                  ]),
                                  t._v(" "),
                                  n("icon", {
                                    staticClass: "icon-play",
                                    attrs: { ligature: "play_circle_outline" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          );
                        })
                      )
                    ],
                    1
                  )
                ])
              ])
            : n("loading-page");
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    JmuO: function(t, e, n) {
      "use strict";
      var i = n("c+Bi"),
        a = n("50lx"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    KMp1: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "card-header" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    KWv7: function(t, e, n) {
      "use strict";
      var i = n("zKIK");
      e.a = [
        { path: "/", name: "home", component: i.a },
        {
          path: "/search",
          name: "search",
          component: function(t) {
            return n
              .e(2)
              .then(
                function() {
                  var e = [n("GSpQ")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          }
        },
        {
          path: "/musicPlayer",
          name: "musicPlayer",
          component: function(t) {
            return n
              .e(0)
              .then(
                function() {
                  var e = [n("BNQM")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          },
          meta: {
            preload: function(t, e) {
              (0, t.dispatch)("musicPlayer/getSongDetail", e);
            }
          }
        },
        {
          path: "/playlist",
          name: "playlist",
          component: function(t) {
            return n
              .e(3)
              .then(
                function() {
                  var e = [n("FUzA")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          },
          meta: {
            preload: function(t, e) {
              (0, t.dispatch)("playlist/getPlaylist", e);
            }
          }
        },
        {
          path: "/album",
          name: "album",
          component: function(t) {
            return n
              .e(6)
              .then(
                function() {
                  var e = [n("Emcu")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          },
          meta: {
            preload: function(t, e) {
              (0, t.dispatch)("album/getAlbum", e);
            }
          }
        },
        {
          path: "/artist",
          name: "artist",
          component: function(t) {
            return n
              .e(5)
              .then(
                function() {
                  var e = [n("4oe7")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          },
          meta: {
            preload: function(t, e) {
              (0, t.dispatch)("artist/getArtist", e);
            }
          }
        },
        {
          path: "/user",
          name: "user",
          component: function(t) {
            return n
              .e(1)
              .then(
                function() {
                  var e = [n("nXOw")];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          },
          meta: {
            preload: function(t, e) {
              (0, t.dispatch)("user/getUser", e);
            }
          }
        },
        { path: "*", redirect: "/" }
      ];
    },
    Kwjy: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "card-content" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    LOkV: function(t, e, n) {
      "use strict";
      function i(t) {
        return isNaN((t = parseInt(t)))
          ? "0:00"
          : Math.floor(t / 60) + ":" + a(t % 60);
      }
      function a(t) {
        return t < 10 ? "0" + t : "" + t;
      }
      function s(t) {
        return m[o.call(t)];
      }
      function r(t, e) {
        var n = document.createElement("div"),
          i = "v-" + Date.now().toString(32);
        return (
          (n.id = i),
          !!document.body.appendChild(n) &&
            (Vue.prototype[t]
              ? (console.error(t + "属性或函数已存在"), !1)
              : ((Vue[t] = Vue.prototype[t] = new Vue(e).$mount("#" + i)), !0))
        );
      }
      function u(t) {
        return t
          ? t.replace(p, function(t) {
              return '<img class="emoji" src="' + l.a[t] + '"/>';
            })
          : "";
      }
      (e.d = i),
        (e.f = a),
        (e.e = s),
        (e.a = r),
        n.d(e, "b", function() {
          return d;
        }),
        (e.c = u);
      var c = n("TX8+"),
        l = n.n(c),
        o = Object.prototype.toString,
        m = {};
      [
        "Number",
        "String",
        "Boolean",
        "Null",
        "Undefined",
        "Array",
        "Object"
      ].forEach(function(t) {
        m["[object " + t + "]"] = t.toLowerCase();
      });
      var d = (function() {
          return {
            width:
              document.documentElement.clientWidth || document.body.clientWidth,
            height:
              document.documentElement.clientHeight ||
              document.body.clientHeight
          };
        })(),
        p = /(\[[a-zA-Z0-9\u4e00-\u9fa5]+\])/g;
    },
    LmM6: function(t, e, n) {
      "use strict";
      var i = n("dpo6");
      e.a = {
        install: function(t, e) {
          t.directive("lazyload", i.a);
        }
      };
    },
    M93x: function(t, e, n) {
      "use strict";
      var i = n("xJD8"),
        a = n("Fjnb"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    MzEo: function(t, e, n) {
      "use strict";
      var i = n("x1FD"),
        a = n("J+5o"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    NHnr: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n("QYCU"),
        a = (n.n(i), n("bGai")),
        s = n("AmHV"),
        r = n("LmM6"),
        u = n("M93x"),
        c = n("YaEn"),
        l = n("IcnI"),
        o = n("WSkw");
      Vue.use(a.a),
        Vue.use(s.a),
        Vue.use(r.a),
        (Vue.config.productionTip = !1),
        new Vue({
          el: "#app",
          router: c.a,
          store: l.a,
          template: "<App/>",
          components: { App: u.a }
        }),
        Object(o.a)(c.a);
    },
    NI3K: function(t, e, n) {
      "use strict";
      var i = n("wTCo"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    OTGz: function(t, e, n) {
      "use strict";
      var i = n("ce1O"),
        a = n("PTi1"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    "P/tO": function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("icon", {
            staticClass: "back",
            attrs: { ligature: "navigate_before" },
            nativeOn: {
              click: function(e) {
                t.$router.back();
              }
            }
          });
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    PJ3r: function(t, e, n) {
      "use strict";
      var i = n("gCbH"),
        a = n("9iNX"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    PTUx: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "cell", class: t.computedSpan },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    PTi1: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("div", {
            staticClass: "tip text-center",
            class: { active: t.active },
            style: { opacity: t.opacity },
            domProps: { innerHTML: t._s(t.str) }
          });
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    QA8A: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "toolbar", class: { "toolbar-fixed": t.fixed } },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    QYCU: function(t, e) {},
    REBQ: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("i", { staticClass: "material-icons" }, [
            t._v(t._s(t.ligature))
          ]);
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    SFkb: function(t, e, n) {
      "use strict";
      var i = n("MzEo"),
        a = function(t) {
          return n
            .e(4)
            .then(
              function() {
                var e = [n("z/Ic")];
                t.apply(null, e);
              }.bind(this)
            )
            .catch(n.oe);
        };
      e.a = {
        name: "home",
        data: function() {
          return {
            currentView: "find",
            tabs: [{ en: "find", zh: "发现" }, { en: "recommend", zh: "推荐" }]
          };
        },
        components: { find: i.a, recommend: a },
        computed: Vuex.mapGetters("musicPlayer", ["playing", "currentPlays"]),
        methods: {
          viewChange: function(t) {
            console.log("tabs", t), (this.currentView = this.tabs[t].en);
          }
        }
      };
    },
    THwN: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "loading-page" },
            [
              n("spectrum", {
                staticClass: "playing",
                attrs: { color: "#F57614" }
              })
            ],
            1
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    "TX8+": function(t, e) {
      t.exports = {
        "[大笑]": "http://s1.music.126.net/style/web2/emt/emoji_86.png",
        "[可爱]": "http://s1.music.126.net/style/web2/emt/emoji_85.png",
        "[憨笑]": "http://s1.music.126.net/style/web2/emt/emoji_359.png",
        "[色]": "http://s1.music.126.net/style/web2/emt/emoji_95.png",
        "[亲亲]": "http://s1.music.126.net/style/web2/emt/emoji_363.png",
        "[惊恐]": "http://s1.music.126.net/style/web2/emt/emoji_96.png",
        "[流泪]": "http://s1.music.126.net/style/web2/emt/emoji_356.png",
        "[亲]": "http://s1.music.126.net/style/web2/emt/emoji_362.png",
        "[呆]": "http://s1.music.126.net/style/web2/emt/emoji_352.png",
        "[哀伤]": "http://s1.music.126.net/style/web2/emt/emoji_342.png",
        "[呲牙]": "http://s1.music.126.net/style/web2/emt/emoji_343.png",
        "[吐舌]": "http://s1.music.126.net/style/web2/emt/emoji_348.png",
        "[撇嘴]": "http://s1.music.126.net/style/web2/emt/emoji_353.png",
        "[怒]": "http://s1.music.126.net/style/web2/emt/emoji_361.png",
        "[奸笑]": "http://s1.music.126.net/style/web2/emt/emoji_341.png",
        "[汗]": "http://s1.music.126.net/style/web2/emt/emoji_97.png",
        "[痛苦]": "http://s1.music.126.net/style/web2/emt/emoji_346.png",
        "[惶恐]": "http://s1.music.126.net/style/web2/emt/emoji_354.png",
        "[生病]": "http://s1.music.126.net/style/web2/emt/emoji_350.png",
        "[口罩]": "http://s1.music.126.net/style/web2/emt/emoji_351.png",
        "[大哭]": "http://s1.music.126.net/style/web2/emt/emoji_357.png",
        "[晕]": "http://s1.music.126.net/style/web2/emt/emoji_355.png",
        "[发怒]": "http://s1.music.126.net/style/web2/emt/emoji_115.png",
        "[开心]": "http://s1.music.126.net/style/web2/emt/emoji_360.png",
        "[鬼脸]": "http://s1.music.126.net/style/web2/emt/emoji_94.png",
        "[皱眉]": "http://s1.music.126.net/style/web2/emt/emoji_87.png",
        "[流感]": "http://s1.music.126.net/style/web2/emt/emoji_358.png",
        "[爱心]": "http://s1.music.126.net/style/web2/emt/emoji_33.png",
        "[心碎]": "http://s1.music.126.net/style/web2/emt/emoji_34.png",
        "[钟情]": "http://s1.music.126.net/style/web2/emt/emoji_303.png",
        "[星星]": "http://s1.music.126.net/style/web2/emt/emoji_309.png",
        "[生气]": "http://s1.music.126.net/style/web2/emt/emoji_314.png",
        "[便便]": "http://s1.music.126.net/style/web2/emt/emoji_89.png",
        "[强]": "http://s1.music.126.net/style/web2/emt/emoji_13.png",
        "[弱]": "http://s1.music.126.net/style/web2/emt/emoji_372.png",
        "[拜]": "http://s1.music.126.net/style/web2/emt/emoji_14.png",
        "[牵手]": "http://s1.music.126.net/style/web2/emt/emoji_379.png",
        "[跳舞]": "http://s1.music.126.net/style/web2/emt/emoji_380.png",
        "[禁止]": "http://s1.music.126.net/style/web2/emt/emoji_374.png",
        "[这边]": "http://s1.music.126.net/style/web2/emt/emoji_262.png",
        "[爱意]": "http://s1.music.126.net/style/web2/emt/emoji_106.png",
        "[示爱]": "http://s1.music.126.net/style/web2/emt/emoji_376.png",
        "[嘴唇]": "http://s1.music.126.net/style/web2/emt/emoji_367.png",
        "[狗]": "http://s1.music.126.net/style/web2/emt/emoji_81.png",
        "[猫]": "http://s1.music.126.net/style/web2/emt/emoji_78.png",
        "[猪]": "http://s1.music.126.net/style/web2/emt/emoji_100.png",
        "[兔子]": "http://s1.music.126.net/style/web2/emt/emoji_459.png",
        "[小鸡]": "http://s1.music.126.net/style/web2/emt/emoji_450.png",
        "[公鸡]": "http://s1.music.126.net/style/web2/emt/emoji_461.png",
        "[幽灵]": "http://s1.music.126.net/style/web2/emt/emoji_116.png",
        "[圣诞]": "http://s1.music.126.net/style/web2/emt/emoji_411.png",
        "[外星]": "http://s1.music.126.net/style/web2/emt/emoji_101.png",
        "[钻石]": "http://s1.music.126.net/style/web2/emt/emoji_52.png",
        "[礼物]": "http://s1.music.126.net/style/web2/emt/emoji_107.png",
        "[男孩]": "http://s1.music.126.net/style/web2/emt/emoji_0.png",
        "[女孩]": "http://s1.music.126.net/style/web2/emt/emoji_1.png",
        "[蛋糕]": "http://s1.music.126.net/style/web2/emt/emoji_337.png",
        "[18]": "http://s1.music.126.net/style/web2/emt/emoji_186.png",
        "[圈]": "http://s1.music.126.net/style/web2/emt/emoji_312.png",
        "[叉]": "http://s1.music.126.net/style/web2/emt/emoji_313.png"
      };
    },
    Ukzt: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "card-actions" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    WSkw: function(t, e, n) {
      "use strict";
      function i(t) {
        var e = t.__proto__,
          n = t.app.$store,
          i = t.options.routes[0].children,
          a = function(t) {
            return new u.a(function(e, a) {
              var r = i.find(function(e) {
                  return e.name == t.name;
                }),
                u = r && r.meta && r.meta.preload;
              u
                ? (Vue.$loadingTip.show(),
                  u(
                    n,
                    s()(
                      {
                        done: function() {
                          Vue.$loadingTip.hide(), e();
                        },
                        fail: a
                      },
                      t.query
                    )
                  ))
                : e();
            });
          };
        return (
          (e.transfer = ""),
          (e._push = e.push),
          (e.push = function() {
            var n = arguments;
            (e.transfer = "slide-left"),
              a(n[0]).then(function() {
                e._push.apply(t, n);
              });
          }),
          (e._back = e.back),
          (e.back = function() {
            (e.transfer = "slide-right"), e._back.call(t);
          }),
          t
        );
      }
      e.a = i;
      var a = n("woOf"),
        s = n.n(a),
        r = n("//Fk"),
        u = n.n(r);
      n("LOkV");
    },
    XJZo: function(t, e, n) {
      "use strict";
      e.a = { props: { fixed: Boolean } };
    },
    YaEn: function(t, e, n) {
      "use strict";
      var i = n("cg4n"),
        a = n("KWv7");
      Vue.use(VueRouter),
        (e.a = new VueRouter({
          routes: [{ path: "/", component: i.a, children: a.a }]
        }));
    },
    Z7ab: function(t, e, n) {
      "use strict";
      var i = n("A9TN"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    "a+3F": function(t, e, n) {
      "use strict";
      var i = n("ukI1"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    ajNV: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "avatar" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    bGai: function(t, e, n) {
      "use strict";
      var i = n("7e0o"),
        a = n("n68v"),
        s = n("4ZUE"),
        r = n("jQg5"),
        u = n("kXD9"),
        c = n("5yqE"),
        l = n("1naP"),
        o = n("mG+c"),
        m = n("IIW1"),
        d = n("yE9A"),
        p = n("a+3F"),
        f = n("Z7ab"),
        h = n("d734"),
        g = n("eopR"),
        y = n("NI3K"),
        v = n("9rlP"),
        _ = n("JmuO"),
        b = n("sxu/"),
        w = n("eIu7"),
        x = n("cg3r"),
        C = n("PJ3r"),
        V = n("q6Qc"),
        j = n("pKZN");
      e.a = {
        install: function(t, e) {
          t.mixin({
            components: {
              avatar: i.a,
              card: a.a,
              cardHeader: s.a,
              cardMedia: r.a,
              cardContent: u.a,
              cardActions: c.a,
              grid: l.a,
              cell: o.a,
              icon: m.a,
              toolbar: d.a,
              toolbarInner: p.a,
              list: f.a,
              listItem: h.a,
              listItemHolder: g.a,
              listItemInner: y.a,
              tabsNavigation: v.a,
              tabLabel: _.a,
              page: b.a,
              pageContent: w.a,
              searchbar: x.a,
              spectrum: C.a,
              loadingPage: V.a,
              back: j.a
            }
          });
        }
      };
    },
    bREw: function(t, e, n) {
      "use strict";
      var i = n("//Fk"),
        a = n.n(i),
        s = n("woOf"),
        r = n.n(s),
        u = n("gyMJ"),
        c = n("A1mk"),
        l = new c.a(),
        o = { _user: null, _playlist: null },
        m = {
          user: function(t) {
            if (!t._user) return !1;
            var e = t._user,
              n = e.listenSongs,
              i = e.avatarUrl,
              a = e.backgroundUrl,
              s = e.followeds,
              r = e.nickname,
              u = e.gender;
            return {
              listenSongs: n,
              avatarUrl: i,
              backgroundUrl: a,
              followeds: s,
              nickname: r,
              gender: u
            };
          },
          playlist: function(t) {
            if (!t._playlist) return !1;
            var e = t._playlist,
              n = [];
            return (
              e.forEach(function(t) {
                var e = t.id,
                  i = t.name,
                  a = t.playCount,
                  s = t.trackCount,
                  r = t.coverImgUrl;
                n.push({
                  id: e,
                  name: i,
                  playCount: a,
                  trackCount: s,
                  coverImgUrl: r
                });
              }),
              n
            );
          }
        },
        d = {
          setUser: function(t, e) {
            var n = e.profile,
              i = e.playlist,
              a = e.done;
            (t._user = n), (t._playlist = i), a();
          }
        },
        p = {
          getUser: function(t, e) {
            var n = t.commit,
              i = t.getters,
              s = e.id,
              c = e.done;
            if (l.has(s) && !l.isExpire())
              return (
                i.user.id != s ? n("setUser", r()({}, l.get(s), c)) : c(), !1
              );
            if (i.user && (!s || i.user.id == s)) return c(), !1;
            var o = Vue.http.get(u.p + "?uid=" + s),
              m = Vue.http.get(u.q + "?uid=" + s);
            a.a.all([o, m]).then(function(t) {
              t[0].body.profile.listenSongs = t[0].body.listenSongs;
              var e = {
                profile: t[0].body.profile,
                playlist: t[1].body.playlist
              };
              n("setUser", r()({}, e, { done: c }));
            });
          }
        };
      e.a = { namespaced: !0, state: o, getters: m, mutations: d, actions: p };
    },
    "c+Bi": function(t, e, n) {
      "use strict";
      var i = n("EVRK");
      e.a = {
        props: { index: { type: Number, required: !0 } },
        methods: {
          select: function() {
            i.a.$emit("tabs:change", this.index);
          }
        }
      };
    },
    ce1O: function(t, e, n) {
      "use strict";
      e.a = {
        data: function() {
          return { str: "", timer: null, active: !1 };
        },
        methods: {
          show: function(t) {
            t &&
              ((this.str = t),
              (this.active = !0),
              clearTimeout(this.timer),
              (this.timer = setTimeout(
                function(t) {
                  t.hide();
                },
                2e3,
                this
              )));
          },
          hide: function() {
            this.active = !1;
          }
        }
      };
    },
    cg3r: function(t, e, n) {
      "use strict";
      var i = n("0M4l"),
        a = n("7hdd"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    cg4n: function(t, e, n) {
      "use strict";
      var i = n("poyL"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    d734: function(t, e, n) {
      "use strict";
      var i = n("CnPT"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    dI8L: function(t, e, n) {
      "use strict";
      var i = n("gyMJ"),
        a = n("A1mk"),
        s = new a.a(),
        r = new a.a(),
        u = new a.a(),
        c = { songs: 1, albums: 10, artists: 100, playlists: 1e3 },
        l = { 1: "songs", 10: "albums", 100: "artists", 1000: "playlists" },
        o = {
          songs: "单曲",
          albums: "专辑",
          artists: "艺人",
          playlists: "歌单"
        },
        m = {
          _suggest: {},
          _history: [],
          _multi: {},
          _songs: [],
          _albums: [],
          _artists: [],
          _playlists: []
        },
        d = {
          suggest: function(t) {
            var e = t._suggest,
              n = e.order,
              i = [];
            if (n) {
              var a = n.indexOf("mvs");
              a > -1 && n.splice(a, 1);
              for (var s = 0, r = n.length; s < r; s++)
                !(function(t, a) {
                  var s = n[t];
                  if (e.hasOwnProperty(s)) {
                    e[s].forEach(function(t) {
                      var e = void 0;
                      switch (s) {
                        case "albums":
                          e = t.artist.name;
                          break;
                        case "songs":
                          e = t.artists[0].name;
                          break;
                        default:
                          e = "";
                      }
                      i.push({
                        id: t.id,
                        name: t.name,
                        type: c[s],
                        alias: o[s],
                        artist: e
                      });
                    });
                  }
                })(s);
            }
            return i;
          },
          history: function(t) {
            return t._history;
          },
          songs: function(t) {
            var e = t._songs,
              n = [];
            return (
              e.forEach(function(t) {
                var e = t.id,
                  i = t.album,
                  a = t.artists,
                  s = t.name,
                  r = t.mvid;
                n.push({
                  id: e,
                  name: s,
                  artist: { id: a[0].id, name: a[0].name },
                  album: { id: i.id, name: i.name, status: i.status },
                  mvid: r
                });
              }),
              n
            );
          },
          multi: function(t) {
            var e = t._multi,
              n = void 0,
              i = void 0,
              a = {};
            return (
              (n = e.album && e.album[0]) &&
                (a.album = {
                  id: n.id,
                  name: n.name,
                  picUrl: n.picUrl,
                  artist: n.artist.name
                }),
              (i = e.artist && e.artist[0]) &&
                (a.artist = {
                  id: i.id,
                  name: i.name,
                  picUrl: i.picUrl,
                  alias: i.alias[0]
                }),
              a
            );
          },
          albums: function(t) {
            var e = t._albums,
              n = [];
            return (
              e.forEach(function(t) {
                var e = t.id,
                  i = t.alias,
                  a = t.artist,
                  s = t.picUrl,
                  r = t.name,
                  u = t.publishTime,
                  c = new Date(u);
                n.push({
                  id: e,
                  name: r,
                  artist: a.name,
                  picUrl: s,
                  alias: i[0],
                  publishTime:
                    c.getFullYear() +
                    "-" +
                    (c.getMonth() + 1) +
                    "-" +
                    c.getDate()
                });
              }),
              n
            );
          },
          artists: function(t) {
            var e = t._artists,
              n = [];
            return (
              e.forEach(function(t) {
                var e = t.id,
                  i = t.img1v1Url,
                  a = t.name,
                  s = t.alias;
                n.push({ id: e, avatar: i, name: a, alias: s[0] });
              }),
              n
            );
          },
          playlists: function(t) {
            var e = t._playlists,
              n = [];
            return (
              e.forEach(function(t) {
                var e = t.id,
                  i = t.name,
                  a = t.trackCount,
                  s = t.creator.nickname,
                  r = t.playCount,
                  u = t.coverImgUrl;
                n.push({
                  id: e,
                  name: i,
                  trackCount: a,
                  by: s,
                  playCount: r,
                  coverImgUrl: u
                });
              }),
              n
            );
          }
        },
        p = {
          setSuggest: function(t, e) {
            var n = e.suggest;
            t._suggest = n;
          },
          clearSuggest: function(t) {
            t._suggest = {};
          },
          setHistory: function(t, e) {
            var n = e.keywords,
              i = e.remove;
            if (!n) return !1;
            var a = t._history,
              s = a.findIndex(function(t) {
                return t.keywords === n;
              });
            if (s > -1) {
              var r = a.splice(s, 1);
              i || a.unshift(r[0]);
            } else a.unshift({ keywords: n }), a.length > 10 && a.pop();
          },
          setResult: function(t, e) {
            var n = e.result,
              i = e.type;
            t["_" + i] = t["_" + i].concat(n);
          },
          setMultiResult: function(t, e) {
            var n = e.result;
            t._multi = n;
          },
          resetResult: function(t) {
            (t._multi = {}),
              (t._songs = []),
              (t._albums = []),
              (t._artists = []),
              (t._playlists = []);
          }
        },
        f = {
          getSuggest: function(t, e) {
            var n = t.commit,
              a = e.keywords;
            s.has(a) && !s.isExpire()
              ? n("setSuggest", s.get(a))
              : Vue.http
                  .get(i.o + "?keywords=" + encodeURIComponent(a))
                  .then(function(t) {
                    var e = t.body.result,
                      i = { suggest: e };
                    s.set(a, i), n("setSuggest", i);
                  });
          },
          getResult: function(t, e) {
            var n = t.commit,
              a = e.keywords,
              s = e.limit,
              u = e.type;
            r.has(a) && !r.isExpire()
              ? n("setResult", r.get(a))
              : Vue.http
                  .get(
                    i.m + "?keywords=" + encodeURIComponent(a) + "&limit=" + s
                  )
                  .then(function(t) {
                    var e = t.body.result,
                      i = { result: e[l[u]], type: l[u] };
                    r.set(a, i), n("setResult", i);
                  });
          },
          getMultiResult: function(t, e) {
            var n = t.commit,
              a = e.keywords;
            u.has(a) && !u.isExpire()
              ? n("setMultiResult", u.get(a))
              : Vue.http
                  .get(i.n + "?keywords=" + encodeURIComponent(a))
                  .then(function(t) {
                    var e = t.body.result,
                      i = { result: e };
                    u.set(a, i), n("setMultiResult", i);
                  });
          }
        };
      e.a = { namespaced: !0, state: m, getters: d, mutations: p, actions: f };
    },
    dpo6: function(t, e, n) {
      "use strict";
      var i = n("LOkV"),
        a = [],
        s = [],
        r = [],
        u = [],
        c = !1,
        l = i.b.height,
        o = n("8YLC"),
        m = void 0,
        d = 0,
        p = function(t, e) {
          if ("IMG" !== t.tagName || !e.value) return !1;
          var n = e.value,
            l = void 0,
            p = void 0;
          if (
            ("string" == Object(i.e)(n)
              ? (l = n)
              : "object" == Object(i.e)(n) && ((l = n.src), (p = n.wrapper)),
            r.indexOf(l) > -1
              ? (t.src = l)
              : ((t.src = o), (c ? s : a).push({ id: d, el: t, src: l }), ++d),
            p)
          ) {
            var g = document.querySelector(p);
            g &&
              -1 == u.indexOf(g) &&
              (g.addEventListener("load", f),
              g.addEventListener("scroll", h(f, 100)),
              u.push(g));
          }
          clearTimeout(m),
            (m = setTimeout(function() {
              f();
            }, 100));
        },
        f = function() {
          if ((console.time("lazyload"), c || 0 == a.length)) return !1;
          c = !0;
          for (
            var t = (document.documentElement.scrollTop ||
                document.body.scrollTop,
              []),
              e = 0,
              n = a.length;
            e < n;
            e++
          )
            !(function(e, n) {
              var i = a[e],
                s = i.id,
                r = i.el,
                u = i.src,
                c = r.getBoundingClientRect(),
                o = [-100, l + 100];
              ((c.top > o[0] && c.top <= o[1]) ||
                (c.bottom > o[0] && c.bottom <= o[1])) &&
                ((r.onload = function() {
                  (r.onload = null), (r.style.opacity = 1);
                }),
                (r.src = u),
                t.push(s));
            })(e);
          t.length > 0 &&
            ((r = r.concat(t)),
            (a = a
              .filter(function(e) {
                return -1 == t.indexOf(e.id);
              })
              .concat(s.slice())),
            (s.length = 0)),
            (c = !1),
            console.timeEnd("lazyload");
        },
        h = function(t, e) {
          var n = void 0,
            i = !1;
          return function() {
            i ||
              ((i = !0),
              t.apply(this, arguments),
              clearTimeout(n),
              (n = setTimeout(function() {
                i = !1;
              }, e)));
          };
        };
      e.a = { inserted: p, updated: p };
    },
    eIu7: function(t, e, n) {
      "use strict";
      var i = n("f5Qi"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    eopR: function(t, e, n) {
      "use strict";
      var i = n("IUIu"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    f5Qi: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "page-content" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    fknX: function(t, e, n) {
      "use strict";
      var i = n("EVRK");
      e.a = {
        data: function() {
          return { activeIndex: 0, indicator: null };
        },
        methods: {
          change: function(t) {
            this.$emit("tabs:beforeChange", this.activeIndex);
            var e = this.$children[t].$el.children[0],
              n = e.offsetLeft,
              i = e.offsetWidth,
              a = this.indicator.style;
            (a.left = n + "px"), (a.width = i + "px"), (this.activeIndex = t);
          },
          afterchange: function() {
            this.$emit("tabs:afterChange", this.activeIndex);
          },
          init: function() {
            var t = this;
            (this.indicator = this.$refs.indicator),
              i.a.$on("tabs:change", function(e) {
                t.change(e);
              }),
              setTimeout(
                function(t) {
                  t.change(0);
                },
                1e3,
                this
              ),
              this.$emit("tabs:init", this);
          }
        },
        mounted: function() {
          this.init();
        }
      };
    },
    gCbH: function(t, e, n) {
      "use strict";
      e.a = {
        props: { color: String },
        computed: {
          computedColor: function() {
            if (this.color) return { "background-color": this.color };
          }
        }
      };
    },
    gQ4O: function(t, e, n) {
      "use strict";
      e.a = {
        data: function() {
          return { active: !1 };
        },
        methods: {
          show: function() {
            this.active = !0;
          },
          hide: function() {
            this.active = !1;
          }
        }
      };
    },
    gn1g: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { ref: "navigation", staticClass: "tabs-navigation" },
            [
              t._t("default"),
              t._v(" "),
              n("div", {
                ref: "indicator",
                staticClass: "tab-indicator",
                on: { transitionend: t.afterchange }
              })
            ],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    gyMJ: function(t, e, n) {
      "use strict";
      n.d(e, "l", function() {
        return a;
      }),
        n.d(e, "a", function() {
          return s;
        }),
        n.d(e, "b", function() {
          return r;
        }),
        n.d(e, "c", function() {
          return u;
        }),
        n.d(e, "h", function() {
          return c;
        }),
        n.d(e, "i", function() {
          return l;
        }),
        n.d(e, "o", function() {
          return o;
        }),
        n.d(e, "m", function() {
          return m;
        }),
        n.d(e, "n", function() {
          return d;
        }),
        n.d(e, "p", function() {
          return p;
        }),
        n.d(e, "q", function() {
          return f;
        }),
        n.d(e, "e", function() {
          return h;
        }),
        n.d(e, "g", function() {
          return g;
        }),
        n.d(e, "d", function() {
          return y;
        }),
        n.d(e, "f", function() {
          return v;
        }),
        n.d(e, "k", function() {
          return _;
        }),
        n.d(e, "j", function() {
          return b;
        });
      var i = "http://39.106.10.121",
        a = i + "/recommend/songs",
        s = i + "/album",
        r = i + "/comment/album",
        u = i + "/artists",
        c = i + "/personalized",
        l = i + "/personalized/newsong",
        o = i + "/search/suggest",
        m = i + "/search",
        d = i + "/search/multimatch",
        p = i + "/user/detail",
        f = i + "/user/playlist",
        h = i + "/song/detail",
        g = i + "/music/url",
        y = i + "/comment/music",
        v = i + "/lyric",
        _ = i + "/playlist/detail",
        b = i + "/comment/playlist";
    },
    jQg5: function(t, e, n) {
      "use strict";
      var i = n("u8fz"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    kXD9: function(t, e, n) {
      "use strict";
      var i = n("Kwjy"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    ljHZ: function(t, e, n) {
      "use strict";
      e.a = { props: { gutter: Boolean, nowrap: Boolean } };
    },
    "mG+c": function(t, e, n) {
      "use strict";
      var i = n("7U0y"),
        a = n("PTUx"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    n68v: function(t, e, n) {
      "use strict";
      var i = n("E+c7"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    nHQ4: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "tip loading-tip text-center",
              class: { active: t.active },
              staticStyle: { "background-color": "rgba(10,9,9,0.8)" }
            },
            [
              n("spectrum", {
                staticClass: "playing",
                attrs: { color: "#F57614" }
              })
            ],
            1
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    nMV2: function(t, e, n) {
      "use strict";
      var i = n("woOf"),
        a = n.n(i),
        s = n("gyMJ"),
        r = n("A1mk"),
        u = new r.a(),
        c = { _artist: null, _hotSongs: null },
        l = {
          artist: function(t) {
            if (!t._artist) return !1;
            var e = t._artist,
              n = e.alias,
              i = e.briefDesc,
              a = e.id,
              s = e.name,
              r = e.picUrl;
            return { id: a, picUrl: r, name: s, briefDesc: i, alias: n[0] };
          },
          hotSongs: function(t) {
            if (!t._hotSongs) return !1;
            var e = t._hotSongs,
              n = [];
            return (
              e.forEach(function(t) {
                var e = t.id,
                  i = t.name,
                  a = t.al,
                  s = t.ar,
                  r = t.alia,
                  u = [];
                s.forEach(function(t) {
                  var e = t.name;
                  u.push(e);
                }),
                  n.push({
                    id: e,
                    name: i,
                    album: a.name,
                    alias: r[0],
                    artist: u.join("/")
                  });
              }),
              n
            );
          }
        },
        o = {
          setArtist: function(t, e) {
            var n = e.artist,
              i = e.hotSongs,
              a = e.done;
            (t._artist = n), (t._hotSongs = i), a();
          }
        },
        m = {
          getArtist: function(t, e) {
            var n = t.commit,
              i = t.getters,
              r = e.id,
              c = e.done;
            if (u.has(r) && !u.isExpire())
              return (
                i.artist.id != r ? n("setArtist", a()({}, u.get(r), c)) : c(),
                !1
              );
            Vue.http.get(s.c + "?id=" + r).then(function(t) {
              var e = t.body,
                i = e.artist,
                s = e.hotSongs,
                l = { artist: i, hotSongs: s };
              u.set(r, l), n("setArtist", a()({}, l, { done: c }));
            });
          }
        };
      e.a = { namespaced: !0, state: c, getters: l, mutations: o, actions: m };
    },
    pKZN: function(t, e, n) {
      "use strict";
      var i = n("P/tO"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    pVTJ: function(t, e, n) {
      "use strict";
      var i = n("Dd8w"),
        a = n.n(i),
        s = n("DV1V");
      e.a = {
        computed: a()(
          {},
          Vuex.mapGetters("musicPlayer", [
            "currentPlays",
            "recentlyPlaying",
            "lyric",
            "musicUrl",
            "supported"
          ]),
          {
            player: function() {
              return this.$refs.player;
            }
          }
        ),
        methods: {
          error: function() {
            this.currentPlays &&
              this.currentPlays.url &&
              s.a.$emit("unsupported");
          },
          stalled: function() {
            s.a.$emit("unsupported");
          },
          canplay: function() {
            this.recentlyPlaying && this.player.play();
          },
          durationchange: function() {
            this.$store.commit("musicPlayer/loadedmetadata", {
              duration: this.player.duration
            });
          },
          ended: function() {
            (this.player.currentTime = 0),
              this.$store.commit("musicPlayer/ended");
          },
          loadedmetadata: function() {
            this.$store.commit("musicPlayer/loadedmetadata", {
              duration: this.player.duration
            });
          },
          pause: function() {
            this.$store.commit("musicPlayer/pause");
          },
          playing: function() {
            this.$store.commit("musicPlayer/playing");
          },
          timeupdate: function() {
            this.$store.commit("musicPlayer/timeupdate", {
              currentTime: this.player.currentTime
            });
          }
        },
        mounted: function() {
          var t = this;
          s.a
            .$on("toggle", function() {
              t.player.paused
                ? t.currentPlays.supported
                  ? t.player.play()
                  : s.a.$emit("unsupported")
                : (t.player.pause(),
                  t.$store.commit("musicPlayer/setRecentlyPlaying", {
                    recentlyPlaying: !1
                  }));
            })
            .$on("seeked", function(e) {
              var n = e.currentTime,
                i = t.lyric.findIndex(function(t) {
                  return t.time >= n;
                });
              i > -1 &&
                t.$store.commit("musicPlayer/setNextCursor", { cursor: i }),
                (t.player.currentTime = n);
            })
            .$on("unsupported", function() {
              t.player.pause(),
                (t.player.currentTime = 0),
                t.$store.commit("musicPlayer/setSupported", {
                  id: (t.currentPlays && t.currentPlays.id) || "",
                  supported: !1
                }),
                t.$tip.show("当前歌曲暂不支持播放");
            });
        }
      };
    },
    poyL: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "transition",
            { attrs: { name: t.$router.transfer } },
            [
              n(
                "keep-alive",
                { attrs: { include: "home,search" } },
                [n("router-view")],
                1
              )
            ],
            1
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    q6Qc: function(t, e, n) {
      "use strict";
      var i = n("THwN"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    "s+dX": function(t, e, n) {
      "use strict";
      var i = n("//Fk"),
        a = n.n(i),
        s = n("woOf"),
        r = n.n(s),
        u = n("gyMJ"),
        c = n("LOkV"),
        l = n("A1mk"),
        o = new l.a(),
        m = { _album: null, _songs: null, _comments: null, _hotComments: null },
        d = {
          album: function(t) {
            if (!t._album) return !1;
            var e = t._album,
              n = e.id,
              i = e.picUrl,
              a = e.artist,
              s = e.description,
              r = e.name,
              u = e.status,
              l = e.publishTime,
              o = new Date(l);
            return {
              id: n,
              picUrl: i,
              artist: { id: a.id, name: a.name },
              description: s,
              name: r,
              status: u,
              publishTime:
                o.getFullYear() +
                "-" +
                Object(c.f)(o.getMonth() + 1) +
                "-" +
                Object(c.f)(o.getDate())
            };
          },
          songs: function(t) {
            if (!t._songs) return !1;
            var e = t._songs,
              n = [];
            return (
              e.forEach(function(t) {
                var e = t.id,
                  i = t.name,
                  a = t.al,
                  s = t.ar,
                  r = t.alia;
                n.push({
                  id: e,
                  name: i,
                  album: a.name,
                  alias: r[0],
                  artist: s[0].name
                });
              }),
              n
            );
          },
          comments: function(t) {
            return t._comments;
          },
          hotComments: function(t) {
            return t._hotComments;
          }
        },
        p = {
          setAlbum: function(t, e) {
            var n = e.album,
              i = e.songs,
              a = e.comments,
              s = e.hotComments,
              r = e.done;
            a.forEach(function(t) {
              var e = new Date(t.time);
              if (
                ((t.timeString =
                  e.getFullYear() +
                  "年" +
                  (e.getMonth() + 1) +
                  "月" +
                  e.getDate() +
                  "日"),
                (t.translatedMessage = Object(c.c)(t.content)),
                t.beReplied.length > 0)
              ) {
                var n = t.beReplied[0];
                t.translatedBeReplied = {
                  user: { id: n.user.userId, nickname: n.user.nickname },
                  content: "@" + n.user.nickname + "：" + Object(c.c)(n.content)
                };
              }
            }),
              s.forEach(function(t) {
                var e = new Date(t.time);
                if (
                  ((t.timeString =
                    e.getFullYear() +
                    "年" +
                    (e.getMonth() + 1) +
                    "月" +
                    e.getDate() +
                    "日"),
                  (t.translatedMessage = Object(c.c)(t.content)),
                  t.beReplied.length > 0)
                ) {
                  var n = t.beReplied[0];
                  t.translatedBeReplied = {
                    user: { id: n.user.userId, nickname: n.user.nickname },
                    content:
                      "@" + n.user.nickname + "：" + Object(c.c)(n.content)
                  };
                }
              }),
              (t._album = n),
              (t._songs = i),
              (t._comments = a),
              (t._hotComments = s),
              r();
          }
        },
        f = {
          getAlbum: function(t, e) {
            var n = t.commit,
              i = t.getters,
              s = e.id,
              c = e.done;
            if (o.has(s) && !o.isExpire())
              return (
                i.album.id != s ? n("setAlbum", r()({}, o.get(s), c)) : c(), !1
              );
            var l = Vue.http.get(u.a + "?id=" + s),
              m = Vue.http.get(u.b + "?id=" + s);
            a.a.all([l, m]).then(function(t) {
              var e = {
                album: t[0].body.album,
                songs: t[0].body.songs,
                comments: t[1].body.comments,
                hotComments: t[1].body.hotComments
              };
              o.set(s, e), n("setAlbum", r()({}, e, { done: c }));
            });
          }
        };
      e.a = { namespaced: !0, state: m, getters: d, mutations: p, actions: f };
    },
    sA0W: function(t, e, n) {
      "use strict";
      var i = n("gyMJ"),
        a = { _recommend: null, _banner: null },
        s = {
          recommend: function(t) {
            if (!t._recommend) return !1;
            var e = [];
            return (
              t._recommend.forEach(function(t) {
                var n = [];
                t.artists.forEach(function(t) {
                  n.push(t.name);
                }),
                  e.push({
                    id: t.id,
                    name: t.name,
                    artists: n.join("/"),
                    album: t.album.name
                  });
              }),
              e
            );
          },
          banner: function(t) {
            if (!t._recommend) return !1;
            var e = t._recommend[0];
            return { sid: e.id, picUrl: e.album.picUrl };
          }
        },
        r = {
          setRecommend: function(t, e) {
            var n = e.recommend;
            t._recommend = n;
          }
        },
        u = {
          getRecommend: function(t) {
            var e = t.commit;
            if (t.getters.recommend) return !1;
            Vue.http.get(i.l).then(function(t) {
              var n = t.body.recommend;
              e("setRecommend", { recommend: n });
            });
          }
        };
      e.a = { namespaced: !0, state: a, getters: s, mutations: r, actions: u };
    },
    "sxu/": function(t, e, n) {
      "use strict";
      var i = n("BiHy"),
        a = n("VU/8"),
        s = a(null, i.a, !1, null, null, null);
      e.a = s.exports;
    },
    u8fz: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "card-media" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    ukI1: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "toolbar-inner" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    v7QK: function(t, e, n) {
      "use strict";
      e.a = { props: { ligature: { type: String, required: !0 } } };
    },
    wSq6: function(t, e, n) {
      "use strict";
      var i = n("gyMJ"),
        a = { _playlist: null, _newSong: null },
        s = {
          playlist: function(t) {
            return t._playlist;
          },
          newSong: function(t) {
            if (!t._newSong) return !1;
            var e = [];
            return (
              t._newSong.forEach(function(t) {
                var n = t.id,
                  i = t.name,
                  a = t.song,
                  s = [];
                a.artists.forEach(function(t) {
                  var e = t.name;
                  s.push(e);
                }),
                  e.push({
                    id: n,
                    name: i,
                    artists: s.join("/"),
                    album: a.name
                  });
              }),
              e
            );
          }
        },
        r = {
          setPlaylist: function(t, e) {
            var n = e.playlist;
            t._playlist = n;
          },
          setNewSong: function(t, e) {
            var n = e.newSong;
            t._newSong = n;
          }
        },
        u = {
          getPlaylist: function(t) {
            var e = t.commit;
            if (t.getters.playlist) return !1;
            Vue.http.get(i.h).then(function(t) {
              var n = t.body.result;
              e("setPlaylist", { playlist: n });
            });
          },
          getNewSong: function(t) {
            var e = t.commit;
            if (t.getters.newSong) return !1;
            Vue.http.get(i.i).then(function(t) {
              var n = t.body.result;
              e("setNewSong", { newSong: n });
            });
          }
        };
      e.a = { namespaced: !0, state: a, getters: s, mutations: r, actions: u };
    },
    wTCo: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            { staticClass: "list-item-inner" },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    x1FD: function(t, e, n) {
      "use strict";
      e.a = {
        name: "find",
        beforeCreate: function() {
          this.$store.dispatch("find/getNewSong"),
            this.$store.dispatch("find/getPlaylist");
        },
        computed: Vuex.mapGetters("find", ["playlist", "newSong"])
      };
    },
    xJD8: function(t, e, n) {
      "use strict";
      var i = n("Da2x");
      e.a = { components: { musicPlayer: i.a } };
    },
    xTkV: function(t, e, n) {
      "use strict";
      var i = n("//Fk"),
        a = n.n(i),
        s = n("woOf"),
        r = n.n(s),
        u = n("LOkV"),
        c = n("gyMJ"),
        l = n("A1mk"),
        o = new l.a(),
        m = { _playlist: null },
        d = {
          playlist: function(t) {
            return t._playlist;
          }
        },
        p = {
          setPlaylist: function(t, e) {
            var n = e.playlist,
              i = e.comments,
              a = e.done;
            i.forEach(function(t) {
              var e = new Date(t.time);
              if (
                ((t.timeString =
                  e.getFullYear() +
                  "年" +
                  (e.getMonth() + 1) +
                  "月" +
                  e.getDate() +
                  "日"),
                (t.translatedMessage = Object(u.c)(t.content)),
                t.beReplied.length > 0)
              ) {
                var n = t.beReplied[0];
                t.translatedBeReplied = {
                  user: { id: n.user.userId, nickname: n.user.nickname },
                  content: "@" + n.user.nickname + "：" + Object(u.c)(n.content)
                };
              }
            }),
              (n.comments = i),
              (t._playlist = n),
              a();
          }
        },
        f = {
          getPlaylist: function(t, e) {
            var n = t.commit,
              i = t.getters,
              s = e.id,
              u = e.done;
            if (o.has(s) && !o.isExpire())
              return (
                i.playlist.id != s
                  ? n("setPlaylist", r()({}, o.get(s), u))
                  : u(),
                !1
              );
            var l = Vue.http.get(c.k + "?id=" + s),
              m = Vue.http.get(c.j + "?id=" + s);
            a.a.all([l, m]).then(function(t) {
              var e = {
                playlist: t[0].body.playlist,
                comments: t[1].body.comments
              };
              o.set(s, e), n("setPlaylist", r()({}, e, { done: u }));
            });
          }
        };
      e.a = { namespaced: !0, state: m, getters: d, mutations: p, actions: f };
    },
    xUHO: function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)(
            "div",
            {
              staticClass: "grid",
              class: { gutter: t.gutter, nowrap: t.nowrap }
            },
            [t._t("default")],
            2
          );
        },
        a = [],
        s = { render: i, staticRenderFns: a };
      e.a = s;
    },
    yE9A: function(t, e, n) {
      "use strict";
      var i = n("XJZo"),
        a = n("QA8A"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    },
    zKIK: function(t, e, n) {
      "use strict";
      var i = n("SFkb"),
        a = n("7U2f"),
        s = n("VU/8"),
        r = s(i.a, a.a, !1, null, null, null);
      e.a = r.exports;
    }
  },
  ["NHnr"]
);
//# sourceMappingURL=app.6c0d65606469645d0347.js.map
