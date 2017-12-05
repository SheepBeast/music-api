webpackJsonp([6], {
  "8k7C": function(s, t, a) {
    "use strict";
    var e = function() {
        var s = this,
          t = s.$createElement,
          a = s._self._c || t;
        return s.album
          ? a(
              "page",
              { staticClass: "playlist", attrs: { id: "album" } },
              [
                a(
                  "section",
                  { staticClass: "pl-header" },
                  [
                    a("div", {
                      staticClass: "blur-bg",
                      style: {
                        "background-image": "url(" + s.album.picUrl + ")"
                      }
                    }),
                    s._v(" "),
                    a(
                      "toolbar",
                      { staticClass: "navigate" },
                      [
                        a(
                          "toolbar-inner",
                          [
                            a(
                              "grid",
                              [
                                a("cell", { attrs: { span: 33 } }),
                                s._v(" "),
                                a(
                                  "cell",
                                  {
                                    staticClass: "text-center",
                                    staticStyle: { "align-self": "center" },
                                    attrs: { span: 33 }
                                  },
                                  [
                                    a("span", { staticClass: "title" }, [
                                      s._v("专辑")
                                    ])
                                  ]
                                ),
                                s._v(" "),
                                a("cell", { attrs: { span: 33 } })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    s._v(" "),
                    a(
                      "toolbar",
                      { staticClass: "navigate", attrs: { fixed: "" } },
                      [
                        a(
                          "toolbar-inner",
                          [
                            a(
                              "grid",
                              [
                                a(
                                  "cell",
                                  { attrs: { span: 33 } },
                                  [a("back")],
                                  1
                                ),
                                s._v(" "),
                                a("cell", { attrs: { span: 33 } }),
                                s._v(" "),
                                a("cell", { attrs: { span: 33 } })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    s._v(" "),
                    a("div", { staticClass: "pl-header-wrapper" }, [
                      a("img", {
                        staticClass: "pl-header-cover",
                        attrs: { src: s.album.picUrl }
                      }),
                      s._v(" "),
                      a("div", { staticClass: "pl-header-info" }, [
                        a("h4", { staticClass: "title f-elpsl-2" }, [
                          s._v(s._s(s.album.name))
                        ]),
                        s._v(" "),
                        a(
                          "small",
                          { staticClass: "subhead f-elpsl-1" },
                          [
                            s._v("\n          歌手："),
                            a(
                              "router-link",
                              {
                                attrs: {
                                  tag: "span",
                                  to: {
                                    name: "artist",
                                    query: { id: s.album.artist.id }
                                  }
                                }
                              },
                              [s._v(s._s(s.album.artist.name))]
                            )
                          ],
                          1
                        ),
                        s._v(" "),
                        a("br"),
                        s._v(" "),
                        a("small", { staticClass: "subhead f-elpsl-1" }, [
                          s._v(
                            "\n          发行时间：" +
                              s._s(s.album.publishTime) +
                              "\n        "
                          )
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                s._v(" "),
                a(
                  "section",
                  { staticClass: "intro" },
                  [
                    a(
                      "div",
                      {
                        staticClass: "description",
                        class: { "f-elpsl-2": !s.showDesc },
                        on: { click: s.toggle }
                      },
                      [
                        s._v(
                          "\n      简介：" +
                            s._s(s.album.description) +
                            "\n    "
                        )
                      ]
                    ),
                    s._v(" "),
                    a("icon", {
                      staticClass: "icon-expand",
                      attrs: {
                        ligature: s.showDesc ? "expand_less" : "expand_more"
                      },
                      nativeOn: {
                        click: function(t) {
                          s.expand(t);
                        }
                      }
                    })
                  ],
                  1
                ),
                s._v(" "),
                s.songs
                  ? [
                      a("h4", { staticClass: "trk-title" }, [s._v("歌曲列表")]),
                      s._v(" "),
                      a(
                        "list",
                        s._l(s.songs, function(t, e) {
                          return a(
                            "router-link",
                            {
                              key: t.id,
                              staticClass: "list-item",
                              attrs: {
                                tag: "div",
                                to: { name: "musicPlayer", query: { id: t.id } }
                              }
                            },
                            [
                              a("span", { staticClass: "index" }, [
                                s._v(s._s(e + 1))
                              ]),
                              s._v(" "),
                              a(
                                "list-item-holder",
                                { staticClass: "dense" },
                                [
                                  a("list-item-inner", [
                                    a(
                                      "div",
                                      {
                                        staticClass: "prinary-title f-elpsl-1"
                                      },
                                      [
                                        s._v(
                                          "\n              " +
                                            s._s(t.name) +
                                            "\n              "
                                        ),
                                        t.alias
                                          ? a("span", [s._v(s._s(t.alias))])
                                          : s._e()
                                      ]
                                    ),
                                    s._v(" "),
                                    a(
                                      "div",
                                      { staticClass: "third-title f-elpsl-1" },
                                      [
                                        s._v(
                                          s._s(t.artist) + " - " + s._s(t.album)
                                        )
                                      ]
                                    )
                                  ]),
                                  s._v(" "),
                                  a("icon", {
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
                    ]
                  : s._e(),
                s._v(" "),
                s.hotComments.length > 0
                  ? a(
                      "section",
                      { staticClass: "comment" },
                      [
                        a("h4", { staticClass: "cmt-title" }, [
                          s._v("热门评论")
                        ]),
                        s._v(" "),
                        a(
                          "list",
                          s._l(s.hotComments, function(t) {
                            return a(
                              "list-item",
                              { key: t.commentId },
                              [
                                a(
                                  "router-link",
                                  {
                                    staticClass: "avatar",
                                    attrs: {
                                      to: {
                                        name: "user",
                                        query: { id: t.user.userId }
                                      },
                                      tag: "div"
                                    }
                                  },
                                  [
                                    a("img", {
                                      directives: [
                                        {
                                          name: "lazyload",
                                          rawName: "v-lazyload",
                                          value: {
                                            src: t.user.avatarUrl,
                                            wrapper: "#album"
                                          },
                                          expression:
                                            "{src: c.user.avatarUrl, wrapper: '#album'}"
                                        }
                                      ],
                                      staticClass: "lazyload"
                                    })
                                  ]
                                ),
                                s._v(" "),
                                a(
                                  "list-item-holder",
                                  [
                                    a("list-item-inner", [
                                      a(
                                        "div",
                                        { staticClass: "primary-title" },
                                        [
                                          a(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "user",
                                                  query: { id: t.user.userId }
                                                },
                                                tag: "span"
                                              }
                                            },
                                            [
                                              s._v(
                                                "\n                " +
                                                  s._s(t.user.nickname) +
                                                  "\n              "
                                              )
                                            ]
                                          ),
                                          s._v(" "),
                                          a(
                                            "small",
                                            { staticClass: "liked" },
                                            [
                                              s._v(
                                                "\n                " +
                                                  s._s(t.likedCount) +
                                                  "  \n                "
                                              ),
                                              a("icon", {
                                                attrs: { ligature: "thumb_up" }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      s._v(" "),
                                      a("div", { staticClass: "third-title" }, [
                                        s._v(s._s(t.timeString))
                                      ]),
                                      s._v(" "),
                                      t.translatedBeReplied
                                        ? a(
                                            "div",
                                            { staticClass: "message" },
                                            [
                                              s._v(
                                                "\n              回复\n              "
                                              ),
                                              a(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "reply-user-nickname",
                                                  attrs: {
                                                    to: {
                                                      name: "user",
                                                      query: {
                                                        id:
                                                          t.translatedBeReplied
                                                            .user.id
                                                      }
                                                    }
                                                  }
                                                },
                                                [
                                                  s._v(
                                                    "\n                @" +
                                                      s._s(
                                                        t.translatedBeReplied
                                                          .user.nickname
                                                      ) +
                                                      "\n              "
                                                  )
                                                ]
                                              ),
                                              s._v("：\n              "),
                                              a("span", [
                                                s._v(s._s(t.translatedMessage))
                                              ]),
                                              s._v(" "),
                                              a("div", {
                                                staticClass: "message reply",
                                                domProps: {
                                                  innerHTML: s._s(
                                                    t.translatedBeReplied &&
                                                      t.translatedBeReplied
                                                        .content
                                                  )
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : a("div", {
                                            staticClass: "message",
                                            domProps: {
                                              innerHTML: s._s(
                                                t.translatedMessage
                                              )
                                            }
                                          })
                                    ])
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
                  : s._e(),
                s._v(" "),
                s.comments.length > 0
                  ? a(
                      "section",
                      { staticClass: "comment" },
                      [
                        a("h4", { staticClass: "cmt-title" }, [
                          s._v("精彩评论")
                        ]),
                        s._v(" "),
                        a(
                          "list",
                          s._l(s.comments, function(t) {
                            return a(
                              "list-item",
                              { key: t.commentId },
                              [
                                a(
                                  "router-link",
                                  {
                                    staticClass: "avatar",
                                    attrs: {
                                      to: {
                                        name: "user",
                                        query: { id: t.user.userId }
                                      },
                                      tag: "div"
                                    }
                                  },
                                  [
                                    a("img", {
                                      directives: [
                                        {
                                          name: "lazyload",
                                          rawName: "v-lazyload",
                                          value: {
                                            src: t.user.avatarUrl,
                                            wrapper: "#album"
                                          },
                                          expression:
                                            "{src: c.user.avatarUrl, wrapper: '#album'}"
                                        }
                                      ],
                                      staticClass: "lazyload"
                                    })
                                  ]
                                ),
                                s._v(" "),
                                a(
                                  "list-item-holder",
                                  [
                                    a("list-item-inner", [
                                      a(
                                        "div",
                                        { staticClass: "primary-title" },
                                        [
                                          a(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "user",
                                                  query: { id: t.user.userId }
                                                },
                                                tag: "span"
                                              }
                                            },
                                            [
                                              s._v(
                                                "\n                " +
                                                  s._s(t.user.nickname) +
                                                  "\n              "
                                              )
                                            ]
                                          ),
                                          s._v(" "),
                                          a(
                                            "small",
                                            { staticClass: "liked" },
                                            [
                                              s._v(
                                                "\n                " +
                                                  s._s(t.likedCount) +
                                                  "  \n                "
                                              ),
                                              a("icon", {
                                                attrs: { ligature: "thumb_up" }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      s._v(" "),
                                      a("div", { staticClass: "third-title" }, [
                                        s._v(s._s(t.timeString))
                                      ]),
                                      s._v(" "),
                                      t.translatedBeReplied
                                        ? a(
                                            "div",
                                            { staticClass: "message" },
                                            [
                                              s._v(
                                                "\n              回复\n              "
                                              ),
                                              a(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "reply-user-nickname",
                                                  attrs: {
                                                    to: {
                                                      name: "user",
                                                      query: {
                                                        id:
                                                          t.translatedBeReplied
                                                            .user.id
                                                      }
                                                    }
                                                  }
                                                },
                                                [
                                                  s._v(
                                                    "\n                @" +
                                                      s._s(
                                                        t.translatedBeReplied
                                                          .user.nickname
                                                      ) +
                                                      "\n              "
                                                  )
                                                ]
                                              ),
                                              s._v("：\n              "),
                                              a("span", {
                                                domProps: {
                                                  innerHTML: s._s(
                                                    t.translatedMessage
                                                  )
                                                }
                                              }),
                                              s._v(" "),
                                              a("div", {
                                                staticClass: "message reply",
                                                domProps: {
                                                  innerHTML: s._s(
                                                    t.translatedBeReplied &&
                                                      t.translatedBeReplied
                                                        .content
                                                  )
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : a("div", {
                                            staticClass: "message",
                                            domProps: {
                                              innerHTML: s._s(
                                                t.translatedMessage
                                              )
                                            }
                                          })
                                    ])
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
                  : s._e()
              ],
              2
            )
          : a("loading-page");
      },
      i = [],
      l = { render: e, staticRenderFns: i };
    t.a = l;
  },
  Emcu: function(s, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = a("eoKv"),
      i = a("8k7C"),
      l = a("VU/8"),
      r = l(e.a, i.a, !1, null, null, null);
    t.default = r.exports;
  },
  eoKv: function(s, t, a) {
    "use strict";
    t.a = {
      data: function() {
        return { showDesc: !1 };
      },
      methods: {
        toggle: function() {
          this.showDesc = !this.showDesc;
        }
      },
      computed: Vuex.mapGetters("album", [
        "album",
        "songs",
        "comments",
        "hotComments"
      ])
    };
  }
});
//# sourceMappingURL=6.39b67db991bca9073bed.js.map
