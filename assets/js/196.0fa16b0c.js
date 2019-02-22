(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{338:function(t,e,i){"use strict";i.r(e);var _=i(1),r=Object(_.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"richtext"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#richtext","aria-hidden":"true"}},[t._v("#")]),t._v(" <richtext> "),i("Badge",{attrs:{text:"v0.20+",type:"warning"}})],1),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),i("p",[t._v("富文本组件内部树形结构不能超过255层，超过的层会被忽略。")]),i("p",[t._v("注意事项")]),t._m(5),t._m(6),i("p",[t._v("富文本组件的子节点支持的属性如下。")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),i("ul",[i("li",[i("strong",[t._v("通用事件")]),t._v(" 支持所有"),i("router-link",{attrs:{to:"./../events/common-events.html"}},[t._v("通用事件")]),t._v("。")],1),t._m(17)]),t._m(18),i("p",[i("a",{attrs:{href:"http://dotwe.org/vue/f748b0cee3991522a66d4376b66a4f2a",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),i("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("富文本组件可以内嵌 "),i("code",[t._v("<span>")]),i("code",[t._v("<a>")]),i("code",[t._v("<image>")]),t._v("。同时它也支持 "),i("code",[t._v("<span>")]),i("code",[t._v("<a>")]),i("code",[t._v("<image>")]),t._v(" 的嵌套。")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("只有 "),i("code",[t._v("<span>")]),t._v(", "),i("code",[t._v("<a>")]),t._v(" and "),i("code",[t._v("<image>")]),t._v(" 可以包含在 "),i("code",[t._v("<richtext>")]),t._v(" 标签里。"),i("code",[t._v("<span>")]),t._v(" and "),i("code",[t._v("<a>")]),t._v(" 会被显示为 "),i("code",[t._v("display:inline")]),t._v("，而 "),i("code",[t._v("<image>")]),t._v(" 会被显示为 "),i("code",[t._v("display:inline-block")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("<richtext>")]),this._v(" 的子节点分两种类型。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("<span>")]),this._v(" and "),e("code",[this._v("<a>")]),this._v(" 可以再包含孩子节点。")]),e("li",[e("code",[this._v("<image>")]),this._v(" 不能再包含孩子节点。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("code",[t._v("<a>")]),t._v(" 标签在 iOS 上恒定为 "),i("code",[t._v("color:blue")]),t._v(" 蓝色样式，它孩子节点也会被应用为该样式，见下面样例。Android 上无此限制。")]),i("li",[i("code",[t._v("<image>")]),t._v(" 标签必须指定 "),i("code",[t._v("width")]),t._v(" 和 "),i("code",[t._v("height")]),t._v(".")]),i("li",[t._v("在图片下载完成前，"),i("code",[t._v("<image>")]),t._v(" 会保持空白状态，目前不支持显示占位图。")]),i("li",[t._v("富文本组件自身不能嵌套。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[this._v("#")]),this._v(" image")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("src")]),this._v(". 图片链接。")]),e("li",[e("strong",[this._v("pseudo-ref")]),this._v(". 开发者指定的索引，会被传给回调方法 "),e("strong",[this._v("itemclick")]),this._v("。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a","aria-hidden":"true"}},[this._v("#")]),this._v(" a")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("herf")]),this._v(". Herf。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"span"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#span","aria-hidden":"true"}},[this._v("#")]),this._v(" span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("<span>")]),this._v(" 不支持任何属性，文本需要包在 "),e("code",[this._v("<span>")]),this._v(" 里面，例如 "),e("code",[this._v("<span>Hello World</span>")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样式","aria-hidden":"true"}},[this._v("#")]),this._v(" 样式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("富文本和它下面的 "),e("code",[this._v("<span>")]),this._v(", "),e("code",[this._v("<a>")]),this._v(", "),e("code",[this._v("<image>")]),this._v(" 只支持有限的样式。")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("code",[t._v("<span>")]),t._v(", "),i("code",[t._v("<a>")]),t._v(" 和 "),i("code",[t._v("<richtext>")]),i("ul",[i("li",[t._v("可以被继承\n"),i("ul",[i("li",[t._v("color")]),i("li",[t._v("font-family")]),i("li",[t._v("font-size")]),i("li",[t._v("font-style")]),i("li",[t._v("font-weight")]),i("li",[t._v("line-height")])])]),i("li",[t._v("不可被继承\n"),i("ul",[i("li",[t._v("background-color")])])])])]),i("li",[i("code",[t._v("<span>")]),i("ul",[i("li",[t._v("可以被继承\n"),i("ul",[i("li",[t._v("text-decoration: none | underline | line-through, 默认值是 none")])])])])]),i("li",[i("code",[t._v("<richtext>")]),i("ul",[i("li",[t._v("不可被继承\n"),i("ul",[i("li",[t._v("lines: 最大行数，必须为正数。")])])])])]),i("li",[i("code",[t._v("<image>")]),i("ul",[i("li",[t._v("不可被继承\n"),i("ul",[i("li",[t._v("width")]),i("li",[t._v("height")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("strong",[t._v("itemclick")]),t._v(". 触发时机\n"),i("ul",[i("li",[i("code",[t._v("img")]),t._v(" 被点击")]),i("li",[t._v("没有任何父节点是 "),i("code",[t._v("a")])]),i("li",[t._v("如果第二个条件不满足，Weex 会尝试打开 "),i("code",[t._v("a")]),t._v(" 标签指定的链接。")]),i("li",[i("code",[t._v("img")]),t._v(" 的 "),i("strong",[t._v("pseudo-ref")]),t._v(" 会作为参数传回来。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例")])}],!1,null,null,null);e.default=r.exports}}]);