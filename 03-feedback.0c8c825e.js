!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,o,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function j(e){return l=e,f=setTimeout(S,t),s?p(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function S(){var e=b();if(O(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?p(e):(r=o=void 0,u)}function T(){var e=b(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(S,t),p(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=h(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:w(b())},T}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?c(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),O=j.elements,S={email:"",message:""};j.addEventListener("input",(function(e){x()})),j.addEventListener("submit",(function(e){e.preventDefault(),console.table(S),j.reset(),T()}));try{var w=localStorage.getItem("feedback-form-state");S=JSON.parse(w),O.email.value=S.email,O.message.value=S.message}catch(e){console.error("Set state error: ",e.message)}function T(){S.email=O.email.value,S.message=O.message.value;var e=JSON.stringify(S);try{localStorage.setItem("feedback-form-state",e)}catch(e){console.error("Set state error: ",e.message)}}var x=n(T,500)}();
//# sourceMappingURL=03-feedback.0c8c825e.js.map
