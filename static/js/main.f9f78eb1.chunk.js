(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[0],{15:function(e,a,t){},19:function(e,a,t){e.exports=t(32)},24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c),o=(t(24),t(8)),m=t(5);t(15);function i(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],l=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useLayoutEffect)((function(){function e(){r(window.innerWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}(),m=t&&l<=800?"drop-down":"hidden",i=t?"icon active":"icon";return r.a.createElement("div",null,r.a.createElement("div",{className:i,onClick:function(){c(!t)}},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement(s,{mainClass:m}))}function s(e){return r.a.createElement("div",{className:e.mainClass},r.a.createElement(m.b,{className:"menu-item",to:"/cv"},"CV"),r.a.createElement(m.b,{className:"menu-item",to:"/games"},"Games"))}var u=function(){return r.a.createElement("div",{className:"header container topnav"},r.a.createElement("p",{className:"logo-text"},r.a.createElement(m.b,{to:"/"},"Debesh Mandal")),r.a.createElement("div",{className:"menu"},r.a.createElement(s,{mainClass:"items"}),r.a.createElement(i,null)))};var d=function(){return r.a.createElement("div",{className:"footer container"},r.a.createElement("a",{href:"mailto:debesh@debeshmandal.co.uk"},r.a.createElement("p",{className:"footer-text"},"debesh@debeshmandal.co.uk")))},E=t(2);var p=function(){return r.a.createElement("div",{className:"App-main"})};t(30);function v(e){return r.a.createElement("div",{className:"section"},r.a.createElement("h2",null,e.name),e.content)}function f(e){var a=Object(o.a)(e.date,2),t=a[0],n=a[1];return r.a.createElement("div",{className:"section-header"},r.a.createElement("h3",{className:"employer"},e.employer),r.a.createElement("p",{className:"date"},t," - ",n))}function h(){var e=[r.a.createElement(f,{employer:"Imperial College London",date:["September 2017","Present"],key:0}),r.a.createElement(f,{employer:"Imperial College London",date:["September 2013","June 2017"],key:1}),r.a.createElement(f,{employer:"The Manchester Grammar School",date:["September 2007","June 2013"],key:2})];return r.a.createElement(v,{name:"Education",content:e})}function b(){var e=[r.a.createElement(f,{employer:"FabricNano",date:["October 2019","April 2020"],key:0}),r.a.createElement(f,{employer:"Imperial College London",date:["April 2018","Present"],key:1})];return r.a.createElement(v,{name:"Employment",content:e})}var y=function(){return r.a.createElement("div",{className:"App-main"},r.a.createElement(h,null),r.a.createElement(b,null))};t(31);var N=function(){return r.a.createElement("div",{className:"App-main"},r.a.createElement("p",null,"To be confirmed - some fun and games"))};var w=function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(E.a,{exact:!0,path:"/",component:p}),r.a.createElement(E.a,{path:"/cv",component:y}),r.a.createElement(E.a,{path:"/games",component:N}),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(m.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f9f78eb1.chunk.js.map