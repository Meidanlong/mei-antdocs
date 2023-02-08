(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{919:function(s,t,a){"use strict";a.r(t);var n=a(114),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第八章-线性回归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第八章-线性回归"}},[s._v("#")]),s._v(" 第八章：线性回归")]),s._v(" "),a("h2",{attrs:{id:"一-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-特点"}},[s._v("#")]),s._v(" 一. 特点")]),s._v(" "),a("ul",[a("li",[s._v("解决回归问题")]),s._v(" "),a("li",[s._v("许多强大的非线性模型的基础")]),s._v(" "),a("li",[s._v("结果具有很好的可解释性")]),s._v(" "),a("li",[s._v("蕴含机器学习中的很多思想")])]),s._v(" "),a("h2",{attrs:{id:"二-简单线性回归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-简单线性回归"}},[s._v("#")]),s._v(" 二. 简单线性回归")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgoycD.png",alt:"ml-8-1"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgo7jg.md.png",alt:"ml-8-2"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgoqBj.md.png",alt:"ml-8-3"}})]),s._v(" "),a("ul",[a("li",[s._v("机器学习算法的基本思路")])]),s._v(" "),a("blockquote",[a("p",[s._v("通过分析问题，确定问题的损失函数或者效用函数"),a("br"),s._v("\n通过最优化损失函数或者效用函数，获得机器学习模型")])]),s._v(" "),a("ul",[a("li",[s._v("最小二乘法问题")])]),s._v(" "),a("blockquote",[a("p",[s._v("两个参数a和b相减，可看做是“误差”，最小二乘法问题就是最小化误差的平方")])]),s._v(" "),a("h3",{attrs:{id:"_1-推导得出表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-推导得出表达式"}},[s._v("#")]),s._v(" 1. 推导得出表达式")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgov40.md.png",alt:"ml-8-4"}})]),s._v(" "),a("p",[a("code",[s._v("证明：")])]),s._v(" "),a("ul",[a("li",[s._v("求一个公式的极值，通常用求导的方式，当倒数等于0，说明找到了极值。")]),s._v(" "),a("li",[s._v("链式求导法则：若h(x)=f(g(x))，则h'(x)=f'(g(x))*g'(x)")]),s._v(" "),a("li",[s._v("我们分别对b，a求导")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgTPu4.md.png",alt:"ml-8-5"}})]),s._v(" "),a("h4",{attrs:{id:"_1-1-对b求导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-对b求导"}},[s._v("#")]),s._v(" 1.1 对b求导")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgTlbd.md.png",alt:"ml-8-6"}})]),s._v(" "),a("ul",[a("li",[s._v("提取sigma\n"),a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgTt8f.md.png",alt:"ml-8-7"}})])]),s._v(" "),a("h4",{attrs:{id:"_1-1-对a求导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-对a求导"}},[s._v("#")]),s._v(" 1.1 对a求导")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgT0bj.md.png",alt:"ml-8-8"}})]),s._v(" "),a("ul",[a("li",[s._v("将b等于y的均值减a倍的x的均值带入，就得到了只有一个参数a的式子")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgTzdA.md.png",alt:"ml-8-9"}})]),s._v(" "),a("ul",[a("li",[s._v("再做变形")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lg76wd.md.png",alt:"ml-8-10"}})]),s._v(" "),a("h3",{attrs:{id:"_2-结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-结论"}},[s._v("#")]),s._v(" 2. 结论")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lg7HTs.md.png",alt:"ml-8-11"}})]),s._v(" "),a("h2",{attrs:{id:"三-根据表达式实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-根据表达式实现"}},[s._v("#")]),s._v(" 三. 根据表达式实现")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据")]),s._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 计算x，y的均值")]),s._v("\nx_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ny_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分子")]),s._v("\nnum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分母")]),s._v("\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 套用公式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" x_i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y_i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x_i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y_i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" y_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x_i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a表达式    ")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("d\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# b表达式")]),s._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" x_mean\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 预测值公式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# y_hat = a * x + b")]),s._v("\ny_predict "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" x_predict "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("ul",[a("li",[s._v("使用sklean实现")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""初始化Simple Linear Regression 模型"""')]),s._v("\n    self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n    self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""根据训练数据集x_train,y_train训练Simple Linear Regression模型"""')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ndim "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Simple Linear Regressor can only solve single feature training data."')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"the size of x_train must be equal to the size of y_train"')]),s._v("\n\n    x_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    y_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n    d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" y_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n    self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" d\n    self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y_mean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" x_mean\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("predict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x_predict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""给定待预测数据集x_predict，返回表示x_predict的结果向量"""')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" x_predict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ndim "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Simple Linear Regressor can only solve single feature training data."')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a_ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b_ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"must fit before predict!"')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_predict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" x_predict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_predict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x_single"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""给定单个待预测数据x，返回x的预测结果值"""')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" x_single "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b_\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("h2",{attrs:{id:"四-优化公式-向量化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-优化公式-向量化"}},[s._v("#")]),s._v(" 四. 优化公式 -> 向量化")]),s._v(" "),a("h3",{attrs:{id:"_1-优化a所对应的的公式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-优化a所对应的的公式"}},[s._v("#")]),s._v(" 1. 优化a所对应的的公式")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgHEp6.png",alt:"ml-8-12"}})]),s._v(" "),a("ul",[a("li",[s._v("分子分母同属于以下结构，可看做是两个向量乘积")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgH1ht.md.png",alt:"ml-8-13"}})]),s._v(" "),a("ul",[a("li",[s._v("优化之前类和（for循环）中代码")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 原")]),s._v("\nnum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" y_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\nself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" d\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改进")]),s._v("\nself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x_train "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y_train "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" y_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x_train "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x_train "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x_mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("性能有可观提升")])]),s._v(" "),a("ad"),s._v(" "),a("comment")],1)}),[],!1,null,null,null);t.default=r.exports}}]);