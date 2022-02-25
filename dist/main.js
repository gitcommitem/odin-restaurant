(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>x});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(140),t.b),l=new URL(t(872),t.b),u=new URL(t(671),t.b),p=new URL(t(319),t.b),m=new URL(t(441),t.b),f=i()(r()),h=d()(s),g=d()(l),b=d()(u),v=d()(p),y=d()(m);f.push([e.id,"/* manrope-regular - latin */\n@font-face {\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 400;\n    src: local(''),\n         url("+h+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n         url("+g+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n  \n  /* manrope-800 - latin */\n  @font-face {\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 800;\n    src: local(''),\n         url("+b+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n         url("+v+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n  \n  :root{\n      font-family: 'Manrope',sans-serif;\n}\n\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np\n{\n  margin: 0;\n}\n\nul{\n    list-style: none;\n    padding: 0;\n}\n\nli:first-child{\n    margin-right: 1rem;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n  background-color: #72C7C2;\n  background-image: url("+y+");\n  background-repeat: no-repeat;\n  background-position: top 1rem right 3rem;\n  background-size: 100vh;\n  margin-top: 1rem;\n}\n\n.no-bg{\n    background-image: none;\n}\n\n.hidden{\n    visibility: hidden;\n}\n\n.hflex{\n    display: flex;\n}\n\n.vflex{\n    display: flex;\n    flex-direction: column;\n}\n\ndiv#content{\n    width: 90vw;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nnav{\n    justify-content: space-between;\n    align-items: center;\n}\n\nsection.hero{\n    min-height:90vh;\n    width: 65ch;\n    justify-content: center;\n}\n\n.hero h2{\n    font-size: 4rem;\n    line-height: 100%;\n    margin-bottom: 0.5rem;\n}\n\n.hero p{\n    font-size: 2rem;\n    width: 30ch;\n    line-height: 130%;\n    margin-bottom: 1.4rem;\n    opacity: 0.8;\n}\n\nbutton{\n    font-size: 1.5rem;\n    font-weight: 800;\n    padding: 1rem;\n    width: 50%;\n    border-radius: 40rem;\n    border: none;\n    background-color: #FFD5A3 ;\n}\n\nnav h1,li{\n    cursor: pointer;\n}\n\nsection.about{\n    position: relative;\n    margin-top: -2rem;\n    z-index: -1;\n}\n\n.about h1{\n    font-size: 15rem;\n    line-height: 90%;\n    margin-bottom: 2rem;\n}\n\n.about p{\n    font-size: 2rem;\n    width: 45ch;\n    line-height: 130%;\n    margin-bottom: 1rem;\n    opacity: 0.8;\n}\n\n.about p:nth-last-child(2){\n    margin-bottom: 2rem;\n}\n\n.about p#hours{\n    font-weight: 800;\n}\n\nsection.menu{\n    margin-top: 2rem;\n}\n\ndiv.flavours{\n    border: 5px solid white;\n    border-radius: 10rem;\n    padding: 2rem;\n    height: 65ch;\n    margin-bottom: 6rem;\n}\n\ndiv.flavours>h2{\n    color:white;\n    text-align: center;\n    margin-bottom: 1rem;\n    position: relative;\n    top: -3.4rem;\n    white-space: nowrap;\n    background-color: #72C7C2;\n    width: 14rem;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nsection.menu div.vflex{\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\nh3{\n    background-color: #FFD5A3;\n    text-align: center;\n    padding: 2rem;\n    border-radius: 2rem;\n    width: 50%;\n}\n\nsection.menu img{\n    width: 75%;\n}\n\n",""]);const x=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},319:(e,n,t)=>{e.exports=t.p+"1119cff4b801fc12e3b0.woff"},671:(e,n,t)=>{e.exports=t.p+"1576f3f49c28e3bdc6ab.woff2"},872:(e,n,t)=>{e.exports=t.p+"6dcb2c4eecb0b5771148.woff"},140:(e,n,t)=>{e.exports=t.p+"363602523b30a223bd42.woff2"},579:(e,n,t)=>{e.exports=t.p+"f337f4c7ccf7bfb302bd.png"},441:(e,n,t)=>{e.exports=t.p+"ba3d29783e355ec42f37.png"},621:(e,n,t)=>{e.exports=t.p+"73a946c84df8442cdd3e.png"},232:(e,n,t)=>{e.exports=t.p+"10a8897c3d890df05e7d.png"},693:(e,n,t)=>{e.exports=t.p+"e56d8a4cd2f4a86966fb.png"},509:(e,n,t)=>{e.exports=t.p+"9646dcb182b3251adf0f.png"},446:(e,n,t)=>{e.exports=t.p+"f384ea8cdb34d6a7d2b6.png"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(232),g=t(446),b=t(621),v=t(509),y=t(693),x=t(579);const w=e=>{const n=(e,n,t)=>({name:e,imgSrc:n,altTxt:t}),t=n("Pineapple",h,"Pineapple Soft Serve"),o=n("Watermelon",g,"Watermelon Soft Serve"),r=n("Orange",b,"Orange Soft Serve"),a=n("Vanilla",v,"Vanilla Soft Serve"),i=n("Strawberry",y,"Strawberry Soft Serve"),c=n("Chocolate",x,"Chocolate Soft Serve");document.querySelector("nav h1").classList.remove("hidden"),document.body.classList.add("no-bg");const d=document.createElement("section");d.classList.add("menu"),e.appendChild(d);const s=(e,n,t,o,r,a)=>{const i=document.createElement("div");i.classList.add("flavours",n),e.appendChild(i);const c=document.createElement("h2");i.appendChild(c);const d=document.createTextNode(t);c.appendChild(d);const s=document.createElement("div");s.classList.add("hflex"),i.appendChild(s);const l=(e,n)=>{const t=document.createElement("div");t.classList.add("vflex"),e.appendChild(t),u(t,n),p(t,n)},u=(e,n)=>{const t=document.createElement("h3");e.appendChild(t);const o=document.createTextNode(n.name);t.appendChild(o)},p=(e,n)=>{const t=document.createElement("img");t.src=n.imgSrc,t.alt=n.altTxt,e.appendChild(t)};l(s,o),l(s,r),l(s,a)};s(d,"seasonal","Seasonal Flavours",t,o,r),s(d,"regular","Regular Flavours",a,i,c)},C=e=>{document.body.classList.remove("no-bg");const n=document.createElement("section");n.classList.add("hero","vflex"),e.appendChild(n);const t=document.createElement("h2");n.appendChild(t);const o=document.createTextNode("Summer seasonal flavours are back!");t.appendChild(o);const r=document.createElement("p");n.appendChild(r);const a=document.createTextNode("Our most popular summer flavours are back on the menu again");r.appendChild(a);const i=document.createElement("button");n.appendChild(i);const c=document.createTextNode("See our menu");i.appendChild(c)},S=(e,n,t)=>{document.querySelector("button").addEventListener("click",(()=>{e(),n(t)}))},E=document.querySelector("div#content"),L=()=>{document.querySelector("section").remove()};(e=>{const n=document.createElement("nav");n.classList.add("hflex"),e.appendChild(n);const t=document.createElement("h1");n.appendChild(t);const o=document.createTextNode("East Bay Creamery");t.appendChild(o);const r=document.createElement("ul");r.classList.add("hflex"),n.appendChild(r);const a=(e,n)=>{const t=document.createElement("li");t.id=n,e.appendChild(t);const o=document.createTextNode(n);t.appendChild(o),e.appendChild(t)};a(r,"about"),a(r,"menu")})(E),C(E),S(L,w,E),document.querySelector("nav h1").addEventListener("click",(()=>{L(),C(E),S(L,w,E)})),document.querySelector("li#about").addEventListener("click",(()=>{L(),(e=>{document.body.classList.add("no-bg"),document.querySelector("nav h1").classList.add("hidden");const n=document.createElement("section");n.classList.add("about"),e.appendChild(n);const t=document.createElement("h1");n.appendChild(t);const o=document.createTextNode("East Bay Creamery");t.appendChild(o);const r=(e,n,t)=>{const o=document.createElement("p");void 0!==t&&(o.id=t),e.appendChild(o);const r=document.createTextNode(n);o.appendChild(r)};r(n,"We're a creamery located in the East Bay of NorCal."),r(n,"We're best known for our soft serve icecream but we also sell various kinds of milk, cheese, and butter!"),r(n,"We are open Tuesday - Sunday from 8:30 AM to 8:30 PM.","hours")})(E)})),document.querySelector("li#menu").addEventListener("click",(()=>{L(),w(E)}))})()})();