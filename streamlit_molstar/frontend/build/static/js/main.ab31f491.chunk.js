/*! For license information please see main.ab31f491.chunk.js.LICENSE.txt */
(this["webpackJsonpstreamlit-molstar"]=this["webpackJsonpstreamlit-molstar"]||[]).push([[0],{360:function(t,e,r){t.exports=r(380)},379:function(t,e,r){},380:function(t,e,r){"use strict";r.r(e);var n=r(85),a=r.n(n),o=r(354),i=r.n(o),c=r(11),l=r(12),u=r(16),s=r(17),d=r(352),f=r(353),h=r(46),p=r(306),m=r(359),v=r(257),y=r(28),b=r(76),w=(r(378),r(2)),g=r(191);function x(){x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new O(a||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var d={};function f(){}function h(){}function p(){}var m={};l(m,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==e&&r.call(y,o)&&(m=y);var b=p.prototype=f.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e((function(a,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return F()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:void 0,done:!0}}return h.prototype=p,n(b,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(g.prototype),l(g.prototype,i,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new g(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),l(b,c,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}var E=function(){var t=Object(h.a)(x().mark((function t(e,r){var n,a,o,i,c,l,u,s,d,f,h;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.kind,r.url,r.format,r.isBinary,e){t.next=3;break}return t.abrupt("return");case 3:if("model-data"!==r.model.kind&&"model-url"!==r.model.kind){t.next=22;break}if("model-data"!==r.model.kind){t.next=10;break}return t.next=7,e.builders.data.rawData({data:r.model.data,label:r.modelLabel});case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,e.builders.data.download({url:r.model.url,isBinary:r.model.isBinary,label:r.modelLabel});case 12:t.t0=t.sent;case 13:return i=t.t0,t.next=16,e.builders.structure.parseTrajectory(i,null!==(o=r.model.format)&&void 0!==o?o:"mmcif");case 16:return c=t.sent,t.next=19,e.builders.structure.createModel(c);case 19:n=t.sent,t.next=36;break;case 22:if("topology-data"!==r.model.kind){t.next=28;break}return t.next=25,e.builders.data.rawData({data:r.model.data,label:r.modelLabel});case 25:t.t1=t.sent,t.next=31;break;case 28:return t.next=30,e.builders.data.download({url:r.model.url,isBinary:r.model.isBinary,label:r.modelLabel});case 30:t.t1=t.sent;case 31:return l=t.t1,u=e.dataFormats.get(r.model.format),t.next=35,u.parse(e,l);case 35:n=t.sent;case 36:if("coordinates-data"!==r.coordinates.kind){t.next=42;break}return t.next=39,e.builders.data.rawData({data:r.coordinates.data,label:r.coordinatesLabel});case 39:t.t2=t.sent,t.next=45;break;case 42:return t.next=44,e.builders.data.download({url:r.coordinates.url,isBinary:r.coordinates.isBinary,label:r.coordinatesLabel});case 44:t.t2=t.sent;case 45:return s=t.t2,d=e.dataFormats.get(r.coordinates.format),t.next=49,d.parse(e,s);case 49:return a=t.sent,t.next=52,e.build().toRoot().apply(v.TrajectoryFromModelAndCoordinates,{modelRef:n.ref,coordinatesRef:a.ref},{dependsOn:[n.ref,a.ref]}).apply(y.a.Model.ModelFromTrajectory,{modelIndex:0}).commit();case 52:return f=t.sent,t.next=55,e.builders.structure.createStructure(f);case 55:return h=t.sent,t.next=58,e.builders.structure.representation.applyPreset(h,"auto");case 58:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),j=function(t){var e=t.modelFile,r=t.trajFile,o=t.height,i=void 0===o?"100%":o,c=t.width,l=void 0===c?"100%":c,u=t.showAxes,s=void 0===u||u,d=t.defaultShowControls,f=void 0!==d&&d,v=t.showExpand,y=void 0===v||v,j=t.showControls,k=void 0===j||j,L=t.showSettings,O=void 0===L||L,S=t.showSelectionMode,F=void 0===S||S,_=t.showAnimation,P=void 0!==_&&_,T=t.showTrajectoryControls,N=void 0===T||T,B=Object(n.useRef)(null),G=(Object(n.useRef)(null),Object(n.useRef)(null));Object(n.useEffect)((function(){return Object(h.a)(x().mark((function t(){var n,a;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=Object(p.a)()).layout={initial:{isExpanded:!1,controlsDisplay:"reactive",showControls:f}},n.config=[[b.a.Viewport.ShowExpand,y],[b.a.Viewport.ShowControls,k],[b.a.Viewport.ShowSettings,O],[b.a.Viewport.ShowSelectionMode,F],[b.a.Viewport.ShowAnimation,P],[b.a.Viewport.ShowTrajectoryControls,N]],t.next=5,Object(m.a)(B.current,n);case 5:return G.current=t.sent,s||null===(a=G.current.canvas3d)||void 0===a||a.setProps({camera:{helper:{axes:{name:"off",params:{}}}}}),t.next=9,C(e,r,G.current);case 9:case"end":return t.stop()}}),t)})))(),function(){return G.current=null}}),[]),Object(n.useEffect)((function(){C(e,r,G.current)}),[e,r]),Object(n.useEffect)((function(){var t,e;G.current&&(s?null===(t=G.current.canvas3d)||void 0===t||t.setProps({camera:{helper:{axes:w.a.getDefaultValues(g.b).axes}}}):null===(e=G.current.canvas3d)||void 0===e||e.setProps({camera:{helper:{axes:{name:"off",params:{}}}}}))}),[s]);var C=function(){var t=Object(h.a)(x().mark((function t(e,r,n){var a,o,i,c,l;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=27;break}if(n.clear(),!r){t.next=7;break}return t.next=5,E(n,{model:{kind:e.url?"model-url":"model-data",url:e.url?e.url:void 0,data:e.data?e.data:void 0,format:e.format},coordinates:{kind:r.url?"coordinates-url":"coordinates-data",url:r.url?r.url:void 0,data:r.data?r.data:void 0,format:r.format,isBinary:!0},preset:"all-models"});case 5:t.next=27;break;case 7:if(!e.data){t.next=18;break}return t.next=10,n.builders.data.rawData({data:e.data});case 10:return a=t.sent,t.next=13,n.builders.structure.parseTrajectory(a,e.format);case 13:return o=t.sent,t.next=16,n.builders.structure.hierarchy.applyPreset(o,"default");case 16:t.next=27;break;case 18:return t.next=20,n.builders.data.download({url:e.url},{state:{isGhost:!0}});case 20:return i=t.sent,c=e.format.replace("cif","mmcif"),t.next=24,n.builders.structure.parseTrajectory(i,c);case 24:return l=t.sent,t.next=27,n.builders.structure.hierarchy.applyPreset(l,"default");case 27:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}();return a.a.createElement("div",{style:{position:"absolute",width:l,height:i,overflow:"hidden"}},a.a.createElement("div",{ref:B,style:{position:"absolute",left:0,top:0,right:0,bottom:0}}))},k=(r(379),function(t){var e=Object(f.b)();return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"fullscreen-button",onClick:e.enter},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null)),a.a.createElement(f.a,{className:"myfullscreen",handle:e},t.children))}),L=function(t){Object(u.a)(r,t);var e=Object(s.a)(r);function r(){var t;Object(l.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).render=function(){var e=t.props.args.height,r=t.props.args.modelFile,n=t.props.args.trajFile;return r.data&&(r.data=t.props.args.modelFile_data),n&&n.data&&(n.data=t.props.args.trajFile_data),a.a.createElement("div",{style:{height:e}},a.a.createElement(k,null,a.a.createElement(j,{modelFile:r,trajFile:n,showExpand:!1})))},t}return Object(c.a)(r)}(d.a),O=Object(d.b)(L);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)),document.getElementById("root"))}},[[360,1,2]]]);
//# sourceMappingURL=main.ab31f491.chunk.js.map