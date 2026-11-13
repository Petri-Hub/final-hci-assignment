(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var App=window.App={$:$,fmt:function(n){return n.toLocaleString('pt-BR')},esc:function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}};
var toast=$('#toast'),tm;
App.say=function(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tm);tm=setTimeout(function(){toast.classList.remove('on')},2600)};
function load(){try{return JSON.parse(sessionStorage.getItem('sel')||'[]')}catch(e){return[]}}
function save(a){try{sessionStorage.setItem('sel',JSON.stringify(a))}catch(e){}}
App.cart={has:function(id){return load().indexOf(id)>-1},count:function(){return load().length},
 toggle:function(id){var a=load(),i=a.indexOf(id);if(i>-1)a.splice(i,1);else a.push(id);save(a);App.cart.render();return i===-1}};
App.cart.render=function(){var n=App.cart.count(),c=$('#cart');if(c)c.textContent=n;};
App.cart.render();
$('#theme').addEventListener('click',function(){var r=document.documentElement,n=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}});
var faq=$('#faq');$('#help').addEventListener('click',function(){faq.showModal?faq.showModal():faq.setAttribute('open','')});
$('#faq-x').addEventListener('click',function(){faq.close()});faq.addEventListener('click',function(e){if(e.target===faq)faq.close()});
var s=$('#search');if(s)s.addEventListener('submit',function(e){e.preventDefault();var v=($('#q').value||'').trim();
 if(!v||/romance/i.test(v))location.href='resultados.html?q=romance'+(location.search.indexOf('disp=1')>-1?'&disp=1':'');else App.say('No protótipo, só a busca “romance” está pronta.')});
document.addEventListener('click',function(e){
 var a=e.target.closest('[data-say]');if(a){e.preventDefault();App.say(a.getAttribute('data-say'));return}
 if(e.target.closest('[data-faq]')){e.preventDefault();$('#help').click();return}
 var h=e.target.closest('a[href="#"]');if(h){e.preventDefault();App.say('Protótipo: esta ação não faz nada.')}
});
})();
