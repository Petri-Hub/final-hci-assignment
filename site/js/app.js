(function(){
var D=window.DATA,A=window.App,$=A.$,fmt=A.fmt,esc=A.esc;
$('#tiles').innerHTML=D.temas.map(function(t){var go=t[0]==='Romance';return '<li class="tile"><a href="'+(go?'resultados.html?q=romance':'#')+'" title="'+esc(t[0])+': '+fmt(t[1])+' registros"'+(go?'':' data-say="Aqui abriria a lista de “'+esc(t[0])+'”."')+' style="background:'+t[2]+'"><b>'+esc(t[0])+'</b><span>'+fmt(t[1])+' registros</span></a></li>'}).join('');
$('#profiles').innerHTML=D.perfis.map(function(p){return '<article class="profile" style="--c:'+p.c+'"><h3>'+esc(p.t)+'</h3><p>'+esc(p.d)+'</p><ul class="chips">'+p.itens.map(function(i){return '<li><a class="chip" href="#" title="'+esc(i[0])+': '+fmt(i[1])+' registros" data-say="Aqui abriria a lista de “'+esc(i[0])+'”."><span>'+esc(i[0])+'</span><small>'+fmt(i[1])+'</small></a></li>'}).join('')+'</ul></article>'}).join('');
function book(b){
  var tags=(b.u||b.p)?'<span class="tags">'+(b.u?'<span class="badge off">Indisponível</span>':'')+(b.p?'<span class="badge pop" title="Popular entre os leitores">★ Popular</span>':'')+'</span>':'';
  var title=b.t.split(' : ')[0];
  var cover=b.cover!==false?'<div class="cover'+(b.u?' off':'')+'"><img loading="lazy" src="assets/capas/'+b.id+'.webp" alt="Capa de '+esc(b.t)+'">'+tags+'</div>':'<div class="cover ph'+(b.u?' off':'')+'"><span>'+esc(title)+'</span>'+tags+'</div>';
  return '<a class="book" href="#" title="'+esc(b.t+(b.a?' — '+b.a:''))+'" data-say="Aqui abriria a página de “'+esc(title)+'”."><span class="sr">Abrir </span>'+cover+'<div class="info"><b title="'+esc(b.t)+'">'+esc(title)+'</b><small title="'+esc(b.a||'')+'">'+esc(b.a||'')+'</small></div></a>'}
var P=D.prateleiras;
[['disp',P.disponiveis],['emp',P.emprestados],['novos',P.novos]].forEach(function(s){$('#rail-'+s[0]).innerHTML=s[1].map(book).join('')});
$('#topics').innerHTML=D.bolhas.slice(0,18).map(function(b){return '<li><a class="chip" href="#" style="--c:var(--brand)" title="'+esc(b[0])+': '+fmt(b[1])+' registros" data-say="Aqui abriria a lista de “'+esc(b[0])+'”."><span>'+esc(b[0])+'</span><small>'+fmt(b[1])+'</small></a></li>'}).join('');
document.addEventListener('click',function(e){var bt=e.target.closest('[data-r]');if(bt){var r=$('#rail-'+bt.getAttribute('data-r'));r.scrollBy({left:+bt.getAttribute('data-d')*r.clientWidth*.85,behavior:'smooth'})}});
(function(){
  var all=[].concat(P.disponiveis,P.emprestados,P.novos).filter(function(b){return !b.u});
  $('#surprise').addEventListener('click',function(){var b=all[Math.floor(Math.random()*all.length)];A.say('Surpresa: “'+b.t.split(' : ')[0]+'”'+(b.a?' — '+b.a.split(',').slice(0,2).join(','):'')+'. Aqui abriria a página do livro.')});
  var q=$('#q'),ph=['Busque por título, autor ou assunto','Ex.: Como eu era antes de você','Ex.: romance','Ex.: inteligência artificial','Ex.: Machado de Assis','Ex.: livros de psicologia'],i=0;
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  setInterval(function(){if(document.activeElement===q||q.value)return;q.classList.add('fade');setTimeout(function(){i=(i+1)%ph.length;q.placeholder=ph[i];q.classList.remove('fade')},260)},3200);
})();
})();
