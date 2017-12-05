webpackJsonp([4], {
  "0afC": function(e, t, n) {
    "use strict";
    t.a = {
      name: "recommend",
      computed: Vuex.mapGetters("recommend", ["recommend", "banner"]),
      beforeCreate: function() {
        this.$store.dispatch("recommend/getRecommend");
      }
    };
  },
  "6r2q": function(e, t, n) {
    "use strict";
    var a = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.recommend
          ? n("page-content", { staticStyle: { "padding-top": "0" } }, [
              n(
                "div",
                { staticClass: "recommend" },
                [
                  e.banner
                    ? n(
                        "section",
                        { staticClass: "banner" },
                        [
                          n("router-link", {
                            attrs: {
                              to: {
                                name: "musicPlayer",
                                query: { id: e.banner.sid }
                              },
                              tag: "img",
                              src: e.banner.picUrl
                            }
                          })
                        ],
                        1
                      )
                    : e._e(),
                  e._v(" "),
                  n(
                    "list",
                    e._l(e.recommend, function(t, a) {
                      return n(
                        "list-item",
                        { key: t.id },
                        [
                          n("span", { staticClass: "index" }, [
                            e._v(e._s(a + 1))
                          ]),
                          e._v(" "),
                          n(
                            "router-link",
                            {
                              staticClass: "list-item-holder dense",
                              attrs: {
                                to: {
                                  name: "musicPlayer",
                                  query: { id: t.id }
                                },
                                tag: "div"
                              }
                            },
                            [
                              n("list-item-inner", [
                                n("div", { staticClass: "primary-title" }, [
                                  e._v(e._s(t.name))
                                ]),
                                e._v(" "),
                                n("div", { staticClass: "third-title" }, [
                                  e._v(e._s(t.artists) + " - " + e._s(t.album))
                                ])
                              ]),
                              e._v(" "),
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
          : n("loading-page");
      },
      i = [],
      s = { render: a, staticRenderFns: i };
    t.a = s;
  },
  "z/Ic": function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = n("0afC"),
      i = n("6r2q"),
      s = n("VU/8"),
      r = s(a.a, i.a, !1, null, null, null);
    t.default = r.exports;
  }
});
//# sourceMappingURL=4.7c8a88e09e920c119115.js.map
