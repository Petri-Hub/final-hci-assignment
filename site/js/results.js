(function(){
var A=window.App,$=A.$,esc=A.esc,fmt=A.fmt,R=window.RES,rows=R.rows.slice();
var qs=location.search;if(qs.indexOf('disp=1')>-1)$('#onlyAvail').checked=true;
function norm(s){return s.replace(/^[^A-Za-zÀ-ú0-9]+/,'').toLowerCase()}
var sorters={rel:null,disp:function(a,b){return (b.d>0)-(a.d>0)},emp:function(a,b){return b.l-a.l},ano:function(a,b){return b.y-a.y},tit:function(a,b){return norm(a.t).localeCompare(norm(b.t),'pt-BR')}};
var labels={rel:'mais relevantes',disp:'disponíveis primeiro',emp:'mais emprestados',ano:'mais recentes',tit:'título (A–Z)'};
function item(r){
  var title=r.t,ok=r.d>0,sel=A.cart.has(r.id);
  var tag=(!ok||r.p)?'<span class="tags">'+(ok?'':'<span class="badge off">Indisponível</span>')+(r.p?'<span class="badge pop" title="Popular entre os leitores">★ Popular</span>':'')+'</span>':'';
  var cover=r.cover?'<div class="cover'+(ok?'':' off')+'"><img loading="lazy" src="assets/capas/'+r.id+'.webp" alt="Capa de '+esc(title)+'">'+tag+'</div>':'<div class="cover ph'+(ok?'':' off')+'"><span>'+esc(title)+'</span>'+tag+'</div>';
  var cnt=r.n>1?r.d+' de '+r.n+' exemplares':'';
  var av=ok?'<p class="avail ok"><b>✓ Disponível</b>'+(cnt?' <span>'+cnt+'</span>':'')+'</p>':(cnt?'<p class="avail"><span>'+cnt+'</span></p>':'');
  return '<li class="rc'+(ok?'':' is-off')+(sel?' is-sel':'')+'"><a class="rc-link" href="#" title="'+esc(title+' — '+r.a)+'" data-say="Aqui abriria a página de “'+esc(title)+'”.">'+cover+'<span class="info"><b title="'+esc(title)+'">'+esc(title)+'</b><small title="'+esc(r.a)+'">'+esc(r.a)+'</small></span></a>'+av+
   '<button type="button" class="sel-btn'+(sel?' on':'')+'" data-id="'+r.id+'" aria-pressed="'+sel+'">'+(sel?'✓ Selecionado':'+ Selecionar')+'<span class="sr"> '+esc(title)+'</span></button></li>'}
function render(){
  var k=$('#sort').value,only=$('#onlyAvail').checked,list=rows.slice();
  if(sorters[k])list.sort(function(a,b){return sorters[k](a,b)||rows.indexOf(a)-rows.indexOf(b)});
  var shown=only?list.filter(function(r){return r.d>0}):list;
  $('#list').innerHTML=shown.map(item).join('');
  $('#empty').hidden=shown.length>0;
  $('#sub').textContent='Exibindo '+shown.length+' de '+fmt(R.total)+(only?' · só disponíveis agora':'')+' · ordenados por '+labels[k]+'.';
}
$('#sort').addEventListener('change',render);
$('#onlyAvail').addEventListener('change',render);
$('#more').addEventListener('click',function(){A.say('Aqui carregaria mais resultados.')});
document.addEventListener('click',function(e){var b=e.target.closest('.sel-btn');if(!b)return;
  var id=b.getAttribute('data-id'),r=rows.filter(function(x){return x.id===id})[0],on=A.cart.toggle(id);
  b.classList.toggle('on',on);b.closest('.rc').classList.toggle('is-sel',on);b.setAttribute('aria-pressed',on);b.firstChild.nodeValue=on?'✓ Selecionado':'+ Selecionar';
  A.say('“'+r.t+'” '+(on?'foi adicionado à':'foi removido da')+' Minha seleção.')});
var f='';
Object.keys(R.facets).forEach(function(k){f+='<div class="fgroup"><h2>'+k+'</h2>'+R.facets[k].map(function(i){return '<label class="chk"><input type="checkbox" data-say="Aqui filtraria por “'+esc(i[0])+'”."> <span>'+esc(i[0])+'</span> <small>'+fmt(i[1])+'</small></label>'}).join('')+'</div>'});
$('#facets').innerHTML=f;
render();
})();
