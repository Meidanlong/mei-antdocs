(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{854:function(s,a,t){"use strict";t.r(a);var e=t(114),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"第一章-条件判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一章-条件判断"}},[s._v("#")]),s._v(" 第一章：条件判断")]),s._v(" "),t("p",[s._v("实现类似ORACLE中decode()判断语句")]),s._v(" "),t("h2",{attrs:{id:"一-if函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-if函数"}},[s._v("#")]),s._v(" 一. IF函数")]),s._v(" "),t("h3",{attrs:{id:"_1-if语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-if语句"}},[s._v("#")]),s._v(" 1. IF语句")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" expression "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" \n   statements"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_2-if-else语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-if-else语句"}},[s._v("#")]),s._v(" 2. IF ELSE语句")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" expression "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n   statements"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("statements"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n或\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expr1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("expr2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("expr3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- expr1 是TRUE (expr1 <> 0 and expr1 <> NULL)，则 IF()的返回值为expr2; 否则返回值则为 expr3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"_3-if-elseif-else语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-if-elseif-else语句"}},[s._v("#")]),s._v(" 3. IF ELSEIF ELSE语句")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" expression "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n   statements"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSEIF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elseif")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("expression "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elseif")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("statements"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("statements"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"二-case语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-case语句"}},[s._v("#")]),s._v(" 二. CASE语句")]),s._v(" "),t("h3",{attrs:{id:"_1-简单case语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单case语句"}},[s._v("#")]),s._v(" 1. 简单CASE语句")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("  case_expression\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" when_expression_1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" commands\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" when_expression_2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" commands\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" commands\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("简单CASE语句来检查表达式的值与一组唯一值的匹配")]),s._v(" "),t("li",[t("code",[s._v("case_expression")]),s._v("可以是任何有效的表达式。我们将"),t("code",[s._v("case_expression")]),s._v("的值与每个WHEN子句中的"),t("code",[s._v("when_expression")]),s._v("进行比较，如果"),t("code",[s._v("case_expression")]),s._v("和"),t("code",[s._v("when_expression_n")]),s._v("的值相等，则执行相应的WHEN分支中的命令("),t("code",[s._v("commands")]),s._v(")")]),s._v(" "),t("li",[s._v("如果"),t("code",[s._v("WHEN")]),s._v("子句中的"),t("code",[s._v("when_expression")]),s._v("与"),t("code",[s._v("case_expression")]),s._v("的值匹配，则"),t("code",[s._v("ELSE")]),s._v("子句中的命令将被执行。"),t("code",[s._v("ELSE")]),s._v("子句是可选的。 如果省略"),t("code",[s._v("ELSE")]),s._v("子句，并且找不到匹配项，MySQL将引发错误")])]),s._v(" "),t("p",[t("strong",[s._v("举例：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v(" customerCountry\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USA'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" p_shiping "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2-day Shipping'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Canada'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" p_shiping "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3-day Shipping'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" p_shiping "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5-day Shipping'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_2-可搜索case语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-可搜索case语句"}},[s._v("#")]),s._v(" 2. 可搜索CASE语句")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" condition_1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" commands\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" condition_2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" commands\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" commands\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("MySQL评估求值"),t("code",[s._v("WHEN")]),s._v("子句中的每个条件，直到找到一个值为"),t("code",[s._v("TRUE")]),s._v("的条件，然后执行THEN子句中的相应命令("),t("code",[s._v("commands")]),s._v(")")]),s._v(" "),t("li",[s._v("如果没有一个条件为"),t("code",[s._v("TRUE")]),s._v("，则执行"),t("code",[s._v("ELSE")]),s._v("子句中的命令("),t("code",[s._v("commands")]),s._v(")。如果不指定"),t("code",[s._v("ELSE")]),s._v("子句，并且没有一个条件为"),t("code",[s._v("TRUE")]),s._v("，MySQL将发出错误消息")]),s._v(" "),t("li",[s._v("MySQL不允许在"),t("code",[s._v("THEN")]),s._v("或"),t("code",[s._v("ELSE")]),s._v("子句中使用空的命令。 如果您不想处理"),t("code",[s._v("ELSE")]),s._v("子句中的逻辑，同时又要防止MySQL引发错误，则可以在ELSE子句中放置一个空的"),t("code",[s._v("BEGIN END")]),s._v("块")])]),s._v(" "),t("p",[t("strong",[s._v("举例：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("  \n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" creditlim "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" p_customerLevel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PLATINUM'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("creditlim "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" creditlim "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" p_customerLevel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GOLD'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" creditlim "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" p_customerLevel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SILVER'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ad"),s._v(" "),t("comment")],1)}),[],!1,null,null,null);a.default=n.exports}}]);