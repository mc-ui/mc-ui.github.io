(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{323:function(t,a,e){},337:function(t,a,e){},345:function(t,a,e){"use strict";t.exports={log_app:!0}},346:function(t,a,e){t.exports=e.p+"assets/img/icon_vuepress_default.406370f8.png"},347:function(t,a,e){"use strict";var i=e(323);e.n(i).a},367:function(t,a,e){"use strict";var i=e(337);e.n(i).a},370:function(t,a,e){"use strict";var i={components:{NavLink:e(319).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(e(347),e(9)),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[i("header",{staticClass:"hero"},[!1!==t.data.isShowHeroImage?i("img",{attrs:{src:t.data.heroImage?t.$withBase(t.data.heroImage):e(346),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?i("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),i("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?i("p",{staticClass:"action"},[i("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?i("div",{staticClass:"features"},t._l(t.data.features,(function(a,e){return i("div",{key:e,staticClass:"feature"},[i("h2",[t._v(t._s(a.title))]),t._v(" "),i("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),i("Content",{staticClass:"theme-default-content custom"})],1)}),[],!1,null,null,null);a.a=n.exports},377:function(t,a,e){"use strict";e.r(a);var i=e(369),s=e(345),n={components:{ParentLayout:i.a},computed:{yilia_plus:function(){return this.$themeConfig.yilia_plus}},mounted:function(){s.log_app&&console.info&&console.log(this.$appDescription+" ➡️ "+this.$appName+" ➡️ "+this.$appUrl)}},o=(e(367),e(9)),r=Object(o.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("main",[this.yilia_plus?a("ForkMe",{attrs:{slot:"sidebar-top"},slot:"sidebar-top"}):this._e(),this._v(" "),a("ParentLayout"),this._v(" "),this.yilia_plus?a("Footer"):this._e()],1)}),[],!1,null,null,null);a.default=r.exports}}]);