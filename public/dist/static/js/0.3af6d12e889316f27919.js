webpackJsonp([0],{"26xt":function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return a.currentPlays?c("page",{staticClass:"music-player-interface"},[c("div",{staticClass:"blur-bg",class:{mask:a.hideCover},style:{"background-image":"url("+a.currentPlays.al.picUrl+")"},attrs:{id:"blur"}}),a._v(" "),c("back"),a._v(" "),c("div",{staticClass:"cover"},[c("img",{class:{hidden:a.hideCover},style:a.computedCoverHeight,attrs:{src:a.currentPlays.al.picUrl},on:{click:a.toggleCover,transitionend:a.coverTransitionEnd}}),a._v(" "),c("div",{ref:"lyric",staticClass:"lyric",style:{display:a.notDisplayLyric?"none":"block"}},[c("div",{staticClass:"lyc-wrapper",style:{top:"-webkit-calc(50% - "+25*a.currentLyricLine+"px)"}},[0<a.lyric.length?a._l(a.lyric,function(b,d){return c("p",{key:b.time,class:{lighter:a.currentLyricLine===d}},[a._v(a._s(b.clause))])}):[c("p",[a._v("\u6682\u65E0\u6B4C\u8BCD")])]],2)])]),a._v(" "),c("timeline",{attrs:{"min-value":0,"max-value":a.duration}}),a._v(" "),c("div",{staticClass:"controls",staticStyle:{"padding-top":"10px","padding-bottom":"20px"}},[c("div",{staticClass:"info text-center"},[c("router-link",{staticClass:"name",attrs:{tag:"h3",to:{name:"album",query:{id:a.currentPlays.al.id}}}},[a._v("\n        "+a._s(a.currentPlays.name)+"\n      ")]),a._v(" "),c("router-link",{staticClass:"artist",attrs:{tag:"h4",to:{name:"artist",query:{id:a.currentPlays.ar[0].id}}}},[a._v("\n        "+a._s(a.currentPlays.ar[0].name)+"\n      ")])],1),a._v(" "),c("div",{staticClass:"operation-buttons",staticStyle:{width:"70%",margin:"auto","margin-bottom":"10px",color:"rgba(0, 0, 0, 0.7)"}},[c("icon",{attrs:{ligature:"favorite_border"},nativeOn:{click:function(b){a.undeveloped(b)}}}),a._v(" "),c("icon",{attrs:{ligature:"file_download"},nativeOn:{click:function(b){a.undeveloped(b)}}}),a._v(" "),c("icon",{staticStyle:{transform:"scaleX(-1)"},attrs:{ligature:"reply"},nativeOn:{click:function(b){a.undeveloped(b)}}}),a._v(" "),c("icon",{attrs:{ligature:"more_horiz"},nativeOn:{click:function(b){a.undeveloped(b)}}})],1),a._v(" "),c("div",{staticClass:"operation-buttons"},[c("icon",{staticStyle:{"font-size":"20px",color:"rgba(0,0,0,0.7)"},attrs:{ligature:a.mode},nativeOn:{click:function(b){a.setMode(b)}}}),a._v(" "),c("icon",{staticStyle:{"font-size":"36px"},attrs:{ligature:"skip_previous"},nativeOn:{click:function(b){a.skipPrevious(b)}}}),a._v(" "),c("icon",{staticStyle:{"font-size":"54px"},attrs:{ligature:a.switch_button},nativeOn:{click:function(b){a.toggle(b)}}}),a._v(" "),c("icon",{staticStyle:{"font-size":"36px"},attrs:{ligature:"skip_next"},nativeOn:{click:function(b){a.skipNext(b)}}}),a._v(" "),c("icon",{staticStyle:{"font-size":"20px",color:"rgba(0,0,0,0.7)"},attrs:{ligature:"playlist_play"},nativeOn:{click:function(b){a.togglePlaylist(b)}}})],1)]),a._v(" "),c("div",{ref:"mini",staticClass:"music-player-mini-interface",class:{active:a.showMiniUI}},[c("img",{staticStyle:{height:"100%"},attrs:{src:a.currentPlays.al.picUrl}}),a._v(" "),c("div",{staticClass:"operation-buttons"},[c("icon",{staticClass:"text-center",attrs:{ligature:"favorite_border"},nativeOn:{click:function(b){a.undeveloped(b)}}}),a._v(" "),c("icon",{staticClass:"text-center larger",attrs:{ligature:"skip_previous"},nativeOn:{click:function(b){a.skipPrevious(b)}}}),a._v(" "),c("icon",{staticClass:"text-center larger",attrs:{ligature:a.switch_button},nativeOn:{click:function(b){a.toggle(b)}}}),a._v(" "),c("icon",{staticClass:"text-center larger",attrs:{ligature:"skip_next"},nativeOn:{click:function(b){a.skipNext(b)}}}),a._v(" "),c("icon",{staticClass:"text-center larger",attrs:{ligature:"more_horiz"},nativeOn:{click:function(b){a.undeveloped(b)}}})],1),a._v(" "),c("div",{staticClass:"blur-bg",staticStyle:{opacity:"1"},style:{"background-image":"url("+a.currentPlays.al.picUrl+")"}})]),a._v(" "),c("comment",{tag:"component"}),a._v(" "),c("playlist",{tag:"component"})],1):c("loading-page")},staticRenderFns:[]}},"2Qhm":function(a,b,c){"use strict";var d=c("FLDR"),e=c("rzyE"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b.a=g.exports},"49UR":function(a,b,c){"use strict";var d=c("ZcDh"),e=c("e95p"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b.a=g.exports},"9VPt":function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"music-player-playlist-container",style:{display:a.showContainer?"flex":"none"}},[c("div",{staticClass:"backdrop",on:{click:a.close}}),a._v(" "),c("div",{staticClass:"music-player-playlist",class:{active:a.active}},[c("div",{staticClass:"playlist-history-header text-center"},[a._v("\u5386\u53F2\u8BB0\u5F55")]),a._v(" "),c("list",{staticClass:"history-list"},a._l(a.playlist,function(b,d){return c("list-item",{key:b.id,style:{color:a.playIndex==d?"rgba(255, 69, 0, 0.8)":"#000"},nativeOn:{click:function(){a.cut(d)}}},[c("list-item-holder",{staticClass:"dense"},[c("list-item-inner",[c("div",{staticClass:"primary-title f-elpsl-1"},[a._v("\n              "+a._s(b.name)+" -\n              "),c("small",[a._v(a._s(b.ar[0].name))]),a._v(" "),c("icon",{staticClass:"close",attrs:{ligature:"close"},nativeOn:{click:function(){a.remove(d)}}})],1)])],1)],1)})),a._v(" "),c("div",{staticClass:"playlist-close-button text-center",on:{click:a.close}},[a._v("\u5173\u95ED")])],1)])},staticRenderFns:[]}},BNQM:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("Fwt1"),e=c("26xt"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b["default"]=g.exports},CWAW:function(a,b,c){"use strict";var d=c("DV1V");b.a={data:function(){return{active:!1,showContainer:!1}},computed:Vuex.mapGetters("musicPlayer",["playlist","playIndex"]),methods:{cut:function(a){this.$store.commit("musicPlayer/cut",{index:a})},close:function(){d.a.$emit("togglePlaylist")},remove:function(a){this.$store.commit("musicPlayer/remove",{index:a,vm:this})}},created:function(){var a=this;d.a.$on("togglePlaylist",function(){a.active?(a.active=!1,setTimeout(function(){a.showContainer=!1},300)):(a.showContainer=!0,setTimeout(function(){a.active=!0},100))})}}},FLDR:function(a,b,c){"use strict";var d=c("Dd8w"),e=c.n(d),f=c("LOkV"),g=c("DV1V");b.a={data:function(){return{active:!1,fixedLayerTop:null}},computed:e()({},Vuex.mapGetters("musicPlayer",["currentPlays"]),{contentHeight:function(){return f.b.height-54+"px"},computedTop:function(){return this.fixedLayerTop?(this.active?54:this.fixedLayerTop)+"px":""}}),methods:{toggle:function(a){return a.preventDefault(),!a.target.dataset.toggle&&void(this.active=!this.active,g.a.$emit("toggleMiniUI",{active:this.active}))}},mounted:function(){this.fixedLayerTop=this.$refs.comment.getBoundingClientRect().top}}},Fwt1:function(a,b,c){"use strict";var d=c("Dd8w"),e=c.n(d),f=c("49UR"),g=c("2Qhm"),h=c("DV1V"),i=c("XCh4"),j=c("LOkV"),k=c("msXN");b.a={data:function(){return{showMiniUI:!1,computedTop:0,hideCover:!1,notDisplayLyric:!0}},mixins:[k.a],computed:e()({},Vuex.mapGetters("musicPlayer",["mode","switch_button","currentPlays","duration","currentTimeString","durationString","lyric","currentLyricLine"]),{computedCoverHeight:function(){return{height:j.b.width+"px"}}}),methods:{toggle:function(){h.a.$emit("toggle")},toggleCover:function(){this.notDisplayLyric=!1,this.hideCover=!this.hideCover},setMode:function(){this.$store.commit("musicPlayer/setMode")},skipPrevious:function(){this.$store.commit("musicPlayer/skipPrevious")},skipNext:function(){this.$store.commit("musicPlayer/skipNext")},coverTransitionEnd:function(){this.hideCover||(this.notDisplayLyric=!0)},togglePlaylist:function(){h.a.$emit("togglePlaylist")},undeveloped:function(){this.$tip.show("\u8BE5\u529F\u80FD\u6682\u672A\u5F00\u53D1")}},components:{timeline:f.a,comment:g.a,playlist:i.a},mounted:function(){var a=this;h.a.$on("toggleMiniUI",function(b){var c=b.active;a.showMiniUI=c})}}},XCh4:function(a,b,c){"use strict";var d=c("CWAW"),e=c("9VPt"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b.a=g.exports},ZcDh:function(a,b,c){"use strict";var d=c("Dd8w"),e=c.n(d),f=c("DV1V"),g=c("LOkV");b.a={props:{defaultValue:Number,minValue:Number,maxValue:Number},data:function(){return{slid:0,grabbing:!1,seeking:!1,sliding:!1,min:0,max:null,direction:"",seekingPos:null}},computed:e()({},Vuex.mapGetters("musicPlayer",["currentTime","duration","currentTimeString","durationString"]),{currentPostion:function(){return this.seeking?this.slid:this.currentTime/this.duration*this.max},expectCurrentTimeString:function(){return Object(g.g)(this.slid/this.max*this.duration)}}),methods:{mousedown:function(a){this.slid=this.currentPostion,this.seekingPos=a.pageX,this.grabbing=this.seeking=!0,this.direction="right"},mousemove:function(a){if(this.grabbing&&!this.sliding){var b=a.pageX,c=b-this.seekingPos,d=this.slid+c;0!=c&&(this.direction=0<c?"right":"left"),this.seekingPos=b,0>d?d=0:d>this.max&&(d=this.max),this.slid=d,this.sliding=!1}},mouseup:function(){var a=this;this.grabbing=!1,this.direction="",f.a.$emit("seeked",{currentTime:this.slid/this.max*this.duration}),this.$nextTick(function(){setTimeout(function(a){a.seeking=!1},1e3,a)})},init:function(){this.max=this.$el.offsetWidth,this.defaultValue&&this.defaultValue>=this.minValue&&this.defaultValue<=this.maxValue&&(this.slid=this.defaultValue/this.maxValue*this.max)}},mounted:function(){this.init()}}},e95p:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"timeline"},[c("div",{staticClass:"thumb shadow-3d",style:{left:a.currentPostion+"px"},on:{mousedown:a.mousedown,mousemove:a.mousemove,mouseup:a.mouseup}},[c("span",[a._v(a._s(a.currentTimeString))]),a._v(" / "),c("span",[a._v(a._s(a.durationString))]),a._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:a.direction,expression:"direction"}],staticClass:"expect-time",class:{left:"left"==a.direction,right:"right"==a.direction}},[c("span",[a._v(a._s(0<a.slid?a.expectCurrentTimeString:a.currentTimeString))]),a._v(" / "),c("span",[a._v(a._s(a.durationString))])]),a._v(" "),c("div",{staticClass:"trajectory",style:{"border-left-width":a.currentPostion+"px"}})])])},staticRenderFns:[]}},msXN:function(a,b){"use strict";const c={beforeRouteEnter(a,b,c){c((a)=>{a.$router.pass?c():a.$router.replace({name:"home"})})}},d={updated(){Vue.$lazyload()}};b.a=Object.assign({},c,d)},rzyE:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,d=a._self._c||b;return d("div",{ref:"comment",staticClass:"comment shadow-3d-reverse",class:{active:a.active},style:{height:a.contentHeight,top:a.computedTop},attrs:{id:"music-player-comment"},on:{click:function(b){a.toggle(b)}}},[d("h4",{staticClass:"comment-label"},[a._v("\u8BC4\u8BBA\n    "),d("span",{staticClass:"count"},[a._v(a._s(a.currentPlays.total))])]),a._v(" "),d("div",{staticClass:"comment-content"},[d("list",a._l(a.currentPlays.comments,function(b){return d("list-item",{key:b.commentId},[d("router-link",{staticClass:"avatar",attrs:{tag:"div",to:{name:"user",query:{id:b.user.userId}}}},[d("img",{attrs:{src:b.user.avatarUrl,"data-toggle":"router-link"}})]),a._v(" "),d("list-item-holder",[d("list-item-inner",[d("div",{staticClass:"primary-title"},[d("router-link",{attrs:{tag:"span",to:{name:"user",query:{id:b.user.userId}},"data-toggle":"router-link"}},[a._v("\n                 "+a._s(b.user.nickname)+"\n              ")])],1),a._v(" "),d("div",{staticClass:"third-title"},[a._v(a._s(b.timeString))]),a._v(" "),b.translatedBeReplied?d("div",{staticClass:"message"},[a._v("\n              \u56DE\u590D\n              "),d("router-link",{staticClass:"reply-user-nickname",attrs:{"data-toggle":"router-link",to:{name:"user",query:{id:b.translatedBeReplied.user.id}}}},[a._v("\n                @"+a._s(b.translatedBeReplied.user.nickname)+"\n              ")]),a._v("\uFF1A\n              "),d("span",{domProps:{innerHTML:a._s(b.translatedMessage)}}),a._v(" "),d("div",{staticClass:"message reply",domProps:{innerHTML:a._s(b.translatedBeReplied&&b.translatedBeReplied.content)}})],1):d("div",{staticClass:"message",domProps:{innerHTML:a._s(b.translatedMessage)}})])],1)],1)}))],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=0.3af6d12e889316f27919.js.map