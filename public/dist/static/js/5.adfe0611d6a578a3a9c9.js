webpackJsonp([5],{"0afC":function(e,t,s){"use strict";t.a={name:"recommend",computed:Vuex.mapGetters("recommend",["recommend","banner"])}},"6r2q":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.recommend?s("page-content",{staticStyle:{"padding-top":"0"}},[s("div",{staticClass:"recommend"},[e.banner?s("section",{staticClass:"banner"},[s("router-link",{attrs:{to:{name:"musicPlayer",query:{id:e.banner.sid}},tag:"img",src:e.banner.picUrl}})],1):e._e(),e._v(" "),s("list",e._l(e.recommend,function(t,a){return s("list-item",{key:t.id},[s("span",{staticClass:"index"},[e._v(e._s(a+1))]),e._v(" "),s("router-link",{staticClass:"list-item-holder dense",attrs:{to:{name:"musicPlayer",query:{id:t.id}},tag:"div"}},[s("list-item-inner",[s("div",{staticClass:"primary-title f-elpsl-1"},[e._v(e._s(t.name))]),e._v(" "),s("div",{staticClass:"third-title f-elpsl-1"},[e._v(e._s(t.artists)+" - "+e._s(t.album))])]),e._v(" "),s("icon",{staticClass:"icon-play",attrs:{ligature:"play_circle_outline"}})],1)],1)}))],1)]):s("loading-page")},i=[],n={render:a,staticRenderFns:i};t.a=n},"z/Ic":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("0afC"),i=s("6r2q"),n=s("VU/8"),r=n(a.a,i.a,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=5.adfe0611d6a578a3a9c9.js.map