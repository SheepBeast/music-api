webpackJsonp([0], {
  "2Qhm": function(t, e, i) {
    "use strict";
    var s = i("FLDR"),
      n = i("zGp1"),
      a = i("VU/8"),
      r = a(s.a, n.a, !1, null, null, null);
    e.a = r.exports;
  },
  "49UR": function(t, e, i) {
    "use strict";
    var s = i("ZcDh"),
      n = i("hK8O"),
      a = i("VU/8"),
      r = a(s.a, n.a, !1, null, null, null);
    e.a = r.exports;
  },
  BNQM: function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = i("Fwt1"),
      n = i("DWfK"),
      a = i("VU/8"),
      r = a(s.a, n.a, !1, null, null, null);
    e.default = r.exports;
  },
  CWAW: function(t, e, i) {
    "use strict";
    var s = i("DV1V");
    e.a = {
      data: function() {
        return { active: !1, showContainer: !1 };
      },
      computed: Vuex.mapGetters("musicPlayer", ["playlist", "playIndex"]),
      methods: {
        cut: function(t) {
          this.$store.commit("musicPlayer/cut", { index: t });
        },
        close: function() {
          s.a.$emit("togglePlaylist");
        },
        remove: function(t) {
          this.$store.commit("musicPlayer/remove", { index: t, vm: this });
        }
      },
      created: function() {
        var t = this;
        s.a.$on("togglePlaylist", function() {
          t.active
            ? ((t.active = !1),
              setTimeout(function() {
                t.showContainer = !1;
              }, 300))
            : ((t.showContainer = !0),
              setTimeout(function() {
                t.active = !0;
              }, 100));
        });
      }
    };
  },
  DWfK: function(t, e, i) {
    "use strict";
    var s = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return t.currentPlays
          ? i(
              "page",
              { staticClass: "music-player-interface" },
              [
                i("div", {
                  staticClass: "blur-bg",
                  class: { mask: t.hideCover },
                  style: {
                    "background-image": "url(" + t.currentPlays.al.picUrl + ")"
                  },
                  attrs: { id: "blur" }
                }),
                t._v(" "),
                i("back"),
                t._v(" "),
                i("div", { staticClass: "cover" }, [
                  i("img", {
                    class: { hidden: t.hideCover },
                    style: t.computedCoverHeight,
                    attrs: { src: t.currentPlays.al.picUrl },
                    on: {
                      click: t.toggleCover,
                      transitionend: t.coverTransitionEnd
                    }
                  }),
                  t._v(" "),
                  i(
                    "div",
                    {
                      ref: "lyric",
                      staticClass: "lyric",
                      style: { display: t.notDisplayLyric ? "none" : "block" }
                    },
                    [
                      i(
                        "div",
                        {
                          staticClass: "lyc-wrapper",
                          style: {
                            top:
                              "-webkit-calc(50% - " +
                              25 * t.currentLyricLine +
                              "px)"
                          }
                        },
                        [
                          t.lyric.length > 0
                            ? t._l(t.lyric, function(e, s) {
                                return i(
                                  "p",
                                  {
                                    key: e.time,
                                    class: { lighter: t.currentLyricLine === s }
                                  },
                                  [t._v(t._s(e.clause))]
                                );
                              })
                            : [i("p", [t._v("暂无歌词")])]
                        ],
                        2
                      )
                    ]
                  )
                ]),
                t._v(" "),
                i("timeline", {
                  attrs: { "min-value": 0, "max-value": t.duration }
                }),
                t._v(" "),
                i(
                  "div",
                  {
                    staticClass: "controls",
                    staticStyle: {
                      "padding-top": "10px",
                      "padding-bottom": "20px"
                    }
                  },
                  [
                    i(
                      "div",
                      { staticClass: "info text-center" },
                      [
                        i(
                          "router-link",
                          {
                            staticClass: "name",
                            attrs: {
                              tag: "h3",
                              to: {
                                name: "album",
                                query: { id: t.currentPlays.al.id }
                              }
                            }
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.currentPlays.name) +
                                "\n      "
                            )
                          ]
                        ),
                        t._v(" "),
                        i(
                          "router-link",
                          {
                            staticClass: "artist",
                            attrs: {
                              tag: "h4",
                              to: {
                                name: "artist",
                                query: { id: t.currentPlays.ar[0].id }
                              }
                            }
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.currentPlays.ar[0].name) +
                                "\n      "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    t._v(" "),
                    i(
                      "div",
                      {
                        staticClass: "operation-buttons",
                        staticStyle: {
                          width: "70%",
                          margin: "auto",
                          "margin-bottom": "10px",
                          color: "rgba(0, 0, 0, 0.7)"
                        }
                      },
                      [
                        i("icon", {
                          attrs: { ligature: "favorite_border" },
                          nativeOn: {
                            click: function(e) {
                              t.undeveloped(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          attrs: { ligature: "file_download" },
                          nativeOn: {
                            click: function(e) {
                              t.undeveloped(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          staticStyle: { transform: "scaleX(-1)" },
                          attrs: { ligature: "reply" },
                          nativeOn: {
                            click: function(e) {
                              t.undeveloped(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          attrs: { ligature: "more_horiz" },
                          nativeOn: {
                            click: function(e) {
                              t.undeveloped(e);
                            }
                          }
                        })
                      ],
                      1
                    ),
                    t._v(" "),
                    i(
                      "div",
                      { staticClass: "operation-buttons" },
                      [
                        i("icon", {
                          staticStyle: {
                            "font-size": "20px",
                            color: "rgba(0,0,0,0.7)"
                          },
                          attrs: { ligature: t.mode },
                          nativeOn: {
                            click: function(e) {
                              t.setMode(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          staticStyle: { "font-size": "36px" },
                          attrs: { ligature: "skip_previous" },
                          nativeOn: {
                            click: function(e) {
                              t.skipPrevious(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          staticStyle: { "font-size": "54px" },
                          attrs: { ligature: t.switch_button },
                          nativeOn: {
                            click: function(e) {
                              t.toggle(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          staticStyle: { "font-size": "36px" },
                          attrs: { ligature: "skip_next" },
                          nativeOn: {
                            click: function(e) {
                              t.skipNext(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          staticStyle: {
                            "font-size": "20px",
                            color: "rgba(0,0,0,0.7)"
                          },
                          attrs: { ligature: "playlist_play" },
                          nativeOn: {
                            click: function(e) {
                              t.togglePlaylist(e);
                            }
                          }
                        })
                      ],
                      1
                    )
                  ]
                ),
                t._v(" "),
                i(
                  "div",
                  {
                    ref: "mini",
                    staticClass: "music-player-mini-interface",
                    class: { active: t.showMiniUI }
                  },
                  [
                    i("img", {
                      staticStyle: { height: "100%" },
                      attrs: { src: t.currentPlays.al.picUrl }
                    }),
                    t._v(" "),
                    i(
                      "div",
                      { staticClass: "operation-buttons" },
                      [
                        i("icon", {
                          staticClass: "text-center",
                          attrs: { ligature: "favorite_border" },
                          nativeOn: {
                            click: function(e) {
                              t.undeveloped(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          staticClass: "text-center larger",
                          attrs: { ligature: "skip_previous" },
                          nativeOn: {
                            click: function(e) {
                              t.skipPrevious(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          staticClass: "text-center larger",
                          attrs: { ligature: t.switch_button },
                          nativeOn: {
                            click: function(e) {
                              t.toggle(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          staticClass: "text-center larger",
                          attrs: { ligature: "skip_next" },
                          nativeOn: {
                            click: function(e) {
                              t.skipNext(e);
                            }
                          }
                        }),
                        t._v(" "),
                        i("icon", {
                          staticClass: "text-center larger",
                          attrs: { ligature: "more_horiz" },
                          nativeOn: {
                            click: function(e) {
                              t.undeveloped(e);
                            }
                          }
                        })
                      ],
                      1
                    ),
                    t._v(" "),
                    i("div", {
                      staticClass: "blur-bg",
                      staticStyle: { opacity: "1" },
                      style: {
                        "background-image":
                          "url(" + t.currentPlays.al.picUrl + ")"
                      }
                    })
                  ]
                ),
                t._v(" "),
                i("comment", { tag: "component" }),
                t._v(" "),
                i("playlist", { tag: "component" })
              ],
              1
            )
          : i("loading-page");
      },
      n = [],
      a = { render: s, staticRenderFns: n };
    e.a = a;
  },
  FLDR: function(t, e, i) {
    "use strict";
    var s = i("Dd8w"),
      n = i.n(s),
      a = i("LOkV"),
      r = i("DV1V");
    e.a = {
      data: function() {
        return { active: !1, fixedLayerTop: null };
      },
      computed: n()({}, Vuex.mapGetters("musicPlayer", ["currentPlays"]), {
        contentHeight: function() {
          return a.b.height - 54 + "px";
        },
        computedTop: function() {
          return this.fixedLayerTop
            ? (this.active ? 54 : this.fixedLayerTop) + "px"
            : "";
        }
      }),
      methods: {
        toggle: function(t) {
          if ((t.preventDefault(), t.target.dataset.toggle)) return !1;
          (this.active = !this.active),
            r.a.$emit("toggleMiniUI", { active: this.active });
        }
      },
      mounted: function() {
        this.fixedLayerTop = this.$refs.comment.getBoundingClientRect().top;
      }
    };
  },
  Fwt1: function(t, e, i) {
    "use strict";
    var s = i("Dd8w"),
      n = i.n(s),
      a = i("49UR"),
      r = i("2Qhm"),
      c = i("DV1V"),
      l = i("XCh4"),
      o = i("LOkV");
    e.a = {
      data: function() {
        return {
          showMiniUI: !1,
          computedTop: 0,
          hideCover: !1,
          notDisplayLyric: !0
        };
      },
      computed: n()(
        {},
        Vuex.mapGetters("musicPlayer", [
          "mode",
          "switch_button",
          "currentPlays",
          "duration",
          "currentTimeString",
          "durationString",
          "lyric",
          "currentLyricLine"
        ]),
        {
          computedCoverHeight: function() {
            return { height: o.b.width + "px" };
          }
        }
      ),
      methods: {
        toggle: function() {
          c.a.$emit("toggle");
        },
        toggleCover: function() {
          (this.notDisplayLyric = !1), (this.hideCover = !this.hideCover);
        },
        setMode: function() {
          this.$store.commit("musicPlayer/setMode");
        },
        skipPrevious: function() {
          this.$store.commit("musicPlayer/skipPrevious");
        },
        skipNext: function() {
          this.$store.commit("musicPlayer/skipNext");
        },
        coverTransitionEnd: function() {
          this.hideCover || (this.notDisplayLyric = !0);
        },
        togglePlaylist: function() {
          c.a.$emit("togglePlaylist");
        },
        undeveloped: function() {
          this.$tip.show("该功能暂未开发");
        }
      },
      components: { timeline: a.a, comment: r.a, playlist: l.a },
      mounted: function() {
        var t = this;
        c.a.$on("toggleMiniUI", function(e) {
          var i = e.active;
          t.showMiniUI = i;
        });
      }
    };
  },
  WOmd: function(t, e, i) {
    "use strict";
    var s = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          {
            staticClass: "music-player-playlist-container",
            style: { display: t.showContainer ? "flex" : "none" }
          },
          [
            i("div", { staticClass: "backdrop", on: { click: t.close } }),
            t._v(" "),
            i(
              "div",
              {
                staticClass: "music-player-playlist",
                class: { active: t.active }
              },
              [
                i(
                  "div",
                  { staticClass: "playlist-history-header text-center" },
                  [t._v("历史记录")]
                ),
                t._v(" "),
                i(
                  "list",
                  { staticStyle: { "background-color": "transparent" } },
                  t._l(t.playlist, function(e, s) {
                    return i(
                      "list-item",
                      {
                        key: e.id,
                        style: {
                          color:
                            t.playIndex == s ? "rgba(255, 69, 0, 0.8)" : "#000"
                        },
                        nativeOn: {
                          click: function(e) {
                            t.cut(s);
                          }
                        }
                      },
                      [
                        i(
                          "list-item-holder",
                          { staticClass: "dense" },
                          [
                            i("list-item-inner", [
                              i(
                                "div",
                                { staticClass: "prinary-title" },
                                [
                                  t._v(
                                    "\n              " +
                                      t._s(e.name) +
                                      " -\n              "
                                  ),
                                  i("small", [t._v(t._s(e.ar[0].name))]),
                                  t._v(" "),
                                  i("icon", {
                                    staticClass: "close",
                                    attrs: { ligature: "close" },
                                    nativeOn: {
                                      click: function(e) {
                                        t.remove(s);
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    );
                  })
                ),
                t._v(" "),
                i(
                  "div",
                  {
                    staticClass: "playlist-close-button text-center",
                    on: { click: t.close }
                  },
                  [t._v("关闭")]
                )
              ],
              1
            )
          ]
        );
      },
      n = [],
      a = { render: s, staticRenderFns: n };
    e.a = a;
  },
  XCh4: function(t, e, i) {
    "use strict";
    var s = i("CWAW"),
      n = i("WOmd"),
      a = i("VU/8"),
      r = a(s.a, n.a, !1, null, null, null);
    e.a = r.exports;
  },
  ZcDh: function(t, e, i) {
    "use strict";
    var s = i("Dd8w"),
      n = i.n(s),
      a = i("DV1V"),
      r = i("LOkV");
    e.a = {
      props: { defaultValue: Number, minValue: Number, maxValue: Number },
      data: function() {
        return {
          slid: 0,
          grabbing: !1,
          seeking: !1,
          sliding: !1,
          min: 0,
          max: null,
          direction: "",
          seekingPos: null
        };
      },
      computed: n()(
        {},
        Vuex.mapGetters("musicPlayer", [
          "currentTime",
          "duration",
          "currentTimeString",
          "durationString"
        ]),
        {
          currentPostion: function() {
            return this.seeking
              ? this.slid
              : this.currentTime / this.duration * this.max;
          },
          expectCurrentTimeString: function() {
            return Object(r.d)(this.slid / this.max * this.duration);
          }
        }
      ),
      methods: {
        mousedown: function(t) {
          (this.slid = this.currentPostion),
            (this.seekingPos = t.pageX),
            (this.grabbing = this.seeking = !0),
            (this.direction = "right");
        },
        mousemove: function(t) {
          if (this.grabbing && !this.sliding) {
            var e = t.pageX,
              i = e - this.seekingPos,
              s = this.slid + i;
            0 != i && (this.direction = i > 0 ? "right" : "left"),
              (this.seekingPos = e),
              s < 0 ? (s = 0) : s > this.max && (s = this.max),
              (this.slid = s),
              (this.sliding = !1);
          }
        },
        mouseup: function(t) {
          var e = this;
          (this.grabbing = !1),
            (this.direction = ""),
            a.a.$emit("seeked", {
              currentTime: this.slid / this.max * this.duration
            }),
            this.$nextTick(function() {
              setTimeout(
                function(t) {
                  t.seeking = !1;
                },
                1e3,
                e
              );
            });
        },
        init: function() {
          (this.max = this.$refs.timeline.offsetWidth),
            this.defaultValue &&
              this.defaultValue >= this.minValue &&
              this.defaultValue <= this.maxValue &&
              (this.slid = this.defaultValue / this.maxValue * this.max);
        }
      },
      mounted: function() {
        this.init();
      }
    };
  },
  hK8O: function(t, e, i) {
    "use strict";
    var s = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("div", { ref: "timeline", staticClass: "timeline" }, [
          i(
            "div",
            {
              staticClass: "thumb shadow-3d",
              style: { left: t.currentPostion + "px" },
              on: {
                mousedown: t.mousedown,
                mousemove: t.mousemove,
                mouseup: t.mouseup
              }
            },
            [
              i("span", [t._v(t._s(t.currentTimeString))]),
              t._v(" / "),
              i("span", [t._v(t._s(t.durationString))]),
              t._v(" "),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.direction,
                      expression: "direction"
                    }
                  ],
                  staticClass: "expect-time",
                  class: {
                    left: "left" == t.direction,
                    right: "right" == t.direction
                  }
                },
                [
                  i("span", [
                    t._v(
                      t._s(
                        t.slid > 0
                          ? t.expectCurrentTimeString
                          : t.currentTimeString
                      )
                    )
                  ]),
                  t._v(" / "),
                  i("span", [t._v(t._s(t.durationString))])
                ]
              ),
              t._v(" "),
              i("div", {
                staticClass: "trajectory",
                style: { "border-left-width": t.currentPostion + "px" }
              })
            ]
          )
        ]);
      },
      n = [],
      a = { render: s, staticRenderFns: n };
    e.a = a;
  },
  zGp1: function(t, e, i) {
    "use strict";
    var s = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          {
            ref: "comment",
            staticClass: "comment shadow-3d-reverse",
            class: { active: t.active },
            style: { height: t.contentHeight, top: t.computedTop },
            attrs: { id: "music-player-comment" },
            on: {
              click: function(e) {
                t.toggle(e);
              }
            }
          },
          [
            i("h4", { staticClass: "comment-label" }, [
              t._v("评论\n    "),
              i("span", { staticClass: "count" }, [
                t._v(t._s(t.currentPlays.total))
              ])
            ]),
            t._v(" "),
            i(
              "div",
              { staticClass: "comment-content" },
              [
                i(
                  "list",
                  t._l(t.currentPlays.comments, function(e) {
                    return i(
                      "list-item",
                      { key: e.commentId },
                      [
                        i(
                          "router-link",
                          {
                            staticClass: "avatar",
                            attrs: {
                              tag: "div",
                              to: { name: "user", query: { id: e.user.userId } }
                            }
                          },
                          [
                            i("img", {
                              attrs: {
                                src: e.user.avatarUrl,
                                "data-toggle": "router-link"
                              }
                            })
                          ]
                        ),
                        t._v(" "),
                        i(
                          "list-item-holder",
                          [
                            i("list-item-inner", [
                              i(
                                "div",
                                { staticClass: "primary-title" },
                                [
                                  i(
                                    "router-link",
                                    {
                                      attrs: {
                                        tag: "span",
                                        to: {
                                          name: "user",
                                          query: { id: e.user.userId }
                                        },
                                        "data-toggle": "router-link"
                                      }
                                    },
                                    [
                                      t._v(
                                        "\n                 " +
                                          t._s(e.user.nickname) +
                                          "\n              "
                                      )
                                    ]
                                  ),
                                  t._v(" "),
                                  i(
                                    "small",
                                    { staticClass: "liked" },
                                    [
                                      t._v(
                                        "\n                " +
                                          t._s(e.likedCount) +
                                          "  \n                "
                                      ),
                                      i("icon", {
                                        attrs: { ligature: "thumb_up" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              t._v(" "),
                              i("div", { staticClass: "third-title" }, [
                                t._v(t._s(e.timeString))
                              ]),
                              t._v(" "),
                              e.translatedBeReplied
                                ? i(
                                    "div",
                                    { staticClass: "message" },
                                    [
                                      t._v(
                                        "\n              回复\n              "
                                      ),
                                      i(
                                        "router-link",
                                        {
                                          staticClass: "reply-user-nickname",
                                          attrs: {
                                            "data-toggle": "router-link",
                                            to: {
                                              name: "user",
                                              query: {
                                                id:
                                                  e.translatedBeReplied.user.id
                                              }
                                            }
                                          }
                                        },
                                        [
                                          t._v(
                                            "\n                @" +
                                              t._s(
                                                e.translatedBeReplied.user
                                                  .nickname
                                              ) +
                                              "\n              "
                                          )
                                        ]
                                      ),
                                      t._v("：\n              "),
                                      i("span", {
                                        domProps: {
                                          innerHTML: t._s(e.translatedMessage)
                                        }
                                      }),
                                      t._v(" "),
                                      i("div", {
                                        staticClass: "message reply",
                                        domProps: {
                                          innerHTML: t._s(
                                            e.translatedBeReplied &&
                                              e.translatedBeReplied.content
                                          )
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : i("div", {
                                    staticClass: "message",
                                    domProps: {
                                      innerHTML: t._s(e.translatedMessage)
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
          ]
        );
      },
      n = [],
      a = { render: s, staticRenderFns: n };
    e.a = a;
  }
});
//# sourceMappingURL=0.0c8172420e342d8373e9.js.map
