!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}({1:function(e,t,n){"use strict";window.HTMLElement.prototype.on=function(e,t,n){let o=this;window.addEventListener?o.addEventListener(e,function(e){t.call(o,e)},n):o.attachEvent("on"+e,function(e){t.call(o,e)})},e.exports={loading:function(){document.getElementsByClassName("loading")[0].style.display="flex"},loaded:function(){document.getElementsByClassName("loading")[0].style.display="none"}}},5:function(e,t,n){const o=["brief","exp","skill","prod","motto"];let l=0;var c=null,i=!0;n(1);!function(){let e=document.getElementsByClassName("point");document.getElementsByClassName("point")[0].classList.add("pointActive"),Array.prototype.forEach.call(e,function(e,t){e.on("click",function(){let e=parseInt(this.getAttribute("data-index"));a(e)})}),document.addEventListener("DOMMouseScroll",function(e){e=e||window.event,s(e.detail>0)}),document.addEventListener("mousewheel",function(e){e=e||window.event,s(e.wheelDelta<0)},{passive:!0}),window.onscroll=function(){let e=document.documentElement.scrollTop,t=window.screen.height,n=document.getElementsByClassName("point");Array.prototype.forEach.call(n,function(n){let l=document.getElementById(o[n.getAttribute("data-index")]).offsetTop;l<e+.5*t&&l>=e?n.classList.add("pointActive"):n.classList.remove("pointActive")})}}();var s=function(e){i&&(i=!1,a(e?l<o.length-1?++l:o.length-1:l>0?--l:0))},a=function(e){document.getElementsByClassName("point");l=e;let t=document.getElementById(o[e]).offsetTop;r(t)},r=function(e){c&&clearInterval(c),c=setInterval(function(){let t=document.documentElement.scrollTop,n=parseInt(.01*window.screen.height);t>e&&(n=-n),t===e||Math.abs(t-e)<Math.abs(n)?(document.documentElement.scrollTop=e,clearInterval(c)):document.documentElement.scrollTop=t+n,i=!0},1)}}});