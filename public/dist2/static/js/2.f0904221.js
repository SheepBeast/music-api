webpackJsonp([2],{AvgG:function(a,b,c){"use strict";var d=c("p04V");b.a={name:"search",data:function(){return{keywords:"",step:"history",sidenav:null,searchbar:null,timer:null,tags:["\u5B59\u71D5\u59FF","RADWINPS","\u7406\u60F3\u4E09\u5DE1","\u91D1\u739F\u5C90","Despacito\u94C3\u58F0(Marimba Remix)","\u6211\u4EEC\u4E0D\u4E00\u6837","\u767D\u591C","\u8FFD\u5149\u8005","\u674E\u8363\u6D69","\u8BB8\u5D69"]}},methods:{searchbarInit:function(a){this.searchbar=a},input:function(a){this.keywords=a,this.setStep(a?"suggest":"history"),clearTimeout(this.timer),this.$store.commit("search/clearSuggest"),this.timer=setTimeout(function(b){a&&b.$store.dispatch("search/getSuggest",{keywords:a})},500,this)},clear:function(){this.keywords="",this.$store.commit("search/clearSuggest")},setStep:function(a){this.step=a},cancel:function(){this.clear(),this.setStep("history")},removeHistory:function(a){this.$store.commit("search/setHistory",{keywords:a,remove:!0})},search:function(a,b){if(!this.keywords)return this.$tip.show("\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"),!1;if(this.searchbar.$refs.search.value="",this.$store.commit("search/setHistory",{keywords:this.keywords}),a&&b){var c;1===a?c={name:"musicPlayer"}:10===a?c={name:"album"}:100===a?c={name:"artist"}:1e3===a?c={name:"playlist"}:void 0,c.query={id:b},this.$router.push(c)}else this.$store.commit("search/resetResult"),this.$store.dispatch("search/getResult",{keywords:this.keywords,type:1,limit:20}),this.setStep("result"),this.$store.dispatch("search/getMultiResult",{keywords:this.keywords}),this.clear()},quicksearch:function(a){a&&(this.keywords=a),this.search()},viewChange:function(a){this.currentView=this.tabs[a].en},back:function(){this.cancel(),this.$router.back()}},computed:Vuex.mapGetters("search",["suggest","history"]),components:{songs:d.a}}},GSpQ:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("AvgG"),e=c("cyTh"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b["default"]=g.exports},Mjf3:function(a,b){"use strict";b.a={computed:Vuex.mapGetters("search",["songs","multi"]),methods:{unsupported:function(){this.$tip.show("\u5F53\u524D\u4E13\u8F91\u9700\u5355\u72EC\u4ED8\u8D39")}}}},cyTh:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("page",{staticClass:"search"},[c("toolbar",[c("icon",{staticStyle:{"font-size":"26px",color:"#fff"},attrs:{ligature:"navigate_before"},nativeOn:{click:function(b){a.back(b)}}}),a._v(" "),c("toolbar-inner",[c("searchbar",{attrs:{placeholder:"\u641C\u7D22\u6B4C\u66F2\u3001\u6B4C\u624B\u3001\u4E13\u8F91"},on:{"searchbar:init":a.searchbarInit,"searchbar:submit":a.quicksearch,"searchbar:input":a.input,"searchbar:cancel":a.cancel}})],1),a._v(" "),c("span",{staticClass:"cancel",class:{hidden:"history"==a.step},on:{click:function(){a.setStep("history")}}},[a._v("\u53D6\u6D88")])],1),a._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:"history"===a.step,expression:"step === 'history'"}]},[c("section",{staticClass:"hot-search"},[c("h3",[a._v("\u5927\u5BB6\u90FD\u5728\u641C")]),a._v(" "),c("div",a._l(a.tags,function(b,d){return c("span",{key:d,staticClass:"search-tag",on:{click:function(){a.quicksearch(b)}}},[a._v("\n          "+a._s(b)+"\n        ")])}))]),a._v(" "),c("section",{staticClass:"search-history"},[c("list",a._l(a.history,function(b,d){return c("list-item",{key:d},[c("icon",{staticClass:"icon-history",attrs:{ligature:"history"}}),a._v(" "),c("list-item-holder",{staticClass:"dense"},[c("list-item-inner",{nativeOn:{click:function(){a.quicksearch(b.keywords)}}},[c("span",[a._v(a._s(b.keywords))])]),a._v(" "),c("icon",{attrs:{ligature:"close"},nativeOn:{click:function(){a.removeHistory(b.keywords)}}})],1)],1)}))],1)]),a._v(" "),c("section",{directives:[{name:"show",rawName:"v-show",value:"suggest"===a.step,expression:"step === 'suggest'"}],staticClass:"search-suggest"},[c("list",[c("list-item",[c("list-item-holder",{staticClass:"dense",nativeOn:{click:function(){a.quicksearch()}}},[c("list-item-inner",[c("small",{staticClass:"type"},[a._v("\u641C\u7D22")]),a._v(a._s(a.keywords)+"\n          ")])],1)],1),a._v(" "),a._l(a.suggest,function(b){return c("list-item",{key:b.id},[c("list-item-holder",{staticClass:"dense",nativeOn:{click:function(){a.search(b.type,b.id)}}},[c("list-item-inner",[c("small",{staticClass:"type"},[a._v(a._s(b.alias))]),a._v(a._s(b.name)+a._s(b.artist?" - "+b.artist:"")+"\n          ")])],1)],1)})],2)],1),a._v(" "),c("section",{staticClass:"search-result",class:{hidden:"result"!==a.step}},[c("songs",{tag:"component"})],1)],1)},staticRenderFns:[]}},gPe6:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"songs"},[c("h4",{staticClass:"trk-title"},[a._v("\u6700\u4F73\u5339\u914D")]),a._v(" "),c("list",[a.multi.album?c("list-item",[c("avatar",{staticClass:"rect"},[c("img",{attrs:{src:a.multi.album.picUrl}})]),a._v(" "),c("router-link",{staticClass:"list-item-holder middle",attrs:{tag:"div",to:{name:"album",query:{id:a.multi.album.id}}}},[c("list-item-inner",[c("div",{staticClass:"primary-title f-elpsl-1"},[a._v("\u4E13\u8F91\uFF1A"+a._s(a.multi.album.name))]),a._v(" "),c("div",{staticClass:"third-title f-elpsl-1"},[a._v(a._s(a.multi.album.artist))])]),a._v(" "),c("icon",{attrs:{ligature:"navigate_next"}})],1)],1):a._e(),a._v(" "),a.multi.artist?c("list-item",[c("avatar",{staticClass:"rect"},[c("img",{attrs:{src:a.multi.artist.picUrl}})]),a._v(" "),c("router-link",{staticClass:"list-item-holder middle",attrs:{tag:"div",to:{name:"artist",query:{id:a.multi.artist.id}}}},[c("list-item-inner",[c("div",{staticClass:"primary-title f-elpsl-1"},[a._v("\n            \u6B4C\u624B\uFF1A"+a._s(a.multi.artist.name)+"\n            "),a.multi.artist.alias?c("span",{staticClass:"alias"},[a._v("\uFF08"+a._s(a.multi.artist.alias)+"\uFF09")]):a._e()])]),a._v(" "),c("icon",{attrs:{ligature:"navigate_next"}})],1)],1):a._e(),a._v(" "),a._l(a.songs,function(b){return c("list-item",{key:b.id},[0<=b.album.status?c("router-link",{staticClass:"list-item-holder dense no-avatar",attrs:{tag:"div",to:{name:"musicPlayer",query:{id:b.id}}}},[c("list-item-inner",[c("div",{staticClass:"primary-title f-elpsl-1"},[a._v(a._s(b.name))]),a._v(" "),c("div",{staticClass:"third-title f-elpsl-1"},[a._v(a._s(b.artist.name)+" - "+a._s(b.album.name))])]),a._v(" "),c("icon",{staticClass:"icon-play",attrs:{ligature:"play_circle_outline"}})],1):c("list-item-holder",{staticClass:"dense no-avatar",nativeOn:{click:function(b){a.unsupported(b)}}},[c("list-item-inner",[c("div",{staticClass:"primary-title f-elpsl-1"},[a._v(a._s(b.name))]),a._v(" "),c("div",{staticClass:"third-title f-elpsl-1"},[a._v(a._s(b.artist.name)+" - "+a._s(b.album.name))])]),a._v(" "),c("icon",{staticClass:"icon-play",attrs:{ligature:"play_circle_outline"}})],1)],1)})],2)],1)},staticRenderFns:[]}},p04V:function(a,b,c){"use strict";var d=c("Mjf3"),e=c("gPe6"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);b.a=g.exports}});
//# sourceMappingURL=2.f0904221.js.map