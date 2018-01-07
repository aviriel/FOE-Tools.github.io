!function(){function r(r,n){var t=new Error('Cannot find module "'+r+'"'+(n?' from "'+n+'"':""));return t.code="MODULE_NOT_FOUND",t}function n(r){this.id=this.filename=r,this.loaded=!1,this.exports=void 0}function t(r,n,t){var i=t&&t.globals;if(_[r]=n,i)for(var e=b||global,o=0;o<i.length;o++){var a=i[o],f=E[r]=d(r);e[a]=f.exports}}function i(r,n){$[r]=n}function e(r,n){j[r]=n}function o(r,n){M[r]=n}function a(r,n,t){I[r+"/"+n]=t}function f(r){var n,t=0,i=r.length;for(n=0;n<i;n++){var e=r[n];"."===e||(".."===e?t--:(r[t]=e,t++))}return 1===t?"/":(t>2&&0===r[t-1].length&&t--,r.length=t,r.join("/"))}function u(r,n){var t=n.split("/");return f(("/"==r?[""]:r.split("/")).concat(t))}function s(r){var n,t=r.lastIndexOf(".");return-1===t||-1!==(n=r.lastIndexOf("/"))&&n>t?null:r.substring(0,t)}function l(r){r=r.substring(1);var n=r.indexOf("/");"@"===r.charAt(1)&&(n=r.indexOf("/",n+1));var t=-1===n?r.length:n;return[r.substring(0,t),r.substring(t)]}function c(r,n){"/"===r.charAt(r.length-1)&&(r=r.slice(0,-1));var t=M[r];if(t)return t;var i,e,o=l(n),a=o[0],f=r.indexOf("/");f<0?(i=r,e=""):("@"===r.charAt(0)&&(f=r.indexOf("/",f+1)),i=r.substring(0,f),e=r.substring(f));var u=I[a+"/"+i];if(u){var s="/"+i+"$"+u;return e&&(s+=e),s}}function v(r,n){var t;if("."===r.charAt(0))t=u(n,r);else if("/"===r.charAt(0))t=f(r.split("/"));else{for(var i=O.length,e=0;e<i;e++){var o=O[e]+r,a=v(o,n);if(a)return a}t=c(r,n)}if(t){var l;void 0!==(l=$[t])&&(l||(l="index"),t=u(t,l));var d=j[t];d&&(t=d);var h=_[t];if(void 0===h){var g;if(null===(g=s(t))||void 0===(h=_[g]))return;t=g}return[t,h]}}function d(t,i){if(!t)throw r("");var e=v(t,i);if(!e)throw r(t,i);var o=e[0],a=y[o];if(void 0!==a)return a;if(E.hasOwnProperty(o))return E[o];var f=e[1];return a=new n(o),y[o]=a,a.load(f),a}function h(r,n){return d(r,n).exports}function g(r,n){if(!(n&&!1===n.wait||m))return A.push([r,n]);h(r,"/")}function p(){m=!0;for(var r;r=A.length;){var n=A;A=[];for(var t=0;t<r;t++){var i=n[t];g(i[0],i[1])}if(!m)break}}function x(r){O.push(r)}var b;if("undefined"!=typeof window){if(b=window,b.$_mod_foe_tools)return;b.global=b}var w,_={},O=[],m=!1,A=[],y={},I={},M={},$={},j={},D={},E={};n.cache=y;var F=n.prototype;F.load=function(n){var t=this.id;if(n&&n.constructor===Function){var i=t.lastIndexOf("/"),e=t.substring(0,i),o=D[e]||(D[e]={}),a=function(r){return(o[r]||(o[r]=d(r,e))).exports};a.resolve=function(n){if(!n)throw r("");var t=v(n,e);if(!t)throw r(n,e);return t[0]},a.cache=y,a.runtime=w,this.exports={},n.call(this,a,this.exports,this,t,e)}else this.exports=n;this.loaded=!0};var N=0,P=function(){--N||p()};F.__runtime=w={def:t,installed:a,run:g,main:i,remap:e,builtin:o,require:h,resolve:v,join:u,ready:p,searchPath:x,loaderMetadata:function(r){F.__loaderMetadata=r},pending:function(){return m=!1,N++,{done:P}}},b?b.$_mod_foe_tools=w:module.exports=w}();
$_mod_foe_tools.installed("foe-tools$1.3.2","marko","4.7.4");
$_mod_foe_tools.remap("/marko$4.7.4/components","/marko$4.7.4/components-browser.marko");
$_mod_foe_tools.main("/marko$4.7.4/dist/components","");
$_mod_foe_tools.remap("/marko$4.7.4/dist/components/index","/marko$4.7.4/dist/components/index-browser");
$_mod_foe_tools.remap("/marko$4.7.4/dist/components/util","/marko$4.7.4/dist/components/util-browser");
$_mod_foe_tools.def("/marko$4.7.4/dist/components/util-browser",function(t,n,e,i,r){function o(t,n){if(t){var e="string"==typeof t?(n||w).getElementById(t):t;if(e)return e.B_}}function _(t,n,e,i){var r=t[b[n]];void 0!==r&&r.call(t,e,i),t.emit(n,e,i)}function a(t){var n=t.B_;n&&(n.z_(),delete m[n.id])}function f(t,n){if(1===t.nodeType){var e;n&&(e=t.af_)&&t===n.w_[e]&&delete n.w_[e];for(var i=t.firstChild;i;)a(i),f(i,n),i=i.nextSibling}}function u(){return"b"+l.i++}function d(){return u}function c(t,n,e){if(n){var i=t.id;return e?[n,i,e]:[n,i]}}function s(t){var n,e=t.ag_;return e?n=e.ah_:(n=t.ai_)||(n=t.getAttribute("data-marko"),t.ai_=n=n?JSON.parse(n):p),n}var l=window.$MUID||(window.$MUID={i:0}),v=l.i++,m={},w=document,p={},b={};["create","render","update","mount","destroy"].forEach(function(t){b[t]="on"+t[0].toUpperCase()+t.substring(1)}),n._J_=v,n.a_=m,n._N_=o,n.b_=_,n.aj_=a,n.c_=f,n._w_=d,n.Z_=c,n._K_=s});
$_mod_foe_tools.remap("/marko$4.7.4/dist/components/init-components","/marko$4.7.4/dist/components/init-components-browser");
$_mod_foe_tools.installed("marko$4.7.4","warp10","1.3.6");
$_mod_foe_tools.def("/warp10$1.3.6/src/finalize",function(r,n,e,t,a){function o(r,n,e){for(var t=r,a=0;a<e;a++)t=t[n[a]];return t}function f(r){if("Date"===r.type)return new Date(r.value);throw new Error("Bad type")}var i=Array.isArray;e.exports=function(r){if(!r)return r;var n=r.$$;if(n){var e,t=r.o;if(n&&(e=n.length))for(var a=0;a<e;a++){var l,u=n[a],v=u.r;l=i(v)?o(t,v,v.length):f(v);var c=u.l,h=c.length-1;if(-1===h){t=r.o=l;break}var g=o(t,c,h);g[c[h]]=l}return n.length=0,null==t?null:t}return r}});
$_mod_foe_tools.def("/warp10$1.3.6/finalize",function(o,e,f,i,a){f.exports=o("/warp10$1.3.6/src/finalize")});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/bubble",function(e,o,t,d,s){t.exports=["click","dblclick","mousedown","mouseup","dragstart","drag","drop","dragend","keydown","keypress","keyup","select","change","submit","reset","input","attach","detach"]});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/event-delegation",function(o,n,t,e,r){function a(o,n){var t=u(o),e=t[n];return"string"==typeof e&&(e=e.split(" "),3==e.length&&(e[2]=parseInt(e[2],10))),e}function i(o,n,t){var e=n[0],r=n[1],a=n[2],i=s[r];if(i){var f=i[e];if(!f)throw Error("Method not found: "+e);null!=a&&"number"==typeof a&&(a=i.l_[a]),a?f.apply(i,a.concat(t,o)):f.call(i,t,o)}}function f(n){var t=n.body||n;o("/marko$4.7.4/dist/components/bubble").forEach(function(o){t.addEventListener(o,function(n){var t=!1,e=n.stopPropagation;n.stopPropagation=function(){e.call(n),t=!0};var r=n.target;if(r){r=r.correspondingUseElement||r;var f,c="on"+o;do{if((f=a(r,c))&&(i(r,f,n),t))break}while((r=r.parentNode)&&r.getAttribute)}})})}function c(){}var _=o("/marko$4.7.4/dist/components/util-browser"),l=_._J_,s=_.a_,u=_._K_,p="$MED"+l;n._I_=c,n.A_=c,n._F_=i,n._G_=a,n._L_=function(o){o[p]||(o[p]=!0,f(o))}});
$_mod_foe_tools.installed("marko$4.7.4","raptor-util","3.2.0");
$_mod_foe_tools.def("/raptor-util$3.2.0/extend",function(o,r,t,n,e){t.exports=function(o,r){if(o||(o={}),r)for(var t in r)r.hasOwnProperty(t)&&(o[t]=r[t]);return o}});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/KeySequence",function(o,t,e,n,_){function i(){this._B_={}}i.prototype={_h_:function(o){var t=this._B_,e=t[o]++;return e?o+"_"+e:(t[o]=1,e=0,o)}},e.exports=i});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/ComponentDef",function(_,t,i,n,s){"use strict";function o(_,t,i){this.___=i,this._a_=_,this.id=t,this._b_=void 0,this._c_=!1,this._d_=!1,this._e_=0,this._f_=0,this.x_=null,this._g_=null}var e=/\[\]$/,r=_("/marko$4.7.4/dist/components/util-browser"),h=r.Z_,u=_("/raptor-util$3.2.0/extend"),c=_("/marko$4.7.4/dist/components/KeySequence");o.prototype={_h_:function(_){return(this.x_||(this.x_=new c))._h_(_)},_i_:function(_,t){(this._g_||(this._g_={}))[_]=t?2:1},elId:function(_){var t=this.id;return null==_?t:"string"==typeof _&&e.test(_)?this.___._j_(t,_):t+"-"+_},e:function(_,t,i,n){t&&(this._b_||(this._b_=[])).push([_,t,i,n])},_k_:function(){return this.id+"-c"+this._f_++},d:function(_,t){return h(this,_,t)},get _l_(){return this._a_._l_}},o._m_=function(_,t,i,n){var s=_[0],o=t[_[1]],e=_[2],r=_[3],h=r.l,c=r.s,f=r.w,d=o&&n._n_(o,s,h);if(r.b&&(d.l_=r.b),d.s_=!0,c){var a=r.u;a&&a.forEach(function(_){c[_]=void 0}),d.state=c}d.o_=e,f&&u(d,f);var l=r.p,p=r.e;return p&&d.W_(p,l),d.q_=i,{id:s,_a_:d,_o_:r.r,_b_:r.d,_e_:r.f||0}},i.exports=o});
$_mod_foe_tools.remap("/marko$4.7.4/dist/components/registry","/marko$4.7.4/dist/components/registry-browser");
$_mod_foe_tools.def("/marko$4.7.4/dist/components/State",function(t,i,_,n,s){function o(t,i){var _=t.constructor.prototype;i in _||Object.defineProperty(_,i,{get:function(){return this.V_[i]},set:function(t){this.G_(i,t,!1)}})}function e(t){this._a_=t,this.V_={},this.t_=!1,this.L_=null,this.K_=null,this._E_=null,Object.seal(this)}var h=t("/raptor-util$3.2.0/extend");e.prototype={e_:function(){var t=this;t.t_=!1,t.L_=null,t.K_=null,t._E_=null},E_:function(t){var i,_=this,n=this.V_;for(i in n)i in t||_.G_(i,void 0,!1,!1);for(i in t)_.G_(i,t[i],!0,!1)},G_:function(t,i,_,n){var s=this.V_;if(_&&o(this,t),n){(this._E_||(this._E_={}))[t]=!0}else if(s[t]===i)return;this.t_||(this.t_=!0,this.L_=s,this.V_=s=h({},s),this.K_={},this._a_.F_()),this.K_[t]=i,void 0===i?delete s[t]:s[t]=i},toJSON:function(){return this.V_}},_.exports=e});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/dom-insert",function(r,t,e,n,i){function o(r){if("string"==typeof r){var t=r;if(!(r=document.getElementById(t)))throw Error("Not found: "+t)}return r}function s(r){u(r),d(r)}var f=r("/raptor-util$3.2.0/extend"),a=r("/marko$4.7.4/dist/components/util-browser"),d=a.aj_,u=a.c_;e.exports=function(r,t,e){f(r,{appendTo:function(r){r=o(r);var n=t(this,r);return r.appendChild(n),e(this,r)},prependTo:function(r){r=o(r);var n=t(this,r);return r.insertBefore(n,r.firstChild||null),e(this,r)},replace:function(r){r=o(r);var n=t(this,r);return s(r),r.parentNode.replaceChild(n,r),e(this,r)},replaceChildrenOf:function(r){r=o(r);for(var n=t(this,r),i=r.firstChild;i;){var f=i.nextSibling;s(i),i=f}return r.innerHTML="",r.appendChild(n),e(this,r)},insertBefore:function(r){r=o(r);var n=t(this,r);return r.parentNode.insertBefore(n,r),e(this,r)},insertAfter:function(r){r=o(r);var n=t(this,r);n=n;var i=r.nextSibling,s=r.parentNode;return i?s.insertBefore(n,i):s.appendChild(n),e(this,r)}})}});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/createOut",function(t,o,n,e,r){function u(t){i=t}function f(t){return i(t)}var i;f.aA_=u,n.exports=f});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/GlobalComponentsContext",function(o,t,n,e,_){function s(o){this._x_={},this._y_={},this._z_={},this.Q_=void 0,this._k_=i(o)}var i=o("/marko$4.7.4/dist/components/util-browser")._w_,r=o("/marko$4.7.4/dist/components/KeySequence");s.prototype={_A_:function(){return new r}},n.exports=s});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/ComponentsContext",function(_,t,o,s,n){"use strict";function i(_,t){var o,s;if(t){o=t.P_,s=t._p_;var n;(n=t._q_)||(n=t._q_=[]),n.push(this)}else void 0===(o=_.global._r_)&&(_.global._r_=o=new e(_));this.P_=o,this._r_=[],this._s_=_,this._p_=s,this._q_=void 0}function r(_){return _._r_||(_._r_=new i(_))}var e=_("/marko$4.7.4/dist/components/GlobalComponentsContext");i.prototype={_t_:function(_){var t=this._r_;return i._u_(t,_),this._s_.emit("_v_"),this._s_.global._r_=void 0,t}},o.exports=t=i,t.__=r});
$_mod_foe_tools.installed("marko$4.7.4","events-light","1.0.5");
$_mod_foe_tools.main("/events-light$1.0.5","src/index");
$_mod_foe_tools.def("/events-light$1.0.5/src/index",function(e,t,r,n,i){function o(e){return"function"==typeof e}function s(e){if(!o(e))throw TypeError("Invalid listener")}function l(e,t,r){switch(r.length){case 1:t.call(e);break;case 2:t.call(e,r[1]);break;case 3:t.call(e,r[1],r[2]);break;default:t.apply(e,u.call(r,1))}}function f(e,t,r,n){s(r);var i=e.$e||(e.$e={}),l=i[t];return l?o(l)?i[t]=n?[r,l]:[l,r]:n?l.unshift(r):l.push(r):i[t]=r,e}function c(){this.$e=this.$e||{}}var u=Array.prototype.slice;c.EventEmitter=c,c.prototype={$e:null,emit:function(e){var t=arguments,r=this.$e;if(r){var n=r&&r[e];if(!n){if("error"===e){var i=t[1];if(!(i instanceof Error)){var s=i;i=new Error("Error: "+s),i.context=s}throw i}return!1}if(o(n))l(this,n,t);else{n=u.call(n);for(var f=0,c=n.length;f<c;f++){l(this,n[f],t)}}return!0}},on:function(e,t){return f(this,e,t,!1)},prependListener:function(e,t){return f(this,e,t,!0)},once:function(e,t){function r(){this.removeListener(e,r),t&&(t.apply(this,arguments),t=null)}return s(t),this.on(e,r),this},removeListener:function(e,t){s(t);var r,n=this.$e;if(n&&(r=n[e]))if(o(r))r===t&&delete n[e];else for(var i=r.length-1;i>=0;i--)r[i]===t&&r.splice(i,1);return this},removeAllListeners:function(e){var t=this.$e;t&&delete t[e]},listenerCount:function(e){var t=this.$e,r=t&&t[e];return r?o(r)?1:r.length:0}},r.exports=c});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/RenderResult",function(t,n,o,r,e){function i(t){var n=t._r_;if(!n)throw Error("No component");return n}function u(t){this.out=this._s_=t,this._r_=void 0}var s=t("/marko$4.7.4/dist/runtime/dom-insert");o.exports=u,s(u.prototype={getComponent:function(){return this.getComponents()[0]},getComponents:function(t){if(void 0===this._r_)throw Error("Not added to DOM");var n=i(this),o=[];return n.forEach(function(n){var r=n._a_;t&&!t(r)||o.push(r)}),o},afterInsert:function(t){var n=this._s_,o=n._r_;return this._r_=o?o._t_(t):null,this},getNode:function(t){return this._s_.az_(t)},getOutput:function(){return this._s_.S_()},toString:function(){return this._s_.toString()},document:"undefined"!=typeof document&&document},function(t,n){return t.getNode(n.ownerDocument)},function(t,n){var o="function"==typeof ShadowRoot&&n instanceof ShadowRoot;return t.afterInsert(o?n:n.ownerDocument)})});
$_mod_foe_tools.installed("marko$4.7.4","listener-tracker","2.0.0");
$_mod_foe_tools.main("/listener-tracker$2.0.0","lib/listener-tracker");
$_mod_foe_tools.def("/listener-tracker$2.0.0/lib/listener-tracker",function(e,t,r,n,i){function s(e){return!e.once}function o(e){this.$__target=e,this.$__listeners=[],this.$__subscribeTo=null}function _(e){this.$__target=e}function u(){this.$__subscribeToList=[]}o.prototype={$__remove:function(e,t){var r=this.$__target,n=this.$__listeners;this.$__listeners=n.filter(function(n){var i=n[0],s=n[1],o=n[2];if(t){if(o&&e(i,o))return r.removeListener(i,o),!1}else if(e(i,s))return r.removeListener(i,o||s),!1;return!0});var i=this.$__subscribeTo;if(!this.$__listeners.length&&i){var s=this,o=i.$__subscribeToList;i.$__subscribeToList=o.filter(function(e){return e!==s})}},on:function(e,t){return this.$__target.on(e,t),this.$__listeners.push([e,t]),this},once:function(e,t){var r=this,n=function(){r.$__remove(function(e,t){return n===t},!0),t.apply(this,arguments)};return this.$__target.once(e,n),this.$__listeners.push([e,t,n]),this},removeListener:function(e,t){return"function"==typeof e&&(t=e,e=null),t&&e?this.$__remove(function(r,n){return e===r&&t===n}):t?this.$__remove(function(e,r){return t===r}):e&&this.removeAllListeners(e),this},removeAllListeners:function(e){var t=this.$__listeners,r=this.$__target;if(e)this.$__remove(function(t,r){return e===t});else{for(var n=t.length-1;n>=0;n--){var i=t[n];r.removeListener(i[0],i[1])}this.$__listeners.length=0}return this}},_.prototype={on:function(e,t){return this.$__target.addEventListener(e,t),this},once:function(e,t){var r=this,n=function(){r.$__target.removeEventListener(e,n),t()};return this.$__target.addEventListener(e,n),this},removeListener:function(e,t){return this.$__target.removeEventListener(e,t),this}},u.prototype={subscribeTo:function(e,t){for(var r,n,i=!t||!1!==t.addDestroyListener,u=this.$__subscribeToList,h=0,c=u.length;h<c;h++){var l=u[h];if(l.$__target===e){r=l;break}}return r||(s(e)&&(n=new _(e)),r=new o(n||e),i&&!n&&r.once("destroy",function(){r.removeAllListeners();for(var t=u.length-1;t>=0;t--)if(u[t].$__target===e){u.splice(t,1);break}}),r.$__subscribeTo=this,u.push(r)),r},removeAllListeners:function(e,t){var r,n=this.$__subscribeToList;if(e)for(r=n.length-1;r>=0;r--){var i=n[r];if(i.$__target===e){i.removeAllListeners(t),i.$__listeners.length||n.splice(r,1);break}}else{for(r=n.length-1;r>=0;r--)n[r].removeAllListeners();n.length=0}}},t=r.exports=u,t.wrap=function(e){var t,r;return s(e)&&(t=new _(e)),r=new o(t||e),t||e.once("destroy",function(){r.$__listeners.length=0}),r},t.createTracker=function(){return new u}});
$_mod_foe_tools.def("/raptor-util$3.2.0/copyProps",function(o,t,e,r,c){e.exports=function(o,t){Object.getOwnPropertyNames(o).forEach(function(e){var r=Object.getOwnPropertyDescriptor(o,e);Object.defineProperty(t,e,r)})}});
$_mod_foe_tools.def("/raptor-util$3.2.0/inherit",function(t,o,r,e,p){function i(t,o,r){var e=t.prototype,p=t.prototype=Object.create(o.prototype,{constructor:{value:t,writable:!0,configurable:!0}});return e&&!1!==r&&n(e,p),t.$super=o,t.prototype=p,t}var n=t("/raptor-util$3.2.0/copyProps");r.exports=i,i._inherit=i});
$_mod_foe_tools.remap("/marko$4.7.4/dist/runtime/nextTick","/marko$4.7.4/dist/runtime/nextTick-browser");
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/nextTick-browser",function(e,s,t,o,i){var a=window,n=a.setImmediate;if(!n)if(a.postMessage){var r=[];a.addEventListener("message",function(e){var s=e.source;if((s==a||!s&&"si"===e.data)&&(e.stopPropagation(),r.length>0)){r.shift()()}},!0),n=function(e){r.push(e),a.postMessage("si","*")}}else n=setTimeout;t.exports=n});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/update-manager",function(n,t,e,a,i){"use strict";function o(){if(c.length)try{l(c)}finally{_=!1}}function r(){_||(_=!0,h(o))}function l(n){for(var t=0;t<n.length;t++){n[t].X_()}n.length=0}function f(n){var t={ae_:null};s.push(t);try{n()}finally{try{t.ae_&&l(t.ae_)}finally{s.length--}}}function u(n){var t=s.length;if(t){var e=s[t-1];e.ae_?e.ae_.push(n):e.ae_=[n]}else r(),c.push(n)}var _=!1,s=[],c=[],h=n("/marko$4.7.4/dist/runtime/nextTick-browser");t.I_=u,t.O_=f});
$_mod_foe_tools.main("/marko$4.7.4/dist/morphdom","");
$_mod_foe_tools.def("/marko$4.7.4/dist/morphdom/specialElHandlers",function(e,t,a,o,i){function l(e,t,a){e[a]!==t[a]&&(e[a]=t[a],e[a]?e.setAttribute(a,""):e.removeAttribute(a,""))}function n(){}n.prototype={OPTION:function(e,t){l(e,t,"selected")},INPUT:function(e,t){l(e,t,"checked"),l(e,t,"disabled"),e.value!=t.ax_&&(e.value=t.ax_),t.ay_("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var a=t.ax_;e.value!=a&&(e.value=a);var o=e.firstChild;if(o){var i=o.nodeValue;if(i==a||!a&&i==e.placeholder)return;o.nodeValue=a}},SELECT:function(e,t){if(!t.ay_("multiple")){for(var a=0,o=t.as_;o;){if("OPTION"==o.an_){if(o.ay_("selected")){a;break}a++}o=o.aq_}e.selectedIndex=a}}},a.exports=new n});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/vdom/VNode",function(t,_,i,b,s){function r(){}r.prototype={bf_:function(t){this.bq_=t,this.br_=0,this.bj_=null,this.bs_=null,this.bg_=null,this.bh_=null},_a_:null,get as_(){var t=this.bj_;if(t&&t.bi_){return t.as_||t.aq_}return t},get aq_(){var t=this.bh_;if(t){if(t.bi_){var _=t.as_;return _||t.aq_}}else{var i=this.bg_;if(i&&i.bi_)return i.aq_}return t},aW_:function(t){if(this.br_++,!0===this.bn_){if(!t.bt_)throw TypeError();var _=t.av_;this.bm_=(this.bm_||"")+_}else{var i=this.bs_;t.bg_=this,i?i.bh_=t:this.bj_=t,this.bs_=t}return t},bo_:function(){return this.br_===this.bq_&&this.bg_?this.bg_.bo_():this}},i.exports=r});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/vdom/VComment",function(t,o,n,r,e){function i(t){this.bf_(-1),this.av_=t}var a=t("/marko$4.7.4/dist/runtime/vdom/VNode"),m=t("/raptor-util$3.2.0/inherit");i.prototype={ap_:8,ao_:function(t){var o=this.av_;return t.createComment(o)},aZ_:function(){return new i(this.av_)}},m(i,a),n.exports=i});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/vdom/VDocumentFragment",function(t,o,n,e,r){function i(t){m(this,t),this.bg_=null,this.bh_=null}function u(t){this.bf_(null),this._s_=t}var _=t("/marko$4.7.4/dist/runtime/vdom/VNode"),a=t("/raptor-util$3.2.0/inherit"),m=t("/raptor-util$3.2.0/extend");u.prototype={ap_:11,bi_:!0,aZ_:function(){return new i(this)},ao_:function(t){return t.createDocumentFragment()}},a(u,_),i.prototype=u.prototype,n.exports=u});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/vdom/VElement",function(t,e,n,i,r){function a(t,e){return!0===e?"":"object"==t?JSON.stringify(e):m(e)}function _(t,e,n,i){null===e?t.setAttribute(n,i):t.setAttributeNS(e,n,i)}function s(t,e,n){null===e?t.removeAttribute(n):t.removeAttributeNS(e,n)}function u(t){this.bj_=t.bj_,this.bg_=null,this.bh_=null,this.au_=t.au_,this.bk_=t.bk_,this.ah_=t.ah_,this.bl_=t.bl_,this.an_=t.an_,this._e_=t._e_,this.bm_=t.bm_,this.aw_=t.aw_,this.bn_=t.bn_}function l(t,e,n,i,r,a,_){this.bf_(r);var s,u,l;_&&(s=_.i),(this._e_=a||0)&&(a&p&&(u="http://www.w3.org/2000/svg"),a&d&&(l=!0)),this.au_=n,this._a_=i,this.bk_=e||g,this.ah_=_||g,this.bl_=u,this.an_=t,this.bm_=null,this.aw_=s,this.bn_=l}function o(t,e){var n,i=t.attributes,r=i.length;if(r){n={};for(var a=0;a<r;a++){var _=i[a],s=_.name;if(!c.test(s)&&"data-marko"!==s){_.namespaceURI===f?n[v]=_.value:n[s]=_.value}}}var u=0,o=t.nodeName;"TEXTAREA"===o&&(u|=d);var h=new l(o,n,null,null,0,u,null);return"http://www.w3.org/1999/xhtml"!==t.namespaceURI&&(h.bl_=t.namespaceURI),h.bn_?h.bm_=t.value:e&&e(t,h),h}var h=t("/marko$4.7.4/dist/runtime/vdom/VNode"),b=t("/raptor-util$3.2.0/inherit"),f="http://www.w3.org/1999/xlink",v="xlink:href",c=/^xmlns(:|$)/,m=String,p=1,d=2,w=Object.defineProperty,g=Object.freeze({});l.prototype={ap_:1,aZ_:function(){return new u(this)},e:function(t,e,n,i,r,a,_){var s=this.aW_(new l(t,e,n,i,r,a,_));return 0===r?this.bo_():s},ed:function(t,e,n,i,r,a,_){var s=this.aW_(l.aY_(t,e,n,i,r,a,_));return 0===r?this.bo_():s},n:function(t,e){return t=t.aZ_(),t._a_=e,this.aW_(t),this.bo_()},ao_:function(t){var e=this.bl_,n=this.an_,i=this.bk_,r=this._e_,s=void 0!==e?t.createElementNS(e,n):t.createElement(n);if(16&r)Object.assign(s,i);else{for(var u in i){var l=i[u];if(!1!==l&&null!=l){var o=typeof l;"string"!==o&&(l=a(o,l)),u==v?_(s,f,"href",l):s.setAttribute(u,l)}}r&d&&(s.value=this.ax_)}return s.ag_=this,s},ay_:function(t){var e=this.bk_[t];return null!=e&&!1!==e}},b(l,h);var k=u.prototype=l.prototype;["checked","selected","disabled"].forEach(function(t){w(k,t,{get:function(){var e=this.bk_[t];return!1!==e&&null!=e}})}),w(k,"ax_",{get:function(){var t=this.bm_;return null==t&&(t=this.bk_.value),null!=t?m(t):""}}),l.aY_=function(t,e,n,i,r,a,_){var s=e&&e.xmlns;t=s?t:t.toUpperCase();var u=new l(t,e,n,i,r,a,_);return u.bl_=s,u},l.bp_=function(t){return t},l.al_=o,l.am_=function(t,e,n){var i=l.bp_,r=e._e_,u=n._e_;t.ag_=n;var o=n.bk_,h=n.ah_;if(16&u)return Object.assign(t,o);var b,c=e.bk_;if(c){if(c===o)return;c=i(c,h)}var m;if(4&u&&4&r)return c.class!==(m=o.class)&&(t.className=m),c.id!==(m=o.id)&&(t.id=m),void(c.style!==(m=o.style)&&(t.style.cssText=m));o=i(o,h,!0);var p;for(b in o)if(m=o[b],p=null,b===v&&(p=f,b="href"),null==m||!1===m)s(t,p,b);else if(c[b]!==m){var d=typeof m;"string"!==d&&(m=a(d,m)),_(t,p,b,m)}if(null===n.au_)for(b in c)b in o||(b===v?t.removeAttributeNS(v,"href"):t.removeAttribute(b))},n.exports=l});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/vdom/VText",function(t,o,e,i,r){function n(t){this.bf_(-1),this.av_=t}var a=t("/marko$4.7.4/dist/runtime/vdom/VNode"),_=t("/raptor-util$3.2.0/inherit");n.prototype={bt_:!0,ap_:3,ao_:function(t){return t.createTextNode(this.av_)},aZ_:function(){return new n(this.av_)}},_(n,a),e.exports=n});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/vdom/VComponent",function(t,o,i,n,r){function e(t,o){this.bf_(null),this._a_=t,this.at_=o}var m=t("/marko$4.7.4/dist/runtime/vdom/VNode"),_=t("/raptor-util$3.2.0/inherit");e.prototype={ap_:2},_(e,m),i.exports=e});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/vdom/vdom",function(t,n,e,o,r){function i(t,n){for(var e=t.firstChild;e;)n.aW_(a(e)),e=e.nextSibling}function a(t,n){switch(t.nodeType){case 1:return _.al_(t,i);case 3:return new c(t.nodeValue);case 8:return new d(t.nodeValue);case 11:var e=new s;return i(t,e),e}}function m(t,n){if(!l.test(t))return new c(t);var e=n.createElement("body");e.innerHTML=t;for(var o=new s,r=e.firstChild;r;)o.aW_(a(r)),r=r.nextSibling;return o}var u=t("/marko$4.7.4/dist/runtime/vdom/VNode"),d=t("/marko$4.7.4/dist/runtime/vdom/VComment"),s=t("/marko$4.7.4/dist/runtime/vdom/VDocumentFragment"),_=t("/marko$4.7.4/dist/runtime/vdom/VElement"),c=t("/marko$4.7.4/dist/runtime/vdom/VText"),f=t("/marko$4.7.4/dist/runtime/vdom/VComponent"),v="undefined"!=typeof document&&document,l=/[&<]/,w=u.prototype;w.t=function(t){var n,e=typeof t;return"string"!==e&&(null==t?t="":"object"===e&&t.toHTML&&(n=m(t.toHTML(),document))),this.aW_(n||new c(t.toString())),this.bo_()},w.c=function(t){return this.aW_(new d(t)),this.bo_()},w.bd_=function(){return this.aW_(new s)},n.aG_=d,n.aF_=s,n.ak_=_,n.aH_=c,n.aI_=f,n.al_=a,n.aJ_=m,n.aK_=v});
$_mod_foe_tools.def("/marko$4.7.4/dist/morphdom/index",function(i,_,n,e,o){"use strict";function a(i,_){return i.an_===_.an_}function r(i,_){1===i.nodeType&&x._I_(i,_)}function t(i,_,n){return n.insertBefore(i,_)}function d(i,_,n){return n.insertBefore(i,_&&_.nextSibling)}function v(i,_,n,e,o,v){function l(i,_){return o.createComment("$marko")}function c(i,_,n,e,a){var d=i.ao_(o);t(d,n,e),i.ap_===g&&(_&&(d.af_=_,a.w_[_]=d),C(d,null,null,i,a)),r(d,v)}function k(i,_,n,e){e.h_=e.i_=t(l(),_,n),T(n,e,i)}function y(i,_,n){for(var e=i,o=_.ap_===b;_=_.aq_;){var a=e.nextSibling;if(!a||a.i_)break;var r=_.ap_===b;r&&o||(e=a,o=r)}return e===i?d(l(),i,n):e}function T(i,_,n){_.x_=E._A_();var e=_.h_,o=_.i_;e.B_=void 0,o.i_=void 0;var a,r=e.previousSibling,v=o.nextSibling;return r||(a=r=t(l(),e,i)),C(i,e,v,n,_),o=void 0,e=r.nextSibling,e&&e!==v||(e=o=d(l(),r,i)),a&&i.removeChild(a),o||(o=v?v.previousSibling:i.lastChild),(void 0!==e.ar_||e.B_)&&(e=t(l(),e,i)),(void 0!==o.ar_||o.i_)&&(o=d(l(),o,i)),e.B_=_,o.i_=!0,_.h_=e,_.i_=o,_.x_=void 0,v}function $(i,_,n){i.nodeType===g?(N.push(i),i.ar_=n||!0):(s(i),_.removeChild(i))}function w(i){i.destroy()}function C(i,_,n,e,o){var r,v,f,s,p,x,C,N,q,R=_,H=e.as_;i:for(;H;){p=H.aq_,f=H.ap_;var I=H._a_||o;if(f!==S)if(r=H.au_){N=void 0,v=void 0;var P=I.x_||(I.x_=E._A_());if(r=P._h_(r),R&&R!==n&&(v=R.af_,N=R.ag_,s=R.nextSibling),v===r)0==(H._e_&B)&&(a(H,N)?A(R,N,H,I,r):($(R,i,I),c(H,r,R,i,I)));else if(void 0===(x=I.w_[r])){if(!0===z&&R&&R.nodeType===g&&R.nodeName===H.an_){N=m(R),R.af_=r,A(R,N,H,I,r),H=p,R=s;continue}c(H,r,R,i,I),s=R}else void 0!==x.ar_&&(x.ar_=void 0),N=x.ag_,a(N,H)?(s===x?p&&p.au_===v?(s=R,t(x,R,i)):(s=s.nextSibling,R&&$(R,i,I)):(d(x,R,i),R&&$(R,i,I)),0==(H._e_&B)&&A(x,N,H,I,r)):(c(H,r,R,i,I),$(x,i,I));H=p,R=s}else{for(;R&&R!==n;)if((q=R.B_)&&q!==I)R=q.i_.nextSibling,E._z_[q.id]||w(q);else{s=R.nextSibling;var V=R.nodeType,X=void 0;if(V===f)if(V===g){if(void 0===(N=R.ag_)){if(!0!==z){R=s;continue}N=m(R)}else(v=N.au_)&&(X=!1);X=!1!==X&&!0===a(N,H),!0===X&&A(R,N,H,o,r)}else V!==b&&V!==h||(X=!0,R.nodeValue=H.av_);if(!0===X){H=p,R=s;continue i}v?void 0===E._x_[v]&&$(R,i,I):$(R,i,I),R=s}c(H,r,R,i,I),H=p,R=s}else{if(void 0===(C=u[I.id]))if(!0===z){var j=H.as_;j?(R||(R=t(l(),null,i)),I.h_=R,I.i_=y(R,j,i)):I.h_=I.i_=t(l(),R,i),R=T(i,I,H)}else k(H,R,i,I);else{if(C.h_!==R){if(R&&(q=R.B_)&&void 0===E._z_[q.id]){R=q.i_.nextSibling,w(q);continue}t(C.T_(),R,i)}R=H.at_?C.i_.nextSibling:T(i,I,H)}H=p}}for(;R&&(null===n||R!==n);)s=R.nextSibling,(q=R.B_)&&E._z_[q.id]?R=q.i_.nextSibling:($(R,i,o),R=s)}function A(i,_,n,e,o){var a=n.an_;!0===z&&o&&(e.w_[o]=i);var r=n.aw_;if((void 0===r||_.aw_!==r)&&(p(i,_,n),!o||!0!==E._y_[o])){"TEXTAREA"!==a&&C(i,i.firstChild,null,n,e);var t=f[a];void 0!==t&&t(i,n)}}var E,z=!1;v&&(E=v.P_,z=E.R_);var N=[];C(i,_,n,e),N.forEach(function(i){var _=i.ar_;if(void 0!==_){i.ar_=void 0;var n=i.B_;n?n.destroy():i.parentNode&&(s(i,!0!==_&&_),0!=x.A_(i)&&i.parentNode.removeChild(i))}})}var f=i("/marko$4.7.4/dist/morphdom/specialElHandlers"),l=i("/marko$4.7.4/dist/components/util-browser"),u=l.a_,s=l.c_,c=i("/marko$4.7.4/dist/runtime/vdom/vdom").ak_,m=c.al_,p=c.am_,x=i("/marko$4.7.4/dist/components/event-delegation"),g=1,b=3,h=8,S=2,B=8;n.exports=v});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/Component",function(t,i,n,r,e){"use strict";function s(t){t()}function o(t,i,n,r){n.push(t),r&&(n=r.concat(n));var e=m[t.d_],s=e[i];if(!s)throw Error("Method not found: "+i);s.apply(e,n)}function h(t,i){return i?t+"_"+i:t}function _(t,i,n){return t.id+"-"+h(i,n)}function u(t,i,n){var r,e;for(var s in i)if(i.hasOwnProperty(s)){var o="update_"+s;if(!(r=t[o]))return;(e||(e=[])).push([s,r])}return e&&(e.forEach(function(e,s){var o=e[0];r=e[1];var h=i[o],_=n[o];r.call(t,h,_)}),b(t,"update"),t.e_()),!0}function c(t,i,n){if(i!=n){if(null==i||null==n)return!0;var r=Object.keys(i),e=Object.keys(n),s=r.length;if(s!==e.length)return!0;for(var o=0;o<s;o++){var h=r[o];if(i[h]!==n[h])return!0}}return!1}function a(t){var i=[];return t.f_(i.push.bind(i)),i}function f(t){y.call(this),this.id=t,this.g_=null,this.h_=null,this.i_=null,this.j_=null,this.k_=null,this.l_=null,this.m_=null,this.d_=null,this.n_=null,this.o_=void 0,this.p_=!1,this.q_=void 0,this.r_=!1,this.s_=!1,this.t_=!1,this.u_=!1,this.v_=void 0,this.w_={},this.x_=void 0}var l,d=t("/marko$4.7.4/dist/runtime/dom-insert"),v=t("/marko$4.7.4/dist/runtime/createOut"),p=t("/marko$4.7.4/dist/components/ComponentsContext").__,g=t("/marko$4.7.4/dist/components/util-browser"),m=g.a_,b=g.b_,j=g.c_,y=t("/events-light$1.0.5/src/index"),k=t("/marko$4.7.4/dist/runtime/RenderResult"),O=t("/listener-tracker$2.0.0/lib/listener-tracker"),$=t("/raptor-util$3.2.0/inherit"),E=t("/marko$4.7.4/dist/components/update-manager"),w=t("/marko$4.7.4/dist/morphdom/index"),C=t("/marko$4.7.4/dist/components/event-delegation"),x=Array.prototype.slice,I={addDestroyListener:!1},S=y.prototype.emit;f.prototype=l={y_:!0,subscribeTo:function(t){if(!t)throw TypeError();var i=this.j_||(this.j_=new O),n=t.y_?void 0:I;return i.subscribeTo(t,n)},emit:function(t){var i,n=this.m_;if(n&&(i=n[t])){var r=i[0],e=i[1];o(this,r,x.call(arguments,1),e)}if(this.listenerCount(t))return S.apply(this,arguments)},getElId:function(t,i){return _(this,t,i)},getEl:function(t,i){return t?this.w_[h(t,i)]:this.h_},getEls:function(t){t+="[]";for(var i,n=[],r=0;i=this.getEl(t,r);)n.push(i),r++;return n},getComponent:function(t,i){return m[_(this,t,i)]},getComponents:function(t){t+="[]";for(var i,n=[],r=0;i=m[_(this,t,r)];)n.push(i),r++;return n},destroy:function(){if(!this.r_){var t=a(this);this.z_(),t.forEach(function(t){j(t),0!=C.A_(t)&&t.parentNode.removeChild(t)}),delete m[this.id]}},z_:function(){if(!this.r_){b(this,"destroy"),this.r_=!0,this.h_.B_=void 0,this.h_=this.i_=null,this.C_();var t=this.j_;t&&(t.removeAllListeners(),this.j_=null)}},isDestroyed:function(){return this.r_},get state(){return this.g_},set state(t){var i=this.g_;(i||t)&&(i||(i=this.g_=new this.D_(this)),i.E_(t||{}),i.t_&&this.F_(),t||(this.g_=null))},setState:function(t,i){var n=this.g_;if("object"==typeof t){var r=t;for(var e in r)r.hasOwnProperty(e)&&n.G_(e,r[e],!0)}else n.G_(t,i,!0)},setStateDirty:function(t,i){var n=this.g_;1==arguments.length&&(i=n[t]),n.G_(t,i,!0,!0)},replaceState:function(t){this.g_.E_(t)},get input(){return this.o_},set input(t){this.u_?this.o_=t:this.H_(t)},H_:function(t,i,n){i=i||this.onInput;var r,e=this.o_;return this.o_=void 0,i&&(this.u_=!0,r=i.call(this,t||{},n),this.u_=!1),t=this.n_=r||t,(this.t_=c(this,e,t))&&this.F_(),void 0===this.o_&&(this.o_=t,t&&t.$global&&(this.q_=t.$global)),t},forceUpdate:function(){this.t_=!0,this.F_()},F_:function(){this.s_||(this.s_=!0,E.I_(this))},update:function(){if(!0!==this.r_&&!1!==this.J_){var t=this.o_,i=this.g_;!1===this.t_&&null!==i&&!0===i.t_&&u(this,i.K_,i.L_)&&(i.t_=!1),!0===this.J_&&!1!==this.shouldUpdate(t,i)&&this.M_(!1),this.e_()}},get J_(){return!0===this.t_||null!==this.g_&&!0===this.g_.t_},e_:function(){this.t_=!1,this.s_=!1,this.n_=null;var t=this.g_;t&&t.e_()},shouldUpdate:function(t,i){return!0},b_:function(t,i,n){b(this,t,i,n)},M_:function(t){var i=this,n=i.N_;if(!n)throw TypeError();var r=this.h_,e=this.i_.nextSibling,s=i.v_,o=this.n_||this.o_,h=this.q_;E.O_(function(){var _=n.createOut||v,u=_(h);u.sync(),u.v_=i.v_;var c=p(u),a=c.P_;a.Q_=i,a.R_=t,n(o,u);var f=new k(u),l=u.S_();w(r.parentNode,r,e,l,s,c),f.afterInsert(s)}),this.e_()},T_:function(){var t=this.v_.createDocumentFragment();return this.f_(t.appendChild.bind(t)),t},f_:function(t){for(var i=this.h_,n=this.i_;;){var r=i.nextSibling;if(t(i),i==n)break;i=r}},C_:function(){var t=this.k_;t&&(t.forEach(s),this.k_=null)},get U_(){var t=this.g_;return t&&t.V_},W_:function(t,i){var n=this.m_={};this.d_=i,t.forEach(function(t){var i=t[0],r=t[1],e=t[2];n[i]=[r,e]})},get el(){return this.h_},get els(){return a(this)}},l.elId=l.getElId,l.X_=l.update,l.Y_=l.destroy,d(l,function(t){return t.T_()},function(t){return t}),$(f,y),n.exports=f});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/defineComponent",function(t,o,n,e,r){"use strict";var i=t("/marko$4.7.4/dist/components/State"),p=t("/marko$4.7.4/dist/components/Component"),c=t("/raptor-util$3.2.0/inherit");n.exports=function(t,o){function n(t){p.call(this,t)}function e(t){i.call(this,t)}if(t.y_)return t;var r,f=function(){},s=typeof t;if("function"==s)r=t.prototype;else{if("object"!=s)throw TypeError();r=t}return f.prototype=r,r.y_||c(f,p),r=n.prototype=f.prototype,n.y_=!0,c(e,i),r.D_=e,r.N_=o,n}});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/registry-browser",function(n,o,e,r,t){function i(n,o){return o(),m[n]=o,delete a[n],delete c[n],n}function d(n,o){var e=a[n];if(!e){if(e=m[n],e?e=e():o&&(e=window.$markoLegacy.load(n)),!e)throw Error("Component not found: "+n);a[n]=e}return e}function f(n,o){var e=c[n];return e||(e=d(n,o),e=e.Component||e,e.y_||(e=_(e,e.renderer)),e.prototype._l_=n,c[n]=e,e)}function u(n,o,e){return new(f(n,e))(o)}var _=n("/marko$4.7.4/dist/components/defineComponent"),m={},a={},c={};o._M_=i,o._n_=u});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/init-components-browser",function(e,n,o,t,i){"use strict";function r(e){var n;for(e=e.firstChild;e;){if(8===e.nodeType){var o=e.nodeValue;if("M"===o[0]){n=o.substring(2);var t=o[1];if("/"===t)k[n]=e;else{if("#"===t){$[n]=e;for(var i="M/"+n;(e=e.nextSibling)&&e.nodeValue!==i;);continue}"^"===t&&($[n]=e)}}}else if(1===e.nodeType){var a=e.getAttribute("data-marko-key");if(a){var d=a.indexOf(" ");n=a.substring(d+1),a=a.substring(0,d);var _=y[n]||(y[n]={});_[a]=e}r(e)}e=e.nextSibling}}function a(e,n,o){var t=e[n];if(!t)throw Error("Method not found: "+n);t.apply(e,o)}function d(e,n,o){return e.addEventListener(n,o,!1),function(){e.removeEventListener(n,o)}}function _(e,n,o,t,i,r){var _=d(n,o,function(o){var r=[o,n];i&&(r=i.concat(r)),a(e,t,r)});r.push(_)}function f(e,n){var o=e._a_;if(o&&o.y_){o.e_(),o.v_=n;var t=e._c_,i=o.id;if(b[i]=o,e._e_&E)return void o.M_(!0);t&&o.C_();var r=e._b_;if(r){var a=[];r.forEach(function(e){var n=e[0],t=e[1],i=o.w_[e[2]],r=e[3];_(o,i,n,t,r,a)}),a.length&&(o.k_=a)}o.p_?o.b_("update"):(o.p_=!0,o.b_("mount"))}}function c(e,n){v._L_(n),n=n||l;for(var o=e.length-1;o>=0;o--){f(e[o],n)}}function u(e,n){if(!e)return e=m.$components,e&&e.forEach&&e.forEach(function(e){u(e,n)}),void(m.$components={concat:u});n=n||l,v._L_(n),e=s(e);var o=e.w,t=e.t,i=window.$MG;i&&(g=s(i),delete window.$MG),o.forEach(function(e){e=h._m_(e,t,g,w);var o,i,a=e.id,d=e._a_,_=e._e_;if(6==(6&_))o=document.head,i=document.body;else if(_&M)o=i=document.body;else if(_&C)o=i=document.head;else{var c=$[a];c||(r(n),c=$[a]);var u=k[a];o=c.nextSibling,o===u?o=i=c:(c.parentNode.removeChild(c),i=o.parentNode===document?o=document.documentElement:u.previousSibling),u&&u.parentNode.removeChild(u)}d.w_=y[a]||{},d.h_=o,d.i_=i,o.B_=d,delete y[a],o.h_=!0,i.i_=!0,f(e,n||l)})}var s=e("/warp10$1.3.6/finalize"),v=e("/marko$4.7.4/dist/components/event-delegation"),m=window,l=document,p=e("/marko$4.7.4/dist/components/util-browser"),b=p.a_,h=e("/marko$4.7.4/dist/components/ComponentDef"),w=e("/marko$4.7.4/dist/components/registry-browser"),g={},$={},k={},y={},E=1,M=2,C=4;n._u_=c,n._O_=u});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/index-browser",function(o,n,t,e,r){var s=o("/marko$4.7.4/dist/components/util-browser"),i=o("/marko$4.7.4/dist/components/init-components-browser"),m=o("/marko$4.7.4/dist/components/registry-browser");o("/marko$4.7.4/dist/components/ComponentsContext")._u_=i._u_,n.getComponentForEl=s._N_,n.init=window.$initComponents=i._O_,n.register=function(o,n){m._M_(o,function(){return n})}});
$_mod_foe_tools.def("/marko$4.7.4/components-browser.marko",function(o,e,r,n,s){r.exports=o("/marko$4.7.4/dist/components/index-browser")});
$_mod_foe_tools.main("/foe-tools$1.3.2/src/routes/gb-investment","index.marko");
$_mod_foe_tools.main("/marko$4.7.4/dist/runtime/vdom","");
$_mod_foe_tools.main("/marko$4.7.4/dist","");
$_mod_foe_tools.remap("/marko$4.7.4/dist/index","/marko$4.7.4/dist/index-browser");
$_mod_foe_tools.main("/marko$4.7.4/dist/loader","");
$_mod_foe_tools.remap("/marko$4.7.4/dist/loader/index","/marko$4.7.4/dist/loader/index-browser");
$_mod_foe_tools.remap("/marko$4.7.4/dist/loader/index-browser","/marko$4.7.4/dist/loader/index-browser-dynamic");
$_mod_foe_tools.def("/marko$4.7.4/dist/loader/index-browser-dynamic",function(o,e,r,t,n){"use strict";r.exports=function(e){return o(e)}});
$_mod_foe_tools.def("/marko$4.7.4/dist/index-browser",function(e,o,r,t,d){"use strict";o.createOut=e("/marko$4.7.4/dist/runtime/createOut"),o.load=e("/marko$4.7.4/dist/loader/index-browser-dynamic")});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/vdom/AsyncVDOMBuilder",function(t,i,n,e,s){function a(t){this.aL_=new _,this.aM_=t,this.aN_=!1}function r(t,i,n){i||(i=new u);var e;e=n?n.g_:new a(i),this.aO_=1,this.aP_=0,this.aQ_=null,this.aR_=n,this.data={},this.g_=e,this.ac_=i,this.global=t||{},this.aS_=[i],this.aT_=!1,this.aU_=void 0,this._r_=null,this._Y_=null,this.a__=null,this._Z_=null}var _=t("/events-light$1.0.5/src/index"),h=t("/marko$4.7.4/dist/runtime/vdom/vdom"),o=h.ak_,u=h.aF_,c=h.aG_,l=h.aH_,f=h.aI_,v=h.aJ_,d=t("/marko$4.7.4/dist/runtime/RenderResult"),m=h.aK_,b=t("/marko$4.7.4/dist/morphdom/index"),g=r.prototype={aB_:!0,v_:m,bc:function(t){var i=new f(t);return this.aV_(i,0,!0)},ab_:function(t){var i=new f(t,!0);this.aV_(i,0)},aV_:function(t,i,n){return this.ac_.aW_(t),!0===n&&(this.aS_.push(t),this.ac_=t),0===i?this:t},element:function(t,i,n,e,s,a,r){var _=new o(t,i,n,e,s,a,r);return this.aV_(_,s)},aX_:function(t,i,n,e,s,a,r){var _=o.aY_(t,i,n,e,s,a,r);return this.aV_(_,s)},n:function(t,i){var n=t.aZ_();return this.node(n),n._a_=i,this},node:function(t){return this.ac_.aW_(t),this},text:function(t){var i=typeof t;if("string"!=i){if(null==t)return;if("object"===i&&t.toHTML)return this.h(t.toHTML());t=t.toString()}return this.ac_.aW_(new l(t)),this},comment:function(t){return this.node(new c(t))},html:function(t){if(null!=t){var i=v(t,this.v_||document);this.node(i)}return this},beginElement:function(t,i,n,e,s,a,r){var _=new o(t,i,n,e,s,a,r);return this.aV_(_,s,!0),this},b__:function(t,i,n,e,s,a,r){var _=o.aY_(t,i,n,e,s,a,r);return this.aV_(_,s,!0),this},endElement:function(){var t=this.aS_;t.pop(),this.ac_=t[t.length-1]},end:function(){this.ac_=void 0;var t=--this.aO_,i=this.aR_;return 0===t?i?i.ba_():this.bb_():t-this.aP_==0&&this.bc_(),this},ba_:function(){var t=--this.aO_;if(0===t){var i=this.aR_;i?i.ba_():this.bb_()}else t-this.aP_==0&&this.bc_()},bb_:function(){var t=this.g_;t.aN_=!0,t.aL_.emit("finish",this.aC_())},bc_:function(){function t(){if(n!==i.length){var e=i[n++];e(t),e.length||t()}}var i=this._last,n=0;t()},error:function(t){try{this.emit("error",t)}finally{this.end()}return this},beginAsync:function(t){if(this.aT_)throw Error("Not allowed");var i=this.g_;t&&t.last&&this.aP_++,this.aO_++;var n=this.ac_.bd_(),e=new r(this.global,n,this);return i.aL_.emit("beginAsync",{out:e,parentOut:this}),e},createOut:function(){return new r(this.global)},flush:function(){var t=this.g_.aL_;t.listenerCount("update")&&t.emit("update",new d(this))},S_:function(){return this.g_.aM_},aC_:function(){return this.be_||(this.be_=new d(this))},on:function(t,i){var n=this.g_;return"finish"===t&&n.aN_?i(this.aC_()):"last"===t?this.onLast(i):n.aL_.on(t,i),this},once:function(t,i){var n=this.g_;return"finish"===t&&n.aN_?i(this.aC_()):"last"===t?this.onLast(i):n.aL_.once(t,i),this},emit:function(t,i){var n=this.g_.aL_;switch(arguments.length){case 1:n.emit(t);break;case 2:n.emit(t,i);break;default:n.emit.apply(n,arguments)}return this},removeListener:function(){var t=this.g_.aL_;return t.removeListener.apply(t,arguments),this},sync:function(){this.aT_=!0},isSync:function(){return this.aT_},onLast:function(t){var i=this._last;return void 0===i?this._last=[t]:i.push(t),this},az_:function(t){var i=this.aU_;if(!i){var n=this.S_();t=t||this.v_||document,this.aU_=i=n.ao_(t),b(i,null,null,n,t,this._r_)}return i},toString:function(t){for(var i=this.az_(t),n="",e=i.firstChild;e;){var s=e.nextSibling;if(1!=e.nodeType){var a=i.ownerDocument.createElement("div");a.appendChild(e.cloneNode()),n+=a.innerHTML}else n+=e.outerHTML;e=s}return n},then:function(t,i){var n=this,e=new Promise(function(t,i){n.on("error",i).on("finish",function(i){t(i)})});return Promise.resolve(e).then(t,i)},catch:function(t){return this.then(void 0,t)},isVDOM:!0,c:function(t,i,n){this._Y_=t,this.a__=i,this._Z_=n}};g.e=g.element,g.ed=g.aX_,g.be=g.beginElement,g.bed=g.b__,g.ee=g.endElement,g.t=g.text,g.h=g.w=g.write=g.html,n.exports=r});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/renderable",function(t,e,n,r,o){function i(t,e,n,r){try{t(e,n),r&&n.end()}catch(t){var o=n.end;n.end=function(){},setTimeout(function(){n.end=o,n.error(t)},0)}return n}var a=t("/marko$4.7.4/dist/runtime/createOut"),l=t("/raptor-util$3.2.0/extend");n.exports=function(t,e){var n=e&&(e.renderer||e.render||e),r=t.createOut||e.createOut||a;return l(t,{createOut:r,renderToString:function(t,e){var o=t||{},a=n||this._,l=o.$global,u=r(l);return u.global.template=this,l&&(o.$global=void 0),e?(u.on("finish",function(){e(null,u.toString(),u)}).once("error",e),i(a,o,u,!0)):(u.sync(),a(o,u),u.toString())},renderSync:function(t){var e=t||{},o=n||this._,i=e.$global,a=r(i);return a.sync(),a.global.template=this,i&&(e.$global=void 0),o(e,a),a.aC_()},render:function(t,e){var o,a,u,c,d=n||this._,f=this.aD_,s=!0;return t?(u=t,(c=t.$global)&&(u.$global=void 0)):u={},e&&e.aB_?(a=e,s=!1,l(e.global,c)):"function"==typeof e?(a=r(c),o=e):a=r(c,e,void 0,f),o&&a.on("finish",function(){o(null,a.aC_())}).once("error",o),c=a.global,c.template=c.template||this,i(d,u,a,s)}})}});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/vdom/index",function(t,e,r,i,n){"use strict";function o(t,e){this.path=t,this._=e,this.meta=void 0}function a(t,e,r){return new d(t,e,r)}t("/marko$4.7.4/dist/index-browser");var d=t("/marko$4.7.4/dist/runtime/vdom/AsyncVDOMBuilder"),m=t("/marko$4.7.4/dist/runtime/renderable");e.t=function(t){return new o(t)},m(o.prototype={createOut:a}),e.Template=o,e.aE_=a,t("/marko$4.7.4/dist/runtime/createOut").aA_(a)});
$_mod_foe_tools.def("/marko$4.7.4/dist/vdom",function(o,d,m,t,e){m.exports=o("/marko$4.7.4/dist/runtime/vdom/index")});
$_mod_foe_tools.remap("/marko$4.7.4/dist/components/helpers","/marko$4.7.4/dist/components/helpers-browser");
$_mod_foe_tools.remap("/marko$4.7.4/dist/components/beginComponent","/marko$4.7.4/dist/components/beginComponent-browser");
$_mod_foe_tools.def("/marko$4.7.4/dist/components/beginComponent-browser",function(o,n,e,_,t){var r=o("/marko$4.7.4/dist/components/ComponentDef");e.exports=function(o,n,e,_){var t=n.id,s=o.P_,m=o._p_=new r(n,t,s);return s._z_[t]=!0,o._r_.push(m),o._s_.bc(n),m}});
$_mod_foe_tools.remap("/marko$4.7.4/dist/components/endComponent","/marko$4.7.4/dist/components/endComponent-browser");
$_mod_foe_tools.def("/marko$4.7.4/dist/components/endComponent-browser",function(o,e,n,t,s){"use strict";n.exports=function(o){o.ee()}});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/renderer",function(_,o,n,r,t){function e(_,o,n){return"#"===o[0]?o.substring(1):n.id+"-"+n._h_(o)}function i(_){var o=_.parentOut,n=_.out,r=o._r_;void 0!==r&&(n._r_=new c(n,r)),n.c(o._Y_,o.a__,o._Z_)}function s(_,o,n){n=n||{};var r=n.onInput,t=o._l_,s=!0===o._X_,a=!0===o.ad_,c=s;return function(o,k){var y=k.global;!1===k.isSync()&&(y[$]||(y[$]=!0,k.on("beginAsync",i)));var g,w,C,Y,h,x=u(k),P=x.P_,Q=P.Q_,S=void 0!==Q;if(Q)g=Q.id,w=!0,P.Q_=null;else{h=x._p_;var U;if(U=k._Y_){Y=U.id,k._Y_=null,C=k._Z_;var W=k.a__;g=null!=W?e(P,W.toString(),U):U._k_()}else g=P._k_()}if(m)Q=l._n_(n,g,o,k,t,C,Y),o=Q._C_,Q._C_=void 0;else{if(!Q){if(S&&(Q=d[g])&&Q._l_!==t&&(Q.destroy(),Q=void 0),Q)w=!0;else if(w=!1,Q=l._n_(t,g),!0===c){c=!1;var Z="function"==typeof n?n.prototype:n;f(Z,Q.constructor.prototype)}if(Q.s_=!0,void 0!==C&&Q.W_(C,Y),!1===w&&p(Q,"create",o,k),o=Q.H_(o,r,k),!0===w&&(!1===Q.J_||!1===Q.shouldUpdate(o,Q.g_)))return k.ab_(Q),P._z_[g]=!0,void Q.e_()}Q.q_=y,p(Q,"render",k)}var q=v(x,Q,s,h,a);q._c_=w,_(o,k,q,Q,Q.U_),b(k,q),x._p_=h}}var a=_("/marko$4.7.4/dist/components/util-browser"),d=a.a_,p=a.b_,c=_("/marko$4.7.4/dist/components/ComponentsContext"),u=c.__,l=_("/marko$4.7.4/dist/components/registry-browser"),f=_("/raptor-util$3.2.0/copyProps"),m=!0===a.aa_,v=_("/marko$4.7.4/dist/components/beginComponent-browser"),b=_("/marko$4.7.4/dist/components/endComponent-browser"),$="$wa";n.exports=s,s._V_=e,s._W_=i});
$_mod_foe_tools.def("/marko$4.7.4/dist/components/helpers-browser",function(o,e,r,n,s){o("/marko$4.7.4/dist/components/index-browser"),e.c=o("/marko$4.7.4/dist/components/defineComponent"),e.r=o("/marko$4.7.4/dist/components/renderer"),e.rc=o("/marko$4.7.4/dist/components/registry-browser")._M_});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/services/foe-gb-data",function(r,e,a,o,t){"use strict";function s(r,e){return Math.round(r/e)*e}function d(r){var e=[r];return e[e.length]=s(e[e.length-1]/2,5),e[e.length]=s(e[e.length-1]/3,5),e[e.length]=s(e[e.length-1]/4,5),e[e.length]=s(e[e.length-1]/5,5),e}Object.defineProperty(e,"__esModule",{value:!0});var c={NoAge:[{cost:50,reward:d(5)},{cost:70,reward:d(10)},{cost:130,reward:d(15)},{cost:200,reward:d(20)},{cost:270,reward:d(30)},{cost:330,reward:d(35)},{cost:420,reward:d(45)},{cost:490,reward:d(50)},{cost:570,reward:d(60)},{cost:650,reward:d(65)},{cost:667,reward:d(75)},{cost:683,reward:d(85)},{cost:700,reward:d(95)},{cost:718,reward:d(100)},{cost:736,reward:d(110)},{cost:754,reward:d(120)},{cost:773,reward:d(130)},{cost:792,reward:d(140)},{cost:812,reward:d(150)},{cost:833,reward:d(155)},{cost:853,reward:d(165)},{cost:875,reward:d(175)},{cost:897,reward:d(185)},{cost:919,reward:d(195)},{cost:942,reward:d(205)},{cost:965,reward:d(215)},{cost:990,reward:d(225)},{cost:1014,reward:d(235)},{cost:1040,reward:d(245)},{cost:1066,reward:d(255)},{cost:1092,reward:d(265)},{cost:1120,reward:d(275)},{cost:1147,reward:d(285)},{cost:1176,reward:d(300)},{cost:1206,reward:d(310)},{cost:1236,reward:d(320)},{cost:1267,reward:d(330)},{cost:1298,reward:d(340)},{cost:1331,reward:d(350)},{cost:1364,reward:d(365)},{cost:1398,reward:d(375)},{cost:1433,reward:d(385)},{cost:1469,reward:d(395)},{cost:1505,reward:d(405)},{cost:1543,reward:d(420)},{cost:1582,reward:d(430)},{cost:1621,reward:d(440)},{cost:1662,reward:d(450)},{cost:1703,reward:d(465)},{cost:1746,reward:d(475)},{cost:1789,reward:d(485)},{cost:1834,reward:d(500)},{cost:1880,reward:d(510)},{cost:1927,reward:d(520)},{cost:1975,reward:d(535)},{cost:2025,reward:d(545)},{cost:2075,reward:d(555)},{cost:2127,reward:d(570)},{cost:2180,reward:d(580)},{cost:2235,reward:d(590)},{cost:2290,reward:d(605)},{cost:2348,reward:d(615)}],BronzeAge:[{cost:40,reward:d(5)},{cost:60,reward:d(10)},{cost:100,reward:d(10)},{cost:150,reward:d(15)},{cost:210,reward:d(25)},{cost:270,reward:d(30)},{cost:330,reward:d(35)},{cost:380,reward:d(40)},{cost:450,reward:d(45)},{cost:510,reward:d(55)},{cost:523,reward:d(60)},{cost:536,reward:d(65)},{cost:550,reward:d(75)},{cost:563,reward:d(80)},{cost:578,reward:d(85)},{cost:592,reward:d(95)},{cost:607,reward:d(100)},{cost:622,reward:d(110)},{cost:637,reward:d(115)},{cost:653,reward:d(125)},{cost:670,reward:d(130)},{cost:686,reward:d(140)},{cost:704,reward:d(145)},{cost:721,reward:d(155)},{cost:739,reward:d(160)},{cost:758,reward:d(170)},{cost:777,reward:d(180)},{cost:796,reward:d(185)},{cost:816,reward:d(195)},{cost:836,reward:d(200)},{cost:857,reward:d(210)},{cost:879,reward:d(220)},{cost:900,reward:d(225)},{cost:923,reward:d(235)},{cost:946,reward:d(245)},{cost:970,reward:d(250)},{cost:994,reward:d(260)},{cost:1019,reward:d(270)},{cost:1044,reward:d(275)},{cost:1070,reward:d(285)},{cost:1097,reward:d(295)},{cost:1124,reward:d(300)},{cost:1153,reward:d(310)},{cost:1181,reward:d(320)},{cost:1211,reward:d(330)},{cost:1241,reward:d(340)},{cost:1272,reward:d(345)},{cost:1304,reward:d(355)},{cost:1336,reward:d(365)},{cost:1370,reward:d(375)},{cost:1404,reward:d(380)},{cost:1439,reward:d(390)},{cost:1475,reward:d(400)},{cost:1512,reward:d(410)},{cost:1550,reward:d(420)},{cost:1589,reward:d(430)},{cost:1628,reward:d(440)},{cost:1669,reward:d(445)},{cost:1711,reward:d(455)},{cost:1753,reward:d(465)},{cost:1797,reward:d(475)},{cost:1842,reward:d(485)},{cost:1888,reward:d(495)},{cost:1935,reward:d(505)},{cost:1984,reward:d(510)},{cost:2033,reward:d(520)},{cost:2084,reward:d(530)},{cost:2136,reward:d(540)},{cost:2190,reward:d(550)},{cost:2244,reward:d(560)},{cost:2300,reward:d(570)},{cost:2358,reward:d(580)},{cost:2417,reward:d(590)},{cost:2477,reward:d(600)},{cost:2539,reward:d(610)},{cost:2603,reward:d(620)},{cost:2668,reward:d(630)},{cost:2734,reward:d(640)},{cost:2803,reward:d(650)},{cost:2873,reward:d(660)}],IronAge:[{cost:40,reward:d(5)},{cost:60,reward:d(10)},{cost:120,reward:d(15)},{cost:170,reward:d(20)},{cost:220,reward:d(25)},{cost:290,reward:d(30)},{cost:360,reward:d(40)},{cost:420,reward:d(45)},{cost:490,reward:d(50)},{cost:550,reward:d(60)},{cost:564,reward:d(65)},{cost:578,reward:d(70)},{cost:593,reward:d(80)},{cost:608,reward:d(85)},{cost:623,reward:d(95)},{cost:638,reward:d(105)},{cost:654,reward:d(110)},{cost:671,reward:d(120)},{cost:687,reward:d(125)},{cost:705,reward:d(135)},{cost:722,reward:d(145)},{cost:740,reward:d(150)},{cost:759,reward:d(160)},{cost:778,reward:d(170)},{cost:797,reward:d(175)},{cost:817,reward:d(185)},{cost:837,reward:d(105)},{cost:858,reward:d(200)},{cost:880,reward:d(210)},{cost:902,reward:d(220)},{cost:924,reward:d(230)},{cost:947,reward:d(240)},{cost:971,reward:d(245)},{cost:995,reward:d(255)},{cost:1020,reward:d(265)},{cost:1046,reward:d(275)},{cost:1072,reward:d(285)},{cost:1099,reward:d(522)},{cost:1126,reward:d(300)},{cost:1154,reward:d(310)},{cost:1183,reward:d(320)},{cost:1213,reward:d(330)},{cost:1243,reward:d(240)},{cost:1274,reward:d(350)},{cost:1306,reward:d(360)},{cost:1338,reward:d(370)},{cost:1372,reward:d(280)},{cost:1406,reward:d(390)},{cost:1441,reward:d(400)},{cost:1477,reward:d(405)},{cost:1514,reward:d(415)},{cost:1552,reward:d(425)},{cost:1591,reward:d(435)},{cost:1631,reward:d(450)},{cost:1671,reward:d(455)},{cost:1713,reward:d(465)},{cost:1756,reward:d(475)},{cost:1800,reward:d(485)},{cost:1845,reward:d(495)},{cost:1891,reward:d(510)},{cost:1938,reward:d(520)},{cost:1987,reward:d(530)},{cost:2036,reward:d(540)},{cost:2087,reward:d(550)},{cost:2139,reward:d(560)},{cost:2193,reward:d(570)},{cost:2248,reward:d(580)},{cost:2304,reward:d(590)},{cost:2361,reward:d(600)},{cost:2420,reward:d(610)}],EarlyMiddleAges:[{cost:50,reward:d(5)},{cost:60,reward:d(10)},{cost:120,reward:d(15)},{cost:190,reward:d(20)},{cost:240,reward:d(25)},{cost:320,reward:d(35)},{cost:380,reward:d(40)},{cost:460,reward:d(50)},{cost:530,reward:d(55)},{cost:600,reward:d(65)},{cost:615,reward:d(70)},{cost:631,reward:d(80)},{cost:647,reward:d(85)},{cost:663,reward:d(95)},{cost:679,reward:d(100)},{cost:696,reward:d(110)},{cost:714,reward:d(120)},{cost:732,reward:d(130)},{cost:750,reward:d(135)},{cost:769,reward:d(145)},{cost:788,reward:d(155)},{cost:807,reward:d(165)},{cost:828,reward:d(175)},{cost:848,reward:d(180)},{cost:869,reward:d(190)},{cost:891,reward:d(200)},{cost:913,reward:d(210)},{cost:936,reward:d(220)},{cost:960,reward:d(230)},{cost:984,reward:d(240)},{cost:1008,reward:d(250)},{cost:1033,reward:d(255)},{cost:1059,reward:d(265)},{cost:1086,reward:d(275)},{cost:1113,reward:d(285)},{cost:1141,reward:d(295)},{cost:1169,reward:d(305)},{cost:1198,reward:d(315)},{cost:1228,reward:d(325)},{cost:1259,reward:d(335)},{cost:1291,reward:d(345)},{cost:1323,reward:d(360)},{cost:1356,reward:d(370)},{cost:1390,reward:d(380)},{cost:1424,reward:d(390)},{cost:1460,reward:d(400)},{cost:1497,reward:d(410)},{cost:1534,reward:d(420)},{cost:1572,reward:d(430)},{cost:1612,reward:d(440)},{cost:1652,reward:d(450)},{cost:1693,reward:d(465)},{cost:1735,reward:d(475)},{cost:1779,reward:d(485)},{cost:1823,reward:d(495)},{cost:1869,reward:d(505)},{cost:1916,reward:d(515)},{cost:1963,reward:d(525)},{cost:2012,reward:d(540)},{cost:2063,reward:d(550)},{cost:2114,reward:d(560)},{cost:2167,reward:d(570)},{cost:2221,reward:d(585)},{cost:2277,reward:d(595)},{cost:2334,reward:d(605)},{cost:2392,reward:d(615)},{cost:2452,reward:d(625)},{cost:2513,reward:d(640)},{cost:2576,reward:d(650)},{cost:2640,reward:d(660)},{cost:2706,reward:d(675)},{cost:2774,reward:d(685)},{cost:2843,reward:d(695)},{cost:2914,reward:d(705)},{cost:2987,reward:d(720)},{cost:3062,reward:d(730)},{cost:3138,reward:d(740)},{cost:3217,reward:d(755)},{cost:3297,reward:d(765)},{cost:3380,reward:d(775)}],HighMiddleAges:[{cost:50,reward:d(5)},{cost:70,reward:d(10)},{cost:130,reward:d(15)},{cost:200,reward:d(20)},{cost:270,reward:d(30)},{cost:330,reward:d(35)},{cost:420,reward:d(45)},{cost:490,reward:d(50)},{cost:570,reward:d(60)},{cost:650,reward:d(65)},{cost:667,reward:d(75)},{cost:683,reward:d(85)},{cost:700,reward:d(95)},{cost:718,reward:d(100)},{cost:736,reward:d(110)},{cost:754,reward:d(120)},{cost:773,reward:d(130)},{cost:792,reward:d(140)},{cost:812,reward:d(150)},{cost:828,reward:d(155)},{cost:853,reward:d(165)},{cost:875,reward:d(175)},{cost:897,reward:d(185)},{cost:919,reward:d(195)},{cost:942,reward:d(205)},{cost:965,reward:d(215)},{cost:990,reward:d(225)},{cost:1014,reward:d(235)},{cost:1040,reward:d(245)},{cost:1066,reward:d(255)},{cost:1092,reward:d(265)},{cost:1120,reward:d(275)},{cost:1147,reward:d(285)},{cost:1176,reward:d(300)},{cost:1206,reward:d(310)},{cost:1236,reward:d(320)},{cost:1267,reward:d(330)},{cost:1298,reward:d(340)},{cost:1331,reward:d(350)},{cost:1364,reward:d(365)},{cost:1398,reward:d(375)},{cost:1433,reward:d(385)},{cost:1469,reward:d(395)},{cost:1505,reward:d(405)},{cost:1543,reward:d(420)},{cost:1582,reward:d(430)},{cost:1621,reward:d(440)},{cost:1662,reward:d(450)},{cost:1703,reward:d(465)},{cost:1746,reward:d(475)},{cost:1789,reward:d(485)},{cost:1834,reward:d(500)},{cost:1880,reward:d(510)},{cost:1927,reward:d(520)},{cost:1975,reward:d(535)},{cost:2025,reward:d(545)},{cost:2075,reward:d(555)},{cost:2127,reward:d(570)},{cost:2180,reward:d(580)},{cost:2235,reward:d(590)},{cost:2290,reward:d(605)},{cost:2348,reward:d(615)},{cost:2406,reward:d(630)},{cost:2467,reward:d(640)},{cost:2528,reward:d(650)},{cost:2591,reward:d(665)},{cost:2656,reward:d(675)},{cost:2723,reward:d(690)},{cost:2791,reward:d(700)},{cost:2860,reward:d(715)},{cost:2932,reward:d(725)},{cost:3005,reward:d(735)},{cost:3080,reward:d(750)},{cost:3157,reward:d(760)},{cost:3236,reward:d(775)}],LateMiddleAges:[{cost:50,reward:d(5)},{cost:80,reward:d(10)},{cost:140,reward:d(15)},{cost:210,reward:d(25)},{cost:290,reward:d(30)},{cost:360,reward:d(40)},{cost:440,reward:d(45)},{cost:530,reward:d(55)},{cost:610,reward:d(65)},{cost:700,reward:d(70)},{cost:718,reward:d(80)},{cost:736,reward:d(90)},{cost:754,reward:d(100)},{cost:773,reward:d(110)},{cost:792,reward:d(120)},{cost:812,reward:d(125)},{cost:833,reward:d(140)},{cost:853,reward:d(150)},{cost:875,reward:d(155)},{cost:897,reward:d(170)},{cost:919,reward:d(180)},{cost:942,reward:d(190)},{cost:965,reward:d(200)},{cost:990,reward:d(210)},{cost:1014,reward:d(220)},{cost:1040,reward:d(230)},{cost:1066,reward:d(240)},{cost:1092,reward:d(250)},{cost:1120,reward:d(265)},{cost:1148,reward:d(275)},{cost:1176,reward:d(285)},{cost:1206,reward:d(295)},{cost:1236,reward:d(310)},{cost:1267,reward:d(320)},{cost:1298,reward:d(330)},{cost:1331,reward:d(340)},{cost:1364,reward:d(355)},{cost:1398,reward:d(365)},{cost:1433,reward:d(375)},{cost:1469,reward:d(390)},{cost:1506,reward:d(400)},{cost:1543,reward:d(410)},{cost:1582,reward:d(425)},{cost:1621,reward:d(435)},{cost:1662,reward:d(450)},{cost:1703,reward:d(460)},{cost:1746,reward:d(470)},{cost:1789,reward:d(485)},{cost:1834,reward:d(495)},{cost:1880,reward:d(510)},{cost:1927,reward:d(520)},{cost:1975,reward:d(535)},{cost:2025,reward:d(545)},{cost:2075,reward:d(560)},{cost:2127,reward:d(570)},{cost:2180,reward:d(585)},{cost:2235,reward:d(595)},{cost:2291,reward:d(610)},{cost:2348,reward:d(620)},{cost:2406,reward:d(635)},{cost:2467,reward:d(645)},{cost:2528,reward:d(660)},{cost:2591,reward:d(670)},{cost:2656,reward:d(685)},{cost:2723,reward:d(700)},{cost:2791,reward:d(710)},{cost:2860,reward:d(725)},{cost:2932,reward:d(735)},{cost:3005,reward:d(750)},{cost:3080,reward:d(765)},{cost:3157,reward:d(775)},{cost:3236,reward:d(790)},{cost:3317,reward:d(805)},{cost:3400,reward:d(815)},{cost:3485,reward:d(830)},{cost:3572,reward:d(845)},{cost:3661,reward:d(855)},{cost:3753,reward:d(870)},{cost:3847,reward:d(885)},{cost:3943,reward:d(895)}],ColonialAge:[{cost:50,reward:d(5)},{cost:90,reward:d(10)},{cost:150,reward:d(15)},{cost:220,reward:d(25)},{cost:310,reward:d(35)},{cost:380,reward:d(40)},{cost:480,reward:d(50)},{cost:560,reward:d(60)},{cost:650,reward:d(65)},{cost:740,reward:d(75)},{cost:759,reward:d(85)},{cost:778,reward:d(95)},{cost:797,reward:d(105)},{cost:817,reward:d(115)},{cost:838,reward:d(125)},{cost:859,reward:d(135)},{cost:880,reward:d(145)},{cost:902,reward:d(155)},{cost:925,reward:d(170)},{cost:948,reward:d(180)},{cost:971,reward:d(190)},{cost:996,reward:d(200)},{cost:1021,reward:d(210)},{cost:1046,reward:d(225)},{cost:1072,reward:d(235)},{cost:1099,reward:d(245)},{cost:1126,reward:d(260)},{cost:1155,reward:d(270)},{cost:1184,reward:d(280)},{cost:1213,reward:d(295)},{cost:1243,reward:d(305)},{cost:1274,reward:d(315)},{cost:1306,reward:d(330)},{cost:1339,reward:d(340)},{cost:1372,reward:d(350)},{cost:1407,reward:d(365)},{cost:1442,reward:d(375)},{cost:1478,reward:d(390)},{cost:1515,reward:d(400)},{cost:1553,reward:d(415)},{cost:1592,reward:d(425)},{cost:1631,reward:d(440)},{cost:1672,reward:d(450)},{cost:1714,reward:d(465)},{cost:1757,reward:d(480)},{cost:1801,reward:d(490)},{cost:1846,reward:d(505)},{cost:1892,reward:d(515)},{cost:1939,reward:d(530)},{cost:1987,reward:d(540)},{cost:2037,reward:d(555)},{cost:2088,reward:d(570)},{cost:2140,reward:d(580)},{cost:2194,reward:d(595)},{cost:2249,reward:d(610)},{cost:2305,reward:d(620)},{cost:2362,reward:d(635)},{cost:2421,reward:d(650)},{cost:2482,reward:d(665)},{cost:2544,reward:d(675)},{cost:2608,reward:d(690)},{cost:2673,reward:d(705)},{cost:2740,reward:d(715)},{cost:2808,reward:d(730)},{cost:2878,reward:d(745)},{cost:2950,reward:d(760)},{cost:3024,reward:d(775)},{cost:3099,reward:d(785)},{cost:3177,reward:d(800)},{cost:3256,reward:d(815)}],IndustrialAge:[{cost:60,reward:d(10)},{cost:90,reward:d(10)},{cost:150,reward:d(20)},{cost:240,reward:d(25)},{cost:330,reward:d(35)},{cost:410,reward:d(45)},{cost:500,reward:d(50)},{cost:600,reward:d(60)},{cost:690,reward:d(70)},{cost:790,reward:d(80)},{cost:810,reward:d(90)},{cost:830,reward:d(100)},{cost:851,reward:d(115)},{cost:873,reward:d(120)},{cost:894,reward:d(135)},{cost:917,reward:d(145)},{cost:940,reward:d(155)},{cost:963,reward:d(165)},{cost:987,reward:d(180)},{cost:1012,reward:d(190)},{cost:1037,reward:d(200)},{cost:1063,reward:d(215)},{cost:1090,reward:d(225)},{cost:1117,reward:d(235)},{cost:1145,reward:d(250)},{cost:1173,reward:d(260)},{cost:1203,reward:d(275)},{cost:1233,reward:d(285)},{cost:1263,reward:d(300)},{cost:1295,reward:d(310)},{cost:1327,reward:d(325)},{cost:1361,reward:d(335)},{cost:1395,reward:d(350)},{cost:1429,reward:d(360)},{cost:1465,reward:d(375)},{cost:1502,reward:d(390)},{cost:1539,reward:d(400)},{cost:1578,reward:d(415)},{cost:1617,reward:d(425)},{cost:1658,reward:d(440)},{cost:1699,reward:d(455)},{cost:1741,reward:d(465)},{cost:1785,reward:d(480)},{cost:1830,reward:d(495)},{cost:1875,reward:d(505)},{cost:1922,reward:d(520)},{cost:1970,reward:d(535)},{cost:2019,reward:d(550)},{cost:2070,reward:d(560)},{cost:2122,reward:d(575)},{cost:2175,reward:d(590)},{cost:2229,reward:d(605)},{cost:2285,reward:d(620)},{cost:2342,reward:d(635)},{cost:2400,reward:d(645)},{cost:2460,reward:d(660)}],ProgressiveEra:[{cost:60,reward:d(10)},{cost:90,reward:d(10)},{cost:170,reward:d(20)},{cost:260,reward:d(30)},{cost:340,reward:d(35)},{cost:440,reward:d(45)},{cost:530,reward:d(55)},{cost:630,reward:d(65)},{cost:740,reward:d(75)},{cost:830,reward:d(85)},{cost:851,reward:d(95)},{cost:873,reward:d(105)},{cost:894,reward:d(120)},{cost:917,reward:d(130)},{cost:940,reward:d(140)},{cost:963,reward:d(155)},{cost:987,reward:d(165)},{cost:1012,reward:d(175)},{cost:1037,reward:d(190)},{cost:1063,reward:d(200)},{cost:1090,reward:d(215)},{cost:1117,reward:d(225)},{cost:1145,reward:d(240)},{cost:1173,reward:d(250)},{cost:1203,reward:d(265)},{cost:1233,reward:d(275)},{cost:1263,reward:d(290)},{cost:1295,reward:d(300)},{cost:1327,reward:d(315)},{cost:1361,reward:d(330)},{cost:1395,reward:d(340)},{cost:1429,reward:d(355)},{cost:1465,reward:d(370)},{cost:1502,reward:d(385)},{cost:1539,reward:d(395)},{cost:1578,reward:d(410)},{cost:1617,reward:d(425)},{cost:1658,reward:d(440)},{cost:1699,reward:d(450)},{cost:1741,reward:d(465)},{cost:1785,reward:d(480)},{cost:1830,reward:d(495)},{cost:1875,reward:d(510)},{cost:1922,reward:d(525)},{cost:1970,reward:d(535)},{cost:2020,reward:d(550)},{cost:2070,reward:d(565)},{cost:2122,reward:d(580)},{cost:2175,reward:d(595)},{cost:2229,reward:d(610)},{cost:2285,reward:d(625)},{cost:2342,reward:d(640)},{cost:2400,reward:d(655)},{cost:2460,reward:d(670)},{cost:2522,reward:d(685)},{cost:2585,reward:d(700)},{cost:2650,reward:d(715)},{cost:2716,reward:d(730)},{cost:2784,reward:d(745)},{cost:2853,reward:d(760)},{cost:2925,reward:d(775)},{cost:2998,reward:d(790)},{cost:3073,reward:d(805)},{cost:3149,reward:d(820)},{cost:3228,reward:d(835)},{cost:3309,reward:d(855)},{cost:3392,reward:d(870)},{cost:3476,reward:d(885)},{cost:3563,reward:d(900)},{cost:3652,reward:d(915)},{cost:3744,reward:d(930)},{cost:3837,reward:d(945)},{cost:3933,reward:d(965)},{cost:4031,reward:d(980)},{cost:4132,reward:d(995)},{cost:4235,reward:d(1010)},{cost:4341,reward:d(1025)},{cost:4450,reward:d(1045)},{cost:4561,reward:d(1060)},{cost:4675,reward:d(1075)}],ModernEra:[{cost:60,reward:d(10)},{cost:100,reward:d(10)},{cost:180,reward:d(20)},{cost:270,reward:d(30)},{cost:360,reward:d(40)},{cost:460,reward:d(50)},{cost:560,reward:d(60)},{cost:670,reward:d(70)},{cost:770,reward:d(80)},{cost:880,reward:d(90)},{cost:902,reward:d(100)},{cost:925,reward:d(115)},{cost:948,reward:d(125)},{cost:972,reward:d(135)},{cost:996,reward:d(150)},{cost:1021,reward:d(160)},{cost:1047,reward:d(175)},{cost:1073,reward:d(185)},{cost:1099,reward:d(200)},{cost:1127,reward:d(210)},{cost:1155,reward:d(225)},{cost:1184,reward:d(240)},{cost:1214,reward:d(250)},{cost:1244,reward:d(265)},{cost:1275,reward:d(280)}],PostmodernEra:[{cost:60,reward:d(10)},{cost:100,reward:d(10)},{cost:180,reward:d(20)},{cost:270,reward:d(30)},{cost:360,reward:d(40)},{cost:460,reward:d(50)},{cost:560,reward:d(60)},{cost:670,reward:d(75)},{cost:770,reward:d(85)},{cost:880,reward:d(95)},{cost:902,reward:d(110)},{cost:925,reward:d(120)},{cost:948,reward:d(130)},{cost:972,reward:d(145)},{cost:996,reward:d(155)},{cost:1021,reward:d(170)},{cost:1047,reward:d(195)},{cost:1073,reward:d(195)},{cost:1099,reward:d(210)},{cost:1127,reward:d(225)},{cost:1155,reward:d(235)},{cost:1184,reward:d(250)},{cost:1214,reward:d(265)},{cost:1244,reward:d(280)},{cost:1275,reward:d(295)},{cost:1307,reward:d(305)},{cost:1340,reward:d(320)},{cost:1373,reward:d(335)},{cost:1407,reward:d(350)},{cost:1442,reward:d(365)},{cost:1479,reward:d(380)},{cost:1515,reward:d(395)},{cost:1553,reward:d(410)},{cost:1592,reward:d(425)},{cost:1632,reward:d(440)},{cost:1673,reward:d(455)},{cost:1715,reward:d(470)},{cost:1757,reward:d(485)},{cost:1801,reward:d(500)},{cost:1846,reward:d(515)},{cost:1893,reward:d(535)},{cost:1940,reward:d(550)},{cost:1988,reward:d(565)},{cost:2038,reward:d(580)},{cost:2089,reward:d(595)},{cost:2141,reward:d(615)},{cost:2195,reward:d(630)},{cost:2250,reward:d(645)},{cost:2306,reward:d(660)},{cost:2363,reward:d(675)},{cost:2422,reward:d(695)},{cost:2483,reward:d(710)},{cost:2545,reward:d(725)},{cost:2609,reward:d(745)},{cost:2674,reward:d(760)},{cost:2741,reward:d(775)},{cost:2809,reward:d(795)},{cost:2879,reward:d(810)},{cost:2951,reward:d(830)},{cost:3025,reward:d(845)},{cost:3101,reward:d(860)},{cost:3178,reward:d(880)},{cost:3258,reward:d(895)},{cost:3339,reward:d(915)},{cost:3423,reward:d(930)},{cost:3508,reward:d(945)},{cost:3596,reward:d(965)},{cost:3686,reward:d(985)},{cost:3778,reward:d(1e3)},{cost:3872,reward:d(1020)},{cost:3969,reward:d(1035)},{cost:4068,reward:d(1050)},{cost:4170,reward:d(1070)},{cost:4274,reward:d(1090)},{cost:4381,reward:d(1105)},{cost:4491,reward:d(1125)},{cost:4603,reward:d(1140)},{cost:4718,reward:d(1160)},{cost:4836,reward:d(1175)},{cost:4957,reward:d(1195)}],ContemporaryEra:[{cost:60,reward:d(10)},{cost:100,reward:d(15)},{cost:180,reward:d(20)},{cost:270,reward:d(30)},{cost:360,reward:d(40)},{cost:460,reward:d(55)},{cost:560,reward:d(65)},{cost:670,reward:d(75)},{cost:770,reward:d(85)},{cost:880,reward:d(100)},{cost:902,reward:d(115)},{cost:925,reward:d(125)},{cost:948,reward:d(140)},{cost:972,reward:d(150)},{cost:996,reward:d(165)},{cost:1021,reward:d(180)},{cost:1047,reward:d(190)},{cost:1073,reward:d(205)},{cost:1099,reward:d(220)},{cost:1127,reward:d(235)},{cost:1155,reward:d(250)},{cost:1184,reward:d(265)},{cost:1214,reward:d(280)},{cost:1244,reward:d(290)},{cost:1275,reward:d(305)},{cost:1307,reward:d(320)},{cost:1340,reward:d(335)},{cost:1373,reward:d(355)},{cost:1407,reward:d(365)},{cost:1442,reward:d(385)},{cost:1479,reward:d(400)},{cost:1515,reward:d(415)},{cost:1553,reward:d(430)},{cost:1592,reward:d(445)},{cost:1632,reward:d(460)},{cost:1673,reward:d(480)},{cost:1715,reward:d(495)},{cost:1757,reward:d(510)},{cost:1801,reward:d(525)},{cost:1846,reward:d(545)},{cost:1893,reward:d(560)},{cost:1940,reward:d(575)},{cost:1988,reward:d(590)},{cost:2038,reward:d(610)},{cost:2089,reward:d(625)},{cost:2141,reward:d(645)},{cost:2195,reward:d(660)},{cost:2250,reward:d(675)},{cost:2306,reward:d(695)},{cost:2363,reward:d(710)},{cost:2422,reward:d(730)},{cost:2483,reward:d(745)},{cost:2545,reward:d(765)},{cost:2609,reward:d(780)},{cost:2674,reward:d(800)},{cost:2741,reward:d(815)},{cost:2809,reward:d(835)},{cost:2879,reward:d(850)},{cost:2951,reward:d(870)},{cost:3025,reward:d(855)},{cost:3101,reward:d(905)},{cost:3178,reward:d(920)},{cost:3258,reward:d(940)},{cost:3339,reward:d(960)},{cost:3423,reward:d(975)},{cost:3508,reward:d(995)},{cost:3596,reward:d(1015)},{cost:3686,reward:d(1030)},{cost:3778,reward:d(1050)},{cost:3872,reward:d(1070)},{cost:3969,reward:d(1085)},{cost:4068,reward:d(1105)},{cost:4170,reward:d(1125)},{cost:4274,reward:d(1140)},{cost:4381,reward:d(1160)},{cost:4491,reward:d(1180)},{cost:4603,reward:d(1200)},{cost:4718,reward:d(1215)},{cost:4836,reward:d(1235)},{cost:4957,reward:d(1255)}],Tomorrow:[{cost:70,reward:d(10)},{cost:100,reward:d(15)},{cost:190,reward:d(20)},{cost:280,reward:d(35)},{cost:380,reward:d(45)},{cost:480,reward:d(55)},{cost:590,reward:d(65)},{cost:710,reward:d(80)},{cost:810,reward:d(90)},{cost:930,reward:d(105)},{cost:954,reward:d(120)},{cost:978,reward:d(130)},{cost:1002,reward:d(145)},{cost:1027,reward:d(160)},{cost:1053,reward:d(175)},{cost:1079,reward:d(185)},{cost:1106,reward:d(200)},{cost:1134,reward:d(215)},{cost:1162,reward:d(230)},{cost:1191,reward:d(245)},{cost:1221,reward:d(260)},{cost:1251,reward:d(275)},{cost:1283,reward:d(290)},{cost:1315,reward:d(305)},{cost:1347,reward:d(320)}],TheFuture:[{cost:70,reward:d(10)},{cost:110,reward:d(15)},{cost:200,reward:d(25)},{cost:290,reward:d(35)},{cost:400,reward:d(45)},{cost:510,reward:d(60)},{cost:620,reward:d(70)},{cost:740,reward:d(85)},{cost:860,reward:d(95)},{cost:970,reward:d(110)},{cost:995,reward:d(120)},{cost:1020,reward:d(135)},{cost:1045,reward:d(150)},{cost:1071,reward:d(165)},{cost:1098,reward:d(180)},{cost:1125,reward:d(195)},{cost:1154,reward:d(210)},{cost:1182,reward:d(225)},{cost:1212,reward:d(240)},{cost:1242,reward:d(255)},{cost:1273,reward:d(270)},{cost:1305,reward:d(290)},{cost:1338,reward:d(305)},{cost:1371,reward:d(320)},{cost:1405,reward:d(335)},{cost:1440,reward:d(355)},{cost:1476,reward:d(370)},{cost:1513,reward:d(385)},{cost:1551,reward:d(405)},{cost:1590,reward:d(420)},{cost:1630,reward:d(435)},{cost:1670,reward:d(455)},{cost:1712,reward:d(470)},{cost:1755,reward:d(490)},{cost:1799,reward:d(505)},{cost:1844,reward:d(525)},{cost:1890,reward:d(540)},{cost:1937,reward:d(560)},{cost:1986,reward:d(575)},{cost:2035,reward:d(595)},{cost:2086,reward:d(615)},{cost:2138,reward:d(630)},{cost:2192,reward:d(650)},{cost:2246,reward:d(670)},{cost:2303,reward:d(685)},{cost:2360,reward:d(705)},{cost:2419,reward:d(725)},{cost:2480,reward:d(740)},{cost:2541,reward:d(760)},{cost:2605,reward:d(780)},{cost:2670,reward:d(800)},{cost:2737,reward:d(815)},{cost:2805,reward:d(835)},{cost:2875,reward:d(855)},{cost:2947,reward:d(875)},{cost:3021,reward:d(895)},{cost:3096,reward:d(915)},{cost:3174,reward:d(930)},{cost:3253,reward:d(950)},{cost:3334,reward:d(970)},{cost:3418,reward:d(990)},{cost:3503,reward:d(1010)},{cost:3591,reward:d(1030)},{cost:3681,reward:d(1050)},{cost:3773,reward:d(1070)},{cost:3867,reward:d(1090)},{cost:3964,reward:d(1110)},{cost:4063,reward:d(1130)},{cost:4164,reward:d(1150)},{cost:4268,reward:d(1170)},{cost:4375,reward:d(1190)},{cost:4484,reward:d(1210)},{cost:4596,reward:d(1230)},{cost:4711,reward:d(1250)},{cost:4829,reward:d(1270)},{cost:4950,reward:d(1290)},{cost:5074,reward:d(1310)},{cost:5200,reward:d(1335)},{cost:5330,reward:d(1355)},{cost:5464,reward:d(1375)},{cost:5600,reward:d(1395)},{cost:5740,reward:d(1415)},{cost:5884,reward:d(1435)},{cost:6031,reward:d(1455)},{cost:6182,reward:d(1480)},{cost:6336,reward:d(1500)},{cost:6494,reward:d(1520)},{cost:6657,reward:d(1540)},{cost:6823,reward:d(1560)},{cost:6994,reward:d(1585)},{cost:7169,reward:d(1605)},{cost:7348,reward:d(1625)},{cost:7531,reward:d(1645)},{cost:7720,reward:d(1670)},{cost:7913,reward:d(1690)},{cost:8111,reward:d(1720)},{cost:8313,reward:d(1735)},{cost:8521,reward:d(1755)},{cost:8734,reward:d(1775)},{cost:8952,reward:d(1800)},{cost:9176,reward:d(1820)},{cost:9406,reward:d(1840)},{cost:9641,reward:d(1865)},{cost:9882,reward:d(1885)},{cost:10129,reward:d(1905)},{cost:10382,reward:d(1930)},{cost:10642,reward:d(1950)},{cost:10908,reward:d(1975)},{cost:11180,reward:d(1995)},{cost:11460,reward:d(2015)},{cost:11746,reward:d(2040)},{cost:12040,reward:d(2060)},{cost:12341,reward:d(2085)},{cost:12649,reward:d(2105)},{cost:12966,reward:d(2130)},{cost:13290,reward:d(2150)},{cost:13622,reward:d(2170)},{cost:13963,reward:d(2195)},{cost:14312,reward:d(2215)},{cost:14669,reward:d(2240)},{cost:15036,reward:d(2260)},{cost:15412,reward:d(2285)},{cost:15797,reward:d(2305)},{cost:16192,reward:d(2330)},{cost:16597,reward:d(2350)},{cost:17012,reward:d(2375)},{cost:17437,reward:d(2395)},{cost:17873,reward:d(2420)},{cost:18320,reward:d(2445)},{cost:18778,reward:d(2465)},{cost:19247,reward:d(2490)},{cost:19729,reward:d(2510)},{cost:20222,reward:d(2535)},{cost:20727,reward:d(2555)},{cost:21245,reward:d(2580)},{cost:21777,reward:d(2605)},{cost:22321,reward:d(2625)},{cost:22879,reward:d(2650)},{cost:23451,reward:d(2675)},{cost:24037,reward:d(2695)},{cost:24638,reward:d(2720)}],ArcticFuture:[{cost:80,reward:d(10)},{cost:120,reward:d(25)},{cost:230,reward:d(25)},{cost:340,reward:d(35)},{cost:450,reward:d(45)},{cost:580,reward:d(60)},{cost:710,reward:d(75)},{cost:850,reward:d(85)},{cost:980,reward:d(100)},{cost:1110,reward:d(115)},{cost:1138,reward:d(130)},{cost:1167,reward:d(145)},{cost:1196,reward:d(160)},{cost:1226,reward:d(170)},{cost:1256,reward:d(190)},{cost:1288,reward:d(205)},{cost:1320,reward:d(220)},{cost:1353,reward:d(235)},{cost:1387,reward:d(250)},{cost:1421,reward:d(265)},{cost:1457,reward:d(285)},{cost:1493,reward:d(300)},{cost:1531,reward:d(315)},{cost:1569,reward:d(335)},{cost:1608,reward:d(350)},{cost:1648,reward:d(370)},{cost:1689,reward:d(385)},{cost:1732,reward:d(400)},{cost:1775,reward:d(420)},{cost:1819,reward:d(440)},{cost:1865,reward:d(455)},{cost:1911,reward:d(475)},{cost:1959,reward:d(490)},{cost:2008,reward:d(510)},{cost:2058,reward:d(525)},{cost:2110,reward:d(545)},{cost:2163,reward:d(565)},{cost:2217,reward:d(585)},{cost:2272,reward:d(600)},{cost:2329,reward:d(620)},{cost:2387,reward:d(640)},{cost:2447,reward:d(660)},{cost:2508,reward:d(675)},{cost:2571,reward:d(695)},{cost:2635,reward:d(715)},{cost:2701,reward:d(735)},{cost:2768,reward:d(755)},{cost:2837,reward:d(775)},{cost:2908,reward:d(795)},{cost:2981,reward:d(815)},{cost:3055,reward:d(830)},{cost:3132,reward:d(850)},{cost:3210,reward:d(870)},{cost:3290,reward:d(895)},{cost:3373,reward:d(910)},{cost:3457,reward:d(930)},{cost:3543,reward:d(950)},{cost:3632,reward:d(970)},{cost:3723,reward:d(995)},{cost:3816,reward:d(1015)},{cost:3911,reward:d(1035)},{cost:4009,reward:d(1055)},{cost:4109,reward:d(1075)},{cost:4212,reward:d(1095)},{cost:4317,reward:d(1115)},{cost:4425,reward:d(1135)},{cost:4536,reward:d(1155)},{cost:4649,reward:d(1180)},{cost:4765,reward:d(1200)},{cost:4884,reward:d(1220)},{cost:5006,reward:d(1240)},{cost:5132,reward:d(1260)},{cost:5260,reward:d(1285)},{cost:5391,reward:d(1305)},{cost:5526,reward:d(1325)},{cost:5664,reward:d(1350)},{cost:5806,reward:d(1370)},{cost:5951,reward:d(1390)},{cost:6100,reward:d(1410)},{cost:6252,reward:d(1435)}],OceanicFuture:[{cost:80,reward:d(10)},{cost:130,reward:d(15)},{cost:240,reward:d(25)},{cost:350,reward:d(35)},{cost:470,reward:d(50)},{cost:610,reward:d(65)},{cost:740,reward:d(75)},{cost:880,reward:d(90)},{cost:1020,reward:d(105)},{cost:1160,reward:d(120)},{cost:1189,reward:d(135)},{cost:1219,reward:d(150)},{cost:1250,reward:d(165)},{cost:1281,reward:d(180)},{cost:1313,reward:d(195)},{cost:1346,reward:d(210)},{cost:1379,reward:d(230)},{cost:1414,reward:d(245)},{cost:1449,reward:d(260)},{cost:1485,reward:d(280)},{cost:1523,reward:d(295)},{cost:1561,reward:d(310)},{cost:1600,reward:d(330)},{cost:1640,reward:d(350)},{cost:1681,reward:d(365)},{cost:1723,reward:d(385)},{cost:1766,reward:d(400)},{cost:1810,reward:d(420)},{cost:1855,reward:d(440)},{cost:1901,reward:d(455)},{cost:1949,reward:d(475)},{cost:1998,reward:d(495)},{cost:2047,reward:d(510)},{cost:2099,reward:d(530)},{cost:2151,reward:d(550)},{cost:2205,reward:d(570)},{cost:2260,reward:d(590)},{cost:2316,reward:d(605)},{cost:2374,reward:d(625)},{cost:2434,reward:d(645)},{cost:2495,reward:d(665)},{cost:2557,reward:d(685)},{cost:2621,reward:d(705)},{cost:2686,reward:d(725)},{cost:2753,reward:d(745)},{cost:2822,reward:d(765)},{cost:2893,reward:d(785)},{cost:2965,reward:d(805)},{cost:3039,reward:d(825)},{cost:3115,reward:d(845)},{cost:3193,reward:d(865)},{cost:3273,reward:d(880)},{cost:3355,reward:d(910)},{cost:3439,reward:d(930)},{cost:3524,reward:d(950)},{cost:3613,reward:d(970)},{cost:3703,reward:d(990)},{cost:3795,reward:d(1015)},{cost:3890,reward:d(1055)},{cost:3988,reward:d(1035)},{cost:4087,reward:d(1075)},{cost:4189,reward:d(1100)},{cost:4294,reward:d(1120)},{cost:4401,reward:d(1140)},{cost:4511,reward:d(1160)},{cost:4624,reward:d(1185)},{cost:4740,reward:d(1205)},{cost:4858,reward:d(1225)},{cost:4980,reward:d(1250)},{cost:5104,reward:d(1270)},{cost:5232,reward:d(1295)},{cost:5363,reward:d(1315)},{cost:5497,reward:d(1335)},{cost:5634,reward:d(1360)},{cost:5775,reward:d(1380)},{cost:5919,reward:d(1405)},{cost:6067,reward:d(1425)},{cost:6219,reward:d(1450)},{cost:6374,reward:d(1470)},{cost:6534,reward:d(1495)},{cost:6697,reward:d(1515)},{cost:6864,reward:d(1540)}]},w={Observatory:{key:"Observatory",levels:c.NoAge},Temple_of_Relics:{key:"Temple_of_Relics",levels:c.NoAge},Oracle_of_Delphi:{key:"Oracle_of_Delphi",levels:c.NoAge},Tower_of_Babel:{key:"Tower_of_Babel",levels:c.BronzeAge},Statue_of_Zeus:{key:"Statue_of_Zeus",levels:c.BronzeAge},Colosseum:{key:"Colosseum",levels:c.IronAge},Lighthouse_of_Alexandria:{key:"Lighthouse_of_Alexandria",levels:c.IronAge},Hagia_Sophia:{key:"Hagia_Sophia",levels:c.EarlyMiddleAges},Cathedral_of_Aachen:{key:"Cathedral_of_Aachen",levels:c.EarlyMiddleAges},St_Mark_s_Basilica:{key:"St_Mark_s_Basilica",levels:c.HighMiddleAges},Notre_Dame:{key:"Notre_Dame",levels:c.HighMiddleAges},Saint_Basil_s_Cathedral:{key:"Saint_Basil_s_Cathedral",levels:c.LateMiddleAges},Castel_del_Monte:{key:"Castel_del_Monte",levels:c.LateMiddleAges},Deal_Castle:{key:"Deal_Castle",levels:c.ColonialAge},Frauenkirche_of_Dresden:{key:"Frauenkirche_of_Dresden",levels:c.ColonialAge},Capitol:{key:"Capitol",levels:c.IndustrialAge},Royal_Albert_Hall:{key:"Royal_Albert_Hall",levels:c.IndustrialAge},Chateau_Frontenac:{key:"Chateau_Frontenac",levels:c.ProgressiveEra},Alcatraz:{key:"Alcatraz",levels:c.ProgressiveEra},Space_Needle:{key:"Space_Needle",levels:c.ModernEra},Atomium:{key:"Atomium",display_name:"Atomium",levels:c.ModernEra},Cape_Canaveral:{key:"Cape_Canaveral",levels:c.PostmodernEra},The_Habitat:{key:"The_Habitat",levels:c.PostmodernEra},Lotus_Temple:{key:"Lotus_Temple",
levels:c.ContemporaryEra},Innovation_Tower:{key:"Innovation_Tower",levels:c.ContemporaryEra},Dynamic_Tower:{key:"Dynamic_Tower",levels:c.Tomorrow},Voyager_V1:{key:"Voyager_V1",levels:c.Tomorrow},The_Arc:{key:"The_Arc",display_name:"L'Arche",levels:c.TheFuture},Rain_Forest_Project:{key:"Rain_Forest_Project",levels:c.TheFuture},Gaea_Statue:{key:"Gaea_Statue",levels:c.ArcticFuture},Arctic_Orangery:{key:"Arctic_Orangery",levels:c.ArcticFuture},Seed_Vault:{key:"Seed_Vault",levels:c.ArcticFuture},Atlantis_Museum:{key:"Atlantis_Museum",levels:c.OceanicFuture},The_Kraken:{key:"The_Kraken",levels:c.OceanicFuture}};e.default={gbs:w,ages:c,GBs_BY_AGE:{NoAge:{key:"NoAge",gbs:[w.Observatory,w.Temple_of_Relics,w.Oracle_of_Delphi]},BronzeAge:{key:"BronzeAge",gbs:[w.Tower_of_Babel,w.Statue_of_Zeus]},IronAge:{key:"IronAge",gbs:[w.Colosseum,w.Lighthouse_of_Alexandria]},EarlyMiddleAges:{key:"EarlyMiddleAges",gbs:[w.Hagia_Sophia,w.Cathedral_of_Aachen]},HighMiddleAges:{key:"HighMiddleAges",gbs:[w.St_Mark_s_Basilica,w.Notre_Dame]},LateMiddleAges:{key:"LateMiddleAges",gbs:[w.Saint_Basil_s_Cathedral,w.Castel_del_Monte]},ColonialAge:{key:"ColonialAge",gbs:[w.Deal_Castle,w.Frauenkirche_of_Dresden]},IndustrialAge:{key:"IndustrialAge",gbs:[w.Capitol,w.Royal_Albert_Hall]},ProgressiveEra:{key:"ProgressiveEra",gbs:[w.Chateau_Frontenac,w.Alcatraz]},ModernEra:{key:"ModernEra",gbs:[w.Space_Needle,w.Atomium]},PostmodernEra:{key:"PostmodernEra",gbs:[w.Cape_Canaveral,w.The_Habitat]},ContemporaryEra:{key:"ContemporaryEra",gbs:[w.Lotus_Temple,w.Innovation_Tower]},Tomorrow:{key:"Tomorrow",gbs:[w.Dynamic_Tower,w.Voyager_V1]},TheFuture:{key:"TheFuture",gbs:[w.The_Arc,w.Rain_Forest_Project]},ArcticFuture:{key:"ArcticFuture",gbs:[w.Gaea_Statue,w.Arctic_Orangery,w.Seed_Vault]},OceanicFuture:{key:"OceanicFuture",gbs:[w.Atlantis_Museum,w.The_Kraken]}}},a.exports=e.default});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/routes/gb-investment/component",function(e,t,n,o,r){"use strict";function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=e("/foe-tools$1.3.2/src/services/foe-gb-data"),i=function(e){return e&&e.__esModule?e:{default:e}}(f),c=function(){function e(){u(this,e)}return a(e,[{key:"onCreate",value:function(){this.state={data:i.default}}}]),e}();t.default=c,n.exports=t.default});
$_mod_foe_tools.main("/foe-tools$1.3.2/src/components/gb-investment","index.marko");
$_mod_foe_tools.def("/foe-tools$1.3.2/src/services/enumify",function(e,t,r,n,o){"use strict";function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){var r=!0,n=!1,o=void 0;try{for(var u,i=Object.getOwnPropertyNames(t)[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var a=u.value,l=Object.getOwnPropertyDescriptor(t,a);Object.defineProperty(e,a,l)}}catch(e){n=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw o}}return e}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.copyProperties=i;var s=Symbol();t.Enum=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(u(this,e),{}.hasOwnProperty.call(this.constructor,s))throw new Error("Enum classes can’t be instantiated");"object"===(void 0===t?"undefined":a(t))&&null!==t&&i(this,t)}return l(e,[{key:"toString",value:function(){return this.constructor.name+"."+this.name}}],[{key:"initEnum",value:function(e){return Object.defineProperty(this,"enumValues",{value:[],configurable:!1,writable:!1,enumerable:!0}),Array.isArray(e)?this._enumValuesFromArray(e):this._enumValuesFromObject(e),Object.freeze(this.enumValues),this[s]=!0,this}},{key:"_enumValuesFromArray",value:function(e){var t=!0,r=!1,n=void 0;try{for(var o,u=e[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var i=o.value;this._pushEnumValue(new this,i)}}catch(e){r=!0,n=e}finally{try{!t&&u.return&&u.return()}finally{if(r)throw n}}}},{key:"_enumValuesFromObject",value:function(e){var t=!0,r=!1,n=void 0;try{for(var o,u=Object.keys(e)[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var i=o.value,a=new this(e[i]);this._pushEnumValue(a,i)}}catch(e){r=!0,n=e}finally{try{!t&&u.return&&u.return()}finally{if(r)throw n}}}},{key:"_pushEnumValue",value:function(e,t){e.name=t,e.ordinal=this.enumValues.length,Object.defineProperty(this,t,{value:e,configurable:!1,writable:!1,enumerable:!0}),this.enumValues.push(e)}},{key:"enumValueOf",value:function(e){return this.enumValues.find(function(t){return t.name===e})}},{key:Symbol.iterator,value:function(){return this.enumValues[Symbol.iterator]()}}]),e}()});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/services/foe-gb-investment",function(t,e,n,r,i){"use strict";function o(t,e){for(var n=0,r=0,i=void 0;r<e.length-1;)n+=e[r],r++;return i=t-(n+2*e[e.length-1]),i<0?0:i}function a(t,e,n){var r={};r.cost=t[e-1].cost,r.investment=[];for(var i=[],a=0;a<t[e-1].reward.length;a++){var s={},l=1+n[a]/100;s.reward=t[e-1].reward[a],s.participation=Math.ceil(s.reward*l),i[i.length]=s.participation,s.preparation=o(r.cost,i),r.investment[r.investment.length]=s}return r.totalPreparations=0===r.investment[r.investment.length-1].preparation?0:r.investment[r.investment.length-1].preparation+r.investment[r.investment.length-1].participation,r.level=e,r}Object.defineProperty(e,"__esModule",{value:!0}),e.default={Submit:function(t,e,n){if(!(t<1||t>n.length))return a(n,t,e)}},n.exports=e.default});
$_mod_foe_tools.installed("foe-tools$1.3.2","js-cookie","2.2.0");
$_mod_foe_tools.main("/js-cookie$2.2.0","src/js.cookie");
$_mod_foe_tools.def("/js-cookie$2.2.0/src/js.cookie",function(e,n,o,t,r){!function(e){var t=!1;if("function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof n&&(o.exports=e(),t=!0),!t){var r=window.Cookies,i=window.Cookies=e();i.noConflict=function(){return window.Cookies=r,i}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},t.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape);var f="";for(var a in i)i[a]&&(f+="; "+a,!0!==i[a]&&(f+="="+i[a]));return document.cookie=n+"="+r+f}n||(c={});for(var d=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,u=0;u<d.length;u++){var l=d[u].split("="),C=l.slice(1).join("=");this.json||'"'!==C.charAt(0)||(C=C.slice(1,-1));try{var g=l[0].replace(p,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(p,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(e){}if(n===g){c=C;break}n||(c[g]=C)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})})});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/gb-investment/component",function(e,t,a,l,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var a={};return e.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(e,t,l){a[t]=void 0!==l?l:""}),t?a[t]?a[t]:null:a}function c(e,t,a){return e>=t&&e<=a}function v(){if(!this.state["is-permalink"]){L.default.set("gb_level",this.state.level,{path:""}),L.default.set("gb_global_investment",this.state["percentage-value-global"],{path:""});for(var e=0;e<5;e++)L.default.set("gb_investment_"+e,this.state["percentage-value"][e],{path:""})}this.state.gb=N.default.Submit(this.state.level,this.state["percentage-value"],this.state.current_gb.levels)}function f(){for(var e=0;e<5;e++)this.getEl("percentage-value-"+e).classList.remove("is-danger")}function g(){var e=this.getEl("level");return isNaN(e.value)||!c(e.value,1,this.state["max-level"])?(e.classList.add("is-danger"),y.INVALID):(e.classList.remove("is-danger"),parseInt(e.value)!==this.state.level?(this.state.level=parseInt(e.value),y.VALID):y.NO_CHANGE)}function p(){var e=this.getEl("percentage-value-global");if(!isNaN(e.value)&&parseFloat(e.value)>=0){e.classList.remove("is-danger");var t=[];this.state["percentage-value-global"]=parseFloat(e.value);for(var a=0;a<5;a++)t[a]=this.state["percentage-value-global"];return this.state["percentage-value"]=t,y.VALID}return e.classList.add("is-danger"),y.INVALID}Object.defineProperty(t,"__esModule",{value:!0});var b=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=e("/foe-tools$1.3.2/src/services/enumify"),h=e("/foe-tools$1.3.2/src/services/foe-gb-data"),_=n(h),m=e("/foe-tools$1.3.2/src/services/foe-gb-investment"),N=n(m),I=e("/js-cookie$2.2.0/src/js.cookie"),L=n(I),y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(d.Enum);y.initEnum(["VALID","INVALID","NO_CHANGE"]);var E=function(){function e(){r(this,e)}return b(e,[{key:"onCreate",value:function(e){this.state={data:_.default,current_gb:_.default.gbs[e.gb],level:void 0===L.default.get("gb_level")?10:L.default.get("gb_level"),"max-level":_.default.gbs[e.gb].levels.length,"percentage-value-global":void 0===L.default.get("gb_global_investment")?90:L.default.get("gb_global_investment"),"percentage-value":[90,90,90,90,90],gb:null,"is-permalink":!1};for(var t=0;t<5;t++)void 0!==L.default.get("gb_investment_"+t)&&(this.state["percentage-value"][t]=parseFloat(L.default.get("gb_investment_"+t)));v.call(this)}},{key:"onMount",value:function(){var e=this;this.subscribeTo(this.getEl("level")).on("keyup",function(){g.call(e)===y.VALID&&v.call(e)}),this.subscribeTo(this.getEl("percentage-value-global")).on("keyup",function(){p.call(e)===y.VALID&&v.call(e)});for(var t=0;t<5;t++)!function(t){e.subscribeTo(e.getEl("percentage-value-"+t)).on("keyup",function(){var a=e.getEl("percentage-value-"+t);!isNaN(a.value)&&parseFloat(a.value)>=0?(a.classList.remove("is-danger"),parseFloat(a.value)!==e.state["percentage-value"][t]&&(e.state["percentage-value"][t]=parseFloat(a.value),v.call(e))):a.classList.add("is-danger")})}(t);this.subscribeTo(window).on("DOMContentLoaded",function(){var t=u(window,"level"),a=u(window,"pg"),l=!1;t&&!isNaN(t)&&parseInt(t)<=e.state["max-level"]&&(l=!0,e.state.level=parseInt(t)),a&&!isNaN(a)&&parseFloat(a)>=0&&(l=!0,e.state["percentage-value-global"]=parseFloat(a));for(var s=0;s<5;s++){var n=u(window,"p"+(s+1));n&&!isNaN(n)&&parseFloat(n)>=0&&(l=!0,e.state["percentage-value"][s]=parseFloat(n))}e.state["is-permalink"]=l,v.call(e)}),this.subscribeTo(this.getEl("submit-global")).on("click",function(){var t=g.call(e),a=p.call(e);t===y.INVALID||a===y.INVALID||t===a&&t===y.NO_CHANGE||(f.call(e),v.call(e))}),this.subscribeTo(this.getEl("submit-custom")).on("click",function(){for(var t=y.NO_CHANGE,a=!0,l=0;l<5;l++){var s=e.getEl("percentage-value-"+l);s.value>=0?parseFloat(s.value)!==e.state["percentage-value"][l]&&(s.classList.remove("is-danger"),e.state["percentage-value"][l]=parseFloat(s.value),t=a?y.VALID:t):(s.classList.add("is-danger"),a=!1,t=y.INVALID)}t!==y.INVALID&&(f.call(e),v.call(e))})}}]),e}();t.default=E,a.exports=t.default});
$_mod_foe_tools.main("/foe-tools$1.3.2/src/components/gb-investment/components/gb-list-select","index.marko");
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/gb-investment/components/gb-list-select/component",function(e,t,n,o,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=e("/foe-tools$1.3.2/src/services/foe-gb-data"),c=function(e){return e&&e.__esModule?e:{default:e}}(f),s=function(){function e(){a(this,e)}return u(e,[{key:"onCreate",value:function(){this.state={data:c.default}}}]),e}();t.default=s,n.exports=t.default});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/helper-forEachProperty",function(r,e,o,f,n){var a=Array.isArray;o.exports=function(r,e){if(r)if(a(r))for(var o=0;o<r.length;o++)e(o,r[o]);else if("undefined"!=typeof Map&&r instanceof Map)r.forEach(function(r,o){e(o,r)});else for(var f in r)r.hasOwnProperty(f)&&e(f,r[f])}});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/helpers",function(r,n,e,t,o){"use strict";function f(r){return"function"==typeof r}function i(r,n){var e;if(r)if("string"==typeof r)r&&n.push(r);else if("number"==typeof(e=r.length))for(var t=0;t<e;t++)i(r[t],n);else if("object"==typeof r)for(var o in r)if(r.hasOwnProperty(o)){var f=r[o];f&&n.push(o)}}function u(r){function n(r,e){n.renderer(r,e)}return n.renderer=function(e,t){var o=r.renderer||r._||r.render;if(!f(o))throw Error("Invalid renderer");n.renderer=o,o(e,t)},n}function c(r){var n=r.renderer||r._;return n||(f(r)?r:u(r))}var s=Array.isArray,a={s:function(r){return null==r?"":r.toString()},f:function(r,n){if(s(r))for(var e=0;e<r.length;e++)n(r[e]);else f(r)&&r(n)},t:function(r,n,e){return r&&(r=c(r)),function(n,e,t,o,f){e.c(t,o,f),r(n,e),e._Y_=null}},cl:function(){var r=[];return i(arguments,r),r.join(" ")}};e.exports=a});
$_mod_foe_tools.def("/marko$4.7.4/dist/runtime/vdom/helpers",function(t,n,r,e,o){"use strict";var u=t("/marko$4.7.4/dist/runtime/vdom/vdom"),i=u.ak_,s=u.aH_,c=t("/marko$4.7.4/dist/runtime/helpers"),m=t("/raptor-util$3.2.0/extend"),a=c.cl,d=m({e:function(t,n,r,e,o,u,s){return new i(t,n,r,e,o,u,s)},t:function(t){return new s(t)},const:function(t){var n=0;return function(){return t+n++}},ca:function(t){return t?"string"==typeof t?t:a(t):null}},c);r.exports=d});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/gb-investment/components/gb-list-select/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.7.4/dist/vdom'/*"marko/dist/vdom"*/).t(),
    components_helpers = require('/marko$4.7.4/dist/components/helpers-browser'/*"marko/dist/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/foe-tools$1.3.2/src/components/gb-investment/components/gb-list-select/index.marko", function() {
      return module.exports;
    }),
    marko_component = require('/foe-tools$1.3.2/src/components/gb-investment/components/gb-list-select/component'/*"./component"*/),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_forEachProp = require('/marko$4.7.4/dist/runtime/helper-forEachProperty'/*"marko/dist/runtime/helper-forEachProperty"*/),
    marko_helpers = require('/marko$4.7.4/dist/runtime/vdom/helpers'/*"marko/dist/runtime/vdom/helpers"*/),
    marko_forEach = marko_helpers.f,
    marko_str = marko_helpers.s,
    marko_attrs0 = {
        "for": "gb-list",
        "class": "label"
      },
    marko_attrs1 = {
        "class": "control"
      },
    marko_attrs2 = {
        "class": "select"
      },
    marko_attrs3 = {
        name: "gb-list",
        id: "gb-list",
        onchange: "location = this.value + '/';"
      };

function render(input, out, __component, component, state) {
  var data = input;

  let i18nPrefix = 'components.gb_investment.gb_list_select.';

  out.e("LABEL", marko_attrs0, "0", component, 1)
    .t(global.i18n(i18nPrefix + "label"));

  out.be("DIV", marko_attrs1, "1", component);

  out.be("DIV", marko_attrs2, "2", component);

  out.be("SELECT", marko_attrs3, "3", component);

  marko_forEachProp(state.data.GBs_BY_AGE, function(i, age) {
    out.be("OPTGROUP", {
        label: marko_str(global.i18n("foe_data.age." + age.key))
      }, "4", component);

    marko_forEach(age.gbs, function(gb) {
      out.e("OPTION", {
          selected: input.gb == gb.key,
          value: "/gb-investment/" + gb.key
        }, "5", component, 1)
        .t(global.i18n("foe_data.gb." + gb.key));
    });

    out.ee();
  });

  out.ee();

  out.ee();

  out.ee();
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});
$_mod_foe_tools.main("/foe-tools$1.3.2/src/components/secure-position","index.marko");
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/secure-position/component",function(t,s,e,i,a){"use strict";function o(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function r(){if(l.call(this)){var t=Math.ceil((this.state["level-cost"]-this.state["current-deposits"]-(this.state["other-participation"]-this.state["your-participation"]))/2)+this.state["other-participation"];t<=this.state["other-participation"]?this.state.fp=-1:this.state.fp=t}}function l(){return this.state.formValid=!0,this.getEl("level-cost").classList.remove("is-danger"),this.getEl("current-deposits").classList.remove("is-danger"),this.getEl("your-participation").classList.remove("is-danger"),this.getEl("other-participation").classList.remove("is-danger"),this.state["level-cost"]==this.state["current-deposits"]==this.state["your-participation"]==this.state["other-participation"]&&0==this.state["level-cost"]||(this.state["level-cost"]>0||(this.state.formValid=!1,this.getEl("level-cost").classList.add("is-danger")),this.state["current-deposits"]<this.state["level-cost"]||(this.state.formValid=!1,this.getEl("level-cost").classList.add("is-danger"),this.getEl("current-deposits").classList.add("is-danger")),this.state["your-participation"]<this.state["level-cost"]||(this.state.formValid=!1,this.getEl("your-participation").classList.add("is-danger"),this.getEl("level-cost").classList.add("is-danger")),this.state["other-participation"]<this.state["level-cost"]||(this.state.formValid=!1,this.getEl("other-participation").classList.add("is-danger"),this.getEl("level-cost").classList.add("is-danger")),this.state["your-participation"]+this.state["other-participation"]<=this.state["current-deposits"]||(this.state.formValid=!1,this.getEl("your-participation").classList.add("is-danger"),this.getEl("other-participation").classList.add("is-danger"),this.getEl("current-deposits").classList.add("is-danger")),this.state.formValid)}function n(t){return void 0!==t.levelCost&&!isNaN(t.levelCost)}function c(){var t=this.getEl("level-cost");return t.value.length>0&&!isNaN(t.value)?(t.classList.remove("is-danger"),this.state["level-cost"]=parseInt(t.value),!0):(t.classList.add("is-danger"),!1)}function u(){var t=this.getEl("current-deposits");return t.value.length>0&&!isNaN(t.value)?(t.classList.remove("is-danger"),this.state["current-deposits"]=parseInt(t.value),!0):(t.classList.add("is-danger"),!1)}function h(){var t=this.getEl("your-participation");return t.value.length>0&&!isNaN(t.value)?(t.classList.remove("is-danger"),this.state["your-participation"]=parseInt(t.value),!0):(t.classList.add("is-danger"),!1)}function d(){var t=this.getEl("other-participation");return t.value.length>0&&!isNaN(t.value)?(t.classList.remove("is-danger"),this.state["other-participation"]=parseInt(t.value),!0):(t.classList.add("is-danger"),!1)}Object.defineProperty(s,"__esModule",{value:!0});var p=function(){function t(t,s){for(var e=0;e<s.length;e++){var i=s[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(s,e,i){return e&&t(s.prototype,e),i&&t(s,i),s}}(),v=function(){function t(){o(this,t)}return p(t,[{key:"onCreate",value:function(t){this.state={fp:0,"your-participation":0,"other-participation":0,"level-cost":n(t)?t.levelCost:0,"current-deposits":0,formValid:!1,DOMReady:!1}}},{key:"onInput",value:function(t){this.state.DOMReady&&n(t)&&(this.state["level-cost"]=parseInt(t.levelCost),r.call(this))}},{key:"onMount",value:function(){var t=this;this.subscribeTo(this.getEl("level-cost")).on("keyup",function(){c.call(t)&&r.call(t)}),this.subscribeTo(this.getEl("current-deposits")).on("keyup",function(){u.call(t)&&r.call(t)}),this.subscribeTo(this.getEl("your-participation")).on("keyup",function(){h.call(t)&&r.call(t)}),this.subscribeTo(this.getEl("other-participation")).on("keyup",function(){d.call(t)&&r.call(t)}),this.subscribeTo(this.getEl("submit-secure-position")).on("click",function(){c.call(t)&&u.call(t)&&h.call(t)&&d.call(t)&&r.call(t)}),this.subscribeTo(window).on("DOMContentLoaded",function(){t.state.DOMReady=!0,r.call(t)})}}]),t}();s.default=v,e.exports=s.default});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/secure-position/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.7.4/dist/vdom'/*"marko/dist/vdom"*/).t(),
    components_helpers = require('/marko$4.7.4/dist/components/helpers-browser'/*"marko/dist/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/foe-tools$1.3.2/src/components/secure-position/index.marko", function() {
      return module.exports;
    }),
    marko_component = require('/foe-tools$1.3.2/src/components/secure-position/component'/*"./component"*/),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.7.4/dist/runtime/vdom/helpers'/*"marko/dist/runtime/vdom/helpers"*/),
    marko_str = marko_helpers.s,
    marko_attrs0 = {
        "class": "columns"
      },
    marko_attrs1 = {
        "class": "columns"
      },
    marko_attrs2 = {
        "class": "column"
      },
    marko_attrs3 = {
        "class": "field"
      },
    marko_attrs4 = {
        "class": "columns"
      },
    marko_attrs5 = {
        "class": "columns"
      },
    marko_attrs6 = {
        "class": "columns"
      },
    marko_attrs7 = {
        "class": "column is-half"
      },
    marko_attrs8 = {
        "class": "field"
      },
    marko_attrs9 = {
        "class": "column is-half"
      },
    marko_attrs10 = {
        "class": "column is-half"
      },
    marko_attrs11 = {
        "class": "field"
      },
    marko_attrs12 = {
        "for": "level-cost",
        "class": "label"
      },
    marko_attrs13 = {
        "class": "control"
      },
    marko_attrs14 = {
        "class": "field"
      },
    marko_attrs15 = {
        "for": "current-deposits",
        "class": "label"
      },
    marko_attrs16 = {
        "class": "control"
      },
    marko_attrs17 = {
        "class": "column is-half"
      },
    marko_attrs18 = {
        "class": "column is-half"
      },
    marko_attrs19 = {
        "class": "field"
      },
    marko_attrs20 = {
        "for": "your-participation",
        "class": "label"
      },
    marko_attrs21 = {
        "class": "control"
      },
    marko_attrs22 = {
        "class": "field"
      },
    marko_attrs23 = {
        "for": "other-participation",
        "class": "label"
      },
    marko_attrs24 = {
        "class": "control"
      },
    marko_attrs25 = {
        "class": "column"
      },
    marko_attrs26 = {
        "class": "field"
      },
    marko_attrs27 = {
        "class": "control level-item"
      },
    marko_attrs28 = {
        "class": "button is-link"
      };

function checkInputLevelCost(input) {
   return (input.levelCost !== undefined) && !isNaN(input.levelCost);
};

function getNumberOfRemainingPoints(state) {
   if (isNaN(state['level-cost']) || isNaN(state['current-deposits']) ||
      ((state['level-cost'] - state['current-deposits']) < 0 )) {
      return global.i18n('components.secure_position.block_place.unknown');
   }
   return state['level-cost'] - state['current-deposits'];
};

function render(input, out, __component, component, state) {
  var data = input;

  let i18nPrefix = 'components.secure_position.';

  out.e("DIV", marko_attrs0, "0", component, 1)
    .e("DIV", marko_attrs7, "1", component, 1)
      .e("DIV", marko_attrs8, "2", component, 1)
        .e("H4", null, "3", component, 1)
          .t(global.i18n(i18nPrefix + "block_place.title"));

  out.be("DIV", marko_attrs1, "4", component);

  out.be("DIV", marko_attrs2, "5", component);

  out.be("DIV", marko_attrs3, "6", component);

  out.e("P", null, "7", component, 1)
    .t(global.i18n(i18nPrefix + "block_place.description.p1"));

  out.be("P", null, "8", component);

  out.h(global.i18n(i18nPrefix + "block_place.description.p2_html"));

  out.ee();

  out.ee();

  out.ee();

  out.ee();

  out.e("DIV", marko_attrs4, "9", component, 2)
    .e("DIV", marko_attrs9, "10", component, 1)
      .e("DIV", marko_attrs11, "11", component, 2)
        .e("LABEL", marko_attrs12, "12", component, 1)
          .t(global.i18n(i18nPrefix + "block_place.level_cost"))
        .e("DIV", marko_attrs13, "13", component, 1)
          .e("INPUT", {
              type: "number",
              min: "0",
              value: marko_str(state["level-cost"]),
              name: "level-cost",
              id: "level-cost",
              autocomplete: "off",
              disabled: checkInputLevelCost(input),
              "class": "input"
            }, "level-cost", component, 0)
    .e("DIV", marko_attrs10, "14", component, 1)
      .e("DIV", marko_attrs14, "15", component, 2)
        .e("LABEL", marko_attrs15, "16", component, 1)
          .t(global.i18n(i18nPrefix + "block_place.current_deposits"))
        .e("DIV", marko_attrs16, "17", component, 1)
          .e("INPUT", {
              type: "number",
              min: "0",
              value: marko_str(state["current-deposits"]),
              name: "current-deposits",
              id: "current-deposits",
              autocomplete: "off",
              "class": "input"
            }, "current-deposits", component, 0);

  out.e("DIV", marko_attrs5, "18", component, 2)
    .e("DIV", marko_attrs17, "19", component, 1)
      .e("DIV", marko_attrs19, "20", component, 2)
        .e("LABEL", marko_attrs20, "21", component, 1)
          .t(global.i18n(i18nPrefix + "block_place.your_participation"))
        .e("DIV", marko_attrs21, "22", component, 1)
          .e("INPUT", {
              type: "number",
              min: "0",
              value: marko_str(state["your-participation"]),
              name: "your-participation",
              id: "your-participation",
              autocomplete: "off",
              "class": "input"
            }, "your-participation", component, 0)
    .e("DIV", marko_attrs18, "23", component, 1)
      .e("DIV", marko_attrs22, "24", component, 2)
        .e("LABEL", marko_attrs23, "25", component, 1)
          .t(global.i18n(i18nPrefix + "block_place.other_participation"))
        .e("DIV", marko_attrs24, "26", component, 1)
          .e("INPUT", {
              type: "number",
              min: "0",
              value: marko_str(state["other-participation"]),
              name: "other-participation",
              id: "other-participation",
              autocomplete: "off",
              "class": "input"
            }, "other-participation", component, 0);

  out.e("DIV", marko_attrs6, "27", component, 1)
    .e("DIV", marko_attrs25, "28", component, 1)
      .e("DIV", marko_attrs26, "29", component, 1)
        .e("DIV", marko_attrs27, "30", component, 1)
          .e("BUTTON", marko_attrs28, "submit-secure-position", component, 1)
            .t(global.i18n(i18nPrefix + "block_place.submit"));

  out.e("P", null, "31", component, 1)
    .t(global.i18n(i18nPrefix + "block_place.fp_to_complete_level", {
        count: getNumberOfRemainingPoints(state)
      }));

  out.be("P", null, "32", component);

  if (!state.formValid) {
    out.t(global.i18n(i18nPrefix + "block_place.result.error"));
  } else if (state.fp > 0) {
    if (state.fp <= state["your-participation"]) {
      out.t(global.i18n(i18nPrefix + "block_place.result.already_blocked"));
    } else {
      out.t(global.i18n(i18nPrefix + "block_place.result.default", {
          count: state.fp
        }));

      if (((state.fp - state["your-participation"]) > 0) && (state["your-participation"] > 0)) {
        out.t(global.i18n(i18nPrefix + "block_place.result.fp_to_secure_html", {
            count: state.fp - state["your-participation"]
          }));
      }
    }
  } else {
    out.t(global.i18n(i18nPrefix + "block_place.result.cant_block"));
  }

  out.ee();
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/gb-investment/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.7.4/dist/vdom'/*"marko/dist/vdom"*/).t(),
    components_helpers = require('/marko$4.7.4/dist/components/helpers-browser'/*"marko/dist/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/foe-tools$1.3.2/src/components/gb-investment/index.marko", function() {
      return module.exports;
    }),
    marko_component = require('/foe-tools$1.3.2/src/components/gb-investment/component'/*"./component"*/),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    gb_list_select_template = require('/foe-tools$1.3.2/src/components/gb-investment/components/gb-list-select/index.marko'/*"./components/gb-list-select"*/),
    marko_helpers = require('/marko$4.7.4/dist/runtime/vdom/helpers'/*"marko/dist/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    gb_list_select_tag = marko_loadTag(gb_list_select_template),
    marko_str = marko_helpers.s,
    marko_forEachProp = require('/marko$4.7.4/dist/runtime/helper-forEachProperty'/*"marko/dist/runtime/helper-forEachProperty"*/),
    secure_position_template = require('/foe-tools$1.3.2/src/components/secure-position/index.marko'/*"../secure-position"*/),
    secure_position_tag = marko_loadTag(secure_position_template),
    marko_attrs0 = {
        "class": "columns"
      },
    marko_attrs1 = {
        "class": "columns"
      },
    marko_attrs2 = {
        "class": "column is-half"
      },
    marko_attrs3 = {
        "class": "field"
      },
    marko_attrs4 = {
        "class": "columns"
      },
    marko_attrs5 = {
        "class": "columns"
      },
    marko_attrs6 = {
        "class": "column"
      },
    marko_attrs7 = {
        "class": "field"
      },
    marko_attrs8 = {
        "class": "columns"
      },
    marko_attrs9 = {
        "class": "columns"
      },
    marko_attrs10 = {
        "class": "table is-bordered is-striped is-narrow is-fullwidth"
      },
    marko_attrs11 = {
        "class": "columns"
      },
    marko_attrs12 = {
        "class": "columns"
      },
    marko_attrs13 = {
        "class": "column is-half"
      },
    marko_attrs14 = {
        "class": "column is-half"
      },
    marko_attrs15 = {
        "class": "field"
      },
    marko_attrs16 = {
        "class": "field"
      },
    marko_attrs17 = {
        "class": "column is-half"
      },
    marko_attrs18 = {
        "class": "field"
      },
    marko_attrs19 = {
        "class": "column is-half"
      },
    marko_attrs20 = {
        "class": "column is-half"
      },
    marko_attrs21 = {
        "class": "field"
      },
    marko_attrs22 = {
        "for": "level",
        "class": "label"
      },
    marko_attrs23 = {
        "class": "control"
      },
    marko_attrs24 = {
        "class": "field"
      },
    marko_attrs25 = {
        "for": "investor-percentage",
        "class": "label"
      },
    marko_attrs26 = {
        "class": "control"
      },
    marko_attrs27 = {
        "class": "column"
      },
    marko_attrs28 = {
        "class": "field"
      },
    marko_attrs29 = {
        "class": "control level-item"
      },
    marko_attrs30 = {
        "class": "button is-link"
      },
    marko_attrs31 = {
        colspan: "5"
      },
    marko_attrs32 = {
        "class": "level-item"
      },
    marko_attrs33 = {
        "class": "level-right"
      },
    marko_attrs34 = {
        "class": "level-right"
      },
    marko_attrs35 = {
        "class": "level-right"
      },
    marko_attrs36 = {
        "class": "level-right"
      },
    marko_attrs37 = {
        colspan: "4"
      },
    marko_attrs38 = {
        "class": "level-right"
      },
    marko_attrs39 = {
        colspan: "4"
      },
    marko_attrs40 = {
        "class": "level-right"
      },
    marko_attrs41 = {
        "class": "column"
      },
    marko_attrs42 = {
        "class": "field"
      },
    marko_attrs43 = {
        "class": "control level-item"
      },
    marko_attrs44 = {
        "class": "button is-link"
      },
    marko_attrs45 = {
        "class": "column is-half"
      },
    marko_attrs46 = {
        "class": "field"
      };

function getInvestmentByPlace(investments) {
   let result = {};
   for (var i = 0; i < investments.length; i++) {
      result['p' + (i + 1)] = investments[i].participation;
   }
   return result;
};

function render(input, out, __component, component, state) {
  var data = input;

  let i18nPrefix = 'components.gb_investment.';

  out.e("DIV", marko_attrs0, "0", component, 2)
    .e("DIV", marko_attrs13, "1", component, 1)
      .e("DIV", marko_attrs15, "2", component, 1)
        .e("H3", null, "3", component, 1)
          .t(global.i18n("foe_data.gb." + input.gb))
    .e("DIV", marko_attrs14, "4", component, 1)
      .e("DIV", marko_attrs16, "5", component, 1)
        .e("A", {
            href: (((((((((((((("/gb-investment/" + state.data.gbs[input.gb].key) + "/?level=") + state.level) + "&pg=") + state["percentage-value-global"]) + "&p1=") + state["percentage-value"][0]) + "&p2=") + state["percentage-value"][1]) + "&p3=") + state["percentage-value"][2]) + "&p4=") + state["percentage-value"][3]) + "&p5=") + state["percentage-value"][4],
            "class": "level-right",
            id: "permalink"
          }, "6", component, 1)
          .t(global.i18n(i18nPrefix + "gb_investment.permalink"));

  out.be("DIV", marko_attrs1, "7", component);

  out.be("DIV", marko_attrs2, "8", component);

  out.be("DIV", marko_attrs3, "9", component);

  gb_list_select_tag({
      gb: input.gb
    }, out, __component, "10");

  out.ee();

  out.ee();

  out.ee();

  out.e("DIV", marko_attrs4, "11", component, 1)
    .e("DIV", marko_attrs17, "12", component, 1)
      .e("DIV", marko_attrs18, "13", component, 1)
        .e("H4", null, "14", component, 1)
          .t(global.i18n(i18nPrefix + "gb_investment.title"));

  out.be("DIV", marko_attrs5, "15", component);

  out.be("DIV", marko_attrs6, "16", component);

  out.be("DIV", marko_attrs7, "17", component);

  out.e("P", null, "18", component, 1)
    .t(global.i18n(i18nPrefix + "gb_investment.description.p1"));

  out.be("P", null, "19", component);

  out.h(global.i18n(i18nPrefix + "gb_investment.description.p2_html"));

  out.ee();

  out.ee();

  out.ee();

  out.ee();

  out.e("DIV", marko_attrs8, "20", component, 2)
    .e("DIV", marko_attrs19, "21", component, 1)
      .e("DIV", marko_attrs21, "22", component, 2)
        .e("LABEL", marko_attrs22, "23", component, 1)
          .t(global.i18n(i18nPrefix + "gb_investment.form.level", {
              max: state["max-level"]
            }))
        .e("DIV", marko_attrs23, "24", component, 1)
          .e("INPUT", {
              type: "number",
              min: "1",
              max: marko_str(state["max-level"]),
              value: marko_str(state.level),
              name: "level",
              id: "level",
              autocomplete: "off",
              autofocus: true,
              "class": "input"
            }, "level", component, 0)
    .e("DIV", marko_attrs20, "25", component, 1)
      .e("DIV", marko_attrs24, "26", component, 2)
        .e("LABEL", marko_attrs25, "27", component, 1)
          .t(global.i18n(i18nPrefix + "gb_investment.form.investor_percentage"))
        .e("DIV", marko_attrs26, "28", component, 1)
          .e("INPUT", {
              type: "number",
              min: "0",
              value: marko_str(state["percentage-value-global"]),
              name: "investor-percentage",
              id: "investor-percentage",
              autocomplete: "off",
              "class": "input"
            }, "percentage-value-global", component, 0);

  out.e("DIV", marko_attrs9, "29", component, 1)
    .e("DIV", marko_attrs27, "30", component, 1)
      .e("DIV", marko_attrs28, "31", component, 1)
        .e("DIV", marko_attrs29, "32", component, 1)
          .e("BUTTON", marko_attrs30, "submit-global", component, 1)
            .t(global.i18n(i18nPrefix + "gb_investment.form.submit_global"));

  out.be("TABLE", marko_attrs10, "33", component);

  out.e("THEAD", null, "34", component, 2)
    .e("TR", null, "35", component, 1)
      .e("TH", marko_attrs31, "36", component, 1)
        .e("P", marko_attrs32, "37", component, 1)
          .t(global.i18n(i18nPrefix + "gb_investment.table.title", {
              gb_key: "foe_data.gb." + input.gb,
              level: state.gb.level
            }))
    .e("TR", null, "38", component, 5)
      .e("TH", null, "39", component, 1)
        .t(global.i18n(i18nPrefix + "gb_investment.table.thead.th1"))
      .e("TH", null, "40", component, 1)
        .t(global.i18n(i18nPrefix + "gb_investment.table.thead.th2"))
      .e("TH", null, "41", component, 1)
        .t(global.i18n(i18nPrefix + "gb_investment.table.thead.th3"))
      .e("TH", null, "42", component, 1)
        .t(global.i18n(i18nPrefix + "gb_investment.table.thead.th4"))
      .e("TH", null, "43", component, 1)
        .t(global.i18n(i18nPrefix + "gb_investment.table.thead.th5"));

  out.be("TBODY", null, "44", component);

  marko_forEachProp(state.gb.investment, function(i, place) {
    out.e("TR", null, "45", component, 5)
      .e("TD", null, "46", component, 1)
        .e("P", marko_attrs33, "47", component, 1)
          .t(i + 1)
      .e("TD", null, "48", component, 1)
        .e("P", marko_attrs34, "49", component, 1)
          .t(place.reward)
      .e("TD", null, "50", component, 1)
        .e("P", marko_attrs35, "51", component, 1)
          .t(place.preparation)
      .e("TD", null, "52", component, 1)
        .e("P", marko_attrs36, "53", component, 1)
          .t(place.participation)
      .e("TD", null, "54", component, 1)
        .e("INPUT", {
            type: "number",
            min: "0",
            value: marko_str(state["percentage-value"][i]),
            name: "investor-percentage-" + i,
            id: "investor-percentage-" + i,
            autocomplete: "off",
            "class": "input"
          }, "percentage-value-" + i, component, 0);
  });

  out.ee();

  out.e("TFOOT", null, "55", component, 2)
    .e("TR", null, "56", component, 2)
      .e("TH", marko_attrs37, "57", component, 1)
        .t(global.i18n(i18nPrefix + "gb_investment.table.tfoot.total_preparation"))
      .e("TD", null, "58", component, 1)
        .e("P", marko_attrs38, "59", component, 1)
          .t(state.gb.totalPreparations)
    .e("TR", null, "60", component, 2)
      .e("TH", marko_attrs39, "61", component, 1)
        .t(global.i18n(i18nPrefix + "gb_investment.table.tfoot.level_cost"))
      .e("TD", null, "62", component, 1)
        .e("P", marko_attrs40, "63", component, 1)
          .t(state.gb.cost);

  out.ee();

  out.e("DIV", marko_attrs11, "64", component, 1)
    .e("DIV", marko_attrs41, "65", component, 1)
      .e("DIV", marko_attrs42, "66", component, 1)
        .e("DIV", marko_attrs43, "67", component, 1)
          .e("BUTTON", marko_attrs44, "submit-custom", component, 1)
            .t(global.i18n(i18nPrefix + "gb_investment.form.submit_custom"));

  out.e("DIV", marko_attrs12, "68", component, 1)
    .e("DIV", marko_attrs45, "69", component, 1)
      .e("DIV", marko_attrs46, "70", component, 1)
        .e("H4", null, "71", component, 1)
          .t(global.i18n(i18nPrefix + "promotion.title"));

  out.be("UL", null, "72", component);

  out.be("LI", null, "73", component);

  out.t(" ");

  out.t(global.i18n("foe_data.gb." + input.gb));

  marko_forEachProp(state.gb.investment, function(i, place) {
    if (place.participation > 0) {
      out.t(" ");

      out.t(global.i18n((i18nPrefix + "promotion.promo.") + i, {
          investment: place.participation
        }));
    }
  });

  out.ee();

  out.be("LI", null, "74", component);

  marko_forEachProp(state.gb.investment, function(i, place) {
    if (place.participation > 0) {
      out.t(" ");

      out.t(global.i18n((i18nPrefix + "promotion.promo.") + i, {
          investment: place.participation
        }));
    }
  });

  out.t(" ");

  out.t(global.i18n("foe_data.gb." + input.gb));

  out.ee();

  out.ee();

  secure_position_tag({
      levelCost: state.gb.cost
    }, out, __component, "75");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});
$_mod_foe_tools.main("/foe-tools$1.3.2/src/components/site-layout","index.marko");
$_mod_foe_tools.def("/foe-tools$1.3.2/package",{name:"foe-tools",version:"1.3.2",description:"Set of tools for Forge Of Empire",repository:{type:"git",url:"https://github.com/FOE-Tools/FOE-Tools.github.io"},license:"MIT",devDependencies:{"babel-eslint":"^8.0.3","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-check-es2015-constants":"^6.22.0","babel-plugin-dev-expression":"^0.2.1","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-es2015-arrow-functions":"^6.22.0","babel-plugin-transform-es2015-block-scoped-functions":"^6.22.0","babel-plugin-transform-es2015-block-scoping":"^6.26.0","babel-plugin-transform-es2015-classes":"^6.24.1","babel-plugin-transform-es2015-computed-properties":"^6.24.1","babel-plugin-transform-es2015-destructuring":"^6.23.0","babel-plugin-transform-es2015-duplicate-keys":"^6.24.1","babel-plugin-transform-es2015-for-of":"^6.23.0","babel-plugin-transform-es2015-function-name":"^6.24.1","babel-plugin-transform-es2015-literals":"^6.22.0","babel-plugin-transform-es2015-object-super":"^6.24.1","babel-plugin-transform-es2015-parameters":"^6.24.1","babel-plugin-transform-es2015-shorthand-properties":"^6.24.1","babel-plugin-transform-es2015-spread":"^6.22.0","babel-plugin-transform-es2015-sticky-regex":"^6.24.1","babel-plugin-transform-es2015-template-literals":"^6.22.0","babel-plugin-transform-es2015-typeof-symbol":"^6.23.0","babel-plugin-transform-es2015-unicode-regex":"^6.24.1","babel-plugin-transform-runtime":"^6.23.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.6.1","babel-preset-stage-0":"^6.24.1","babel-register":"^6.26.0","babel-runtime":"^6.26.0",eslint:"4.9.0","eslint-config-airbnb-base":"^12.1.0","eslint-config-prettier":"^2.3.0","eslint-plugin-import":"^2.8.0","eslint-plugin-prettier":"^2.1.2","lasso-babel":"^1.0.3","lasso-cson":"^2.0.0","lasso-marko":"^2.4.0","lasso-sass":"^3.0.0","node-sass":"^4.7.2",prettier:"^1.5.2",prompt:"^1.0.0"},dependencies:{i18next:"^10.2.1","js-cookie":"^2.2.0","lasso-babel-transform":"^1.0.1","lasso-require":"^3.4.9",marko:"^4.7.4","marko-starter":"^1.0.0"},scripts:{start:"NODE_ENV=production node --trace-warnings -r babel-register ./node_modules/marko-starter/bin/marko-starter server",build:"NODE_ENV=production node --trace-warnings -r babel-register ./node_modules/marko-starter/bin/marko-starter build","serve-static":"NODE_ENV=production marko-starter serve-static",lint:"eslint src/",test:"npm run lint",prettier:"prettier src/**/*.{js,css,less} *.js --write",publish:"NODE_ENV=production node --trace-warnings -r babel-register ./publish"},"static-repo":"git@github.com:FOE-Tools/FOE-Tools.github.io.git#master",baseurl:"/"});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/site-layout/component",function(e,t,n,o,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=e("/foe-tools$1.3.2/package"),u=function(e){return e&&e.__esModule?e:{default:e}}(s),c=function(){function e(){r(this,e)}return a(e,[{key:"onCreate",value:function(){this.state={site_version:u.default.version,navbar_link:[{key:"home",link:"/"},{key:"gb_investment",link:"/gb-investment"},{key:"secure_position",link:"/secure-position"}]}}},{key:"onMount",value:function(){this.subscribeTo(window).on("DOMContentLoaded",function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")})})})}}]),e}();t.default=c,n.exports=t.default});
$_mod_foe_tools.installed("foe-tools$1.3.2","i18next","10.2.1");
$_mod_foe_tools.main("/i18next$10.2.1","");
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/logger",function(r,t,o,n,e){"use strict";function i(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function u(r){if(Array.isArray(r)){for(var t=0,o=Array(r.length);t<r.length;t++)o[t]=r[t];return o}return Array.from(r)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n])}return r},f={type:"logger",log:function(r){this.output("log",r)},warn:function(r){this.output("warn",r)},error:function(r){this.output("error",r)},output:function(r,t){var o;console&&console[r]&&(o=console)[r].apply(o,u(t))}},s=function(){function r(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,r),this.init(t,o)}return r.prototype.init=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=r||f,this.options=t,this.debug=t.debug},r.prototype.setDebug=function(r){this.debug=r},r.prototype.log=function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return this.forward(t,"log","",!0)},r.prototype.warn=function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return this.forward(t,"warn","",!0)},r.prototype.error=function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return this.forward(t,"error","")},r.prototype.deprecate=function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)},r.prototype.forward=function(r,t,o,n){return n&&!this.debug?null:("string"==typeof r[0]&&(r[0]=""+o+this.prefix+" "+r[0]),this.logger[t](r))},r.prototype.create=function(t){return new r(this.logger,a({prefix:this.prefix+":"+t+":"},this.options))},r}();t.default=new s});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/EventEmitter",function(e,o,r,s,t){"use strict";function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function e(){n(this,e),this.observers={}}return e.prototype.on=function(e,o){var r=this;e.split(" ").forEach(function(e){r.observers[e]=r.observers[e]||[],r.observers[e].push(o)})},e.prototype.off=function(e,o){var r=this;this.observers[e]&&this.observers[e].forEach(function(){if(o){var s=r.observers[e].indexOf(o);s>-1&&r.observers[e].splice(s,1)}else delete r.observers[e]})},e.prototype.emit=function(e){for(var o=arguments.length,r=Array(o>1?o-1:0),s=1;s<o;s++)r[s-1]=arguments[s];if(this.observers[e]){[].concat(this.observers[e]).forEach(function(e){e.apply(void 0,r)})}if(this.observers["*"]){[].concat(this.observers["*"]).forEach(function(o){var s;o.apply(o,(s=[e]).concat.apply(s,r))})}},e}();o.default=i});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/utils",function(t,n,e,r,o){"use strict";function i(t){return null==t?"":""+t}function c(t,n,e){t.forEach(function(t){n[t]&&(e[t]=n[t])})}function f(t,n,e){function r(t){return t&&t.indexOf("###")>-1?t.replace(/###/g,"."):t}function o(){return!t||"string"==typeof t}for(var i="string"!=typeof n?[].concat(n):n.split(".");i.length>1;){if(o())return{};var c=r(i.shift());!t[c]&&e&&(t[c]=new e),t=t[c]}return o()?{}:{obj:t,k:r(i.shift())}}function u(t,n,e){var r=f(t,n,Object);r.obj[r.k]=e}function a(t,n,e,r){var o=f(t,n,Object),i=o.obj,c=o.k;i[c]=i[c]||[],r&&(i[c]=i[c].concat(e)),r||i[c].push(e)}function s(t,n){var e=f(t,n),r=e.obj,o=e.k;if(r)return r[o]}function p(t,n,e){for(var r in n)r in t?"string"==typeof t[r]||t[r]instanceof String||"string"==typeof n[r]||n[r]instanceof String?e&&(t[r]=n[r]):p(t[r],n[r],e):t[r]=n[r];return t}function g(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function l(t){return"string"==typeof t?t.replace(/[&<>"'\/]/g,function(t){return h[t]}):t}Object.defineProperty(n,"__esModule",{value:!0}),n.makeString=i,n.copy=c,n.setPath=u,n.pushPath=a,n.getPath=s,n.deepExtend=p,n.regexEscape=g,n.escape=l;var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"}});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/ResourceStore",function(t,e,o,n,r){"use strict";function i(t,e){for(var o=Object.getOwnPropertyNames(e),n=0;n<o.length;n++){var r=o[n],i=Object.getOwnPropertyDescriptor(e,r);i&&i.configurable&&void 0===t[r]&&Object.defineProperty(t,r,i)}return t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):i(t,e))}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},p=t("/i18next$10.2.1/dist/commonjs/EventEmitter"),d=function(t){return t&&t.__esModule?t:{default:t}}(p),f=t("/i18next$10.2.1/dist/commonjs/utils"),l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(f),h=function(t){function e(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};s(this,e);var r=a(this,t.call(this));return r.data=o||{},r.options=n,r}return c(e,t),e.prototype.addNamespaces=function(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)},e.prototype.removeNamespaces=function(t){var e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)},e.prototype.getResource=function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n.keySeparator||this.options.keySeparator;void 0===r&&(r=".");var i=[t,e];return o&&"string"!=typeof o&&(i=i.concat(o)),o&&"string"==typeof o&&(i=i.concat(r?o.split(r):o)),t.indexOf(".")>-1&&(i=t.split(".")),l.getPath(this.data,i)},e.prototype.addResource=function(t,e,o,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},i=this.options.keySeparator;void 0===i&&(i=".");var s=[t,e];o&&(s=s.concat(i?o.split(i):o)),t.indexOf(".")>-1&&(s=t.split("."),n=e,e=s[1]),this.addNamespaces(e),l.setPath(this.data,s,n),r.silent||this.emit("added",t,e,o,n)},e.prototype.addResources=function(t,e,o){for(var n in o)"string"==typeof o[n]&&this.addResource(t,e,n,o[n],{silent:!0});this.emit("added",t,e,o)},e.prototype.addResourceBundle=function(t,e,o,n,r){var i=[t,e];t.indexOf(".")>-1&&(i=t.split("."),n=o,o=e,e=i[1]),this.addNamespaces(e);var s=l.getPath(this.data,i)||{};n?l.deepExtend(s,o,r):s=u({},s,o),l.setPath(this.data,i,s),this.emit("added",t,e,o)},e.prototype.removeResourceBundle=function(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)},e.prototype.hasResourceBundle=function(t,e){return void 0!==this.getResource(t,e)},e.prototype.getResourceBundle=function(t,e){return e||(e=this.options.defaultNS),"v1"===this.options.compatibilityAPI?u({},this.getResource(t,e)):this.getResource(t,e)},e.prototype.toJSON=function(){return this.data},e}(d.default);e.default=h});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/postProcessor",function(o,s,e,r,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={processors:{},addPostProcessor:function(o){this.processors[o.name]=o},handle:function(o,s,e,r,t){var c=this;return o.forEach(function(o){c.processors[o]&&(s=c.processors[o].process(s,e,r,t))}),s}}});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/Translator",function(t,e,o,n,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){for(var o=Object.getOwnPropertyNames(e),n=0;n<o.length;n++){var r=o[n],i=Object.getOwnPropertyDescriptor(e,r);i&&i.configurable&&void 0===t[r]&&Object.defineProperty(t,r,i)}return t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):s(t,e))}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=t("/i18next$10.2.1/dist/commonjs/logger"),h=i(f),d=t("/i18next$10.2.1/dist/commonjs/EventEmitter"),g=i(d),y=t("/i18next$10.2.1/dist/commonjs/postProcessor"),v=i(y),b=t("/i18next$10.2.1/dist/commonjs/utils"),m=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(b),j=function(t){function e(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e);var r=l(this,t.call(this));return m.copy(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector"],o,r),r.options=n,r.logger=h.default.create("translator"),r}return p(e,t),e.prototype.changeLanguage=function(t){t&&(this.language=t)},e.prototype.exists=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},o=this.resolve(t,e);return o&&void 0!==o.res},e.prototype.extractFromKey=function(t,e){var o=e.nsSeparator||this.options.nsSeparator;void 0===o&&(o=":");var n=e.keySeparator||this.options.keySeparator||".",r=e.ns||this.options.defaultNS;if(o&&t.indexOf(o)>-1){var i=t.split(o);(o!==n||o===n&&this.options.ns.indexOf(i[0])>-1)&&(r=i.shift()),t=i.join(n)}return"string"==typeof r&&(r=[r]),{key:t,namespaces:r}},e.prototype.translate=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!==(void 0===e?"undefined":c(e))&&(e=this.options.overloadTranslationOptionHandler(arguments)),void 0===t||null===t||""===t)return"";"number"==typeof t&&(t=String(t)),"string"==typeof t&&(t=[t]);var o=e.keySeparator||this.options.keySeparator||".",n=this.extractFromKey(t[t.length-1],e),r=n.key,i=n.namespaces,s=i[i.length-1],a=e.lng||this.language,l=e.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(a&&"cimode"===a.toLowerCase()){if(l){return s+(e.nsSeparator||this.options.nsSeparator)+r}return r}var p=this.resolve(t,e),f=p&&p.res,h=p&&p.usedKey||r,d=Object.prototype.toString.apply(f),g=["[object Number]","[object Function]","[object RegExp]"],y=void 0!==e.joinArrays?e.joinArrays:this.options.joinArrays,v="string"!=typeof f&&"boolean"!=typeof f&&"number"!=typeof f;if(f&&v&&g.indexOf(d)<0&&(!y||"[object Array]"!==d)){if(!e.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,f,e):"key '"+r+" ("+this.language+")' returned an object instead of string.";if(e.keySeparator||this.options.keySeparator){var b="[object Array]"===d?[]:{};for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&(b[m]=this.translate(""+h+o+m,u({},e,{joinArrays:!1,ns:i})));f=b}}else if(y&&"[object Array]"===d)(f=f.join(y))&&(f=this.extendTranslation(f,t,e));else{var j=!1,O=!1;this.isValidLookup(f)||void 0===e.defaultValue||(j=!0,f=e.defaultValue),this.isValidLookup(f)||(O=!0,f=r);var k=e.defaultValue&&e.defaultValue!==f&&this.options.updateMissing;if(O||j||k){this.logger.log(k?"updateKey":"missingKey",a,s,r,k?e.defaultValue:f);var S=[],x=this.languageUtils.getFallbackCodes(this.options.fallbackLng,e.lng||this.language);if("fallback"===this.options.saveMissingTo&&x&&x[0])for(var V=0;V<x.length;V++)S.push(x[V]);else"all"===this.options.saveMissingTo?S=this.languageUtils.toResolveHierarchy(e.lng||this.language):S.push(e.lng||this.language);this.options.saveMissing&&(this.options.missingKeyHandler?this.options.missingKeyHandler(S,s,r,k?e.defaultValue:f,k):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(S,s,r,k?e.defaultValue:f,k)),this.emit("missingKey",S,s,r,f)}f=this.extendTranslation(f,t,e),O&&f===r&&this.options.appendNamespaceToMissingKey&&(f=s+":"+r),O&&this.options.parseMissingKeyHandler&&(f=this.options.parseMissingKeyHandler(f))}return f},e.prototype.extendTranslation=function(t,e,o){var n=this;o.interpolation&&this.interpolator.init(u({},o,{interpolation:u({},this.options.interpolation,o.interpolation)}));var r=o.replace&&"string"!=typeof o.replace?o.replace:o;this.options.interpolation.defaultVariables&&(r=u({},this.options.interpolation.defaultVariables,r)),t=this.interpolator.interpolate(t,r,o.lng||this.language),!1!==o.nest&&(t=this.interpolator.nest(t,function(){return n.translate.apply(n,arguments)},o)),o.interpolation&&this.interpolator.reset();var i=o.postProcess||this.options.postProcess,s="string"==typeof i?[i]:i;return void 0!==t&&s&&s.length&&!1!==o.applyPostProcessor&&(t=v.default.handle(s,t,e,o,this)),t},e.prototype.resolve=function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0,r=void 0;return"string"==typeof t&&(t=[t]),t.forEach(function(t){if(!e.isValidLookup(n)){var i=e.extractFromKey(t,o),s=i.key;r=s;var a=i.namespaces;e.options.fallbackNS&&(a=a.concat(e.options.fallbackNS));var l=void 0!==o.count&&"string"!=typeof o.count,p=void 0!==o.context&&"string"==typeof o.context&&""!==o.context,u=o.lngs?o.lngs:e.languageUtils.toResolveHierarchy(o.lng||e.language);a.forEach(function(t){e.isValidLookup(n)||u.forEach(function(r){if(!e.isValidLookup(n)){var i=s,a=[i],u=void 0;l&&(u=e.pluralResolver.getSuffix(r,o.count)),l&&p&&a.push(i+u),p&&a.push(i+=""+e.options.contextSeparator+o.context),l&&a.push(i+=u);for(var c=void 0;c=a.pop();)e.isValidLookup(n)||(n=e.getResource(r,t,c,o))}})})}}),{res:n,usedKey:r}},e.prototype.isValidLookup=function(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)},e.prototype.getResource=function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.resourceStore.getResource(t,e,o,n)},e}(g.default);e.default=j});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/LanguageUtils",function(t,e,o,n,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){return t.charAt(0).toUpperCase()+t.slice(1)}Object.defineProperty(e,"__esModule",{value:!0});var s=t("/i18next$10.2.1/dist/commonjs/logger"),l=function(t){return t&&t.__esModule?t:{default:t}}(s),g=function(){function t(e){r(this,t),this.options=e,this.whitelist=this.options.whitelist||!1,this.logger=l.default.create("languageUtils")}return t.prototype.getScriptPartFromCode=function(t){if(!t||t.indexOf("-")<0)return null;var e=t.split("-");return 2===e.length?null:(e.pop(),this.formatLanguageCode(e.join("-")))},t.prototype.getLanguagePartFromCode=function(t){if(!t||t.indexOf("-")<0)return t;var e=t.split("-");return this.formatLanguageCode(e[0])},t.prototype.formatLanguageCode=function(t){if("string"==typeof t&&t.indexOf("-")>-1){var e=["hans","hant","latn","cyrl","cans","mong","arab"],o=t.split("-");return this.options.lowerCaseLng?o=o.map(function(t){return t.toLowerCase()}):2===o.length?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),e.indexOf(o[1].toLowerCase())>-1&&(o[1]=a(o[1].toLowerCase()))):3===o.length&&(o[0]=o[0].toLowerCase(),2===o[1].length&&(o[1]=o[1].toUpperCase()),"sgn"!==o[0]&&2===o[2].length&&(o[2]=o[2].toUpperCase()),e.indexOf(o[1].toLowerCase())>-1&&(o[1]=a(o[1].toLowerCase())),e.indexOf(o[2].toLowerCase())>-1&&(o[2]=a(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t},t.prototype.isWhitelisted=function(t){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(t=this.getLanguagePartFromCode(t)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(t)>-1},t.prototype.getFallbackCodes=function(t,e){if(!t)return[];if("string"==typeof t&&(t=[t]),"[object Array]"===Object.prototype.toString.apply(t))return t;if(!e)return t.default||[];var o=t[e];return o||(o=t[this.getScriptPartFromCode(e)]),o||(o=t[this.formatLanguageCode(e)]),o||(o=t.default),o||[]},t.prototype.toResolveHierarchy=function(t,e){var o=this,n=this.getFallbackCodes(e||this.options.fallbackLng||[],t),i=[],r=function(t){t&&(o.isWhitelisted(t)?i.push(t):o.logger.warn("rejecting non-whitelisted language code: "+t))};return"string"==typeof t&&t.indexOf("-")>-1?("languageOnly"!==this.options.load&&r(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&r(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&r(this.getLanguagePartFromCode(t))):"string"==typeof t&&r(this.formatLanguageCode(t)),n.forEach(function(t){i.indexOf(t)<0&&r(o.formatLanguageCode(t))}),i},t}();e.default=g});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/PluralResolver",function(n,r,t,e,u){"use strict";function o(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function s(){var n={};return f.forEach(function(r){r.lngs.forEach(function(t){n[t]={numbers:r.nr,plurals:c[r.fc]}})}),n}Object.defineProperty(r,"__esModule",{value:!0});var i=n("/i18next$10.2.1/dist/commonjs/logger"),l=function(n){return n&&n.__esModule?n:{default:n}}(i),f=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","he","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21}],c={1:function(n){return Number(n>1)},2:function(n){return Number(1!=n)},3:function(n){return 0},4:function(n){return Number(n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2)},5:function(n){return Number(0===n?0:1==n?1:2==n?2:n%100>=3&&n%100<=10?3:n%100>=11?4:5)},6:function(n){return Number(1==n?0:n>=2&&n<=4?1:2)},7:function(n){return Number(1==n?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2)},8:function(n){return Number(1==n?0:2==n?1:8!=n&&11!=n?2:3)},9:function(n){return Number(n>=2)},10:function(n){return Number(1==n?0:2==n?1:n<7?2:n<11?3:4)},11:function(n){return Number(1==n||11==n?0:2==n||12==n?1:n>2&&n<20?2:3)},12:function(n){return Number(n%10!=1||n%100==11)},13:function(n){return Number(0!==n)},14:function(n){return Number(1==n?0:2==n?1:3==n?2:3)},15:function(n){return Number(n%10==1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2)},16:function(n){return Number(n%10==1&&n%100!=11?0:0!==n?1:2)},17:function(n){return Number(1==n||n%10==1?0:1)},18:function(n){return Number(0==n?0:1==n?1:2)},19:function(n){return Number(1==n?0:0===n||n%100>1&&n%100<11?1:n%100>10&&n%100<20?2:3)},20:function(n){return Number(1==n?0:0===n||n%100>0&&n%100<20?1:2)},21:function(n){return Number(n%100==1?1:n%100==2?2:n%100==3||n%100==4?3:0)}},a=function(){function n(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,n),this.languageUtils=r,this.options=t,this.logger=l.default.create("pluralResolver"),this.rules=s()}return n.prototype.addRule=function(n,r){this.rules[n]=r},n.prototype.getRule=function(n){return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]},n.prototype.needsPlural=function(n){var r=this.getRule(n);return r&&r.numbers.length>1},n.prototype.getSuffix=function(n,r){var t=this,e=this.getRule(n);if(e){var u=e.noAbs?e.plurals(r):e.plurals(Math.abs(r)),o=e.numbers[u];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===o?o="plural":1===o&&(o=""));var s=function(){return t.options.prepend&&o.toString()?t.options.prepend+o.toString():o.toString()};return"v1"===this.options.compatibilityJSON?1===o?"":"number"==typeof o?"_plural_"+o.toString():s():"v2"===this.options.compatibilityJSON||2===e.numbers.length&&1===e.numbers[0]?s():2===e.numbers.length&&1===e.numbers[0]?s():this.options.prepend&&u.toString()?this.options.prepend+u.toString():u.toString()}return this.logger.warn("no plural rule found for: "+n),""},n}();r.default=a});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/Interpolator",function(e,t,i,r,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=e("/i18next$10.2.1/dist/commonjs/utils"),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(o),f=e("/i18next$10.2.1/dist/commonjs/logger"),c=function(e){return e&&e.__esModule?e:{default:e}}(f),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),this.logger=c.default.create("interpolator"),this.init(t,!0)}return e.prototype.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments[1]&&(this.options=e,this.format=e.interpolation&&e.interpolation.format||function(e){return e},this.escape=e.interpolation&&e.interpolation.escape||p.escape),e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.prefix=t.prefix?p.regexEscape(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?p.regexEscape(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?p.regexEscape(t.nestingPrefix):t.nestingPrefixEscaped||p.regexEscape("$t("),this.nestingSuffix=t.nestingSuffix?p.regexEscape(t.nestingSuffix):t.nestingSuffixEscaped||p.regexEscape(")"),this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.resetRegExp()},e.prototype.reset=function(){this.options&&this.init(this.options)},e.prototype.resetRegExp=function(){var e=this.prefix+"(.+?)"+this.suffix;this.regexp=new RegExp(e,"g");var t=""+this.prefix+this.unescapePrefix+"(.+?)"+this.unescapeSuffix+this.suffix;this.regexpUnescape=new RegExp(t,"g");var i=this.nestingPrefix+"(.+?)"+this.nestingSuffix;this.nestingRegexp=new RegExp(i,"g")},e.prototype.interpolate=function(e,t,i){function r(e){return e.replace(/\$/g,"$$$$")}var n=this,s=void 0,a=void 0,o=void 0,f=function(e){if(e.indexOf(n.formatSeparator)<0)return p.getPath(t,e);var r=e.split(n.formatSeparator),s=r.shift().trim(),a=r.join(n.formatSeparator).trim();return n.format(p.getPath(t,s),a,i)};for(this.resetRegExp(),o=0;(s=this.regexpUnescape.exec(e))&&(a=f(s[1].trim()),e=e.replace(s[0],a),this.regexpUnescape.lastIndex=0,!(++o>=this.maxReplaces)););for(o=0;(s=this.regexp.exec(e))&&(a=f(s[1].trim()),"string"!=typeof a&&(a=p.makeString(a)),a||(this.logger.warn("missed to pass in variable "+s[1]+" for interpolating "+e),a=""),a=r(this.escapeValue?this.escape(a):a),e=e.replace(s[0],a),this.regexp.lastIndex=0,!(++o>=this.maxReplaces)););return e},e.prototype.nest=function(e,t){function i(e){if(e.indexOf(",")<0)return e;var t=e.split(",");e=t.shift();var i=t.join(",");i=this.interpolate(i,o),i=i.replace(/'/g,'"');try{o=JSON.parse(i)}catch(t){this.logger.error("failed parsing options string in nesting for key "+e,t)}return e}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=void 0,s=void 0,o=a({},r);for(o.applyPostProcessor=!1;n=this.nestingRegexp.exec(e);){if((s=t(i.call(this,n[1].trim()),o))&&n[0]===e&&"string"!=typeof s)return s;"string"!=typeof s&&(s=p.makeString(s)),s||(this.logger.warn("missed to resolve "+n[1]+" for nesting "+e),s=""),e=e.replace(n[0],s),this.regexp.lastIndex=0}return e},e}();t.default=u});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/BackendConnector",function(e,t,n,o,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var a=n[o],r=Object.getOwnPropertyDescriptor(t,a);r&&r.configurable&&void 0===e[a]&&Object.defineProperty(e,a,r)}return e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):i(e,t))}function d(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){var n=[],o=!0,a=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&l.return&&l.return()}finally{if(a)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=e("/i18next$10.2.1/dist/commonjs/utils"),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(g),p=e("/i18next$10.2.1/dist/commonjs/logger"),v=r(p),b=e("/i18next$10.2.1/dist/commonjs/EventEmitter"),y=r(b),m=function(e){function t(n,o,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};l(this,t);var i=s(this,e.call(this));return i.backend=n,i.store=o,i.languageUtils=a.languageUtils,i.options=r,i.logger=v.default.create("backendConnector"),i.state={},i.queue=[],i.backend&&i.backend.init&&i.backend.init(a,r.backend,r),i}return u(t,e),t.prototype.queueLoad=function(e,t,n){var o=this,a=[],r=[],i=[],l=[];return e.forEach(function(e){var n=!0;t.forEach(function(t){var i=e+"|"+t;o.store.hasResourceBundle(e,t)?o.state[i]=2:o.state[i]<0||(1===o.state[i]?r.indexOf(i)<0&&r.push(i):(o.state[i]=1,n=!1,r.indexOf(i)<0&&r.push(i),a.indexOf(i)<0&&a.push(i),l.indexOf(t)<0&&l.push(t)))}),n||i.push(e)}),(a.length||r.length)&&this.queue.push({pending:r,loaded:{},errors:[],callback:n}),{toLoad:a,pending:r,toLoadLanguages:i,toLoadNamespaces:l}},t.prototype.loaded=function(e,t,n){var o=this,a=e.split("|"),r=f(a,2),i=r[0],l=r[1];t&&this.emit("failedLoading",i,l,t),n&&this.store.addResourceBundle(i,l,n),this.state[e]=t?-1:2,this.queue.forEach(function(n){h.pushPath(n.loaded,[i],l),d(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(o.emit("loaded",n.loaded),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.queue=this.queue.filter(function(e){return!e.done})},t.prototype.read=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=this,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250,i=arguments[5];return e.length?this.backend[n](e,t,function(l,s){if(l&&s&&o<5)return void setTimeout(function(){a.read.call(a,e,t,n,o+1,2*r,i)},r);i(l,s)}):i(null,{})},t.prototype.load=function(e,t,n){var o=this;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();var a=c({},this.backend.options,this.options.backend);"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var r=this.queueLoad(e,t,n);if(!r.toLoad.length)return r.pending.length||n(),null;a.allowMultiLoading&&this.backend.readMulti?this.read(r.toLoadLanguages,r.toLoadNamespaces,"readMulti",null,null,function(e,t){e&&o.logger.warn("loading namespaces "+r.toLoadNamespaces.join(", ")+" for languages "+r.toLoadLanguages.join(", ")+" via multiloading failed",e),!e&&t&&o.logger.log("successfully loaded namespaces "+r.toLoadNamespaces.join(", ")+" for languages "+r.toLoadLanguages.join(", ")+" via multiloading",t),r.toLoad.forEach(function(n){var a=n.split("|"),r=f(a,2),i=r[0],l=r[1],s=h.getPath(t,[i,l]);if(s)o.loaded(n,e,s);else{var u="loading namespace "+l+" for language "+i+" via multiloading failed";o.loaded(n,u),o.logger.error(u)}})}):r.toLoad.forEach(function(e){o.loadOne(e)})},t.prototype.reload=function(e,t){var n=this;this.backend||this.logger.warn("No backend was added via i18next.use. Will not load resources.");var o=c({},this.backend.options,this.options.backend);"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]),o.allowMultiLoading&&this.backend.readMulti?this.read(e,t,"readMulti",null,null,function(o,a){o&&n.logger.warn("reloading namespaces "+t.join(", ")+" for languages "+e.join(", ")+" via multiloading failed",o),!o&&a&&n.logger.log("successfully reloaded namespaces "+t.join(", ")+" for languages "+e.join(", ")+" via multiloading",a),e.forEach(function(e){t.forEach(function(t){var r=h.getPath(a,[e,t]);if(r)n.loaded(e+"|"+t,o,r);else{var i="reloading namespace "+t+" for language "+e+" via multiloading failed";n.loaded(e+"|"+t,i),n.logger.error(i)}})})}):e.forEach(function(e){t.forEach(function(t){n.loadOne(e+"|"+t,"re")})})},t.prototype.loadOne=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=e.split("|"),a=f(o,2),r=a[0],i=a[1];this.read(r,i,"read",null,null,function(o,a){o&&t.logger.warn(n+"loading namespace "+i+" for language "+r+" failed",o),!o&&a&&t.logger.log(n+"loaded namespace "+i+" for language "+r,a),t.loaded(e,o,a)})},t.prototype.saveMissing=function(e,t,n,o,a){this.backend&&this.backend.create&&this.backend.create(e,t,n,o,null,{isUpdate:a}),e&&e[0]&&this.store.addResource(e[0],t,n,o)},t}(y.default);t.default=m});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/CacheConnector",function(e,t,o,r,n){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){for(var o=Object.getOwnPropertyNames(t),r=0;r<o.length;r++){var n=o[r],c=Object.getOwnPropertyDescriptor(t,n);c&&c.configurable&&void 0===e[n]&&Object.defineProperty(e,n,c)}return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):i(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},u=e("/i18next$10.2.1/dist/commonjs/logger"),h=c(u),p=e("/i18next$10.2.1/dist/commonjs/EventEmitter"),d=c(p),y=function(e){function t(o,r,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};a(this,t);var i=s(this,e.call(this));return i.cache=o,i.store=r,i.services=n,i.options=c,i.logger=h.default.create("cacheConnector"),i.cache&&i.cache.init&&i.cache.init(n,c.cache,c),i}return f(t,e),t.prototype.load=function(e,t,o){var r=this;if(!this.cache)return o&&o();var n=l({},this.cache.options,this.options.cache),c="string"==typeof e?this.services.languageUtils.toResolveHierarchy(e):e;n.enabled?this.cache.load(c,function(e,t){if(e&&r.logger.error("loading languages "+c.join(", ")+" from cache failed",e),t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))for(var i in t[n])if(Object.prototype.hasOwnProperty.call(t[n],i)&&"i18nStamp"!==i){var a=t[n][i];a&&r.store.addResourceBundle(n,i,a)}o&&o()}):o&&o()},t.prototype.save=function(){this.cache&&this.options.cache&&this.options.cache.enabled&&this.cache.save(this.store.data)},t}(d.default);t.default=y});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/defaults",function(e,t,a,n,i){"use strict";function r(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",missingKeyHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){return{defaultValue:e[1]}},interpolation:{escapeValue:!0,format:function(e,t,a){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",maxReplaces:1e3}}}function s(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&e.whitelist.indexOf("cimode")<0&&e.whitelist.push("cimode"),e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformOptions=s,t.get=r});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/i18next",function(t,e,o,n,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){for(var o=Object.getOwnPropertyNames(e),n=0;n<o.length;n++){var s=o[n],i=Object.getOwnPropertyDescriptor(e,s);i&&i.configurable&&void 0===t[s]&&Object.defineProperty(t,s,i)}return t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):r(t,e))}function u(){}Object.defineProperty(e,"__esModule",{value:!0});var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},f=t("/i18next$10.2.1/dist/commonjs/logger"),h=i(f),d=t("/i18next$10.2.1/dist/commonjs/EventEmitter"),y=i(d),m=t("/i18next$10.2.1/dist/commonjs/ResourceStore"),v=i(m),b=t("/i18next$10.2.1/dist/commonjs/Translator"),x=i(b),j=t("/i18next$10.2.1/dist/commonjs/LanguageUtils"),w=i(j),O=t("/i18next$10.2.1/dist/commonjs/PluralResolver"),C=i(O),R=t("/i18next$10.2.1/dist/commonjs/Interpolator"),S=i(R),D=t("/i18next$10.2.1/dist/commonjs/BackendConnector"),P=i(D),$=t("/i18next$10.2.1/dist/commonjs/CacheConnector"),E=i($),k=t("/i18next$10.2.1/dist/commonjs/defaults"),L=t("/i18next$10.2.1/dist/commonjs/postProcessor"),z=i(L),I=function(t){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];a(this,e);var s=c(this,t.call(this));if(s.options=(0,k.transformOptions)(o),s.services={},s.logger=h.default,s.modules={external:[]},n&&!s.isInitialized&&!o.isClone){var i;if(!s.options.initImmediate)return i=s.init(o,n),c(s,i);setTimeout(function(){s.init(o,n)},0)}return s}return l(e,t),e.prototype.init=function(){function t(t){return t?"function"==typeof t?new t:t:null}var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];if("function"==typeof o&&(n=o,o={}),this.options=g({},(0,k.get)(),this.options,(0,k.transformOptions)(o)),this.format=this.options.interpolation.format,n||(n=u),!this.options.isClone){this.modules.logger?h.default.init(t(this.modules.logger),this.options):h.default.init(null,this.options);var s=new w.default(this.options);this.store=new v.default(this.options.resources,this.options);var i=this.services;i.logger=h.default,i.resourceStore=this.store,i.resourceStore.on("added removed",function(t,e){i.cacheConnector.save()}),i.languageUtils=s,i.pluralResolver=new C.default(s,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),i.interpolator=new S.default(this.options),i.backendConnector=new P.default(t(this.modules.backend),i.resourceStore,i,this.options),i.backendConnector.on("*",function(t){for(var o=arguments.length,n=Array(o>1?o-1:0),s=1;s<o;s++)n[s-1]=arguments[s];e.emit.apply(e,[t].concat(n))}),i.backendConnector.on("loaded",function(t){i.cacheConnector.save()}),i.cacheConnector=new E.default(t(this.modules.cache),i.resourceStore,i,this.options),i.cacheConnector.on("*",function(t){for(var o=arguments.length,n=Array(o>1?o-1:0),s=1;s<o;s++)n[s-1]=arguments[s];e.emit.apply(e,[t].concat(n))}),this.modules.languageDetector&&(i.languageDetector=t(this.modules.languageDetector),i.languageDetector.init(i,this.options.detection,this.options)),this.translator=new x.default(this.services,this.options),this.translator.on("*",function(t){for(var o=arguments.length,n=Array(o>1?o-1:0),s=1;s<o;s++)n[s-1]=arguments[s];e.emit.apply(e,[t].concat(n))}),this.modules.external.forEach(function(t){t.init&&t.init(e)})}["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle"].forEach(function(t){e[t]=function(){var o;return(o=e.store)[t].apply(o,arguments)}});var r=function(){e.changeLanguage(e.options.lng,function(t,o){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),n(t,o)})};return this.options.resources||!this.options.initImmediate?r():setTimeout(r,0),this},e.prototype.loadResources=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;if(this.options.resources)e(null);else{if(this.language&&"cimode"===this.language.toLowerCase())return e();var o=[],n=function(e){if(e){t.services.languageUtils.toResolveHierarchy(e).forEach(function(t){o.indexOf(t)<0&&o.push(t)})}};if(this.language)n(this.language);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(t){return n(t)})}this.options.preload&&this.options.preload.forEach(function(t){return n(t)}),this.services.cacheConnector.load(o,this.options.ns,function(){t.services.backendConnector.load(o,t.options.ns,e)})}},e.prototype.reloadResources=function(t,e){t||(t=this.languages),e||(e=this.options.ns),this.services.backendConnector.reload(t,e)},e.prototype.use=function(t){return"backend"===t.type&&(this.modules.backend=t),"cache"===t.type&&(this.modules.cache=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"postProcessor"===t.type&&z.default.addPostProcessor(t),"3rdParty"===t.type&&this.modules.external.push(t),this},e.prototype.changeLanguage=function(t,e){var o=this,n=function(t,n){o.translator.changeLanguage(n),n&&(o.emit("languageChanged",n),o.logger.log("languageChanged",n)),e&&e(t,function(){return o.t.apply(o,arguments)})},s=function(t){t&&(o.language=t,o.languages=o.services.languageUtils.toResolveHierarchy(t),o.translator.language||o.translator.changeLanguage(t),o.services.languageDetector&&o.services.languageDetector.cacheUserLanguage(t)),o.loadResources(function(e){n(e,t)})};t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(s):s(t):s(this.services.languageDetector.detect())},e.prototype.getFixedT=function(t,e){var o=this,n=function t(e,n){for(var s=arguments.length,i=Array(s>2?s-2:0),r=2;r<s;r++)i[r-2]=arguments[r];var a=g({},n);return"object"!==(void 0===n?"undefined":p(n))&&(a=o.options.overloadTranslationOptionHandler([e,n].concat(i))),a.lng=a.lng||t.lng,a.lngs=a.lngs||t.lngs,a.ns=a.ns||t.ns,o.t(e,a)};return"string"==typeof t?n.lng=t:n.lngs=t,n.ns=e,n},e.prototype.t=function(){var t;return this.translator&&(t=this.translator).translate.apply(t,arguments)},e.prototype.exists=function(){var t;return this.translator&&(t=this.translator).exists.apply(t,arguments)},e.prototype.setDefaultNamespace=function(t){this.options.defaultNS=t},e.prototype.loadNamespaces=function(t,e){var o=this;if(!this.options.ns)return e&&e();"string"==typeof t&&(t=[t]),t.forEach(function(t){o.options.ns.indexOf(t)<0&&o.options.ns.push(t)}),this.loadResources(e)},e.prototype.loadLanguages=function(t,e){"string"==typeof t&&(t=[t]);var o=this.options.preload||[],n=t.filter(function(t){return o.indexOf(t)<0});if(!n.length)return e();this.options.preload=o.concat(n),this.loadResources(e)},e.prototype.dir=function(t){return t||(t=this.languages&&this.languages.length>0?this.languages[0]:this.language),t?["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t))>=0?"rtl":"ltr":"rtl"},e.prototype.createInstance=function(){return new e(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments[1])},e.prototype.cloneInstance=function(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,s=g({},this.options,o,{isClone:!0}),i=new e(s);return["store","services","language"].forEach(function(e){i[e]=t[e]}),i.translator=new x.default(i.services,i.options),i.translator.on("*",function(t){for(var e=arguments.length,o=Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];i.emit.apply(i,[t].concat(o))}),i.init(s,n),i.translator.options=i.options,i},e}(y.default);e.default=new I});
$_mod_foe_tools.def("/i18next$10.2.1/dist/commonjs/index",function(e,a,t,d,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.use=a.t=a.setDefaultNamespace=a.on=a.off=a.loadResources=a.loadNamespaces=a.loadLanguages=a.init=a.getFixedT=a.exists=a.dir=a.createInstance=a.cloneInstance=a.changeLanguage=void 0;var u=e("/i18next$10.2.1/dist/commonjs/i18next"),l=function(e){return e&&e.__esModule?e:{default:e}}(u);a.default=l.default;a.changeLanguage=l.default.changeLanguage.bind(l.default),a.cloneInstance=l.default.cloneInstance.bind(l.default),a.createInstance=l.default.createInstance.bind(l.default),a.dir=l.default.dir.bind(l.default),a.exists=l.default.exists.bind(l.default),a.getFixedT=l.default.getFixedT.bind(l.default),a.init=l.default.init.bind(l.default),a.loadLanguages=l.default.loadLanguages.bind(l.default),a.loadNamespaces=l.default.loadNamespaces.bind(l.default),a.loadResources=l.default.loadResources.bind(l.default),a.off=l.default.off.bind(l.default),a.on=l.default.on.bind(l.default),a.setDefaultNamespace=l.default.setDefaultNamespace.bind(l.default),a.t=l.default.t.bind(l.default),a.use=l.default.use.bind(l.default)});
$_mod_foe_tools.def("/i18next$10.2.1/index",function(e,o,n,t,d){n.exports=e("/i18next$10.2.1/dist/commonjs/index").default});
$_mod_foe_tools.def("/foe-tools$1.3.2/i18n/en",{translation:{main_menu:{home:"Home",gb_investment:"GB Investment",secure_position:"Secure place"},footer_menu:{about:"About"},components:{gb_investment:{gb_list_select:{label:"Switch Great Building"},gb_investment:{title:"GB Investment",permalink:"permalink",description:{p1:"Enter the values for level and bonus percentage. The values in the table update automatically.",p2_html:'<strong>Note</strong>: If the update is not done automatically, first set the GB level and the overall investment value and click on "$t(components.gb_investment.gb_investment.form.submit_global)". If you want to adjust the values of each place, adjust to your convenience and click on "$t(components.gb_investment.gb_investment.form.submit_custom)".'},form:{level:"GB Level (between 1 and {{max}})",investor_percentage:"% of global investors bonus (arc bonus)",submit_global:"Global calculation",submit_custom:"Custom calculation"},table:{title:"$t({{gb_key}}) level {{level}}",thead:{th1:"Places",th2:"Default rewards",th3:"FP to put by the owner to secure the place",th4:"Rewards with rate",th5:"% of investors bonus (arc bonus)"},tfoot:{total_preparation:"Total investment of the owner",level_cost:"Level cost"}}},promotion:{title:"Promotion message",promo:["P1({{investment}})","P2({{investment}})","P3({{investment}})","P4({{investment}})","P5({{investment}})"]}},secure_position:{block_place:{title:"Block his place",description:{p1:"Enter the different values. The result is updated automatically.",p2_html:'<strong>Note</strong>: If the update is not done automatically, click on "$t(components.secure_position.block_place.submit)".'},level_cost:"Level cost",current_deposits:"Sum of current deposits",your_participation:"Your current participation",other_participation:"Participation of the player to overtake",submit:"Calculate",fp_to_complete_level:"Number of FP remaining to complete the level: {{count}}",fp_to_complete_level_plural:"Number of FPs remaining to complete the level: {{count}}",result:{error:"One or more values are not valid.",already_blocked:"Your place is blocked.",default:"You must have totaled {{count}} FP to block the place.",default_plural:"You must have totaled {{count}} FPs to block the place.",fp_to_secure_html:"You still have to put {{count}} FP.",fp_to_secure_html_plural:"You still have to put {{count}} FPs.",cant_block:"You can not block the place."},unknown:"unknown"}},site_layout:{hero:{title:"FOE Tools",slogan_html:'A set of tools to simplify life on <a href="https://forgeofempires.com">Forge Of Empire</a>'},footer:{license_html:'Source code under <a href="http://opensource.org/licenses/mit-license.php">MIT</a> license',version:"Version {{version}}"}}},routes:{home:{title:"FOE Tools",info:{title:"Information",p1:"The site currently has a tool to calculate the number of points a player must put on his GB to secure the first 5 places following a rate (arc bonus).",p2:'A second tool is available, "$t(routes.secure_position.hero.title)". This tool calculates the number of FP that a player must put on a GB to block his place. It is integrated in "$t(routes.gb_investment_gb_chooser.hero.title)" and also has a standalone version.'}},about:{title:"About FOE Tools",general_info:{title:"General information",p1_html:"Forge of Empires, FOE, and all related trademarks and content belong to InnoGames GmbH. <br /> FOE Tools is an unofficial third party site and is not affiliated with InnoGames.",p2_html:'FOE Tools was created by the French player <strong class="has-text-weight-semibold">Yoratheon</strong>.',p3_html:"The site is OpenSource, the code is freely available on GitHub. <br /> Thus, everyone with the necessary skills can participate in the improvement of this site."},cookie:{title:"Cookies",p1:"To improve your comfort of use, the site uses cookies.",p2_html:'We store the display language.<br />In "$t(components.gb_investment.gb_investment.title)" Tool, we store for each GB the level and various percentages of investors so we do not have to re-enter them each time. <br />Please note that when you visit a page "$t(components.gb_investment.gb_investment.permalink)", no information on the level of GB and the various percentages of investors is stored.'},dev_info:{title:"Development information",p1:"The site is a simple static site hosted on GitHub.",p2_html:'The development is done in Node.js using <a href="https://markojs.com/">Marko</a>, a template engine for reactive component developed by eBay. The style is made using <a href="https://bulma.io/">Bulma</a>.',p3_html:'An idea of functionality? A problem ? Feel free to create an issue on GitHub or send me an email (in English or in French) at <a href="mailto:foe-tools@protonmail.com?subject=FOE-Tools">foe-tools@protonmail.com</a>.',message_info_github_issue:"<b>Note:</b> Regarding issues on GitHub, please make sure to write them in English to facilitate understanding for the greatest number."}},gb_investment:{title:"FOE Tools | GB Investment - $t({{gb_key}})",hero:{title:"GB Investment - $t({{gb_key}})"}},gb_investment_gb_chooser:{title:"FOE Tools | GB Investment",hero:{title:"GB Investment",subtitle:"This tool makes it possible to calculate the number of points that a player must put on his GB to secure the first 5 places following a rate (arc bonus)."},choose_gb:{title:"Choose a Great Building"}},secure_position:{title:"FOE Tools | Secure place",hero:{title:"Secure place",subtitle:"This tool calculates the number of FP that a player must put on a GB to block his place."}}},foe_data:{age:{NoAge:"No Age",BronzeAge:"Bronze Age",IronAge:"Iron Age",EarlyMiddleAges:"Early Middle Ages",HighMiddleAges:"High Middle Ages",LateMiddleAges:"Late Middle Ages",ColonialAge:"Colonial Age",IndustrialAge:"Industrial Age",ProgressiveEra:"Progressive Era",ModernEra:"Modern Era",PostmodernEra:"Postmodern Era",ContemporaryEra:"Contemporary Era",Tomorrow:"Tomorrow",TheFuture:"The Future",ArcticFuture:"Arctic Future",OceanicFuture:"Oceanic Future"},gb:{Observatory:"Observatory",Temple_of_Relics:"Temple of Relics",Oracle_of_Delphi:"Oracle of Delphi",Tower_of_Babel:"Tower of Babel",Statue_of_Zeus:"Statue of Zeus",Colosseum:"Colosseum",Lighthouse_of_Alexandria:"Lighthouse of Alexandria",Hagia_Sophia:"Hagia Sophia",Cathedral_of_Aachen:"Cathedral of Aachen",St_Mark_s_Basilica:"St. Mark's Basilica",Notre_Dame:"Notre Dame",Saint_Basil_s_Cathedral:"St. Basil's Cathedral",Castel_del_Monte:"Castel del Monte",Deal_Castle:"Deal Castle",Frauenkirche_of_Dresden:"Frauenkirche of Dresden",Capitol:"Capitol",Royal_Albert_Hall:"Royal Albert Hall",Chateau_Frontenac:"Château Frontenac",Alcatraz:"Alcatraz",Space_Needle:"Space Needle",Atomium:"Atomium",Cape_Canaveral:"Cape Canaveral",The_Habitat:"The Habitat",Lotus_Temple:"Lotus Temple",Innovation_Tower:"Innovation Tower",Dynamic_Tower:"Dynamic Tower",Voyager_V1:"Voyager V1",The_Arc:"The Arc",Rain_Forest_Project:"Rain Forest Project",Gaea_Statue:"Gaea Statue",Arctic_Orangery:"Arctic Orangery",Seed_Vault:"Seed Vault",Atlantis_Museum:"Atlantis Museum",The_Kraken:"The Kraken"}},lang:{en:"English",fr:"Français"}}});
$_mod_foe_tools.def("/foe-tools$1.3.2/i18n/fr",{translation:{main_menu:{home:"Accueil",gb_investment:"Investissement GM",secure_position:"Sécurisation de place"},footer_menu:{about:"À propos"},components:{gb_investment:{gb_list_select:{label:"Changer de Grand Monument"},gb_investment:{title:"Investissement GM",permalink:"Lien permanent",description:{p1:"Saisissez les valeurs pour le niveau et le pourcentage de bonus. Les valeurs du tableau se mettent à jour automatiquement.",p2_html:"<strong>Note</strong> : Si la mise à jour ne se fait pas automatiquement, dans un premier temps, définissez le niveau du GM et la valeur d'investissement globale et cliquez sur « $t(components.gb_investment.gb_investment.form.submit_global) ». Si vous souhaitez ajuster les valeurs de chaque place, ajuster à votre convenance et cliquez sur « $t(components.gb_investment.gb_investment.form.submit_custom) »."},form:{level:"Niveau du GM (entre 1 et {{max}})",investor_percentage:"% de bonus (grosses arches) global des investisseurs",submit_global:"Calcul global",submit_custom:"Calcul personnalisé"},table:{title:"$t({{gb_key}}) niveau {{level}}",thead:{th1:"Places",th2:"Récompenses de base",th3:"PF à mettre par le propriétaire pour sécuriser la place",th4:"Récompenses avec taux",th5:"% de bonus (grosses arches) des investisseurs"},tfoot:{total_preparation:"Investissement total du propriétaire",level_cost:"Coût du niveau"}}},promotion:{title:"Message de promotion",promo:["P1({{investment}})","P2({{investment}})","P3({{investment}})","P4({{investment}})","P5({{investment}})"]}},secure_position:{block_place:{title:"Bloquer sa place",description:{p1:"Saisissez les différentes valeurs. Le résultat se met à jour automatiquement.",p2_html:"<strong>Note</strong> : Si la mise à jour ne se fait pas automatiquement, cliquez sur « $t(components.secure_position.block_place.submit) »."},level_cost:"Coût du niveau",current_deposits:"Somme des dépôts actuels",your_participation:"Votre participation actuelle",other_participation:"Participation du joueur à dépasser",submit:"Calculer",fp_to_complete_level:"Nombre de PF restant pour compléter le niveau : {{count}}",fp_to_complete_level_plural:"Nombre de PFs restant pour compléter le niveau : {{count}}",result:{error:"Une ou plusieurs valeurs ne sont pas valide.",already_blocked:"Votre place est bloquée.",default:"Vous devez avoir mis au total {{count}} PF pour bloquer la place.",default_plural:"Vous devez avoir mis au total {{count}} PFs pour bloquer la place.",fp_to_secure_html:"Vous devez encore mettre {{count}} PF.",fp_to_secure_html_plural:"Vous devez encore mettre {{count}} PFs.",cant_block:"Vous ne pouvez pas bloquer la place."},unknown:"inconnu"}},site_layout:{hero:{title:"FOE Tools",slogan_html:'Un ensemble d\'outils pour se simplifier la vie sur <a href="https://forgeofempires.com">Forge Of Empire</a>'},footer:{license_html:'Code source sous licence <a href="http://opensource.org/licenses/mit-license.php">MIT</a>',version:"Version {{version}}"}}},routes:{home:{title:"FOE Tools",info:{title:"Informations",p1:"Le site dispose pour l'instant d'un outil permettant de calculer le nombre de points qu'un joueur doit mettre sur son GM pour sécuriser les 5 premières places suivant un taux (grosses arches).",p2:"Un second outil est disponible, « $t(routes.secure_position.hero.title) ». Cet outil permet de calculer le nombre de PF qu'un joueur doit mettre sur un GM pour bloquer sa place. Il est intégré dans « $t(routes.gb_investment_gb_chooser.hero.title) » et dispose également d'une version standalone."}},about:{title:"À propos de FOE Tools",general_info:{title:"Informations générales",p1_html:"Forge of Empires, FOE, et toutes les marques et contenus associés appartiennent à InnoGames GmbH.<br />FOE Tools est un site tierce non officiel et n'est pas affilié à InnoGames.",p2_html:'FOE Tools a été créé par le joueur français <strong class="has-text-weight-semibold">Yoratheon</strong>.',p3_html:"Le site est OpenSource, le code est disponible librement et gratuitement sur GitHub.<br />Ainsi, tout le monde ayant les compétences nécessaires peut participer à l'amélioration de ce site."},cookie:{title:"Cookies",p1:"Pour améliorer votre confort d'utilisation, le site utilise des cookies.",p2_html:"Nous stockons la langue d'affichage.<br />Dans l'outil d'investissement de GM, nous stockons pour chaque GM le niveau et les divers pourcentages des investisseurs afin de ne pas avoir à les ressaisir à chaque fois.<br />Veuillez noter que lorsque vous consulter une page « $t(components.gb_investment.gb_investment.permalink) », aucune information sur le niveau du GM et les divers pourcentages des investisseurs n'est stockée."},dev_info:{title:"Informations développement",p1:"Le site est un simple site static hébergé sur GitHub.",p2_html:'Le développement se fait en Node.js à l\'aide de <a href="https://markojs.com/">Marko</a>, un moteur de template à composant réactif développé par eBay. Le style est réalisé à l\'aide de <a href="https://bulma.io/">Bulma</a>.',p3_html:"Une idée de fonctionnalité ? Un problème ? N'hésitez pas à créer une issue sur GitHub ou à m'envoyer un mail à <a href=\"mailto:foe-tools@protonmail.com?subject=FOE-Tools\">foe-tools@protonmail.com</a>.",message_info_github_issue:"<b>Note :</b> Concernant les issues sur GitHub, veuillez veiller à les rédiger en anglais pour faciliter la compréhension pour le plus grand nombre."}},gb_investment:{title:"FOE Tools | Investissement GM - $t({{gb_key}})",hero:{title:"Investissement GM - $t({{gb_key}})"}},gb_investment_gb_chooser:{title:"FOE Tools | Investissement GM",hero:{title:"Investissement GM",subtitle:"Cet outil permet de calculer le nombre de points qu'un joueur doit mettre sur son GM pour sécuriser les 5 premières places suivant un taux (grosses arches)."},choose_gb:{title:"Choisir un Grand Monument"}},secure_position:{title:"FOE Tools | Sécurisation de place",hero:{title:"Sécurisation de place",subtitle:"Cet outil permet de calculer le nombre de PF qu'un joueur doit mettre sur un GM pour bloquer sa place."}}},foe_data:{age:{NoAge:"Aucun âge",BronzeAge:"Âge du Bronze",IronAge:"Âge du Fer",EarlyMiddleAges:"Haut Moyen Âge",HighMiddleAges:"Moyen Âge Classique",LateMiddleAges:"Renaissance",ColonialAge:"Âge Colonial",IndustrialAge:"Âge Industriel",ProgressiveEra:"Ère Progressiste",ModernEra:"Ère Moderne",PostmodernEra:"Ère Postmoderne",ContemporaryEra:"Ère Contemporaine",Tomorrow:"Ère de Demain",TheFuture:"Ère du Futur",ArcticFuture:"Futur Arctique",OceanicFuture:"Futur Océanique"},gb:{Observatory:"Observatoire",Temple_of_Relics:"Temple des reliques",Oracle_of_Delphi:"Oracle de Delphes",Tower_of_Babel:"Tour de Babel",Statue_of_Zeus:"Statue de Zeus",Colosseum:"Colisée",Lighthouse_of_Alexandria:"Phare d'Alexandrie",Hagia_Sophia:"Hagia Sophia",Cathedral_of_Aachen:"Cathédrale d'Aix la Chapelle",St_Mark_s_Basilica:"Basilique Saint-Marc",Notre_Dame:"Notre-Dame",Saint_Basil_s_Cathedral:"Cathédrale Saint-Basile",Castel_del_Monte:"Castel del Monte",Deal_Castle:"Château de Deal",Frauenkirche_of_Dresden:"Frauenkirche de Dresde",Capitol:"Capitole",Royal_Albert_Hall:"Royal Albert Hall",Chateau_Frontenac:"Château Frontenac",Alcatraz:"Alcatraz",Space_Needle:"Space Needle",Atomium:"Atomium",Cape_Canaveral:"Cap Canaveral",The_Habitat:"L'Habitat",Lotus_Temple:"Temple du lotus",Innovation_Tower:"Tour de l'innovation",Dynamic_Tower:"Dynamic Tower",Voyager_V1:"Voyager V1",The_Arc:"L'Arche",Rain_Forest_Project:"Forêt tropicale",Gaea_Statue:"Statue de Gaïa",Arctic_Orangery:"Orangerie arctique",Seed_Vault:"Chambre forte des graines",Atlantis_Museum:"Musée de l'Atlantide",The_Kraken:"Le Kraken"}},lang:{en:"English",fr:"Français"}}});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/services/i18next",function(e,t,n,o,f){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.i18next=void 0;var i=e("/i18next$10.2.1/index"),s=l(i),u=e("/js-cookie$2.2.0/src/js.cookie"),d=l(u),a=e("/foe-tools$1.3.2/i18n/en"),r=l(a),c=e("/foe-tools$1.3.2/i18n/fr"),g=l(c);void 0===d.default.get("lang")&&d.default.set("lang","en");var _=["en","fr"],v={en:r.default,fr:g.default};s.default.init({lng:d.default.get("lang"),debug:!0,whitelist:_,fallbackLng:["en","fr"],resources:v},function(){}),t.i18next=s.default});
$_mod_foe_tools.def("/marko$4.7.4/dist/taglibs/core/include-tag",function(r,e,t,n,f){function i(r,e,t){var n=r._target,f=r._arg||r;if(n){if("function"==typeof n)return n(e,f),!0;if("string"==typeof n)return n&&e.text(n),!0;if("object"==typeof n){if(n.renderBody)return n.renderBody(e,f),!0;if(n.renderer)return n.renderer(f,e),!0;if(n.render)return n.render(f,e),!0;if(n.safeHTML)return e.write(n.safeHTML),!0;t&&e.error("Invalid include target")}}}function o(r,e){i(r,e,!0)}o.bB_=i,t.exports=o});
$_mod_foe_tools.installed("foe-tools$1.3.2","lasso","2.11.23");
$_mod_foe_tools.remap("/lasso$2.11.23/taglib/head-tag","/lasso$2.11.23/taglib/noop-render");
$_mod_foe_tools.def("/lasso$2.11.23/taglib/noop-render",function(o,n,e,t,f){e.exports=function(o,n){}});
$_mod_foe_tools.installed("foe-tools$1.3.2","marko-magic","1.0.0");
$_mod_foe_tools.remap("/marko-magic$1.0.0/components/asset-var/renderer","/marko-magic$1.0.0/components/asset-var/renderer.browser");
$_mod_foe_tools.def("/marko-magic$1.0.0/components/asset-var/renderer.browser", function(require, exports, module, __filename, __dirname) { module.exports = function(input, out) {
    var renderBody = input.renderBody;
    var values = input.values;

    if (!renderBody) {
        return;
    }

    renderBody.apply(null, [out].concat(values.map(val => require(val))));
}

});
$_mod_foe_tools.remap("/marko$4.7.4/dist/components/taglib/component-globals-tag","/marko$4.7.4/dist/components/taglib/component-globals-tag-browser");
$_mod_foe_tools.def("/marko$4.7.4/dist/components/taglib/component-globals-tag-browser",function(o,t,n,e,s){n.exports=function(){}});
$_mod_foe_tools.main("/foe-tools$1.3.2/src/components/site-layout/components/language-selector","index.marko");
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/site-layout/components/language-selector/component",function(t,e,n,o,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){return Array.prototype.slice.call(document.querySelectorAll(t),0)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=t("/js-cookie$2.2.0/src/js.cookie"),l=function(t){return t&&t.__esModule?t:{default:t}}(u),s=function(){function t(){i(this,t)}return c(t,[{key:"onMount",value:function(){this.subscribeTo(window).on("DOMContentLoaded",function(){function t(){n.forEach(function(t){t.classList.remove("is-active")})}var e=a("#meta a");e.length>0&&e.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();var n=t.getAttribute("href");return document.getElementById(n.substring(1)).scrollIntoView(!0),!1})});var n=a(".dropdown:not(.is-hoverable)");n.length>0&&(n.forEach(function(t){t.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("is-active")})}),document.addEventListener("click",function(){t()}));var o=a("#lang-menu .dropdown-content .dropdown-item");o.length>0&&o.forEach(function(t){t.addEventListener("click",function(e){e.stopPropagation(),o.forEach(function(t){t.classList.remove("is-active")}),t.classList.toggle("is-active"),global.changeLanguage(t.getAttribute("data-lang"),function(e){if(e)return console.error("something went wrong loading",e);l.default.set("lang",t.getAttribute("data-lang")),location.reload()})})})})}}]),t}();e.default=s,n.exports=e.default});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/site-layout/components/language-selector/index.marko",function(o,e,n,s,a){"use strict";function l(o,e,n,s,a){e.be("DIV",$,"0",s),e.e("DIV",_,"1",s,1).e("BUTTON",h,"2",s,3).e("SPAN",null,"3",s,1).t(global.i18n("lang."+global.language())).n(V,s).n(y,s),e.be("DIV",k,"6",s),e.be("DIV",I,"7",s),f(global.languages(),function(o){e.e("A",{"data-lang":w(o),class:b(c(["dropdown-item",o==global.language()&&"is-active"]))},"8",s,1).t(global.i18n("lang."+o))}),e.ee(),e.ee(),e.ee()}var t=n.exports=o("/marko$4.7.4/dist/vdom").t(),r=o("/marko$4.7.4/dist/runtime/vdom/helpers"),c=r.cl,i=o("/marko$4.7.4/dist/components/helpers-browser"),d=i.rc,u=d("/foe-tools$1.3.2/src/components/site-layout/components/language-selector/index.marko",function(){return n.exports}),g=o("/foe-tools$1.3.2/src/components/site-layout/components/language-selector/component"),m=i.r,p=i.c,f=r.f,b=r.ca,w=r.s,$={class:"dropdown"},_={class:"dropdown-trigger"},k={role:"menu",class:"dropdown-menu",id:"lang-menu"},I={class:"dropdown-content"},h={"aria-haspopup":"true","aria-controls":"dropdown-menu",class:"button"},v=r.e,x=r.const,D=x("de5956"),V=v("SPAN",{class:"icon is-small"},"4",null,0,0,{i:D()}),y=v("I",{"aria-hidden":"true",class:"fa fa-angle-down"},"5",null,0,0,{i:D()});t._=m(l,{_l_:u},g),t.Component=p(g,t._)});
$_mod_foe_tools.remap("/lasso$2.11.23/taglib/body-tag","/lasso$2.11.23/taglib/noop-render");
$_mod_foe_tools.installed("foe-tools$1.3.2","browser-refresh-taglib","1.1.0");
$_mod_foe_tools.installed("browser-refresh-taglib$1.1.0","process","0.11.10");
$_mod_foe_tools.main("/process$0.11.10","");
$_mod_foe_tools.remap("/process$0.11.10/index","/process$0.11.10/browser");
$_mod_foe_tools.def("/process$0.11.10/browser",function(e,t,n,r,o){function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(m===setTimeout)return setTimeout(e,0);if((m===i||!m)&&setTimeout)return m=setTimeout,setTimeout(e,0);try{return m(e,0)}catch(t){try{return m.call(null,e,0)}catch(t){return m.call(this,e,0)}}}function s(e){if(p===clearTimeout)return clearTimeout(e);if((p===u||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function f(){y&&T&&(y=!1,T.length?w=T.concat(w):v=-1,w.length&&l())}function l(){if(!y){var e=c(f);y=!0;for(var t=w.length;t;){for(T=w,w=[];++v<t;)T&&T[v].run();v=-1,t=w.length}T=null,y=!1,s(e)}}function a(e,t){this.fun=e,this.array=t}function h(){}var m,p,d=n.exports={};!function(){try{m="function"==typeof setTimeout?setTimeout:i}catch(e){m=i}try{p="function"==typeof clearTimeout?clearTimeout:u}catch(e){p=u}}();var T,w=[],y=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];w.push(new a(e,t)),1!==w.length||y||c(l)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=h,d.addListener=h,d.once=h,d.off=h,d.removeListener=h,d.removeAllListeners=h,d.emit=h,d.prependListener=h,d.prependOnceListener=h,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}});
$_mod_foe_tools.builtin("url","/url$0.11.0/url");
$_mod_foe_tools.installed("url$0.11.0","punycode","1.3.2");
$_mod_foe_tools.main("/punycode$1.3.2","punycode");
$_mod_foe_tools.def("/punycode$1.3.2/punycode",function(o,e,n,t,r){!function(o){function t(o){throw RangeError($[o])}function r(o,e){for(var n=o.length,t=[];n--;)t[n]=e(o[n]);return t}function f(o,e){var n=o.split("@"),t="";return n.length>1&&(t=n[0]+"@",o=n[1]),o=o.replace(T,"."),t+r(o.split("."),e).join(".")}function i(o){for(var e,n,t=[],r=0,f=o.length;r<f;)e=o.charCodeAt(r++),e>=55296&&e<=56319&&r<f?(n=o.charCodeAt(r++),56320==(64512&n)?t.push(((1023&e)<<10)+(1023&n)+65536):(t.push(e),r--)):t.push(e);return t}function u(o){return r(o,function(o){var e="";return o>65535&&(o-=65536,e+=P(o>>>10&1023|55296),o=56320|1023&o),e+=P(o)}).join("")}function c(o){return o-48<10?o-22:o-65<26?o-65:o-97<26?o-97:C}function l(o,e){return o+22+75*(o<26)-((0!=e)<<5)}function d(o,e,n){var t=0;for(o=n?M(o/m):o>>1,o+=M(o/e);o>L*A>>1;t+=C)o=M(o/L);return M(t+(L+1)*o/(o+I))}function a(o){var e,n,r,f,i,l,a,s,p,h,v=[],g=o.length,w=0,y=F,b=E;for(n=o.lastIndexOf(O),n<0&&(n=0),r=0;r<n;++r)o.charCodeAt(r)>=128&&t("not-basic"),v.push(o.charCodeAt(r));for(f=n>0?n+1:0;f<g;){for(i=w,l=1,a=C;f>=g&&t("invalid-input"),s=c(o.charCodeAt(f++)),(s>=C||s>M((x-w)/l))&&t("overflow"),w+=s*l,p=a<=b?j:a>=b+A?A:a-b,!(s<p);a+=C)h=C-p,l>M(x/h)&&t("overflow"),l*=h;e=v.length+1,b=d(w-i,e,0==i),M(w/e)>x-y&&t("overflow"),y+=M(w/e),w%=e,v.splice(w++,0,y)}return u(v)}function s(o){var e,n,r,f,u,c,a,s,p,h,v,g,w,y,b,I=[];for(o=i(o),g=o.length,e=F,n=0,u=E,c=0;c<g;++c)(v=o[c])<128&&I.push(P(v));for(r=f=I.length,f&&I.push(O);r<g;){for(a=x,c=0;c<g;++c)(v=o[c])>=e&&v<a&&(a=v);for(w=r+1,a-e>M((x-n)/w)&&t("overflow"),n+=(a-e)*w,e=a,c=0;c<g;++c)if(v=o[c],v<e&&++n>x&&t("overflow"),v==e){for(s=n,p=C;h=p<=u?j:p>=u+A?A:p-u,!(s<h);p+=C)b=s-h,y=C-h,I.push(P(l(h+b%y,0))),s=M(b/y);I.push(P(l(s,0))),u=d(n,w,r==f),n=0,++r}++n,++e}return I.join("")}function p(o){return f(o,function(o){return _.test(o)?a(o.slice(4).toLowerCase()):o})}function h(o){return f(o,function(o){return S.test(o)?"xn--"+s(o):o})}var v="object"==typeof e&&e&&!e.nodeType&&e,g="object"==typeof n&&n&&!n.nodeType&&n,w="object"==typeof global&&global;w.global!==w&&w.window!==w&&w.self!==w||(o=w);var y,b,x=2147483647,C=36,j=1,A=26,I=38,m=700,E=72,F=128,O="-",_=/^xn--/,S=/[^\x20-\x7E]/,T=/[\x2E\u3002\uFF0E\uFF61]/g,$={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},L=C-j,M=Math.floor,P=String.fromCharCode;if(y={version:"1.3.2",ucs2:{decode:i,encode:u},decode:a,encode:s,toASCII:h,toUnicode:p},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return y});else if(v&&g)if(n.exports==v)g.exports=y;else for(b in y)y.hasOwnProperty(b)&&(v[b]=y[b]);else o.punycode=y}(this)});
$_mod_foe_tools.def("/url$0.11.0/util",function(n,t,u,e,i){"use strict";u.exports={isString:function(n){return"string"==typeof n},isObject:function(n){return"object"==typeof n&&null!==n},isNull:function(n){return null===n},isNullOrUndefined:function(n){return null==n}}});
$_mod_foe_tools.installed("url$0.11.0","querystring","0.2.0");
$_mod_foe_tools.main("/querystring$0.2.0","");
$_mod_foe_tools.def("/querystring$0.2.0/decode",function(e,r,t,o,n){"use strict";function s(e,r){return Object.prototype.hasOwnProperty.call(e,r)}t.exports=function(e,r,t,o){r=r||"&",t=t||"=";var n={};if("string"!=typeof e||0===e.length)return n;var a=/\+/g;e=e.split(r);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var p=e.length;u>0&&p>u&&(p=u);for(var c=0;c<p;++c){var f,i,d,y,l=e[c].replace(a,"%20"),m=l.indexOf(t);m>=0?(f=l.substr(0,m),i=l.substr(m+1)):(f=l,i=""),d=decodeURIComponent(f),y=decodeURIComponent(i),s(n,d)?Array.isArray(n[d])?n[d].push(y):n[d]=[n[d],y]:n[d]=y}return n}});
$_mod_foe_tools.def("/querystring$0.2.0/encode",function(e,n,o,t,r){"use strict";var c=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};o.exports=function(e,n,o,t){return n=n||"&",o=o||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(t){var r=encodeURIComponent(c(t))+o;return Array.isArray(e[t])?e[t].map(function(e){return r+encodeURIComponent(c(e))}).join(n):r+encodeURIComponent(c(e[t]))}).join(n):t?encodeURIComponent(c(t))+o+encodeURIComponent(c(e)):""}});
$_mod_foe_tools.def("/querystring$0.2.0/index",function(e,d,n,o,r){"use strict";d.decode=d.parse=e("/querystring$0.2.0/decode"),d.encode=d.stringify=e("/querystring$0.2.0/encode")});
$_mod_foe_tools.def("/url$0.11.0/url",function(t,s,h,e,a){"use strict";function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function o(t,s,h){if(t&&c.isObject(t)&&t instanceof r)return t;var e=new r;return e.parse(t,s,h),e}function n(t){return c.isString(t)&&(t=o(t)),t instanceof r?t.format():r.prototype.format.call(t)}function i(t,s){return o(t,!1,!0).resolve(s)}function l(t,s){return t?o(t,!1,!0).resolveObject(s):s}var p=t("/punycode$1.3.2/punycode"),c=t("/url$0.11.0/util");s.parse=o,s.resolve=i,s.resolveObject=l,s.format=n,s.Url=r;var u=/^([a-z0-9.+-]+:)/i,f=/:[0-9]*$/,m=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,v=["<",">",'"',"`"," ","\r","\n","\t"],g=["{","}","|","\\","^","`"].concat(v),y=["'"].concat(g),b=["%","/","?",";","#"].concat(y),d=["/","?","#"],O=/^[+a-z0-9A-Z_-]{0,63}$/,j=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,q={javascript:!0,"javascript:":!0},x={javascript:!0,"javascript:":!0},A={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},$=t("/querystring$0.2.0/index");r.prototype.parse=function(t,s,h){if(!c.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var e=t.indexOf("?"),a=-1!==e&&e<t.indexOf("#")?"?":"#",r=t.split(a),o=/\\/g;r[0]=r[0].replace(o,"/"),t=r.join(a);var n=t;if(n=n.trim(),!h&&1===t.split("#").length){var i=m.exec(n);if(i)return this.path=n,this.href=n,this.pathname=i[1],i[2]?(this.search=i[2],this.query=s?$.parse(this.search.substr(1)):this.search.substr(1)):s&&(this.search="",this.query={}),this}var l=u.exec(n);if(l){l=l[0];var f=l.toLowerCase();this.protocol=f,n=n.substr(l.length)}if(h||l||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var v="//"===n.substr(0,2);!v||l&&x[l]||(n=n.substr(2),this.slashes=!0)}if(!x[l]&&(v||l&&!A[l])){for(var g=-1,C=0;C<d.length;C++){var I=n.indexOf(d[C]);-1!==I&&(-1===g||I<g)&&(g=I)}var w,U;U=-1===g?n.lastIndexOf("@"):n.lastIndexOf("@",g),-1!==U&&(w=n.slice(0,U),n=n.slice(U+1),this.auth=decodeURIComponent(w)),g=-1;for(var C=0;C<b.length;C++){var I=n.indexOf(b[C]);-1!==I&&(-1===g||I<g)&&(g=I)}-1===g&&(g=n.length),this.host=n.slice(0,g),n=n.slice(g),this.parseHost(),this.hostname=this.hostname||"";var k="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!k)for(var N=this.hostname.split(/\./),C=0,_=N.length;C<_;C++){var R=N[C];if(R&&!R.match(O)){for(var S="",z=0,H=R.length;z<H;z++)R.charCodeAt(z)>127?S+="x":S+=R[z];if(!S.match(O)){var L=N.slice(0,C),Z=N.slice(C+1),E=R.match(j);E&&(L.push(E[1]),Z.unshift(E[2])),Z.length&&(n="/"+Z.join(".")+n),this.hostname=L.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),k||(this.hostname=p.toASCII(this.hostname));var P=this.port?":"+this.port:"",T=this.hostname||"";this.host=T+P,this.href+=this.host,k&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==n[0]&&(n="/"+n))}if(!q[f])for(var C=0,_=y.length;C<_;C++){var B=y[C];if(-1!==n.indexOf(B)){var D=encodeURIComponent(B);D===B&&(D=escape(B)),n=n.split(B).join(D)}}var F=n.indexOf("#");-1!==F&&(this.hash=n.substr(F),n=n.slice(0,F));var G=n.indexOf("?");if(-1!==G?(this.search=n.substr(G),this.query=n.substr(G+1),s&&(this.query=$.parse(this.query)),n=n.slice(0,G)):s&&(this.search="",this.query={}),n&&(this.pathname=n),A[f]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var P=this.pathname||"",J=this.search||"";this.path=P+J}return this.href=this.format(),this},r.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var s=this.protocol||"",h=this.pathname||"",e=this.hash||"",a=!1,r="";this.host?a=t+this.host:this.hostname&&(a=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(a+=":"+this.port)),this.query&&c.isObject(this.query)&&Object.keys(this.query).length&&(r=$.stringify(this.query));var o=this.search||r&&"?"+r||"";return s&&":"!==s.substr(-1)&&(s+=":"),this.slashes||(!s||A[s])&&!1!==a?(a="//"+(a||""),h&&"/"!==h.charAt(0)&&(h="/"+h)):a||(a=""),e&&"#"!==e.charAt(0)&&(e="#"+e),o&&"?"!==o.charAt(0)&&(o="?"+o),h=h.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),o=o.replace("#","%23"),s+a+h+o+e},r.prototype.resolve=function(t){return this.resolveObject(o(t,!1,!0)).format()},r.prototype.resolveObject=function(t){if(c.isString(t)){var s=new r;s.parse(t,!1,!0),t=s}for(var h=new r,e=Object.keys(this),a=0;a<e.length;a++){var o=e[a];h[o]=this[o]}if(h.hash=t.hash,""===t.href)return h.href=h.format(),h;if(t.slashes&&!t.protocol){for(var n=Object.keys(t),i=0;i<n.length;i++){var l=n[i];"protocol"!==l&&(h[l]=t[l])}return A[h.protocol]&&h.hostname&&!h.pathname&&(h.path=h.pathname="/"),h.href=h.format(),h}if(t.protocol&&t.protocol!==h.protocol){if(!A[t.protocol]){for(var p=Object.keys(t),u=0;u<p.length;u++){var f=p[u];h[f]=t[f]}return h.href=h.format(),h}if(h.protocol=t.protocol,t.host||x[t.protocol])h.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),h.pathname=m.join("/")}if(h.search=t.search,h.query=t.query,h.host=t.host||"",h.auth=t.auth,h.hostname=t.hostname||t.host,h.port=t.port,h.pathname||h.search){var v=h.pathname||"",g=h.search||"";h.path=v+g}return h.slashes=h.slashes||t.slashes,h.href=h.format(),h}var y=h.pathname&&"/"===h.pathname.charAt(0),b=t.host||t.pathname&&"/"===t.pathname.charAt(0),d=b||y||h.host&&t.pathname,O=d,j=h.pathname&&h.pathname.split("/")||[],m=t.pathname&&t.pathname.split("/")||[],q=h.protocol&&!A[h.protocol];if(q&&(h.hostname="",h.port=null,h.host&&(""===j[0]?j[0]=h.host:j.unshift(h.host)),h.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),d=d&&(""===m[0]||""===j[0])),b)h.host=t.host||""===t.host?t.host:h.host,h.hostname=t.hostname||""===t.hostname?t.hostname:h.hostname,h.search=t.search,h.query=t.query,j=m;else if(m.length)j||(j=[]),j.pop(),j=j.concat(m),h.search=t.search,h.query=t.query;else if(!c.isNullOrUndefined(t.search)){if(q){h.hostname=h.host=j.shift();var $=!!(h.host&&h.host.indexOf("@")>0)&&h.host.split("@");$&&(h.auth=$.shift(),h.host=h.hostname=$.shift())}return h.search=t.search,h.query=t.query,c.isNull(h.pathname)&&c.isNull(h.search)||(h.path=(h.pathname?h.pathname:"")+(h.search?h.search:"")),h.href=h.format(),h}if(!j.length)return h.pathname=null,h.search?h.path="/"+h.search:h.path=null,h.href=h.format(),h;for(var C=j.slice(-1)[0],I=(h.host||t.host||j.length>1)&&("."===C||".."===C)||""===C,w=0,U=j.length;U>=0;U--)C=j[U],"."===C?j.splice(U,1):".."===C?(j.splice(U,1),w++):w&&(j.splice(U,1),w--);if(!d&&!O)for(;w--;w)j.unshift("..");!d||""===j[0]||j[0]&&"/"===j[0].charAt(0)||j.unshift(""),I&&"/"!==j.join("/").substr(-1)&&j.push("");var k=""===j[0]||j[0]&&"/"===j[0].charAt(0);if(q){h.hostname=h.host=k?"":j.length?j.shift():"";var $=!!(h.host&&h.host.indexOf("@")>0)&&h.host.split("@");$&&(h.auth=$.shift(),h.host=h.hostname=$.shift())}return d=d||h.host&&j.length,d&&!k&&j.unshift(""),j.length?h.pathname=j.join("/"):(h.pathname=null,h.path=null),c.isNull(h.pathname)&&c.isNull(h.search)||(h.path=(h.pathname?h.pathname:"")+(h.search?h.search:"")),h.auth=t.auth||h.auth,h.slashes=h.slashes||t.slashes,h.href=h.format(),h},r.prototype.parseHost=function(){var t=this.host,s=f.exec(t);s&&(s=s[0],":"!==s&&(this.port=s.substr(1)),t=t.substr(0,t.length-s.length)),t&&(this.hostname=t)}});
$_mod_foe_tools.def("/browser-refresh-taglib$1.1.0/refresh-tag",function(r,e,t,o,s){function a(r){var e=r.global&&r.global.req;return e||(e=r.stream&&r.stream.req),e&&e.hostname}function n(r){var e=a(r);return e?(i.hostname=e,f.format(i)):R}var l=r("process"),f=r("/url$0.11.0/url"),R=l.env.BROWSER_REFRESH_URL;if(!R){var c=l.env.BROWSER_REFRESH_PORT;c&&(R="http://localhost:"+c+"/browser-refresh.js")}var i,u=null!=R;u&&(i=f.parse(R),delete i.host),e.render=function(r,e){u&&!1!==r.enabled&&e.write('<script src="'+n(e)+'"><\/script>')}});
$_mod_foe_tools.remap("/marko$4.7.4/dist/components/taglib/init-components-tag","/marko$4.7.4/dist/components/taglib/init-components-tag-browser");
$_mod_foe_tools.def("/marko$4.7.4/dist/components/taglib/init-components-tag-browser",function(o,t,n,e,i){n.exports=function(){}});
$_mod_foe_tools.remap("/marko$4.7.4/dist/taglibs/async/await-reorderer-tag","/marko$4.7.4/dist/taglibs/async/noop-render");
$_mod_foe_tools.def("/marko$4.7.4/dist/taglibs/async/noop-render",function(o,n,t,e,s){t.exports=function(o,n){}});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/site-layout/favicon.png",{url:"/favicon-38fce9d3.png",width:16,height:16});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/site-layout/logo.png",{url:"/logo-256f79d2.png",width:744,height:838});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/components/site-layout/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.7.4/dist/vdom'/*"marko/dist/vdom"*/).t(),
    components_helpers = require('/marko$4.7.4/dist/components/helpers-browser'/*"marko/dist/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/foe-tools$1.3.2/src/components/site-layout/index.marko", function() {
      return module.exports;
    }),
    marko_component = require('/foe-tools$1.3.2/src/components/site-layout/component'/*"./component"*/),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_i18next_module = require('/foe-tools$1.3.2/src/services/i18next'/*"~/src/services/i18next"*/),
    i18next_module = module_i18next_module.default || module_i18next_module,
    i18next = module_i18next_module.i18next,
    marko_helpers = require('/marko$4.7.4/dist/runtime/vdom/helpers'/*"marko/dist/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require('/marko$4.7.4/dist/taglibs/core/include-tag'/*"marko/dist/taglibs/core/include-tag"*/)),
    lasso_head_tag = marko_loadTag(require('/lasso$2.11.23/taglib/noop-render'/*"lasso/taglib/head-tag"*/)),
    asset_var_tag = marko_loadTag(require('/marko-magic$1.0.0/components/asset-var/renderer.browser'/*"marko-magic/components/asset-var/renderer"*/)),
    component_globals_tag = marko_loadTag(require('/marko$4.7.4/dist/components/taglib/component-globals-tag-browser'/*"marko/dist/components/taglib/component-globals-tag"*/)),
    marko_forEach = marko_helpers.f,
    marko_classAttr = marko_helpers.ca,
    language_selector_template = require('/foe-tools$1.3.2/src/components/site-layout/components/language-selector/index.marko'/*"./components/language-selector"*/),
    language_selector_tag = marko_loadTag(language_selector_template),
    lasso_body_tag = marko_loadTag(require('/lasso$2.11.23/taglib/noop-render'/*"lasso/taglib/body-tag"*/)),
    browser_refresh_tag = marko_loadTag(require('/browser-refresh-taglib$1.1.0/refresh-tag'/*"browser-refresh-taglib/refresh-tag"*/)),
    init_components_tag = marko_loadTag(require('/marko$4.7.4/dist/components/taglib/init-components-tag-browser'/*"marko/dist/components/taglib/init-components-tag"*/)),
    await_reorderer_tag = marko_loadTag(require('/marko$4.7.4/dist/taglibs/async/noop-render'/*"marko/dist/taglibs/async/await-reorderer-tag"*/)),
    marko_str = marko_helpers.s,
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("b20003"),
    marko_node0 = marko_createElement("META", {
        charset: "utf-8"
      }, "2", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node1 = marko_createElement("META", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, "3", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node2 = marko_createElement("LINK", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }, "6", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node3 = marko_createElement("LINK", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css"
      }, "7", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_attrs0 = {
        "class": "navbar is-transparent"
      },
    marko_attrs1 = {
        "class": "navbar-brand"
      },
    marko_attrs2 = {
        "class": "navbar-item",
        href: "/"
      },
    marko_node4 = marko_createElement("DIV", {
        "data-target": "mainNavbar",
        "class": "navbar-burger burger"
      }, "18", null, 3, 0, {
        i: marko_const_nextId()
      })
      .e("SPAN", null, "19", null, 0)
      .e("SPAN", null, "20", null, 0)
      .e("SPAN", null, "21", null, 0),
    marko_attrs3 = {
        "class": "navbar-menu",
        id: "mainNavbar"
      },
    marko_attrs4 = {
        "class": "navbar-start"
      },
    marko_attrs5 = {
        "class": "navbar-end"
      },
    marko_attrs6 = {
        "class": "navbar-item"
      },
    marko_node5 = marko_createElement("DIV", {
        "class": "navbar-item"
      }, "28", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "field is-grouped"
        }, "29", null, 1)
        .e("P", {
            "class": "control"
          }, "30", null, 1)
          .e("A", {
              href: "https://github.com/FOE-Tools/FOE-Tools.github.io",
              "class": "button"
            }, "31", null, 2)
            .e("SPAN", {
                "class": "icon"
              }, "32", null, 1)
              .e("I", {
                  "class": "fa fa-github"
                }, "33", null, 0)
            .e("SPAN", null, "34", null, 1)
              .t("GitHub"),
    marko_attrs7 = {
        "class": "hero is-light"
      },
    marko_attrs8 = {
        "class": "hero-body"
      },
    marko_attrs9 = {
        "class": "container"
      },
    marko_attrs10 = {
        "class": "columns"
      },
    marko_attrs11 = {
        "class": "column is-8-desktop is-offset-2-desktop"
      },
    marko_attrs12 = {
        "class": "section"
      },
    marko_attrs13 = {
        "class": "container"
      },
    marko_attrs14 = {
        "class": "columns"
      },
    marko_attrs15 = {
        "class": "column is-8-desktop is-offset-2-desktop"
      },
    marko_attrs16 = {
        "class": "content"
      },
    marko_attrs17 = {
        "class": "footer has-text-centered"
      },
    marko_attrs18 = {
        "class": "container"
      },
    marko_attrs19 = {
        "class": "columns"
      },
    marko_attrs20 = {
        "class": "column is-8-desktop is-offset-2-desktop"
      },
    marko_attrs21 = {
        href: "/about"
      },
    marko_attrs22 = {
        "class": "title is-2 is-spaced"
      },
    marko_attrs23 = {
        "class": "subtitle is-4"
      };

function render(input, out, __component, component, state) {
  var data = input;

  global.i18n = function (key, param) {
     return i18next.t(key, param || {});
  }

  global.changeLanguage = function (lng, callback) {
     i18next.changeLanguage(lng, callback);
  }

  global.language = function () {
     return i18next.language;
  }

  global.languages = function () {
     return i18next.languages;
  }

  let i18nPrefix = 'components.site_layout.';

  out.be("HTML", {
      lang: marko_str(global.language())
    }, "0", component);

  out.be("HEAD", null, "1", component);

  out.n(marko_node0, component);

  out.n(marko_node1, component);

  out.be("TITLE", null, "4", component);

  include_tag({
      _target: input.title
    }, out, __component, "5");

  out.ee();

  out.n(marko_node2, component);

  out.n(marko_node3, component);

  lasso_head_tag({}, out, __component, "8");

  asset_var_tag({
      values: [
          require.resolve('/foe-tools$1.3.2/src/components/site-layout/favicon.png'/*"./favicon.png"*/)
        ],
      renderBody: function renderBody(out, __href) {
        out.e("LINK", {
            rel: "icon",
            type: "image/png",
            href: __href.url
          }, "9", component, 0);
      }
    }, out, __component, "62");

  if (input.style) {
    include_tag({
        _target: input.style
      }, out, __component, "10");
  }

  lasso_head_tag({}, out, __component, "11");

  out.ee();

  out.be("BODY", null, "12", component);

  component_globals_tag({}, out);

  out.be("HEADER", null, "13", component);

  out.be("NAV", marko_attrs0, "14", component);

  out.be("DIV", marko_attrs1, "15", component);

  out.be("A", marko_attrs2, "16", component);

  asset_var_tag({
      values: [
          require.resolve('/foe-tools$1.3.2/src/components/site-layout/logo.png'/*"./logo.png"*/)
        ],
      renderBody: function renderBody(out, __src) {
        out.e("IMG", {
            src: __src.url,
            alt: "FOE-Tools logo",
            width: "28",
            height: "28"
          }, "17", component, 0);
      }
    }, out, __component, "63");

  out.ee();

  out.n(marko_node4, component);

  out.ee();

  out.be("DIV", marko_attrs3, "22", component);

  out.be("DIV", marko_attrs4, "23", component);

  marko_forEach(state.navbar_link, function(url_data) {
    out.e("A", {
        "class": marko_classAttr([
            "navbar-item",
            (input.currentLocation && (input.currentLocation == url_data.key)) && "is-active"
          ]),
        href: url_data.link
      }, "24", component, 1)
      .t(global.i18n("main_menu." + url_data.key));
  });

  out.ee();

  out.be("DIV", marko_attrs5, "25", component);

  out.be("DIV", marko_attrs6, "26", component);

  language_selector_tag({}, out, __component, "27");

  out.ee();

  out.n(marko_node5, component);

  out.ee();

  out.ee();

  out.ee();

  out.ee();

  out.be("SECTION", marko_attrs7, "35", component);

  out.be("DIV", marko_attrs8, "36", component);

  out.be("DIV", marko_attrs9, "37", component);

  out.be("DIV", marko_attrs10, "38", component);

  out.be("DIV", marko_attrs11, "39", component);

  if (input.hero) {
    include_tag({
        _target: input.hero
      }, out, __component, "40");
  } else {
    out.e("H1", marko_attrs22, "41", component, 1)
      .t(global.i18n(i18nPrefix + "hero.title"));

    out.be("H2", marko_attrs23, "42", component);

    out.h(global.i18n(i18nPrefix + "hero.slogan_html"));

    out.ee();
  }

  out.ee();

  out.ee();

  out.ee();

  out.ee();

  out.ee();

  out.be("SECTION", marko_attrs12, "43", component);

  out.be("DIV", marko_attrs13, "44", component);

  out.be("DIV", marko_attrs14, "45", component);

  out.be("DIV", marko_attrs15, "46", component);

  out.be("DIV", marko_attrs16, "47", component);

  include_tag({
      _target: input.content
    }, out, __component, "48");

  out.ee();

  out.ee();

  out.ee();

  out.ee();

  out.ee();

  out.be("FOOTER", marko_attrs17, "49", component);

  out.be("DIV", marko_attrs18, "50", component);

  out.be("DIV", marko_attrs19, "51", component);

  out.be("DIV", marko_attrs20, "52", component);

  out.e("A", marko_attrs21, "53", component, 1)
    .t(global.i18n("footer_menu.about"));

  out.be("P", null, "54", component);

  out.be("SMALL", null, "55", component);

  out.h(global.i18n(i18nPrefix + "footer.license_html"));

  out.ee();

  out.ee();

  out.e("P", null, "56", component, 1)
    .t(global.i18n(i18nPrefix + "footer.version", {
        version: state.site_version
      }));

  out.ee();

  out.ee();

  out.ee();

  out.ee();

  lasso_body_tag({}, out, __component, "57");

  if (input.script) {
    include_tag({
        _target: input.script
      }, out, __component, "58");
  }

  browser_refresh_tag({}, out, __component, "59");

  lasso_body_tag({}, out, __component, "60");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "61");

  out.ee();

  out.ee();
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});
$_mod_foe_tools.def("/foe-tools$1.3.2/src/routes/gb-investment/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.7.4/dist/vdom'/*"marko/dist/vdom"*/).t(),
    components_helpers = require('/marko$4.7.4/dist/components/helpers-browser'/*"marko/dist/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/foe-tools$1.3.2/src/routes/gb-investment/index.marko", function() {
      return module.exports;
    }),
    marko_component = require('/foe-tools$1.3.2/src/routes/gb-investment/component'/*"./component"*/),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    gb_investment_template = require('/foe-tools$1.3.2/src/components/gb-investment/index.marko'/*"../../components/gb-investment"*/),
    marko_helpers = require('/marko$4.7.4/dist/runtime/vdom/helpers'/*"marko/dist/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    gb_investment_tag = marko_loadTag(gb_investment_template),
    site_layout_template = require('/foe-tools$1.3.2/src/components/site-layout/index.marko'/*"../../components/site-layout"*/),
    site_layout_tag = marko_loadTag(site_layout_template),
    marko_attrs0 = {
        "class": "title is-2 is-spaced"
      },
    marko_attrs1 = {
        "class": "subtitle is-4"
      };

function render(input, out, __component, component, state) {
  var data = input;

  let i18nPrefix = 'routes.gb_investment.';

  site_layout_tag({
      currentLocation: "gb_investment",
      title: {
          renderBody: function renderBody(out) {
            out.t(global.i18n(i18nPrefix + "title", {
                gb_key: "foe_data.gb." + input.params.gb
              }));
          }
        },
      hero: {
          renderBody: function renderBody(out) {
            out.e("H1", marko_attrs0, "3", component, 1)
              .t(global.i18n(i18nPrefix + "hero.title", {
                  gb_key: "foe_data.gb." + input.params.gb
                }));

            out.e("H2", marko_attrs1, "4", component, 1)
              .t(global.i18n("routes.gb_investment_gb_chooser.hero.subtitle"));
          }
        },
      content: {
          renderBody: function renderBody(out) {
            gb_investment_tag({
                gb: input.params.gb,
                query: input.query
              }, out, __component, "6");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    _l_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});