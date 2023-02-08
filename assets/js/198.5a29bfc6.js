(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1023:function(t,a,s){"use strict";s.r(a);var e=s(114),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第五章-事件绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五章-事件绑定"}},[t._v("#")]),t._v(" 第五章：事件绑定")]),t._v(" "),s("h2",{attrs:{id:"一-响应式思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-响应式思想"}},[t._v("#")]),t._v(" 一. 响应式思想")]),t._v(" "),s("ul",[s("li",[t._v("不直接操作DOM")]),t._v(" "),s("li",[t._v("数据驱动，React自动感知到数据的变化，自动生成DOM")])]),t._v(" "),s("h2",{attrs:{id:"二-定义数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-定义数据"}},[t._v("#")]),t._v(" 二. 定义数据")]),t._v(" "),s("ul",[s("li",[t._v("React的类都有自己的构造方法 -> contructor(){}")]),t._v(" "),s("li",[t._v("构造函数优于其他函数最先被执行")]),t._v(" "),s("li",[t._v("接收props参数")]),t._v(" "),s("li",[t._v("调用父类构造方法 -> super(props);")]),t._v(" "),s("li",[t._v("数据定义在组件的状态（state）里面 -> this.state = {}")])]),t._v(" "),s("h2",{attrs:{id:"三-数据绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-数据绑定"}},[t._v("#")]),t._v(" 三. 数据绑定")]),t._v(" "),s("ul",[s("li",[t._v("给标签赋值，使标签的value值等于 {this.state.XXX} (对应参数名称)")])]),t._v(" "),s("h2",{attrs:{id:"四-事件绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-事件绑定"}},[t._v("#")]),t._v(" 四. 事件绑定")]),t._v(" "),s("h3",{attrs:{id:"_1-onchange"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-onchange"}},[t._v("#")]),t._v(" 1. onChange")]),t._v(" "),s("ul",[s("li",[t._v("onChange需驼峰式书写")]),t._v(" "),s("li",[t._v("定义对应函数，一样需要大括号包裹，可将函数使用bind，使方法中的this作用域发生改变，指向整个组件（TodeList组件）")]),t._v(" "),s("li",[t._v("对应的事件可填写一个参数e，e获取的就是事件对象")]),t._v(" "),s("li",[t._v("e.target 对应事件的DOM节点，可获取对应value -> e.target.value")]),t._v(" "),s("li",[t._v("改变组件state中的数据，使用setState()"),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inputValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newValue\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-onclick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-onclick"}},[t._v("#")]),t._v(" 2. onClick")]),t._v(" "),s("ul",[s("li",[t._v("onClick需驼峰式书写")])]),t._v(" "),s("blockquote",[s("p",[t._v("ES5里面数组有一个map方法，可以通过map方法对数组做一个循环 "),s("br"),t._v("\nmap函数接收两个参数，一个是item（就是对应数据），一个是index（数据对应的序号）")])]),t._v(" "),s("blockquote",[s("p",[t._v("list:[...this.state.list] -> 展开运算符 "),s("br"),t._v("\n将state的list原有数据拿出，生成一个新的数组")])]),t._v(" "),s("ul",[s("li",[t._v("immutable -> state不允许我们做任何改变，需拷贝state对应变量的副本，修改副本，在setState回去")])]),t._v(" "),s("ad"),t._v(" "),s("comment")],1)}),[],!1,null,null,null);a.default=r.exports}}]);