(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[3],{34:function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",friend:"Home_friend__eOEhP"}},39:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n(0),s=n(11),a=n(34),r=n.n(a),j=n(1),l=Object(i.lazy)((function(){return n.e(1).then(n.bind(null,24))})),u=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,26))})),b=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,37))})),d=[],o=[],O=[];t.default=function(){var e=Object(i.useState)(d),t=Object(c.a)(e,2),n=t[0],a=t[1],h=Object(i.useState)(O),f=Object(c.a)(h,2),m=f[0],x=f[1],p=Object(i.useState)(o),_=Object(c.a)(p,2),v=_[0],g=_[1];return Object(i.useEffect)((function(){Object(s.a)("/friends?_limit=4").then((function(e){return a(e)})),Object(s.a)("/messages?_limit=4").then((function(e){return g(e)})),Object(s.a)("/posts").then((function(e){return x(e)}))}),[]),Object(j.jsxs)("section",{className:r.a.home,children:[Object(j.jsx)("h3",{children:"Bevenuto utente"}),Object(j.jsxs)("div",{className:r.a.grid,children:[Object(j.jsx)(i.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading..."}),children:Object(j.jsx)("aside",{children:n.map((function(e,t){return Object(j.jsx)(l,{data:e},t)}))})}),Object(j.jsx)(i.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading..."}),children:Object(j.jsx)("main",{children:m.reverse().map((function(e,t){return Object(j.jsx)(b,{data:e},t)}))})}),Object(j.jsx)(i.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading..."}),children:Object(j.jsx)("aside",{children:v.map((function(e,t){return Object(j.jsx)(u,{data:e},t)}))})})]})]})}}}]);
//# sourceMappingURL=home.2d22d74f.chunk.js.map