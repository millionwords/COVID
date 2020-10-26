/*! For license information please see 43.a8a4c7d2.chunk.js.LICENSE.txt */
(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[43],{142:function(e,t,n){"use strict";var r=n(8),o=n(12),a=n(0),i=n.n(a),c=n(4),s=n.n(c),l=n(78),u=n.n(l),d=n(79),f=s.a.oneOfType([s.a.number,s.a.string]),p={tag:d.tagPropType,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,c=e.tag,s=e.form,l=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,n){var r=e[t];if(delete f[t],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(d.mapToCssModules)(u()(t,a?"no-gutters":null,s?"form-row":"row",p),n);return i.a.createElement(c,Object(r.a)({},f,{className:m}))};b.propTypes=p,b.defaultProps=m,t.a=b},143:function(e,t,n){"use strict";var r=n(8),o=n(12),a=n(0),i=n.n(a),c=n(4),s=n.n(c),l=n(78),u=n.n(l),d=n(79),f=s.a.oneOfType([s.a.number,s.a.string]),p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,a=e.widths,c=e.tag,s=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];a.forEach((function(t,r){var o=e[t];if(delete s[t],o||""===o){var a=!r;if(Object(d.isObject)(o)){var i,c=a?"-":"-"+t+"-",f=y(a,t,o.size);l.push(Object(d.mapToCssModules)(u()(((i={})[f]=o.size||""===o.size,i["order"+c+o.order]=o.order||0===o.order,i["offset"+c+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=y(a,t,o);l.push(p)}}})),l.length||l.push("col");var f=Object(d.mapToCssModules)(u()(t,l),n);return i.a.createElement(c,Object(r.a)({},s,{className:f}))};g.propTypes=m,g.defaultProps=b,t.a=g},148:function(e,t,n){"use strict";var r=n(8),o=n(12),a=n(0),i=n.n(a),c=n(4),s=n.n(c),l=n(78),u=n.n(l),d=n(79),f={tag:d.tagPropType,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var t=e.className,n=e.cssModule,a=e.innerRef,c=e.tag,s=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-body"),n);return i.a.createElement(c,Object(r.a)({},s,{className:l,ref:a}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},170:function(e,t,n){"use strict";var r=n(8),o=n(12),a=n(0),i=n.n(a),c=n(4),s=n.n(c),l=n(78),u=n.n(l),d=n(79),f={tag:d.tagPropType,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var t=e.className,n=e.cssModule,a=e.color,c=e.body,s=e.inverse,l=e.outline,f=e.tag,p=e.innerRef,m=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(u()(t,"card",!!s&&"text-white",!!c&&"card-body",!!a&&(l?"border":"bg")+"-"+a),n);return i.a.createElement(f,Object(r.a)({},m,{className:b,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},179:function(e,t,n){"use strict";var r=n(8),o=n(12),a=n(0),i=n.n(a),c=n(4),s=n.n(c),l=n(78),u=n.n(l),d=n(79),f={body:s.a.bool,bottom:s.a.bool,children:s.a.node,className:s.a.string,cssModule:s.a.object,heading:s.a.bool,left:s.a.bool,list:s.a.bool,middle:s.a.bool,object:s.a.bool,right:s.a.bool,tag:d.tagPropType,top:s.a.bool},p=function(e){var t,n=e.body,a=e.bottom,c=e.className,s=e.cssModule,l=e.heading,f=e.left,p=e.list,m=e.middle,b=e.object,y=e.right,g=e.tag,h=e.top,v=Object(o.a)(e,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);t=l?"h4":v.href?"a":v.src||b?"img":p?"ul":"div";var E=g||t,O=Object(d.mapToCssModules)(u()(c,{"media-body":n,"media-heading":l,"media-left":f,"media-right":y,"media-top":h,"media-bottom":a,"media-middle":m,"media-object":b,"media-list":p,media:!n&&!l&&!f&&!y&&!h&&!a&&!m&&!b&&!p}),s);return i.a.createElement(E,Object(r.a)({},v,{className:O}))};p.propTypes=f,t.a=p},628:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),o.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),o.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Users",t.a=l},641:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),o.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o.a.createElement("path",{d:"M16 10a4 4 0 0 1-8 0"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="ShoppingBag",t.a=l},78:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},79:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return c})),n.d(t,"isBodyOverflowing",(function(){return s})),n.d(t,"getOriginalBodyPadding",(function(){return l})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return y})),n.d(t,"deprecated",(function(){return g})),n.d(t,"DOMElement",(function(){return v})),n.d(t,"targetPropType",(function(){return E})),n.d(t,"tagPropType",(function(){return O})),n.d(t,"TransitionTimeouts",(function(){return j})),n.d(t,"TransitionPropTypeKeys",(function(){return w})),n.d(t,"TransitionStatuses",(function(){return x})),n.d(t,"keyCodes",(function(){return N})),n.d(t,"PopperPlacements",(function(){return T})),n.d(t,"canUseDOM",(function(){return M})),n.d(t,"isReactRefObj",(function(){return P})),n.d(t,"toNumber",(function(){return k})),n.d(t,"isObject",(function(){return R})),n.d(t,"isFunction",(function(){return A})),n.d(t,"findDOMElements",(function(){return C})),n.d(t,"isArrayOrNodeList",(function(){return B})),n.d(t,"getTarget",(function(){return z})),n.d(t,"defaultToggleEvents",(function(){return G})),n.d(t,"addMultipleEventListeners",(function(){return $})),n.d(t,"focusableElements",(function(){return D}));var r,o=n(4),a=n.n(o);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;s()&&c(n+e)}function d(e){r=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function m(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var b={};function y(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function g(e,t){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&y('"'+r+'" property of "'+o+'" has been deprecated.\n'+t);for(var a=arguments.length,i=new Array(a>3?a-3:0),c=3;c<a;c++)i[c-3]=arguments[c];return e.apply(void 0,[n,r,o].concat(i))}}var h="object"===typeof window&&window.Element||function(){};function v(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var E=a.a.oneOfType([a.a.string,a.a.func,v,a.a.shape({current:a.a.any})]),O=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),j={Fade:150,Collapse:350,Modal:300,Carousel:600},w=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],x={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},N={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function P(e){return!(!e||"object"!==typeof e)&&"current"in e}function S(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function k(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===S(e))return NaN;if(R(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=R(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function R(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function A(e){if(!R(e))return!1;var t=S(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function C(e){if(P(e))return e.current;if(A(e))return e();if("string"===typeof e&&M){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function B(e){return null!==e&&(Array.isArray(e)||M&&"number"===typeof e.length)}function z(e,t){var n=C(e);return t?B(n)?n:null===n?[]:[n]:B(n)?n[0]:n}var G=["touchstart","click"];function $(e,t,n,r){var o=e;B(o)||(o=[o]);var a=n;if("string"===typeof a&&(a=a.split(/\s+/)),!B(o)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,r)}))}))}}var D=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},888:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(142),i=n(143),c=n(170),s=n(148),l=n(179),u=n(78),d=n.n(u),f=n(628),p=n(72),m=n(641);t.default=function(){var e=[{id:1,name:"Professional Pack",icon:f.a,price:"$19",features:["10 GB Storage","500 GB Bandwidth","No Domain","Email Support","24x7 Support"],isRecommended:!1},{id:2,name:"Business Pack",icon:p.a,price:"$29",features:["50 GB Storage","900 GB Bandwidth","2 Domain","Email Support","24x7 Support"],isRecommended:!0},{id:3,name:"Enterprise Pack",icon:m.a,price:"$49",features:["100 GB Storage","Unlimited Bandwidth","10 Domain","Email Support","24x7 Support"],isRecommended:!1}];return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{className:"justify-content-center"},o.a.createElement(i.a,{lg:10},o.a.createElement("div",{className:"text-center mt-4 mb-5"},o.a.createElement("h3",null,"Simple pricing for Everyone"),o.a.createElement("p",{className:"text-muted"},"Fully functional accounts are starting from $19/month only")),o.a.createElement(a.a,null,e.map((function(e,t){var n=e.icon;return o.a.createElement(i.a,{lg:4,key:t},o.a.createElement(c.a,{className:d()("card-pricing")},o.a.createElement(s.a,{className:"p-4"},o.a.createElement(l.a,null,o.a.createElement(l.a,{body:!0},o.a.createElement("h5",{className:"mt-0 mb-2 font-size-16"},e.name),o.a.createElement("h2",{className:"mt-0 mb-2"},e.price," ",o.a.createElement("span",{className:"font-size-14"},"/ Month"))),o.a.createElement("div",{className:"align-self-center"},o.a.createElement(n,{className:"icon-dual icon-lg"}))),o.a.createElement("ul",{className:"card-pricing-features text-muted border-top pt-2 mt-2 pl-0 list-unstyled"},e.features.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("i",{className:"uil uil-check text-success font-size-15 mr-1"}),e)}))),o.a.createElement("div",{className:"mt-5 text-center"},o.a.createElement("button",{className:d()("btn",{"btn-soft-primary":!e.isRecommended,"btn-primary":e.isRecommended},"px-sm-4")},o.a.createElement("i",{className:"uil uil-arrow-right mr-1"}),"Buy Now for ",e.price)))))}))))))}}}]);
//# sourceMappingURL=43.a8a4c7d2.chunk.js.map