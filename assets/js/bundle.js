!function(){"use strict";document.getElementById("form-calculadora"),document.getElementById("capital-acumulado"),document.getElementById("rentabilidade-de-investimentos"),document.getElementById("tempo-anos"),document.getElementById("aporte-mensal"),document.getElementById("telefone-calculadora"),document.getElementById("nome-calculadora"),document.getElementById("valorCalculadora"),document.getElementById("calculadora-submit");var e=document.getElementById("toggle-icon"),t=document.getElementById("overlay"),i=document.getElementById("menu"),a=document.getElementsByTagName("body")[0],n=document.querySelector("#texto-container"),l=document.querySelector(".overlay-texto"),s=(document.getElementById("btn-leia-mais"),document.querySelector("#informes-nav")),r=document.querySelector("#ferramentas-nav");if(document.getElementById("no-exist"),document.querySelectorAll(".lista-noticia-compartilhar")&&document.querySelectorAll(".lista-noticia-compartilhar").forEach((function(e){e.addEventListener("click",(function(t){e.classList.toggle("active")}))})),document.getElementById("btn-leia-mais")){var c=document.getElementById("btn-leia-mais");c.addEventListener("click",(function(){n.style.height="auto",l.style.display="none",c.style.display="none"})),(n.innerText.length<426||screen.width>=1024)&&(n.style.height="auto",l.style.display="none",c.style.display="none")}function d(){i.classList.remove("active"),t.style.visibility="hidden",a.style.overflow="visible",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Abrir menu")}s.addEventListener("click",(function(e){s.classList.contains("active")?(s.classList.remove("active"),s.setAttribute("aria-expanded","false"),s.setAttribute("aria-label","Abrir submenu"),s.nextElementSibling.style.marginTop="0rem",t.style.visibility="hidden"):(s.classList.add("active"),s.setAttribute("aria-expanded","true"),s.setAttribute("aria-label","Fechar submenu"),t.style.visibility="visible",screen.width<1279&&(s.nextElementSibling.style.marginTop="8.25rem"))})),r.addEventListener("click",(function(e){r.classList.contains("active-ferramentas")?(r.classList.remove("active-ferramentas"),r.nextElementSibling.style.marginTop="0rem",r.setAttribute("aria-expanded","false"),r.setAttribute("aria-label","Abrir submenu"),t.style.visibility="hidden"):(r.setAttribute("aria-expanded","true"),r.setAttribute("aria-label","Fechar submenu"),r.classList.add("active-ferramentas"),t.style.visibility="visible",screen.width<1279&&(r.nextElementSibling.style.marginTop="26.5rem"))})),e.addEventListener("click",(function(n){i.classList.contains("active")?d():(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Fechar menu"),t.style.visibility="visible",i.classList.add("active"),a.style.overflow="hidden",n.currentTarget.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Fechar menu"))})),t.addEventListener("click",(function(e){d(),s.classList.remove("active"),s.setAttribute("aria-expanded","false"),s.setAttribute("aria-label","Abrir submenu"),s.nextElementSibling.style.marginTop="0rem",r.classList.remove("active-ferramentas"),r.nextElementSibling.style.marginTop="0rem",r.setAttribute("aria-expanded","false"),r.setAttribute("aria-label","Abrir submenu")}))}();
//# sourceMappingURL=bundle.js.map