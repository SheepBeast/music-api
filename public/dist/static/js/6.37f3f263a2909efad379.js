webpackJsonp([6],{"4oe7":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("SOpj"),i=a("pxdF"),l=a("VU/8"),n=l(e.a,i.a,!1,null,null,null);s.default=n.exports},SOpj:function(t,s,a){"use strict";s.a={data:function(){return{showDesc:!1}},methods:{toggle:function(){this.showDesc=!this.showDesc}},computed:Vuex.mapGetters("artist",["artist","hotSongs"])}},pxdF:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.artist?a("page",{staticClass:"playlist artist"},[a("div",{staticClass:"ar-header"},[a("img",{staticClass:"ar-bg",attrs:{src:t.artist.picUrl}}),t._v(" "),a("toolbar",{staticClass:"navigate",staticStyle:{position:"absolute"},attrs:{fixed:""}},[a("toolbar-inner",[a("grid",[a("cell",{attrs:{span:33}}),t._v(" "),a("cell",{staticClass:"text-center",staticStyle:{"align-self":"center"},attrs:{span:33}},[a("span",{staticClass:"title"},[t._v("歌手")])]),t._v(" "),a("cell",{attrs:{span:33}})],1)],1)],1),t._v(" "),a("toolbar",{staticClass:"navigate",attrs:{fixed:""}},[a("toolbar-inner",[a("grid",[a("cell",{attrs:{span:33}},[a("back")],1),t._v(" "),a("cell",{attrs:{span:33}}),t._v(" "),a("cell",{attrs:{span:33}})],1)],1)],1),t._v(" "),a("h4",{staticClass:"f-elpsl-1 ar-name"},[t._v(t._s(t.artist.name)),t.artist.alias?a("span",[t._v("（"+t._s(t.artist.alias)+"）")]):t._e()])],1),t._v(" "),a("section",{staticClass:"intro"},[a("div",{staticClass:"description",class:{"f-elpsl-2":!t.showDesc},on:{click:t.toggle}},[t._v("\n      简介："+t._s(t.artist.briefDesc)+"\n    ")]),t._v(" "),a("icon",{staticClass:"icon-expand",attrs:{ligature:t.showDesc?"expand_less":"expand_more"},nativeOn:{click:function(s){t.expand(s)}}})],1),t._v(" "),t.hotSongs?a("section",[a("h4",{staticClass:"trk-title"},[t._v("热门"+t._s(t.hotSongs.length)+"单曲")]),t._v(" "),a("list",t._l(t.hotSongs,function(s,e){return a("list-item",{key:s.id},[a("span",{staticClass:"index"},[t._v(t._s(e+1))]),t._v(" "),a("router-link",{staticClass:"list-item-holder dense",attrs:{to:{name:"musicPlayer",query:{id:s.id}},tag:"div"}},[a("list-item-inner",[a("div",{staticClass:"primary-title f-elpsl-1"},[t._v("\n              "+t._s(s.name)+"\n              "),s.alias?a("span",[t._v(t._s(s.alias))]):t._e()]),t._v(" "),a("div",{staticClass:"third-title f-elpsl-1"},[t._v(t._s(s.artist)+" - "+t._s(s.album))])]),t._v(" "),a("icon",{staticClass:"icon-play",attrs:{ligature:"play_circle_outline"}})],1)],1)}))],1):t._e()]):a("loading-page")},i=[],l={render:e,staticRenderFns:i};s.a=l}});
//# sourceMappingURL=6.37f3f263a2909efad379.js.map