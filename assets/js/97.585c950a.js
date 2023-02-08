(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{914:function(a,t,_){"use strict";_.r(t);var s=_(114),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"第二章-相关概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二章-相关概念"}},[a._v("#")]),a._v(" 第二章：相关概念")]),a._v(" "),_("h2",{attrs:{id:"一-数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一-数据"}},[a._v("#")]),a._v(" 一. 数据")]),a._v(" "),_("p",[a._v("举例"),_("a",{attrs:{href:""}},[a._v("鸢尾花数据")]),a._v("：")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://s2.ax1x.com/2020/01/06/lymK0A.md.png",alt:"ml_2_1"}})]),a._v(" "),_("p",[_("img",{attrs:{src:"https://s2.ax1x.com/2020/01/06/lynUgO.png",alt:"ml_2_2"}})]),a._v(" "),_("h3",{attrs:{id:"_1-数据整体叫数据集-data-set"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据整体叫数据集-data-set"}},[a._v("#")]),a._v(" 1. 数据整体叫数据集（data set）")]),a._v(" "),_("h3",{attrs:{id:"_2-每一行数据成为一个样本-sample"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-每一行数据成为一个样本-sample"}},[a._v("#")]),a._v(" 2. 每一行数据成为一个样本（sample）")]),a._v(" "),_("h3",{attrs:{id:"_3-除最后结果列-每一列表达样本的一个特征-feature"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-除最后结果列-每一列表达样本的一个特征-feature"}},[a._v("#")]),a._v(" 3. 除最后结果列，每一列表达样本的一个特征（feature）")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://s2.ax1x.com/2020/01/06/lynHP0.md.png",alt:"ml_2_3"}})]),a._v(" "),_("h3",{attrs:{id:"_4-最后一列-称为标记-label"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-最后一列-称为标记-label"}},[a._v("#")]),a._v(" 4. 最后一列，称为标记（label）")]),a._v(" "),_("p",[a._v("用小写y表示（通常用大写字母表示矩阵，小写字母表示向量）"),_("br"),a._v(" "),_("img",{attrs:{src:"https://s2.ax1x.com/2020/01/06/lyumdA.png",alt:"ml_2_4"}})]),a._v(" "),_("h3",{attrs:{id:"_5-具体每一行-称为特征向量-x-i"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-具体每一行-称为特征向量-x-i"}},[a._v("#")]),a._v(" 5. 具体每一行，称为特征向量（X^(i)）")]),a._v(" "),_("h3",{attrs:{id:"_6-特征空间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-特征空间"}},[a._v("#")]),a._v(" 6. 特征空间")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://s2.ax1x.com/2020/01/06/lyuQRf.md.png",alt:"ml_2_5"}})]),a._v(" "),_("h3",{attrs:{id:"_7-分类任务的本质就是在特征空间切分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-分类任务的本质就是在特征空间切分"}},[a._v("#")]),a._v(" 7. 分类任务的本质就是在特征空间切分")]),a._v(" "),_("h2",{attrs:{id:"二-主要任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二-主要任务"}},[a._v("#")]),a._v(" 二. 主要任务")]),a._v(" "),_("h3",{attrs:{id:"_1-分类任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-分类任务"}},[a._v("#")]),a._v(" 1. 分类任务")]),a._v(" "),_("h4",{attrs:{id:"_1-1-二分类任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-二分类任务"}},[a._v("#")]),a._v(" 1.1 二分类任务")]),a._v(" "),_("ul",[_("li",[a._v("垃圾邮件")]),a._v(" "),_("li",[a._v("股票涨跌")])]),a._v(" "),_("h4",{attrs:{id:"_1-2-多分类任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-多分类任务"}},[a._v("#")]),a._v(" 1.2 多分类任务")]),a._v(" "),_("ul",[_("li",[a._v("数字识别")]),a._v(" "),_("li",[a._v("图像识别")])]),a._v(" "),_("h3",{attrs:{id:"_2-回归任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-回归任务"}},[a._v("#")]),a._v(" 2. 回归任务")]),a._v(" "),_("ul",[_("li",[a._v("结果是一个连续数字的值，而非一个类别")]),a._v(" "),_("li",[a._v("一些情况下，回归任务可以简化为分类任务")])]),a._v(" "),_("h2",{attrs:{id:"三-学习方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三-学习方法"}},[a._v("#")]),a._v(" 三. 学习方法")]),a._v(" "),_("h3",{attrs:{id:"_1-监督学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-监督学习"}},[a._v("#")]),a._v(" 1. 监督学习")]),a._v(" "),_("ul",[_("li",[a._v("给机器的训练数据拥有“标记”或者“答案”")]),a._v(" "),_("li",[a._v("监督学习处理之前介绍的“分类任务”的“回归任务”")])]),a._v(" "),_("h4",{attrs:{id:"_1-1-监督学习算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-监督学习算法"}},[a._v("#")]),a._v(" 1.1 监督学习算法")]),a._v(" "),_("ul",[_("li",[a._v("k近邻")]),a._v(" "),_("li",[a._v("线性回归和多项式回归")]),a._v(" "),_("li",[a._v("逻辑回归")]),a._v(" "),_("li",[a._v("SVM")]),a._v(" "),_("li",[a._v("决策树和随机森林")])]),a._v(" "),_("h3",{attrs:{id:"_2-非监督学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-非监督学习"}},[a._v("#")]),a._v(" 2.  非监督学习")]),a._v(" "),_("ul",[_("li",[a._v("训练数据没有“标记”或“答案”")]),a._v(" "),_("li",[a._v("对数据进行降维处理")])]),a._v(" "),_("blockquote",[_("ol",[_("li",[a._v("特征提取"),_("br")]),a._v(" "),_("li",[a._v("特征压缩:尽量少的损失信息情况下，将高维特征向量压缩成低维的特征向量。如：PCA"),_("br")]),a._v(" "),_("li",[a._v("可视化"),_("br")]),a._v(" "),_("li",[a._v("异常检测")])])]),a._v(" "),_("h4",{attrs:{id:"_2-1-聚类分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-聚类分析"}},[a._v("#")]),a._v(" 2.1 聚类分析")]),a._v(" "),_("h3",{attrs:{id:"_3-半监督学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-半监督学习"}},[a._v("#")]),a._v(" 3. 半监督学习")]),a._v(" "),_("ul",[_("li",[a._v("部分数据有“标记”和“答案”")]),a._v(" "),_("li",[a._v("更为常见")]),a._v(" "),_("li",[a._v("通常先使用无监督学习手段对数据做处理，时候使用监督学习手段做模型的训练和预测")])]),a._v(" "),_("h3",{attrs:{id:"_4-增强学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-增强学习"}},[a._v("#")]),a._v(" 4. 增强学习")]),a._v(" "),_("ul",[_("li",[a._v("根据周围环境的情况，采取行动，根据采取行动的结果，学习行动方式\n"),_("img",{attrs:{src:"https://s2.ax1x.com/2020/01/06/lyuNon.md.png",alt:"ml_2_6"}})])]),a._v(" "),_("h2",{attrs:{id:"四-学习的其他分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四-学习的其他分类"}},[a._v("#")]),a._v(" 四. 学习的其他分类")]),a._v(" "),_("h3",{attrs:{id:"_1-批量学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-批量学习"}},[a._v("#")]),a._v(" 1. 批量学习")]),a._v(" "),_("ul",[_("li",[a._v("优点： 简单")]),a._v(" "),_("li",[a._v("问题： 如何适应环境变化？")]),a._v(" "),_("li",[a._v("解决：定时重新批量学习")]),a._v(" "),_("li",[a._v("缺点：每次重新批量学习，运算量巨大。在某些环境变化非常快的情况下是不可能的")])]),a._v(" "),_("h3",{attrs:{id:"_2-在线学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-在线学习"}},[a._v("#")]),a._v(" 2. 在线学习")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://s2.ax1x.com/2020/01/06/lyufW6.md.png",alt:"ml_2_7"}})]),a._v(" "),_("ul",[_("li",[a._v("优点：及时反映新的环境变化")]),a._v(" "),_("li",[a._v("问题：新的数据带来不好的变化")]),a._v(" "),_("li",[a._v("解决：需要加强对数据进行监控")]),a._v(" "),_("li",[a._v("其他：也适用与数据量巨大，完全无法批量学习的环境")])]),a._v(" "),_("h3",{attrs:{id:"_3-参数学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-参数学习"}},[a._v("#")]),a._v(" 3. 参数学习")]),a._v(" "),_("ul",[_("li",[a._v("一旦学习了参数，就不再需要原有的数据集")])]),a._v(" "),_("h3",{attrs:{id:"_4-非参数学习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-非参数学习"}},[a._v("#")]),a._v(" 4. 非参数学习")]),a._v(" "),_("ul",[_("li",[a._v("不对模型进行过多的假设")]),a._v(" "),_("li",[a._v("非参数不等于没参数")])]),a._v(" "),_("ad"),a._v(" "),_("comment")],1)}),[],!1,null,null,null);t.default=r.exports}}]);