(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{936:function(t,r,a){"use strict";a.r(r);var e=a(114),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"认证授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证授权"}},[t._v("#")]),t._v(" 认证授权")]),t._v(" "),a("h2",{attrs:{id:"有状态和无状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有状态和无状态"}},[t._v("#")]),t._v(" 有状态和无状态")]),t._v(" "),a("p",[t._v("一、有状态")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/RA1hm8",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/06/21/RA1hm8.md.png",alt:"RA1hm8.md.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("服务器维护Session Store（Redis），记录用户登陆状态")]),t._v(" "),a("p",[t._v("二、无状态\n"),a("a",{attrs:{href:"https://imgtu.com/i/RAG2lR",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/06/21/RAG2lR.md.jpg",alt:"RAG2lR.md.jpg"}}),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("所有微服务依赖Session Store。对于Session Store的宕机、迁移和性能瓶颈")]),t._v(" "),a("li",[t._v("用户携带token信息，客户端临时存储token，服务器只进行token的解密和校验")])]),t._v(" "),a("h2",{attrs:{id:"登陆认证方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登陆认证方案"}},[t._v("#")]),t._v(" 登陆认证方案")]),t._v(" "),a("h3",{attrs:{id:"一、处处安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、处处安全"}},[t._v("#")]),t._v(" 一、处处安全")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("安全性好")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("成本高")])]),t._v(" "),a("h3",{attrs:{id:"二、外部无状态-内部有状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、外部无状态-内部有状态"}},[t._v("#")]),t._v(" 二、外部无状态，内部有状态")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/RAJyHf",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/06/21/RAJyHf.md.jpg",alt:"RAJyHf.md.jpg"}}),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"三、网关认证授权-内部裸奔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、网关认证授权-内部裸奔"}},[t._v("#")]),t._v(" 三、网关认证授权，内部裸奔")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/RAYGxs",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/06/21/RAYGxs.md.jpg",alt:"RAYGxs.md.jpg"}}),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("网关负责token的解密和校验")]),t._v(" "),a("li",[t._v("一旦用户解析成功，则其他微服务都携带用户信息，不再校验")])]),t._v(" "),a("h3",{attrs:{id:"四、内部裸奔改进"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、内部裸奔改进"}},[t._v("#")]),t._v(" 四、内部裸奔改进")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgtu.com/i/RAtSzj",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://z3.ax1x.com/2021/06/21/RAtSzj.md.jpg",alt:"RAtSzj.md.jpg"}}),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("添加认证授权中心，负责认证、授权、颁发token")]),t._v(" "),a("li",[t._v("用户携带token，网关透传token给各微服务。")]),t._v(" "),a("li",[t._v("各微服务解密token，校验token是否合法。并解析token，获取用户信息")])]),t._v(" "),a("p",[t._v("好处：")]),t._v(" "),a("ul",[a("li",[t._v("降低了网关的复杂度")]),t._v(" "),a("li",[t._v("相对内部裸奔安全")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),a("p",[t._v("应在四、内部裸奔改进版本上，抽离各微服务校验和解密token功能到认证授权中心。从而将认证授权中心转变为全面的用户中心")]),t._v(" "),a("ad"),t._v(" "),a("comment")],1)}),[],!1,null,null,null);r.default=s.exports}}]);