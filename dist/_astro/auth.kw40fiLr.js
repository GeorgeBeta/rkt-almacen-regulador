import{r as p}from"./index.CVf8TyFT.js";var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=p,c=Symbol.for("react.element"),m=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,y=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(r,e,u){var t,o={},s=null,f=null;u!==void 0&&(s=""+u),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(f=e.ref);for(t in e)S.call(e,t)&&!d.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:c,type:r,key:s,ref:f,props:o,_owner:y.current}}n.Fragment=m;n.jsx=a;n.jsxs=a;l.exports=n;var x=l.exports;const i="rkt-session";function O(r){localStorage.setItem(i,JSON.stringify(r))}function E(){if(typeof window>"u")return null;const r=localStorage.getItem(i);return r?JSON.parse(r):null}function g(){localStorage.removeItem(i)}export{g as c,E as g,x as j,O as s};
