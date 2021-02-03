(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{511:function(t,v,a){"use strict";a.r(v);var _=a(6),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"q-a-0-1-0-2-0-3嘛"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a-0-1-0-2-0-3嘛"}},[t._v("#")]),t._v(" Q&A：0.1 + 0.2 === 0.3嘛？")]),t._v(" "),a("p",[t._v("JavaScript使用Number类型来表示数字（整数或浮点数），遵循IEEE754标准，通过64位来表示一个数字（1+11+52）")]),t._v(" "),a("ul",[a("li",[t._v("1符号位，0表示正数，1表示负数s")]),t._v(" "),a("li",[t._v("11指数位（e）")]),t._v(" "),a("li",[t._v("52尾数，小数部分（即有效数字）\n最大安全数字：Number.MAX_SAFE_INTEGER = Math.pow(2,53)-1,转换成整数就是16位，所以0.1===0.1，是因为通过toPrecision(16)去有效位之后，两者是相等的。\n在两数相加时，会先转换成二进制，0.1和0.2转换成二进制的时候尾数会发生无限循环，然后进行对阶运算，JS引擎对二进制进行截断，所以造成精度丢失。")])]),t._v(" "),a("blockquote",[a("p",[t._v("精度丢失可能出现在进制转换和对阶运算中")])]),t._v(" "),a("h2",{attrs:{id:"q-a-js数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a-js数据类型"}},[t._v("#")]),t._v(" Q&A：JS数据类型？")]),t._v(" "),a("p",[t._v("基本类型：Number、Boolean、String、null、undefined、symbol(ES6新增)、BigInt(ES2020)\n引用类型：Object、对象子类型(Array、Function)")]),t._v(" "),a("h2",{attrs:{id:"q-a-js整数是怎么表示的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a-js整数是怎么表示的"}},[t._v("#")]),t._v(" Q&A：JS整数是怎么表示的？")]),t._v(" "),a("p",[t._v("通过Number类型来表示，遵循IEEE754标准，通过64位来表示一个数字，(1+11+52),最大安全数字是Math.pow(2，53)-1，对于16位十进制。（符号位+指数位+小数部分有效位）")]),t._v(" "),a("h2",{attrs:{id:"q-a-number-的存储空间最大是多少-如果后台发送了一个超过最大数字怎么办"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a-number-的存储空间最大是多少-如果后台发送了一个超过最大数字怎么办"}},[t._v("#")]),t._v(" Q&A：Number()的存储空间最大是多少？如果后台发送了一个超过最大数字怎么办？")]),t._v(" "),a("p",[t._v("Math.pow(2,53)，53为有效数字，会发生截断。\n如果后台发送了超过最大数字，转换类型成字符串。")]),t._v(" "),a("h2",{attrs:{id:"q-a-事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a-事件流"}},[t._v("#")]),t._v(" Q&A：事件流")]),t._v(" "),a("p",[t._v("事件流是网页元素接收事件的顺序，“DOM2级事件”规定的事件流包括三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段。首先发生的事件捕获，为截获事件提供机会。然后是实际的目标接受事件。最后一个阶段是时间冒泡阶段，可以在这个阶段对事件做出响应。虽然捕获阶段在规范中规定不允许响应事件，但是实际上还是会执行，所以有两次机会获取到目标对象。")]),t._v(" "),a("p",[t._v("当容器元素及嵌套元素，即在"),a("code",[t._v("捕获阶段")]),t._v("又在"),a("code",[t._v("冒泡阶段")]),t._v("调用事件处理程序时："),a("strong",[t._v("事件按DOM事件流的顺序")]),t._v("执行事件处理程序：")]),t._v(" "),a("ul",[a("li",[t._v("父级捕获")]),t._v(" "),a("li",[t._v("子级冒泡")]),t._v(" "),a("li",[t._v("子级捕获")]),t._v(" "),a("li",[t._v("父级冒泡")])]),t._v(" "),a("p",[t._v("且当事件处于目标阶段时，事件调用顺序决定于绑定事件的"),a("strong",[t._v("书写顺序")])]),t._v(" "),a("h2",{attrs:{id:"q-a-事件是如何实现的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a-事件是如何实现的"}},[t._v("#")]),t._v(" Q&A：事件是如何实现的？")]),t._v(" "),a("p",[t._v("基于发布订阅模式，就是在浏览器加载的时候会读取事件相关的代码，但是只有实际等到具体的事件触发的时候才会执行。\n比如点击按钮，这是个事件(Event)，而负责处理事件的代码段通常被称为事件处理程序(Event Handler)，也就是「启动对话框的显示」这个动作。\n在Web端，最常见的就是DOM事件：")]),t._v(" "),a("ul",[a("li",[t._v("DOM0级事件，直接在HTML元素上绑定on-event，比如onclick，取消的话，dom.onclick = null，同一个事件只能有一个处理程序，后面的会覆盖前面的。")]),t._v(" "),a("li",[t._v("DOM2级事件，通过addEventListener注册事件，通过removeEventListener来删除事件，一个事件可以有多个事件处理程序，按顺序执行，捕获事件和冒泡事件。")]),t._v(" "),a("li",[t._v("DOM3级事件，增加了事件类型，比如UI事件，焦点事件，鼠标事件。")])]),t._v(" "),a("h2",{attrs:{id:"q-a-new一个函数发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a-new一个函数发生了什么"}},[t._v("#")]),t._v(" Q&A：new一个函数发生了什么？")]),t._v(" "),a("p",[t._v("构造调用：")]),t._v(" "),a("ul",[a("li",[t._v("创造一个全新的对象")]),t._v(" "),a("li",[t._v("这个对象会被执行[[Prototype]]连接，将这个新对象的[[Prototype]]链接到这个构造函数.prototype所指向的对象")]),t._v(" "),a("li",[t._v("这个新对象会绑定到函数调用的this")]),t._v(" "),a("li",[t._v("如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象")])]),t._v(" "),a("h2",{attrs:{id:"q-a-说下对js的了解吧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a-说下对js的了解吧"}},[t._v("#")]),t._v(" Q&A：说下对JS的了解吧？")]),t._v(" "),a("p",[t._v("JS是基于原型的动态语言，主要独特特性有this、原型和原型链\nJS严格意义上来说分为：语言标准部分(ECMAScript)+宿主环境部分")]),t._v(" "),a("blockquote",[a("p",[t._v("语言标准部分")])]),t._v(" "),a("p",[t._v("2015年发布ES6，引入诸多新特性使得能够编写大型项目变成可能，标准自2015之后以年号代号，每年一更。")]),t._v(" "),a("blockquote",[a("p",[t._v("宿主环境部分")])]),t._v(" "),a("ul",[a("li",[t._v("在浏览器宿主环境包括DOM+BOM等")]),t._v(" "),a("li",[t._v("在Node，宿主环境包括一些文件、数据库、网络、与操作系统的交互等")])]),t._v(" "),a("h2",{attrs:{id:"q-a-用过typescript吗-它的作用是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a-用过typescript吗-它的作用是什么"}},[t._v("#")]),t._v(" Q&A：用过TypeScript吗？它的作用是什么？")]),t._v(" "),a("p",[t._v("为JS添加类型支持，以及提供最新版的ES语法的支持，利于团队协作和排错，开发大型项目")])])}),[],!1,null,null,null);v.default=e.exports}}]);