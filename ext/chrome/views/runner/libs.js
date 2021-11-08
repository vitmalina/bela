/* generated file, do not change */
/*! jQuery v3.5.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t=Object.create(null),V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){let chai=require("chai");let chaiSubset=require("chai-subset");chai.use(chaiSubset);window.chai=chai},{chai:4,"chai-subset":3}],2:[function(require,module,exports){function exclude(){var excludes=[].slice.call(arguments);function excludeProps(res,obj){Object.keys(obj).forEach(function(key){if(!~excludes.indexOf(key))res[key]=obj[key]})}return function extendExclude(){var args=[].slice.call(arguments),i=0,res={};for(;i<args.length;i++){excludeProps(res,args[i])}return res}}module.exports=AssertionError;function AssertionError(message,_props,ssf){var extend=exclude("name","message","stack","constructor","toJSON"),props=extend(_props||{});this.message=message||"Unspecified AssertionError";this.showDiff=false;for(var key in props){this[key]=props[key]}ssf=ssf||AssertionError;if(Error.captureStackTrace){Error.captureStackTrace(this,ssf)}else{try{throw new Error}catch(e){this.stack=e.stack}}}AssertionError.prototype=Object.create(Error.prototype);AssertionError.prototype.name="AssertionError";AssertionError.prototype.constructor=AssertionError;AssertionError.prototype.toJSON=function(stack){var extend=exclude("constructor","toJSON","stack"),props=extend({name:this.name},this);if(false!==stack&&this.stack){props.stack=this.stack}return props}},{}],3:[function(require,module,exports){(function(){(function(chaiSubset){if(typeof require==="function"&&typeof exports==="object"&&typeof module==="object"){return module.exports=chaiSubset}else if(typeof define==="function"&&define.amd){return define(function(){return chaiSubset})}else{return chai.use(chaiSubset)}})(function(chai,utils){var Assertion=chai.Assertion;var assertionPrototype=Assertion.prototype;Assertion.addMethod("containSubset",function(expected){var actual=utils.flag(this,"object");var showDiff=chai.config.showDiff;assertionPrototype.assert.call(this,compare(expected,actual),"expected #{act} to contain subset #{exp}","expected #{act} to not contain subset #{exp}",expected,actual,showDiff)});chai.assert.containSubset=function(val,exp,msg){new chai.Assertion(val,msg).to.be.containSubset(exp)};function compare(expected,actual){if(expected===actual){return true}if(typeof actual!==typeof expected){return false}if(typeof expected!=="object"||expected===null){return expected===actual}if(!!expected&&!actual){return false}if(Array.isArray(expected)){if(typeof actual.length!=="number"){return false}var aa=Array.prototype.slice.call(actual);return expected.every(function(exp){return aa.some(function(act){return compare(exp,act)})})}if(expected instanceof Date){if(actual instanceof Date){return expected.getTime()===actual.getTime()}else{return false}}return Object.keys(expected).every(function(key){var eo=expected[key];var ao=actual[key];if(typeof eo==="object"&&eo!==null&&ao!==null){return compare(eo,ao)}if(typeof eo==="function"){return eo(ao)}return ao===eo})}})}).call(this)},{}],4:[function(require,module,exports){module.exports=require("./lib/chai")},{"./lib/chai":5}],5:[function(require,module,exports){var used=[];exports.version="4.3.3";exports.AssertionError=require("assertion-error");var util=require("./chai/utils");exports.use=function(fn){if(!~used.indexOf(fn)){fn(exports,util);used.push(fn)}return exports};exports.util=util;var config=require("./chai/config");exports.config=config;var assertion=require("./chai/assertion");exports.use(assertion);var core=require("./chai/core/assertions");exports.use(core);var expect=require("./chai/interface/expect");exports.use(expect);var should=require("./chai/interface/should");exports.use(should);var assert=require("./chai/interface/assert");exports.use(assert)},{"./chai/assertion":6,"./chai/config":7,"./chai/core/assertions":8,"./chai/interface/assert":9,"./chai/interface/expect":10,"./chai/interface/should":11,"./chai/utils":26,"assertion-error":2}],6:[function(require,module,exports){var config=require("./config");module.exports=function(_chai,util){var AssertionError=_chai.AssertionError,flag=util.flag;_chai.Assertion=Assertion;function Assertion(obj,msg,ssfi,lockSsfi){flag(this,"ssfi",ssfi||Assertion);flag(this,"lockSsfi",lockSsfi);flag(this,"object",obj);flag(this,"message",msg);return util.proxify(this)}Object.defineProperty(Assertion,"includeStack",{get:function(){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");return config.includeStack},set:function(value){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");config.includeStack=value}});Object.defineProperty(Assertion,"showDiff",{get:function(){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");return config.showDiff},set:function(value){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");config.showDiff=value}});Assertion.addProperty=function(name,fn){util.addProperty(this.prototype,name,fn)};Assertion.addMethod=function(name,fn){util.addMethod(this.prototype,name,fn)};Assertion.addChainableMethod=function(name,fn,chainingBehavior){util.addChainableMethod(this.prototype,name,fn,chainingBehavior)};Assertion.overwriteProperty=function(name,fn){util.overwriteProperty(this.prototype,name,fn)};Assertion.overwriteMethod=function(name,fn){util.overwriteMethod(this.prototype,name,fn)};Assertion.overwriteChainableMethod=function(name,fn,chainingBehavior){util.overwriteChainableMethod(this.prototype,name,fn,chainingBehavior)};Assertion.prototype.assert=function(expr,msg,negateMsg,expected,_actual,showDiff){var ok=util.test(this,arguments);if(false!==showDiff)showDiff=true;if(undefined===expected&&undefined===_actual)showDiff=false;if(true!==config.showDiff)showDiff=false;if(!ok){msg=util.getMessage(this,arguments);var actual=util.getActual(this,arguments);var assertionErrorObjectProperties={actual:actual,expected:expected,showDiff:showDiff};var operator=util.getOperator(this,arguments);if(operator){assertionErrorObjectProperties.operator=operator}throw new AssertionError(msg,assertionErrorObjectProperties,config.includeStack?this.assert:flag(this,"ssfi"))}};Object.defineProperty(Assertion.prototype,"_obj",{get:function(){return flag(this,"object")},set:function(val){flag(this,"object",val)}})}},{"./config":7}],7:[function(require,module,exports){module.exports={includeStack:false,showDiff:true,truncateThreshold:40,useProxy:true,proxyExcludedKeys:["then","catch","inspect","toJSON"]}},{}],8:[function(require,module,exports){module.exports=function(chai,_){var Assertion=chai.Assertion,AssertionError=chai.AssertionError,flag=_.flag;["to","be","been","is","and","has","have","with","that","which","at","of","same","but","does","still","also"].forEach(function(chain){Assertion.addProperty(chain)});Assertion.addProperty("not",function(){flag(this,"negate",true)});Assertion.addProperty("deep",function(){flag(this,"deep",true)});Assertion.addProperty("nested",function(){flag(this,"nested",true)});Assertion.addProperty("own",function(){flag(this,"own",true)});Assertion.addProperty("ordered",function(){flag(this,"ordered",true)});Assertion.addProperty("any",function(){flag(this,"any",true);flag(this,"all",false)});Assertion.addProperty("all",function(){flag(this,"all",true);flag(this,"any",false)});function an(type,msg){if(msg)flag(this,"message",msg);type=type.toLowerCase();var obj=flag(this,"object"),article=~["a","e","i","o","u"].indexOf(type.charAt(0))?"an ":"a ";this.assert(type===_.type(obj).toLowerCase(),"expected #{this} to be "+article+type,"expected #{this} not to be "+article+type)}Assertion.addChainableMethod("an",an);Assertion.addChainableMethod("a",an);function SameValueZero(a,b){return _.isNaN(a)&&_.isNaN(b)||a===b}function includeChainingBehavior(){flag(this,"contains",true)}function include(val,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),objType=_.type(obj).toLowerCase(),flagMsg=flag(this,"message"),negate=flag(this,"negate"),ssfi=flag(this,"ssfi"),isDeep=flag(this,"deep"),descriptor=isDeep?"deep ":"";flagMsg=flagMsg?flagMsg+": ":"";var included=false;switch(objType){case"string":included=obj.indexOf(val)!==-1;break;case"weakset":if(isDeep){throw new AssertionError(flagMsg+"unable to use .deep.include with WeakSet",undefined,ssfi)}included=obj.has(val);break;case"map":var isEql=isDeep?_.eql:SameValueZero;obj.forEach(function(item){included=included||isEql(item,val)});break;case"set":if(isDeep){obj.forEach(function(item){included=included||_.eql(item,val)})}else{included=obj.has(val)}break;case"array":if(isDeep){included=obj.some(function(item){return _.eql(item,val)})}else{included=obj.indexOf(val)!==-1}break;default:if(val!==Object(val)){throw new AssertionError(flagMsg+"the given combination of arguments ("+objType+" and "+_.type(val).toLowerCase()+")"+" is invalid for this assertion. "+"You can use an array, a map, an object, a set, a string, "+"or a weakset instead of a "+_.type(val).toLowerCase(),undefined,ssfi)}var props=Object.keys(val),firstErr=null,numErrs=0;props.forEach(function(prop){var propAssertion=new Assertion(obj);_.transferFlags(this,propAssertion,true);flag(propAssertion,"lockSsfi",true);if(!negate||props.length===1){propAssertion.property(prop,val[prop]);return}try{propAssertion.property(prop,val[prop])}catch(err){if(!_.checkError.compatibleConstructor(err,AssertionError)){throw err}if(firstErr===null)firstErr=err;numErrs++}},this);if(negate&&props.length>1&&numErrs===props.length){throw firstErr}return}this.assert(included,"expected #{this} to "+descriptor+"include "+_.inspect(val),"expected #{this} to not "+descriptor+"include "+_.inspect(val))}Assertion.addChainableMethod("include",include,includeChainingBehavior);Assertion.addChainableMethod("contain",include,includeChainingBehavior);Assertion.addChainableMethod("contains",include,includeChainingBehavior);Assertion.addChainableMethod("includes",include,includeChainingBehavior);Assertion.addProperty("ok",function(){this.assert(flag(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")});Assertion.addProperty("true",function(){this.assert(true===flag(this,"object"),"expected #{this} to be true","expected #{this} to be false",flag(this,"negate")?false:true)});Assertion.addProperty("false",function(){this.assert(false===flag(this,"object"),"expected #{this} to be false","expected #{this} to be true",flag(this,"negate")?true:false)});Assertion.addProperty("null",function(){this.assert(null===flag(this,"object"),"expected #{this} to be null","expected #{this} not to be null")});Assertion.addProperty("undefined",function(){this.assert(undefined===flag(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")});Assertion.addProperty("NaN",function(){this.assert(_.isNaN(flag(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")});function assertExist(){var val=flag(this,"object");this.assert(val!==null&&val!==undefined,"expected #{this} to exist","expected #{this} to not exist")}Assertion.addProperty("exist",assertExist);Assertion.addProperty("exists",assertExist);Assertion.addProperty("empty",function(){var val=flag(this,"object"),ssfi=flag(this,"ssfi"),flagMsg=flag(this,"message"),itemsCount;flagMsg=flagMsg?flagMsg+": ":"";switch(_.type(val).toLowerCase()){case"array":case"string":itemsCount=val.length;break;case"map":case"set":itemsCount=val.size;break;case"weakmap":case"weakset":throw new AssertionError(flagMsg+".empty was passed a weak collection",undefined,ssfi);case"function":var msg=flagMsg+".empty was passed a function "+_.getName(val);throw new AssertionError(msg.trim(),undefined,ssfi);default:if(val!==Object(val)){throw new AssertionError(flagMsg+".empty was passed non-string primitive "+_.inspect(val),undefined,ssfi)}itemsCount=Object.keys(val).length}this.assert(0===itemsCount,"expected #{this} to be empty","expected #{this} not to be empty")});function checkArguments(){var obj=flag(this,"object"),type=_.type(obj);this.assert("Arguments"===type,"expected #{this} to be arguments but got "+type,"expected #{this} to not be arguments")}Assertion.addProperty("arguments",checkArguments);Assertion.addProperty("Arguments",checkArguments);function assertEqual(val,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object");if(flag(this,"deep")){var prevLockSsfi=flag(this,"lockSsfi");flag(this,"lockSsfi",true);this.eql(val);flag(this,"lockSsfi",prevLockSsfi)}else{this.assert(val===obj,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",val,this._obj,true)}}Assertion.addMethod("equal",assertEqual);Assertion.addMethod("equals",assertEqual);Assertion.addMethod("eq",assertEqual);function assertEql(obj,msg){if(msg)flag(this,"message",msg);this.assert(_.eql(obj,flag(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",obj,this._obj,true)}Assertion.addMethod("eql",assertEql);Assertion.addMethod("eqls",assertEql);function assertAbove(n,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),doLength=flag(this,"doLength"),flagMsg=flag(this,"message"),msgPrefix=flagMsg?flagMsg+": ":"",ssfi=flag(this,"ssfi"),objType=_.type(obj).toLowerCase(),nType=_.type(n).toLowerCase(),errorMessage,shouldThrow=true;if(doLength&&objType!=="map"&&objType!=="set"){new Assertion(obj,flagMsg,ssfi,true).to.have.property("length")}if(!doLength&&(objType==="date"&&nType!=="date")){errorMessage=msgPrefix+"the argument to above must be a date"}else if(nType!=="number"&&(doLength||objType==="number")){errorMessage=msgPrefix+"the argument to above must be a number"}else if(!doLength&&(objType!=="date"&&objType!=="number")){var printObj=objType==="string"?"'"+obj+"'":obj;errorMessage=msgPrefix+"expected "+printObj+" to be a number or a date"}else{shouldThrow=false}if(shouldThrow){throw new AssertionError(errorMessage,undefined,ssfi)}if(doLength){var descriptor="length",itemsCount;if(objType==="map"||objType==="set"){descriptor="size";itemsCount=obj.size}else{itemsCount=obj.length}this.assert(itemsCount>n,"expected #{this} to have a "+descriptor+" above #{exp} but got #{act}","expected #{this} to not have a "+descriptor+" above #{exp}",n,itemsCount)}else{this.assert(obj>n,"expected #{this} to be above #{exp}","expected #{this} to be at most #{exp}",n)}}Assertion.addMethod("above",assertAbove);Assertion.addMethod("gt",assertAbove);Assertion.addMethod("greaterThan",assertAbove);function assertLeast(n,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),doLength=flag(this,"doLength"),flagMsg=flag(this,"message"),msgPrefix=flagMsg?flagMsg+": ":"",ssfi=flag(this,"ssfi"),objType=_.type(obj).toLowerCase(),nType=_.type(n).toLowerCase(),errorMessage,shouldThrow=true;if(doLength&&objType!=="map"&&objType!=="set"){new Assertion(obj,flagMsg,ssfi,true).to.have.property("length")}if(!doLength&&(objType==="date"&&nType!=="date")){errorMessage=msgPrefix+"the argument to least must be a date"}else if(nType!=="number"&&(doLength||objType==="number")){errorMessage=msgPrefix+"the argument to least must be a number"}else if(!doLength&&(objType!=="date"&&objType!=="number")){var printObj=objType==="string"?"'"+obj+"'":obj;errorMessage=msgPrefix+"expected "+printObj+" to be a number or a date"}else{shouldThrow=false}if(shouldThrow){throw new AssertionError(errorMessage,undefined,ssfi)}if(doLength){var descriptor="length",itemsCount;if(objType==="map"||objType==="set"){descriptor="size";itemsCount=obj.size}else{itemsCount=obj.length}this.assert(itemsCount>=n,"expected #{this} to have a "+descriptor+" at least #{exp} but got #{act}","expected #{this} to have a "+descriptor+" below #{exp}",n,itemsCount)}else{this.assert(obj>=n,"expected #{this} to be at least #{exp}","expected #{this} to be below #{exp}",n)}}Assertion.addMethod("least",assertLeast);Assertion.addMethod("gte",assertLeast);Assertion.addMethod("greaterThanOrEqual",assertLeast);function assertBelow(n,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),doLength=flag(this,"doLength"),flagMsg=flag(this,"message"),msgPrefix=flagMsg?flagMsg+": ":"",ssfi=flag(this,"ssfi"),objType=_.type(obj).toLowerCase(),nType=_.type(n).toLowerCase(),errorMessage,shouldThrow=true;if(doLength&&objType!=="map"&&objType!=="set"){new Assertion(obj,flagMsg,ssfi,true).to.have.property("length")}if(!doLength&&(objType==="date"&&nType!=="date")){errorMessage=msgPrefix+"the argument to below must be a date"}else if(nType!=="number"&&(doLength||objType==="number")){errorMessage=msgPrefix+"the argument to below must be a number"}else if(!doLength&&(objType!=="date"&&objType!=="number")){var printObj=objType==="string"?"'"+obj+"'":obj;errorMessage=msgPrefix+"expected "+printObj+" to be a number or a date"}else{shouldThrow=false}if(shouldThrow){throw new AssertionError(errorMessage,undefined,ssfi)}if(doLength){var descriptor="length",itemsCount;if(objType==="map"||objType==="set"){descriptor="size";itemsCount=obj.size}else{itemsCount=obj.length}this.assert(itemsCount<n,"expected #{this} to have a "+descriptor+" below #{exp} but got #{act}","expected #{this} to not have a "+descriptor+" below #{exp}",n,itemsCount)}else{this.assert(obj<n,"expected #{this} to be below #{exp}","expected #{this} to be at least #{exp}",n)}}Assertion.addMethod("below",assertBelow);Assertion.addMethod("lt",assertBelow);Assertion.addMethod("lessThan",assertBelow);function assertMost(n,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),doLength=flag(this,"doLength"),flagMsg=flag(this,"message"),msgPrefix=flagMsg?flagMsg+": ":"",ssfi=flag(this,"ssfi"),objType=_.type(obj).toLowerCase(),nType=_.type(n).toLowerCase(),errorMessage,shouldThrow=true;if(doLength&&objType!=="map"&&objType!=="set"){new Assertion(obj,flagMsg,ssfi,true).to.have.property("length")}if(!doLength&&(objType==="date"&&nType!=="date")){errorMessage=msgPrefix+"the argument to most must be a date"}else if(nType!=="number"&&(doLength||objType==="number")){errorMessage=msgPrefix+"the argument to most must be a number"}else if(!doLength&&(objType!=="date"&&objType!=="number")){var printObj=objType==="string"?"'"+obj+"'":obj;errorMessage=msgPrefix+"expected "+printObj+" to be a number or a date"}else{shouldThrow=false}if(shouldThrow){throw new AssertionError(errorMessage,undefined,ssfi)}if(doLength){var descriptor="length",itemsCount;if(objType==="map"||objType==="set"){descriptor="size";itemsCount=obj.size}else{itemsCount=obj.length}this.assert(itemsCount<=n,"expected #{this} to have a "+descriptor+" at most #{exp} but got #{act}","expected #{this} to have a "+descriptor+" above #{exp}",n,itemsCount)}else{this.assert(obj<=n,"expected #{this} to be at most #{exp}","expected #{this} to be above #{exp}",n)}}Assertion.addMethod("most",assertMost);Assertion.addMethod("lte",assertMost);Assertion.addMethod("lessThanOrEqual",assertMost);Assertion.addMethod("within",function(start,finish,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),doLength=flag(this,"doLength"),flagMsg=flag(this,"message"),msgPrefix=flagMsg?flagMsg+": ":"",ssfi=flag(this,"ssfi"),objType=_.type(obj).toLowerCase(),startType=_.type(start).toLowerCase(),finishType=_.type(finish).toLowerCase(),errorMessage,shouldThrow=true,range=startType==="date"&&finishType==="date"?start.toUTCString()+".."+finish.toUTCString():start+".."+finish;if(doLength&&objType!=="map"&&objType!=="set"){new Assertion(obj,flagMsg,ssfi,true).to.have.property("length")}if(!doLength&&(objType==="date"&&(startType!=="date"||finishType!=="date"))){errorMessage=msgPrefix+"the arguments to within must be dates"}else if((startType!=="number"||finishType!=="number")&&(doLength||objType==="number")){errorMessage=msgPrefix+"the arguments to within must be numbers"}else if(!doLength&&(objType!=="date"&&objType!=="number")){var printObj=objType==="string"?"'"+obj+"'":obj;errorMessage=msgPrefix+"expected "+printObj+" to be a number or a date"}else{shouldThrow=false}if(shouldThrow){throw new AssertionError(errorMessage,undefined,ssfi)}if(doLength){var descriptor="length",itemsCount;if(objType==="map"||objType==="set"){descriptor="size";itemsCount=obj.size}else{itemsCount=obj.length}this.assert(itemsCount>=start&&itemsCount<=finish,"expected #{this} to have a "+descriptor+" within "+range,"expected #{this} to not have a "+descriptor+" within "+range)}else{this.assert(obj>=start&&obj<=finish,"expected #{this} to be within "+range,"expected #{this} to not be within "+range)}});function assertInstanceOf(constructor,msg){if(msg)flag(this,"message",msg);var target=flag(this,"object");var ssfi=flag(this,"ssfi");var flagMsg=flag(this,"message");try{var isInstanceOf=target instanceof constructor}catch(err){if(err instanceof TypeError){flagMsg=flagMsg?flagMsg+": ":"";throw new AssertionError(flagMsg+"The instanceof assertion needs a constructor but "+_.type(constructor)+" was given.",undefined,ssfi)}throw err}var name=_.getName(constructor);if(name===null){name="an unnamed constructor"}this.assert(isInstanceOf,"expected #{this} to be an instance of "+name,"expected #{this} to not be an instance of "+name)}Assertion.addMethod("instanceof",assertInstanceOf);Assertion.addMethod("instanceOf",assertInstanceOf);function assertProperty(name,val,msg){if(msg)flag(this,"message",msg);var isNested=flag(this,"nested"),isOwn=flag(this,"own"),flagMsg=flag(this,"message"),obj=flag(this,"object"),ssfi=flag(this,"ssfi"),nameType=typeof name;flagMsg=flagMsg?flagMsg+": ":"";if(isNested){if(nameType!=="string"){throw new AssertionError(flagMsg+"the argument to property must be a string when using nested syntax",undefined,ssfi)}}else{if(nameType!=="string"&&nameType!=="number"&&nameType!=="symbol"){throw new AssertionError(flagMsg+"the argument to property must be a string, number, or symbol",undefined,ssfi)}}if(isNested&&isOwn){throw new AssertionError(flagMsg+'The "nested" and "own" flags cannot be combined.',undefined,ssfi)}if(obj===null||obj===undefined){throw new AssertionError(flagMsg+"Target cannot be null or undefined.",undefined,ssfi)}var isDeep=flag(this,"deep"),negate=flag(this,"negate"),pathInfo=isNested?_.getPathInfo(obj,name):null,value=isNested?pathInfo.value:obj[name];var descriptor="";if(isDeep)descriptor+="deep ";if(isOwn)descriptor+="own ";if(isNested)descriptor+="nested ";descriptor+="property ";var hasProperty;if(isOwn)hasProperty=Object.prototype.hasOwnProperty.call(obj,name);else if(isNested)hasProperty=pathInfo.exists;else hasProperty=_.hasProperty(obj,name);if(!negate||arguments.length===1){this.assert(hasProperty,"expected #{this} to have "+descriptor+_.inspect(name),"expected #{this} to not have "+descriptor+_.inspect(name))}if(arguments.length>1){this.assert(hasProperty&&(isDeep?_.eql(val,value):val===value),"expected #{this} to have "+descriptor+_.inspect(name)+" of #{exp}, but got #{act}","expected #{this} to not have "+descriptor+_.inspect(name)+" of #{act}",val,value)}flag(this,"object",value)}Assertion.addMethod("property",assertProperty);function assertOwnProperty(name,value,msg){flag(this,"own",true);assertProperty.apply(this,arguments)}Assertion.addMethod("ownProperty",assertOwnProperty);Assertion.addMethod("haveOwnProperty",assertOwnProperty);function assertOwnPropertyDescriptor(name,descriptor,msg){if(typeof descriptor==="string"){msg=descriptor;descriptor=null}if(msg)flag(this,"message",msg);var obj=flag(this,"object");var actualDescriptor=Object.getOwnPropertyDescriptor(Object(obj),name);if(actualDescriptor&&descriptor){this.assert(_.eql(descriptor,actualDescriptor),"expected the own property descriptor for "+_.inspect(name)+" on #{this} to match "+_.inspect(descriptor)+", got "+_.inspect(actualDescriptor),"expected the own property descriptor for "+_.inspect(name)+" on #{this} to not match "+_.inspect(descriptor),descriptor,actualDescriptor,true)}else{this.assert(actualDescriptor,"expected #{this} to have an own property descriptor for "+_.inspect(name),"expected #{this} to not have an own property descriptor for "+_.inspect(name))}flag(this,"object",actualDescriptor)}Assertion.addMethod("ownPropertyDescriptor",assertOwnPropertyDescriptor);Assertion.addMethod("haveOwnPropertyDescriptor",assertOwnPropertyDescriptor);function assertLengthChain(){flag(this,"doLength",true)}function assertLength(n,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),objType=_.type(obj).toLowerCase(),flagMsg=flag(this,"message"),ssfi=flag(this,"ssfi"),descriptor="length",itemsCount;switch(objType){case"map":case"set":descriptor="size";itemsCount=obj.size;break;default:new Assertion(obj,flagMsg,ssfi,true).to.have.property("length");itemsCount=obj.length}this.assert(itemsCount==n,"expected #{this} to have a "+descriptor+" of #{exp} but got #{act}","expected #{this} to not have a "+descriptor+" of #{act}",n,itemsCount)}Assertion.addChainableMethod("length",assertLength,assertLengthChain);Assertion.addChainableMethod("lengthOf",assertLength,assertLengthChain);function assertMatch(re,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object");this.assert(re.exec(obj),"expected #{this} to match "+re,"expected #{this} not to match "+re)}Assertion.addMethod("match",assertMatch);Assertion.addMethod("matches",assertMatch);Assertion.addMethod("string",function(str,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),flagMsg=flag(this,"message"),ssfi=flag(this,"ssfi");new Assertion(obj,flagMsg,ssfi,true).is.a("string");this.assert(~obj.indexOf(str),"expected #{this} to contain "+_.inspect(str),"expected #{this} to not contain "+_.inspect(str))});function assertKeys(keys){var obj=flag(this,"object"),objType=_.type(obj),keysType=_.type(keys),ssfi=flag(this,"ssfi"),isDeep=flag(this,"deep"),str,deepStr="",actual,ok=true,flagMsg=flag(this,"message");flagMsg=flagMsg?flagMsg+": ":"";var mixedArgsMsg=flagMsg+"when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";if(objType==="Map"||objType==="Set"){deepStr=isDeep?"deeply ":"";actual=[];obj.forEach(function(val,key){actual.push(key)});if(keysType!=="Array"){keys=Array.prototype.slice.call(arguments)}}else{actual=_.getOwnEnumerableProperties(obj);switch(keysType){case"Array":if(arguments.length>1){throw new AssertionError(mixedArgsMsg,undefined,ssfi)}break;case"Object":if(arguments.length>1){throw new AssertionError(mixedArgsMsg,undefined,ssfi)}keys=Object.keys(keys);break;default:keys=Array.prototype.slice.call(arguments)}keys=keys.map(function(val){return typeof val==="symbol"?val:String(val)})}if(!keys.length){throw new AssertionError(flagMsg+"keys required",undefined,ssfi)}var len=keys.length,any=flag(this,"any"),all=flag(this,"all"),expected=keys;if(!any&&!all){all=true}if(any){ok=expected.some(function(expectedKey){return actual.some(function(actualKey){if(isDeep){return _.eql(expectedKey,actualKey)}else{return expectedKey===actualKey}})})}if(all){ok=expected.every(function(expectedKey){return actual.some(function(actualKey){if(isDeep){return _.eql(expectedKey,actualKey)}else{return expectedKey===actualKey}})});if(!flag(this,"contains")){ok=ok&&keys.length==actual.length}}if(len>1){keys=keys.map(function(key){return _.inspect(key)});var last=keys.pop();if(all){str=keys.join(", ")+", and "+last}if(any){str=keys.join(", ")+", or "+last}}else{str=_.inspect(keys[0])}str=(len>1?"keys ":"key ")+str;str=(flag(this,"contains")?"contain ":"have ")+str;this.assert(ok,"expected #{this} to "+deepStr+str,"expected #{this} to not "+deepStr+str,expected.slice(0).sort(_.compareByInspect),actual.sort(_.compareByInspect),true)}Assertion.addMethod("keys",assertKeys);Assertion.addMethod("key",assertKeys);function assertThrows(errorLike,errMsgMatcher,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),ssfi=flag(this,"ssfi"),flagMsg=flag(this,"message"),negate=flag(this,"negate")||false;new Assertion(obj,flagMsg,ssfi,true).is.a("function");if(errorLike instanceof RegExp||typeof errorLike==="string"){errMsgMatcher=errorLike;errorLike=null}var caughtErr;try{obj()}catch(err){caughtErr=err}var everyArgIsUndefined=errorLike===undefined&&errMsgMatcher===undefined;var everyArgIsDefined=Boolean(errorLike&&errMsgMatcher);var errorLikeFail=false;var errMsgMatcherFail=false;if(everyArgIsUndefined||!everyArgIsUndefined&&!negate){var errorLikeString="an error";if(errorLike instanceof Error){errorLikeString="#{exp}"}else if(errorLike){errorLikeString=_.checkError.getConstructorName(errorLike)}this.assert(caughtErr,"expected #{this} to throw "+errorLikeString,"expected #{this} to not throw an error but #{act} was thrown",errorLike&&errorLike.toString(),caughtErr instanceof Error?caughtErr.toString():typeof caughtErr==="string"?caughtErr:caughtErr&&_.checkError.getConstructorName(caughtErr))}if(errorLike&&caughtErr){if(errorLike instanceof Error){var isCompatibleInstance=_.checkError.compatibleInstance(caughtErr,errorLike);if(isCompatibleInstance===negate){if(everyArgIsDefined&&negate){errorLikeFail=true}else{this.assert(negate,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(caughtErr&&!negate?" but #{act} was thrown":""),errorLike.toString(),caughtErr.toString())}}}var isCompatibleConstructor=_.checkError.compatibleConstructor(caughtErr,errorLike);if(isCompatibleConstructor===negate){if(everyArgIsDefined&&negate){errorLikeFail=true}else{this.assert(negate,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(caughtErr?" but #{act} was thrown":""),errorLike instanceof Error?errorLike.toString():errorLike&&_.checkError.getConstructorName(errorLike),caughtErr instanceof Error?caughtErr.toString():caughtErr&&_.checkError.getConstructorName(caughtErr))}}}if(caughtErr&&errMsgMatcher!==undefined&&errMsgMatcher!==null){var placeholder="including";if(errMsgMatcher instanceof RegExp){placeholder="matching"}var isCompatibleMessage=_.checkError.compatibleMessage(caughtErr,errMsgMatcher);if(isCompatibleMessage===negate){if(everyArgIsDefined&&negate){errMsgMatcherFail=true}else{this.assert(negate,"expected #{this} to throw error "+placeholder+" #{exp} but got #{act}","expected #{this} to throw error not "+placeholder+" #{exp}",errMsgMatcher,_.checkError.getMessage(caughtErr))}}}if(errorLikeFail&&errMsgMatcherFail){this.assert(negate,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(caughtErr?" but #{act} was thrown":""),errorLike instanceof Error?errorLike.toString():errorLike&&_.checkError.getConstructorName(errorLike),caughtErr instanceof Error?caughtErr.toString():caughtErr&&_.checkError.getConstructorName(caughtErr))}flag(this,"object",caughtErr)}Assertion.addMethod("throw",assertThrows);Assertion.addMethod("throws",assertThrows);Assertion.addMethod("Throw",assertThrows);function respondTo(method,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),itself=flag(this,"itself"),context="function"===typeof obj&&!itself?obj.prototype[method]:obj[method];this.assert("function"===typeof context,"expected #{this} to respond to "+_.inspect(method),"expected #{this} to not respond to "+_.inspect(method))}Assertion.addMethod("respondTo",respondTo);Assertion.addMethod("respondsTo",respondTo);Assertion.addProperty("itself",function(){flag(this,"itself",true)});function satisfy(matcher,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object");var result=matcher(obj);this.assert(result,"expected #{this} to satisfy "+_.objDisplay(matcher),"expected #{this} to not satisfy"+_.objDisplay(matcher),flag(this,"negate")?false:true,result)}Assertion.addMethod("satisfy",satisfy);Assertion.addMethod("satisfies",satisfy);function closeTo(expected,delta,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),flagMsg=flag(this,"message"),ssfi=flag(this,"ssfi");new Assertion(obj,flagMsg,ssfi,true).is.a("number");if(typeof expected!=="number"||typeof delta!=="number"){flagMsg=flagMsg?flagMsg+": ":"";var deltaMessage=delta===undefined?", and a delta is required":"";throw new AssertionError(flagMsg+"the arguments to closeTo or approximately must be numbers"+deltaMessage,undefined,ssfi)}this.assert(Math.abs(obj-expected)<=delta,"expected #{this} to be close to "+expected+" +/- "+delta,"expected #{this} not to be close to "+expected+" +/- "+delta)}Assertion.addMethod("closeTo",closeTo);Assertion.addMethod("approximately",closeTo);function isSubsetOf(subset,superset,cmp,contains,ordered){if(!contains){if(subset.length!==superset.length)return false;superset=superset.slice()}return subset.every(function(elem,idx){if(ordered)return cmp?cmp(elem,superset[idx]):elem===superset[idx];if(!cmp){var matchIdx=superset.indexOf(elem);if(matchIdx===-1)return false;if(!contains)superset.splice(matchIdx,1);return true}return superset.some(function(elem2,matchIdx){if(!cmp(elem,elem2))return false;if(!contains)superset.splice(matchIdx,1);return true})})}Assertion.addMethod("members",function(subset,msg){if(msg)flag(this,"message",msg);var obj=flag(this,"object"),flagMsg=flag(this,"message"),ssfi=flag(this,"ssfi");new Assertion(obj,flagMsg,ssfi,true).to.be.an("array");new Assertion(subset,flagMsg,ssfi,true).to.be.an("array");var contains=flag(this,"contains");var ordered=flag(this,"ordered");var subject,failMsg,failNegateMsg;if(contains){subject=ordered?"an ordered superset":"a superset";failMsg="expected #{this} to be "+subject+" of #{exp}";failNegateMsg="expected #{this} to not be "+subject+" of #{exp}"}else{subject=ordered?"ordered members":"members";failMsg="expected #{this} to have the same "+subject+" as #{exp}";failNegateMsg="expected #{this} to not have the same "+subject+" as #{exp}"}var cmp=flag(this,"deep")?_.eql:undefined;this.assert(isSubsetOf(subset,obj,cmp,contains,ordered),failMsg,failNegateMsg,subset,obj,true)});function oneOf(list,msg){if(msg)flag(this,"message",msg);var expected=flag(this,"object"),flagMsg=flag(this,"message"),ssfi=flag(this,"ssfi"),contains=flag(this,"contains"),isDeep=flag(this,"deep");new Assertion(list,flagMsg,ssfi,true).to.be.an("array");if(contains){this.assert(list.some(function(possibility){return expected.indexOf(possibility)>-1}),"expected #{this} to contain one of #{exp}","expected #{this} to not contain one of #{exp}",list,expected)}else{if(isDeep){this.assert(list.some(function(possibility){return _.eql(expected,possibility)}),"expected #{this} to deeply equal one of #{exp}","expected #{this} to deeply equal one of #{exp}",list,expected)}else{this.assert(list.indexOf(expected)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",list,expected)}}}Assertion.addMethod("oneOf",oneOf);function assertChanges(subject,prop,msg){if(msg)flag(this,"message",msg);var fn=flag(this,"object"),flagMsg=flag(this,"message"),ssfi=flag(this,"ssfi");new Assertion(fn,flagMsg,ssfi,true).is.a("function");var initial;if(!prop){new Assertion(subject,flagMsg,ssfi,true).is.a("function");initial=subject()}else{new Assertion(subject,flagMsg,ssfi,true).to.have.property(prop);initial=subject[prop]}fn();var final=prop===undefined||prop===null?subject():subject[prop];var msgObj=prop===undefined||prop===null?initial:"."+prop;flag(this,"deltaMsgObj",msgObj);flag(this,"initialDeltaValue",initial);flag(this,"finalDeltaValue",final);flag(this,"deltaBehavior","change");flag(this,"realDelta",final!==initial);this.assert(initial!==final,"expected "+msgObj+" to change","expected "+msgObj+" to not change")}Assertion.addMethod("change",assertChanges);Assertion.addMethod("changes",assertChanges);function assertIncreases(subject,prop,msg){if(msg)flag(this,"message",msg);var fn=flag(this,"object"),flagMsg=flag(this,"message"),ssfi=flag(this,"ssfi");new Assertion(fn,flagMsg,ssfi,true).is.a("function");var initial;if(!prop){new Assertion(subject,flagMsg,ssfi,true).is.a("function");initial=subject()}else{new Assertion(subject,flagMsg,ssfi,true).to.have.property(prop);initial=subject[prop]}new Assertion(initial,flagMsg,ssfi,true).is.a("number");fn();var final=prop===undefined||prop===null?subject():subject[prop];var msgObj=prop===undefined||prop===null?initial:"."+prop;flag(this,"deltaMsgObj",msgObj);flag(this,"initialDeltaValue",initial);flag(this,"finalDeltaValue",final);flag(this,"deltaBehavior","increase");flag(this,"realDelta",final-initial);this.assert(final-initial>0,"expected "+msgObj+" to increase","expected "+msgObj+" to not increase")}Assertion.addMethod("increase",assertIncreases);Assertion.addMethod("increases",assertIncreases);function assertDecreases(subject,prop,msg){if(msg)flag(this,"message",msg);var fn=flag(this,"object"),flagMsg=flag(this,"message"),ssfi=flag(this,"ssfi");new Assertion(fn,flagMsg,ssfi,true).is.a("function");var initial;if(!prop){new Assertion(subject,flagMsg,ssfi,true).is.a("function");initial=subject()}else{new Assertion(subject,flagMsg,ssfi,true).to.have.property(prop);initial=subject[prop]}new Assertion(initial,flagMsg,ssfi,true).is.a("number");fn();var final=prop===undefined||prop===null?subject():subject[prop];var msgObj=prop===undefined||prop===null?initial:"."+prop;flag(this,"deltaMsgObj",msgObj);flag(this,"initialDeltaValue",initial);flag(this,"finalDeltaValue",final);flag(this,"deltaBehavior","decrease");flag(this,"realDelta",initial-final);this.assert(final-initial<0,"expected "+msgObj+" to decrease","expected "+msgObj+" to not decrease")}Assertion.addMethod("decrease",assertDecreases);Assertion.addMethod("decreases",assertDecreases);function assertDelta(delta,msg){if(msg)flag(this,"message",msg);var msgObj=flag(this,"deltaMsgObj");var initial=flag(this,"initialDeltaValue");var final=flag(this,"finalDeltaValue");var behavior=flag(this,"deltaBehavior");var realDelta=flag(this,"realDelta");var expression;if(behavior==="change"){expression=Math.abs(final-initial)===Math.abs(delta)}else{expression=realDelta===Math.abs(delta)}this.assert(expression,"expected "+msgObj+" to "+behavior+" by "+delta,"expected "+msgObj+" to not "+behavior+" by "+delta)}Assertion.addMethod("by",assertDelta);Assertion.addProperty("extensible",function(){var obj=flag(this,"object");var isExtensible=obj===Object(obj)&&Object.isExtensible(obj);this.assert(isExtensible,"expected #{this} to be extensible","expected #{this} to not be extensible")});Assertion.addProperty("sealed",function(){var obj=flag(this,"object");var isSealed=obj===Object(obj)?Object.isSealed(obj):true;this.assert(isSealed,"expected #{this} to be sealed","expected #{this} to not be sealed")});Assertion.addProperty("frozen",function(){var obj=flag(this,"object");var isFrozen=obj===Object(obj)?Object.isFrozen(obj):true;this.assert(isFrozen,"expected #{this} to be frozen","expected #{this} to not be frozen")});Assertion.addProperty("finite",function(msg){var obj=flag(this,"object");this.assert(typeof obj==="number"&&isFinite(obj),"expected #{this} to be a finite number","expected #{this} to not be a finite number")})}},{}],9:[function(require,module,exports){module.exports=function(chai,util){var Assertion=chai.Assertion,flag=util.flag;var assert=chai.assert=function(express,errmsg){var test=new Assertion(null,null,chai.assert,true);test.assert(express,errmsg,"[ negation message unavailable ]")};assert.fail=function(actual,expected,message,operator){if(arguments.length<2){message=actual;actual=undefined}message=message||"assert.fail()";throw new chai.AssertionError(message,{actual:actual,expected:expected,operator:operator},assert.fail)};assert.isOk=function(val,msg){new Assertion(val,msg,assert.isOk,true).is.ok};assert.isNotOk=function(val,msg){new Assertion(val,msg,assert.isNotOk,true).is.not.ok};assert.equal=function(act,exp,msg){var test=new Assertion(act,msg,assert.equal,true);test.assert(exp==flag(test,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",exp,act,true)};assert.notEqual=function(act,exp,msg){var test=new Assertion(act,msg,assert.notEqual,true);test.assert(exp!=flag(test,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",exp,act,true)};assert.strictEqual=function(act,exp,msg){new Assertion(act,msg,assert.strictEqual,true).to.equal(exp)};assert.notStrictEqual=function(act,exp,msg){new Assertion(act,msg,assert.notStrictEqual,true).to.not.equal(exp)};assert.deepEqual=assert.deepStrictEqual=function(act,exp,msg){new Assertion(act,msg,assert.deepEqual,true).to.eql(exp)};assert.notDeepEqual=function(act,exp,msg){new Assertion(act,msg,assert.notDeepEqual,true).to.not.eql(exp)};assert.isAbove=function(val,abv,msg){new Assertion(val,msg,assert.isAbove,true).to.be.above(abv)};assert.isAtLeast=function(val,atlst,msg){new Assertion(val,msg,assert.isAtLeast,true).to.be.least(atlst)};assert.isBelow=function(val,blw,msg){new Assertion(val,msg,assert.isBelow,true).to.be.below(blw)};assert.isAtMost=function(val,atmst,msg){new Assertion(val,msg,assert.isAtMost,true).to.be.most(atmst)};assert.isTrue=function(val,msg){new Assertion(val,msg,assert.isTrue,true).is["true"]};assert.isNotTrue=function(val,msg){new Assertion(val,msg,assert.isNotTrue,true).to.not.equal(true)};assert.isFalse=function(val,msg){new Assertion(val,msg,assert.isFalse,true).is["false"]};assert.isNotFalse=function(val,msg){new Assertion(val,msg,assert.isNotFalse,true).to.not.equal(false)};assert.isNull=function(val,msg){new Assertion(val,msg,assert.isNull,true).to.equal(null)};assert.isNotNull=function(val,msg){new Assertion(val,msg,assert.isNotNull,true).to.not.equal(null)};assert.isNaN=function(val,msg){new Assertion(val,msg,assert.isNaN,true).to.be.NaN};assert.isNotNaN=function(val,msg){new Assertion(val,msg,assert.isNotNaN,true).not.to.be.NaN};assert.exists=function(val,msg){new Assertion(val,msg,assert.exists,true).to.exist};assert.notExists=function(val,msg){new Assertion(val,msg,assert.notExists,true).to.not.exist};assert.isUndefined=function(val,msg){new Assertion(val,msg,assert.isUndefined,true).to.equal(undefined)};assert.isDefined=function(val,msg){new Assertion(val,msg,assert.isDefined,true).to.not.equal(undefined)};assert.isFunction=function(val,msg){new Assertion(val,msg,assert.isFunction,true).to.be.a("function")};assert.isNotFunction=function(val,msg){new Assertion(val,msg,assert.isNotFunction,true).to.not.be.a("function")};assert.isObject=function(val,msg){new Assertion(val,msg,assert.isObject,true).to.be.a("object")};assert.isNotObject=function(val,msg){new Assertion(val,msg,assert.isNotObject,true).to.not.be.a("object")};assert.isArray=function(val,msg){new Assertion(val,msg,assert.isArray,true).to.be.an("array")};assert.isNotArray=function(val,msg){new Assertion(val,msg,assert.isNotArray,true).to.not.be.an("array")};assert.isString=function(val,msg){new Assertion(val,msg,assert.isString,true).to.be.a("string")};assert.isNotString=function(val,msg){new Assertion(val,msg,assert.isNotString,true).to.not.be.a("string")};assert.isNumber=function(val,msg){new Assertion(val,msg,assert.isNumber,true).to.be.a("number")};assert.isNotNumber=function(val,msg){new Assertion(val,msg,assert.isNotNumber,true).to.not.be.a("number")};assert.isFinite=function(val,msg){new Assertion(val,msg,assert.isFinite,true).to.be.finite};assert.isBoolean=function(val,msg){new Assertion(val,msg,assert.isBoolean,true).to.be.a("boolean")};assert.isNotBoolean=function(val,msg){new Assertion(val,msg,assert.isNotBoolean,true).to.not.be.a("boolean")};assert.typeOf=function(val,type,msg){new Assertion(val,msg,assert.typeOf,true).to.be.a(type)};assert.notTypeOf=function(val,type,msg){new Assertion(val,msg,assert.notTypeOf,true).to.not.be.a(type)};assert.instanceOf=function(val,type,msg){new Assertion(val,msg,assert.instanceOf,true).to.be.instanceOf(type)};assert.notInstanceOf=function(val,type,msg){new Assertion(val,msg,assert.notInstanceOf,true).to.not.be.instanceOf(type)};assert.include=function(exp,inc,msg){new Assertion(exp,msg,assert.include,true).include(inc)};assert.notInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.notInclude,true).not.include(inc)};assert.deepInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.deepInclude,true).deep.include(inc)};assert.notDeepInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.notDeepInclude,true).not.deep.include(inc)};assert.nestedInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.nestedInclude,true).nested.include(inc)};assert.notNestedInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.notNestedInclude,true).not.nested.include(inc)};assert.deepNestedInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.deepNestedInclude,true).deep.nested.include(inc)};assert.notDeepNestedInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.notDeepNestedInclude,true).not.deep.nested.include(inc)};assert.ownInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.ownInclude,true).own.include(inc)};assert.notOwnInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.notOwnInclude,true).not.own.include(inc)};assert.deepOwnInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.deepOwnInclude,true).deep.own.include(inc)};assert.notDeepOwnInclude=function(exp,inc,msg){new Assertion(exp,msg,assert.notDeepOwnInclude,true).not.deep.own.include(inc)};assert.match=function(exp,re,msg){new Assertion(exp,msg,assert.match,true).to.match(re)};assert.notMatch=function(exp,re,msg){new Assertion(exp,msg,assert.notMatch,true).to.not.match(re)};assert.property=function(obj,prop,msg){new Assertion(obj,msg,assert.property,true).to.have.property(prop)};assert.notProperty=function(obj,prop,msg){new Assertion(obj,msg,assert.notProperty,true).to.not.have.property(prop)};assert.propertyVal=function(obj,prop,val,msg){new Assertion(obj,msg,assert.propertyVal,true).to.have.property(prop,val)};assert.notPropertyVal=function(obj,prop,val,msg){new Assertion(obj,msg,assert.notPropertyVal,true).to.not.have.property(prop,val)};assert.deepPropertyVal=function(obj,prop,val,msg){new Assertion(obj,msg,assert.deepPropertyVal,true).to.have.deep.property(prop,val)};assert.notDeepPropertyVal=function(obj,prop,val,msg){new Assertion(obj,msg,assert.notDeepPropertyVal,true).to.not.have.deep.property(prop,val)};assert.ownProperty=function(obj,prop,msg){new Assertion(obj,msg,assert.ownProperty,true).to.have.own.property(prop)};assert.notOwnProperty=function(obj,prop,msg){new Assertion(obj,msg,assert.notOwnProperty,true).to.not.have.own.property(prop)};assert.ownPropertyVal=function(obj,prop,value,msg){new Assertion(obj,msg,assert.ownPropertyVal,true).to.have.own.property(prop,value)};assert.notOwnPropertyVal=function(obj,prop,value,msg){new Assertion(obj,msg,assert.notOwnPropertyVal,true).to.not.have.own.property(prop,value)};assert.deepOwnPropertyVal=function(obj,prop,value,msg){new Assertion(obj,msg,assert.deepOwnPropertyVal,true).to.have.deep.own.property(prop,value)};assert.notDeepOwnPropertyVal=function(obj,prop,value,msg){new Assertion(obj,msg,assert.notDeepOwnPropertyVal,true).to.not.have.deep.own.property(prop,value)};assert.nestedProperty=function(obj,prop,msg){new Assertion(obj,msg,assert.nestedProperty,true).to.have.nested.property(prop)};assert.notNestedProperty=function(obj,prop,msg){new Assertion(obj,msg,assert.notNestedProperty,true).to.not.have.nested.property(prop)};assert.nestedPropertyVal=function(obj,prop,val,msg){new Assertion(obj,msg,assert.nestedPropertyVal,true).to.have.nested.property(prop,val)};assert.notNestedPropertyVal=function(obj,prop,val,msg){new Assertion(obj,msg,assert.notNestedPropertyVal,true).to.not.have.nested.property(prop,val)};assert.deepNestedPropertyVal=function(obj,prop,val,msg){new Assertion(obj,msg,assert.deepNestedPropertyVal,true).to.have.deep.nested.property(prop,val)};assert.notDeepNestedPropertyVal=function(obj,prop,val,msg){new Assertion(obj,msg,assert.notDeepNestedPropertyVal,true).to.not.have.deep.nested.property(prop,val)};assert.lengthOf=function(exp,len,msg){new Assertion(exp,msg,assert.lengthOf,true).to.have.lengthOf(len)};assert.hasAnyKeys=function(obj,keys,msg){new Assertion(obj,msg,assert.hasAnyKeys,true).to.have.any.keys(keys)};assert.hasAllKeys=function(obj,keys,msg){new Assertion(obj,msg,assert.hasAllKeys,true).to.have.all.keys(keys)};assert.containsAllKeys=function(obj,keys,msg){new Assertion(obj,msg,assert.containsAllKeys,true).to.contain.all.keys(keys)};assert.doesNotHaveAnyKeys=function(obj,keys,msg){new Assertion(obj,msg,assert.doesNotHaveAnyKeys,true).to.not.have.any.keys(keys)};assert.doesNotHaveAllKeys=function(obj,keys,msg){new Assertion(obj,msg,assert.doesNotHaveAllKeys,true).to.not.have.all.keys(keys)};assert.hasAnyDeepKeys=function(obj,keys,msg){new Assertion(obj,msg,assert.hasAnyDeepKeys,true).to.have.any.deep.keys(keys)};assert.hasAllDeepKeys=function(obj,keys,msg){new Assertion(obj,msg,assert.hasAllDeepKeys,true).to.have.all.deep.keys(keys)};assert.containsAllDeepKeys=function(obj,keys,msg){new Assertion(obj,msg,assert.containsAllDeepKeys,true).to.contain.all.deep.keys(keys)};assert.doesNotHaveAnyDeepKeys=function(obj,keys,msg){new Assertion(obj,msg,assert.doesNotHaveAnyDeepKeys,true).to.not.have.any.deep.keys(keys)};assert.doesNotHaveAllDeepKeys=function(obj,keys,msg){new Assertion(obj,msg,assert.doesNotHaveAllDeepKeys,true).to.not.have.all.deep.keys(keys)};assert.throws=function(fn,errorLike,errMsgMatcher,msg){if("string"===typeof errorLike||errorLike instanceof RegExp){errMsgMatcher=errorLike;errorLike=null}var assertErr=new Assertion(fn,msg,assert.throws,true).to.throw(errorLike,errMsgMatcher);return flag(assertErr,"object")};assert.doesNotThrow=function(fn,errorLike,errMsgMatcher,msg){if("string"===typeof errorLike||errorLike instanceof RegExp){errMsgMatcher=errorLike;errorLike=null}new Assertion(fn,msg,assert.doesNotThrow,true).to.not.throw(errorLike,errMsgMatcher)};assert.operator=function(val,operator,val2,msg){var ok;switch(operator){case"==":ok=val==val2;break;case"===":ok=val===val2;break;case">":ok=val>val2;break;case">=":ok=val>=val2;break;case"<":ok=val<val2;break;case"<=":ok=val<=val2;break;case"!=":ok=val!=val2;break;case"!==":ok=val!==val2;break;default:msg=msg?msg+": ":msg;throw new chai.AssertionError(msg+'Invalid operator "'+operator+'"',undefined,assert.operator)}var test=new Assertion(ok,msg,assert.operator,true);test.assert(true===flag(test,"object"),"expected "+util.inspect(val)+" to be "+operator+" "+util.inspect(val2),"expected "+util.inspect(val)+" to not be "+operator+" "+util.inspect(val2))};assert.closeTo=function(act,exp,delta,msg){new Assertion(act,msg,assert.closeTo,true).to.be.closeTo(exp,delta)};assert.approximately=function(act,exp,delta,msg){new Assertion(act,msg,assert.approximately,true).to.be.approximately(exp,delta)};assert.sameMembers=function(set1,set2,msg){new Assertion(set1,msg,assert.sameMembers,true).to.have.same.members(set2)};assert.notSameMembers=function(set1,set2,msg){new Assertion(set1,msg,assert.notSameMembers,true).to.not.have.same.members(set2)};assert.sameDeepMembers=function(set1,set2,msg){new Assertion(set1,msg,assert.sameDeepMembers,true).to.have.same.deep.members(set2)};assert.notSameDeepMembers=function(set1,set2,msg){new Assertion(set1,msg,assert.notSameDeepMembers,true).to.not.have.same.deep.members(set2)};assert.sameOrderedMembers=function(set1,set2,msg){new Assertion(set1,msg,assert.sameOrderedMembers,true).to.have.same.ordered.members(set2)};assert.notSameOrderedMembers=function(set1,set2,msg){new Assertion(set1,msg,assert.notSameOrderedMembers,true).to.not.have.same.ordered.members(set2)};assert.sameDeepOrderedMembers=function(set1,set2,msg){new Assertion(set1,msg,assert.sameDeepOrderedMembers,true).to.have.same.deep.ordered.members(set2)};assert.notSameDeepOrderedMembers=function(set1,set2,msg){new Assertion(set1,msg,assert.notSameDeepOrderedMembers,true).to.not.have.same.deep.ordered.members(set2)};assert.includeMembers=function(superset,subset,msg){new Assertion(superset,msg,assert.includeMembers,true).to.include.members(subset)};assert.notIncludeMembers=function(superset,subset,msg){new Assertion(superset,msg,assert.notIncludeMembers,true).to.not.include.members(subset)};assert.includeDeepMembers=function(superset,subset,msg){new Assertion(superset,msg,assert.includeDeepMembers,true).to.include.deep.members(subset)};assert.notIncludeDeepMembers=function(superset,subset,msg){new Assertion(superset,msg,assert.notIncludeDeepMembers,true).to.not.include.deep.members(subset)};assert.includeOrderedMembers=function(superset,subset,msg){new Assertion(superset,msg,assert.includeOrderedMembers,true).to.include.ordered.members(subset)};assert.notIncludeOrderedMembers=function(superset,subset,msg){new Assertion(superset,msg,assert.notIncludeOrderedMembers,true).to.not.include.ordered.members(subset)};assert.includeDeepOrderedMembers=function(superset,subset,msg){new Assertion(superset,msg,assert.includeDeepOrderedMembers,true).to.include.deep.ordered.members(subset)};assert.notIncludeDeepOrderedMembers=function(superset,subset,msg){new Assertion(superset,msg,assert.notIncludeDeepOrderedMembers,true).to.not.include.deep.ordered.members(subset)};assert.oneOf=function(inList,list,msg){new Assertion(inList,msg,assert.oneOf,true).to.be.oneOf(list)};assert.changes=function(fn,obj,prop,msg){if(arguments.length===3&&typeof obj==="function"){msg=prop;prop=null}new Assertion(fn,msg,assert.changes,true).to.change(obj,prop)};assert.changesBy=function(fn,obj,prop,delta,msg){if(arguments.length===4&&typeof obj==="function"){var tmpMsg=delta;delta=prop;msg=tmpMsg}else if(arguments.length===3){delta=prop;prop=null}new Assertion(fn,msg,assert.changesBy,true).to.change(obj,prop).by(delta)};assert.doesNotChange=function(fn,obj,prop,msg){if(arguments.length===3&&typeof obj==="function"){msg=prop;prop=null}return new Assertion(fn,msg,assert.doesNotChange,true).to.not.change(obj,prop)};assert.changesButNotBy=function(fn,obj,prop,delta,msg){if(arguments.length===4&&typeof obj==="function"){var tmpMsg=delta;delta=prop;msg=tmpMsg}else if(arguments.length===3){delta=prop;prop=null}new Assertion(fn,msg,assert.changesButNotBy,true).to.change(obj,prop).but.not.by(delta)};assert.increases=function(fn,obj,prop,msg){if(arguments.length===3&&typeof obj==="function"){msg=prop;prop=null}return new Assertion(fn,msg,assert.increases,true).to.increase(obj,prop)};assert.increasesBy=function(fn,obj,prop,delta,msg){if(arguments.length===4&&typeof obj==="function"){var tmpMsg=delta;delta=prop;msg=tmpMsg}else if(arguments.length===3){delta=prop;prop=null}new Assertion(fn,msg,assert.increasesBy,true).to.increase(obj,prop).by(delta)};assert.doesNotIncrease=function(fn,obj,prop,msg){if(arguments.length===3&&typeof obj==="function"){msg=prop;prop=null}return new Assertion(fn,msg,assert.doesNotIncrease,true).to.not.increase(obj,prop)};assert.increasesButNotBy=function(fn,obj,prop,delta,msg){if(arguments.length===4&&typeof obj==="function"){var tmpMsg=delta;delta=prop;msg=tmpMsg}else if(arguments.length===3){delta=prop;prop=null}new Assertion(fn,msg,assert.increasesButNotBy,true).to.increase(obj,prop).but.not.by(delta)};assert.decreases=function(fn,obj,prop,msg){if(arguments.length===3&&typeof obj==="function"){msg=prop;prop=null}return new Assertion(fn,msg,assert.decreases,true).to.decrease(obj,prop)};assert.decreasesBy=function(fn,obj,prop,delta,msg){if(arguments.length===4&&typeof obj==="function"){var tmpMsg=delta;delta=prop;msg=tmpMsg}else if(arguments.length===3){delta=prop;prop=null}new Assertion(fn,msg,assert.decreasesBy,true).to.decrease(obj,prop).by(delta)};assert.doesNotDecrease=function(fn,obj,prop,msg){if(arguments.length===3&&typeof obj==="function"){msg=prop;prop=null}return new Assertion(fn,msg,assert.doesNotDecrease,true).to.not.decrease(obj,prop)};assert.doesNotDecreaseBy=function(fn,obj,prop,delta,msg){if(arguments.length===4&&typeof obj==="function"){var tmpMsg=delta;delta=prop;msg=tmpMsg}else if(arguments.length===3){delta=prop;prop=null}return new Assertion(fn,msg,assert.doesNotDecreaseBy,true).to.not.decrease(obj,prop).by(delta)};assert.decreasesButNotBy=function(fn,obj,prop,delta,msg){if(arguments.length===4&&typeof obj==="function"){var tmpMsg=delta;delta=prop;msg=tmpMsg}else if(arguments.length===3){delta=prop;prop=null}new Assertion(fn,msg,assert.decreasesButNotBy,true).to.decrease(obj,prop).but.not.by(delta)};assert.ifError=function(val){if(val){throw val}};assert.isExtensible=function(obj,msg){new Assertion(obj,msg,assert.isExtensible,true).to.be.extensible};assert.isNotExtensible=function(obj,msg){new Assertion(obj,msg,assert.isNotExtensible,true).to.not.be.extensible};assert.isSealed=function(obj,msg){new Assertion(obj,msg,assert.isSealed,true).to.be.sealed};assert.isNotSealed=function(obj,msg){new Assertion(obj,msg,assert.isNotSealed,true).to.not.be.sealed};assert.isFrozen=function(obj,msg){new Assertion(obj,msg,assert.isFrozen,true).to.be.frozen};assert.isNotFrozen=function(obj,msg){new Assertion(obj,msg,assert.isNotFrozen,true).to.not.be.frozen};assert.isEmpty=function(val,msg){new Assertion(val,msg,assert.isEmpty,true).to.be.empty};assert.isNotEmpty=function(val,msg){new Assertion(val,msg,assert.isNotEmpty,true).to.not.be.empty};(function alias(name,as){assert[as]=assert[name];return alias})("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")("isEmpty","empty")("isNotEmpty","notEmpty")}},{}],10:[function(require,module,exports){module.exports=function(chai,util){chai.expect=function(val,message){return new chai.Assertion(val,message)};chai.expect.fail=function(actual,expected,message,operator){if(arguments.length<2){message=actual;actual=undefined}message=message||"expect.fail()";throw new chai.AssertionError(message,{actual:actual,expected:expected,operator:operator},chai.expect.fail)}}},{}],11:[function(require,module,exports){module.exports=function(chai,util){var Assertion=chai.Assertion;function loadShould(){function shouldGetter(){if(this instanceof String||this instanceof Number||this instanceof Boolean||typeof Symbol==="function"&&this instanceof Symbol||typeof BigInt==="function"&&this instanceof BigInt){return new Assertion(this.valueOf(),null,shouldGetter)}return new Assertion(this,null,shouldGetter)}function shouldSetter(value){Object.defineProperty(this,"should",{value:value,enumerable:true,configurable:true,writable:true})}Object.defineProperty(Object.prototype,"should",{set:shouldSetter,get:shouldGetter,configurable:true});var should={};should.fail=function(actual,expected,message,operator){if(arguments.length<2){message=actual;actual=undefined}message=message||"should.fail()";throw new chai.AssertionError(message,{actual:actual,expected:expected,operator:operator},should.fail)};should.equal=function(val1,val2,msg){new Assertion(val1,msg).to.equal(val2)};should.Throw=function(fn,errt,errs,msg){new Assertion(fn,msg).to.Throw(errt,errs)};should.exist=function(val,msg){new Assertion(val,msg).to.exist};should.not={};should.not.equal=function(val1,val2,msg){new Assertion(val1,msg).to.not.equal(val2)};should.not.Throw=function(fn,errt,errs,msg){new Assertion(fn,msg).to.not.Throw(errt,errs)};should.not.exist=function(val,msg){new Assertion(val,msg).to.not.exist};should["throw"]=should["Throw"];should.not["throw"]=should.not["Throw"];return should}chai.should=loadShould;chai.Should=loadShould}},{}],12:[function(require,module,exports){var addLengthGuard=require("./addLengthGuard");var chai=require("../../chai");var flag=require("./flag");var proxify=require("./proxify");var transferFlags=require("./transferFlags");var canSetPrototype=typeof Object.setPrototypeOf==="function";var testFn=function(){};var excludeNames=Object.getOwnPropertyNames(testFn).filter(function(name){var propDesc=Object.getOwnPropertyDescriptor(testFn,name);if(typeof propDesc!=="object")return true;return!propDesc.configurable});var call=Function.prototype.call,apply=Function.prototype.apply;module.exports=function addChainableMethod(ctx,name,method,chainingBehavior){if(typeof chainingBehavior!=="function"){chainingBehavior=function(){}}var chainableBehavior={method:method,chainingBehavior:chainingBehavior};if(!ctx.__methods){ctx.__methods={}}ctx.__methods[name]=chainableBehavior;Object.defineProperty(ctx,name,{get:function chainableMethodGetter(){chainableBehavior.chainingBehavior.call(this);var chainableMethodWrapper=function(){if(!flag(this,"lockSsfi")){flag(this,"ssfi",chainableMethodWrapper)}var result=chainableBehavior.method.apply(this,arguments);if(result!==undefined){return result}var newAssertion=new chai.Assertion;transferFlags(this,newAssertion);return newAssertion};addLengthGuard(chainableMethodWrapper,name,true);if(canSetPrototype){var prototype=Object.create(this);prototype.call=call;prototype.apply=apply;Object.setPrototypeOf(chainableMethodWrapper,prototype)}else{var asserterNames=Object.getOwnPropertyNames(ctx);asserterNames.forEach(function(asserterName){if(excludeNames.indexOf(asserterName)!==-1){return}var pd=Object.getOwnPropertyDescriptor(ctx,asserterName);Object.defineProperty(chainableMethodWrapper,asserterName,pd)})}transferFlags(this,chainableMethodWrapper);return proxify(chainableMethodWrapper)},configurable:true})}},{"../../chai":5,"./addLengthGuard":13,"./flag":18,"./proxify":34,"./transferFlags":36}],13:[function(require,module,exports){var fnLengthDesc=Object.getOwnPropertyDescriptor(function(){},"length");module.exports=function addLengthGuard(fn,assertionName,isChainable){if(!fnLengthDesc.configurable)return fn;Object.defineProperty(fn,"length",{get:function(){if(isChainable){throw Error("Invalid Chai property: "+assertionName+".length. Due"+' to a compatibility issue, "length" cannot directly follow "'+assertionName+'". Use "'+assertionName+'.lengthOf" instead.')}throw Error("Invalid Chai property: "+assertionName+".length. See"+' docs for proper usage of "'+assertionName+'".')}});return fn}},{}],14:[function(require,module,exports){var addLengthGuard=require("./addLengthGuard");var chai=require("../../chai");var flag=require("./flag");var proxify=require("./proxify");var transferFlags=require("./transferFlags");module.exports=function addMethod(ctx,name,method){var methodWrapper=function(){if(!flag(this,"lockSsfi")){flag(this,"ssfi",methodWrapper)}var result=method.apply(this,arguments);if(result!==undefined)return result;var newAssertion=new chai.Assertion;transferFlags(this,newAssertion);return newAssertion};addLengthGuard(methodWrapper,name,false);ctx[name]=proxify(methodWrapper,name)}},{"../../chai":5,"./addLengthGuard":13,"./flag":18,"./proxify":34,"./transferFlags":36}],15:[function(require,module,exports){var chai=require("../../chai");var flag=require("./flag");var isProxyEnabled=require("./isProxyEnabled");var transferFlags=require("./transferFlags");module.exports=function addProperty(ctx,name,getter){getter=getter===undefined?function(){}:getter;Object.defineProperty(ctx,name,{get:function propertyGetter(){if(!isProxyEnabled()&&!flag(this,"lockSsfi")){flag(this,"ssfi",propertyGetter)}var result=getter.call(this);if(result!==undefined)return result;var newAssertion=new chai.Assertion;transferFlags(this,newAssertion);return newAssertion},configurable:true})}},{"../../chai":5,"./flag":18,"./isProxyEnabled":29,"./transferFlags":36}],16:[function(require,module,exports){var inspect=require("./inspect");module.exports=function compareByInspect(a,b){return inspect(a)<inspect(b)?-1:1}},{"./inspect":27}],17:[function(require,module,exports){var AssertionError=require("assertion-error");var flag=require("./flag");var type=require("type-detect");module.exports=function expectTypes(obj,types){var flagMsg=flag(obj,"message");var ssfi=flag(obj,"ssfi");flagMsg=flagMsg?flagMsg+": ":"";obj=flag(obj,"object");types=types.map(function(t){return t.toLowerCase()});types.sort();var str=types.map(function(t,index){var art=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an":"a";var or=types.length>1&&index===types.length-1?"or ":"";return or+art+" "+t}).join(", ");var objType=type(obj).toLowerCase();if(!types.some(function(expected){return objType===expected})){throw new AssertionError(flagMsg+"object tested must be "+str+", but "+objType+" given",undefined,ssfi)}}},{"./flag":18,"assertion-error":2,"type-detect":41}],18:[function(require,module,exports){module.exports=function flag(obj,key,value){var flags=obj.__flags||(obj.__flags=Object.create(null));if(arguments.length===3){flags[key]=value}else{return flags[key]}}},{}],19:[function(require,module,exports){module.exports=function getActual(obj,args){return args.length>4?args[4]:obj._obj}},{}],20:[function(require,module,exports){module.exports=function getEnumerableProperties(object){var result=[];for(var name in object){result.push(name)}return result}},{}],21:[function(require,module,exports){var flag=require("./flag"),getActual=require("./getActual"),objDisplay=require("./objDisplay");module.exports=function getMessage(obj,args){var negate=flag(obj,"negate"),val=flag(obj,"object"),expected=args[3],actual=getActual(obj,args),msg=negate?args[2]:args[1],flagMsg=flag(obj,"message");if(typeof msg==="function")msg=msg();msg=msg||"";msg=msg.replace(/#\{this\}/g,function(){return objDisplay(val)}).replace(/#\{act\}/g,function(){return objDisplay(actual)}).replace(/#\{exp\}/g,function(){return objDisplay(expected)});return flagMsg?flagMsg+": "+msg:msg}},{"./flag":18,"./getActual":19,"./objDisplay":30}],22:[function(require,module,exports){var type=require("type-detect");var flag=require("./flag");function isObjectType(obj){var objectType=type(obj);var objectTypes=["Array","Object","function"];return objectTypes.indexOf(objectType)!==-1}module.exports=function getOperator(obj,args){var operator=flag(obj,"operator");var negate=flag(obj,"negate");var expected=args[3];var msg=negate?args[2]:args[1];if(operator){return operator}if(typeof msg==="function")msg=msg();msg=msg||"";if(!msg){return undefined}if(/\shave\s/.test(msg)){return undefined}var isObject=isObjectType(expected);if(/\snot\s/.test(msg)){return isObject?"notDeepStrictEqual":"notStrictEqual"}return isObject?"deepStrictEqual":"strictEqual"}},{"./flag":18,"type-detect":41}],23:[function(require,module,exports){var getOwnEnumerablePropertySymbols=require("./getOwnEnumerablePropertySymbols");module.exports=function getOwnEnumerableProperties(obj){return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj))}},{"./getOwnEnumerablePropertySymbols":24}],24:[function(require,module,exports){module.exports=function getOwnEnumerablePropertySymbols(obj){if(typeof Object.getOwnPropertySymbols!=="function")return[];return Object.getOwnPropertySymbols(obj).filter(function(sym){return Object.getOwnPropertyDescriptor(obj,sym).enumerable})}},{}],25:[function(require,module,exports){module.exports=function getProperties(object){var result=Object.getOwnPropertyNames(object);function addProperty(property){if(result.indexOf(property)===-1){result.push(property)}}var proto=Object.getPrototypeOf(object);while(proto!==null){Object.getOwnPropertyNames(proto).forEach(addProperty);proto=Object.getPrototypeOf(proto)}return result}},{}],26:[function(require,module,exports){var pathval=require("pathval");exports.test=require("./test");exports.type=require("type-detect");exports.expectTypes=require("./expectTypes");exports.getMessage=require("./getMessage");exports.getActual=require("./getActual");exports.inspect=require("./inspect");exports.objDisplay=require("./objDisplay");exports.flag=require("./flag");exports.transferFlags=require("./transferFlags");exports.eql=require("deep-eql");exports.getPathInfo=pathval.getPathInfo;exports.hasProperty=pathval.hasProperty;exports.getName=require("get-func-name");exports.addProperty=require("./addProperty");exports.addMethod=require("./addMethod");exports.overwriteProperty=require("./overwriteProperty");exports.overwriteMethod=require("./overwriteMethod");exports.addChainableMethod=require("./addChainableMethod");exports.overwriteChainableMethod=require("./overwriteChainableMethod");exports.compareByInspect=require("./compareByInspect");exports.getOwnEnumerablePropertySymbols=require("./getOwnEnumerablePropertySymbols");exports.getOwnEnumerableProperties=require("./getOwnEnumerableProperties");exports.checkError=require("check-error");exports.proxify=require("./proxify");exports.addLengthGuard=require("./addLengthGuard");exports.isProxyEnabled=require("./isProxyEnabled");exports.isNaN=require("./isNaN");exports.getOperator=require("./getOperator")},{"./addChainableMethod":12,"./addLengthGuard":13,"./addMethod":14,"./addProperty":15,"./compareByInspect":16,"./expectTypes":17,"./flag":18,"./getActual":19,"./getMessage":21,"./getOperator":22,"./getOwnEnumerableProperties":23,"./getOwnEnumerablePropertySymbols":24,"./inspect":27,"./isNaN":28,"./isProxyEnabled":29,"./objDisplay":30,"./overwriteChainableMethod":31,"./overwriteMethod":32,"./overwriteProperty":33,"./proxify":34,"./test":35,"./transferFlags":36,"check-error":37,"deep-eql":38,"get-func-name":39,pathval:40,"type-detect":41}],27:[function(require,module,exports){var getName=require("get-func-name");var getProperties=require("./getProperties");var getEnumerableProperties=require("./getEnumerableProperties");var config=require("../config");module.exports=inspect;function inspect(obj,showHidden,depth,colors){var ctx={showHidden:showHidden,seen:[],stylize:function(str){return str}};return formatValue(ctx,obj,typeof depth==="undefined"?2:depth)}var isDOMElement=function(object){if(typeof HTMLElement==="object"){return object instanceof HTMLElement}else{return object&&typeof object==="object"&&"nodeType"in object&&object.nodeType===1&&typeof object.nodeName==="string"}};function formatValue(ctx,value,recurseTimes){if(value&&typeof value.inspect==="function"&&value.inspect!==exports.inspect&&!(value.constructor&&value.constructor.prototype===value)){var ret=value.inspect(recurseTimes,ctx);if(typeof ret!=="string"){ret=formatValue(ctx,ret,recurseTimes)}return ret}var primitive=formatPrimitive(ctx,value);if(primitive){return primitive}if(isDOMElement(value)){if("outerHTML"in value){return value.outerHTML}else{try{if(document.xmlVersion){var xmlSerializer=new XMLSerializer;return xmlSerializer.serializeToString(value)}else{var ns="http://www.w3.org/1999/xhtml";var container=document.createElementNS(ns,"_");container.appendChild(value.cloneNode(false));var html=container.innerHTML.replace("><",">"+value.innerHTML+"<");container.innerHTML="";return html}}catch(err){}}}var visibleKeys=getEnumerableProperties(value);var keys=ctx.showHidden?getProperties(value):visibleKeys;var name,nameSuffix;if(keys.length===0||isError(value)&&(keys.length===1&&keys[0]==="stack"||keys.length===2&&keys[0]==="description"&&keys[1]==="stack")){if(typeof value==="function"){name=getName(value);nameSuffix=name?": "+name:"";return ctx.stylize("[Function"+nameSuffix+"]","special")}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}if(isDate(value)){return ctx.stylize(Date.prototype.toUTCString.call(value),"date")}if(isError(value)){return formatError(value)}}var base="",array=false,typedArray=false,braces=["{","}"];if(isTypedArray(value)){typedArray=true;braces=["[","]"]}if(isArray(value)){array=true;braces=["[","]"]}if(typeof value==="function"){name=getName(value);nameSuffix=name?": "+name:"";base=" [Function"+nameSuffix+"]"}if(isRegExp(value)){base=" "+RegExp.prototype.toString.call(value)}if(isDate(value)){base=" "+Date.prototype.toUTCString.call(value)}if(isError(value)){return formatError(value)}if(keys.length===0&&(!array||value.length==0)){return braces[0]+base+braces[1]}if(recurseTimes<0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}else{return ctx.stylize("[Object]","special")}}ctx.seen.push(value);var output;if(array){output=formatArray(ctx,value,recurseTimes,visibleKeys,keys)}else if(typedArray){return formatTypedArray(value)}else{output=keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array)})}ctx.seen.pop();return reduceToSingleString(output,base,braces)}function formatPrimitive(ctx,value){switch(typeof value){case"undefined":return ctx.stylize("undefined","undefined");case"string":var simple="'"+JSON.stringify(value).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return ctx.stylize(simple,"string");case"number":if(value===0&&1/value===-Infinity){return ctx.stylize("-0","number")}return ctx.stylize(""+value,"number");case"boolean":return ctx.stylize(""+value,"boolean");case"symbol":return ctx.stylize(value.toString(),"symbol");case"bigint":return ctx.stylize(value.toString()+"n","bigint")}if(value===null){return ctx.stylize("null","null")}}function formatError(value){return"["+Error.prototype.toString.call(value)+"]"}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i<l;++i){if(Object.prototype.hasOwnProperty.call(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true))}else{output.push("")}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true))}});return output}function formatTypedArray(value){var str="[ ";for(var i=0;i<value.length;++i){if(str.length>=config.truncateThreshold-7){str+="...";break}str+=value[i]+", "}str+=" ]";if(str.indexOf(",  ]")!==-1){str=str.replace(",  ]"," ]")}return str}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name;var propDescriptor=Object.getOwnPropertyDescriptor(value,key);var str;if(propDescriptor){if(propDescriptor.get){if(propDescriptor.set){str=ctx.stylize("[Getter/Setter]","special")}else{str=ctx.stylize("[Getter]","special")}}else{if(propDescriptor.set){str=ctx.stylize("[Setter]","special")}}}if(visibleKeys.indexOf(key)<0){name="["+key+"]"}if(!str){if(ctx.seen.indexOf(value[key])<0){if(recurseTimes===null){str=formatValue(ctx,value[key],null)}else{str=formatValue(ctx,value[key],recurseTimes-1)}if(str.indexOf("\n")>-1){if(array){str=str.split("\n").map(function(line){return"  "+line}).join("\n").substr(2)}else{str="\n"+str.split("\n").map(function(line){return"   "+line}).join("\n")}}}else{str=ctx.stylize("[Circular]","special")}}if(typeof name==="undefined"){if(array&&key.match(/^\d+$/)){return str}name=JSON.stringify(""+key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name=name.substr(1,name.length-2);name=ctx.stylize(name,"name")}else{name=name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");name=ctx.stylize(name,"string")}}return name+": "+str}function reduceToSingleString(output,base,braces){var length=output.reduce(function(prev,cur){return prev+cur.length+1},0);if(length>60){return braces[0]+(base===""?"":base+"\n ")+" "+output.join(",\n  ")+" "+braces[1]}return braces[0]+base+" "+output.join(", ")+" "+braces[1]}function isTypedArray(ar){return typeof ar==="object"&&/\w+Array]$/.test(objectToString(ar))}function isArray(ar){return Array.isArray(ar)||typeof ar==="object"&&objectToString(ar)==="[object Array]"}function isRegExp(re){return typeof re==="object"&&objectToString(re)==="[object RegExp]"}function isDate(d){return typeof d==="object"&&objectToString(d)==="[object Date]"}function isError(e){return typeof e==="object"&&objectToString(e)==="[object Error]"}function objectToString(o){return Object.prototype.toString.call(o)}},{"../config":7,"./getEnumerableProperties":20,"./getProperties":25,"get-func-name":39}],28:[function(require,module,exports){function isNaN(value){return value!==value}module.exports=Number.isNaN||isNaN},{}],29:[function(require,module,exports){var config=require("../config");module.exports=function isProxyEnabled(){return config.useProxy&&typeof Proxy!=="undefined"&&typeof Reflect!=="undefined"}},{"../config":7}],30:[function(require,module,exports){var inspect=require("./inspect");var config=require("../config");module.exports=function objDisplay(obj){var str=inspect(obj),type=Object.prototype.toString.call(obj);if(config.truncateThreshold&&str.length>=config.truncateThreshold){if(type==="[object Function]"){return!obj.name||obj.name===""?"[Function]":"[Function: "+obj.name+"]"}else if(type==="[object Array]"){return"[ Array("+obj.length+") ]"}else if(type==="[object Object]"){var keys=Object.keys(obj),kstr=keys.length>2?keys.splice(0,2).join(", ")+", ...":keys.join(", ");return"{ Object ("+kstr+") }"}else{return str}}else{return str}}},{"../config":7,"./inspect":27}],31:[function(require,module,exports){var chai=require("../../chai");var transferFlags=require("./transferFlags");module.exports=function overwriteChainableMethod(ctx,name,method,chainingBehavior){var chainableBehavior=ctx.__methods[name];var _chainingBehavior=chainableBehavior.chainingBehavior;chainableBehavior.chainingBehavior=function overwritingChainableMethodGetter(){var result=chainingBehavior(_chainingBehavior).call(this);if(result!==undefined){return result}var newAssertion=new chai.Assertion;transferFlags(this,newAssertion);return newAssertion};var _method=chainableBehavior.method;chainableBehavior.method=function overwritingChainableMethodWrapper(){var result=method(_method).apply(this,arguments);if(result!==undefined){return result}var newAssertion=new chai.Assertion;transferFlags(this,newAssertion);return newAssertion}}},{"../../chai":5,"./transferFlags":36}],32:[function(require,module,exports){var addLengthGuard=require("./addLengthGuard");var chai=require("../../chai");var flag=require("./flag");var proxify=require("./proxify");var transferFlags=require("./transferFlags");module.exports=function overwriteMethod(ctx,name,method){var _method=ctx[name],_super=function(){throw new Error(name+" is not a function")};if(_method&&"function"===typeof _method)_super=_method;var overwritingMethodWrapper=function(){if(!flag(this,"lockSsfi")){flag(this,"ssfi",overwritingMethodWrapper)}var origLockSsfi=flag(this,"lockSsfi");flag(this,"lockSsfi",true);var result=method(_super).apply(this,arguments);flag(this,"lockSsfi",origLockSsfi);if(result!==undefined){return result}var newAssertion=new chai.Assertion;transferFlags(this,newAssertion);return newAssertion};addLengthGuard(overwritingMethodWrapper,name,false);ctx[name]=proxify(overwritingMethodWrapper,name)}},{"../../chai":5,"./addLengthGuard":13,"./flag":18,"./proxify":34,"./transferFlags":36}],33:[function(require,module,exports){var chai=require("../../chai");var flag=require("./flag");var isProxyEnabled=require("./isProxyEnabled");var transferFlags=require("./transferFlags");module.exports=function overwriteProperty(ctx,name,getter){var _get=Object.getOwnPropertyDescriptor(ctx,name),_super=function(){};if(_get&&"function"===typeof _get.get)_super=_get.get;Object.defineProperty(ctx,name,{get:function overwritingPropertyGetter(){if(!isProxyEnabled()&&!flag(this,"lockSsfi")){flag(this,"ssfi",overwritingPropertyGetter)}var origLockSsfi=flag(this,"lockSsfi");flag(this,"lockSsfi",true);var result=getter(_super).call(this);flag(this,"lockSsfi",origLockSsfi);if(result!==undefined){return result}var newAssertion=new chai.Assertion;transferFlags(this,newAssertion);return newAssertion},configurable:true})}},{"../../chai":5,"./flag":18,"./isProxyEnabled":29,"./transferFlags":36}],34:[function(require,module,exports){var config=require("../config");var flag=require("./flag");var getProperties=require("./getProperties");var isProxyEnabled=require("./isProxyEnabled");var builtins=["__flags","__methods","_obj","assert"];module.exports=function proxify(obj,nonChainableMethodName){if(!isProxyEnabled())return obj;return new Proxy(obj,{get:function proxyGetter(target,property){if(typeof property==="string"&&config.proxyExcludedKeys.indexOf(property)===-1&&!Reflect.has(target,property)){if(nonChainableMethodName){throw Error("Invalid Chai property: "+nonChainableMethodName+"."+property+'. See docs for proper usage of "'+nonChainableMethodName+'".')}var suggestion=null;var suggestionDistance=4;getProperties(target).forEach(function(prop){if(!Object.prototype.hasOwnProperty(prop)&&builtins.indexOf(prop)===-1){var dist=stringDistanceCapped(property,prop,suggestionDistance);if(dist<suggestionDistance){suggestion=prop;suggestionDistance=dist}}});if(suggestion!==null){throw Error("Invalid Chai property: "+property+'. Did you mean "'+suggestion+'"?')}else{throw Error("Invalid Chai property: "+property)}}if(builtins.indexOf(property)===-1&&!flag(target,"lockSsfi")){flag(target,"ssfi",proxyGetter)}return Reflect.get(target,property)}})};function stringDistanceCapped(strA,strB,cap){if(Math.abs(strA.length-strB.length)>=cap){return cap}var memo=[];for(var i=0;i<=strA.length;i++){memo[i]=Array(strB.length+1).fill(0);memo[i][0]=i}for(var j=0;j<strB.length;j++){memo[0][j]=j}for(var i=1;i<=strA.length;i++){var ch=strA.charCodeAt(i-1);for(var j=1;j<=strB.length;j++){if(Math.abs(i-j)>=cap){memo[i][j]=cap;continue}memo[i][j]=Math.min(memo[i-1][j]+1,memo[i][j-1]+1,memo[i-1][j-1]+(ch===strB.charCodeAt(j-1)?0:1))}}return memo[strA.length][strB.length]}},{"../config":7,"./flag":18,"./getProperties":25,"./isProxyEnabled":29}],35:[function(require,module,exports){var flag=require("./flag");module.exports=function test(obj,args){var negate=flag(obj,"negate"),expr=args[0];return negate?!expr:expr}},{"./flag":18}],36:[function(require,module,exports){module.exports=function transferFlags(assertion,object,includeAll){var flags=assertion.__flags||(assertion.__flags=Object.create(null));if(!object.__flags){object.__flags=Object.create(null)}includeAll=arguments.length===3?includeAll:true;for(var flag in flags){if(includeAll||flag!=="object"&&flag!=="ssfi"&&flag!=="lockSsfi"&&flag!="message"){object.__flags[flag]=flags[flag]}}}},{}],37:[function(require,module,exports){"use strict";function compatibleInstance(thrown,errorLike){return errorLike instanceof Error&&thrown===errorLike}function compatibleConstructor(thrown,errorLike){if(errorLike instanceof Error){return thrown.constructor===errorLike.constructor||thrown instanceof errorLike.constructor}else if(errorLike.prototype instanceof Error||errorLike===Error){return thrown.constructor===errorLike||thrown instanceof errorLike}return false}function compatibleMessage(thrown,errMatcher){var comparisonString=typeof thrown==="string"?thrown:thrown.message;if(errMatcher instanceof RegExp){return errMatcher.test(comparisonString)}else if(typeof errMatcher==="string"){return comparisonString.indexOf(errMatcher)!==-1}return false}var functionNameMatch=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;function getFunctionName(constructorFn){var name="";if(typeof constructorFn.name==="undefined"){var match=String(constructorFn).match(functionNameMatch);if(match){name=match[1]}}else{name=constructorFn.name}return name}function getConstructorName(errorLike){var constructorName=errorLike;if(errorLike instanceof Error){constructorName=getFunctionName(errorLike.constructor)}else if(typeof errorLike==="function"){constructorName=getFunctionName(errorLike).trim()||getFunctionName(new errorLike)}return constructorName}function getMessage(errorLike){var msg="";if(errorLike&&errorLike.message){msg=errorLike.message}else if(typeof errorLike==="string"){msg=errorLike}return msg}module.exports={compatibleInstance:compatibleInstance,compatibleConstructor:compatibleConstructor,compatibleMessage:compatibleMessage,getMessage:getMessage,getConstructorName:getConstructorName}},{}],38:[function(require,module,exports){"use strict";var type=require("type-detect");function FakeMap(){this._key="chai/deep-eql__"+Math.random()+Date.now()}FakeMap.prototype={get:function getMap(key){return key[this._key]},set:function setMap(key,value){if(Object.isExtensible(key)){Object.defineProperty(key,this._key,{value:value,configurable:true})}}};var MemoizeMap=typeof WeakMap==="function"?WeakMap:FakeMap;function memoizeCompare(leftHandOperand,rightHandOperand,memoizeMap){if(!memoizeMap||isPrimitive(leftHandOperand)||isPrimitive(rightHandOperand)){return null}var leftHandMap=memoizeMap.get(leftHandOperand);if(leftHandMap){var result=leftHandMap.get(rightHandOperand);if(typeof result==="boolean"){return result}}return null}function memoizeSet(leftHandOperand,rightHandOperand,memoizeMap,result){if(!memoizeMap||isPrimitive(leftHandOperand)||isPrimitive(rightHandOperand)){return}var leftHandMap=memoizeMap.get(leftHandOperand);if(leftHandMap){leftHandMap.set(rightHandOperand,result)}else{leftHandMap=new MemoizeMap;leftHandMap.set(rightHandOperand,result);memoizeMap.set(leftHandOperand,leftHandMap)}}module.exports=deepEqual;module.exports.MemoizeMap=MemoizeMap;function deepEqual(leftHandOperand,rightHandOperand,options){if(options&&options.comparator){return extensiveDeepEqual(leftHandOperand,rightHandOperand,options)}var simpleResult=simpleEqual(leftHandOperand,rightHandOperand);if(simpleResult!==null){return simpleResult}return extensiveDeepEqual(leftHandOperand,rightHandOperand,options)}function simpleEqual(leftHandOperand,rightHandOperand){if(leftHandOperand===rightHandOperand){return leftHandOperand!==0||1/leftHandOperand===1/rightHandOperand}if(leftHandOperand!==leftHandOperand&&rightHandOperand!==rightHandOperand){return true}if(isPrimitive(leftHandOperand)||isPrimitive(rightHandOperand)){return false}return null}function extensiveDeepEqual(leftHandOperand,rightHandOperand,options){options=options||{};options.memoize=options.memoize===false?false:options.memoize||new MemoizeMap;var comparator=options&&options.comparator;var memoizeResultLeft=memoizeCompare(leftHandOperand,rightHandOperand,options.memoize);if(memoizeResultLeft!==null){return memoizeResultLeft}var memoizeResultRight=memoizeCompare(rightHandOperand,leftHandOperand,options.memoize);if(memoizeResultRight!==null){return memoizeResultRight}if(comparator){var comparatorResult=comparator(leftHandOperand,rightHandOperand);if(comparatorResult===false||comparatorResult===true){memoizeSet(leftHandOperand,rightHandOperand,options.memoize,comparatorResult);return comparatorResult}var simpleResult=simpleEqual(leftHandOperand,rightHandOperand);if(simpleResult!==null){return simpleResult}}var leftHandType=type(leftHandOperand);if(leftHandType!==type(rightHandOperand)){memoizeSet(leftHandOperand,rightHandOperand,options.memoize,false);return false}memoizeSet(leftHandOperand,rightHandOperand,options.memoize,true);var result=extensiveDeepEqualByType(leftHandOperand,rightHandOperand,leftHandType,options);memoizeSet(leftHandOperand,rightHandOperand,options.memoize,result);return result}function extensiveDeepEqualByType(leftHandOperand,rightHandOperand,leftHandType,options){switch(leftHandType){case"String":case"Number":case"Boolean":case"Date":return deepEqual(leftHandOperand.valueOf(),rightHandOperand.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":case"Error":return leftHandOperand===rightHandOperand;case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return iterableEqual(leftHandOperand,rightHandOperand,options);case"RegExp":return regexpEqual(leftHandOperand,rightHandOperand);case"Generator":return generatorEqual(leftHandOperand,rightHandOperand,options);case"DataView":return iterableEqual(new Uint8Array(leftHandOperand.buffer),new Uint8Array(rightHandOperand.buffer),options);case"ArrayBuffer":return iterableEqual(new Uint8Array(leftHandOperand),new Uint8Array(rightHandOperand),options);case"Set":return entriesEqual(leftHandOperand,rightHandOperand,options);case"Map":return entriesEqual(leftHandOperand,rightHandOperand,options);default:return objectEqual(leftHandOperand,rightHandOperand,options)}}function regexpEqual(leftHandOperand,rightHandOperand){return leftHandOperand.toString()===rightHandOperand.toString()}function entriesEqual(leftHandOperand,rightHandOperand,options){if(leftHandOperand.size!==rightHandOperand.size){return false}if(leftHandOperand.size===0){return true}var leftHandItems=[];var rightHandItems=[];leftHandOperand.forEach(function gatherEntries(key,value){leftHandItems.push([key,value])});rightHandOperand.forEach(function gatherEntries(key,value){rightHandItems.push([key,value])});return iterableEqual(leftHandItems.sort(),rightHandItems.sort(),options)}function iterableEqual(leftHandOperand,rightHandOperand,options){var length=leftHandOperand.length;if(length!==rightHandOperand.length){return false}if(length===0){return true}var index=-1;while(++index<length){if(deepEqual(leftHandOperand[index],rightHandOperand[index],options)===false){return false}}return true}function generatorEqual(leftHandOperand,rightHandOperand,options){return iterableEqual(getGeneratorEntries(leftHandOperand),getGeneratorEntries(rightHandOperand),options)}function hasIteratorFunction(target){return typeof Symbol!=="undefined"&&typeof target==="object"&&typeof Symbol.iterator!=="undefined"&&typeof target[Symbol.iterator]==="function"}function getIteratorEntries(target){if(hasIteratorFunction(target)){try{return getGeneratorEntries(target[Symbol.iterator]())}catch(iteratorError){return[]}}return[]}function getGeneratorEntries(generator){var generatorResult=generator.next();var accumulator=[generatorResult.value];while(generatorResult.done===false){generatorResult=generator.next();accumulator.push(generatorResult.value)}return accumulator}function getEnumerableKeys(target){var keys=[];for(var key in target){keys.push(key)}return keys}function keysEqual(leftHandOperand,rightHandOperand,keys,options){var length=keys.length;if(length===0){return true}for(var i=0;i<length;i+=1){if(deepEqual(leftHandOperand[keys[i]],rightHandOperand[keys[i]],options)===false){return false}}return true}function objectEqual(leftHandOperand,rightHandOperand,options){var leftHandKeys=getEnumerableKeys(leftHandOperand);var rightHandKeys=getEnumerableKeys(rightHandOperand);if(leftHandKeys.length&&leftHandKeys.length===rightHandKeys.length){leftHandKeys.sort();rightHandKeys.sort();if(iterableEqual(leftHandKeys,rightHandKeys)===false){return false}return keysEqual(leftHandOperand,rightHandOperand,leftHandKeys,options)}var leftHandEntries=getIteratorEntries(leftHandOperand);var rightHandEntries=getIteratorEntries(rightHandOperand);if(leftHandEntries.length&&leftHandEntries.length===rightHandEntries.length){leftHandEntries.sort();rightHandEntries.sort();return iterableEqual(leftHandEntries,rightHandEntries,options)}if(leftHandKeys.length===0&&leftHandEntries.length===0&&rightHandKeys.length===0&&rightHandEntries.length===0){return true}return false}function isPrimitive(value){return value===null||typeof value!=="object"}},{"type-detect":41}],39:[function(require,module,exports){"use strict";var toString=Function.prototype.toString;var functionNameMatch=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;function getFuncName(aFunc){if(typeof aFunc!=="function"){return null}var name="";if(typeof Function.prototype.name==="undefined"&&typeof aFunc.name==="undefined"){var match=toString.call(aFunc).match(functionNameMatch);if(match){name=match[1]}}else{name=aFunc.name}return name}module.exports=getFuncName},{}],40:[function(require,module,exports){"use strict";function hasProperty(obj,name){if(typeof obj==="undefined"||obj===null){return false}return name in Object(obj)}function parsePath(path){var str=path.replace(/([^\\])\[/g,"$1.[");var parts=str.match(/(\\\.|[^.]+?)+/g);return parts.map(function mapMatches(value){if(value==="constructor"||value==="__proto__"||value==="prototype"){return{}}var regexp=/^\[(\d+)\]$/;var mArr=regexp.exec(value);var parsed=null;if(mArr){parsed={i:parseFloat(mArr[1])}}else{parsed={p:value.replace(/\\([.[\]])/g,"$1")}}return parsed})}function internalGetPathValue(obj,parsed,pathDepth){var temporaryValue=obj;var res=null;pathDepth=typeof pathDepth==="undefined"?parsed.length:pathDepth;for(var i=0;i<pathDepth;i++){var part=parsed[i];if(temporaryValue){if(typeof part.p==="undefined"){temporaryValue=temporaryValue[part.i]}else{temporaryValue=temporaryValue[part.p]}if(i===pathDepth-1){res=temporaryValue}}}return res}function internalSetPathValue(obj,val,parsed){var tempObj=obj;var pathDepth=parsed.length;var part=null;for(var i=0;i<pathDepth;i++){var propName=null;var propVal=null;part=parsed[i];if(i===pathDepth-1){propName=typeof part.p==="undefined"?part.i:part.p;tempObj[propName]=val}else if(typeof part.p!=="undefined"&&tempObj[part.p]){tempObj=tempObj[part.p]}else if(typeof part.i!=="undefined"&&tempObj[part.i]){tempObj=tempObj[part.i]}else{var next=parsed[i+1];propName=typeof part.p==="undefined"?part.i:part.p;propVal=typeof next.p==="undefined"?[]:{};tempObj[propName]=propVal;tempObj=tempObj[propName]}}}function getPathInfo(obj,path){var parsed=parsePath(path);var last=parsed[parsed.length-1];var info={parent:parsed.length>1?internalGetPathValue(obj,parsed,parsed.length-1):obj,name:last.p||last.i,value:internalGetPathValue(obj,parsed)};info.exists=hasProperty(info.parent,info.name);return info}function getPathValue(obj,path){var info=getPathInfo(obj,path);return info.value}function setPathValue(obj,path,val){var parsed=parsePath(path);internalSetPathValue(obj,val,parsed);return obj}module.exports={hasProperty:hasProperty,getPathInfo:getPathInfo,getPathValue:getPathValue,setPathValue:setPathValue}},{}],41:[function(require,module,exports){(function(global){(function(){(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory():typeof define==="function"&&define.amd?define(factory):global.typeDetect=factory()})(this,function(){"use strict";var promiseExists=typeof Promise==="function";var globalObject=typeof self==="object"?self:global;var symbolExists=typeof Symbol!=="undefined";var mapExists=typeof Map!=="undefined";var setExists=typeof Set!=="undefined";var weakMapExists=typeof WeakMap!=="undefined";var weakSetExists=typeof WeakSet!=="undefined";var dataViewExists=typeof DataView!=="undefined";var symbolIteratorExists=symbolExists&&typeof Symbol.iterator!=="undefined";var symbolToStringTagExists=symbolExists&&typeof Symbol.toStringTag!=="undefined";var setEntriesExists=setExists&&typeof Set.prototype.entries==="function";var mapEntriesExists=mapExists&&typeof Map.prototype.entries==="function";var setIteratorPrototype=setEntriesExists&&Object.getPrototypeOf((new Set).entries());var mapIteratorPrototype=mapEntriesExists&&Object.getPrototypeOf((new Map).entries());var arrayIteratorExists=symbolIteratorExists&&typeof Array.prototype[Symbol.iterator]==="function";var arrayIteratorPrototype=arrayIteratorExists&&Object.getPrototypeOf([][Symbol.iterator]());var stringIteratorExists=symbolIteratorExists&&typeof String.prototype[Symbol.iterator]==="function";var stringIteratorPrototype=stringIteratorExists&&Object.getPrototypeOf(""[Symbol.iterator]());var toStringLeftSliceLength=8;var toStringRightSliceLength=-1;function typeDetect(obj){var typeofObj=typeof obj;if(typeofObj!=="object"){return typeofObj}if(obj===null){return"null"}if(obj===globalObject){return"global"}if(Array.isArray(obj)&&(symbolToStringTagExists===false||!(Symbol.toStringTag in obj))){return"Array"}if(typeof window==="object"&&window!==null){if(typeof window.location==="object"&&obj===window.location){return"Location"}if(typeof window.document==="object"&&obj===window.document){return"Document"}if(typeof window.navigator==="object"){if(typeof window.navigator.mimeTypes==="object"&&obj===window.navigator.mimeTypes){return"MimeTypeArray"}if(typeof window.navigator.plugins==="object"&&obj===window.navigator.plugins){return"PluginArray"}}if((typeof window.HTMLElement==="function"||typeof window.HTMLElement==="object")&&obj instanceof window.HTMLElement){if(obj.tagName==="BLOCKQUOTE"){return"HTMLQuoteElement"}if(obj.tagName==="TD"){return"HTMLTableDataCellElement"}if(obj.tagName==="TH"){return"HTMLTableHeaderCellElement"}}}var stringTag=symbolToStringTagExists&&obj[Symbol.toStringTag];if(typeof stringTag==="string"){return stringTag}var objPrototype=Object.getPrototypeOf(obj);if(objPrototype===RegExp.prototype){return"RegExp"}if(objPrototype===Date.prototype){return"Date"}if(promiseExists&&objPrototype===Promise.prototype){return"Promise"}if(setExists&&objPrototype===Set.prototype){return"Set"}if(mapExists&&objPrototype===Map.prototype){return"Map"}if(weakSetExists&&objPrototype===WeakSet.prototype){return"WeakSet"}if(weakMapExists&&objPrototype===WeakMap.prototype){return"WeakMap"}if(dataViewExists&&objPrototype===DataView.prototype){return"DataView"}if(mapExists&&objPrototype===mapIteratorPrototype){return"Map Iterator"}if(setExists&&objPrototype===setIteratorPrototype){return"Set Iterator"}if(arrayIteratorExists&&objPrototype===arrayIteratorPrototype){return"Array Iterator"}if(stringIteratorExists&&objPrototype===stringIteratorPrototype){return"String Iterator"}if(objPrototype===null){return"Object"}return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength,toStringRightSliceLength)}return typeDetect})}).call(this)}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}]},{},[1]);

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){window.minimatch=require("minimatch")},{minimatch:5}],2:[function(require,module,exports){"use strict";module.exports=balanced;function balanced(a,b,str){if(a instanceof RegExp)a=maybeMatch(a,str);if(b instanceof RegExp)b=maybeMatch(b,str);var r=range(a,b,str);return r&&{start:r[0],end:r[1],pre:str.slice(0,r[0]),body:str.slice(r[0]+a.length,r[1]),post:str.slice(r[1]+b.length)}}function maybeMatch(reg,str){var m=str.match(reg);return m?m[0]:null}balanced.range=range;function range(a,b,str){var begs,beg,left,right,result;var ai=str.indexOf(a);var bi=str.indexOf(b,ai+1);var i=ai;if(ai>=0&&bi>0){if(a===b){return[ai,bi]}begs=[];left=str.length;while(i>=0&&!result){if(i==ai){begs.push(i);ai=str.indexOf(a,i+1)}else if(begs.length==1){result=[begs.pop(),bi]}else{beg=begs.pop();if(beg<left){left=beg;right=bi}bi=str.indexOf(b,i+1)}i=ai<bi&&ai>=0?ai:bi}if(begs.length){result=[left,right]}}return result}},{}],3:[function(require,module,exports){var concatMap=require("concat-map");var balanced=require("balanced-match");module.exports=expandTop;var escSlash="\0SLASH"+Math.random()+"\0";var escOpen="\0OPEN"+Math.random()+"\0";var escClose="\0CLOSE"+Math.random()+"\0";var escComma="\0COMMA"+Math.random()+"\0";var escPeriod="\0PERIOD"+Math.random()+"\0";function numeric(str){return parseInt(str,10)==str?parseInt(str,10):str.charCodeAt(0)}function escapeBraces(str){return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod)}function unescapeBraces(str){return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".")}function parseCommaParts(str){if(!str)return[""];var parts=[];var m=balanced("{","}",str);if(!m)return str.split(",");var pre=m.pre;var body=m.body;var post=m.post;var p=pre.split(",");p[p.length-1]+="{"+body+"}";var postParts=parseCommaParts(post);if(post.length){p[p.length-1]+=postParts.shift();p.push.apply(p,postParts)}parts.push.apply(parts,p);return parts}function expandTop(str){if(!str)return[];if(str.substr(0,2)==="{}"){str="\\{\\}"+str.substr(2)}return expand(escapeBraces(str),true).map(unescapeBraces)}function identity(e){return e}function embrace(str){return"{"+str+"}"}function isPadded(el){return/^-?0\d/.test(el)}function lte(i,y){return i<=y}function gte(i,y){return i>=y}function expand(str,isTop){var expansions=[];var m=balanced("{","}",str);if(!m||/\$$/.test(m.pre))return[str];var isNumericSequence=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);var isAlphaSequence=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);var isSequence=isNumericSequence||isAlphaSequence;var isOptions=m.body.indexOf(",")>=0;if(!isSequence&&!isOptions){if(m.post.match(/,.*\}/)){str=m.pre+"{"+m.body+escClose+m.post;return expand(str)}return[str]}var n;if(isSequence){n=m.body.split(/\.\./)}else{n=parseCommaParts(m.body);if(n.length===1){n=expand(n[0],false).map(embrace);if(n.length===1){var post=m.post.length?expand(m.post,false):[""];return post.map(function(p){return m.pre+n[0]+p})}}}var pre=m.pre;var post=m.post.length?expand(m.post,false):[""];var N;if(isSequence){var x=numeric(n[0]);var y=numeric(n[1]);var width=Math.max(n[0].length,n[1].length);var incr=n.length==3?Math.abs(numeric(n[2])):1;var test=lte;var reverse=y<x;if(reverse){incr*=-1;test=gte}var pad=n.some(isPadded);N=[];for(var i=x;test(i,y);i+=incr){var c;if(isAlphaSequence){c=String.fromCharCode(i);if(c==="\\")c=""}else{c=String(i);if(pad){var need=width-c.length;if(need>0){var z=new Array(need+1).join("0");if(i<0)c="-"+z+c.slice(1);else c=z+c}}}N.push(c)}}else{N=concatMap(n,function(el){return expand(el,false)})}for(var j=0;j<N.length;j++){for(var k=0;k<post.length;k++){var expansion=pre+N[j]+post[k];if(!isTop||isSequence||expansion)expansions.push(expansion)}}return expansions}},{"balanced-match":2,"concat-map":4}],4:[function(require,module,exports){module.exports=function(xs,fn){var res=[];for(var i=0;i<xs.length;i++){var x=fn(xs[i],i);if(isArray(x))res.push.apply(res,x);else res.push(x)}return res};var isArray=Array.isArray||function(xs){return Object.prototype.toString.call(xs)==="[object Array]"}},{}],5:[function(require,module,exports){module.exports=minimatch;minimatch.Minimatch=Minimatch;var path={sep:"/"};try{path=require("path")}catch(er){}var GLOBSTAR=minimatch.GLOBSTAR=Minimatch.GLOBSTAR={};var expand=require("brace-expansion");var plTypes={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}};var qmark="[^/]";var star=qmark+"*?";var twoStarDot="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";var twoStarNoDot="(?:(?!(?:\\/|^)\\.).)*?";var reSpecials=charSet("().*{}+?[]^$\\!");function charSet(s){return s.split("").reduce(function(set,c){set[c]=true;return set},{})}var slashSplit=/\/+/;minimatch.filter=filter;function filter(pattern,options){options=options||{};return function(p,i,list){return minimatch(p,pattern,options)}}function ext(a,b){a=a||{};b=b||{};var t={};Object.keys(b).forEach(function(k){t[k]=b[k]});Object.keys(a).forEach(function(k){t[k]=a[k]});return t}minimatch.defaults=function(def){if(!def||!Object.keys(def).length)return minimatch;var orig=minimatch;var m=function minimatch(p,pattern,options){return orig.minimatch(p,pattern,ext(def,options))};m.Minimatch=function Minimatch(pattern,options){return new orig.Minimatch(pattern,ext(def,options))};return m};Minimatch.defaults=function(def){if(!def||!Object.keys(def).length)return Minimatch;return minimatch.defaults(def).Minimatch};function minimatch(p,pattern,options){if(typeof pattern!=="string"){throw new TypeError("glob pattern string required")}if(!options)options={};if(!options.nocomment&&pattern.charAt(0)==="#"){return false}if(pattern.trim()==="")return p==="";return new Minimatch(pattern,options).match(p)}function Minimatch(pattern,options){if(!(this instanceof Minimatch)){return new Minimatch(pattern,options)}if(typeof pattern!=="string"){throw new TypeError("glob pattern string required")}if(!options)options={};pattern=pattern.trim();if(path.sep!=="/"){pattern=pattern.split(path.sep).join("/")}this.options=options;this.set=[];this.pattern=pattern;this.regexp=null;this.negate=false;this.comment=false;this.empty=false;this.make()}Minimatch.prototype.debug=function(){};Minimatch.prototype.make=make;function make(){if(this._made)return;var pattern=this.pattern;var options=this.options;if(!options.nocomment&&pattern.charAt(0)==="#"){this.comment=true;return}if(!pattern){this.empty=true;return}this.parseNegate();var set=this.globSet=this.braceExpand();if(options.debug)this.debug=console.error;this.debug(this.pattern,set);set=this.globParts=set.map(function(s){return s.split(slashSplit)});this.debug(this.pattern,set);set=set.map(function(s,si,set){return s.map(this.parse,this)},this);this.debug(this.pattern,set);set=set.filter(function(s){return s.indexOf(false)===-1});this.debug(this.pattern,set);this.set=set}Minimatch.prototype.parseNegate=parseNegate;function parseNegate(){var pattern=this.pattern;var negate=false;var options=this.options;var negateOffset=0;if(options.nonegate)return;for(var i=0,l=pattern.length;i<l&&pattern.charAt(i)==="!";i++){negate=!negate;negateOffset++}if(negateOffset)this.pattern=pattern.substr(negateOffset);this.negate=negate}minimatch.braceExpand=function(pattern,options){return braceExpand(pattern,options)};Minimatch.prototype.braceExpand=braceExpand;function braceExpand(pattern,options){if(!options){if(this instanceof Minimatch){options=this.options}else{options={}}}pattern=typeof pattern==="undefined"?this.pattern:pattern;if(typeof pattern==="undefined"){throw new TypeError("undefined pattern")}if(options.nobrace||!pattern.match(/\{.*\}/)){return[pattern]}return expand(pattern)}Minimatch.prototype.parse=parse;var SUBPARSE={};function parse(pattern,isSub){if(pattern.length>1024*64){throw new TypeError("pattern is too long")}var options=this.options;if(!options.noglobstar&&pattern==="**")return GLOBSTAR;if(pattern==="")return"";var re="";var hasMagic=!!options.nocase;var escaping=false;var patternListStack=[];var negativeLists=[];var stateChar;var inClass=false;var reClassStart=-1;var classStart=-1;var patternStart=pattern.charAt(0)==="."?"":options.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)";var self=this;function clearStateChar(){if(stateChar){switch(stateChar){case"*":re+=star;hasMagic=true;break;case"?":re+=qmark;hasMagic=true;break;default:re+="\\"+stateChar;break}self.debug("clearStateChar %j %j",stateChar,re);stateChar=false}}for(var i=0,len=pattern.length,c;i<len&&(c=pattern.charAt(i));i++){this.debug("%s\t%s %s %j",pattern,i,re,c);if(escaping&&reSpecials[c]){re+="\\"+c;escaping=false;continue}switch(c){case"/":return false;case"\\":clearStateChar();escaping=true;continue;case"?":case"*":case"+":case"@":case"!":this.debug("%s\t%s %s %j <-- stateChar",pattern,i,re,c);if(inClass){this.debug("  in class");if(c==="!"&&i===classStart+1)c="^";re+=c;continue}self.debug("call clearStateChar %j",stateChar);clearStateChar();stateChar=c;if(options.noext)clearStateChar();continue;case"(":if(inClass){re+="(";continue}if(!stateChar){re+="\\(";continue}patternListStack.push({type:stateChar,start:i-1,reStart:re.length,open:plTypes[stateChar].open,close:plTypes[stateChar].close});re+=stateChar==="!"?"(?:(?!(?:":"(?:";this.debug("plType %j %j",stateChar,re);stateChar=false;continue;case")":if(inClass||!patternListStack.length){re+="\\)";continue}clearStateChar();hasMagic=true;var pl=patternListStack.pop();re+=pl.close;if(pl.type==="!"){negativeLists.push(pl)}pl.reEnd=re.length;continue;case"|":if(inClass||!patternListStack.length||escaping){re+="\\|";escaping=false;continue}clearStateChar();re+="|";continue;case"[":clearStateChar();if(inClass){re+="\\"+c;continue}inClass=true;classStart=i;reClassStart=re.length;re+=c;continue;case"]":if(i===classStart+1||!inClass){re+="\\"+c;escaping=false;continue}if(inClass){var cs=pattern.substring(classStart+1,i);try{RegExp("["+cs+"]")}catch(er){var sp=this.parse(cs,SUBPARSE);re=re.substr(0,reClassStart)+"\\["+sp[0]+"\\]";hasMagic=hasMagic||sp[1];inClass=false;continue}}hasMagic=true;inClass=false;re+=c;continue;default:clearStateChar();if(escaping){escaping=false}else if(reSpecials[c]&&!(c==="^"&&inClass)){re+="\\"}re+=c}}if(inClass){cs=pattern.substr(classStart+1);sp=this.parse(cs,SUBPARSE);re=re.substr(0,reClassStart)+"\\["+sp[0];hasMagic=hasMagic||sp[1]}for(pl=patternListStack.pop();pl;pl=patternListStack.pop()){var tail=re.slice(pl.reStart+pl.open.length);this.debug("setting tail",re,pl);tail=tail.replace(/((?:\\{2}){0,64})(\\?)\|/g,function(_,$1,$2){if(!$2){$2="\\"}return $1+$1+$2+"|"});this.debug("tail=%j\n   %s",tail,tail,pl,re);var t=pl.type==="*"?star:pl.type==="?"?qmark:"\\"+pl.type;hasMagic=true;re=re.slice(0,pl.reStart)+t+"\\("+tail}clearStateChar();if(escaping){re+="\\\\"}var addPatternStart=false;switch(re.charAt(0)){case".":case"[":case"(":addPatternStart=true}for(var n=negativeLists.length-1;n>-1;n--){var nl=negativeLists[n];var nlBefore=re.slice(0,nl.reStart);var nlFirst=re.slice(nl.reStart,nl.reEnd-8);var nlLast=re.slice(nl.reEnd-8,nl.reEnd);var nlAfter=re.slice(nl.reEnd);nlLast+=nlAfter;var openParensBefore=nlBefore.split("(").length-1;var cleanAfter=nlAfter;for(i=0;i<openParensBefore;i++){cleanAfter=cleanAfter.replace(/\)[+*?]?/,"")}nlAfter=cleanAfter;var dollar="";if(nlAfter===""&&isSub!==SUBPARSE){dollar="$"}var newRe=nlBefore+nlFirst+nlAfter+dollar+nlLast;re=newRe}if(re!==""&&hasMagic){re="(?=.)"+re}if(addPatternStart){re=patternStart+re}if(isSub===SUBPARSE){return[re,hasMagic]}if(!hasMagic){return globUnescape(pattern)}var flags=options.nocase?"i":"";try{var regExp=new RegExp("^"+re+"$",flags)}catch(er){return new RegExp("$.")}regExp._glob=pattern;regExp._src=re;return regExp}minimatch.makeRe=function(pattern,options){return new Minimatch(pattern,options||{}).makeRe()};Minimatch.prototype.makeRe=makeRe;function makeRe(){if(this.regexp||this.regexp===false)return this.regexp;var set=this.set;if(!set.length){this.regexp=false;return this.regexp}var options=this.options;var twoStar=options.noglobstar?star:options.dot?twoStarDot:twoStarNoDot;var flags=options.nocase?"i":"";var re=set.map(function(pattern){return pattern.map(function(p){return p===GLOBSTAR?twoStar:typeof p==="string"?regExpEscape(p):p._src}).join("\\/")}).join("|");re="^(?:"+re+")$";if(this.negate)re="^(?!"+re+").*$";try{this.regexp=new RegExp(re,flags)}catch(ex){this.regexp=false}return this.regexp}minimatch.match=function(list,pattern,options){options=options||{};var mm=new Minimatch(pattern,options);list=list.filter(function(f){return mm.match(f)});if(mm.options.nonull&&!list.length){list.push(pattern)}return list};Minimatch.prototype.match=match;function match(f,partial){this.debug("match",f,this.pattern);if(this.comment)return false;if(this.empty)return f==="";if(f==="/"&&partial)return true;var options=this.options;if(path.sep!=="/"){f=f.split(path.sep).join("/")}f=f.split(slashSplit);this.debug(this.pattern,"split",f);var set=this.set;this.debug(this.pattern,"set",set);var filename;var i;for(i=f.length-1;i>=0;i--){filename=f[i];if(filename)break}for(i=0;i<set.length;i++){var pattern=set[i];var file=f;if(options.matchBase&&pattern.length===1){file=[filename]}var hit=this.matchOne(file,pattern,partial);if(hit){if(options.flipNegate)return true;return!this.negate}}if(options.flipNegate)return false;return this.negate}Minimatch.prototype.matchOne=function(file,pattern,partial){var options=this.options;this.debug("matchOne",{this:this,file:file,pattern:pattern});this.debug("matchOne",file.length,pattern.length);for(var fi=0,pi=0,fl=file.length,pl=pattern.length;fi<fl&&pi<pl;fi++,pi++){this.debug("matchOne loop");var p=pattern[pi];var f=file[fi];this.debug(pattern,p,f);if(p===false)return false;if(p===GLOBSTAR){this.debug("GLOBSTAR",[pattern,p,f]);var fr=fi;var pr=pi+1;if(pr===pl){this.debug("** at the end");for(;fi<fl;fi++){if(file[fi]==="."||file[fi]===".."||!options.dot&&file[fi].charAt(0)===".")return false}return true}while(fr<fl){var swallowee=file[fr];this.debug("\nglobstar while",file,fr,pattern,pr,swallowee);if(this.matchOne(file.slice(fr),pattern.slice(pr),partial)){this.debug("globstar found match!",fr,fl,swallowee);return true}else{if(swallowee==="."||swallowee===".."||!options.dot&&swallowee.charAt(0)==="."){this.debug("dot detected!",file,fr,pattern,pr);break}this.debug("globstar swallow a segment, and continue");fr++}}if(partial){this.debug("\n>>> no match, partial?",file,fr,pattern,pr);if(fr===fl)return true}return false}var hit;if(typeof p==="string"){if(options.nocase){hit=f.toLowerCase()===p.toLowerCase()}else{hit=f===p}this.debug("string match",p,f,hit)}else{hit=f.match(p);this.debug("pattern match",p,f,hit)}if(!hit)return false}if(fi===fl&&pi===pl){return true}else if(fi===fl){return partial}else if(pi===pl){var emptyFileEnd=fi===fl-1&&file[fi]==="";return emptyFileEnd}throw new Error("wtf?")};function globUnescape(s){return s.replace(/\\(.)/g,"$1")}function regExpEscape(s){return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}},{"brace-expansion":3,path:6}],6:[function(require,module,exports){(function(process){(function(){"use strict";function assertPath(path){if(typeof path!=="string"){throw new TypeError("Path must be a string. Received "+JSON.stringify(path))}}function normalizeStringPosix(path,allowAboveRoot){var res="";var lastSegmentLength=0;var lastSlash=-1;var dots=0;var code;for(var i=0;i<=path.length;++i){if(i<path.length)code=path.charCodeAt(i);else if(code===47)break;else code=47;if(code===47){if(lastSlash===i-1||dots===1){}else if(lastSlash!==i-1&&dots===2){if(res.length<2||lastSegmentLength!==2||res.charCodeAt(res.length-1)!==46||res.charCodeAt(res.length-2)!==46){if(res.length>2){var lastSlashIndex=res.lastIndexOf("/");if(lastSlashIndex!==res.length-1){if(lastSlashIndex===-1){res="";lastSegmentLength=0}else{res=res.slice(0,lastSlashIndex);lastSegmentLength=res.length-1-res.lastIndexOf("/")}lastSlash=i;dots=0;continue}}else if(res.length===2||res.length===1){res="";lastSegmentLength=0;lastSlash=i;dots=0;continue}}if(allowAboveRoot){if(res.length>0)res+="/..";else res="..";lastSegmentLength=2}}else{if(res.length>0)res+="/"+path.slice(lastSlash+1,i);else res=path.slice(lastSlash+1,i);lastSegmentLength=i-lastSlash-1}lastSlash=i;dots=0}else if(code===46&&dots!==-1){++dots}else{dots=-1}}return res}function _format(sep,pathObject){var dir=pathObject.dir||pathObject.root;var base=pathObject.base||(pathObject.name||"")+(pathObject.ext||"");if(!dir){return base}if(dir===pathObject.root){return dir+base}return dir+sep+base}var posix={resolve:function resolve(){var resolvedPath="";var resolvedAbsolute=false;var cwd;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path;if(i>=0)path=arguments[i];else{if(cwd===undefined)cwd=process.cwd();path=cwd}assertPath(path);if(path.length===0){continue}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charCodeAt(0)===47}resolvedPath=normalizeStringPosix(resolvedPath,!resolvedAbsolute);if(resolvedAbsolute){if(resolvedPath.length>0)return"/"+resolvedPath;else return"/"}else if(resolvedPath.length>0){return resolvedPath}else{return"."}},normalize:function normalize(path){assertPath(path);if(path.length===0)return".";var isAbsolute=path.charCodeAt(0)===47;var trailingSeparator=path.charCodeAt(path.length-1)===47;path=normalizeStringPosix(path,!isAbsolute);if(path.length===0&&!isAbsolute)path=".";if(path.length>0&&trailingSeparator)path+="/";if(isAbsolute)return"/"+path;return path},isAbsolute:function isAbsolute(path){assertPath(path);return path.length>0&&path.charCodeAt(0)===47},join:function join(){if(arguments.length===0)return".";var joined;for(var i=0;i<arguments.length;++i){var arg=arguments[i];assertPath(arg);if(arg.length>0){if(joined===undefined)joined=arg;else joined+="/"+arg}}if(joined===undefined)return".";return posix.normalize(joined)},relative:function relative(from,to){assertPath(from);assertPath(to);if(from===to)return"";from=posix.resolve(from);to=posix.resolve(to);if(from===to)return"";var fromStart=1;for(;fromStart<from.length;++fromStart){if(from.charCodeAt(fromStart)!==47)break}var fromEnd=from.length;var fromLen=fromEnd-fromStart;var toStart=1;for(;toStart<to.length;++toStart){if(to.charCodeAt(toStart)!==47)break}var toEnd=to.length;var toLen=toEnd-toStart;var length=fromLen<toLen?fromLen:toLen;var lastCommonSep=-1;var i=0;for(;i<=length;++i){if(i===length){if(toLen>length){if(to.charCodeAt(toStart+i)===47){return to.slice(toStart+i+1)}else if(i===0){return to.slice(toStart+i)}}else if(fromLen>length){if(from.charCodeAt(fromStart+i)===47){lastCommonSep=i}else if(i===0){lastCommonSep=0}}break}var fromCode=from.charCodeAt(fromStart+i);var toCode=to.charCodeAt(toStart+i);if(fromCode!==toCode)break;else if(fromCode===47)lastCommonSep=i}var out="";for(i=fromStart+lastCommonSep+1;i<=fromEnd;++i){if(i===fromEnd||from.charCodeAt(i)===47){if(out.length===0)out+="..";else out+="/.."}}if(out.length>0)return out+to.slice(toStart+lastCommonSep);else{toStart+=lastCommonSep;if(to.charCodeAt(toStart)===47)++toStart;return to.slice(toStart)}},_makeLong:function _makeLong(path){return path},dirname:function dirname(path){assertPath(path);if(path.length===0)return".";var code=path.charCodeAt(0);var hasRoot=code===47;var end=-1;var matchedSlash=true;for(var i=path.length-1;i>=1;--i){code=path.charCodeAt(i);if(code===47){if(!matchedSlash){end=i;break}}else{matchedSlash=false}}if(end===-1)return hasRoot?"/":".";if(hasRoot&&end===1)return"//";return path.slice(0,end)},basename:function basename(path,ext){if(ext!==undefined&&typeof ext!=="string")throw new TypeError('"ext" argument must be a string');assertPath(path);var start=0;var end=-1;var matchedSlash=true;var i;if(ext!==undefined&&ext.length>0&&ext.length<=path.length){if(ext.length===path.length&&ext===path)return"";var extIdx=ext.length-1;var firstNonSlashEnd=-1;for(i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(code===47){if(!matchedSlash){start=i+1;break}}else{if(firstNonSlashEnd===-1){matchedSlash=false;firstNonSlashEnd=i+1}if(extIdx>=0){if(code===ext.charCodeAt(extIdx)){if(--extIdx===-1){end=i}}else{extIdx=-1;end=firstNonSlashEnd}}}}if(start===end)end=firstNonSlashEnd;else if(end===-1)end=path.length;return path.slice(start,end)}else{for(i=path.length-1;i>=0;--i){if(path.charCodeAt(i)===47){if(!matchedSlash){start=i+1;break}}else if(end===-1){matchedSlash=false;end=i+1}}if(end===-1)return"";return path.slice(start,end)}},extname:function extname(path){assertPath(path);var startDot=-1;var startPart=0;var end=-1;var matchedSlash=true;var preDotState=0;for(var i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(code===47){if(!matchedSlash){startPart=i+1;break}continue}if(end===-1){matchedSlash=false;end=i+1}if(code===46){if(startDot===-1)startDot=i;else if(preDotState!==1)preDotState=1}else if(startDot!==-1){preDotState=-1}}if(startDot===-1||end===-1||preDotState===0||preDotState===1&&startDot===end-1&&startDot===startPart+1){return""}return path.slice(startDot,end)},format:function format(pathObject){if(pathObject===null||typeof pathObject!=="object"){throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof pathObject)}return _format("/",pathObject)},parse:function parse(path){assertPath(path);var ret={root:"",dir:"",base:"",ext:"",name:""};if(path.length===0)return ret;var code=path.charCodeAt(0);var isAbsolute=code===47;var start;if(isAbsolute){ret.root="/";start=1}else{start=0}var startDot=-1;var startPart=0;var end=-1;var matchedSlash=true;var i=path.length-1;var preDotState=0;for(;i>=start;--i){code=path.charCodeAt(i);if(code===47){if(!matchedSlash){startPart=i+1;break}continue}if(end===-1){matchedSlash=false;end=i+1}if(code===46){if(startDot===-1)startDot=i;else if(preDotState!==1)preDotState=1}else if(startDot!==-1){preDotState=-1}}if(startDot===-1||end===-1||preDotState===0||preDotState===1&&startDot===end-1&&startDot===startPart+1){if(end!==-1){if(startPart===0&&isAbsolute)ret.base=ret.name=path.slice(1,end);else ret.base=ret.name=path.slice(startPart,end)}}else{if(startPart===0&&isAbsolute){ret.name=path.slice(1,startDot);ret.base=path.slice(1,end)}else{ret.name=path.slice(startPart,startDot);ret.base=path.slice(startPart,end)}ret.ext=path.slice(startDot,end)}if(startPart>0)ret.dir=path.slice(0,startPart-1);else if(isAbsolute)ret.dir="/";return ret},sep:"/",delimiter:":",win32:null,posix:null};posix.posix=posix;module.exports=posix}).call(this)}).call(this,require("_process"))},{_process:7}],7:[function(require,module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){cachedSetTimeout=setTimeout}else{cachedSetTimeout=defaultSetTimout}}catch(e){cachedSetTimeout=defaultSetTimout}try{if(typeof clearTimeout==="function"){cachedClearTimeout=clearTimeout}else{cachedClearTimeout=defaultClearTimeout}}catch(e){cachedClearTimeout=defaultClearTimeout}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue)}else{queueIndex=-1}if(queue.length){drainQueue()}}function drainQueue(){if(draining){return}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run()}}queueIndex=-1;len=queue.length}currentQueue=null;draining=false;runClearTimeout(timeout)}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i]}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue)}};function Item(fun,array){this.fun=fun;this.array=array}Item.prototype.run=function(){this.fun.apply(null,this.array)};process.title="browser";process.browser=true;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]};process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0}},{}]},{},[1]);

var w2ui  = w2ui  || {};
var w2obj = w2obj || {}; // expose object to be able to overwrite default functions

/************************************************
*  Library: Web 2.0 UI for jQuery
*  - Following objects are defines
*        - w2ui             - object that will contain all widgets
*        - w2obj            - object with widget prototypes
*        - w2utils          - basic utilities
*        - $().w2render     - common render
*        - $().w2destroy    - common destroy
*        - $().w2marker     - marker plugin
*        - $().w2tag        - tag plugin
*        - $().w2overlay    - overlay plugin
*        - $().w2menu       - menu plugin
*        - w2utils.event    - generic event object
*  - Dependencies: jQuery
*
* == TODO ==
*   - overlay should be displayed where more space (on top or on bottom)
*   - write and article how to replace certain framework functions
*   - add maxHeight for the w2menu
*   - add time zone
*   - TEST On IOS
*   - $().w2marker() -- only unmarks first instance
*   - subitems for w2menus()
*   - add w2utils.lang wrap for all captions in all buttons.
*   - $().w2date(), $().w2dateTime()
*
* == 1.5 change
*   - parseColor(str) returns rgb
*   - rgb2hsv, hsv2rgb
*   - color.onSelect
*   - color.html
*   - refactored w2tag object, it has more potential with $().data('w2tag')
*   - added w2utils.tooltip
*   - w2tag options.hideOnFocus
*   - w2tag options.maxWidth
*   - w2tag options.auto - if set to true, then tag will show on mouseover
*   - w2tag options.showOn, hideOn - if set to true, then tag will show on mouseover
*   - w2tag options.className: 'w2ui-light' - for light color tag
*   - w2menu options.items... remove t/f
*   - w2menu options.items... keepOpen t/f
*   - w2menu options.onRemove
*   - w2menu options.hideOnRemove
*   - w2menu - can not nest items, item.items and item.expanded
*   - w2menu.options.topHTML
*   - w2menu.options.menuStyle
*   - naturalCompare
*
************************************************/

var w2utils = (function ($) {
    var tmp = {}; // for some temp variables
    var obj = {
        version  : '2.0.x',
        settings : {
            "locale"            : "en-us",
            "dateFormat"        : "m/d/yyyy",
            "timeFormat"        : "hh:mi pm",
            "datetimeFormat"    : "m/d/yyyy|hh:mi pm",
            "currencyPrefix"    : "$",
            "currencySuffix"    : "",
            "currencyPrecision" : 2,
            "groupSymbol"       : ",",
            "decimalSymbol"     : ".",
            "shortmonths"       : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "fullmonths"        : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "shortdays"         : ["M", "T", "W", "T", "F", "S", "S"],
            "fulldays"          : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "weekStarts"        : "M",        // can be "M" for Monday or "S" for Sunday
            "dataType"          : 'HTTPJSON', // can be HTTP, HTTPJSON, RESTFULL, RESTFULLJSON, JSON (case sensitive)
            "phrases"           : {},         // empty object for english phrases
            "dateStartYear"     : 1950,       // start year for date-picker
            "dateEndYear"       : 2030,       // end year for date picker
            "macButtonOrder"    : false       // if true, Yes on the right side
        },
        isBin           : isBin,
        isInt           : isInt,
        isFloat         : isFloat,
        isMoney         : isMoney,
        isHex           : isHex,
        isAlphaNumeric  : isAlphaNumeric,
        isEmail         : isEmail,
        isIpAddress     : isIpAddress,
        isDate          : isDate,
        isTime          : isTime,
        isDateTime      : isDateTime,
        age             : age,
        interval        : interval,
        date            : date,
        formatSize      : formatSize,
        formatNumber    : formatNumber,
        formatDate      : formatDate,
        formatTime      : formatTime,
        formatDateTime  : formatDateTime,
        stripTags       : stripTags,
        encodeTags      : encodeTags,
        decodeTags      : decodeTags,
        escapeId        : escapeId,
        base64encode    : base64encode,
        base64decode    : base64decode,
        md5             : md5,
        transition      : transition,
        lock            : lock,
        unlock          : unlock,
        message         : message,
        naturalCompare  : naturalCompare,
        lang            : lang,
        locale          : locale,
        getSize         : getSize,
        getStrWidth     : getStrWidth,
        scrollBarSize   : scrollBarSize,
        checkName       : checkName,
        checkUniqueId   : checkUniqueId,
        parseRoute      : parseRoute,
        cssPrefix       : cssPrefix,
        parseColor      : parseColor,
        hsv2rgb         : hsv2rgb,
        rgb2hsv         : rgb2hsv,
        tooltip         : tooltip,
        getCursorPosition : getCursorPosition,
        setCursorPosition : setCursorPosition,
        testLocalStorage  : testLocalStorage,
        hasLocalStorage   : testLocalStorage(),
        // some internal variables
        isIOS : ((navigator.userAgent.toLowerCase().indexOf('iphone') !== -1 ||
                 navigator.userAgent.toLowerCase().indexOf('ipod') !== -1 ||
                 navigator.userAgent.toLowerCase().indexOf('ipad') !== -1 ||
                 navigator.userAgent.toLowerCase().indexOf('mobile') !== -1 ||
                 navigator.userAgent.toLowerCase().indexOf('android') !== -1)
                 ? true : false),
        isIE : ((navigator.userAgent.toLowerCase().indexOf('msie') !== -1 ||
                 navigator.userAgent.toLowerCase().indexOf('trident') !== -1 )
                 ? true : false)
    };
    return obj;

    function isBin (val) {
        var re = /^[0-1]+$/;
        return re.test(val);
    }

    function isInt (val) {
        var re = /^[-+]?[0-9]+$/;
        return re.test(val);
    }

    function isFloat (val) {
        if (typeof val === 'string') val = val.replace(/\s+/g, '').replace(w2utils.settings.groupSymbol, '').replace(w2utils.settings.decimalSymbol, '.');
        return (typeof val === 'number' || (typeof val === 'string' && val !== '')) && !isNaN(Number(val));
    }

    function isMoney (val) {
        var se = w2utils.settings;
        var re = new RegExp('^'+ (se.currencyPrefix ? '\\' + se.currencyPrefix + '?' : '') +
                            '[-+]?'+ (se.currencyPrefix ? '\\' + se.currencyPrefix + '?' : '') +
                            '[0-9]*[\\'+ se.decimalSymbol +']?[0-9]+'+ (se.currencySuffix ? '\\' + se.currencySuffix + '?' : '') +'$', 'i');
        if (typeof val === 'string') {
            val = val.replace(new RegExp(se.groupSymbol, 'g'), '');
        }
        if (typeof val === 'object' || val === '') return false;
        return re.test(val);
    }

    function isHex (val) {
        var re = /^(0x)?[0-9a-fA-F]+$/;
        return re.test(val);
    }

    function isAlphaNumeric (val) {
        var re = /^[a-zA-Z0-9_-]+$/;
        return re.test(val);
    }

    function isEmail (val) {
        var email = /^[a-zA-Z0-9._%\-+]+@[а-яА-Яa-zA-Z0-9.-]+\.[а-яА-Яa-zA-Z]+$/;
        return email.test(val);
    }

    function isIpAddress (val) {
        var re = new RegExp('^' +
                            '((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}' +
                            '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)' +
                            '$');
        return re.test(val);
    }

    function isDate (val, format, retDate) {
        if (!val) return false;

        var dt   = 'Invalid Date';
        var month, day, year;

        if (format == null) format = w2utils.settings.dateFormat;

        if (typeof val.getFullYear === 'function') { // date object
            year  = val.getFullYear();
            month = val.getMonth() + 1;
            day   = val.getDate();
        } else if (parseInt(val) == val && parseInt(val) > 0) {
            val = new Date(parseInt(val));
            year  = val.getFullYear();
            month = val.getMonth() + 1;
            day   = val.getDate();
        } else {
            val = String(val);
            // convert month formats
            if (new RegExp('mon', 'ig').test(format)) {
                format = format.replace(/month/ig, 'm').replace(/mon/ig, 'm').replace(/dd/ig, 'd').replace(/[, ]/ig, '/').replace(/\/\//g, '/').toLowerCase();
                val    = val.replace(/[, ]/ig, '/').replace(/\/\//g, '/').toLowerCase();
                for (var m = 0, len = w2utils.settings.fullmonths.length; m < len; m++) {
                    var t = w2utils.settings.fullmonths[m];
                    val = val.replace(new RegExp(t, 'ig'), (parseInt(m) + 1)).replace(new RegExp(t.substr(0, 3), 'ig'), (parseInt(m) + 1));
                }
            }
            // format date
            var tmp  = val.replace(/-/g, '/').replace(/\./g, '/').toLowerCase().split('/');
            var tmp2 = format.replace(/-/g, '/').replace(/\./g, '/').toLowerCase();
            if (tmp2 === 'mm/dd/yyyy') { month = tmp[0]; day = tmp[1]; year = tmp[2]; }
            if (tmp2 === 'm/d/yyyy')   { month = tmp[0]; day = tmp[1]; year = tmp[2]; }
            if (tmp2 === 'dd/mm/yyyy') { month = tmp[1]; day = tmp[0]; year = tmp[2]; }
            if (tmp2 === 'd/m/yyyy')   { month = tmp[1]; day = tmp[0]; year = tmp[2]; }
            if (tmp2 === 'yyyy/dd/mm') { month = tmp[2]; day = tmp[1]; year = tmp[0]; }
            if (tmp2 === 'yyyy/d/m')   { month = tmp[2]; day = tmp[1]; year = tmp[0]; }
            if (tmp2 === 'yyyy/mm/dd') { month = tmp[1]; day = tmp[2]; year = tmp[0]; }
            if (tmp2 === 'yyyy/m/d')   { month = tmp[1]; day = tmp[2]; year = tmp[0]; }
            if (tmp2 === 'mm/dd/yy')   { month = tmp[0]; day = tmp[1]; year = tmp[2]; }
            if (tmp2 === 'm/d/yy')     { month = tmp[0]; day = tmp[1]; year = parseInt(tmp[2]) + 1900; }
            if (tmp2 === 'dd/mm/yy')   { month = tmp[1]; day = tmp[0]; year = parseInt(tmp[2]) + 1900; }
            if (tmp2 === 'd/m/yy')     { month = tmp[1]; day = tmp[0]; year = parseInt(tmp[2]) + 1900; }
            if (tmp2 === 'yy/dd/mm')   { month = tmp[2]; day = tmp[1]; year = parseInt(tmp[0]) + 1900; }
            if (tmp2 === 'yy/d/m')     { month = tmp[2]; day = tmp[1]; year = parseInt(tmp[0]) + 1900; }
            if (tmp2 === 'yy/mm/dd')   { month = tmp[1]; day = tmp[2]; year = parseInt(tmp[0]) + 1900; }
            if (tmp2 === 'yy/m/d')     { month = tmp[1]; day = tmp[2]; year = parseInt(tmp[0]) + 1900; }
        }
        if (!isInt(year)) return false;
        if (!isInt(month)) return false;
        if (!isInt(day)) return false;
        year  = +year;
        month = +month;
        day   = +day;
        dt    = new Date(year, month - 1, day);
        dt.setFullYear(year);
        // do checks
        if (month == null) return false;
        if (String(dt) === 'Invalid Date') return false;
        if ((dt.getMonth() + 1 !== month) || (dt.getDate() !== day) || (dt.getFullYear() !== year)) return false;
        if (retDate === true) return dt; else return true;
    }

    function isTime (val, retTime) {
        // Both formats 10:20pm and 22:20
        if (val == null) return false;
        var max, am, pm;
        // -- process american format
        val = String(val);
        val = val.toUpperCase();
        am = val.indexOf('AM') >= 0;
        pm = val.indexOf('PM') >= 0;
        var ampm = (pm || am);
        if (ampm) max = 12; else max = 24;
        val = val.replace('AM', '').replace('PM', '');
        val = $.trim(val);
        // ---
        var tmp = val.split(':');
        var h = parseInt(tmp[0] || 0), m = parseInt(tmp[1] || 0), s = parseInt(tmp[2] || 0);
        // accept edge case: 3PM is a good timestamp, but 3 (without AM or PM) is NOT:
        if ((!ampm || tmp.length !== 1) && tmp.length !== 2 && tmp.length !== 3) { return false; }
        if (tmp[0] === '' || h < 0 || h > max || !this.isInt(tmp[0]) || tmp[0].length > 2) { return false; }
        if (tmp.length > 1 && (tmp[1] === '' || m < 0 || m > 59 || !this.isInt(tmp[1]) || tmp[1].length !== 2)) { return false; }
        if (tmp.length > 2 && (tmp[2] === '' || s < 0 || s > 59 || !this.isInt(tmp[2]) || tmp[2].length !== 2)) { return false; }
        // check the edge cases: 12:01AM is ok, as is 12:01PM, but 24:01 is NOT ok while 24:00 is (midnight; equivalent to 00:00).
        // meanwhile, there is 00:00 which is ok, but 0AM nor 0PM are okay, while 0:01AM and 0:00AM are.
        if (!ampm && max === h && (m !== 0 || s !== 0)) { return false; }
        if (ampm && tmp.length === 1 && h === 0) { return false; }

        if (retTime === true) {
            if (pm && h !== 12) h += 12;   // 12:00pm - is noon
            if (am && h === 12) h += 12;   // 12:00am - is midnight
            return {
                hours: h,
                minutes: m,
                seconds: s
            };
        }
        return true;
    }

    function isDateTime (val, format, retDate) {
        if (typeof val.getFullYear === 'function') { // date object
            if (retDate !== true) return true;
            return val;
        }
        var intVal = parseInt(val);
        if (intVal === val) {
            if (intVal < 0) return false;
            else if (retDate !== true) return true;
            else return new Date(intVal);
        }
        var tmp = String(val).indexOf(' ');
        if (tmp < 0) {
            if (String(val).indexOf('T') < 0 || String(new Date(val)) == 'Invalid Date') return false;
            else if (retDate !== true) return true;
            else return new Date(val);
        } else {
            if (format == null) format = w2utils.settings.datetimeFormat;
            var formats = format.split('|');
            var values  = [val.substr(0, tmp), val.substr(tmp).trim()];
            formats[0] = formats[0].trim();
            if (formats[1]) formats[1] = formats[1].trim();
            // check
            var tmp1 = w2utils.isDate(values[0], formats[0], true);
            var tmp2 = w2utils.isTime(values[1], true);
            if (tmp1 !== false && tmp2 !== false) {
                if (retDate !== true) return true;
                tmp1.setHours(tmp2.hours);
                tmp1.setMinutes(tmp2.minutes);
                tmp1.setSeconds(tmp2.seconds);
                return tmp1;
            } else {
                return false;
            }
        }
    }

    function age(dateStr) {
        var d1;
        if (dateStr === '' || dateStr == null) return '';
        if (typeof dateStr.getFullYear === 'function') { // date object
            d1 = dateStr;
        } else if (parseInt(dateStr) == dateStr && parseInt(dateStr) > 0) {
            d1 = new Date(parseInt(dateStr));
        } else {
            d1 = new Date(dateStr);
        }
        if (String(d1) === 'Invalid Date') return '';

        var d2  = new Date();
        var sec = (d2.getTime() - d1.getTime()) / 1000;
        var amount = '';
        var type   = '';
        if (sec < 0) {
            amount = 0;
            type   = 'sec';
        } else if (sec < 60) {
            amount = Math.floor(sec);
            type   = 'sec';
            if (sec < 0) { amount = 0; type = 'sec'; }
        } else if (sec < 60*60) {
            amount = Math.floor(sec/60);
            type   = 'min';
        } else if (sec < 24*60*60) {
            amount = Math.floor(sec/60/60);
            type   = 'hour';
        } else if (sec < 30*24*60*60) {
            amount = Math.floor(sec/24/60/60);
            type   = 'day';
        } else if (sec < 365*24*60*60) {
            amount = Math.floor(sec/30/24/60/60*10)/10;
            type   = 'month';
        } else if (sec < 365*4*24*60*60) {
            amount = Math.floor(sec/365/24/60/60*10)/10;
            type   = 'year';
        } else if (sec >= 365*4*24*60*60) {
            // factor in leap year shift (only older then 4 years)
            amount = Math.floor(sec/365.25/24/60/60*10)/10;
            type   = 'year';
        }
        return amount + ' ' + type + (amount > 1 ? 's' : '');
    }

    function interval (value) {
        var ret = '';
        if (value < 1000) {
            ret = "< 1 sec";
        } else if (value < 60000) {
            ret = Math.floor(value / 1000) + " secs";
        } else if (value < 3600000) {
            ret = Math.floor(value / 60000) + " mins";
        } else if (value < 86400000) {
            ret = Math.floor(value / 3600000 * 10) / 10 + " hours";
        } else if (value < 2628000000) {
            ret = Math.floor(value / 86400000 * 10) / 10 + " days";
        } else if (value < 3.1536e+10) {
            ret = Math.floor(value / 2628000000 * 10) / 10 + " months";
        } else {
            ret = Math.floor(value / 3.1536e+9) / 10 + " years";
        }
        return ret;
    }

    function date (dateStr) {
        if (dateStr === '' || dateStr == null || (typeof dateStr === 'object' && !dateStr.getMonth)) return '';
        var d1 = new Date(dateStr);
        if (w2utils.isInt(dateStr)) d1 = new Date(Number(dateStr)); // for unix timestamps
        if (String(d1) === 'Invalid Date') return '';

        var months = w2utils.settings.shortmonths;
        var d2   = new Date(); // today
        var d3   = new Date();
        d3.setTime(d3.getTime() - 86400000); // yesterday

        var dd1  = months[d1.getMonth()] + ' ' + d1.getDate() + ', ' + d1.getFullYear();
        var dd2  = months[d2.getMonth()] + ' ' + d2.getDate() + ', ' + d2.getFullYear();
        var dd3  = months[d3.getMonth()] + ' ' + d3.getDate() + ', ' + d3.getFullYear();

        var time = (d1.getHours() - (d1.getHours() > 12 ? 12 :0)) + ':' + (d1.getMinutes() < 10 ? '0' : '') + d1.getMinutes() + ' ' + (d1.getHours() >= 12 ? 'pm' : 'am');
        var time2= (d1.getHours() - (d1.getHours() > 12 ? 12 :0)) + ':' + (d1.getMinutes() < 10 ? '0' : '') + d1.getMinutes() + ':' + (d1.getSeconds() < 10 ? '0' : '') + d1.getSeconds() + ' ' + (d1.getHours() >= 12 ? 'pm' : 'am');
        var dsp = dd1;
        if (dd1 === dd2) dsp = time;
        if (dd1 === dd3) dsp = w2utils.lang('Yesterday');

        return '<span title="'+ dd1 +' ' + time2 +'">'+ dsp +'</span>';
    }

    function formatSize (sizeStr) {
        if (!w2utils.isFloat(sizeStr) || sizeStr === '') return '';
        sizeStr = parseFloat(sizeStr);
        if (sizeStr === 0) return 0;
        var sizes = ['Bt', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB'];
        var i = parseInt( Math.floor( Math.log(sizeStr) / Math.log(1024) ) );
        return (Math.floor(sizeStr / Math.pow(1024, i) * 10) / 10).toFixed(i === 0 ? 0 : 1) + ' ' + (sizes[i] || '??');
    }

    function formatNumber (val, fraction, useGrouping) {
        if (val == null || val === '' || typeof val === 'object') return '';
        var options = {
            minimumFractionDigits : fraction,
            maximumFractionDigits : fraction,
            useGrouping : useGrouping
        };
        if (fraction == null || fraction < 0) {
            options.minimumFractionDigits = 0;
            options.maximumFractionDigits = 20;
        }
        return parseFloat(val).toLocaleString(w2utils.settings.locale, options);
    }

    function formatDate (dateStr, format) { // IMPORTANT dateStr HAS TO BE valid JavaScript Date String
        if (!format) format = this.settings.dateFormat;
        if (dateStr === '' || dateStr == null || (typeof dateStr === 'object' && !dateStr.getMonth)) return '';

        var dt = new Date(dateStr);
        if (w2utils.isInt(dateStr)) dt = new Date(Number(dateStr)); // for unix timestamps
        if (String(dt) === 'Invalid Date') return '';

        var year  = dt.getFullYear();
        var month = dt.getMonth();
        var date  = dt.getDate();
        return format.toLowerCase()
            .replace('month', w2utils.settings.fullmonths[month])
            .replace('mon', w2utils.settings.shortmonths[month])
            .replace(/yyyy/g, ('000' + year).slice(-4))
            .replace(/yyy/g, ('000' + year).slice(-4))
            .replace(/yy/g, ('0' + year).slice(-2))
            .replace(/(^|[^a-z$])y/g, '$1' + year)            // only y's that are not preceded by a letter
            .replace(/mm/g, ('0' + (month + 1)).slice(-2))
            .replace(/dd/g, ('0' + date).slice(-2))
            .replace(/th/g, (date == 1 ? 'st' : 'th'))
            .replace(/th/g, (date == 2 ? 'nd' : 'th'))
            .replace(/th/g, (date == 3 ? 'rd' : 'th'))
            .replace(/(^|[^a-z$])m/g, '$1' + (month + 1))     // only y's that are not preceded by a letter
            .replace(/(^|[^a-z$])d/g, '$1' + date);           // only y's that are not preceded by a letter
    }

    function formatTime (dateStr, format) { // IMPORTANT dateStr HAS TO BE valid JavaScript Date String
        var months = w2utils.settings.shortmonths;
        var fullMonths = w2utils.settings.fullmonths;
        if (!format) format = this.settings.timeFormat;
        if (dateStr === '' || dateStr == null || (typeof dateStr === 'object' && !dateStr.getMonth)) return '';

        var dt = new Date(dateStr);
        if (w2utils.isInt(dateStr)) dt  = new Date(Number(dateStr)); // for unix timestamps
        if (w2utils.isTime(dateStr)) {
            var tmp = w2utils.isTime(dateStr, true);
            dt = new Date();
            dt.setHours(tmp.hours);
            dt.setMinutes(tmp.minutes);
        }
        if (String(dt) === 'Invalid Date') return '';

        var type = 'am';
        var hour = dt.getHours();
        var h24  = dt.getHours();
        var min  = dt.getMinutes();
        var sec  = dt.getSeconds();
        if (min < 10) min = '0' + min;
        if (sec < 10) sec = '0' + sec;
        if (format.indexOf('am') !== -1 || format.indexOf('pm') !== -1) {
            if (hour >= 12) type = 'pm';
            if (hour > 12)  hour = hour - 12;
            if (hour === 0) hour = 12;
        }
        return format.toLowerCase()
            .replace('am', type)
            .replace('pm', type)
            .replace('hhh', (hour < 10 ? '0' + hour : hour))
            .replace('hh24', (h24 < 10 ? '0' + h24 : h24))
            .replace('h24', h24)
            .replace('hh', hour)
            .replace('mm', min)
            .replace('mi', min)
            .replace('ss', sec)
            .replace(/(^|[^a-z$])h/g, '$1' + hour)    // only y's that are not preceded by a letter
            .replace(/(^|[^a-z$])m/g, '$1' + min)     // only y's that are not preceded by a letter
            .replace(/(^|[^a-z$])s/g, '$1' + sec);    // only y's that are not preceded by a letter
    }

    function formatDateTime(dateStr, format) {
        var fmt;
        if (dateStr === '' || dateStr == null || (typeof dateStr === 'object' && !dateStr.getMonth)) return '';
        if (typeof format !== 'string') {
            fmt = [this.settings.dateFormat, this.settings.timeFormat];
        } else {
            fmt = format.split('|');
            fmt[0] = fmt[0].trim();
            fmt[1] = (fmt.length > 1 ? fmt[1].trim() : this.settings.timeFormat);
        }
        // older formats support
        if (fmt[1] === 'h12') fmt[1] = 'h:m pm';
        if (fmt[1] === 'h24') fmt[1] = 'h24:m';
        return this.formatDate(dateStr, fmt[0]) + ' ' + this.formatTime(dateStr, fmt[1]);
    }

    function stripTags (html) {
        if (html == null) return html;
        switch (typeof html) {
            case 'number':
                break;
            case 'string':
                html = String(html).replace(/<(?:[^>=]|='[^']*'|="[^"]*"|=[^'"][^\s>]*)*>/ig, "");
                break;
            case 'object':
                // does not modify original object, but creates a copy
                if (Array.isArray(html)) {
                    html = $.extend(true, [], html);
                    for (var i = 0; i < html.length; i++) html[i] = this.stripTags(html[i]);
                }  else {
                    html = $.extend(true, {}, html);
                    for (var i in html) html[i] = this.stripTags(html[i]);
                }
                break;
        }
        return html;
    }

    function encodeTags (html) {
        if (html == null) return html;
        switch (typeof html) {
            case 'number':
                break;
            case 'string':
                html = String(html).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                break;
            case 'object':
                // does not modify original object, but creates a copy
                if (Array.isArray(html)) {
                    html = $.extend(true, [], html);
                    for (var i = 0; i < html.length; i++) html[i] = this.encodeTags(html[i]);
                }  else {
                    html = $.extend(true, {}, html);
                    for (var i in html) html[i] = this.encodeTags(html[i]);
                }
                break;
        }
        return html;
    }

    function decodeTags (html) {
        if (html == null) return html;
        switch (typeof html) {
            case 'number':
                break;
            case 'string':
                html = String(html).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
                break;
            case 'object':
                // does not modify original object, but creates a copy
                if (Array.isArray(html)) {
                    html = $.extend(true, [], html);
                    for (var i = 0; i < html.length; i++) html[i] = this.decodeTags(html[i]);
                }  else {
                    html = $.extend(true, {}, html);
                    for (var i in html) html[i] = this.decodeTags(html[i]);
                }
                break;
        }
        return html;
    }

    function escapeId (id) {
        if (id === '' || id == null) return '';
        return String(id).replace(/([;&,\.\+\*\~'`:"\!\^#$%@\[\]\(\)=<>\|\/? {}\\])/g, '\\$1');
    }

    function base64encode (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        input = utf8_encode(input);

        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
        }

        function utf8_encode (string) {
            string = String(string).replace(/\r\n/g,"\n");
            var utftext = "";

            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        }

        return output;
    }

    function base64decode (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 !== 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = utf8_decode(output);

        function utf8_decode (utftext) {
            var string = "";
            var i = 0;
            var c = 0, c2, c3;

            while ( i < utftext.length ) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                }
                else if((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i+1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                }
                else {
                    c2 = utftext.charCodeAt(i+1);
                    c3 = utftext.charCodeAt(i+2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }

            return string;
        }

        return output;
    }

    function md5(input) {
        /*
         * Based on http://pajhome.org.uk/crypt/md5
         */

        var hexcase = 0;
        var b64pad = "";

        function __pj_crypt_hex_md5(s) {
            return __pj_crypt_rstr2hex(__pj_crypt_rstr_md5(__pj_crypt_str2rstr_utf8(s)));
        }
        function __pj_crypt_b64_md5(s) {
            return __pj_crypt_rstr2b64(__pj_crypt_rstr_md5(__pj_crypt_str2rstr_utf8(s)));
        }
        function __pj_crypt_any_md5(s, e) {
            return __pj_crypt_rstr2any(__pj_crypt_rstr_md5(__pj_crypt_str2rstr_utf8(s)), e);
        }
        function __pj_crypt_hex_hmac_md5(k, d)
        {
            return __pj_crypt_rstr2hex(__pj_crypt_rstr_hmac_md5(__pj_crypt_str2rstr_utf8(k), __pj_crypt_str2rstr_utf8(d)));
        }
        function __pj_crypt_b64_hmac_md5(k, d)
        {
            return __pj_crypt_rstr2b64(__pj_crypt_rstr_hmac_md5(__pj_crypt_str2rstr_utf8(k), __pj_crypt_str2rstr_utf8(d)));
        }
        function __pj_crypt_any_hmac_md5(k, d, e)
        {
            return __pj_crypt_rstr2any(__pj_crypt_rstr_hmac_md5(__pj_crypt_str2rstr_utf8(k), __pj_crypt_str2rstr_utf8(d)), e);
        }

        /*
         * Calculate the MD5 of a raw string
         */
        function __pj_crypt_rstr_md5(s)
        {
            return __pj_crypt_binl2rstr(__pj_crypt_binl_md5(__pj_crypt_rstr2binl(s), s.length * 8));
        }

        /*
         * Calculate the HMAC-MD5, of a key and some data (raw strings)
         */
        function __pj_crypt_rstr_hmac_md5(key, data)
        {
            var bkey = __pj_crypt_rstr2binl(key);
            if (bkey.length > 16)
                bkey = __pj_crypt_binl_md5(bkey, key.length * 8);

            var ipad = Array(16), opad = Array(16);
            for (var i = 0; i < 16; i++)
            {
                ipad[i] = bkey[i] ^ 0x36363636;
                opad[i] = bkey[i] ^ 0x5C5C5C5C;
            }

            var hash = __pj_crypt_binl_md5(ipad.concat(__pj_crypt_rstr2binl(data)), 512 + data.length * 8);
            return __pj_crypt_binl2rstr(__pj_crypt_binl_md5(opad.concat(hash), 512 + 128));
        }

        /*
         * Convert a raw string to a hex string
         */
        function __pj_crypt_rstr2hex(input)
        {
            try {
                hexcase
            } catch (e) {
                hexcase = 0;
            }
            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var output = "";
            var x;
            for (var i = 0; i < input.length; i++)
            {
                x = input.charCodeAt(i);
                output += hex_tab.charAt((x >>> 4) & 0x0F)
                        + hex_tab.charAt(x & 0x0F);
            }
            return output;
        }

        /*
         * Convert a raw string to a base-64 string
         */
        function __pj_crypt_rstr2b64(input)
        {
            try {
                b64pad
            } catch (e) {
                b64pad = '';
            }
            var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var output = "";
            var len = input.length;
            for (var i = 0; i < len; i += 3)
            {
                var triplet = (input.charCodeAt(i) << 16)
                        | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0)
                        | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
                for (var j = 0; j < 4; j++)
                {
                    if (i * 8 + j * 6 > input.length * 8)
                        output += b64pad;
                    else
                        output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
                }
            }
            return output;
        }

        /*
         * Convert a raw string to an arbitrary string encoding
         */
        function __pj_crypt_rstr2any(input, encoding)
        {
            var divisor = encoding.length;
            var i, j, q, x, quotient;

            /* Convert to an array of 16-bit big-endian values, forming the dividend */
            var dividend = Array(Math.ceil(input.length / 2));
            for (i = 0; i < dividend.length; i++)
            {
                dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
            }

            /*
             * Repeatedly perform a long division. The binary array forms the dividend,
             * the length of the encoding is the divisor. Once computed, the quotient
             * forms the dividend for the next step. All remainders are stored for later
             * use.
             */
            var full_length = Math.ceil(input.length * 8 /
                    (Math.log(encoding.length) / Math.log(2)));
            var remainders = Array(full_length);
            for (j = 0; j < full_length; j++)
            {
                quotient = Array();
                x = 0;
                for (i = 0; i < dividend.length; i++)
                {
                    x = (x << 16) + dividend[i];
                    q = Math.floor(x / divisor);
                    x -= q * divisor;
                    if (quotient.length > 0 || q > 0)
                        quotient[quotient.length] = q;
                }
                remainders[j] = x;
                dividend = quotient;
            }

            /* Convert the remainders to the output string */
            var output = "";
            for (i = remainders.length - 1; i >= 0; i--)
                output += encoding.charAt(remainders[i]);

            return output;
        }

        /*
         * Encode a string as utf-8.
         * For efficiency, this assumes the input is valid utf-16.
         */
        function __pj_crypt_str2rstr_utf8(input)
        {
            var output = "";
            var i = -1;
            var x, y;

            while (++i < input.length)
            {
                /* Decode utf-16 surrogate pairs */
                x = input.charCodeAt(i);
                y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
                if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)
                {
                    x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                    i++;
                }

                /* Encode output as utf-8 */
                if (x <= 0x7F)
                    output += String.fromCharCode(x);
                else if (x <= 0x7FF)
                    output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F),
                            0x80 | (x & 0x3F));
                else if (x <= 0xFFFF)
                    output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                            0x80 | ((x >>> 6) & 0x3F),
                            0x80 | (x & 0x3F));
                else if (x <= 0x1FFFFF)
                    output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                            0x80 | ((x >>> 12) & 0x3F),
                            0x80 | ((x >>> 6) & 0x3F),
                            0x80 | (x & 0x3F));
            }
            return output;
        }

        /*
         * Encode a string as utf-16
         */
        function __pj_crypt_str2rstr_utf16le(input)
        {
            var output = "";
            for (var i = 0; i < input.length; i++)
                output += String.fromCharCode(input.charCodeAt(i) & 0xFF,
                        (input.charCodeAt(i) >>> 8) & 0xFF);
            return output;
        }

        function __pj_crypt_str2rstr_utf16be(input)
        {
            var output = "";
            for (var i = 0; i < input.length; i++)
                output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF,
                        input.charCodeAt(i) & 0xFF);
            return output;
        }

        /*
         * Convert a raw string to an array of little-endian words
         * Characters >255 have their high-byte silently ignored.
         */
        function __pj_crypt_rstr2binl(input)
        {
            var output = Array(input.length >> 2);
            for (var i = 0; i < output.length; i++)
                output[i] = 0;
            for (var i = 0; i < input.length * 8; i += 8)
                output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
            return output;
        }

        /*
         * Convert an array of little-endian words to a string
         */
        function __pj_crypt_binl2rstr(input)
        {
            var output = "";
            for (var i = 0; i < input.length * 32; i += 8)
                output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
            return output;
        }

        /*
         * Calculate the MD5 of an array of little-endian words, and a bit length.
         */
        function __pj_crypt_binl_md5(x, len)
        {
            /* append padding */
            x[len >> 5] |= 0x80 << ((len) % 32);
            x[(((len + 64) >>> 9) << 4) + 14] = len;

            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;

            for (var i = 0; i < x.length; i += 16)
            {
                var olda = a;
                var oldb = b;
                var oldc = c;
                var oldd = d;

                a = __pj_crypt_md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                d = __pj_crypt_md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = __pj_crypt_md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = __pj_crypt_md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = __pj_crypt_md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = __pj_crypt_md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = __pj_crypt_md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = __pj_crypt_md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = __pj_crypt_md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = __pj_crypt_md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = __pj_crypt_md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                b = __pj_crypt_md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = __pj_crypt_md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = __pj_crypt_md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = __pj_crypt_md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = __pj_crypt_md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

                a = __pj_crypt_md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = __pj_crypt_md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = __pj_crypt_md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                b = __pj_crypt_md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                a = __pj_crypt_md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = __pj_crypt_md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = __pj_crypt_md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = __pj_crypt_md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = __pj_crypt_md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = __pj_crypt_md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = __pj_crypt_md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = __pj_crypt_md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = __pj_crypt_md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = __pj_crypt_md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = __pj_crypt_md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = __pj_crypt_md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

                a = __pj_crypt_md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                d = __pj_crypt_md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = __pj_crypt_md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = __pj_crypt_md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = __pj_crypt_md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = __pj_crypt_md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = __pj_crypt_md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = __pj_crypt_md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = __pj_crypt_md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = __pj_crypt_md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                c = __pj_crypt_md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = __pj_crypt_md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = __pj_crypt_md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = __pj_crypt_md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = __pj_crypt_md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = __pj_crypt_md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

                a = __pj_crypt_md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                d = __pj_crypt_md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = __pj_crypt_md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = __pj_crypt_md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = __pj_crypt_md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = __pj_crypt_md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = __pj_crypt_md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = __pj_crypt_md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = __pj_crypt_md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = __pj_crypt_md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = __pj_crypt_md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                b = __pj_crypt_md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = __pj_crypt_md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = __pj_crypt_md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = __pj_crypt_md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = __pj_crypt_md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

                a = __pj_crypt_safe_add(a, olda);
                b = __pj_crypt_safe_add(b, oldb);
                c = __pj_crypt_safe_add(c, oldc);
                d = __pj_crypt_safe_add(d, oldd);
            }
            return Array(a, b, c, d);
        }

        /*
         * These functions implement the four basic operations the algorithm uses.
         */
        function __pj_crypt_md5_cmn(q, a, b, x, s, t)
        {
            return __pj_crypt_safe_add(__pj_crypt_bit_rol(__pj_crypt_safe_add(__pj_crypt_safe_add(a, q), __pj_crypt_safe_add(x, t)), s), b);
        }
        function __pj_crypt_md5_ff(a, b, c, d, x, s, t)
        {
            return __pj_crypt_md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
        }
        function __pj_crypt_md5_gg(a, b, c, d, x, s, t)
        {
            return __pj_crypt_md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
        }
        function __pj_crypt_md5_hh(a, b, c, d, x, s, t)
        {
            return __pj_crypt_md5_cmn(b ^ c ^ d, a, b, x, s, t);
        }
        function __pj_crypt_md5_ii(a, b, c, d, x, s, t)
        {
            return __pj_crypt_md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
        }

        /*
         * Add integers, wrapping at 2^32. This uses 16-bit operations internally
         * to work around bugs in some JS interpreters.
         */
        function __pj_crypt_safe_add(x, y)
        {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        }

        /*
         * Bitwise rotate a 32-bit number to the left.
         */
        function __pj_crypt_bit_rol(num, cnt)
        {
            return (num << cnt) | (num >>> (32 - cnt));
        }

        return __pj_crypt_hex_md5(input);

    }

    function transition (div_old, div_new, type, callBack) {
        var width  = $(div_old).width();
        var height = $(div_old).height();
        var time   = 0.5;

        if (!div_old || !div_new) {
            console.log('ERROR: Cannot do transition when one of the divs is null');
            return;
        }

        div_old.parentNode.style.cssText += 'perspective: 900px; overflow: hidden;';
        div_old.style.cssText += '; position: absolute; z-index: 1019; backface-visibility: hidden';
        div_new.style.cssText += '; position: absolute; z-index: 1020; backface-visibility: hidden';

        switch (type) {
            case 'slide-left':
                // init divs
                div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0)';
                div_new.style.cssText += 'overflow: hidden; transform: translate3d('+ width + 'px, 0, 0)';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; transform: translate3d(0, 0, 0)';
                    div_old.style.cssText += 'transition: '+ time +'s; transform: translate3d(-'+ width +'px, 0, 0)';
                }, 1);
                break;

            case 'slide-right':
                // init divs
                div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0)';
                div_new.style.cssText += 'overflow: hidden; transform: translate3d(-'+ width +'px, 0, 0)';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; transform: translate3d(0px, 0, 0)';
                    div_old.style.cssText += 'transition: '+ time +'s; transform: translate3d('+ width +'px, 0, 0)';
                }, 1);
                break;

            case 'slide-down':
                // init divs
                div_old.style.cssText += 'overflow: hidden; z-index: 1; transform: translate3d(0, 0, 0)';
                div_new.style.cssText += 'overflow: hidden; z-index: 0; transform: translate3d(0, 0, 0)';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; transform: translate3d(0, 0, 0)';
                    div_old.style.cssText += 'transition: '+ time +'s; transform: translate3d(0, '+ height +'px, 0)';
                }, 1);
                break;

            case 'slide-up':
                // init divs
                div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0)';
                div_new.style.cssText += 'overflow: hidden; transform: translate3d(0, '+ height +'px, 0)';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; transform: translate3d(0, 0, 0)';
                    div_old.style.cssText += 'transition: '+ time +'s; transform: translate3d(0, 0, 0)';
                }, 1);
                break;

            case 'flip-left':
                // init divs
                div_old.style.cssText += 'overflow: hidden; transform: rotateY(0deg)';
                div_new.style.cssText += 'overflow: hidden; transform: rotateY(-180deg)';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; transform: rotateY(0deg)';
                    div_old.style.cssText += 'transition: '+ time +'s; transform: rotateY(180deg)';
                }, 1);
                break;

            case 'flip-right':
                // init divs
                div_old.style.cssText += 'overflow: hidden; transform: rotateY(0deg)';
                div_new.style.cssText += 'overflow: hidden; transform: rotateY(180deg)';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; transform: rotateY(0deg)';
                    div_old.style.cssText += 'transition: '+ time +'s; transform: rotateY(-180deg)';
                }, 1);
                break;

            case 'flip-down':
                // init divs
                div_old.style.cssText += 'overflow: hidden; transform: rotateX(0deg)';
                div_new.style.cssText += 'overflow: hidden; transform: rotateX(180deg)';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; transform: rotateX(0deg)';
                    div_old.style.cssText += 'transition: '+ time +'s; transform: rotateX(-180deg)';
                }, 1);
                break;

            case 'flip-up':
                // init divs
                div_old.style.cssText += 'overflow: hidden; transform: rotateX(0deg)';
                div_new.style.cssText += 'overflow: hidden; transform: rotateX(-180deg)';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; transform: rotateX(0deg)';
                    div_old.style.cssText += 'transition: '+ time +'s; transform: rotateX(180deg)';
                }, 1);
                break;

            case 'pop-in':
                // init divs
                div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0)';
                div_new.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0); transform: scale(.8); opacity: 0;';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; transform: scale(1); opacity: 1;';
                    div_old.style.cssText += 'transition: '+ time +'s;';
                }, 1);
                break;

            case 'pop-out':
                // init divs
                div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0); transform: scale(1); opacity: 1;';
                div_new.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0); opacity: 0;';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; opacity: 1;';
                    div_old.style.cssText += 'transition: '+ time +'s; transform: scale(1.7); opacity: 0;';
                }, 1);
                break;

            default:
                // init divs
                div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0)';
                div_new.style.cssText += 'overflow: hidden; translate3d(0, 0, 0); opacity: 0;';
                $(div_new).show();
                // -- need a timing function because otherwise not working
                window.setTimeout(function() {
                    div_new.style.cssText += 'transition: '+ time +'s; opacity: 1;';
                    div_old.style.cssText += 'transition: '+ time +'s';
                }, 1);
                break;
        }

        setTimeout(function () {
            if (type === 'slide-down') {
                $(div_old).css('z-index', '1019');
                $(div_new).css('z-index', '1020');
            }
            if (div_new) {
                $(div_new).css({ 'opacity': '1' }).css(w2utils.cssPrefix({
                    'transition': '',
                    'transform' : ''
                }));
            }
            if (div_old) {
                $(div_old).css({ 'opacity': '1' }).css(w2utils.cssPrefix({
                    'transition': '',
                    'transform' : ''
                }));
            }
            if (typeof callBack === 'function') callBack();
        }, time * 1000);
    }

    function lock (box, msg, spinner) {
        var options = {};
        if (typeof msg === 'object') {
            options = msg;
        } else {
            options.msg     = msg;
            options.spinner = spinner;
        }
        if (!options.msg && options.msg !== 0) options.msg = '';
        w2utils.unlock(box);
        $(box).prepend(
            '<div class="w2ui-lock"></div>'+
            '<div class="w2ui-lock-msg"></div>'
        );
        var $lock = $(box).find('.w2ui-lock');
        var mess = $(box).find('.w2ui-lock-msg');
        if (!options.msg) mess.css({ 'background-color': 'transparent', 'border': '0px' });
        if (options.spinner === true) options.msg = '<div class="w2ui-spinner" '+ (!options.msg ? 'style="width: 35px; height: 35px"' : '') +'></div>' + options.msg;
        if (options.opacity != null) $lock.css('opacity', options.opacity);
        if (typeof $lock.fadeIn === 'function') {
            $lock.fadeIn(200);
            mess.html(options.msg).fadeIn(200);
        } else {
            $lock.show();
            mess.html(options.msg).show(0);
        }
    }

    function unlock (box, speed) {
        if (isInt(speed)) {
            $(box).find('.w2ui-lock').fadeOut(speed);
            setTimeout(function () {
                $(box).find('.w2ui-lock').remove();
                $(box).find('.w2ui-lock-msg').remove();
            }, speed);
        } else {
            $(box).find('.w2ui-lock').remove();
            $(box).find('.w2ui-lock-msg').remove();
        }
    }

    /**
    *  Used in w2popup, w2grid, w2form, w2layout
    *  should be called with .call(...) method
    */

    function message(where, options) {
        var obj = this, closeTimer, edata;
        // var where.path    = 'w2popup';
        // var where.title   = '.w2ui-popup-title';
        // var where.body    = '.w2ui-box';
        $().w2tag(); // hide all tags
        if (!options) options = { width: 200, height: 100 };
        if (options.on == null) $.extend(options, w2utils.event);
        if (options.width == null) options.width = 200;
        if (options.height == null) options.height = 100;
        var pWidth  = parseInt($(where.box).width());
        var pHeight = parseInt($(where.box).height());
        var titleHeight = parseInt($(where.box).find(where.title).css('height') || 0);
        if (options.width > pWidth) options.width = pWidth - 10;
        if (options.height > pHeight - titleHeight) options.height = pHeight - 10 - titleHeight;
        options.originalWidth  = options.width;
        options.originalHeight = options.height;
        if (parseInt(options.width) < 0)   options.width  = pWidth + options.width;
        if (parseInt(options.width) < 10)  options.width  = 10;
        if (parseInt(options.height) < 0)  options.height  = pHeight + options.height - titleHeight;
        if (parseInt(options.height) < 10) options.height = 10;
        if (options.hideOnClick == null) options.hideOnClick = false;
        var poptions = $(where.box).data('options') || {};
        if (options.width == null || options.width > poptions.width - 10) {
            options.width = poptions.width - 10;
        }
        if (options.height == null || options.height > poptions.height - titleHeight - 5) {
            options.height = poptions.height - titleHeight - 5; // need margin from bottom only
        }
        // negative value means margin
        if (options.originalHeight < 0) options.height = pHeight + options.originalHeight - titleHeight;
        if (options.originalWidth < 0) options.width = pWidth + options.originalWidth * 2; // x 2 because there is left and right margin
        var head = $(where.box).find(where.title);

        // if some messages are closing, insta close them
        var $tmp = $(where.box).find('.w2ui-message.w2ui-closing');
        if ($(where.box).find('.w2ui-message.w2ui-closing').length > 0) {
            clearTimeout(closeTimer);
            closeCB($tmp, $tmp.data('options') || {});
        }
        var msgCount = $(where.box).find('.w2ui-message').length;
        // remove message
        if ($.trim(options.html) === '' && $.trim(options.body) === '' && $.trim(options.buttons) === '') {
            if (msgCount === 0) return; // no messages at all
            var $msg = $(where.box).find('#w2ui-message'+ (msgCount-1));
            var options = $msg.data('options') || {};
            // before event
            edata = options.trigger({ phase: 'before', type: 'close', target: 'self' });
            if (edata.isCancelled === true) return;
            // default behavior
            $msg.css(w2utils.cssPrefix({
                'transition': '0.15s',
                'transform': 'translateY(-' + options.height + 'px)'
            })).addClass('w2ui-closing');
            if (msgCount === 1) {
                if (this.unlock) {
                    if (where.param) this.unlock(where.param, 150); else this.unlock(150);
                }
            } else {
                $(where.box).find('#w2ui-message'+ (msgCount-2)).css('z-index', 1500);
            }
            closeTimer = setTimeout(function () { closeCB($msg, options); }, 150);

        } else {

            if ($.trim(options.body) !== '' || $.trim(options.buttons) !== '') {
                options.html = '<div class="w2ui-message-body">'+ (options.body || '') +'</div>'+
                    '<div class="w2ui-message-buttons">'+ (options.buttons || '') +'</div>';
            }
            // hide previous messages
            $(where.box).find('.w2ui-message').css('z-index', 1390);
            head.data('old-z-index', head.css('z-index'));
            head.css('z-index', 1501);
            // add message
            $(where.box).find(where.body)
                .before('<div id="w2ui-message' + msgCount + '" onmousedown="event.stopPropagation();" '+
                        '   class="w2ui-message" style="display: none; z-index: 1500; ' +
                            (head.length === 0 ? 'top: 0px;' : 'top: ' + w2utils.getSize(head, 'height') + 'px;') +
                            (options.width  != null ? 'width: ' + options.width + 'px; left: ' + ((pWidth - options.width) / 2) + 'px;' : 'left: 10px; right: 10px;') +
                            (options.height != null ? 'height: ' + options.height + 'px;' : 'bottom: 6px;') +
                            w2utils.cssPrefix('transition', '.3s', true) + '"' +
                            (options.hideOnClick === true
                                ? where.param
                                    ? 'onclick="'+ where.path +'.message(\''+ where.param +'\');"'
                                    : 'onclick="'+ where.path +'.message();"'
                                : '') + '>' +
                        '</div>');
            $(where.box).find('#w2ui-message'+ msgCount)
                .data('options', options)
                .data('prev_focus', $(':focus'));
            var display = $(where.box).find('#w2ui-message'+ msgCount).css('display');
            $(where.box).find('#w2ui-message'+ msgCount).css(w2utils.cssPrefix({
                'transform': (display === 'none' ? 'translateY(-' + options.height + 'px)' : 'translateY(0px)')
            }));
            if (display === 'none') {
                $(where.box).find('#w2ui-message'+ msgCount).show().html(options.html);
                options.box = $(where.box).find('#w2ui-message'+ msgCount);
                // before event
                edata = options.trigger({ phase: 'before', type: 'open', target: 'self' });
                if (edata.isCancelled === true) {
                    head.css('z-index', head.data('old-z-index'));
                    $(where.box).find('#w2ui-message'+ msgCount).remove();
                    return;
                }
                // timer needs to animation
                setTimeout(function () {
                    $(where.box).find('#w2ui-message'+ msgCount).css(w2utils.cssPrefix({
                        'transform': (display === 'none' ? 'translateY(0px)' : 'translateY(-' + options.height + 'px)')
                    }));
                }, 1);
                // timer for lock
                if (msgCount === 0 && this.lock) {
                    if (where.param) this.lock(where.param); else this.lock();
                }
                setTimeout(function() {
                    // has to be on top of lock
                    $(where.box).find('#w2ui-message'+ msgCount).css(w2utils.cssPrefix({ 'transition': '0s' }));
                    // event after
                    options.trigger($.extend(edata, { phase: 'after' }));
                }, 350);
            }
        }

        function closeCB($msg, options) {
            if (edata == null) {
                // before event
                edata = options.trigger({ phase: 'before', type: 'open', target: 'self' });
                if (edata.isCancelled === true) {
                    head.css('z-index', head.data('old-z-index'));
                    $(where.box).find('#w2ui-message'+ msgCount).remove();
                    return;
                }
            }
            var $focus = $msg.data('prev_focus');
            $msg.remove();
            if ($focus && $focus.length > 0) {
                $focus.focus();
            } else {
                if (obj && obj.focus) obj.focus();
            }
            head.css('z-index', head.data('old-z-index'));
            // event after
            options.trigger($.extend(edata, { phase: 'after' }));
        }
    }

    function getSize (el, type) {
        var $el = $(el);
        var bwidth = {
            left    : parseInt($el.css('border-left-width')) || 0,
            right   : parseInt($el.css('border-right-width')) || 0,
            top     : parseInt($el.css('border-top-width')) || 0,
            bottom  : parseInt($el.css('border-bottom-width')) || 0
        };
        var mwidth = {
            left    : parseInt($el.css('margin-left')) || 0,
            right   : parseInt($el.css('margin-right')) || 0,
            top     : parseInt($el.css('margin-top')) || 0,
            bottom  : parseInt($el.css('margin-bottom')) || 0
        };
        var pwidth = {
            left    : parseInt($el.css('padding-left')) || 0,
            right   : parseInt($el.css('padding-right')) || 0,
            top     : parseInt($el.css('padding-top')) || 0,
            bottom  : parseInt($el.css('padding-bottom')) || 0
        };
        switch (type) {
            case 'top'      : return bwidth.top + mwidth.top + pwidth.top;
            case 'bottom'   : return bwidth.bottom + mwidth.bottom + pwidth.bottom;
            case 'left'     : return bwidth.left + mwidth.left + pwidth.left;
            case 'right'    : return bwidth.right + mwidth.right + pwidth.right;
            case 'width'    : return bwidth.left + bwidth.right + mwidth.left + mwidth.right + pwidth.left + pwidth.right + parseInt($el.width());
            case 'height'   : return bwidth.top + bwidth.bottom + mwidth.top + mwidth.bottom + pwidth.top + pwidth.bottom + parseInt($el.height());
            case '+width'   : return bwidth.left + bwidth.right + mwidth.left + mwidth.right + pwidth.left + pwidth.right;
            case '+height'  : return bwidth.top + bwidth.bottom + mwidth.top + mwidth.bottom + pwidth.top + pwidth.bottom;
        }
        return 0;
    }

    function getStrWidth (str, styles) {
        var w, html = '<div id="_tmp_width" style="position: absolute; top: -900px;'+ (styles || '') +'">'+
                        encodeTags(str) +
                      '</div>';
        $('body').append(html);
        w = $('#_tmp_width').width();
        $('#_tmp_width').remove();
        return w;
    }

    function lang (phrase) {
        var translation = this.settings.phrases[phrase];
        if (translation == null) return phrase; else return translation;
    }

    function locale (locale, callBack) {
        if (!locale) locale = 'en-us';

        // if the locale is an object, not a string, than we assume it's a
        if (typeof locale !== "string" ) {
            w2utils.settings = $.extend(true, w2utils.settings, locale);
            return;
        }

        if (locale.length === 5) locale = 'locale/'+ locale +'.json';

        // clear phrases from language before
        w2utils.settings.phrases = {};

        // load from the file
        $.ajax({
            url      : locale,
            type     : "GET",
            dataType : "JSON",
            success  : function (data, status, xhr) {
                w2utils.settings = $.extend(true, w2utils.settings, data);
                if (typeof callBack === 'function') callBack();
            },
            error    : function (xhr, status, msg) {
                console.log('ERROR: Cannot load locale '+ locale);
            }
        });
    }

    function scrollBarSize () {
        if (tmp.scrollBarSize) return tmp.scrollBarSize;
        var html =
            '<div id="_scrollbar_width" style="position: absolute; top: -300px; width: 100px; height: 100px; overflow-y: scroll;">'+
            '    <div style="height: 120px">1</div>'+
            '</div>';
        $('body').append(html);
        tmp.scrollBarSize = 100 - $('#_scrollbar_width > div').width();
        $('#_scrollbar_width').remove();
        if (String(navigator.userAgent).indexOf('MSIE') >= 0) tmp.scrollBarSize  = tmp.scrollBarSize / 2; // need this for IE9+
        return tmp.scrollBarSize;
    }

    function checkName (params, component) { // was w2checkNameParam
        if (!params || params.name == null) {
            console.log('ERROR: The parameter "name" is required but not supplied in $().'+ component +'().');
            return false;
        }
        if (w2ui[params.name] != null) {
            console.log('ERROR: The parameter "name" is not unique. There are other objects already created with the same name (obj: '+ params.name +').');
            return false;
        }
        if (!w2utils.isAlphaNumeric(params.name)) {
            console.log('ERROR: The parameter "name" has to be alpha-numeric (a-z, 0-9, dash and underscore). ');
            return false;
        }
        return true;
    }

    function checkUniqueId (id, items, itemsDecription, objName) { // was w2checkUniqueId
        if (!$.isArray(items)) items = [items];
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                console.log('ERROR: The parameter "id='+ id +'" is not unique within the current '+ itemsDecription +'. (obj: '+ objName +')');
                return false;
            }
        }
        return true;
    }

    function parseRoute(route) {
        var keys = [];
        var path = route
            .replace(/\/\(/g, '(?:/')
            .replace(/\+/g, '__plus__')
            .replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(_, slash, format, key, capture, optional) {
                keys.push({ name: key, optional: !! optional });
                slash = slash || '';
                return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (format || '') + (capture || (format && '([^/.]+?)' || '([^/]+?)')) + ')' + (optional || '');
            })
            .replace(/([\/.])/g, '\\$1')
            .replace(/__plus__/g, '(.+)')
            .replace(/\*/g, '(.*)');
        return {
            path  : new RegExp('^' + path + '$', 'i'),
            keys  : keys
        };
    }

    function cssPrefix(field, value, returnString) {
        var css    = {};
        var newCSS = {};
        var ret    = '';
        if (!$.isPlainObject(field)) {
            css[field] = value;
        } else {
            css = field;
            if (value === true) returnString = true;
        }
        for (var c in css) {
            newCSS[c] = css[c];
            newCSS['-webkit-'+c] = css[c];
            newCSS['-moz-'+c]    = css[c].replace('-webkit-', '-moz-');
            newCSS['-ms-'+c]     = css[c].replace('-webkit-', '-ms-');
            newCSS['-o-'+c]      = css[c].replace('-webkit-', '-o-');
        }
        if (returnString === true) {
            for (var c in newCSS) {
                ret += c + ': ' + newCSS[c] + '; ';
            }
        } else {
            ret = newCSS;
        }
        return ret;
    }

    function getCursorPosition(input) {
        if (input == null) return null;
        var caretOffset = 0;
        var doc = input.ownerDocument || input.document;
        var win = doc.defaultView || doc.parentWindow;
        var sel;
        if (input.tagName && input.tagName.toUpperCase() === 'INPUT' && input.selectionStart) {
            // standards browser
            caretOffset = input.selectionStart;
        } else {
            if (win.getSelection) {
                sel = win.getSelection();
                if (sel.rangeCount > 0) {
                    var range = sel.getRangeAt(0);
                    var preCaretRange = range.cloneRange();
                    preCaretRange.selectNodeContents(input);
                    preCaretRange.setEnd(range.endContainer, range.endOffset);
                    caretOffset = preCaretRange.toString().length;
                }
            } else if ( (sel = doc.selection) && sel.type !== "Control") {
                var textRange = sel.createRange();
                var preCaretTextRange = doc.body.createTextRange();
                preCaretTextRange.moveToElementText(input);
                preCaretTextRange.setEndPoint("EndToEnd", textRange);
                caretOffset = preCaretTextRange.text.length;
            }
        }
        return caretOffset;
    }

    function setCursorPosition(input, pos, posEnd) {
        var range = document.createRange();
        var el, sel = window.getSelection();
        if (input == null) return;
        for (var i = 0; i < input.childNodes.length; i++) {
            var tmp = $(input.childNodes[i]).text();
            if (input.childNodes[i].tagName) {
                tmp = $(input.childNodes[i]).html();
                tmp = tmp.replace(/&lt;/g, '<')
                         .replace(/&gt;/g, '>')
                         .replace(/&amp;/g, '&')
                         .replace(/&quot;/g, '"')
                         .replace(/&nbsp;/g, ' ');
            }
            if (pos <= tmp.length) {
                el = input.childNodes[i];
                if (el.childNodes && el.childNodes.length > 0) el = el.childNodes[0];
                if (el.childNodes && el.childNodes.length > 0) el = el.childNodes[0];
                break;
            } else {
                pos -= tmp.length;
            }
        }
        if (el == null) return;
        if (pos > el.length) pos = el.length;
        range.setStart(el, pos);
        if (posEnd) {
            range.setEnd(el, posEnd);
        } else {
            range.collapse(true);
        }
        sel.removeAllRanges();
        sel.addRange(range);
    }

    function testLocalStorage() {
        // test if localStorage is available, see issue #1282
        // original code: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js
        var str = 'w2ui_test';
        try {
          localStorage.setItem(str, str);
          localStorage.removeItem(str);
          return true;
        } catch (e) {
          return false;
        }
    }

    function parseColor(str) {
        if (typeof str !== 'string') return null; else str = str.trim().toUpperCase();
        if (str[0] === '#') str = str.substr(1);
        var color = {};
        if (str.length === 3) {
            color = {
                r: parseInt(str[0] + str[0], 16),
                g: parseInt(str[1] + str[1], 16),
                b: parseInt(str[2] + str[2], 16),
                a: 1
            }
        } else if (str.length === 6) {
            color = {
                r: parseInt(str.substr(0, 2), 16),
                g: parseInt(str.substr(2, 2), 16),
                b: parseInt(str.substr(4, 2), 16),
                a: 1
            }
        } else if (str.length === 8) {
            color = {
                r: parseInt(str.substr(0, 2), 16),
                g: parseInt(str.substr(2, 2), 16),
                b: parseInt(str.substr(4, 2), 16),
                a: Math.round(parseInt(str.substr(6, 2), 16) / 255 * 100) / 100 // alpha channel 0-1
            }
        } else if (str.length > 4 && str.substr(0, 4) === 'RGB(') {
            var tmp = str.replace('RGB', '').replace(/\(/g, '').replace(/\)/g, '').split(',');
            color = {
                r: parseInt(tmp[0], 10),
                g: parseInt(tmp[1], 10),
                b: parseInt(tmp[2], 10),
                a: 1
            }
        } else if (str.length > 5 && str.substr(0, 5) === 'RGBA(') {
            var tmp = str.replace('RGBA', '').replace(/\(/g, '').replace(/\)/g, '').split(',');
            color = {
                r: parseInt(tmp[0], 10),
                g: parseInt(tmp[1], 10),
                b: parseInt(tmp[2], 10),
                a: parseFloat(tmp[3])
            }
        } else {
            // word color
            return null;
        }
        return color;
    }

    // h=0..360, s=0..100, v=0..100
    function hsv2rgb(h, s, v, a) {
        var r, g, b, i, f, p, q, t;
        if (arguments.length === 1) {
            s = h.s; v = h.v; a = h.a; h = h.h;
        }
        h = h / 360;
        s = s / 100;
        v = v / 100;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255),
            a: (a != null ? a : 1)
        };
    }

    // r=0..255, g=0..255, b=0..255
    function rgb2hsv(r, g, b, a) {
        if (arguments.length === 1) {
            g = r.g; b = r.b; a = r.a; r = r.r;
        }
        var max = Math.max(r, g, b), min = Math.min(r, g, b),
            d = max - min,
            h,
            s = (max === 0 ? 0 : d / max),
            v = max / 255;
        switch (max) {
            case min: h = 0; break;
            case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
            case g: h = (b - r) + d * 2; h /= 6 * d; break;
            case b: h = (r - g) + d * 4; h /= 6 * d; break;
        }
        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            v: Math.round(v * 100),
            a: (a != null ? a : 1)
        }
    }

    function tooltip(msg, options) {
        var actions, showOn = 'mouseenter', hideOn = 'mouseleave'
        options = options || {}
        if (options.showOn) {
            showOn = options.showOn
            delete options.showOn
        }
        if (options.hideOn) {
            hideOn = options.hideOn
            delete options.hideOn
        }
        // base64 is needed to avoid '"<> and other special chars conflicts
        actions = 'on'+ showOn +'="$(this).w2tag(w2utils.base64decode(\'' + w2utils.base64encode(msg) + '\'),'
                + 'JSON.parse(w2utils.base64decode(\'' + w2utils.base64encode(JSON.stringify(options)) + '\')))"'
                + 'on'+ hideOn +'="$(this).w2tag()"'

        return actions
    }

    /*! from litejs.com / MIT Licence
        https://github.com/litejs/natural-compare-lite/blob/master/index.js */
    /*
     * @version    1.4.0
     * @date       2015-10-26
     * @stability  3 - Stable
     * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
     * @license    MIT License
     */
    function naturalCompare(a, b) {
        var i, codeA
        , codeB = 1
        , posA = 0
        , posB = 0
        , alphabet = String.alphabet;

        function getCode(str, pos, code) {
            if (code) {
                for (i = pos; code = getCode(str, i), code < 76 && code > 65;) ++i;
                return +str.slice(pos - 1, i);
            }
            code = alphabet && alphabet.indexOf(str.charAt(pos));
            return code > -1 ? code + 76 : ((code = str.charCodeAt(pos) || 0), code < 45 || code > 127) ? code
                : code < 46 ? 65               // -
                : code < 48 ? code - 1
                : code < 58 ? code + 18        // 0-9
                : code < 65 ? code - 11
                : code < 91 ? code + 11        // A-Z
                : code < 97 ? code - 37
                : code < 123 ? code + 5        // a-z
                : code - 63;
        }


        if ((a+="") != (b+="")) for (;codeB;) {
            codeA = getCode(a, posA++);
            codeB = getCode(b, posB++);

            if (codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
                codeA = getCode(a, posA, posA);
                codeB = getCode(b, posB, posA = i);
                posB = i;
            }

            if (codeA != codeB) return (codeA < codeB) ? -1 : 1;
        }
        return 0;
    }
})(jQuery);

/***********************************************************
*  Formatters object
*  --- Primariy used in grid
*
*********************************************************/

w2utils.formatters = {

    'number': function (value, params) {
        if (parseInt(params) > 20) params = 20;
        if (parseInt(params) < 0) params = 0;
        if (value == null || value === '') return '';
        return w2utils.formatNumber(parseFloat(value), params, true);
    },

    'float': function (value, params) {
        return w2utils.formatters['number'](value, params);
    },

    'int': function (value, params) {
        return w2utils.formatters['number'](value, 0);
    },

    'money': function (value, params) {
        if (value == null || value === '') return '';
        var data = w2utils.formatNumber(Number(value), w2utils.settings.currencyPrecision || 2);
        return (w2utils.settings.currencyPrefix || '') + data + (w2utils.settings.currencySuffix || '');
    },

    'currency': function (value, params) {
        return w2utils.formatters['money'](value, params);
    },

    'percent': function (value, params) {
        if (value == null || value === '') return '';
        return w2utils.formatNumber(value, params || 1) + '%';
    },

    'size': function (value, params) {
        if (value == null || value === '') return '';
        return w2utils.formatSize(parseInt(value));
    },

    'date': function (value, params) {
        if (params === '') params = w2utils.settings.dateFormat;
        if (value == null || value === 0 || value === '') return '';
        var dt = w2utils.isDateTime(value, params, true);
        if (dt === false) dt = w2utils.isDate(value, params, true);
        return '<span title="'+ dt +'">' + w2utils.formatDate(dt, params) + '</span>';
    },

    'datetime': function (value, params) {
        if (params === '') params = w2utils.settings.datetimeFormat;
        if (value == null || value === 0 || value === '') return '';
        var dt = w2utils.isDateTime(value, params, true);
        if (dt === false) dt = w2utils.isDate(value, params, true);
        return '<span title="'+ dt +'">' + w2utils.formatDateTime(dt, params) + '</span>';
    },

    'time': function (value, params) {
        if (params === '') params = w2utils.settings.timeFormat;
        if (params === 'h12') params = 'hh:mi pm';
        if (params === 'h24') params = 'h24:mi';
        if (value == null || value === 0 || value === '') return '';
        var dt = w2utils.isDateTime(value, params, true);
        if (dt === false) dt = w2utils.isDate(value, params, true);
        return '<span title="'+ dt +'">' + w2utils.formatTime(value, params) + '</span>';
    },

    'timestamp': function (value, params) {
        if (params === '') params = w2utils.settings.datetimeFormat;
        if (value == null || value === 0 || value === '') return '';
        var dt = w2utils.isDateTime(value, params, true);
        if (dt === false) dt = w2utils.isDate(value, params, true);
        return dt.toString ? dt.toString() : '';
    },

    'gmt': function (value, params) {
        if (params === '') params = w2utils.settings.datetimeFormat;
        if (value == null || value === 0 || value === '') return '';
        var dt = w2utils.isDateTime(value, params, true);
        if (dt === false) dt = w2utils.isDate(value, params, true);
        return dt.toUTCString ? dt.toUTCString() : '';
    },

    'age': function (value, params) {
        if (value == null || value === 0 || value === '') return '';
        var dt = w2utils.isDateTime(value, null, true);
        if (dt === false) dt = w2utils.isDate(value, null, true);
        return '<span title="'+ dt +'">' + w2utils.age(value) + (params ? (' ' + params) : '') + '</span>';
    },

    'interval': function (value, params) {
        if (value == null || value === 0 || value === '') return '';
        return w2utils.interval(value) + (params ? (' ' + params) : '');
    },

    'toggle': function (value, params) {
        return (value ? 'Yes' : '');
    },

    'password': function (value, params) {
        var ret = "";
        for (var i=0; i < value.length; i++) {
            ret += "*";
        }
        return ret;
    }
};

/***********************************************************
*  Generic Event Object
*  --- This object is reused across all other
*  --- widgets in w2ui.
*
*********************************************************/

w2utils.event = {

    on: function (edata, handler) {
        var $ = jQuery;
        var scope;
        // allow 'eventName.scope' syntax
        if (typeof edata === 'string' && edata.indexOf('.') !== -1) {
            var tmp = edata.split('.');
            edata = tmp[0];
            scope = tmp[1];
        }
        // allow 'eventName:after' syntax
        if (typeof edata === 'string' && edata.indexOf(':') !== -1) {
            var tmp = edata.split(':');
            if (['complete', 'done'].indexOf(edata[1]) !== -1) edata[1] = 'after';
            edata = {
                type    : tmp[0],
                execute : tmp[1]
            };
            if (scope) edata.scope = scope
        }
        if (!$.isPlainObject(edata)) edata = { type: edata, scope: scope };
        edata = $.extend({ type: null, execute: 'before', target: null, onComplete: null }, edata);
        // errors
        if (!edata.type) { console.log('ERROR: You must specify event type when calling .on() method of '+ this.name); return; }
        if (!handler) { console.log('ERROR: You must specify event handler function when calling .on() method of '+ this.name); return; }
        if (!$.isArray(this.handlers)) this.handlers = [];
        this.handlers.push({ edata: edata, handler: handler });
        return this; // needed for chaining
    },

    off: function (edata, handler) {
        var $ = jQuery;
        var scope;
        // allow 'eventName.scope' syntax
        if (typeof edata === 'string' && edata.indexOf('.') !== -1) {
            var tmp = edata.split('.');
            edata = tmp[0];
            scope = tmp[1];
            if (edata === '') edata = '*'
        }
        // allow 'eventName:after' syntax
        if (typeof edata === 'string' && edata.indexOf(':') !== -1) {
            var tmp = edata.split(':');
            if (['complete', 'done'].indexOf(edata[1]) !== -1) edata[1] = 'after';
            edata = {
                type    : tmp[0],
                execute : tmp[1]
            };
        }
        if (!$.isPlainObject(edata)) edata = { type: edata };
        edata = $.extend({}, { type: null, execute: null, target: null, onComplete: null }, edata);
        // errors
        if (!edata.type && !scope) { console.log('ERROR: You must specify event type when calling .off() method of '+ this.name); return; }
        if (!handler) { handler = null; }
        // remove handlers
        var newHandlers = [];
        for (var h = 0, len = this.handlers.length; h < len; h++) {
            var t = this.handlers[h];
            if ((t.edata.type === edata.type || edata.type === '*' || (t.edata.scope != null && edata.type == '')) &&
                (t.edata.target === edata.target || edata.target == null) &&
                (t.edata.execute === edata.execute || edata.execute == null) &&
                ((t.handler === handler && handler != null) || (scope != null && t.edata.scope == scope)))
            {
                // match
            } else {
                newHandlers.push(t);
            }
        }
        this.handlers = newHandlers;
        return this;
    },

    trigger: function (edata) {
        var $ = jQuery;
        var edata = $.extend({ type: null, phase: 'before', target: null, doneHandlers: [] }, edata, {
            isStopped       : false,
            isCancelled     : false,
            done            : function (handler) { this.doneHandlers.push(handler); },
            preventDefault  : function () { this.isCancelled = true; },
            stopPropagation : function () { this.isStopped   = true; }
        });
        if (edata.phase === 'before') edata.onComplete = null;
        var args, fun, tmp;
        if (edata.target == null) edata.target = null;
        if (!$.isArray(this.handlers)) this.handlers = [];
        // process events in REVERSE order
        for (var h = this.handlers.length-1; h >= 0; h--) {
            var item = this.handlers[h];
            if (item != null && (item.edata.type === edata.type || item.edata.type === '*') &&
                (item.edata.target === edata.target || item.edata.target == null) &&
                (item.edata.execute === edata.phase || item.edata.execute === '*' || item.edata.phase === '*'))
            {
                edata = $.extend({}, item.edata, edata);
                // check handler arguments
                args = [];
                tmp  = new RegExp(/\((.*?)\)/).exec(item.handler);
                if (tmp) args = tmp[1].split(/\s*,\s*/);
                if (args.length === 2) {
                    item.handler.call(this, edata.target, edata); // old way for back compatibility
                } else {
                    item.handler.call(this, edata); // new way
                }
                if (edata.isStopped === true || edata.stop === true) return edata; // back compatibility edata.stop === true
            }
        }
        // main object events
        var funName = 'on' + edata.type.substr(0,1).toUpperCase() + edata.type.substr(1);
        if (edata.phase === 'before' && typeof this[funName] === 'function') {
            fun = this[funName];
            // check handler arguments
            args = [];
            tmp  = new RegExp(/\((.*?)\)/).exec(fun);
            if (tmp) args = tmp[1].split(/\s*,\s*/);
            if (args.length === 2) {
                fun.call(this, edata.target, edata); // old way for back compatibility
            } else {
                fun.call(this, edata); // new way
            }
            if (edata.isStopped === true || edata.stop === true) return edata; // back compatibility edata.stop === true
        }
        // item object events
        if (edata.object != null && edata.phase === 'before' &&
            typeof edata.object[funName] === 'function')
        {
            fun = edata.object[funName];
            // check handler arguments
            args = [];
            tmp  = new RegExp(/\((.*?)\)/).exec(fun);
            if (tmp) args = tmp[1].split(/\s*,\s*/);
            if (args.length === 2) {
                fun.call(this, edata.target, edata); // old way for back compatibility
            } else {
                fun.call(this, edata); // new way
            }
            if (edata.isStopped === true || edata.stop === true) return edata;
        }
        // execute onComplete
        if (edata.phase === 'after') {
            if (typeof edata.onComplete === 'function') edata.onComplete.call(this, edata);
            for (var i = 0; i < edata.doneHandlers.length; i++) {
                if (typeof edata.doneHandlers[i] === 'function') {
                    edata.doneHandlers[i].call(this, edata);
                }
            }
        }
        return edata;
    }
};

/***********************************************************
*  Commonly used plugins
*  --- used primarily in grid and form
*
*********************************************************/

(function ($) {

    $.fn.w2render = function (name) {
        if ($(this).length > 0) {
            if (typeof name === 'string' && w2ui[name]) w2ui[name].render($(this)[0]);
            if (typeof name === 'object') name.render($(this)[0]);
        }
    };

    $.fn.w2destroy = function (name) {
        if (!name && this.length > 0) name = this.attr('name');
        if (typeof name === 'string' && w2ui[name]) w2ui[name].destroy();
        if (typeof name === 'object') name.destroy();
    };

    $.fn.w2marker = function () {
        var str = Array.prototype.slice.call(arguments, 0);
        if (Array.isArray(str[0])) str = str[0];
        if (str.length === 0 || !str[0]) { // remove marker
            return $(this).each(clearMarkedText);
        } else { // add marker
            return $(this).each(function (index, el) {
                clearMarkedText(index, el);
                for (var s = 0; s < str.length; s++) {
                    var tmp = str[s];
                    if (typeof tmp !== 'string') tmp = String(tmp);
                    // escape regex special chars
                    tmp = tmp.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&").replace(/&/g, '&amp;').replace(/</g, '&gt;').replace(/>/g, '&lt;');
                    var regex = new RegExp(tmp + '(?!([^<]+)?>)', "gi"); // only outside tags
                    el.innerHTML = el.innerHTML.replace(regex, replaceValue);
                }
                function replaceValue(matched) { // mark new
                    return '<span class="w2ui-marker">' + matched + '</span>';
                }
            });
        }

        function clearMarkedText(index, el) {
            while (el.innerHTML.indexOf('<span class="w2ui-marker">') !== -1) {
                el.innerHTML = el.innerHTML.replace(/\<span class=\"w2ui\-marker\"\>((.|\n|\r)*)\<\/span\>/ig, '$1'); // unmark
            }
        }
    };

    // -- w2tag - there can be multiple on screen at a time

    $.fn.w2tag = function (text, options) {
        // only one argument
        if (arguments.length === 1 && typeof text === 'object') {
            options = text;
            if (options.html != null) text = options.html;
        }
        // default options
        options = $.extend({
            id              : null,     // id for the tag, otherwise input id is used
            auto            : null,     // if auto true, then tag will show on mouseEnter and hide on mouseLeave
            html            : text,     // or html
            position        : 'right|top',  // can be left, right, top, bottom
            align           : 'none',   // can be none, left, right (only works for potision: top | bottom)
            left            : 0,        // delta for left coordinate
            top             : 0,        // delta for top coordinate
            maxWidth        : null,     // max width
            style           : '',       // adition style for the tag
            css             : {},       // add css for input when tag is shown
            className       : '',       // add class bubble
            inputClass      : '',       // add class for input when tag is shown
            onShow          : null,     // callBack when shown
            onHide          : null,     // callBack when hidden
            hideOnKeyPress  : true,     // hide tag if key pressed
            hideOnFocus     : false,    // hide tag on focus
            hideOnBlur      : false,    // hide tag on blur
            hideOnClick     : false,    // hide tag on document click
            hideOnChange    : true
        }, options);
        if (options.name != null && options.id == null) options.id = options.name;

        // for backward compatibility
        if (options['class'] !== '' && options.inputClass === '') options.inputClass = options['class'];

        // remove all tags
        if ($(this).length === 0) {
            $('.w2ui-tag').each(function (index, el) {
                var tag = $(el).data('w2tag');
                if (tag) tag.hide();
            });
            return;
        }
        if (options.auto === true || options.showOn != null || options.hideOn != null) {
            if (arguments.length == 0 || !text) {
                return $(this).each(function (index, el) {
                    $(el).off('.w2tooltip')
                })
            } else {
                return $(this).each(function (index, el) {
                    var showOn = 'mouseenter', hideOn = 'mouseleave'
                    if (options.showOn) {
                        showOn = String(options.showOn).toLowerCase()
                        delete options.showOn
                    }
                    if (options.hideOn) {
                        hideOn = String(options.hideOn).toLowerCase()
                        delete options.hideOn
                    }
                    if (!options.potision) { options.position = 'top|bottom' }
                    $(el)
                        .off('.w2tooltip')
                        .on(showOn + '.w2tooltip', function () {
                            options.auto = false;
                            $(this).w2tag(text, options)
                        })
                        .on(hideOn + '.w2tooltip', function () {
                            $(this).w2tag()
                        })
                })
            }
        } else {
            return $(this).each(function (index, el) {
                // main object
                var tag;
                var origID = (options.id ? options.id : el.id);
                if (origID == '') { // search for an id
                    origID = $(el).find('input').attr('id');
                }
                if (!origID) {
                    origID = 'noid';
                }
                var tmpID  = w2utils.escapeId(origID);
                if ($(this).data('w2tag') != null) {
                    tag = $(this).data('w2tag');
                    $.extend(tag.options, options);
                } else {
                    tag = {
                        id        : origID,
                        attachedTo: el,          // element attached to
                        box       : $('#w2ui-tag-' + tmpID), // tag itself
                        options   : $.extend({}, options),
                        // methods
                        init      : init,      // attach events
                        hide      : hide,      // hide tag
                        getPos    : getPos,    // gets position of tag
                        isMoved   : isMoved,   // if called, will adjust position
                        // internal
                        tmp       : {}         // for temp variables
                    };
                }
                // show or hide tag
                if (text === '' || text == null) {
                    tag.hide();
                } else if (tag.box.length !== 0) {
                    // if already present
                    tag.box.find('.w2ui-tag-body')
                        .css(tag.options.css)
                        .attr('style', tag.options.style)
                        .addClass(tag.options.className)
                        .html(tag.options.html);
                } else {
                    tag.tmp.originalCSS = '';
                    if ($(tag.attachedTo).length > 0) tag.tmp.originalCSS = $(tag.attachedTo)[0].style.cssText;
                    var tagStyles = 'white-space: nowrap;'
                    if (tag.options.maxWidth && w2utils.getStrWidth(text) > tag.options.maxWidth) {
                        tagStyles = 'width: '+ tag.options.maxWidth + 'px'
                    }
                    // insert
                    $('body').append(
                        '<div onclick="event.stopPropagation()" style="display: none;" id="w2ui-tag-'+ tag.id +'" '+
                        '       class="w2ui-tag '+ ($(tag.attachedTo).parents('.w2ui-popup, .w2ui-overlay-popup, .w2ui-message').length > 0 ? 'w2ui-tag-popup' : '') + '">'+
                        '   <div style="margin: -2px 0px 0px -2px; '+ tagStyles +'">'+
                        '      <div class="w2ui-tag-body '+ tag.options.className +'" style="'+ (tag.options.style || '') +'">'+ text +'</div>'+
                        '   </div>' +
                        '</div>');
                    tag.box = $('#w2ui-tag-' + tmpID);
                    $(tag.attachedTo).data('w2tag', tag); // make available to element tag attached to
                    setTimeout(init, 1);
                }
                return;

                function init() {
                    tag.box.css('display', 'block');
                    if (!tag || !tag.box || !$(tag.attachedTo).offset()) return;
                    var pos = tag.getPos();
                    tag.box.css({
                            opacity : '1',
                            left    : pos.left + 'px',
                            top     : pos.top + 'px'
                        })
                        .data('w2tag', tag)
                        .find('.w2ui-tag-body').addClass(pos['posClass']);
                    tag.tmp.pos = pos.left + 'x' + pos.top;

                    $(tag.attachedTo)
                        .off('.w2tag')
                        .css(tag.options.css)
                        .addClass(tag.options.inputClass);


                    if (tag.options.hideOnKeyPress) {
                        $(tag.attachedTo).on('keypress.w2tag', tag.hide);
                    }
                    if (tag.options.hideOnFocus) {
                        $(tag.attachedTo).on('focus.w2tag', tag.hide);
                    }
                    if (options.hideOnChange) {
                        if (el.nodeName === 'INPUT') {
                            $(el).on('change.w2tag', tag.hide);
                        } else {
                            $(el).find('input').on('change.w2tag', tag.hide);
                        }
                    }
                    if (tag.options.hideOnBlur) {
                        $(tag.attachedTo).on('blur.w2tag', tag.hide);
                    }
                    if (tag.options.hideOnClick) {
                        $('body').on('click.w2tag' + (tag.id || ''), tag.hide);
                    }
                    if (typeof tag.options.onShow === 'function') {
                        tag.options.onShow();
                    }
                    isMoved();
                }

                // bind event to hide it
                function hide() {
                    if (tag.box.length <= 0) return;
                    if (tag.tmp.timer) clearTimeout(tag.tmp.timer);
                    tag.box.remove();
                    if (tag.options.hideOnClick) {
                        $('body').off('.w2tag' + (tag.id || ''));
                    }
                    $(tag.attachedTo).off('.w2tag')
                        .removeClass(tag.options.inputClass)
                        .removeData('w2tag');
                    // restore original CSS
                    if ($(tag.attachedTo).length > 0) {
                        $(tag.attachedTo)[0].style.cssText = tag.tmp.originalCSS;
                    }
                    if (typeof tag.options.onHide === 'function') {
                        tag.options.onHide();
                    }
                }

                function isMoved(instant) {
                    // monitor if destroyed
                    var offset = $(tag.attachedTo).offset();
                    if ($(tag.attachedTo).length === 0 || (offset.left === 0 && offset.top === 0) || tag.box.find('.w2ui-tag-body').length === 0) {
                        tag.hide();
                        return;
                    }
                    var pos = getPos();
                    if (tag.tmp.pos !== pos.left + 'x' + pos.top) {
                        tag.box
                            .css(w2utils.cssPrefix({ 'transition': (instant ? '0s' : '.2s') }))
                            .css({
                                left: pos.left + 'px',
                                top : pos.top + 'px'
                            });
                        tag.tmp.pos = pos.left + 'x' + pos.top;
                    }
                    if (tag.tmp.timer) clearTimeout(tag.tmp.timer);
                    tag.tmp.timer = setTimeout(isMoved, 100);
                }

                function getPos() {
                    var offset   = $(tag.attachedTo).offset();
                    var posClass = 'w2ui-tag-right';
                    var posLeft  = parseInt(offset.left + tag.attachedTo.offsetWidth + (tag.options.left ? tag.options.left : 0));
                    var posTop   = parseInt(offset.top + (tag.options.top ? tag.options.top : 0));
                    var tagBody  = tag.box.find('.w2ui-tag-body');
                    var width    = tagBody[0].offsetWidth;
                    var height   = tagBody[0].offsetHeight;
                    if (typeof tag.options.position === 'string' && tag.options.position.indexOf('|') !== -1) {
                        tag.options.position = tag.options.position.split('|');
                    }
                    if (tag.options.position === 'top') {
                        posClass  = 'w2ui-tag-top';
                        posLeft   = parseInt(offset.left + (tag.options.left ? tag.options.left : 0)) - 14;
                        posTop    = parseInt(offset.top + (tag.options.top ? tag.options.top : 0)) - height - 10;
                    } else if (tag.options.position === 'bottom') {
                        posClass  = 'w2ui-tag-bottom';
                        posLeft   = parseInt(offset.left + (tag.options.left ? tag.options.left : 0)) - 14;
                        posTop    = parseInt(offset.top + tag.attachedTo.offsetHeight + (tag.options.top ? tag.options.top : 0)) + 10;
                    } else if (tag.options.position === 'left') {
                        posClass  = 'w2ui-tag-left';
                        posLeft   = parseInt(offset.left + (tag.options.left ? tag.options.left : 0)) - width - 20;
                        posTop    = parseInt(offset.top + (tag.options.top ? tag.options.top : 0));
                    } else if (Array.isArray(tag.options.position)) {
                        // try to fit the tag on screen in the order defined in the array
                        var maxWidth  = window.innerWidth;
                        var maxHeight = window.innerHeight;
                        for (var i = 0; i < tag.options.position.length; i++) {
                            var pos = tag.options.position[i];
                            if (pos === 'right') {
                                posClass = 'w2ui-tag-right';
                                posLeft  = parseInt(offset.left + tag.attachedTo.offsetWidth + (tag.options.left ? tag.options.left : 0));
                                posTop   = parseInt(offset.top + (tag.options.top ? tag.options.top : 0));
                                if (posLeft+width <= maxWidth) break;
                            } else if (pos === 'left') {
                                posClass  = 'w2ui-tag-left';
                                posLeft   = parseInt(offset.left + (tag.options.left ? tag.options.left : 0)) - width - 20;
                                posTop    = parseInt(offset.top + (tag.options.top ? tag.options.top : 0));
                                if (posLeft >= 0) break;
                            } else if (pos === 'top') {
                                posClass  = 'w2ui-tag-top';
                                posLeft   = parseInt(offset.left + (tag.options.left ? tag.options.left : 0)) - 14;
                                posTop    = parseInt(offset.top + (tag.options.top ? tag.options.top : 0)) - height - 10;
                                if(posLeft+width <= maxWidth && posTop >= 0) break;
                            } else if (pos === 'bottom') {
                                posClass  = 'w2ui-tag-bottom';
                                posLeft   = parseInt(offset.left + (tag.options.left ? tag.options.left : 0)) - 14;
                                posTop    = parseInt(offset.top + tag.attachedTo.offsetHeight + (tag.options.top ? tag.options.top : 0)) + 10;
                                if (posLeft+width <= maxWidth && posTop+height <= maxHeight) break;
                            }
                        }
                        if (tagBody.data('posClass') !== posClass) {
                            tagBody.removeClass('w2ui-tag-right w2ui-tag-left w2ui-tag-top w2ui-tag-bottom')
                                .addClass(posClass)
                                .data('posClass', posClass);
                        }
                    }
                    return { left: posLeft, top: posTop, posClass: posClass };
                }
            })
        }
    }

    // w2overlay - appears under the element, there can be only one at a time

    $.fn.w2overlay = function (html, options) {
        var obj  = this;
        var name = '';
        var defaults = {
            name        : null,              // it not null, then allows multiple concurrent overlays
            html        : '',                // html text to display
            align       : 'none',            // can be none, left, right, both
            left        : 0,                 // offset left
            top         : 0,                 // offset top
            tipLeft     : 30,                // tip offset left
            noTip       : false,             // if true - no tip will be displayed
            selectable  : false,
            width       : 0,                 // fixed width
            height      : 0,                 // fixed height
            minWidth    : null,              // min width if any. Valid values: null / 'auto' (default) / 'input' (default for align='both') / 'XXpx' / numeric value (same as setting string with 'px')
            maxWidth    : null,              // max width if any
            maxHeight   : null,              // max height if any
            contextMenu : false,             // if true, it will be opened at mouse position
            pageX       : null,
            pageY       : null,
            originalEvent : null,
            style       : '',                // additional style for main div
            'class'     : '',                // additional class name for main div
            overlayStyle: '',
            onShow      : null,              // event on show
            onHide      : null,              // event on hide
            openAbove   : null,              // show above control (if not, then as best needed)
            tmp         : {}
        };
        if (arguments.length === 1) {
            if (typeof html === 'object') {
                options = html;
            } else {
                options = { html: html };
            }
        }
        if (arguments.length === 2) options.html = html;
        if (!$.isPlainObject(options)) options = {};
        options = $.extend({}, defaults, options);
        if (options.name) name = '-' + options.name;
        // hide
        var tmp_hide;
        if (this.length === 0 || options.html === '' || options.html == null) {
            if ($('#w2ui-overlay'+ name).length > 0) {
                tmp_hide = $('#w2ui-overlay'+ name)[0].hide;
                if (typeof tmp_hide === 'function') tmp_hide();
            } else {
                $('#w2ui-overlay'+ name).remove();
            }
            return $(this);
        }
        // hide previous if any
        if ($('#w2ui-overlay'+ name).length > 0) {
            tmp_hide = $('#w2ui-overlay'+ name)[0].hide;
            $(document).off('.w2overlay'+ name);
            if (typeof tmp_hide === 'function') tmp_hide();
        }
        if (obj.length > 0 && (obj[0].tagName == null || obj[0].tagName.toUpperCase() === 'BODY')) options.contextMenu = true;
        if (options.contextMenu && options.originalEvent) {
            options.pageX = options.originalEvent.pageX;
            options.pageY = options.originalEvent.pageY;
        }
        if (options.contextMenu && (options.pageX == null || options.pageY == null)) {
            console.log('ERROR: to display menu at mouse location, pass options.pageX and options.pageY.');
        }
        var data_str = ''
        if (options.data) {
            Object.keys(options.data).forEach(function (item) {
                data_str += 'data-'+ item + '="' + options.data[item] +'"'
            })
        }
        // append
        $('body').append(
            '<div id="w2ui-overlay'+ name +'" style="display: none; left: 0px; top: 0px; '+ options.overlayStyle +'" '+ data_str +
            '        class="w2ui-reset w2ui-overlay '+ ($(this).parents('.w2ui-popup, .w2ui-overlay-popup, .w2ui-message').length > 0 ? 'w2ui-overlay-popup' : '') +'">'+
            '    <style></style>'+
            '    <div style="min-width: 100%; '+ options.style +'" class="'+ options['class'] +'"></div>'+
            '</div>'
        );
        // init
        var div1 = $('#w2ui-overlay'+ name);
        var div2 = div1.find(' > div');
        div2.html(options.html);
        // pick bg color of first div
        var bc  = div2.css('background-color');
        if (bc != null && bc !== 'rgba(0, 0, 0, 0)' && bc !== 'transparent') div1.css({ 'background-color': bc, 'border-color': bc });

        var offset = $(obj).offset() || {};
        div1.data('element', obj.length > 0 ? obj[0] : null)
            .data('options', options)
            .data('position', offset.left + 'x' + offset.top)
            .fadeIn('fast')
            .on('click', function (event) {
                $('#w2ui-overlay'+ name).data('keepOpen', true);
                // if there is label for input, it will produce 2 click events
                if (event.target.tagName.toUpperCase() === 'LABEL') event.stopPropagation();
            })
            .on('mousedown', function (event) {
                var tmp = event.target.tagName.toUpperCase();
                if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(tmp) === -1 && !options.selectable) {
                    event.preventDefault();
                }
            });
        div1[0].hide   = hide;
        div1[0].resize = resize;

        // need time to display
        setTimeout(function () {
            $(document).off('.w2overlay'+ name).on('click.w2overlay'+ name, hide);
            if (typeof options.onShow === 'function') options.onShow();
            resize();
        }, 10);

        monitor();
        return $(this);

        // monitor position
        function monitor() {
            var tmp = $('#w2ui-overlay'+ name);
            if (tmp.data('element') !== obj[0]) return; // it if it different overlay
            if (tmp.length === 0) return;
            var offset = $(obj).offset() || {};
            var pos = offset.left + 'x' + offset.top;
            if (tmp.data('position') !== pos) {
                hide();
            } else {
                setTimeout(monitor, 250);
            }
        }

        // click anywhere else hides the drop down
        function hide(event) {
            if (event && event.button !== 0) return; // only for left click button
            var div1 = $('#w2ui-overlay'+ name);
            // Allow clicking inside other overlays which belong to the elements inside this overlay
            if (event && $($(event.target).closest('.w2ui-overlay').data('element')).closest('.w2ui-overlay')[0] === div1[0]) return;
            if (div1.data('keepOpen') === true) {
                div1.removeData('keepOpen');
                return;
            }
            var result;
            if (typeof options.onHide === 'function') result = options.onHide();
            if (result === false) return;
            div1.remove();
            $(document).off('.w2overlay'+ name);
            clearInterval(div1.data('timer'));
        }

        function resize() {
            var div1 = $('#w2ui-overlay'+ name);
            var div2 = div1.find(' > div');
            var menu = $('#w2ui-overlay'+ name +' div.w2ui-menu');
            var pos  = {};
            if (menu.length > 0) {
                menu.css('overflow-y', 'hidden');
                pos.scrollTop = menu.scrollTop();
                pos.scrollLeft = menu.scrollLeft();
            }
            // if goes over the screen, limit height and width
            if (div1.length > 0) {
                div2.height('auto').width('auto');
                // width/height
                var overflowX = false;
                var overflowY = false;
                var h = div2.height();
                var w = div2.width();
                if (options.width && options.width < w) w = options.width;
                if (w < 30) w = 30;
                // if content of specific height
                if (options.tmp.contentHeight) {
                    h = parseInt(options.tmp.contentHeight);
                    div2.height(h);
                    setTimeout(function () {
                        var $div = div2.find('div.w2ui-menu');
                        if (h > $div.height()) {
                            div2.find('div.w2ui-menu').css('overflow-y', 'hidden');
                        }
                    }, 1);
                    setTimeout(function () {
                        var $div = div2.find('div.w2ui-menu');
                        if ($div.css('overflow-y') !== 'auto') $div.css('overflow-y', 'auto');
                    }, 10);
                }
                if (options.tmp.contentWidth && options.align !== 'both') {
                    w = parseInt(options.tmp.contentWidth);
                    div2.width(w);
                    setTimeout(function () {
                        if (w > div2.find('div.w2ui-menu > table').width()) {
                            div2.find('div.w2ui-menu > table').css('overflow-x', 'hidden');
                        }
                    }, 1);
                    setTimeout(function () {
                        div2.find('div.w2ui-menu > table').css('overflow-x', 'auto');
                    }, 10);
                }
                div2.find('div.w2ui-menu').css('width', '100%');
                // adjust position
                var boxLeft  = options.left;
                var boxWidth = options.width;
                var tipLeft  = options.tipLeft;
                var minWidth = options.minWidth;
                var maxWidth = options.maxWidth;
                var objWidth = w2utils.getSize($(obj), 'width');
                // alignment
                switch (options.align) {
                    case 'both':
                        boxLeft = 17;
                        minWidth = 'input';
                        maxWidth = 'input';
                        break;
                    case 'left':
                        boxLeft = 17;
                        break;
                    case 'right':
                        break;
                }

                // convert minWidth to a numeric value
                if(!minWidth || minWidth === 'auto') minWidth = 0;
                if(minWidth === 'input') minWidth = objWidth;
                minWidth = parseInt(minWidth, 10);
                // convert maxWidth to a numeric value
                if(!maxWidth || maxWidth === 'auto') maxWidth = 0;
                if(maxWidth === 'input') maxWidth = objWidth;
                maxWidth = parseInt(maxWidth, 10);
                // convert boxWidth to a numeric value
                if(!boxWidth || boxWidth === 'auto') boxWidth = 0;
                if(boxWidth === 'input') boxWidth = objWidth;
                boxWidth = parseInt(boxWidth, 10);
                if(minWidth) boxWidth = Math.max(boxWidth, minWidth);
                if(maxWidth) boxWidth = Math.min(boxWidth, maxWidth);

                if(options.align === 'right') {
                    var mw = Math.max(w - 10, minWidth - 17);
                    boxLeft = objWidth - mw;
                    tipLeft = mw - 30;
                }
                if (w === 30 && !boxWidth) boxWidth = 30;
                var tmp = ((boxWidth ? boxWidth : w) - 17) / 2;
                if (tmp < 25) {
                    tipLeft = Math.floor(tmp);
                }

                // Y coord
                var X, Y, offsetTop;
                if (options.contextMenu) { // context menu
                    X = options.pageX + 8;
                    Y = options.pageY - 0;
                    offsetTop = options.pageY;
                } else {
                    var offset = obj.offset() || {};
                    X = ((offset.left > 25 ? offset.left : 25) + boxLeft);
                    Y = (offset.top + w2utils.getSize(obj, 'height') + options.top + 7);
                    offsetTop = offset.top;
                }
                div1.css({
                    left        :  X + 'px',
                    top         :  Y + 'px',
                    'width'     : boxWidth || 'auto',
                    'min-width' : minWidth || 'auto',
                    'max-width' : maxWidth || 'auto',
                    'min-height': options.height || 'auto'
                });
                // $(window).height() - has a problem in FF20
                var offset = div2.offset() || {};
                var maxHeight = window.innerHeight + $(document).scrollTop() - offset.top - 7;
                var maxWidth  = window.innerWidth + $(document).scrollLeft() - offset.left - 7;
                if (options.contextMenu) { // context menu
                    maxHeight = window.innerHeight + $(document).scrollTop() - options.pageY - 15;
                    maxWidth  = window.innerWidth + $(document).scrollLeft() - options.pageX;
                }

                if (((maxHeight > -50 && maxHeight < 210) || options.openAbove === true) && options.openAbove !== false) {
                    var tipOffset;
                    // show on top
                    if (options.contextMenu) { // context menu
                        maxHeight = options.pageY - 7;
                        tipOffset = 5;
                    } else {
                        maxHeight = offset.top - $(document).scrollTop() - 7;
                        tipOffset = 24;
                    }
                    if (options.maxHeight && maxHeight > options.maxHeight) maxHeight = options.maxHeight;
                    if (h > maxHeight) {
                        overflowY = true;
                        div2.height(maxHeight).width(w).css({ 'overflow-y': 'auto' });
                        h = maxHeight;
                    }
                    div1.addClass('bottom-arrow');
                    div1.css('top', (offsetTop - h - tipOffset + options.top) + 'px');
                    div1.find('>style').html(
                        '#w2ui-overlay'+ name +':before { margin-left: '+ parseInt(tipLeft) +'px; }'+
                        '#w2ui-overlay'+ name +':after { margin-left: '+ parseInt(tipLeft) +'px; }'
                    );
                } else {
                    // show under
                    if (options.maxHeight && maxHeight > options.maxHeight) maxHeight = options.maxHeight;
                    if (h > maxHeight) {
                        overflowY = true;
                        div2.height(maxHeight).width(w).css({ 'overflow-y': 'auto' });
                    }
                    div1.addClass('top-arrow');
                    div1.find('>style').html(
                        '#w2ui-overlay'+ name +':before { margin-left: '+ parseInt(tipLeft) +'px; }'+
                        '#w2ui-overlay'+ name +':after { margin-left: '+ parseInt(tipLeft) +'px; }'
                    );
                }
                // check width
                w = div2.width();
                maxWidth = window.innerWidth + $(document).scrollLeft() - offset.left - 7;
                if (options.maxWidth && maxWidth > options.maxWidth) maxWidth = options.maxWidth;
                if (w > maxWidth && options.align !== 'both') {
                    options.align = 'right';
                    setTimeout(function () { resize(); }, 1);
                }
                // don't show tip
                if (options.contextMenu || options.noTip) { // context menu
                    div1.find('>style').html(
                        '#w2ui-overlay'+ name +':before { display: none; }'+
                        '#w2ui-overlay'+ name +':after { display: none; }'
                    );
                }
                // check scroll bar (needed to avoid horizontal scrollbar)
                if (overflowY && options.align !== 'both') div2.width(w + w2utils.scrollBarSize() + 2);
            }
            if (menu.length > 0) {
                menu.css('overflow-y', 'auto');
                menu.scrollTop(pos.scrollTop);
                menu.scrollLeft(pos.scrollLeft);
            }
        }
    };

    $.fn.w2menu = function (menu, options) {
        /*
        ITEM STRUCTURE
            item : {
                id       : null,
                text     : '',
                style    : '',
                img      : '',
                icon     : '',
                count    : '',
                tooltip  : '',
                hidden   : false,
                checked  : null,
                disabled : false
                ...
            }
        */
        // if items is a function
        if (options && typeof options.items === 'function') {
            options.items = options.items();
        }
        var defaults = {
            type         : 'normal',    // can be normal, radio, check
            index        : null,        // current selected
            items        : [],
            render       : null,
            msgNoItems   : 'No items',
            onSelect     : null,
            hideOnRemove : false,
            tmp          : {}
        };
        var ret;
        var obj  = this;
        var name = '';
        if (menu === 'refresh') {
            // if not show - call blur
            if ($.fn.w2menuOptions && $.fn.w2menuOptions.name) name = '-' + $.fn.w2menuOptions.name;
            if (options.name) name = '-' + options.name;
            if ($('#w2ui-overlay'+ name).length > 0) {
                options = $.extend($.fn.w2menuOptions, options);
                var scrTop = $('#w2ui-overlay'+ name +' div.w2ui-menu').scrollTop();
                $('#w2ui-overlay'+ name +' div.w2ui-menu').html(getMenuHTML());
                $('#w2ui-overlay'+ name +' div.w2ui-menu').scrollTop(scrTop);
                mresize();
            } else {
                $(this).w2menu(options);
            }
        } else if (menu === 'refresh-index') {
            var $menu  = $('#w2ui-overlay'+ name +' div.w2ui-menu');
            var cur    = $menu.find('tr[index='+ options.index +']');
            var scrTop = $menu.scrollTop();
            $menu.find('tr.w2ui-selected').removeClass('w2ui-selected'); // clear all
            cur.addClass('w2ui-selected'); // select current
            // scroll into view
            if (cur.length > 0) {
                var top    = cur[0].offsetTop - 5; // 5 is margin top
                var height = $menu.height();
                $menu.scrollTop(scrTop);
                if (top < scrTop || top + cur.height() > scrTop + height) {
                    $menu.animate({ 'scrollTop': top - (height - cur.height() * 2) / 2 }, 200, 'linear');
                }
            }
            mresize();
        } else {
            if (arguments.length === 1) options = menu; else options.items = menu;
            if (typeof options !== 'object') options = {};
            options = $.extend({}, defaults, options);
            $.fn.w2menuOptions = options;
            if (options.name) name = '-' + options.name;
            if (typeof options.select === 'function' && typeof options.onSelect !== 'function') options.onSelect = options.select;
            if (typeof options.remove === 'function' && typeof options.onRemove !== 'function') options.onRemove = options.remove;
            if (typeof options.onRender === 'function' && typeof options.render !== 'function') options.render = options.onRender;
            // since only one overlay can exist at a time
            $.fn.w2menuClick = function (event, index, parentIndex) {
                var keepOpen = false;
                var $tr = $(event.target).closest('tr');
                if (event.shiftKey || event.metaKey || event.ctrlKey) {
                    keepOpen = true;
                }
                if (parentIndex == null) {
                    items = options.items
                } else {
                    items = options.items[parentIndex].items
                }
                if ($(event.target).hasClass('remove')) {
                    if (typeof options.onRemove === 'function') {
                        options.onRemove({
                            index: index,
                            parentIndex: parentIndex,
                            item: items[index],
                            keepOpen: keepOpen,
                            originalEvent: event
                        });
                    }
                    keepOpen = !options.hideOnRemove;
                    $(event.target).closest('tr').remove();
                    mresize();
                } else if ($tr.hasClass('has-sub-menu')) {
                    keepOpen = true;
                    if ($tr.hasClass('expanded')) {
                        items[index].expanded = false;
                        $tr.removeClass('expanded').addClass('collapsed').next().hide();
                    } else {
                        items[index].expanded = true;
                        $tr.addClass('expanded').removeClass('collapsed').next().show();
                    }
                    mresize();
                } else if (typeof options.onSelect === 'function') {
                    var tmp = items;
                    if (typeof items == 'function') {
                        tmp = items(options.items[parentIndex])
                    }
                    if (tmp[index].keepOpen != null) {
                        keepOpen = tmp[index].keepOpen
                    }
                    options.onSelect({
                        index: index,
                        parentIndex: parentIndex,
                        item: tmp[index],
                        keepOpen: keepOpen,
                        originalEvent: event
                    });
                }
                // -- hide
                if (items[index] == null || items[index].keepOpen !== true) {
                    var div = $('#w2ui-overlay'+ name);
                    div.removeData('keepOpen');
                    if (div.length > 0 && typeof div[0].hide === 'function' && !keepOpen) {
                        div[0].hide();
                    }
                }
            };
            $.fn.w2menuDown = function (event, index, parentIndex) {
                var items;
                var $el  = $(event.target).closest('tr');
                var tmp  = $($el.get(0)).find('.w2ui-icon');
                if (parentIndex == null) {
                    items = options.items
                } else {
                    items = options.items[parentIndex].items
                }
                var item = items[index];
                if ((options.type === 'check' || options.type === 'radio') && item.group !== false
                            && !$(event.target).hasClass('remove')
                            && !$(event.target).closest('tr').hasClass('has-sub-menu')) {
                    item.checked = !item.checked;
                    if (item.checked) {
                        if (options.type === 'radio') {
                           tmp.parents('table').find('.w2ui-icon') // should not be closest, but parents
                               .removeClass('w2ui-icon-check')
                               .addClass('w2ui-icon-empty');
                        }
                        if (options.type === 'check' && item.group != null) {
                            items.forEach(function (sub, ind) {
                                if (sub.id == item.id) return;
                                if (sub.group === item.group && sub.checked) {
                                    tmp.closest('table').find('tr[index='+ ind +'] .w2ui-icon')
                                        .removeClass('w2ui-icon-check')
                                        .addClass('w2ui-icon-empty');
                                    items[ind].checked = false;
                                }
                            });
                        }
                        tmp.removeClass('w2ui-icon-empty').addClass('w2ui-icon-check');
                    } else if (options.type === 'check' && item.group == null && item.group !== false) {
                        tmp.removeClass('w2ui-icon-check').addClass('w2ui-icon-empty');
                    }
                }
                // highlight record
                $el.parent().find('tr').removeClass('w2ui-selected');
                $el.addClass('w2ui-selected');
            };
            var html = '';
            if (options.search) {
                html +=
                    '<div style="position: absolute; top: 0px; height: 40px; left: 0px; right: 0px; border-bottom: 1px solid silver; background-color: #ECECEC; padding: 8px 5px;">'+
                    '    <div class="w2ui-icon icon-search" style="position: absolute; margin-top: 4px; margin-left: 6px; width: 11px; background-position: left !important;"></div>'+
                    '    <input id="menu-search" type="text" style="width: 100%; outline: none; padding-left: 20px;" onclick="event.stopPropagation();"/>'+
                    '</div>';
                options.style += ';background-color: #ECECEC';
                options.index = 0;
                for (var i = 0; i < options.items.length; i++) options.items[i].hidden = false;
            }
            html += (options.topHTML || '') +
                    '<div class="w2ui-menu" style="top: '+ (options.search ? 40 : 0) + 'px;' + (options.menuStyle || '') + '">' +
                        getMenuHTML() +
                    '</div>';
            ret = $(this).w2overlay(html, options);
            setTimeout(function () {
                $('#w2ui-overlay'+ name +' #menu-search')
                    .on('keyup', change)
                    .on('keydown', function (event) {
                        // cancel tab key
                        if (event.keyCode === 9) { event.stopPropagation(); event.preventDefault(); }
                    });
                if (options.search) {
                    if (['text', 'password'].indexOf($(obj)[0].type) !== -1 || $(obj)[0].tagName.toUpperCase() === 'TEXTAREA') return;
                    $('#w2ui-overlay'+ name +' #menu-search').focus();
                }
                mresize();
            }, 250);
            mresize();
            // map functions
            var div = $('#w2ui-overlay'+ name);
            if (div.length > 0) {
                div[0].mresize = mresize;
                div[0].change = change;
            }
        }
        return ret;

        function mresize() {
            setTimeout(function () {
                // show selected
                $('#w2ui-overlay'+ name +' tr.w2ui-selected').removeClass('w2ui-selected');
                var cur    = $('#w2ui-overlay'+ name +' tr[index='+ options.index +']');
                var scrTop = $('#w2ui-overlay'+ name +' div.w2ui-menu').scrollTop();
                cur.addClass('w2ui-selected');
                if (options.tmp) {
                    options.tmp.contentHeight = $('#w2ui-overlay'+ name +' table').height() + (options.search ? 50 : 10)
                        + (parseInt($('#w2ui-overlay'+ name +' .w2ui-menu').css('top')) || 0) // it menu is moved with menuStyle
                        + (parseInt($('#w2ui-overlay'+ name +' .w2ui-menu').css('bottom')) || 0); // it menu is moved with menuStyle
                    options.tmp.contentWidth  = $('#w2ui-overlay'+ name +' table').width();
                }
                if ($('#w2ui-overlay'+ name).length > 0) $('#w2ui-overlay'+ name)[0].resize();
                // scroll into view
                if (cur.length > 0) {
                    var top    = cur[0].offsetTop - 5; // 5 is margin top
                    var el     = $('#w2ui-overlay'+ name +' div.w2ui-menu');
                    var height = el.height();
                    $('#w2ui-overlay'+ name +' div.w2ui-menu').scrollTop(scrTop);
                    if (top < scrTop || top + cur.height() > scrTop + height) {
                        $('#w2ui-overlay'+ name +' div.w2ui-menu').animate({ 'scrollTop': top - (height - cur.height() * 2) / 2 }, 200, 'linear');
                    }
                }
            }, 1);
        }

        function change(event) {
            var search  = this.value;
            var key     = event.keyCode;
            var cancel  = false;
            switch (key) {
                case 13: // enter
                    $('#w2ui-overlay'+ name).remove();
                    $.fn.w2menuClick(event, options.index);
                    break;
                case 9:  // tab
                case 27: // escape
                    $('#w2ui-overlay'+ name).remove();
                    $.fn.w2menuClick(event, -1);
                    break;
                case 38: // up
                    options.index = w2utils.isInt(options.index) ? parseInt(options.index) : 0;
                    options.index--;
                    while (options.index > 0 && options.items[options.index].hidden) options.index--;
                    if (options.index === 0 && options.items[options.index].hidden) {
                        while (options.items[options.index] && options.items[options.index].hidden) options.index++;
                    }
                    if (options.index < 0) options.index = 0;
                    cancel = true;
                    break;
                case 40: // down
                    options.index = w2utils.isInt(options.index) ? parseInt(options.index) : 0;
                    options.index++;
                    while (options.index < options.items.length-1 && options.items[options.index].hidden) options.index++;
                    if (options.index === options.items.length-1 && options.items[options.index].hidden) {
                        while (options.items[options.index] && options.items[options.index].hidden) options.index--;
                    }
                    if (options.index >= options.items.length) options.index = options.items.length - 1;
                    cancel = true;
                    break;
            }
            // filter
            if (!cancel) {
                var shown  = 0;
                for (var i = 0; i < options.items.length; i++) {
                    var item = options.items[i];
                    var prefix = '';
                    var suffix = '';
                    if (['is', 'begins with'].indexOf(options.match) !== -1) prefix = '^';
                    if (['is', 'ends with'].indexOf(options.match) !== -1) suffix = '$';
                    try {
                        var re = new RegExp(prefix + search + suffix, 'i');
                        if (re.test(item.text) || item.text === '...') item.hidden = false; else item.hidden = true;
                    } catch (e) {}
                    // do not show selected items
                    if (obj.type === 'enum' && $.inArray(item.id, ids) !== -1) item.hidden = true;
                    if (item.hidden !== true) shown++;
                }
                options.index = 0;
                while (options.index < options.items.length-1 && options.items[options.index].hidden) options.index++;
                if (shown <= 0) options.index = -1;
            }
            $(obj).w2menu('refresh', options);
            mresize();
        }

        function getMenuHTML(items, subMenu, expanded, parentIndex) {
            if (options.spinner) {
                return  '<table><tbody><tr><td style="padding: 5px 10px 13px 10px; text-align: center">'+
                        '    <div class="w2ui-spinner" style="width: 18px; height: 18px; position: relative; top: 5px;"></div> '+
                        '    <div style="display: inline-block; padding: 3px; color: #999;">'+ w2utils.lang('Loading...') +'</div>'+
                        '</td></tr></tbody></table>';
            }
            var count        = 0;
            var menu_html    =  '<table cellspacing="0" cellpadding="0" class="'+ (subMenu ? ' sub-menu' : '') +'"><tbody>';
            var img = null, icon = null;
            if (items == null) items = options.items;
            if (!Array.isArray(items)) items = []
            for (var f = 0; f < items.length; f++) {
                var mitem = items[f];
                if (typeof mitem === 'string') {
                    mitem = { id: mitem, text: mitem };
                } else {
                    if (mitem.text != null && mitem.id == null) mitem.id = mitem.text;
                    if (mitem.text == null && mitem.id != null) mitem.text = mitem.id;
                    if (mitem.caption != null) mitem.text = mitem.caption;
                    img  = mitem.img;
                    icon = mitem.icon;
                    if (img  == null) img  = null; // img might be undefined
                    if (icon == null) icon = null; // icon might be undefined
                }
                if (['radio', 'check'].indexOf(options.type) != -1 && !Array.isArray(mitem.items) && mitem.group !== false) {
                    if (mitem.checked === true) icon = 'w2ui-icon-check'; else icon = 'w2ui-icon-empty';
                }
                if (mitem.hidden !== true) {
                    var imgd = '';
                    var txt = mitem.text;
                    var subMenu_dsp = '';
                    if (typeof options.render === 'function') txt = options.render(mitem, options);
                    if (typeof txt == 'function') txt = txt(mitem, options)
                    if (img)  imgd = '<td class="menu-icon"><div class="w2ui-tb-image w2ui-icon '+ img +'"></div></td>';
                    if (icon) imgd = '<td class="menu-icon" align="center"><span class="w2ui-icon '+ icon +'"></span></td>';
                    // render only if non-empty
                    if (mitem.type !== 'break' && txt != null && txt !== '' && String(txt).substr(0, 2) != '--') {
                        var bg = (count % 2 === 0 ? 'w2ui-item-even' : 'w2ui-item-odd');
                        if (options.altRows !== true) bg = '';
                        var colspan = 1;
                        if (imgd === '') colspan++;
                        if (mitem.count == null && mitem.hotkey == null && mitem.remove !== true && mitem.items == null) colspan++;
                        if (mitem.tooltip == null && mitem.hint != null) mitem.tooltip = mitem.hint; // for backward compatibility
                        var count_dsp = '';
                        if (mitem.remove === true) {
                            count_dsp = '<span class="remove">X</span>'
                        } else if (mitem.items != null) {
                            var _items = []
                            if (typeof mitem.items == 'function') {
                                _items = mitem.items(mitem)
                            } else if (Array.isArray(mitem.items)) {
                                _items = mitem.items
                            }
                            count_dsp = '<span></span>'
                            subMenu_dsp = '<tr style="'+ (mitem.expanded ? '' : 'display: none') +'">'+
                                          '     <td colspan="3">' + getMenuHTML(_items, true, !mitem.expanded, f) + '</td>'+
                                          '<tr>';
                        } else {
                            if (mitem.count != null)  count_dsp += '<span>' + mitem.count + '</span>'
                            if (mitem.hotkey != null) count_dsp += '<span class="hotkey">' + mitem.hotkey + '</span>'
                        }
                        menu_html +=
                            '<tr index="'+ f + '" style="'+ (mitem.style ? mitem.style : '') +'" '+ (mitem.tooltip ? 'title="'+ w2utils.lang(mitem.tooltip) +'"' : '') +
                            ' class="'+ bg
                                + (options.index === f ? ' w2ui-selected' : '')
                                + (mitem.disabled === true ? ' w2ui-disabled' : '')
                                + (subMenu_dsp !== '' ? ' has-sub-menu' + (mitem.expanded ? ' expanded' : ' collapsed') : '')
                                + '"'+
                            '        onmousedown="if ('+ (mitem.disabled === true ? 'true' : 'false') + ') return;'+
                            '               jQuery.fn.w2menuDown(event, '+ f +',  '+ parentIndex +');"'+
                            '        onclick="event.stopPropagation(); '+
                            '               if ('+ (mitem.disabled === true ? 'true' : 'false') + ') return;'+
                            '               jQuery.fn.w2menuClick(event, '+ f +',  '+ parentIndex +');">'+
                                (subMenu ? '<td></td>' : '') + imgd +
                            '   <td class="menu-text" colspan="'+ colspan +'">'+ w2utils.lang(txt) +'</td>'+
                            '   <td class="menu-count">'+ count_dsp +'</td>'+
                            '</tr>'+ subMenu_dsp;
                        count++;
                    } else {
                        // horizontal line
                        var divText = txt.replace(/^-+/g, '')
                        menu_html += '<tr><td colspan="3" class="menu-divider '+ (divText != '' ? 'divider-text' : '') +'">'+
                                     '   <div class="line">'+ divText +'</div>'+
                                     '   <div class="text">'+ divText +'</div>'+
                                     '</td></tr>';
                    }
                }
                items[f] = mitem;
            }
            if (count === 0 && options.msgNoItems) {
                menu_html += '<tr><td style="padding: 13px; color: #999; text-align: center">'+ options.msgNoItems +'</div></td></tr>';
            }
            menu_html += "</tbody></table>";
            return menu_html;
        }
    };

    $.fn.w2color = function (options, callBack) {
        var obj = this;
        var $el = $(this);
        var el  = $el[0];
        // no need to init
        if ($el.data('skipInit')) {
            $el.removeData('skipInit');
            return;
        }
        // needed for keyboard navigation
        var index = [-1, -1];
        if ($.fn.w2colorPalette == null) {
            $.fn.w2colorPalette = [
                ['000000', '333333', '555555', '777777', '888888', '999999', 'AAAAAA', 'CCCCCC', 'DDDDDD', 'EEEEEE', 'F7F7F7', 'FFFFFF'],
                ['FF011B', 'FF9838', 'FFC300',  'FFFD59', '86FF14', '14FF7A', '2EFFFC', '2693FF', '006CE7', '9B24F4', 'FF21F5', 'FF0099'],
                ['FFEAEA', 'FCEFE1', 'FCF4DC',  'FFFECF', 'EBFFD9', 'D9FFE9', 'E0FFFF', 'E8F4FF', 'ECF4FC', 'EAE6F4', 'FFF5FE', 'FCF0F7'],
                ['F4CCCC', 'FCE5CD', 'FFF1C2',  'FFFDA1', 'D5FCB1', 'B5F7D0', 'BFFFFF', 'D6ECFF', 'CFE2F3', 'D9D1E9', 'FFE3FD', 'FFD9F0'],
                ['EA9899', 'F9CB9C', 'FFE48C',  'F7F56F', 'B9F77E', '84F0B1', '83F7F7', 'B5DAFF', '9FC5E8', 'B4A7D6', 'FAB9F6', 'FFADDE'],
                ['E06666', 'F6B26B', 'DEB737',  'E0DE51', '8FDB48', '52D189', '4EDEDB', '76ACE3', '6FA8DC', '8E7CC3', 'E07EDA', 'F26DBD'],
                ['CC0814', 'E69138', 'AB8816',  'B5B20E', '6BAB30', '27A85F', '1BA8A6', '3C81C7', '3D85C6', '674EA7', 'A14F9D', 'BF4990'],
                ['99050C', 'B45F17', '80650E',  '737103', '395E14', '10783D', '13615E', '094785', '0A5394', '351C75', '780172', '782C5A']
            ];
        }
        var pal = $.fn.w2colorPalette;
        if (typeof options === 'string') options = {
            color: options,
            transparent: true
        };
        if (options.onSelect == null && callBack != null) options.onSelect = callBack;
        // add remove transarent color
        if (options.transparent && pal[0][1] == '333333') {
            pal[0].splice(1, 1);
            pal[0].push('');
        }
        if (!options.transparent && pal[0][1] != '333333') {
            pal[0].splice(1, 0, '333333');
            pal[0].pop();
        }
        if (options.color) options.color = String(options.color).toUpperCase();
        if (typeof options.color === 'string' && options.color.substr(0,1) === '#') options.color = options.color.substr(1);
        if (options.fireChange == null) options.fireChange = true;

        if ($('#w2ui-overlay').length === 0) {
            $(el).w2overlay(getColorHTML(options), options);
        } else { // only refresh contents
            $('#w2ui-overlay .w2ui-colors').parent().html(getColorHTML(options));
            $('#w2ui-overlay').show();
        }
        // bind events
        $('#w2ui-overlay .w2ui-color')
            .off('.w2color')
            .on('mousedown.w2color', function (event) {
                var color = $(event.originalEvent.target).attr('name'); // should not have #
                index = $(event.originalEvent.target).attr('index').split(':');
                if (el.tagName.toUpperCase() === 'INPUT') {
                    if (options.fireChange) $(el).change();
                    $(el).next().find('>div').css('background-color', color);
                } else {
                    $(el).data('_color', color);
                }
                if (typeof options.onSelect === 'function') options.onSelect(color);
            })
            .on('mouseup.w2color', function () {
                setTimeout(function () {
                    if ($("#w2ui-overlay").length > 0) $('#w2ui-overlay').removeData('keepOpen')[0].hide();
                }, 10);
            });
        $('#w2ui-overlay .color-original')
            .off('.w2color')
            .on('click.w2color', function (event) {
                // restore original color
                var tmp = w2utils.parseColor($(event.target).css('background-color'));
                if (tmp != null) {
                    rgb = tmp;
                    hsv = w2utils.rgb2hsv(rgb);
                    setColor(hsv);
                    updateSlides();
                    refreshPalette();
                }
            });
        $('#w2ui-overlay input')
            .off('.w2color')
            .on('mousedown.w2color', function (event) {
                $('#w2ui-overlay').data('keepOpen', true);
                setTimeout(function () { $('#w2ui-overlay').data('keepOpen', true); }, 10);
                event.stopPropagation();
            })
            .on('change.w2color', function () {
                var $el = $(this);
                var val = parseFloat($el.val());
                var max = parseFloat($el.attr('max'));
                if (isNaN(val)) val = 0;
                if (max > 1) val = parseInt(val);
                if (max > 0 && val > max) {
                    $el.val(max);
                    val = max;
                }
                if (val < 0) {
                    $el.val(0);
                    val = 0;
                }
                var name  = $el.attr('name');
                var color = {};
                if (['r', 'g', 'b', 'a'].indexOf(name) !== -1) {
                    rgb[name] = val;
                    hsv = w2utils.rgb2hsv(rgb);
                } else if (['h', 's', 'v'].indexOf(name) !== -1) {
                    color[name] = val;
                }
                setColor(color);
                updateSlides();
                refreshPalette();
            });
        // advanced color events
        var initial;
        var hsv, rgb = w2utils.parseColor(options.color);
        if (rgb == null) {
            rgb = { r: 140, g: 150, b: 160, a: 1 };
            hsv = w2utils.rgb2hsv(rgb);
        }
        hsv = w2utils.rgb2hsv(rgb);

        var setColor = function (color, silent) {
            if (color.h != null) hsv.h = color.h;
            if (color.s != null) hsv.s = color.s;
            if (color.v != null) hsv.v = color.v;
            if (color.a != null) { rgb.a = color.a; hsv.a = color.a; }
            rgb = w2utils.hsv2rgb(hsv);
            // console.log(rgb)
            var newColor = 'rgba('+ rgb.r +','+ rgb.g +','+ rgb.b +','+ rgb.a +')';
            var cl = [
                Number(rgb.r).toString(16).toUpperCase(),
                Number(rgb.g).toString(16).toUpperCase(),
                Number(rgb.b).toString(16).toUpperCase(),
                (Math.round(Number(rgb.a)*255)).toString(16).toUpperCase()
            ];
            cl.forEach(function (item, ind) { if (item.length === 1) cl[ind] = '0' + item; });
            newColor = cl[0] + cl[1] + cl[2] + cl[3];
            if (rgb.a === 1) {
                newColor = cl[0] + cl[1] + cl[2];
            }
            $('#w2ui-overlay .color-preview').css('background-color', '#'+newColor);
            $('#w2ui-overlay input').each(function (index, el) {
                if (el.name) {
                    if (rgb[el.name] != null) el.value = rgb[el.name];
                    if (hsv[el.name] != null) el.value = hsv[el.name];
                    if (el.name === 'a') el.value = rgb.a;
                }
            });
            if (!silent) {
                if (el.tagName.toUpperCase() === 'INPUT') {
                    $(el).val(newColor).data('skipInit', true);
                    if (options.fireChange) $(el).change();
                    $(el).next().find('>div').css('background-color', '#'+newColor);
                } else {
                    $(el).data('_color', newColor);
                }
                if (typeof options.onSelect === 'function') options.onSelect(newColor);
            } else {
                $('#w2ui-overlay .color-original').css('background-color', '#'+newColor);
            }
        }
        var updateSlides = function () {
            var $el1 = $('#w2ui-overlay .palette .value1');
            var $el2 = $('#w2ui-overlay .rainbow .value2');
            var $el3 = $('#w2ui-overlay .alpha .value2');
            var offset1 = parseInt($el1.width()) / 2;
            var offset2 = parseInt($el2.width()) / 2;
            $el1.css({ 'left': hsv.s * 150 / 100 - offset1, 'top': (100 - hsv.v) * 125 / 100 - offset1});
            $el2.css('left', hsv.h/(360/150) - offset2);
            $el3.css('left', rgb.a*150 - offset2);
        }
        var refreshPalette = function() {
            var cl  = w2utils.hsv2rgb(hsv.h, 100, 100);
            var rgb = cl.r + ',' + cl.g + ',' + cl.b;
            $('#w2ui-overlay .palette').css('background-image',
                'linear-gradient(90deg, rgba('+ rgb +',0) 0%, rgba(' + rgb + ',1) 100%)');
        }
        var mouseDown = function (event) {
            var $el = $(this).find('.value1, .value2');
            var offset = parseInt($el.width()) / 2;
            if ($el.hasClass('move-x')) $el.css({ left: (event.offsetX - offset) + 'px' });
            if ($el.hasClass('move-y')) $el.css({ top: (event.offsetY - offset) + 'px' });
            initial = {
                $el    : $el,
                x      : event.pageX,
                y      : event.pageY,
                width  : $el.parent().width(),
                height : $el.parent().height(),
                left   : parseInt($el.css('left')),
                top    : parseInt($el.css('top'))
            };
            mouseMove(event);
            $('body').off('.w2color')
                .on(mMove, mouseMove)
                .on(mUp, mouseUp);
        };
        var mouseUp = function(event) {
            $('body').off('.w2color');
        };
        var mouseMove = function(event) {
            var $el    = initial.$el;
            var divX   = event.pageX - initial.x;
            var divY   = event.pageY - initial.y;
            var newX   = initial.left + divX;
            var newY   = initial.top + divY;
            var offset = parseInt($el.width()) / 2;
            if (newX < -offset) newX = -offset;
            if (newY < -offset) newY = -offset;
            if (newX > initial.width - offset)  newX = initial.width - offset;
            if (newY > initial.height - offset) newY = initial.height - offset
            if ($el.hasClass('move-x')) $el.css({ left : newX + 'px' });
            if ($el.hasClass('move-y')) $el.css({ top : newY + 'px' });

            // move
            var name = $el.parent().attr('name');
            var x = parseInt($el.css('left')) + offset;
            var y = parseInt($el.css('top')) + offset;
            if (name === 'palette') {
                setColor({
                    s: Math.round(x / initial.width * 100),
                    v: Math.round(100 - (y / initial.height * 100))
                });
            }
            if (name === 'rainbow') {
                var h = Math.round(360 / 150 * x);
                setColor({ h: h });
                refreshPalette();
            }
            if (name === 'alpha') {
                setColor({ a: parseFloat(Number(x / 150).toFixed(2)) });
            }
        }
        if ($.fn._colorAdvanced === true || options.advanced === true) {
            $('#w2ui-overlay .w2ui-color-tabs :nth-child(2)').click();
            $('#w2ui-overlay').removeData('keepOpen');
        }
        setColor({}, true);
        refreshPalette();
        updateSlides();

        // Events of iOS
        var mDown = 'mousedown.w2color';
        var mUp   = 'mouseup.w2color';
        var mMove = 'mousemove.w2color';
        if (w2utils.isIOS) {
            mDown = 'touchstart.w2color';
            mUp   = 'touchend.w2color';
            mMove = 'touchmove.w2color  ';
        }
        $('#w2ui-overlay .palette')
            .off('.w2color')
            .on('mousedown.w2color', mouseDown);
        $('#w2ui-overlay .rainbow')
            .off('.w2color')
            .on('mousedown.w2color', mouseDown);
        $('#w2ui-overlay .alpha')
            .off('.w2color')
            .on('mousedown.w2color', mouseDown);

        // keyboard navigation
        el.nav = function (direction) {
            switch (direction) {
                case 'up':
                    index[0]--;
                    break;
                case 'down':
                    index[0]++;
                    break;
                case 'right':
                    index[1]++;
                    break;
                case 'left':
                    index[1]--;
                    break;
            }
            if (index[0] < 0) index[0] = 0;
            if (index[0] > pal.length - 2) index[0] = pal.length - 2;
            if (index[1] < 0) index[1] = 0;
            if (index[1] > pal[0].length - 1) index[1] = pal[0].length - 1;

            color = pal[index[0]][index[1]];
            $(el).data('_color', color);
            return color;
        };

        function getColorHTML(options) {
            var color = options.color, bor;
            var html  = '<div class="w2ui-colors" onmousedown="jQuery(this).parents(\'.w2ui-overlay\').data(\'keepOpen\', true)">'+
                        '<div class="w2ui-color-palette">'+
                        '<table cellspacing="5"><tbody>';
            for (var i = 0; i < pal.length; i++) {
                html += '<tr>';
                for (var j = 0; j < pal[i].length; j++) {
                    if (pal[i][j] === 'FFFFFF') bor = ';border: 1px solid #efefef'; else bor = '';
                    html += '<td>'+
                            '    <div class="w2ui-color '+ (pal[i][j] === '' ? 'w2ui-no-color' : '') +'" style="background-color: #'+ pal[i][j] + bor +';" ' +
                            '       name="'+ pal[i][j] +'" index="'+ i + ':' + j +'">'+ (options.color == pal[i][j] ? '&#149;' : '&#160;') +
                            '    </div>'+
                            '</td>';
                    if (options.color == pal[i][j]) index = [i, j];
                }
                html += '</tr>';
                if (i < 2) html += '<tr><td style="height: 8px" colspan="8"></td></tr>';
            }
            html += '</tbody></table>'+
                    '</div>';
            if (true) {
                html += '<div class="w2ui-color-advanced" style="display: none">'+
                        '   <div class="color-info">'+
                        '       <div class="color-preview-bg"><div class="color-preview"></div><div class="color-original"></div></div>'+
                        '       <div class="color-part">'+
                        '           <span>H</span> <input name="h" maxlength="3" max="360" tabindex="101">'+
                        '           <span>R</span> <input name="r" maxlength="3" max="255" tabindex="104">'+
                        '       </div>'+
                        '       <div class="color-part">'+
                        '           <span>S</span> <input name="s" maxlength="3" max="100" tabindex="102">'+
                        '           <span>G</span> <input name="g" maxlength="3" max="255" tabindex="105">'+
                        '       </div>'+
                        '       <div class="color-part">'+
                        '           <span>V</span> <input name="v" maxlength="3" max="100" tabindex="103">'+
                        '           <span>B</span> <input name="b" maxlength="3" max="255" tabindex="106">'+
                        '       </div>'+
                        '       <div class="color-part" style="margin: 30px 0px 0px 2px">'+
                        '           <span style="width: 40px">Opacity</span> '+
                        '           <input name="a" maxlength="5" max="1" style="width: 32px !important" tabindex="107">'+
                        '       </div>'+
                        '   </div>'+
                        '   <div class="palette" name="palette">'+
                        '       <div class="palette-bg"></div>'+
                        '       <div class="value1 move-x move-y"></div>'+
                        '   </div>'+
                        '   <div class="rainbow" name="rainbow">'+
                        '       <div class="value2 move-x"></div>'+
                        '   </div>'+
                        '   <div class="alpha" name="alpha">'+
                        '       <div class="alpha-bg"></div>'+
                        '       <div class="value2 move-x"></div>'+
                        '   </div>'+
                        '</div>';
            }
            html += '<div class="w2ui-color-tabs">'+
                    '   <div class="w2ui-color-tab selected" onclick="jQuery(this).addClass(\'selected\').next().removeClass(\'selected\').parents(\'.w2ui-overlay\').find(\'.w2ui-color-advanced\').hide().parent().find(\'.w2ui-color-palette\').show(); jQuery.fn._colorAdvanced = false; jQuery(\'#w2ui-overlay\')[0].resize()"><span class="w2ui-icon w2ui-icon-colors"></span></div>'+
                    '   <div class="w2ui-color-tab" onclick="jQuery(this).addClass(\'selected\').prev().removeClass(\'selected\').parents(\'.w2ui-overlay\').find(\'.w2ui-color-advanced\').show().parent().find(\'.w2ui-color-palette\').hide(); jQuery.fn._colorAdvanced = true; jQuery(\'#w2ui-overlay\')[0].resize()"><span class="w2ui-icon w2ui-icon-settings"></span></div>'+
                    '   <div style="padding: 8px; text-align: right;">' + (typeof options.html == 'string' ? options.html : '') + '</div>' +
                    '</div>'+
                    '</div>'+
                    '<div style="clear: both; height: 0"></div>';
            return html;
        }
    };
})(jQuery);

class Bela {

    // NICE TO HAVE
    // - stash/unstash commands during the runtime
    // - bela.reload() - open({ force: true })
    // - bela.go() - back/forward in history
    // - bela.request() - xhr request
    // - flat runtime comamnds
    // - ifError
    // - begin { repeat: 10 }

    constructor(runner) {
        let self = this
        this.version = 1.0
        this.runner = runner
        this.steps = new BelaSteps()
        this.custom = new BelaCustom(this)
        // built-in steps
        Object.getOwnPropertyNames(Object.getPrototypeOf(this.steps)).forEach(step => {
            if (step == 'constructor') return;
            // self[step] = steps[step].bind(runner)
            // return  this
            self[step] = function (param, options = {}) {
                self.runner.add({
                    cmd: step,
                    args: Array.from(arguments),
                    options: options
                })
                return self
            }
        })
    }

    // These comamnds need to be here because they are pre-runtime

    begin(name, options = {}) {
        // options.expanded = bool
        // options.autorun = bool
        this.runner.begin(name, options)
        return this
    }

    end(options = {}) {
        this.runner.end(options)
        return this
    }

    tag(name, options = {}) {
        this.runner.tag(name, options)
        return this
    }
}
class BelaRunner {

    constructor(options) {
        // mix in events
        Object.assign(this, w2utils.event)
        Object.assign(this, options)

        this.bela = new Bela(this)
        window.bela = this.bela // register global for convenience

        this.win = opener ? opener : parent
        // CORS check
        try { this.win.location.href }
        catch (error) {
            if (error && error.message.indexOf('from accessing a cross-origin') != -1) {
                this.crossOrigin = true
            }
        }
        this._options = {
            pauseOnError: false,
            breakPoints: []
        }
        this.timeouts = {
            all     : 4000,    // waiting on DOM
            load    : 15000,   // page load
            network : 10000,   // network requests
            delay   : 0        // delay after each step (unused)
        }
        if (!this.crossOrigin) {
            this.loc = this.parseLocation(this.win.location)
        }
        this.clear()
    }

    set options(newOptions) {
        Object.assign(this._options, newOptions)
    }

    get options() {
        return this._options
    }

    get scope() {
        return this.proc.scope
    }

    load(callback) {
        console.log('load', this.specs)
        let self = this
        let specs = this.specs.map(spec => {
            let url = spec + (spec.indexOf('?') == -1 ? '?' : '&') + (new Date()).getTime()
            return fetch(url)
        })
        Promise.all(specs)
            .then(function (responses) {
                let texts = {}
                let files = []
                self.specs.forEach(spec => {
                    responses.forEach(res => {
                        if (res.url.indexOf(spec) != -1) {
                            files.push(res.text().then((text) => {
                                texts[spec] = text
                            }))
                        }
                    })
                })
                // when all are loaded, execute in the order as in self.sepcs
                Promise.all(files).then(() => {
                    self.specs.forEach((spec) => {
                        eval(texts[spec])
                    })
                    if (typeof callback == 'function') callback()
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    clear() {
        this.steps = []
        this.options.breakPoints = []
        this.reset()
    }

    reset() {
        let edata = this.trigger({ type: 'reset', phase: 'before' })
        this.proc = {
            current: null,
            edata: null,
            index: 0,
            init: { // steps that added before run
                parents: [],
                steps: this.steps
            },
            parents: [],
            pause: false,
            pause_at: null,
            paused: false,  // pause/resume
            previous: null,
            results: {},
            resultsOrder: [],
            running: false,
            runtime: { // steps that were introduced during runtime
                parents: [],
                steps: []
            },
            waiting: [],
            scope: {}, // to store variables
            skipBreakPoint: false,
            startTime: null,
            subject: null,
            steps: null,    // currently executed steps
            timers: []
        }

        // remove runtime steps
        _remove(Array.isArray(this.steps) ? this.steps : [])
        // reset after event
        this.trigger(Object.assign(edata, { phase: 'after' }))

        // remove steps that were added by run time
        function _remove(steps) {
            for (let i = steps.length -1; i >= 0; i--) {
                if (steps[i].runtime === true) {
                    steps.splice(i, 1)
                }
                if (steps[i] && steps[i].steps) {
                    _remove(steps[i].steps)
                }
            }
        }
    }

    add(info) {
        info.id = this.getUUID()
        if (this.proc.running === true) { // add steps during execution
            info.runtime = true
            this.proc.runtime.steps.push(info)
        } else {
            this.proc.init.steps.push(info)
        }
    }

    begin(name, options) { // options: { expanded: t/f, skip: t/f, autorun: t/f }
        let info = {
            cmd: 'group',
            args: Array.from(arguments),
            options: options,
            steps: [],
            id: this.getUUID()
        }
        let init = this.proc.init
        if (this.proc.running === true) { // add groups during execution
            init = this.proc.runtime
            info.runtime = true
        }
        init.steps.push(info)
        init.parents.push(init.steps)
        init.steps = info.steps
    }

    end() {
        let init = this.proc.init
        if (this.proc.running === true) { // add context during execution
            init = this.proc.runtime
        }
        init.steps = init.parents.pop()
    }

    tag(name, options) {
        let init = this.proc.init
        if (this.proc.running === true) { // add context during execution
            init = this.proc.runtime
            // not steps, no parents
            if (init.steps.length == 0 && init.parents.length == 0) {
                if (this.proc.steps[this.proc.index]) {
                    this.proc.steps[this.proc.index].tag2 = name
                    this.proc.steps[this.proc.index].tag = name
                }
            }
        }
        if (init.steps.length > 0) {
            init.steps[init.steps.length - 1].tag = name
        } else if (init.parents.length > 0) {
            let parent = init.parents[init.parents.length - 1]
            if (parent.length > 0) {
                parent[0].tag = name
            }
        }
    }

    run(callback) {
        let timers = this.proc.timers
        if (this.steps.length == 0) {
            console.error('BELA Runner: No commands added')
            return
        }
        if (this.proc.steps == null) {
            this.reset()
            this.proc.running = true
            this.proc.paused = false
            this.proc.steps = this.steps
            this.proc.pause_at = null
            this.proc.index = 0
        }
        let self = this
        let step = this.proc.steps[this.proc.index]
        // if (step.cmd == 'then') debugger
        // check break points
        let bp = this.options.breakPoints
        if (bp.length > 0 && bp.indexOf(step.id) != -1 && step.id != this.proc.skipBreakPoint && this.proc.pause_at != 'step-done') {
            if (this.proc.current != null) {
                this.moveTo(this.proc.current.id)
            }
            this.pause()
            return
        }
        if (this.proc.current) {
            this.proc.previous = this.proc.current
        }
        this.proc.current = step
        this.proc.skipBreakPoint = null
        this.proc.startTime = (new Date()).getTime()
        this.proc.waiting = []
        if (step.options == null) step.options = {}
        if (typeof step.options != 'object') step.options = {}

        let runtime = this.proc.runtime
        let timeout = this.getTimeout(step.cmd, step.args[0])
        // timeout from third options (wait for example)
        if (step.args[2] && typeof step.args[2] == 'object' && ['wait'].indexOf(step.cmd) != -1) {
            Object.assign(step.options, step.args[2])
        }
        // timeout from options
        if (step.options && step.options.timeout != null) {
            timeout = step.options.timeout
        }

        let result = { step: { cmd: step.cmd, args: step.args, options: step.options }}
        if (step.tag) {
            result.tag = step.tag
        }
        this.proc.current.result = result

        // clean previous timers if any
        if (timers.length > 0) {
            clearTimers()
        }

        this.proc.edata = this.trigger({ type: 'command', cmd: step.cmd, phase: 'before', target: step.id, details: step })
        // console.log('EXEC', step)

        if (step.cmd == 'group') {
            this.proc.results[step.id] = {
                success: true,
                group: step.args[0],
                ...this.proc.current.result,
                time: (new Date()).getTime() - this.proc.startTime
            }
            this.proc.resultsOrder.push(step.id)
            if (step.options.skip) {
                this.proc.results[step.id].msg = '<span class="bela-alert">skipped</span>'
                this.proc.results[step.id].skipped = true
            }
            this.trigger(Object.assign(this.proc.edata, { phase: 'after', result: this.proc.results[step.id] }))
            if (typeof callback == 'function') callback()
            this.runNext()
            return
        } else {
            // remove previous runtime steps
            if (Array.isArray(step.steps) && step.steps.length > 0) {
                let edata  = this.trigger({ type: 'runtimeRemove', phase: 'before', id: step.id })
                step.steps = []
                this.trigger(Object.assign(edata, { phase: 'after' }))
            }
            runtime.steps = []
            runtime.parents = []
        }

        var _run = (function (res, resolve, reject) {
            step.options.repeat++
            if (res && res.toString() == '[object Promise]') {
                // promise returned
                res.then((res) => {
                        resolve(res)
                    })
                    .catch((error) => {
                        reject({ success: false, error: 'Error in promise', details: error })
                    })
            } else if (typeof res == 'function') { // function returned
                let res2 = res(step.args[0], step.options)
                if (typeof res2 == 'object' && (res2.repeat === true || (isFinite(res.repeat) && res.repeat > step.options.repeat))) {
                    let timer = setTimeout(() => {
                        _run(res, resolve, reject)
                    }, 20)
                    timers.push(timer)
                } else {
                    _run(res2, resolve, reject)
                }
            } else if (typeof res == 'object') {
                // if an object is returned
                if (res.repeat === true || (isFinite(res.repeat) && res.repeat > step.options.repeat)) {
                    // resubmit on a timer
                    let timer = setTimeout(() => {
                        let func = self.bela.steps[step.cmd].bind(self)
                        _run(func(step.args[0], Object.assign({ args: step.args }, step.options)), resolve, reject)
                    }, 20)
                    timers.push(timer)
                } else {
                    if (res.success != null) {
                        if (res.success === false) {
                            reject(res)
                        } else {
                            resolve(res)
                        }
                    } else {
                        resolve(res)
                    }
                }
            } else {
                // any other return is a success
                resolve(res)
            }
        }).bind(this)

        var prom = new Promise(function(resolve, reject) {
            // fail on timeout
            let timer = setTimeout(() => {
                reject({ error: `Timeout reached (${w2utils.formatNumber(timeout)} ms).` })
            }, timeout)
            timers.push(timer)
            step.options.repeat = 0
            let func = self.bela.steps[step.cmd].bind(self)
            _run(func(step.args[0], Object.assign({ args: step.args }, step.options)), resolve, reject) // step will be called multiple timers if it return false
        })

        prom.then((res) => {
            clearTimers()
            if (res && res.subject != null) {
                this.proc.subject = res.subject
            }

            this.proc.results[step.id] = {
                success: true,
                ...this.proc.current.result,
                ...res,
                subject: (res && res.subject != null ? cleanSubject(this.proc.subject) : null),
                time: (new Date()).getTime() - this.proc.startTime
            }
            this.proc.resultsOrder.push(step.id)
            if (this.proc.results[step.id].subject == null) {
                delete this.proc.results[step.id].subject
            }
            if (step.options.assertion === true) {
                this.proc.results[step.id].assertion = true
            }
            if (res && res.msg) {
                this.proc.results[step.id].msg = res.msg
            }
            if (res && res.details) {
                this.proc.results[step.id].details = res.details
            }
            if (step.options.password) {
                this.proc.results[step.id].step.args[0] = "********"
            }

            // add runtime steps, if any
            if (Array.isArray(runtime.parents) && runtime.parents.length > 0) {
                runtime.steps = runtime.parents[0]
            }
            if (Array.isArray(runtime.steps) && runtime.steps.length > 0) {
                let edata   = this.trigger({ type: 'runtimeAdd', phase: 'before', id: step.id, step })
                step.steps = runtime.steps
                this.trigger(Object.assign(edata, { phase: 'after' }))
            }
            // command completed
            this.trigger(Object.assign(this.proc.edata, { phase: 'after', result: this.proc.results[step.id] }))
            if (typeof callback == 'function') callback()
            this.runNext()
        })
        .catch((error) => {
            if (error.name == 'TypeError') {
                // JS error in promise
                console.error(error)
            }
            clearTimers()
            let parentIds = []
            this.proc.parents.forEach(parent => { parent.error = true; parentIds.push(parent.steps[parent.index].id) })
            if (!this.proc.current) { this.proc.current = { result: {} } }
            if (['get', 'find', 'closest'].includes(this.proc.current.cmd)) {
                this.proc.subject = $(null)
            }
            let result = {
                success: false,
                ...this.proc.current.result,
                ...error,
                time: (new Date()).getTime() - this.proc.startTime
            }
            if (error && error.msg) {
                result.msg = error.msg
            }
            if (error && error.details) {
                result.details = error.details
            }
            if (error && error.error && result.msg == null) {
                result.msg = error.error
                delete result.error
            }
            // will move "network" property to the end of object, so it is better for display
            if (result.network) {
                let tmp = result.network
                delete result.network
                result.network = tmp
            }
            this.proc.results[step.id] = result
            this.proc.resultsOrder.push(step.id)
            if (this.proc.edata == null) {
                this.proc.edata = { type: 'unknown' }
            }
            // add runtime steps, if any
            if (Array.isArray(runtime.parents) && runtime.parents.length > 0) {
                runtime.steps = runtime.parents[0]
            }
            if (Array.isArray(runtime.steps) && runtime.steps.length > 0) {
                let edata   = this.trigger({ type: 'runtimeAdd', phase: 'before', id: step.id, step })
                step.steps = runtime.steps
                this.trigger(Object.assign(edata, { phase: 'after' }))
            }
            // command completed
            this.trigger(Object.assign(this.proc.edata, { phase: 'after', result }))
            if (typeof callback == 'function') callback()
            if (this.options.pauseOnError && this.proc.pause_at == null) {
                this.pause(error.msg || error)
                return
            } else {
                this.runNext()
            }
            // send parent ids of the error
            let edata2 = this.trigger({ type: 'error', phase: 'before', ids: parentIds, msg: 'Sub-step  error'})
            this.trigger(Object.assign(edata2, { phase: 'after' }))
        })
        return

        function clearTimers() {
            timers.forEach(timer => {
                clearTimeout(timer)
            })
            timers.splice(0, timers.length)
        }

        function cleanSubject(subject) {
            if (subject != null) {
                if (subject instanceof jQuery) {
                    let res = []
                    subject.each((ind, el) => {
                        let inner = ''
                        if (el.hasAttributes()) {
                           let attrs = el.attributes
                           for (let i = attrs.length - 1; i >= 0; i--) {
                             inner += ' ' + attrs[i].name + '="' + attrs[i].value + '"'
                           }
                        }
                        res.push(w2utils.encodeTags(`<${String(el.tagName).toLowerCase()}${inner}>`))
                    })
                    subject = res
                } else if (subject && typeof subject == 'object') {
                    let res = {}
                    Object.keys(subject).forEach(key => {
                        if (typeof subject[key] == 'function') {
                            res[key] = 'function'
                        } else if (Array.isArray(subject[key])) {
                            res[key] = `array(${subject[key].length})`
                        } else if (subject[key] == null) {
                            res[key] = subject[key]
                        } else if (typeof subject[key] == 'object') {
                            res[key] = `{...}`
                        } else {
                            res[key] = subject[key]
                        }
                    })
                    subject = res
                }
            }
            return subject
        }
    }

    runNext() {
        if (!this.proc.running || !this.proc.steps) {
            return
        }
        let step = this.proc.steps[this.proc.index]
        if (this.proc.pause_at == 'step-done' || (this.proc.pause_at == 'step-in' && step && this.proc.pause_id == step.id)) {
            this.pause()
            return
        }
        if (step && Array.isArray(step.steps) && step.steps.length > 0 && !step.options.skip) {
            this.proc.parents.push({
                steps: this.proc.steps,
                index: this.proc.index,
                edata: this.trigger({ type: 'enterSub', phase: 'before', target: step.id })
            })
            this.proc.steps = step.steps
            this.proc.index = 0
            this.run()
        } else {
            this.proc.index++
            let next = this.proc.steps[this.proc.index]
            if (next != null) {
                this.run()
            } else if (this.proc.parents.length > 0) {
                let parent = this.proc.parents.pop()
                let parentStep = parent.steps[parent.index]
                if (this.proc.pause_at == 'step-out' && parent.edata && this.proc.pause_id == parentStep.id) {
                    this.proc.parents.push(parent) // return parent so next can be calculated right
                    if (parent.edata.type == null) parent.edata.type = 'enterSub' // not sure why it is not set elsewhere
                    this.trigger(Object.assign(parent.edata, { phase: 'after', success: !parent.error })) // sent sub exits event
                    this.pause()
                    return
                } else {
                    this.proc.steps = parent.steps
                    this.proc.index = parent.index + 1
                    if (parent && parent.edata) { // send after phase only if before was sent
                        this.trigger(Object.assign(parent.edata, { phase: 'after', success: !parent.error }))
                    }
                    if (this.proc.steps[this.proc.index] != null) {
                        this.run()
                    } else {
                        this.runNext()
                    }
                }
            } else {
                this.proc.running = false
                this.proc.paused = false
                this.proc.steps = null
                let edata = this.trigger({ type: 'done', phase: 'before', results: this.proc.results })
                this.trigger(Object.assign(edata, { phase: 'after' }))
            }
        }
    }

    getNext() {
        let step = this.proc.steps[this.proc.index]
        if (!step) {
            if (this.proc.parents.length > 0) {
                let parent = this.proc.parents.pop()
                this.proc.steps = parent.steps
                this.proc.index = parent.index + 1
                step = this.proc.steps[this.proc.index]
                if (!step) {
                    return this.getNext()
                } else {
                    return step
                }
            } else {
                return {}
            }
        } else {
            if (Array.isArray(step.steps) && step.steps.length > 0  && !step.options.skip) {
                return step.steps[0]
            } else {
                let next = this.proc.steps[this.proc.index + 1]
                if (next != null) {
                    return next
                } else {
                    let parents = this.getParents(step.id)
                    if (parents.length > 0) {
                        for (let i = parents.length-1; i >= 0; i--) {
                            let p = parents[i]
                            let next = p.steps[p.index + 1]
                            if (next) return next
                        }
                    }
                }
            }
        }
        return {}
    }

    moveTo(stepId, steps) {
        if (steps == null) {
            steps = this.steps
        }
        steps.forEach((step, ind) => {
            if (step.id === stepId) {
                this.proc.steps = steps
                this.proc.index = ind
                this.proc.parents = this.getParents(step.id) // .map(p => { p.index++; return p }) // it should point to next step in parent list
                return
            }
            if (Array.isArray(step.steps) && step.steps.length > 0) {
                this.moveTo(stepId, step.steps)
            }
        })
    }

    get(stepId, steps) {
        let found = null
        if (steps == null) {
            // if already running, then go to root of ran steps
            if (this.proc.parents.length > 0) {
                steps = runner.proc.parents[0].steps
            } else {
                steps = this.steps
            }
        }
        steps.forEach((step, ind) => {
            if (found != null) {
                return
            }
            if (step.id === stepId) {
                found = step
            }
            if (Array.isArray(step.steps) && step.steps.length > 0) {
                found = this.get(stepId, step.steps)
            }
        })
        return found
    }

    getParents(stepId, steps, parents, opt) {
        if (opt == null) opt = { parents: [], found: false }
        if (steps == null) steps = this.steps
        if (parents == null) parents = []
        steps.forEach((step, ind) => {
            if (opt.found) return
            if (stepId == step.id) {
                opt.found = true
                opt.parents = parents.map(p => { return { index: p.index, steps: p.steps, edata: p.edata }}) // need a copy
            }
            if (Array.isArray(step.steps) && step.steps.length > 0) {
                // TODO: check
                parents.push({ index: ind, steps, edata: { type: 'enterSub', phase: 'before', target: step.id } })
                this.getParents(stepId, step.steps, parents, opt)
                parents.pop()
            }
        })
        return opt.parents
    }

    pause(error) {
        if (this.proc.running === true) {
            if (this.proc.steps[this.proc.index]) {
                this.proc.steps[this.proc.index].error = error
            }
            this.proc.running = false
            this.proc.paused  = true
            this.proc.pause_at = null
            this.proc.pause_id = null
            let next = this.getNext()
            if (next.id) {
                if (typeof this.proc.pause_callback == 'function') {
                    let res = this.proc.pause_callback(this.proc.current, next)
                    if (res === false) return
                }
                this.proc.pause_callback = null

                this.trigger({ type: 'pause', phase: 'before', error, current: this.proc.current, next })
            } else {
                // if there is no next
                this.resume()
            }
        } else {
            console.error('BELA Runner: Test are not running')
        }
    }

    resume() {
        if (this.proc.running === false) {
            this.proc.running = true
            this.proc.paused = false
            this.proc.pause_at = null
            this.proc.pause_id = null
            this.proc.pause_callback = null
            this.runNext()
        } else {
            console.error('BELA Runner: Tests are already running')
        }
    }

    network(details) {
        // ignore network activity when no current step
        if (!this.proc.current) {
            let msg = 'because there is no current step.'
            if (this.proc.paused) msg = 'because steps are paused.'
            console.log(`Ignore Network activity ${msg}:`, details)
            return false
        }
        let result = this.proc.current.result
        result.network = result.network || []
        result.network.push(details)
        if (Array.isArray(this.proc.waiting) && this.proc.waiting.length > 0) {
            this.proc.waiting.forEach(dtl => {
                if (minimatch(details.url, dtl.url) && minimatch(details.method, dtl.method, { nocase: true })) {
                    if (dtl.count > 0) {
                        dtl.found = (dtl.found || 0) + 1
                        if (dtl.found >= dtl.count) {
                            dtl.loaded = true
                        }
                    } else {
                        dtl.found = 1
                        dtl.loaded = true
                    }
                    details.name = dtl.name
                    details.match = true
                }
            })
            // resolve waiting promise
            if (this.proc.waiting.filter(w => !w.loaded).length == 0) {
                this.proc._resolve()
            }
        }
        return true
    }

    // Utilities

    getTimeout(cmd, param) {
        let timeout = this.timeouts.all
        if (['open'].indexOf(cmd) != -1) {
            timeout = this.timeouts.load
        }
        if (['wait'].indexOf(cmd) != -1) {
            if (!isNaN(param)) {
                // one second over wait time
                timeout = parseInt(param) + 1000
            } else if (param == 'network') {
                timeout = this.timeouts.network
            } else if (param == 'page.load' || param == 'reload') {
                timeout = this.timeouts.load
            }
        }
        return timeout
    }

    parseLocation(loc) {
        let host   = loc.protocol + '//' + loc.host
        let path   = loc.href.substr(host.length)
        let file   = path.split('?')[0]
        let params = path.substr(file.length)
        let hash   = ''
        if (file.indexOf('#') != -1) {
            let tmp = file.split('#')
            file = tmp[0]
            hash = '#' + tmp[1]
        } else if (params.indexOf('#') != -1) {
            let tmp = params.split('#')
            params = tmp[0]
            hash = '#' + tmp[1]
        }
        let folder = file.substr(0, file.lastIndexOf('/') + 1)
        file = file.substr(folder.length)
        return { host, folder, file, hash, params, href: loc.href }
    }

    getUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }

    getPosition(type, rect, ret = { x: 0, y: 0 }) {
        switch (type) {
            case 'center': {
                ret.x = Math.floor(parseInt(rect.width / 2))
                ret.y = Math.floor(parseInt(rect.height / 2))
                break
            }
            case 'left': {
                ret.x = 1
                ret.y = Math.floor(parseInt(rect.height / 2))
                break
            }
            case 'right': {
                ret.x = rect.width -1
                ret.y = Math.floor(parseInt(rect.height / 2))
                break
            }
            case 'top': {
                ret.x = Math.floor(parseInt(rect.width / 2))
                ret.y = 1
                break
            }
            case 'bottom': {
                ret.x = Math.floor(parseInt(rect.width / 2))
                ret.y = rect.height - 1
                break
            }
            case 'top-left': {
                ret.x = 1
                ret.y = 1
                break
            }
            case 'top-right': {
                ret.x = rect.width - 1
                ret.y = 1
                break
            }
            case 'bottom-left': {
                ret.x = 1
                ret.y = rect.height - 1
                break
            }
            case 'bottom-right': {
                ret.x = rect.width - 1
                ret.y = rect.height - 1
                break
            }
        }
        return ret
    }
}
class BelaSteps {
    let(key, options) {
        let data = {}
        let opt = options.args[1]
        if (typeof key == 'string') {
            // ignore @ sign if first
            if (key.substr(0, 1) === '@') {
                key = key.substr(1)
            }
            data[key] = (opt != null && typeof opt == 'object' ? $.extend(true, {}, opt) : opt)
        } else if (key != null && typeof key == 'object') {
            $.extend(true, data, key)
        }
        this.proc.scope = this.proc.scope || {}
        Object.keys(data).forEach(k => {
            if (typeof k == 'string' && k.substr(0, 1) === '@') {
                k = k.substr(1)
                data[k] = data['@' + k]
                delete data['@' + k]
            }
            if (data[k].repeat != null && typeof data[k].repeat == 'number') {
                delete data[k].repeat
            }
            this.proc.scope[k] = data[k]
        })
        let msg = ''
        let kk = Object.keys(data)
        if (kk.length == 1) {
            let tmp = data[kk[0]]
            msg = `@${kk[0]}=${tmp != null && typeof tmp == 'object' ? '[Object]' : tmp }`
        } else {
            msg = kk.map(k=>'@'+k).join(', ')
        }
        return { msg, details: data }
    }

    network(key, options) {
        // similar to let, but with type = network
        // network('@lenta', 'http://lenta.ru')
        // network('@wiki', { method: 'GET', url: 'https://en.wikipedia.org*' })
        // network({
        //     '@param1': 'http://w2ui.com',
        //     '@param2': { method: 'POST', url: 'https://w2ui.com' }
        // })
        let urls = {}
        let opt  = options.args[1]
        if (typeof key == 'string') {
            // ignore @ sign if first
            if (key.substr(0, 1) === '@') {
                key = key.substr(1)
            }
            urls[key] = (opt != null && typeof opt == 'object' ? $.extend(true, {}, opt) : opt)
        } else if (key != null && typeof key == 'object') {
            $.extend(true, urls, key)
        }
        this.proc.scope = this.proc.scope || {}
        Object.keys(urls).forEach(k => {
            if (k.substr(0, 1) === '@') {
                k = k.substr(1)
                urls[k] = urls['@' + k]
                delete urls['@' + k]
            }
            if (typeof urls[k] == 'string') {
                urls[k] = { method: '*', url: urls[k] }
            }
            if (urls[k].method == null) {
                urls[k].method = '*'
            }
            if (urls[k].repeat != null && typeof urls[k].repeat == 'number') {
                delete urls[k].repeat
            }
            urls[k].type = 'network'
            this.proc.scope[k] = urls[k]
        })
        let msg = ''
        let kk = Object.keys(urls)
        if (kk.length == 1) {
            msg = `@${kk[0]}=${urls[kk[0]].url}`
        } else {
            msg = kk.map(k => '@' + k).join(', ')
        }
        return { msg, details: urls }
    }

    listen() {
        // todo: should listen to network requests
    }

    break() {
        // jump to last task in the group
        this.proc.index = this.proc.steps.length
        return { success: true, details: 'Exit current "begin"' }
    }

    log(msg, options = {}) {
        delete options.args
        delete options.repeat
        return Object.assign({ success: true, msg: msg }, options)
    }

    error(text, options = {}) {
        delete options.args
        delete options.repeat
        return Object.assign({ success: false, error: text }, options)
    }

    pause() {
        this.pause('Paused.')
    }

    open(url, options = {}) {
        let go_url
        let result = this.proc.current ? this.proc.current.result : {}
        result.reloaded = false
        if (url.substr(0, 8) === 'https://' || url.substr(0, 7) === 'http://') {
            go_url = url
        } else if (url.substr(0, 1) === '/') {
            go_url = this.loc.host + url
        } else if (url.substr(0, 1) === '#') {
            go_url = this.loc.host + this.loc.folder + this.loc.file + url + this.loc.params
        } else {
            go_url = this.loc.host + this.loc.folder + url
        }
        if (url[0] == '@') {
            let name = String(url).substr(1)
            go_url = this.proc.scope[name]
            if (typeof go_url != 'string') {
                result.details = `Define variable ${options.args[0]} using "let" command as a string.`
                return { success: false, msg: `Undefined ${options.args[0]}` }
            }
        }
        this.proc.current.result.url = go_url
        if (options.msg) {
            this.proc.current.result.msg = options.msg
        }
        if (this.win.location.href != go_url) {
            if (!this.win.pageUnloading) {
                this.proc.subject = null // for page reload subject should be emptied
                this.win.location = go_url
            }
            result.reloaded = true
            return { repeat: true, url: go_url }
        }
        if (this.win.location.href == go_url && (options.force || options.reload)) {
            // runner/index.js sets this up
            if (!this.win.pageUnloading) {
                this.proc.subject = null // for page reload subject should be emptied
                result.reloaded = true
                this.win.location.reload()
            }
            return { repeat: true, details: go_url }
        }
        // already on the page, do not reload
    }

    // realod current page
    reload(options = {}) {
        options.reload = true
        options.msg = "Page reloaded"
        return this.bela.steps.open.call(this, this.win.location.href, options)
    }

    get(selector, options = {}) {
        // returns jQuery subject
        let result = this.proc.current ? this.proc.current.result : {}
        selector = String(selector)
        result.selector = selector
        if (selector.substr(0, 1) === '@') {
            selector = this.proc.scope[selector.substr(1)]
            result.selector += ' = ' + selector
            if (typeof selector != 'string') {
                result.details = `Define variable ${options.args[0]} using "let" command as a string.`
                return { success: false, msg: `Undefined ${options.args[0]}` }
            }
        }
        let res = $(selector, this.win.document)
        if (res.length > 0) {
            return { subject: res, count: res.length, details: `${res.length} elements` }
        } else {
            return { repeat: true }
        }
    }

    find(selector, options = {}) {
        // returns jQuery subject
        let result = this.proc.current ? this.proc.current.result : {}
        result.selector = selector
        if (selector == null || selector === '') {
            return { success: false, error: 'Selector is not provided' }
        }
        if (selector.substr(0, 1) === '@') {
            selector = this.proc.scope[selector.substr(1)]
            if (typeof selector != 'string') {
                result.details = `Define variable ${options.args[0]} using "let" command as a string.`
                return { success: false, msg: `Undefined ${options.args[0]}` }
            }
        }
        let res = $(this.proc.subject).find(selector)
        if (res.length > 0) {
            return { subject: res, count: res.length, details: `${res.length} elements` }
        } else {
            return { repeat: true }
        }
    }

    closest(selector, options = {}) {
        // returns jQuery subject
        let result = this.proc.current ? this.proc.current.result : {}
        result.selector = selector
        if (selector == null || selector === '') {
            return { success: false, error: 'Selector is not provided' }
        }
        if (selector.substr(0, 1) === '@') {
            selector = this.proc.scope[selector.substr(1)]
            if (typeof selector != 'string') {
                result.details = `Define variable ${options.args[0]} using "let" command as a string.`
                return { success: false, msg: `Undefined ${options.args[0]}` }
            }
        }
        let res = $(this.proc.subject).closest(selector)
        if (res.length > 0) {
            return { subject: res, count: res.length, details: `${res.length} elements` }
        } else {
            return { repeat: true }
        }
    }

    invoke(method, options = {}) {
        let el = this.proc.subject
        let args = options.args.slice(1) // exclude first argument
        if (args == null) args = []
        if (!Array.isArray(args)) args = [args]
        if (typeof el[method] == 'function') {
            return { subject: el[method].apply(el, args) }
        } else {
            return { success: false, error: `The subject does not have method "${method}"` }
        }
    }

    if(selector, options = {}) {
        let result = this.proc.current ? this.proc.current.result : {}
        if (selector.substr(0, 1) === '@') {
            selector = this.proc.scope[selector.substr(1)]
            if (typeof selector != 'string') {
                result.details = `Define variable ${options.args[0]} using "let" command as a string.`
                return { success: false, msg: `Undefined ${options.args[0]}` }
            }
        }
        let res = $(selector, this.win.document)
        let cond = 'exists'
        if (options.args.length == 2 && res.length > 0) {
            let func = options.args[1]
            if (typeof func != 'function') {
                return { success: false, details: 'Third argument should be a function' }
            }
            func.call(this, { subj: res, win: this.win, self: this, scope: this.proc.scope })
            return { success: true, details: 'Element exists'}
        } else if (options.args.length == 3) {
            let func = options.args[2]
            if (typeof func != 'function') {
                return { success: false, details: 'Third argument should be a function' }
            }
            switch (options.args[1]) {
                case 'exist':
                case 'exists':
                    if (res.length > 0) {
                        func.call(this, { subj: res, win: this.win, self: this, scope: this.proc.scope })
                        return { success: true, msg: 'Condition met', details: 'Element exists' }
                    }
                    break
                case 'not.exist':
                case 'not.exists':
                case 'does.not.exists':
                    cond = 'does not exist'
                    if (res.length == 0) {
                        func.call(this, { subj: res, win: this.win, self: this, scope: this.proc.scope })
                        return { success: true, msg: 'Condition met', details: 'Element does not exist' }
                    }
                    break
                case 'visible':
                case 'is.visible':
                    cond = 'exists and is visible'
                    if (res.length > 0 && res.css('display') !== 'none' && res.css('opacity') !== 0) {
                        func.call(this, { subj: res, win: this.win, self: this, scope: this.proc.scope })
                        return { success: true, msg: 'Condition met', details: 'Element is visible' }
                    }
                    break
                case 'not.visible':
                case 'is.not.visible':
                    cond = 'exists and is not visible'
                    if (res.length > 0 && res.css('display') === 'none' || res.css('opacity') === 0) {
                        func.call(this, { subj: res, win: this.win, self: this, scope: this.proc.scope })
                        return { success: true, msg: 'Condition met', details: 'Element is not visible' }
                    }
                    break

            }
        }
        return { success: true, msg: `Condition is not met`, details: `If "${selector}" ${cond} then execute function.` }
    }

    then(func, options = {}) {
        // .then(func)
        // .then('message', func)
        // .then(func, arg1, arg2, ...) -- first argument of func is alaways event

        let result = this.proc.current ? this.proc.current.result : {}
        let edata = {
            subj: this.proc.subject,
            win: this.win,
            self: this,
            scope: this.proc.scope
        }
        if (typeof func == 'string' && typeof options.args[1] == 'function') {
            result.msg = func
            func = options.args[1]
            options.args = options.args.splice(1)
        }
        if (typeof func == 'function') {
            return func.call(this, edata, ...options.args.splice(1))
        } else {
            return { success: false, msg: 'First or second argument should be a function' }
        }
    }

    wait(param, options = {}) {
        let result = this.proc.current ? this.proc.current.result : {}
        if (!isNaN(param)) {
            options.type  = 'timer'
            result.msg = param < 10000 ? (param/1000) + ' sec' : w2utils.formatters.interval(param)
        }
        if (typeof param == 'string') {
            switch (param) {
                case 'ready':
                case 'page.ready': {
                    options.type = 'page.ready'
                    result.msg = 'Page ready'
                    result.details = 'Waiting for page to load and DOM to be ready'
                    break
                }
                case 'reload':
                case 'page.reload': {
                    options.type = 'page.reload'
                    result.msg = 'Page reloaded'
                    result.details = 'Waiting for page to reload'
                    break
                }
                case 'network': {
                    this.proc.waiting = []
                    options.type = 'network'
                    let details = options.args[1]
                    if (!Array.isArray(details)) details = [details]
                    let names = []
                    let errors = []
                    details.forEach(dtl => {
                        let data = { method: '*', url: dtl, loaded: false, count: 1 }
                        let name = '...'
                        if (typeof data.url == 'object' && data.url.url != null ) {
                            let tmp = data.url
                            delete data.url
                            Object.assign(data, tmp)
                        } else if (typeof dtl == 'string' && dtl.substr(0, 1) == '@') {
                            name = dtl
                            let tmp = this.proc.scope[dtl.substr(1)]
                            if (tmp == null) {
                                errors.push(`Undefined variable "${dtl}"`)
                            } else if (tmp.type == 'network') {
                                data = { method: tmp.method, url: tmp.url, loaded: false, count: tmp.count || 1 }
                            } else {
                                data = { method: '*', url: tmp, loaded: false, count: 1 }
                            }
                        }
                        data.name = name
                        names.push(name)
                        this.proc.waiting.push(data)
                    })
                    if (errors.length != 0) {
                        this.proc.waiting.splice(0)
                        return { success: false, error: errors[0], details: errors }
                    }
                    result.msg = `Network: ${names.length} urls`
                    result.details = this.proc.waiting
                    break
                }
                default: {
                    if (param[0] == '@') {
                        param = this.proc.scope[param.substr(1)]
                        if (typeof param != 'string') {
                            result.details = `Define variable ${options.args[0]} using "let" command.`
                            return { success: false, msg: `Undefined ${options.args[0]}`}
                        }
                        options.type = 'dom.change'
                        result.msg = `${options.args[0]} "${options.args[1]}"`
                    } else {
                        // assume it is a selector
                        options.type = 'dom.change'
                        result.selector = param
                        result.msg = `${options.args[1]} = "${options.args[2] != null ? options.args[2] : ''}"`
                        result.details = `Wait for "${param}" "${options.args[1]}" "${options.args[2] != null ? options.args[2] : ''}"`
                    }
                }
            }
        }

        switch (options.type) {
            case 'timer': {
                return new Promise((resolve, reject) => {
                    setTimeout(() => { resolve({}) }, param)
                })
                break
            }
            case 'page.ready': {
                // pageUnloading set by bela frame
                // repeat at least once cycle, needed if clicked on link
                if (options.repeat === 0 || parent.document.readyState != 'complete') {
                    return { repeat: true }
                }
                break
            }
            case 'page.reload': {
                if (this.proc.current.result.reloaded !== true || parent.document.readyState != 'complete') {
                    return { repeat: true }
                }
                // pageUnloading set by bela frame
                if (parent.pageUnloading !== true) {
                    options.reloaded = true
                }
                break
            }
            case 'network': {
                // check if all loaded
                return new Promise((resolve, reject) => {
                    this.proc._resolve = resolve
                    this.proc._reject = reject
                })
                // if (options.repeat === 0 || this.proc.waiting.filter(w => !w.loaded) > 0) {
                //     return { repeat: true }
                // } else {
                //     return { success: true }
                // }
            }
            case 'dom.change': {
                let res = $(param, this.win.document)
                switch (options.args[1]) {
                    case 'to.have.class': {
                        result.count = res.length
                        if (!res.hasClass(options.args[2])) {
                            return { repeat: true }
                        }
                        break
                    }
                    case 'to.not.have.class': {
                        result.count = res.length
                        if (res.hasClass(options.args[2])) {
                            return { repeat: true }
                        }
                        break
                    }
                    case 'to.appear':
                    case 'to.be.visible': {
                        if (res.length == 0 || res.css('display') == 'none' || res.css('opacity') != 1) {
                            return { repeat: true }
                        }
                        result.details = `Element(s) are visible visible (display != 'none' || opactiy == 1)`
                        result.count = res.length
                        break
                    }
                    case 'to.disappear':
                    case 'to.be.hidden': {
                        if (!(res.length == 0 || res.css('display') == 'none' || res.css('opacity') == 0)) {
                            return { repeat: true }
                        }
                        result.details = `Element(s) are not visible visible (display == 'none' || opactiy == 0)`
                        result.count = res.length
                        break
                    }
                    case 'to.be.removed':
                    case 'to.not.exist': {
                        if (res.length > 0) {
                            return { repeat: true }
                        }
                        result.details = `Element${res.length > 1 ? 's' : ''} "${param}" ${res.length > 1 ? 'do' : 'does'} not exist`
                        break
                    }
                    case 'to.be.added':
                    case 'to.exist': {
                        if (res.length == 0) {
                            return { repeat: true }
                        }
                        result.details = `Element${res.length > 1 ? 's' : ''} "${param}" exist${res.length > 1 ? '' : 's'}`
                        result.count   = res.length
                        break
                    }
                    default: {
                        return {
                            success: false,
                            msg: options.args[1] == null || options.args[1] === ''
                                ? `Second argument cannot be empty `
                                : `Unrecognized argument "${options.args[1]}" `
                        }
                    }
                }
                break
            }
        }
    }

    click(options = {}) {
        // options.delay
        // options.multiple
        // options.*key (modifiers)
        // options.double
        // options.positon = 'center'

        if (options.delay == null) options.delay = 10
        if (options.multiple == null) options.multiple = false
        // default second arg is position
        if (options.args && typeof options.args[1] == 'string') {
            options.position = options.args[1]
        }

        let subj = this.proc.subject
        let win  = this.win
        let result = this.proc.current.result
        let events = ['mousemove', 'mouseover', 'mousedown', 'mouseup', 'click']
        if (options.double) {
            events.push('mousedown', 'mouseup', 'click')
        }
        events.push('mouseout')
        let modifiers = {
            ctrlKey: options.ctrlKey || false,
            shiftKey: options.shiftKey || false,
            altKey: options.altKey || false,
            metaKey: options.metaKey || false,
            button: options.button || 0,
            bubbles: true,
            cancelable: true,
            view: this.win
        }
        if (options.multiple !== true) {
            subj = $(subj[0])
        }
        let prom = new Promise((resolve, reject) => {
            if (subj && subj.length > 0) {
                (function process(subj, index) {
                    let el = subj[index]
                    let rect = el.getBoundingClientRect()
                    // default position is center
                    if (options.x == null && options.y == null && options.position == null) {
                        options.position = 'center'
                    }
                    let { x, y } = (options.position != null
                        ? runner.getPosition(options.position, rect)
                        : { x: options.x, y: options.y })
                    Object.assign(modifiers, {
                        x: rect.x + x,
                        y: rect.y + y,
                        clientX: x,
                        clientY: y
                    })
                    result.modifiers = Object.assign({}, modifiers)
                    delete result.modifiers.view // otherwise circular JSON
                    sendEvents(el)
                    if (subj.length > index + 1) {
                        setTimeout(() => {
                            process(subj, index + 1)
                        }, options.delay || 0)
                    } else {
                        setTimeout(() => {
                            resolve({
                                msg: 'ok',
                                events: events.join(', '),
                                multiple: options.multiple,
                                delay: options.delay,
                                position: options.position
                            })
                        }, options.delay || 0)
                    }
                })(subj, 0)
            } else {
                reject('Cannot execute CLICK command on an empty subject')
            }

            function sendEvents(el) {
                events.forEach(eventType => {
                    let event = new win.MouseEvent(eventType, modifiers)
                    event.initMouseEvent(event.type, true, true, modifiers.view, null,
                        modifiers.clientX, modifiers.clientY, modifiers.x, modifiers.y,
                        modifiers.ctrlKey, modifiers.altKey, modifiers.shiftKey, modifiers.metaKey,
                        modifiers.button, el)
                    el.dispatchEvent(event)
                })
            }
        })
        return prom
    }

    trigger(param, options = { multiple: false }) {
        // options.delay
        // options.multiple
        // options.*key (modifiers)
        // options.positon = 'center'

        if (options.delay == null) options.delay = 10
        if (options.multiple == null) options.multiple = false
        // default second arg is position
        if (options.args && typeof options.args[1] == 'string') {
            options.position = options.args[1]
        }

        let subj = this.proc.subject
        let win  = this.win
        let result = this.proc.current.result
        let obj = this
        let events = Array.isArray(param) ? param : [param]
        let modifiers = {
            ctrlKey: options.ctrlKey || false,
            shiftKey: options.shiftKey || false,
            altKey: options.altKey || false,
            metaKey: options.metaKey || false,
            button: options.button || 0,
            bubbles: true,
            cancelable: true,
            view: this.win
        }
        if (options.multiple !== true) {
            subj = $(subj[0])
        }
        let prom = new Promise((resolve, reject) => {
            if (subj && subj.length > 0) {
                (function process(subj, index) {
                    let el = subj[index]
                    let rect = el.getBoundingClientRect()
                    // default position is center
                    if (options.x == null && options.y == null && options.position == null) {
                        options.position = 'center'
                    }
                    let { x, y } = (options.position != null
                        ? runner.getPosition(options.position, rect)
                        : { x: options.x, y: options.y })
                    Object.assign(modifiers, {
                        x: rect.x + x,
                        y: rect.y + y,
                        clientX: x,
                        clientY: y
                    })
                    result.modifiers = Object.assign({}, modifiers)
                    delete result.modifiers.view // otherwise circular JSON
                    sendEvents(el)
                    if (subj.length > index + 1) {
                        setTimeout(() => {
                            process(subj, index + 1)
                        }, options.delay || 0)
                    } else {
                        setTimeout(() => {
                            resolve({
                                msg: param,
                                multiple: options.multiple,
                                delay: options.delay,
                                position: options.position
                            })
                        }, options.delay || 0)
                    }
                })(subj, 0)
            } else {
                reject('Cannot execute TRIGGER command on an empty subject')
            }

            function sendEvents(el) {
                events.forEach(eventType => {
                    let event = new win.MouseEvent(eventType, modifiers)
                    event.initMouseEvent(event.type, true, true, modifiers.view, null,
                        modifiers.clientX, modifiers.clientY, modifiers.x, modifiers.y,
                        modifiers.ctrlKey, modifiers.altKey, modifiers.shiftKey, modifiers.metaKey,
                        modifiers.button, el)
                    el.dispatchEvent(event)
                })
            }
        })
        return prom
    }

    drag(options) {
        // options.divX, options.divY - the rest as in trigger
        let { divX, divY, stepX, stepY, step, delay, ...rest } = options
        if (delay == null) delay = 0
        if (divX == null) divX = 0
        if (divY == null) divY = 0
        options = rest
        bela
            .tag('drag & drop')
            .trigger('mouseenter', options)
            .trigger('mouseover', options)
            .trigger('mousedown', options)
            .then((event) => {
                let { clientX, clientY } = event.self.proc.previous.result.modifiers
                let finalX = clientX + divX
                let finalY = clientY + divY
                if (stepX == null && step != null) stepX = step
                if (stepY == null && step != null) stepY = step
                if (stepX == null && stepY == null) {
                    bela.trigger('mousemove', { x: finalX, y: finalY })
                        .tag(`mousemove(${finalX - clientX}, ${finalY - clientY})`)
                } else {
                    let currX = clientX
                    let currY = clientY
                    let cnt = 0
                    stepX = Math.abs(stepX) * (divX >= 0 ? 1 : -1)
                    stepY = Math.abs(stepY) * (divY >= 0 ? 1 : -1)
                    while ((currX != finalX || currY != finalY) && cnt < 500) {
                        cnt++
                        if ((divX >= 0 && currX < finalX) || (divX < 0 && currX > finalX)) {
                            currX += stepX
                            if ((currX > finalX && divX >= 0) || (currX < finalX && divX < 0)) currX = finalX
                        } else {
                            currX = finalX
                        }
                        if ((divY >= 0 && currY < finalY) || (divY < 0 && currY > finalY)) {
                            currY += stepY
                            if ((currY > finalY && divY >= 0) || (currY < finalY && divY < 0)) currY = finalY
                        } else {
                            currY = finalY
                        }
                        bela.trigger('mousemove', { x: currX, y: currY, delay })
                            .tag(`mousemove(${currX - clientX}, ${currY - clientY})`)
                    }
                    if (currX != finalX || currY <= finalY) {
                        bela.trigger('mousemove', { x: finalX, y: finalY })
                            .tag(`mousemove(${finalX - clientX}, ${finalY - clientY})`)
                    }
                }
            }, options)
            .tag(`drag, divX=${divX}, divY=${divY}`)
            .trigger('mouseup', options)
            .trigger('click', options)
    }

    type(text, options = {}) {
        // options.delay
        // options.parse = false - not to use special chars
        // options.password = true - suppress clear text password

        if (options.delay == null) options.delay = 5

        let subj = this.proc.subject
        let win  = this.win
        let events = ['keydown', 'keypress', 'keyup', 'input']
        let modifiers = {
            ctrlKey: options.ctrlKey || false,
            shiftKey: options.shiftKey || false,
            altKey: options.altKey || false,
            metaKey: options.metaKey || false,
            repeat: false,
            view: this.win
        }
        let keys = {
            '{'         : '{',
            '}'         : '}',
            'selectall' : String.fromCharCode(0),
            'tab'       : String.fromCharCode(9),
            'enter'     : String.fromCharCode(13),
            'del'       : String.fromCharCode(6), // 46 is del key and also also a "." symbol ??
            'backspace' : String.fromCharCode(8),
            'insert'    : String.fromCharCode(45),

            'shift'     : String.fromCharCode(16),
            'alt'       : String.fromCharCode(18),
            'ctrl'      : String.fromCharCode(17),
            'meta'      : String.fromCharCode(17),

            'left'      : String.fromCharCode(37),
            'leftarrow' : String.fromCharCode(37),
            'up'        : String.fromCharCode(38),
            'uparrow'   : String.fromCharCode(38),
            'right'     : String.fromCharCode(39),
            'rightarrow': String.fromCharCode(39),
            'down'      : String.fromCharCode(40),
            'downarrow' : String.fromCharCode(40),
            'pageup'    : String.fromCharCode(33),
            'pagedown'  : String.fromCharCode(34),

            'esc'       : String.fromCharCode(27),
            'escape'    : String.fromCharCode(27),
            'end'       : String.fromCharCode(35),
            'home'      : String.fromCharCode(36)
        }
        text = String(text)
        if (options.parse !== false) {
            text = text.replace(/({(.*?)})/g, (token) => keys[token.substr(1, token.length-2)])
        }

        let prom = new Promise((resolve, reject) => {
            if (subj && subj.length > 0) {
                (function sendKey(text, index) {
                    let key = text[index]
                    let code = text.charCodeAt(index)
                    if (code == '0') { // select all
                        if (typeof subj[0].select == 'function') {
                            subj[0].select()
                        }
                    } else if (code == 6) {
                        // del key code is 46, but it is also a ".", so, the hack
                        sendKeyEvents(46)
                    } else {
                        sendKeyEvents(key)
                        // if selected, remove it
                        if (win.document.getSelection().toString() == subj.val()) {
                            subj.val('')
                        }
                        subj.val(subj.val() + text.substr(index, 1)) // insert actuall key
                    }
                    if (text.length > index + 1) {
                        setTimeout(() =>{
                            sendKey(text, index + 1)
                        }, options.delay)
                    } else {
                        resolve()
                    }
                })(text, 0)
            } else {
                reject('Cannot execute TYPE command on an empty subject')
            }

            function sendKeyEvents(key) {
                events.forEach(eventType => {
                    let event = new win.Event(eventType, { bubbles: true, cancelable: true })
                    event.initEvent(eventType, true, false);
                    event.key = key
                    event.keyCode = typeof(key) == 'string' ? key.charCodeAt(0) : key
                    event.which = event.keyCode
                    Object.assign(event, modifiers)
                    subj[0].dispatchEvent(event)
                })
                // if enter or tab also sent change vent
                if (key == String.fromCharCode(13) || key == String.fromCharCode(9)) {
                    let event = new win.Event('change', { bubbles: true, cancelable: true })
                    event.initEvent('change', true, false);
                    Object.assign(event, modifiers)
                    subj[0].dispatchEvent(event)
                }
            }
        })
        return prom
    }

    focus(options = {}) {
        let subj = this.proc.subject
        if (subj && subj.length > 0) {
            let el = subj[0]
            if (['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT'].indexOf(el.tagName) != -1
                || ($(el).prop('tabindex') != null && $(el).prop('tabindex') != -1)
                || options.force === true) {
                el.focus()
                el.dispatchEvent(new Event('focus')) // if window is not in focus, focus will not be sent
            } else {
                return { success: false, error: 'Invalid subject', details: 'The subject cannot receive focus. Add tabindex property or use options.force = true' }
            }
        } else {
            return { success: false, error: 'Invalid subject', details: 'There is no subject to do "focus" on' }
        }
    }

    blur(options = {}) {
        let subj = this.proc.subject
        if (subj && subj.length > 0) {
            let el = subj[0]
            if (['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT'].indexOf(el.tagName) != -1
                || ($(el).prop('tabindex') != null && $(el).prop('tabindex') != -1)
                || options.force === true) {
                el.blur()
                el.dispatchEvent(new Event('blur')) // if window is not in focus, blur will not be sent
            } else {
                return { success: false, error: 'Invalid subject', details: 'The subject cannot receive blur. Add tabindex property or use options.force = true' }
            }
        } else {
            return { success: false, error: 'Invalid subject', details: 'The subject is empty' }
        }
    }

    select(val, options = {}) {
        let subj = this.proc.subject
        let events = ['input', 'change']
        let result = { success: true, count: 0 }
        if (subj && subj.length > 0) {
            if (options.multiple !== true && subj.length > 1) {
                return {
                    success: false, error: 'Multiple elements',
                    details: `Multiple elements (${subj.length}), use options.multiple = true`
                }
            }
            subj.each((ind, el) => {
                if (el.tagName === 'SELECT') {
                    if (typeof val == 'number') {
                        el.selectedIndex = val
                        result.msg = 'index='+val
                        result.details = `Selected item with index=${val}`
                    } else {
                        $(el).val(val)
                        result.msg = val
                        result.details = `Selected item with value="${val}"`
                    }
                    result.count++
                    events.forEach(event => { el.dispatchEvent(new Event(event)) })
                } else if (options.force !== true) {
                    result = {
                        success: false, error: 'Invalid subject',
                        details: 'Some elements are not HTML select element. Use options.force = true to ignore',
                        count: result.count
                    }
                }
            })
        } else {
            result = { success: false, error: 'Invalid subject', details: 'The subject is empty' }
        }
        result.msg = `applied to ${result.count} of ${subj.length}`
        return result
    }

    clear(options = {}) {
        let subj = this.proc.subject
        let events = ['input', 'change']
        let result = { success: true, count: 0 }
        if (subj && subj.length > 0) {
            if (options.multiple !== true && subj.length > 1) {
                return {
                    success: false, error: 'Multiple elements',
                    details: `Multiple elements (${subj.length}), use options.multiple = true`
                }
            }
            subj.each((ind, el) => {
                if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(el.tagName) != -1) {
                    $(el).val('')
                    events.forEach(event => { el.dispatchEvent(new Event(event)) })
                    result.count++
                } else if (options.force !== true) {
                    result = {
                        success: false, error: 'Invalid subject',
                        details: 'Some elements are not input controls (input, textarea, select). Use options.force = true to ignore',
                        count: result.count
                    }
                }
            })
        } else {
            result = { success: false, error: 'Invalid subject', details: 'The subject is empty' }
        }
        result.msg = `applied to ${result.count} of ${subj.length}`
        return result
    }

    check(options = {}) {
        let subj = this.proc.subject
        let events = ['input', 'change']
        let result = { success: true, count: 0 }
        if (subj && subj.length > 0) {
            if (options.multiple !== true && subj.length > 1) {
                return {
                    success: false, error: 'Multiple elements',
                    details: `Multiple elements (${subj.length}), use options.multiple = true`
                }
            }
            subj.each((ind, el) => {
                if (el.tagName == 'INPUT' && el.type == 'checkbox') {
                    $(el).prop('checked', true)
                    events.forEach(event => { el.dispatchEvent(new Event(event)) })
                    result.count++
                } else if (options.force !== true) {
                    result = {
                        success: false, error: 'Invalid subject',
                        details: 'Some elements are not checkboxes. Use options.force = true to ignore',
                        count: result.count
                    }
                }
            })
        } else {
            result = { success: false, error: 'Invalid subject', details: 'The subject is empty' }
        }
        result.msg = `applied to ${result.count} of ${subj.length}`
        return result
    }

    uncheck(options = {}) {
        let subj = this.proc.subject
        let events = ['input', 'change']
        let result = { success: true, count: 0 }
        if (subj && subj.length > 0) {
            if (options.multiple !== true && subj.length > 1) {
                return {
                    success: false, error: 'Multiple elements',
                    details: `Multiple elements (${subj.length}), use options.multiple = true`
                }
            }
            subj.each((ind, el) => {
                if (el.tagName == 'INPUT' && el.type == 'checkbox') {
                    $(el).prop('checked', false)
                    events.forEach(event => { el.dispatchEvent(new Event(event)) })
                    result.count++
                } else if (options.force !== true) {
                    result = {
                        success: false, error: 'Invalid subject',
                        details: 'Some elements are not checkboxes. Use options.force = true to ignore',
                        count: result.count
                    }
                }
            })
        } else {
            result = { success: false, error: 'Invalid subject', details: 'The subject is empty' }
        }
        result.msg = `applied to ${result.count} of ${subj.length}`
        return result
    }

    should(param, options) {
        // does not wait
        let subj = this.proc.subject
        let details = {}
        if (param != null) {
            if (typeof param == 'object') {
                let total = 0, good = 0, error
                Object.keys(param).forEach(key => {
                    // remove digits, "*.XXXXX" at the end
                    // not.contain.text.1
                    // not.contain.text.2
                    // ...
                    let tmp = process(key.replace(/\.\d{1,5}$/g, '').toLowerCase(), param[key])
                    if (tmp.success === false && error == null) {
                        error = tmp
                    }
                    if (tmp.total == null) {
                        if (tmp.success === true) {
                            tmp.good  = 1
                            tmp.total = 1
                            bela.log(tmp.msg || tmp.details, { assertion: true, details: tmp.details })
                        } else {
                            tmp.good  = 0
                            tmp.total = 1
                            bela.error(tmp.msg || tmp.details, { assertion: true, details: tmp.details })
                        }
                    }
                    good += tmp.good
                    total += tmp.total
                })
                if (error && Object.keys(param).length == 1) {
                    details.error = error.details
                }
                Object.assign(details, {
                    success: good === total,
                    msg: `${good} of ${total} passed, ${total - good} failed`
                })
            }
            if (typeof param == 'string') {
                let tmp = process(param.toLowerCase(), options.args[1])
                if (tmp.total != null) {
                    details = {
                        success: tmp.good === tmp.total,
                        msg: `${tmp.good} of ${tmp.total} passed, ${tmp.total - tmp.good} failed`
                    }
                } else {
                    return tmp
                }
            }
        } else {
            details = { msg: 'Wrong arguments', success: false }
        }
        return details

        function process(param, value) {
            let details = {
                success: true,
                msg: `${param} = "${value}"`,
                details: `Subject should "${param}" ${value ? `"${value}"` : ''}`
            }
            let negative = false
            switch (param) {
                case 'not.exist':
                    negative = true
                case 'exist': {
                    if (value.substr(0, 1) == '@') {
                        value = runner.proc.scope[value.substr(1)]
                    }
                    let count = $(value, runner.win.document).length
                    if ((negative && count !== 0) || (!negative && count === 0)) {
                        details = {
                            msg: `Element(s) should ${negative ? 'not ': ''} exist`,
                            details: `Expected ${negative ? 'not ': ''}to find element(s) with selector "${value}".`,
                            success: false
                        }
                    }
                    Object.assign(details, { count, selector: value })
                    break
                }
                case 'have.length': {
                    if (subj.length != value) {
                        details = {
                            msg: 'Incorect length',
                            details: `Expected length ${value}, but ${subj.length} found.`,
                            success: false
                        }
                    }
                    break
                }
                case 'have.value': {
                    if (subj.length == 0 || subj.val() != value) {
                        details = {
                            msg: 'Incorect value',
                            details: `Expected value "${value}", but "${subj.val()}" found.`,
                            success: false
                        }
                    }
                    break
                }
                case 'not.have.class':
                    negative = true
                case 'have.class': {
                    if ((negative && subj.hasClass(value)) || (!negative && !subj.hasClass(value))) {
                        details = {
                            msg: 'Incorect class',
                            details: `Expected ${negative ? 'not ' : ''}to have class "${value}"`,
                            success: false
                        }
                    }
                    break
                }
                case 'have.prop':
                case 'have.attr':
                case 'have.css': {
                    let tmp = check(param.split('.')[1], value)
                    if (tmp.total == 1) {
                        Object.assign(details, { msg: tmp.msg || param, details: tmp.details })
                        if (tmp.success === false) details.success = false
                    } else {
                        Object.assign(details, { msg: param }, tmp)
                    }
                    break
                }
                case 'have.text': {
                    // seems to be a bug in jquery where it introduces extra spaces and new lines
                    let txt = subj.text().replace(/\n/g, '').replace(/\s\s+/g, ' ')
                    if (subj.length == 0 || txt != value) {
                        details = {
                            msg: 'Incorect text',
                            details: `Expected text "${value}", but "${txt}" found.`,
                            success: false
                        }
                    }
                    break
                }
                case 'not.contain.text':
                    negative = true
                case 'contain.text': {
                    if (!Array.isArray(value)) {
                        value = [value]
                    }
                    details = { total: value.length, good: 0 }
                    value.forEach(val => {
                        // seems to be a bug in jquery where it introduces extra spaces and new lines
                        let txt = subj.text().replace(/\n/g, '').replace(/\s\s+/g, ' ')
                        let isThere = txt.indexOf(val) != -1
                        let msg = ''

                        if (!negative && isThere)  msg = 'Text found.'
                        if (!negative && !isThere) msg = 'Text not found.'
                        if (negative && isThere)   msg = 'Text found, but it should not exist.'
                        if (negative && !isThere)  msg = 'Text not found.'

                        if (subj.length > 0 && ((isThere && !negative) || (!isThere && negative))) {
                            Object.assign(details, { success: true, details: msg })
                            details.good++
                            if (value.length > 1) {
                                bela.log(`${param} = "${val}"`, { assertion: true })
                            }
                        } else {
                            Object.assign(details, { success: false, details: msg })
                            if (value.length > 1) {
                                bela.error(`${param} = "${val}"`, { assertion: true, details: details.details })
                            }
                        }
                    })
                    if (value.length == 1) {
                        Object.assign(details, {
                            msg: `${param} "${value}"`,
                            total: undefined,
                            good: undefined
                        })
                    }
                    break
                }
                case 'be.visible': {
                    if (subj.length == 0 || subj.css('display') == 'none' || subj.css('opacity') == 0) {
                        details = { msg: `Element should be visible (display != 'none && opacity > 0)`, success: false }
                    }
                    details.msg = param
                    break
                }
                case 'be.hidden': {
                    if (!(subj.length == 0 || subj.css('display') == 'none' || subj.css('opacity') == 0)) {
                        details = { msg: `Element should be visible (display != 'none' && opacity != 0)`, success: false }
                    }
                    details.msg = param
                    break
                }
                default:
                    details = { msg: `Unrecognized parameter "${param}"`, success: false }
            }
            return details
        }

        function check(type, obj) {
            let total = 0
            let good  = 0
            let len   = Object.keys(obj).length
            let res   = {}
            Object.keys(obj).forEach(val => {
                total++
                let prop = obj[val]
                let real = subj[type](val)
                if (!isNaN(prop)) prop = parseFloat(prop)
                if (!isNaN(real)) real = parseFloat(real)
                if (['css', 'prop', 'attr'].includes(type) && prop !== real) { // should be !==
                    res.details = `Expected subject's "${val}" to be "${obj[val]}", not "${subj[type](val)}"`
                    if (len > 1) {
                        bela.error(`have.${type.toUpperCase()}, ${val}="${obj[val]}"`, { assertion: true, details: res.details })
                    } else {
                        res.msg = `have.${type.toUpperCase()}, ${val}="${obj[val]}"`
                        res.success = false
                    }
                } else {
                    good++
                    res.details = `Subject's "${val}" should be "${obj[val]}"`
                    if (len > 1) {
                        bela.log(`have.${type.toUpperCase()}, ${val}="${obj[val]}"`, { assertion: true, details: res.details })
                    } else {
                        res.msg = `have.${type.toUpperCase()}, ${val}="${obj[val]}"`
                        res.success = false
                    }
                }
            })
            res.total = total
            res.good = good
            res.success = (good === total)
            return res
        }
    }
}
class BelaCustom {

    constructor(parent) {
        this.parent = parent // bela object it belongs too
        this.internal = ['custom', 'steps', 'runner', 'begin', 'end', 'tag'] // this commands cannot be overwriten
        this.custom = []
        this.def_args = {} // default arguments for custom steps
    }

    add(command, def_options, callback) {
        var parent = this.parent
        if (parent[command] != null) {
            throw `The "${command}" command already exists. Use bela.custom.overwrite() to extend it.`
        }
        if (typeof callback != 'function' && typeof def_options == 'function') {
            callback = def_options
            def_options = {}
        }
        this.custom.push(command)
        this.def_args[command] = def_options
        parent.steps[command] = callback
        parent[command] = function(param, options) { // cannot be arrow function, as it does not have arguments
            parent.runner.add({
                cmd: command,
                args: Array.from(arguments),
                options: options
            })
            return parent
        }
    }

    remove(command, options) {
        let parent = this.parent
        let ind = this.custom.indexOf(command)
        if (ind == -1 && options.silent !== true) {
            throw `Custom command "${command}" does not exist.`
        }
        if (ind != -1 && parent[command] != null) {
            delete parent[command]
            delete parent.steps[command]
            delete this.def_args[command]
            this.custom.splice(ind, 1)
        }
    }

    overwrite(command, def_options, callback) {
        let self = this
        let parent = this.parent
        if (this.internal.indexOf(command) != -1) {
            throw `The "${command}" command cannot be overwritten as it is important internal command.`
        }
        if (parent[command] == null) {
            throw `The "${command}" command does not exist. Use bela.custom.add() method to define it.`
        }
        if (typeof callback != 'function' && typeof def_options == 'function') {
            callback = def_options
            def_options = {}
        }
        // if (this.custom.indexOf(command) == -1) this.custom.push(command)
        // chain original functions
        // need closure
        (function (originalFn, callback) {
            parent.steps[command] = function(param, options, callIndex) {
                options.originalFn = originalFn
                return callback.bind(parent.runner)(param, options)
            }
        })(parent.steps[command].bind(parent.runner), callback)
    }
}