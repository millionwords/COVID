/*! For license information please see 50.550934d1.chunk.js.LICENSE.txt */
(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[50],{142:function(e,t,n){"use strict";var r=n(8),o=n(12),a=n(0),i=n.n(a),u=n(4),c=n.n(u),s=n(78),l=n.n(s),d=n(79),f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,u=e.tag,c=e.form,s=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];s.forEach((function(t,n){var r=e[t];if(delete f[t],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(d.mapToCssModules)(l()(t,a?"no-gutters":null,c?"form-row":"row",p),n);return i.a.createElement(u,Object(r.a)({},f,{className:m}))};y.propTypes=p,y.defaultProps=m,t.a=y},143:function(e,t,n){"use strict";var r=n(8),o=n(12),a=n(0),i=n.n(a),u=n(4),c=n.n(u),s=n(78),l=n.n(s),d=n(79),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},y={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,a=e.widths,u=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),s=[];a.forEach((function(t,r){var o=e[t];if(delete c[t],o||""===o){var a=!r;if(Object(d.isObject)(o)){var i,u=a?"-":"-"+t+"-",f=b(a,t,o.size);s.push(Object(d.mapToCssModules)(l()(((i={})[f]=o.size||""===o.size,i["order"+u+o.order]=o.order||0===o.order,i["offset"+u+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=b(a,t,o);s.push(p)}}})),s.length||s.push("col");var f=Object(d.mapToCssModules)(l()(t,s),n);return i.a.createElement(u,Object(r.a)({},c,{className:f}))};g.propTypes=m,g.defaultProps=y,t.a=g},181:function(e,t,n){"use strict";var r=n(8),o=n(12),a=n(0),i=n.n(a),u=n(4),c=n.n(u),s=n(78),l=n.n(s),d=n(79),f={tag:d.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,a=e.fluid,u=e.tag,c=Object(o.a)(e,["className","cssModule","fluid","tag"]),s="container";!0===a?s="container-fluid":a&&(s="container-"+a);var f=Object(d.mapToCssModules)(l()(t,s),n);return i.a.createElement(u,Object(r.a)({},c,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},681:function(e,t,n){e.exports=n.p+"static/media/server-down.bfbe8964.png"},78:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},79:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return u})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return s})),n.d(t,"conditionallyUpdateScrollbar",(function(){return l})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return b})),n.d(t,"deprecated",(function(){return g})),n.d(t,"DOMElement",(function(){return v})),n.d(t,"targetPropType",(function(){return E})),n.d(t,"tagPropType",(function(){return O})),n.d(t,"TransitionTimeouts",(function(){return w})),n.d(t,"TransitionPropTypeKeys",(function(){return j})),n.d(t,"TransitionStatuses",(function(){return x})),n.d(t,"keyCodes",(function(){return T})),n.d(t,"PopperPlacements",(function(){return N})),n.d(t,"canUseDOM",(function(){return M})),n.d(t,"isReactRefObj",(function(){return A})),n.d(t,"toNumber",(function(){return k})),n.d(t,"isObject",(function(){return C})),n.d(t,"isFunction",(function(){return S})),n.d(t,"findDOMElements",(function(){return D})),n.d(t,"isArrayOrNodeList",(function(){return I})),n.d(t,"getTarget",(function(){return W})),n.d(t,"defaultToggleEvents",(function(){return $})),n.d(t,"addMultipleEventListeners",(function(){return G})),n.d(t,"focusableElements",(function(){return L}));var r,o=n(4),a=n.n(o);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function u(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function l(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&u(n+e)}function d(e){r=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function m(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var y={};function b(e){y[e]||("undefined"!==typeof console&&console.error(e),y[e]=!0)}function g(e,t){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&b('"'+r+'" property of "'+o+'" has been deprecated.\n'+t);for(var a=arguments.length,i=new Array(a>3?a-3:0),u=3;u<a;u++)i[u-3]=arguments[u];return e.apply(void 0,[n,r,o].concat(i))}}var h="object"===typeof window&&window.Element||function(){};function v(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var E=a.a.oneOfType([a.a.string,a.a.func,v,a.a.shape({current:a.a.any})]),O=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),w={Fade:150,Collapse:350,Modal:300,Carousel:600},j=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],x={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},N=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function A(e){return!(!e||"object"!==typeof e)&&"current"in e}function P(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function k(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===P(e))return NaN;if(C(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=C(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function C(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function S(e){if(!C(e))return!1;var t=P(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function D(e){if(A(e))return e.current;if(S(e))return e();if("string"===typeof e&&M){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function I(e){return null!==e&&(Array.isArray(e)||M&&"number"===typeof e.length)}function W(e,t){var n=D(e);return t?I(n)?n:null===n?[]:[n]:I(n)?n[0]:n}var $=["touchstart","click"];function G(e,t,n,r){var o=e;I(o)||(o=[o]);var a=n;if("string"===typeof a&&(a=a.split(/\s+/)),!I(o)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,r)}))}))}}var L=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},890:function(e,t,n){"use strict";n.r(t);var r=n(26),o=n(27),a=n(29),i=n(28),u=n(0),c=n.n(u),s=n(30),l=n(181),d=n(142),f=n(143),p=n(681),m=n.n(p),y=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.body.classList.add("authentication-bg")}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("authentication-bg")}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"account-pages my-5"},c.a.createElement(l.a,null,c.a.createElement(d.a,{className:"justify-content-center"},c.a.createElement(f.a,{xl:4,lg:5},c.a.createElement("div",{className:"text-center"},c.a.createElement("div",null,c.a.createElement("img",{src:m.a,alt:"",className:"img-fluid"}))))),c.a.createElement(d.a,null,c.a.createElement(f.a,{className:"text-center"},c.a.createElement("h3",{className:"mt-3"},"Opps, something went wrong"),c.a.createElement("p",{className:"text-muted mb-5"},"Server Error 500. We apoligise and are fixing the problem.",c.a.createElement("br",null)," Please try again at a later stage."),c.a.createElement(s.b,{to:"/",className:"btn btn-lg btn-primary mt-4"},"Take me back to Home"))))))}}]),n}(u.Component);t.default=y}}]);
//# sourceMappingURL=50.550934d1.chunk.js.map