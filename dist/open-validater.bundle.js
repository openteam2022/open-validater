!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35730/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document);var validater=function(){"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function t(e,t,r){return(t=s(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(r){t(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function s(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}var o,i=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}return r=t,o=[{key:"addRule",value:function(e){if("string"!=typeof e.name||"function"!=typeof e.handle)return!1;var r={};r[e.name]=e.handle,t.rules=n(n({},t.rules),r)}},{key:"test",value:function(e,r){return new Promise((function(n,s){u.call(t,e).then((function(s){if(s.status){var o=e.value,i=e.rules,a={status:!0,name:e.name||"",message:""},u=!0;for(var l in i)if(t.rules[l](o)||(a.status=!1,a.message=i[l],u=!1),!u){if(item.error&&"[object Object]"==Object.prototype.toString.call(item.error)){if(item.error.message){var c=document.querySelector(item.error.message.id);c&&(c.innerText=a.message),c&&item.error.message.styles&&(c.style.cssText=item.error.message.styles)}if(item.error.input){var f=document.querySelector(item.error.input.id);f&&(f.innerText=a.message),f&&item.error.input.styles&&(f.style.cssText=item.error.input.styles)}}"function"==typeof r&&r(a),n(a)}}}))}))}},{key:"tests",value:function(e,r){return new Promise((function(n,s){e.forEach((function(e){var s=e.value,o=e.rules,i={status:!0,name:e.name||"",message:""},a=!0;for(var u in o)if(t.rules[u](s)||(i.status=!1,i.message=o[u],a=!1),!a){if(e.error&&"[object Object]"==Object.prototype.toString.call(e.error)){if(e.error.message){var l=document.querySelector(e.error.message.id);l&&(l.innerText=i.message),l&&e.error.message.styles&&(l.style.cssText=e.error.message.styles)}if(e.error.input){var c=document.querySelector(e.error.input.id);c&&(c.innerText=i.message),c&&e.error.input.styles&&(c.style.cssText=e.error.input.styles)}}"function"==typeof r&&r(i),n(i)}}))}))}}],(s=null)&&e(r.prototype,s),o&&e(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,s,o}();function a(e){return!!e}function u(e){return new Promise((function(t,r){var n=l.call(o,e,"验证规则参数必须是object,当前参数类型不正确");n.status||t(n),"string"==typeof e.name&&l.call(o,e.rules).status||t({result:!1,message:"验证规则对象必须包含name属性和rules属性"}),t({status:!0})}))}function l(e,t,r){var n={status:!0,message:r};return"[object Object]"==Object.prototype.toString.call(e)||(n.status=!1),n}return o=i,t(i,"name","validater"),t(i,"author","kaijian"),t(i,"version","v2.2.0"),t(i,"description","基于js开发的表达验证插件"),t(i,"date","2024-06-12"),t(i,"rules",{required:function(e){var t=""==e||null==e||null==e;return!a.call(o,t)},phone:function(e){return a.call(o,/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(e))},http:function(e){return a.call(o,/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(e))},email:function(e){return a.call(o,/^\w+([  -+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g.test(e))},string:function(e){return a.call(o,/^[\u4e00-\u9fa5]*$/.test(e))},strEng:function(e){return a.call(o,/^[\u4e00-\u9fa5a-zA-Z]*$/.test(e))},strEngInt:function(e){return a.call(o,/^[\u4e00-\u9fa5a-zA-Z0-9]*$/.test(e))},engAndInt:function(e){return a.call(o,/^[a-zA-Z0-9]*$/.test(e))},engInt:function(e){return a.call(o,/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(e))},tel:function(e){return a.call(o,/^\d{3}-\d{8}|\d{4}-\d{7,8}/.test(e))},symbol:function(e){return a.call(o,/[`~!@#$^&*()《》=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g.test(e))},password:function(e){return a.call(o,/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,16}$/.test(e))},text:function(e){return a.call(o,/^[\u4e00-\u9fa5a-zA-Z0-9,.!?:，。？！]*$/.test(e))},int:function(e){return a.call(o,/^[0-9]*$/g.test(e))}}),i}();
//# sourceMappingURL=open-validater.bundle.js.map