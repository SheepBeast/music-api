webpackJsonp([2], {
  AvgG: function(s, t, e) {
    "use strict";
    var i = function(s) {
      e
        .e(9)
        .then(
          function() {
            var t = [e("p04V")];
            s.apply(null, t);
          }.bind(this)
        )
        .catch(e.oe);
    };
    t.a = {
      name: "search",
      data: function() {
        return {
          keywords: "",
          step: "history",
          sidenav: null,
          searchbar: null,
          timer: null,
          tags: [
            "孙燕姿",
            "RADWINPS",
            "理想三巡",
            "金玟岐",
            "Despacito铃声(Marimba Remix)",
            "我们不一样",
            "白夜",
            "追光者",
            "李荣浩",
            "许嵩"
          ]
        };
      },
      methods: {
        searchbarInit: function(s) {
          this.searchbar = s;
        },
        input: function(s) {
          (this.keywords = s),
            this.setStep(s ? "suggest" : "history"),
            clearTimeout(this.timer),
            this.$store.commit("search/clearSuggest"),
            (this.timer = setTimeout(
              function(t) {
                s && t.$store.dispatch("search/getSuggest", { keywords: s });
              },
              500,
              this
            ));
        },
        clear: function() {
          (this.keywords = ""), this.$store.commit("search/clearSuggest");
        },
        setStep: function(s) {
          this.step = s;
        },
        cancel: function() {
          this.clear(), this.setStep("history");
        },
        removeHistory: function(s) {
          this.$store.commit("search/setHistory", { keywords: s, remove: !0 });
        },
        search: function(s, t) {
          if (!this.keywords) return this.$tip.show("请输入搜索关键词"), !1;
          if (
            ((this.searchbar.$refs.search.value = ""),
            this.$store.commit("search/setHistory", {
              keywords: this.keywords
            }),
            s && t)
          ) {
            var e = void 0;
            switch (s) {
              case 1:
                e = { name: "musicPlayer" };
                break;
              case 10:
                e = { name: "album" };
                break;
              case 100:
                e = { name: "artist" };
                break;
              case 1e3:
                e = { name: "playlist" };
            }
            (e.query = { id: t }), this.$router.push(e);
          } else
            this.$store.commit("search/resetResult"),
              this.$store.dispatch("search/getResult", {
                keywords: this.keywords,
                type: 1,
                limit: 20
              }),
              this.setStep("result"),
              this.$store.dispatch("search/getMultiResult", {
                keywords: this.keywords
              }),
              this.clear();
        },
        quicksearch: function(s) {
          s && (this.keywords = s), this.search();
        },
        viewChange: function(s) {
          this.currentView = this.tabs[s].en;
        },
        back: function() {
          this.cancel(), this.$router.back();
        }
      },
      computed: Vuex.mapGetters("search", ["suggest", "history"]),
      components: { songs: i }
    };
  },
  "D+5O": function(s, t, e) {
    "use strict";
    var i = function() {
        var s = this,
          t = s.$createElement,
          e = s._self._c || t;
        return e(
          "page",
          { staticClass: "search" },
          [
            e(
              "toolbar",
              { attrs: { fixed: "" } },
              [
                e("icon", {
                  staticStyle: { "font-size": "26px", color: "#fff" },
                  attrs: { ligature: "navigate_before" },
                  nativeOn: {
                    click: function(t) {
                      s.back(t);
                    }
                  }
                }),
                s._v(" "),
                e(
                  "toolbar-inner",
                  [
                    e("searchbar", {
                      attrs: { placeholder: "搜索歌曲、歌手、专辑" },
                      on: {
                        "searchbar:init": s.searchbarInit,
                        "searchbar:submit": s.quicksearch,
                        "searchbar:input": s.input,
                        "searchbar:cancel": s.cancel
                      }
                    })
                  ],
                  1
                ),
                s._v(" "),
                e(
                  "span",
                  {
                    staticClass: "cancel",
                    class: { hidden: "history" == s.step },
                    on: {
                      click: function(t) {
                        s.setStep("history");
                      }
                    }
                  },
                  [s._v("取消")]
                )
              ],
              1
            ),
            s._v(" "),
            e(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: "history" === s.step,
                    expression: "step === 'history'"
                  }
                ]
              },
              [
                e("section", { staticClass: "hot-search" }, [
                  e("h3", [s._v("大家都在搜")]),
                  s._v(" "),
                  e(
                    "div",
                    s._l(s.tags, function(t, i) {
                      return e(
                        "span",
                        {
                          key: i,
                          staticClass: "search-tag",
                          on: {
                            click: function(e) {
                              s.quicksearch(t);
                            }
                          }
                        },
                        [s._v("\n          " + s._s(t) + "\n        ")]
                      );
                    })
                  )
                ]),
                s._v(" "),
                e(
                  "section",
                  { staticClass: "search-history" },
                  [
                    e(
                      "list",
                      s._l(s.history, function(t, i) {
                        return e(
                          "list-item",
                          {
                            key: i,
                            nativeOn: {
                              click: function(e) {
                                s.quicksearch(t.keywords);
                              }
                            }
                          },
                          [
                            e("icon", {
                              staticClass: "icon-history",
                              attrs: { ligature: "history" }
                            }),
                            s._v(" "),
                            e(
                              "list-item-holder",
                              { staticClass: "dense" },
                              [
                                e("list-item-inner", [
                                  e("span", [s._v(s._s(t.keywords))])
                                ]),
                                s._v(" "),
                                e(
                                  "span",
                                  {
                                    on: {
                                      click: function(e) {
                                        s.removeHistory(t.keywords);
                                      }
                                    }
                                  },
                                  [e("icon", { attrs: { ligature: "close" } })],
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
                )
              ]
            ),
            s._v(" "),
            e(
              "section",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: "suggest" === s.step,
                    expression: "step === 'suggest'"
                  }
                ],
                staticClass: "search-suggest"
              },
              [
                e(
                  "list",
                  [
                    e(
                      "list-item",
                      [
                        e(
                          "list-item-holder",
                          {
                            staticClass: "dense",
                            nativeOn: {
                              click: function(t) {
                                s.quicksearch(t);
                              }
                            }
                          },
                          [
                            e("list-item-inner", [
                              e("small", { staticClass: "type" }, [
                                s._v("搜索")
                              ]),
                              s._v(s._s(s.keywords) + "\n          ")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    s._v(" "),
                    s._l(s.suggest, function(t) {
                      return e(
                        "list-item",
                        { key: t.id },
                        [
                          e(
                            "list-item-holder",
                            {
                              staticClass: "dense",
                              nativeOn: {
                                click: function(e) {
                                  s.search(t.type, t.id);
                                }
                              }
                            },
                            [
                              e("list-item-inner", [
                                e("small", { staticClass: "type" }, [
                                  s._v(s._s(t.alias))
                                ]),
                                s._v(
                                  s._s(t.name) +
                                    s._s(t.artist ? " - " + t.artist : "") +
                                    "\n          "
                                )
                              ])
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
            ),
            s._v(" "),
            e(
              "section",
              {
                staticClass: "search-result",
                class: { hidden: "result" !== s.step }
              },
              [e("songs", { tag: "component" })],
              1
            )
          ],
          1
        );
      },
      a = [],
      r = { render: i, staticRenderFns: a };
    t.a = r;
  },
  GSpQ: function(s, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = e("AvgG"),
      a = e("D+5O"),
      r = e("VU/8"),
      c = r(i.a, a.a, !1, null, null, null);
    t.default = c.exports;
  }
});
//# sourceMappingURL=2.592cc9a9afdb8f8a25eb.js.map
