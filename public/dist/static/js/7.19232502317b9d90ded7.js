webpackJsonp([7],{"0afC":function(e,t,s){"use strict";t.a={name:"recommend",computed:Vuex.mapGetters("recommend",["recommend"])}},"6r2q":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.recommend?s("page-content",{staticStyle:{"padding-top":"0"}},[s("div",{staticClass:"recommend"},[s("section",{staticClass:"banner"},[s("router-link",{attrs:{to:{name:"musicPlayer",query:{id:e.recommend.banner.id}},tag:"img",src:e.recommend.banner.picUrl}})],1),e._v(" "),s("list",e._l(e.recommend.list,function(t,i){return s("list-item",{key:t.id},[s("span",{staticClass:"index"},[e._v(e._s(i+1))]),e._v(" "),s("router-link",{staticClass:"list-item-holder dense",attrs:{to:{name:"musicPlayer",query:{id:t.id}},tag:"div"}},[s("list-item-inner",[s("div",{staticClass:"primary-title f-elpsl-1"},[e._v(e._s(t.name))]),e._v(" "),s("div",{staticClass:"third-title f-elpsl-1"},[e._v(e._s(t.artists)+" - "+e._s(t.album))])]),e._v(" "),s("icon",{staticClass:"icon-play",attrs:{ligature:"play_circle_outline"}})],1)],1)}))],1)]):s("loading-page")},a=[],n={render:i,staticRenderFns:a};t.a=n},"z/Ic":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("0afC"),a=s("6r2q"),n=s("VU/8"),r=n(i.a,a.a,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=7.19232502317b9d90ded7.js.map