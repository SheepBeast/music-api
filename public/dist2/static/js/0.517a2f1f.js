webpackJsonp([0,5],{"2Qhm":function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("FLDR"),e=c("xhkX"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b["default"]=g.exports},"49UR":function(a,b,c){"use strict";var d=c("ZcDh"),e=c("jj6r"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b.a=g.exports},BNQM:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("Fwt1"),e=c("hqJt"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b["default"]=g.exports},CWAW:function(a,b,c){"use strict";var d=c("DV1V");b.a={data:function(){return{active:!1,showContainer:!1}},computed:Vuex.mapGetters("musicPlayer",["playlist","playIndex"]),methods:{cut:function(a){this.$store.commit("musicPlayer/cut",{index:a})},close:function(){d.a.$emit("togglePlaylist")},remove:function(a){this.$store.commit("musicPlayer/remove",{index:a,vm:this})}},created:function(){var a=this;d.a.$on("togglePlaylist",function(){a.active?(a.active=!1,setTimeout(function(){a.showContainer=!1},300)):(a.showContainer=!0,setTimeout(function(){a.active=!0},100))})}}},FLDR:function(a,b,c){"use strict";var d=c("msXN");b.a={mixins:[d.a],computed:Vuex.mapGetters("musicPlayerComment",["comments","total"])}},Fwt1:function(a,b,c){"use strict";var d=c("Dd8w"),e=c.n(d),f=c("49UR"),g=c("2Qhm"),h=c("DV1V"),i=c("XCh4"),j=c("LOkV"),k=c("msXN");b.a={mixins:[k.a],computed:e()({},Vuex.mapGetters("musicPlayer",["mode","switch_button","currentPlays","duration","currentTimeString","durationString"])),methods:{toggle:function(){h.a.$emit("toggle")},setMode:function(){this.$store.commit("musicPlayer/setMode")},skipPrevious:function(){this.$store.commit("musicPlayer/skipPrevious")},skipNext:function(){this.$store.commit("musicPlayer/skipNext")},togglePlaylist:function(){h.a.$emit("togglePlaylist")},undeveloped:function(){this.$tip.show("\u8BE5\u529F\u80FD\u6682\u672A\u5F00\u53D1")}},components:{timeline:f.a,playlist:i.a}}},XCh4:function(a,b,c){"use strict";var d=c("CWAW"),e=c("klpx"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b.a=g.exports},ZcDh:function(a,b,c){"use strict";var d=c("Dd8w"),e=c.n(d),f=c("DV1V"),g=c("LOkV");b.a={props:{defaultValue:Number,minValue:Number,maxValue:Number},data:function(){return{slid:0,seeking:!1,sliding:!1,min:0,max:null,direction:"",seekingPos:null}},computed:e()({},Vuex.mapGetters("musicPlayer",["currentTime","duration","currentTimeString","durationString"]),{currentPostion:function(){return this.seeking?this.slid:this.currentTime/this.duration*this.max},expectCurrentTimeString:function(){return Object(g.g)(this.slid/this.max*this.duration)}}),methods:{touchstart:function(a){this.slid=this.currentPostion,this.seekingPos=a.changedTouches[0].pageX,this.seeking=!0,this.direction="right"},touchmove:function(a){if(!this.sliding){var b=a.changedTouches[0].pageX,c=b-this.seekingPos,d=this.slid+c;0!=c&&(this.direction=0<c?"right":"left"),this.seekingPos=b,0>d?d=0:d>this.max&&(d=this.max),this.slid=d,this.sliding=!1}},touchend:function(){var a=this;this.direction="",f.a.$emit("seeked",{currentTime:this.slid/this.max*this.duration}),this.$nextTick(function(){setTimeout(function(){a.seeking=!1},1e3)})},init:function(){function a(){clearTimeout(b),b=setTimeout(function(){var e=d.offsetWidth;0<e?(c.max=e,clearTimeout(b)):a()},20)}var b,c=this,d=this.$el;a(),this.defaultValue&&this.defaultValue>=this.minValue&&this.defaultValue<=this.maxValue&&(this.slid=this.defaultValue/this.maxValue*this.max)}},mounted:function(){this.init()}}},hqJt:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return a.currentPlays?c("page",{staticClass:"music-player-interface"},[c("div",{staticClass:"blur-bg",style:{"background-image":"url("+a.currentPlays.al.picUrl+")"},attrs:{id:"blur"}}),a._v(" "),c("back"),a._v(" "),c("div",{staticClass:"cover"},[c("img",{staticStyle:{width:"100%"},attrs:{src:a.currentPlays.al.picUrl}})]),a._v(" "),c("timeline",{attrs:{"min-value":0,"max-value":a.duration}}),a._v(" "),c("div",{staticClass:"controls"},[c("div",{staticClass:"info text-center"},[c("router-link",{staticClass:"name",attrs:{tag:"h3",to:{name:"album",query:{id:a.currentPlays.al.id}}}},[a._v("\n        "+a._s(a.currentPlays.name)+"\n      ")]),a._v(" "),c("router-link",{staticClass:"artist",attrs:{tag:"h4",to:{name:"artist",query:{id:a.currentPlays.ar[0].id}}}},[a._v("\n        "+a._s(a.currentPlays.ar[0].name)+"\n      ")])],1),a._v(" "),c("div",{staticClass:"operation-buttons",staticStyle:{width:"70%",margin:"auto","margin-bottom":"10px",color:"rgba(0, 0, 0, 0.7)"}},[c("icon",{attrs:{ligature:"favorite_border"},nativeOn:{click:function(b){a.undeveloped(b)}}}),a._v(" "),c("icon",{attrs:{ligature:"file_download"},nativeOn:{click:function(b){a.undeveloped(b)}}}),a._v(" "),c("span",{staticStyle:{width:"24px",height:"24px",display:"inline-block",position:"relative"}},[c("router-link",{staticClass:"material-icons",attrs:{tag:"i",to:{name:"musicPlayerComment",query:{id:a.$route.query.id}}}},[a._v("\n          chat\n        ")]),a._v(" "),c("sup",{staticStyle:{width:"8px",height:"8px",display:"inline-block","background-color":"red","border-radius":"50%",position:"absolute",right:"-4px",top:"-2px"}})],1),a._v(" "),c("icon",{attrs:{ligature:"more_horiz"},nativeOn:{click:function(b){a.undeveloped(b)}}})],1),a._v(" "),c("div",{staticClass:"operation-buttons"},[c("icon",{staticStyle:{"font-size":"20px",color:"rgba(0,0,0,0.7)"},attrs:{ligature:a.mode},nativeOn:{click:function(b){a.setMode(b)}}}),a._v(" "),c("icon",{staticStyle:{"font-size":"36px"},attrs:{ligature:"skip_previous"},nativeOn:{click:function(b){a.skipPrevious(b)}}}),a._v(" "),c("icon",{staticStyle:{"font-size":"54px"},attrs:{ligature:a.switch_button},nativeOn:{click:function(b){a.toggle(b)}}}),a._v(" "),c("icon",{staticStyle:{"font-size":"36px"},attrs:{ligature:"skip_next"},nativeOn:{click:function(b){a.skipNext(b)}}}),a._v(" "),c("icon",{staticStyle:{"font-size":"20px",color:"rgba(0,0,0,0.7)"},attrs:{ligature:"playlist_play"},nativeOn:{click:function(b){a.togglePlaylist(b)}}})],1)]),a._v(" "),c("playlist",{tag:"component"})],1):c("loading-page")},staticRenderFns:[]}},jj6r:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"timeline"},[c("div",{staticClass:"thumb shadow-3d",style:{left:a.currentPostion+"px"},on:{touchstart:a.touchstart,touchmove:a.touchmove,touchend:a.touchend}},[c("span",[a._v(a._s(a.currentTimeString))]),a._v(" /\n    "),c("span",[a._v(a._s(a.durationString))]),a._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:a.direction,expression:"direction"}],staticClass:"expect-time",class:{left:"left"==a.direction,right:"right"==a.direction}},[c("span",[a._v(a._s(0<a.slid?a.expectCurrentTimeString:a.currentTimeString))]),a._v(" /\n      "),c("span",[a._v(a._s(a.durationString))])]),a._v(" "),c("div",{staticClass:"trajectory",style:{"border-left-width":a.currentPostion+"px"}})])])},staticRenderFns:[]}},klpx:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"music-player-playlist-container",style:{display:a.showContainer?"flex":"none"}},[c("div",{staticClass:"backdrop",on:{click:a.close}}),a._v(" "),c("div",{staticClass:"music-player-playlist",class:{active:a.active}},[c("div",{staticClass:"playlist-history-header text-center"},[a._v("\u5386\u53F2\u8BB0\u5F55")]),a._v(" "),c("list",{staticClass:"history-list"},a._l(a.playlist,function(b,d){return c("list-item",{key:b.id,style:{color:a.playIndex==d?"rgba(255, 69, 0, 0.8)":"#000"},nativeOn:{click:function(){a.cut(d)}}},[c("list-item-holder",{staticClass:"dense"},[c("list-item-inner",[c("div",{staticClass:"primary-title f-elpsl-1"},[a._v("\n              "+a._s(b.name)+" -\n              "),c("small",[a._v(a._s(b.ar[0].name))]),a._v(" "),c("icon",{staticClass:"close",attrs:{ligature:"close"},nativeOn:{click:function(){a.remove(d)}}})],1)])],1)],1)})),a._v(" "),c("div",{staticClass:"playlist-close-button text-center",on:{click:a.close}},[a._v("\u5173\u95ED")])],1)])},staticRenderFns:[]}},msXN:function(a,b){"use strict";const c={beforeRouteEnter(a,b,c){c((a)=>{a.$router.pass?c():a.$router.replace({name:"home"})})}},d={updated(){Vue.$lazyload()}};b.a=Object.assign({},c,d)},xhkX:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,d=a._self._c||b;return a.comments?d("page",{staticClass:"playlist comment"},[d("toolbar",{staticClass:"navigate navbar"},[d("toolbar-inner",[d("grid",[d("cell",{attrs:{span:33}},[d("div",{staticClass:"navigate-before",on:{click:function(){a.$router.back()}}},[d("icon",{staticStyle:{"font-size":"30px"},attrs:{ligature:"navigate_before"}}),a._v(" "),d("span",[a._v("\u8FD4\u56DE")])],1)]),a._v(" "),d("cell",{staticClass:"text-center",staticStyle:{"align-self":"center"},attrs:{span:33}},[d("span",{staticClass:"title"},[a._v("\u8BC4\u8BBA"),d("small",[a._v("("+a._s(999<a.total?"999+":a.total)+")")])])]),a._v(" "),d("cell",{attrs:{span:33}})],1)],1)],1),a._v(" "),d("div",{staticClass:"comment-content"},[d("list",a._l(a.comments,function(b){return d("list-item",{key:b.commentId},[d("router-link",{staticClass:"avatar",attrs:{tag:"div",to:{name:"user",query:{id:b.user.userId}}}},[d("img",{attrs:{src:b.user.avatarUrl}})]),a._v(" "),d("list-item-holder",[d("list-item-inner",[d("div",{staticClass:"primary-title"},[d("router-link",{attrs:{tag:"span",to:{name:"user",query:{id:b.user.userId}}}},[a._v("\n                "+a._s(b.user.nickname)+"\n              ")]),a._v(" "),d("div",{staticClass:"third-title time-string"},[a._v(a._s(b.timeString))])],1),a._v(" "),b.translatedBeReplied?d("div",{staticClass:"message"},[a._v("\n              \u56DE\u590D\n              "),d("router-link",{staticClass:"reply-user-nickname",attrs:{to:{name:"user",query:{id:b.translatedBeReplied.user.id}}}},[a._v("\n                @"+a._s(b.translatedBeReplied.user.nickname)+"\n              ")]),a._v("\uFF1A\n              "),d("span",{domProps:{innerHTML:a._s(b.translatedMessage)}}),a._v(" "),d("div",{staticClass:"message reply",domProps:{innerHTML:a._s(b.translatedBeReplied&&b.translatedBeReplied.content)}})],1):d("div",{staticClass:"message",domProps:{innerHTML:a._s(b.translatedMessage)}})])],1)],1)}))],1)],1):d("loading-page")},staticRenderFns:[]}}});
//# sourceMappingURL=0.517a2f1f.js.map