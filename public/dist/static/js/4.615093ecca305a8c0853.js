webpackJsonp([4],{"4oe7":function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("SOpj"),e=c("mTpg"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b["default"]=g.exports},SOpj:function(a,b,c){"use strict";var d=c("msXN");b.a={data:function(){return{showDesc:!1}},mixins:[d.a],methods:{toggle:function(){this.showDesc=!this.showDesc}},computed:Vuex.mapGetters("artist",["artist","hotSongs"])}},mTpg:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return a.artist?c("page",{staticClass:"playlist artist"},[c("div",{staticClass:"ar-header"},[c("img",{staticClass:"ar-bg",attrs:{src:a.artist.picUrl}}),a._v(" "),c("toolbar",{staticClass:"navigate",staticStyle:{position:"absolute"},attrs:{fixed:""}},[c("toolbar-inner",[c("grid",[c("cell",{attrs:{span:33}}),a._v(" "),c("cell",{staticClass:"text-center",staticStyle:{"align-self":"center"},attrs:{span:33}},[c("span",{staticClass:"title"},[a._v("\u6B4C\u624B")])]),a._v(" "),c("cell",{attrs:{span:33}})],1)],1)],1),a._v(" "),c("toolbar",{staticClass:"navigate",attrs:{fixed:""}},[c("toolbar-inner",[c("grid",[c("cell",{attrs:{span:33}},[c("back")],1),a._v(" "),c("cell",{attrs:{span:33}}),a._v(" "),c("cell",{attrs:{span:33}})],1)],1)],1),a._v(" "),c("h4",{staticClass:"f-elpsl-1 ar-name"},[a._v(a._s(a.artist.name)),a.artist.alias[0]?c("span",[a._v("\uFF08"+a._s(a.artist.alias[0])+"\uFF09")]):a._e()])],1),a._v(" "),c("section",{staticClass:"intro"},[c("div",{staticClass:"description",class:{"f-elpsl-2":!a.showDesc},on:{click:a.toggle}},[a._v("\n      \u7B80\u4ECB\uFF1A"+a._s(a.artist.briefDesc)+"\n    ")]),a._v(" "),c("icon",{staticClass:"icon-expand",attrs:{ligature:a.showDesc?"expand_less":"expand_more"},nativeOn:{click:function(b){a.toggle(b)}}})],1),a._v(" "),a.hotSongs?c("section",[c("h4",{staticClass:"trk-title"},[a._v("\u70ED\u95E8"+a._s(a.hotSongs.length)+"\u5355\u66F2")]),a._v(" "),c("list",a._l(a.hotSongs,function(b,d){return c("list-item",{key:b.id},[c("span",{staticClass:"index"},[a._v(a._s(d+1))]),a._v(" "),c("router-link",{staticClass:"list-item-holder dense",attrs:{to:{name:"musicPlayer",query:{id:b.id}},tag:"div"}},[c("list-item-inner",[c("div",{staticClass:"primary-title f-elpsl-1"},[a._v("\n              "+a._s(b.name)+"\n              "),b.alias?c("span",[a._v(a._s(b.alias))]):a._e()]),a._v(" "),c("div",{staticClass:"third-title f-elpsl-1"},[a._v(a._s(b.artist[0])+" - "+a._s(b.album))])]),a._v(" "),c("icon",{staticClass:"icon-play",attrs:{ligature:"play_circle_outline"}})],1)],1)}))],1):a._e()]):c("loading-page")},staticRenderFns:[]}},msXN:function(a,b){"use strict";const c={beforeRouteEnter(a,b,c){c((a)=>{a.$router.pass?c():a.$router.replace({name:"home"})})}},d={updated(){Vue.$lazyload()}};b.a=Object.assign({},c,d)}});
//# sourceMappingURL=4.615093ecca305a8c0853.js.map