!function(){"use strict";const e=document.getElementById("form-calculadora"),t=document.getElementById("capital-acumulado"),i=document.getElementById("rentabilidade-de-investimentos"),a=document.getElementById("tempo-anos"),n=document.getElementById("aporte-mensal"),l=document.getElementById("telefone-calculadora"),r=document.getElementById("nome-calculadora"),s=document.getElementById("valorCalculadora");document.getElementById("calculadora-submit");var c=[t,i,a,n,l,r];const o=document.getElementById("toggle-icon"),d=document.getElementById("overlay"),u=document.getElementById("menu"),m=document.getElementsByTagName("body")[0],b=document.querySelector("#texto-container"),y=document.querySelector(".overlay-texto"),v=(document.getElementById("btn-leia-mais"),document.querySelector("#informes-nav")),g=document.querySelector("#ferramentas-nav");if(document.getElementById("no-exist"),e.addEventListener("submit",(function(e){!function(){let e=!0;for(let t=0;t<c.length;t++)0==(0!==c[t].value.length)?(c[t].previousSibling.style.color="#990000",e=!1):c[t].previousSibling.style.color="#000000";return e}()?console.log("else"):(console.log("if"),function(){a.value<0&&(a.value=0);var e=t.value,l=12*a.value,r=i.value/100,c=Math.pow(1+r,1/12)-1,o=n.value,d=Math.pow(1+c,l);s.innerText="R$ "+Math.round(100*(e*d+o*(d-1)/c))/100}()),e.preventDefault()})),window.mascara=function(e){e.value=e.value.str.replaceAll(".","").toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,".")},document.querySelectorAll(".lista-noticia-compartilhar")&&document.querySelectorAll(".lista-noticia-compartilhar").forEach((e=>{e.addEventListener("click",(t=>{e.classList.toggle("active")}))})),document.getElementById("btn-leia-mais")){const E=document.getElementById("btn-leia-mais");function f(){b.style.height="auto",y.style.display="none",E.style.display="none"}E.addEventListener("click",f),(b.innerText.length<426||screen.width>=1024)&&(b.style.height="auto",y.style.display="none",E.style.display="none")}function p(){u.classList.remove("active"),d.style.visibility="hidden",m.style.overflow="visible",o.setAttribute("aria-expanded","false"),o.setAttribute("aria-label","Abrir menu")}v.addEventListener("click",(e=>{v.classList.contains("active")?(v.classList.remove("active"),v.setAttribute("aria-expanded","false"),v.setAttribute("aria-label","Abrir submenu"),v.nextElementSibling.style.marginTop="0rem",d.style.visibility="hidden"):(v.classList.add("active"),v.setAttribute("aria-expanded","true"),v.setAttribute("aria-label","Fechar submenu"),d.style.visibility="visible",screen.width<1279&&(v.nextElementSibling.style.marginTop="8.25rem"))})),g.addEventListener("click",(e=>{g.classList.contains("active-ferramentas")?(g.classList.remove("active-ferramentas"),g.nextElementSibling.style.marginTop="0rem",g.setAttribute("aria-expanded","false"),g.setAttribute("aria-label","Abrir submenu"),d.style.visibility="hidden"):(g.setAttribute("aria-expanded","true"),g.setAttribute("aria-label","Fechar submenu"),g.classList.add("active-ferramentas"),d.style.visibility="visible",screen.width<1279&&(g.nextElementSibling.style.marginTop="26.5rem"))})),o.addEventListener("click",(function(e){u.classList.contains("active")?p():(o.setAttribute("aria-expanded","true"),o.setAttribute("aria-label","Fechar menu"),d.style.visibility="visible",u.classList.add("active"),m.style.overflow="hidden",e.currentTarget.setAttribute("aria-expanded","true"),o.setAttribute("aria-label","Fechar menu"))})),d.addEventListener("click",(function(e){p(),v.classList.remove("active"),v.setAttribute("aria-expanded","false"),v.setAttribute("aria-label","Abrir submenu"),v.nextElementSibling.style.marginTop="0rem",g.classList.remove("active-ferramentas"),g.nextElementSibling.style.marginTop="0rem",g.setAttribute("aria-expanded","false"),g.setAttribute("aria-label","Abrir submenu")}))}();
//# sourceMappingURL=bundle.js.map
