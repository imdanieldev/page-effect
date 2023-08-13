(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
<div class="w-full min-h-screen bg-blue-500" id="blue"></div>
<div class="w-full min-h-screen bg-green-500" id="green"></div>
<div class="w-full min-h-screen bg-red-500" id="red"></div>
<div class="w-full min-h-screen bg-yellow-500" id="yellow"></div>
<div class="w-full min-h-screen bg-white" id="white"></div>
<div class="w-full h-screen fixed left-0 top-0 flex flex-col justify-center items-center">
<h1 class="text-2xl md:text-6xl text-center mb-5">Hi i'm Daniel</h1>
<div class="flex justify-around flex-wrap items-center w-full mt-8" id="colors">
<div class="rounded-full w-12 h-12 bg-blue-500 cursor-pointer" id="bluebtn"></div>
<div class="rounded-full w-12 h-12 bg-green-500 cursor-pointer" id="greenbtn"></div>
<div class="rounded-full w-12 h-12 bg-red-500 cursor-pointer" id="redbtn"></div>
<div class="rounded-full w-12 h-12 bg-yellow-500 cursor-pointer" id="yellowbtn"></div>
<div class="rounded-full w-12 h-12 bg-white cursor-pointer" id="whitebtn"></div>
</div>
</div>
`;let o=document.querySelector("#blue"),u=document.querySelector("#green"),f=document.querySelector("#red"),n=document.querySelector("#yellow"),c=document.querySelector("#white"),a=document.querySelector("#bluebtn"),w=document.querySelector("#greenbtn"),m=document.querySelector("#redbtn"),d=document.querySelector("#yellowbtn"),b=document.querySelector("#whitebtn");a.addEventListener("click",()=>{o.scrollIntoView()});w.addEventListener("click",()=>{u.scrollIntoView()});m.addEventListener("click",()=>{f.scrollIntoView()});d.addEventListener("click",()=>{n.scrollIntoView()});d.addEventListener("click",()=>{n.scrollIntoView()});b.addEventListener("click",()=>{c.scrollIntoView()});window.addEventListener("load",()=>{document.querySelector("#colors").classList.add("none"),o.scrollIntoView(),setTimeout(()=>{c.scrollIntoView()},1e3),setTimeout(()=>{o.scrollIntoView()},4e3),setTimeout(()=>{document.querySelector("#colors").classList.remove("none")},7e3)});
