webpackJsonp([9], {
  Mjf3: function(t, i, s) {
    "use strict";
    i.a = {
      computed: Vuex.mapGetters("search", ["songs", "multi"]),
      methods: {
        unsupported: function() {
          this.$tip.show("当前专辑需单独付费");
        }
      }
    };
  },
  kT64: function(t, i, s) {
    "use strict";
    var a = function() {
        var t = this,
          i = t.$createElement,
          s = t._self._c || i;
        return s(
          "div",
          { staticClass: "songs" },
          [
            s("h4", { staticClass: "trk-title" }, [t._v("最佳匹配")]),
            t._v(" "),
            s(
              "list",
              [
                t.multi.album
                  ? s(
                      "list-item",
                      [
                        s("avatar", { staticClass: "rect" }, [
                          s("img", { attrs: { src: t.multi.album.picUrl } })
                        ]),
                        t._v(" "),
                        s(
                          "router-link",
                          {
                            staticClass: "list-item-holder middle",
                            attrs: {
                              tag: "div",
                              to: {
                                name: "album",
                                query: { id: t.multi.album.id }
                              }
                            }
                          },
                          [
                            s("list-item-inner", [
                              s(
                                "div",
                                { staticClass: "prinary-title f-elpsl-1" },
                                [
                                  t._v(
                                    "\n            专辑：" +
                                      t._s(t.multi.album.name) +
                                      "\n          "
                                  )
                                ]
                              ),
                              t._v(" "),
                              s(
                                "div",
                                { staticClass: "third-title f-elpsl-1" },
                                [t._v(t._s(t.multi.album.artist))]
                              )
                            ]),
                            t._v(" "),
                            s("icon", { attrs: { ligature: "navigate_next" } })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t.multi.artist
                  ? s(
                      "list-item",
                      [
                        s("avatar", { staticClass: "rect" }, [
                          s("img", { attrs: { src: t.multi.artist.picUrl } })
                        ]),
                        t._v(" "),
                        s(
                          "router-link",
                          {
                            staticClass: "list-item-holder middle",
                            attrs: {
                              tag: "div",
                              to: {
                                name: "artist",
                                query: { id: t.multi.artist.id }
                              }
                            }
                          },
                          [
                            s("list-item-inner", [
                              s(
                                "div",
                                { staticClass: "prinary-title f-elpsl-1" },
                                [
                                  t._v(
                                    "\n            歌手：" +
                                      t._s(t.multi.artist.name) +
                                      "\n            "
                                  ),
                                  t.multi.artist.alias
                                    ? s("span", { staticClass: "alias" }, [
                                        t._v(
                                          "（" +
                                            t._s(t.multi.artist.alias) +
                                            "）"
                                        )
                                      ])
                                    : t._e()
                                ]
                              )
                            ]),
                            t._v(" "),
                            s("icon", { attrs: { ligature: "navigate_next" } })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t._l(t.songs, function(i) {
                  return s(
                    "list-item",
                    { key: i.id },
                    [
                      i.album.status >= 0
                        ? s(
                            "router-link",
                            {
                              staticClass: "list-item-holder dense no-avatar",
                              attrs: {
                                tag: "div",
                                to: { name: "musicPlayer", query: { id: i.id } }
                              }
                            },
                            [
                              s("list-item-inner", [
                                s(
                                  "div",
                                  { staticClass: "prinary-title f-elpsl-1" },
                                  [t._v(t._s(i.name))]
                                ),
                                t._v(" "),
                                s(
                                  "div",
                                  { staticClass: "third-title f-elpsl-1" },
                                  [
                                    t._v(
                                      t._s(i.artist.name) +
                                        " - " +
                                        t._s(i.album.name)
                                    )
                                  ]
                                )
                              ]),
                              t._v(" "),
                              s("icon", {
                                staticClass: "icon-play",
                                attrs: { ligature: "play_circle_outline" }
                              })
                            ],
                            1
                          )
                        : s(
                            "list-item-holder",
                            {
                              staticClass: "dense no-avatar",
                              nativeOn: {
                                click: function(i) {
                                  t.unsupported(i);
                                }
                              }
                            },
                            [
                              s("list-item-inner", [
                                s(
                                  "div",
                                  { staticClass: "prinary-title f-elpsl-1" },
                                  [t._v(t._s(i.name))]
                                ),
                                t._v(" "),
                                s(
                                  "div",
                                  { staticClass: "third-title f-elpsl-1" },
                                  [
                                    t._v(
                                      t._s(i.artist.name) +
                                        " - " +
                                        t._s(i.album.name)
                                    )
                                  ]
                                )
                              ]),
                              t._v(" "),
                              s("icon", {
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
              ],
              2
            )
          ],
          1
        );
      },
      l = [],
      e = { render: a, staticRenderFns: l };
    i.a = e;
  },
  p04V: function(t, i, s) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var a = s("Mjf3"),
      l = s("kT64"),
      e = s("VU/8"),
      r = e(a.a, l.a, !1, null, null, null);
    i.default = r.exports;
  }
});
//# sourceMappingURL=9.89b381be86e699856b27.js.map
