import{d as x,r as F,c as C,a as p,b as l,w as v,v as A,u as c,i as k,F as B,e as D,f as b,g as m,t as h,p as V,h as E,o as f,n as L,j as I}from"./vendor.19e3a8fa.js";const N=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}};N();var O=(u,o)=>{const t=u.__vccOpts||u;for(const[r,e]of o)t[r]=e;return t};const S=u=>(V("data-v-10e00fed"),u=u(),E(),u),w={class:"main"},T=S(()=>l("h1",null,"\u{1F467}Christina's todolist",-1)),U={class:"content"},M={key:0},P=["onUpdate:modelValue"],j=["onClick"],q={key:1,class:"empty-todo"},z=m("\u5168\u9009\uFF1A"),K=x({setup(u){let o=F(""),t=F([{todo:"Christina \u5403\u996D",done:!0},{todo:"Christina \u7761\u89C9",done:!1},{todo:"Christina \u5B66\u4E60typescript",done:!1},{todo:"Christina \u5B66\u4E60vue3",done:!1}]);function r(){o.value&&(t.value.push({todo:o.value,done:!1}),o.value="")}function e(a){t.value.splice(a,1)}function n(){t.value=t.value.filter(a=>!a.done)}let i=C(()=>t.value.filter(a=>a.done).length),_=C({get(){return i.value===t.value.length},set(a){t.value.map(d=>{d.done=a})}});return(a,d)=>(f(),p("div",w,[T,l("div",U,[v(l("input",{type:"text",class:"input","onUpdate:modelValue":d[0]||(d[0]=s=>k(o)?o.value=s:o=s)},null,512),[[A,c(o)]]),l("button",{class:"btn",onClick:r},"\u6DFB\u52A0"),l("button",{class:"btn",onClick:n},"\u6E05\u7A7A"),c(t).length?(f(),p("ul",M,[(f(!0),p(B,null,D(c(t),(s,y)=>(f(),p("li",{key:y,class:L({done:s.done})},[v(l("input",{type:"checkbox","onUpdate:modelValue":g=>s.done=g},null,8,P),[[b,s.done]]),m(" "+h(s.todo)+" ",1),l("span",{onClick:g=>e(y),class:"delete"},"\u274C",8,j)],2))),128))])):(f(),p("div",q,"\u{1F600}\u{1F600}\u{1F600}\u5168\u90E8\u5B8C\u6210\u5566\uFF01\uFF01\uFF01")),l("div",null,[z,v(l("input",{type:"checkbox","onUpdate:modelValue":d[1]||(d[1]=s=>k(_)?_.value=s:_=s)},null,512),[[b,c(_)]]),m(" "+h(c(i))+" / "+h(c(t).length),1)])])]))}});var R=O(K,[["__scopeId","data-v-10e00fed"]]);I(R).mount("#app");
