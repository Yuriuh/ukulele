(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{187:function(t,e,n){},188:function(t,e,n){},189:function(t,e,n){},190:function(t,e,n){},191:function(t,e,n){},207:function(t,e,n){"use strict";var i=n(187);n.n(i).a},208:function(t,e,n){"use strict";var i=n(188);n.n(i).a},209:function(t,e,n){"use strict";var i=n(189);n.n(i).a},210:function(t,e,n){"use strict";var i=n(190);n.n(i).a},211:function(t,e,n){"use strict";var i=n(191);n.n(i).a},214:function(t,e,n){"use strict";var i={name:"YSider",data:function(){return{visible:!0}}},a=(n(211),n(1)),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])},[],!1,null,"ee122064",null);e.a=s.exports},215:function(t,e,n){"use strict";var i={name:"YContent"},a=(n(210),n(1)),s=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"y-content"},[this._t("default")],2)},[],!1,null,"20eb8949",null);e.a=s.exports},216:function(t,e,n){"use strict";var i={name:"YFooter"},a=(n(209),n(1)),s=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"97602800",null);e.a=s.exports},217:function(t,e,n){"use strict";var i={name:"YHeader"},a=(n(208),n(1)),s=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"3666955c",null);e.a=s.exports},218:function(t,e,n){"use strict";n(48),n(13);var i={name:"YLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"YSider"===e.$options.name&&(t.layoutClass.hasSider=!0)})}},a=(n(207),n(1)),s=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"7ff2dc00",null);e.a=s.exports},227:function(t,e,n){},250:function(t,e,n){"use strict";var i=n(227);n.n(i).a},270:function(t,e,n){"use strict";n.r(e);var i=n(218),a=n(217),s=n(216),c=n(215),r=n(214),u={components:{YLayout:i.a,YHeader:a.a,YFooter:s.a,YContent:c.a,YSider:r.a}},o=(n(250),n(1)),l=Object(o.a)(u,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"16px"}},[e("y-layout",{staticStyle:{color:"white",overflow:"hidden"}},[e("y-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("\n      header\n    ")]),this._v(" "),e("y-layout",[e("y-sider",{staticStyle:{height:"100px",background:"#ddd",width:"200px",color:"black"}},[this._v("\n        sider\n      ")]),this._v(" "),e("y-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[this._v("\n        content\n      ")])],1),this._v(" "),e("y-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("\n      footer\n    ")])],1)],1)},[],!1,null,"05d8d4ff",null);e.default=l.exports}}]);