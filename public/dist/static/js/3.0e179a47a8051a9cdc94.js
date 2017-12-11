webpackJsonp([3],{"2OcE":function(t,s,a){"use strict";s.a={beforeRouteEnter:function(t,s,a){a(function(t){t.$router.pass?a():t.$router.replace({name:"home"})})}}},"Bb+N":function(t,s,a){"use strict";var e=a("2OcE");s.a={data:function(){return{showDesc:!1}},mixins:[e.a],methods:{toggle:function(){this.showDesc=!this.showDesc}},computed:Vuex.mapGetters("playlist",["playlist","comments"])}},FUzA:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Bb+N"),l=a("JQ9a"),i=a("VU/8"),r=i(e.a,l.a,!1,null,null,null);s.default=r.exports},JQ9a:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.playlist?a("page",{staticClass:"playlist",attrs:{id:"playlist"}},[a("section",{staticClass:"pl-header"},[a("div",{staticClass:"blur-bg",style:{"background-image":"url("+t.playlist.coverImgUrl+")"}}),t._v(" "),a("toolbar",{staticClass:"navigate"},[a("toolbar-inner",[a("grid",[a("cell",{attrs:{span:33}}),t._v(" "),a("cell",{staticClass:"text-center",staticStyle:{"align-self":"center"},attrs:{span:33}},[a("span",{staticClass:"title"},[t._v("歌单")])]),t._v(" "),a("cell",{attrs:{span:33}})],1)],1)],1),t._v(" "),a("toolbar",{staticClass:"navigate",attrs:{fixed:""}},[a("toolbar-inner",[a("grid",[a("cell",{attrs:{span:33}},[a("back")],1),t._v(" "),a("cell",{attrs:{span:33}}),t._v(" "),a("cell",{attrs:{span:33}})],1)],1)],1),t._v(" "),a("div",{staticClass:"pl-header-wrapper"},[a("img",{staticClass:"pl-header-cover",attrs:{src:t.playlist.coverImgUrl}}),t._v(" "),a("div",{staticClass:"pl-header-info"},[a("h4",{staticClass:"title f-elpsl-2"},[t._v(t._s(t.playlist.name))]),t._v(" "),t.playlist.creator?a("router-link",{attrs:{tag:"div",to:{name:"user",query:{id:t.playlist.creator.userId}}}},[a("avatar",[a("img",{attrs:{src:t.playlist.creator.avatarUrl}})]),t._v(" "),a("small",{staticClass:"subhead f-elpsl-1"},[t._v(t._s(t.playlist.creator.nickname))])],1):t._e()],1)])],1),t._v(" "),t.playlist.tags.length>0&&t.playlist.description?a("section",{staticClass:"intro"},[t.playlist.tags.length>0?a("div",{staticClass:"tags"},[t._v("\n      标签：\n      "),t._l(t.playlist.tags,function(s){return a("span",{key:s},[t._v(t._s(s))])})],2):t._e(),t._v(" "),t.playlist.description?[t.playlist.description?a("div",{staticClass:"description",class:{"f-elpsl-2":!t.showDesc},on:{click:t.toggle}},[t._v("\n        简介："+t._s(t.playlist.description)+"\n      ")]):t._e(),t._v(" "),t.playlist.description?a("icon",{staticClass:"icon-expand",attrs:{ligature:t.showDesc?"expand_less":"expand_more"},nativeOn:{click:function(s){t.toggle(s)}}}):t._e()]:t._e()],2):t._e(),t._v(" "),t.playlist.tracks.length>0?a("section",[a("h4",{staticClass:"trk-title"},[t._v("歌曲")]),t._v(" "),a("list",t._l(t.playlist.tracks,function(s,e){return a("list-item",{key:s.id},[a("span",{staticClass:"index"},[t._v(t._s(e+1))]),t._v(" "),a("router-link",{staticClass:"list-item-holder dense",attrs:{to:{name:"musicPlayer",query:{id:s.id}},tag:"div"}},[a("list-item-inner",[a("div",{staticClass:"primary-title f-elpsl-1"},[t._v("\n              "+t._s(s.name)+"\n              "),s.alia[0]?a("span",[t._v(t._s(s.alia[0]))]):t._e()]),t._v(" "),a("div",{staticClass:"third-title f-elpsl-1"},[t._v(t._s(s.ar[0].name)+" - "+t._s(s.al.name))])]),t._v(" "),a("icon",{staticClass:"icon-play",attrs:{ligature:"play_circle_outline"}})],1)],1)}))],1):t._e(),t._v(" "),t.comments?a("section",{staticClass:"comment"},[a("h4",{staticClass:"cmt-title"},[t._v("评论")]),t._v(" "),a("list",t._l(t.comments,function(s){return a("list-item",{key:s.commentId},[a("router-link",{staticClass:"avatar",attrs:{to:{name:"user",query:{id:s.user.userId}},tag:"div"}},[a("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:{src:s.user.avatarUrl,wrapper:"#playlist"},expression:"{src: c.user.avatarUrl, wrapper: '#playlist'}"}],staticClass:"lazyload"})]),t._v(" "),a("list-item-holder",[a("list-item-inner",[a("div",{staticClass:"primary-title"},[a("router-link",{attrs:{to:{name:"user",query:{id:s.user.userId}},tag:"span"}},[t._v("\n                "+t._s(s.user.nickname)+"\n              ")]),t._v(" "),a("small",{staticClass:"liked"},[t._v("\n                "+t._s(s.likedCount)+"  \n                "),a("icon",{attrs:{ligature:"thumb_up"}})],1)],1),t._v(" "),a("div",{staticClass:"third-title"},[t._v(t._s(s.timeString))]),t._v(" "),s.translatedBeReplied?a("div",{staticClass:"message"},[t._v("\n              回复\n              "),a("router-link",{staticClass:"reply-user-nickname",attrs:{to:{name:"user",query:{id:s.translatedBeReplied.user.id}}}},[t._v("\n                @"+t._s(s.translatedBeReplied.user.nickname)+"\n              ")]),t._v("：\n              "),a("span",{domProps:{innerHTML:t._s(s.translatedMessage)}}),t._v(" "),a("div",{staticClass:"message reply",domProps:{innerHTML:t._s(s.translatedBeReplied&&s.translatedBeReplied.content)}})],1):a("div",{staticClass:"message",domProps:{innerHTML:t._s(s.translatedMessage)}})])],1)],1)}))],1):t._e()]):a("loading-page")},l=[],i={render:e,staticRenderFns:l};s.a=i}});
//# sourceMappingURL=3.0e179a47a8051a9cdc94.js.map