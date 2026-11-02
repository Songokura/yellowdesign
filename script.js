(function(){
'use strict';
var WA='77020387454';
var doc=document, root=doc.documentElement;
/* Тексты сообщений WhatsApp (русский; казахский и английский - в assets/lang) */
var W={
 "gen": "Здравствуйте! Хочу обсудить частный проект интерьера.",
 "proj": "Здравствуйте! Хочу обсудить проект, похожий на «{x}».",
 "srv": "Здравствуйте! Хочу узнать стоимость дизайн-проекта: {x}.",
 "tar": "Здравствуйте! Интересует тариф «{x}».",
 "nadzor": "Здравствуйте! Интересует авторский надзор, хочу узнать стоимость.",
 "form": "Здравствуйте! Заявка с сайта.\nИмя: {n}\nТелефон: {p}\nОбъект: {o}\nПлощадь: {a} м²",
 "quiz": "Здравствуйте! Мой паспорт интерьера: «{x}».\nПалитра: {c}\nТелефон: {p}\nХочу обсудить проект."
};
var WA_MAP={
hdr:['gen'],band:['gen'],menu:['gen'],hero:['gen'],mbar:['gen'],founder:['gen'],
proj_one:['proj','The ONE'],proj_dara:['proj','Dara Residence'],proj_vela:['proj','Vela Village'],proj_spa:['proj','SPA'],proj_park:['proj','Parkside'],
s_kv:['srv','s1_h'],s_ko:['srv','s2_h'],s_pe:['srv','s3_h'],s_co:['srv','s4_h'],s_of:['srv','s5_h'],
t_base:['tar','t1_h'],t_std:['tar','t2_h'],t_biz:['tar','t3_h'],t_nadzor:['nadzor']
};
/* ===== Квиз «Паспорт интерьера» (русский) ===== */
var P={"t":{"img":"q-t","proj":"ЖК Dara Residence","sw":["#E3DACD","#C8B9A3","#8F8374"],"pal":[["#F3EFE8","Молоко"],["#E3DACD","Лён"],["#C8B9A3","Песок"],["#8F8374","Тауп"],["#3A3530","Графит"]],"name":"Тихий свет","desc":"Светлый дом, в котором отдыхают глаза: мягкие оттенки, тактильные ткани и свет без резких теней.","recs":["Три сценария освещения - утро, работа, вечер - с регулировкой яркости.","Закрытые системы хранения от пола до потолка, на виду только избранные вещи.","Фактурные материалы - лён, шерсть, микроцемент - вместо декоративных предметов."]},"o":{"img":"q-o","proj":"ЖК The ONE","sw":["#D2B48C","#9A6B47","#6E7552"],"pal":[["#EFE6D8","Сливки"],["#D2B48C","Мёд"],["#9A6B47","Орех"],["#6E7552","Олива"],["#2F2620","Мокко"]],"name":"Тёплый очаг","desc":"Дом для большой семьи: тёплое дерево, просторная кухня-гостиная и общий стол для всех.","recs":["Кухня с островом как центр дома, обеденный стол на 8-10 мест.","Дерево в отделке пола и в мебели, износостойкие ткани для семьи с детьми.","Отдельный кабинет или библиотека для взрослых."]},"g":{"img":"q-g","proj":"Vela Village","sw":["#D8D7D2","#B08D57","#8B8A86"],"pal":[["#F5F4F1","Белый"],["#D8D7D2","Бетон"],["#8B8A86","Сталь"],["#262625","Уголь"],["#FFCD2A","Жёлтый"]],"name":"Чистая линия","desc":"Графичный контрастный интерьер: точная геометрия, минимум предметов и одна выразительная деталь.","recs":["Фасады без ручек, скрытые двери в цвет стен.","Один арт-объект на главной стене вместо множества мелкого декора.","Трековые светильники, которые легко перенастроить под новую расстановку мебели."]},"r":{"img":"q-r","proj":"ЖК Dara Residence","sw":["#D9CCB9","#B48F5E","#8C6F55"],"pal":[["#F2EDE5","Слоновая кость"],["#D9CCB9","Травертин"],["#B48F5E","Латунь"],["#5F4C3D","Каштан"],["#1E1C1A","Чёрный"]],"name":"Резиденция","desc":"Неоклассика: мрамор, латунь, молдинги и симметрия. Мебель и материалы, которые служат десятилетиями.","recs":["Симметричные композиции и молдинги, рассчитанные на высоту потолков.","Натуральный мрамор как акцент в одной-двух зонах.","Витрина или ниша с подсветкой для коллекции."]},"n":{"img":"q-n","proj":"SPA","sw":["#D5CCBC","#A4A58B","#7E6C58"],"pal":[["#EEEAE2","Туман"],["#D5CCBC","Камень"],["#A4A58B","Шалфей"],["#7E6C58","Глина"],["#3C3932","Базальт"]],"name":"Ретрит","desc":"Интерьер в духе SPA: камень, дерево, живые растения и мягкий тёплый свет.","recs":["Ванная как зона отдыха: тёплый пол, ниши и свет по периметру.","Фактурная штукатурка и камень вместо обоев.","Места для живых растений, заложенные в планировку."]},"k":{"img":"q-k","proj":"ЖК The ONE","sw":["#A9875E","#7A5A40","#C9B79C"],"pal":[["#E6DED2","Пергамент"],["#A9875E","Коньяк"],["#5B3F2C","Палисандр"],["#2E2622","Эспрессо"],["#141210","Ночь"]],"name":"Вечерний клуб","desc":"Глубокие тона, тёмное дерево, кожа и тёплый вечерний свет. Интерьер для работы и приёма гостей.","recs":["Стеновые панели из шпона тёмных пород.","Тёплый свет 2700 K: бра и торшеры вместо верхнего освещения.","Библиотека или бар как композиционный центр гостиной."]}};
/* Вопрос: [текст, ответы: [текст, профиль, второй профиль]] */
var QS=[["Идеальное утро выходного дня - это...",[["Тишина, кофе и книга, пока все спят","t"],["Большой завтрак со всей семьёй","o"],["Тренировка, а потом сразу дела","g"],["Долгий душ, уход и никуда не спешить","n"]]],["Вы вернулись домой после трудного дня. Что вам нужно в первую очередь?",[["Приглушённый свет и тишина","t","n"],["Голоса близких и запах ужина","o"],["Порядок: ничего лишнего на виду","g"],["Кресло, бокал и любимая музыка","k"]]],["Какой отпуск вы выберете?",[["Дом в горах с камином","o","n"],["Европейская столица: музеи, рестораны, архитектура","r","g"],["Спа-отель у моря","n","t"],["Новый город и плотная программа","g","k"]]],["Гости в вашем доме - это...",[["Часто и много, двери открыты","o"],["Редко и только самые близкие","t"],["Ужины с продуманной сервировкой","r"],["Деловые разговоры до ночи","k"]]],["Какая фактура приятнее на ощупь?",[["Лён и шерсть","t"],["Тёплое дерево","o"],["Гладкий камень и металл","g"],["Бархат и кожа","k","r"]]],["Как сейчас выглядит ваш рабочий стол?",[["Пустой: только ноутбук","g","t"],["Книги и заметки, но я знаю, где что","k"],["Цветы, свеча и красивые мелочи","r"],["Работаю там, где удобно: за столом, на диване, на кухне","o","n"]]],["Какое время суток - ваше?",[["Раннее утро","t"],["Солнечный полдень","o"],["Золотой час перед закатом","n","r"],["Поздний вечер","k","g"]]],["Вещи с историей в вашем доме - это...",[["Обязательно: семейные реликвии и антиквариат","r"],["Одна-две, как акцент","k"],["Предпочитаю новое и чистое","g"],["Важнее природные материалы: камень, дерево, растения","n"]]],["Какой звук у вас ассоциируется с домом?",[["Тишина","t"],["Смех детей и шум кухни","o"],["Джаз на виниле","k"],["Дождь и ветер в деревьях","n"]]],["Что вам не нравится в чужих интерьерах?",[["Перегруз и пестрота","t","g"],["Холодная гостиничная обстановка","o"],["Случайные вещи и дешёвые материалы","r"],["Мало света и воздуха","n"]]],["Как вы принимаете важные решения?",[["Долго взвешиваю, мне нужна ясность","t"],["Советуюсь с семьёй","o"],["Быстро и по фактам","g"],["Беру решение и ответственность на себя","k"]]],["Каким должен быть ваш дом через 10 лет?",[["Местом, где можно выдохнуть","t","n"],["Домом, где собирается вся семья","o"],["Отражением моего вкуса и статуса","r","k"],["Пространством, которое не надоест","g"]]]];
var CNT='Вопрос {i} из 12';

/* Словари kk и en лежат в assets/lang и грузятся только по выбору языка */
var ASSET_V=((doc.currentScript&&doc.currentScript.src.match(/[?&]v=([^&]+)/))||[])[1]||'';
var I18N={};
var lang='ru', RU={}, RUL={}, RUA={}, RU_META={t:doc.title,d:(doc.querySelector('meta[name="description"]')||{}).content||''};
function D(){return lang==='ru'?null:I18N[lang]}
function tv(k){var d=D();return d?(d.t[k]!=null?d.t[k]:RU[k]):RU[k]}
function wTpl(k){var d=D();return d?d.w[k]:W[k]}
function qText(i){var d=D();return d?d.qs[i][0]:QS[i][0]}
function aText(i,a){var d=D();return d?d.qs[i][1][a]:QS[i][1][a][0]}
function pv(k,f){var d=D();return d?d.p[k][f]:P[k][f]}
function palName(k,ix){var d=D();return d?d.p[k].pal[ix]:P[k].pal[ix][1]}
function loadLang(l,done){
  if(l==='ru'||I18N[l]) return done();
  var s=doc.createElement('script');
  s.src='assets/lang/'+l+'.js'+(ASSET_V?'?v='+ASSET_V:'');
  s.onload=function(){var d=l==='kk'?window.SITE_KK:window.SITE_EN; if(d) I18N[l]=d; done()};
  s.onerror=function(){done()};
  doc.head.appendChild(s);
}
function setLang(l){l=(l==='kk'||l==='en')?l:'ru'; loadLang(l,function(){applyLang((l==='ru'||I18N[l])?l:'ru')})}
function waUrl(txt){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(txt)}

function applyLang(l){
  lang=l;
  root.lang=lang;
  doc.querySelectorAll('[data-i]').forEach(function(el){var v=tv(el.getAttribute('data-i')); if(v!=null) el.textContent=v;});
  doc.querySelectorAll('[data-i-list]').forEach(function(ul){
    var k=ul.getAttribute('data-i-list'), d=D(), arr=d?d.t[k]:RUL[k];
    if(!arr) return;
    ul.innerHTML='';
    arr.forEach(function(t){var li=doc.createElement('li');li.textContent=t;ul.appendChild(li)});
  });
  doc.querySelectorAll('[data-i-aria]').forEach(function(el){
    var k=el.getAttribute('data-i-aria'), d=D();
    var v=d?d.t[k]:(RUA[k+'|'+(el.id||'')]||RU[k]);
    if(v) el.setAttribute('aria-label',v);
  });
  var d=D();
  doc.title=d?d.t.meta_title:RU_META.t;
  var md=doc.querySelector('meta[name="description"]'); if(md) md.setAttribute('content',d?d.t.meta_desc:RU_META.d);
  doc.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.lang===lang))});
  doc.querySelectorAll('[data-wa]').forEach(function(a){
    var m=WA_MAP[a.dataset.wa]||['gen'], x=m[1]||'';
    if(x&&RU[x]!=null) x=tv(x);
    a.href=waUrl(wTpl(m[0]).replace('{x}',x));
  });
  try{localStorage.setItem('yd-lang',lang)}catch(e){}
  if(Q) Q.render(true);
  if(HERO) HERO.repaint();
  if(PST) PST.repaint();
}

var Q=null;
function initQuiz(){
  var box=doc.querySelector('.qz'); if(!box) return;
  var grid=box.closest('.qz-grid')||box.parentNode, pass=grid.querySelector('.pass');
  var qEl=box.querySelector('.qz-q'), opts=box.querySelector('.qz-opts'), cnt=box.querySelector('.qz-count'),
      back=box.querySelector('.qz-back'), ask=box.querySelector('.qz-ask'),
      num=pass.querySelector('.pass-n b'), sw=pass.querySelector('.pass-sw'), res=box.querySelector('.qz-res');
  var ans=[], cur=0, i;
  for(i=0;i<12;i++) sw.appendChild(doc.createElement('span'));
  function color(qi,a){var o=QS[qi][1][a];return P[o[1]].sw[qi%3]}
  function paint(){
    var ss=sw.children, n=ans.filter(function(x){return x!=null}).length;
    /* До первого ответа показываем образец паспорта: палитра «Резиденции» и «Тёплого очага» */
    var smp=n===0, SM=['#F2EDE5','#D9CCB9','#B48F5E','#8C6F55','#5F4C3D','#2F2620','#D2B48C','#9A6B47','#6E7552','#E3DACD','#FFCD2A','#C8B9A3'];
    grid.classList.toggle('started',!smp);
    pass.classList.toggle('smp',smp);
    for(var j=0;j<12;j++){
      var on=ans[j]!=null, c=smp?SM[j]:(on?color(j,ans[j]):'');
      if(!smp&&on&&ss[j].style.backgroundColor===''){ss[j].classList.remove('pop');void ss[j].offsetWidth;ss[j].classList.add('pop')}
      if(smp||!on) ss[j].classList.remove('pop');
      ss[j].style.backgroundColor=c;
      ss[j].classList.toggle('f',!!c);
    }
    num.textContent=smp?'12':n;
  }
  function showQ(anim){
    var q=QS[cur], d=D();
    cnt.textContent=(d?d.cnt:CNT).replace('{i}',cur+1);
    qEl.textContent=qText(cur);
    opts.innerHTML='';
    q[1].forEach(function(o,ai){
      var b=doc.createElement('button'); b.type='button'; b.className='opt'+(ans[cur]===ai?' on':'');
      b.style.setProperty('--c',color(cur,ai));
      var fig=doc.createElement('span'); fig.className='opt-img'; fig.setAttribute('aria-hidden','true');
      var s=doc.createElement('span'); s.className='opt-t'; s.textContent=aText(cur,ai);
      b.appendChild(fig); b.appendChild(s);
      b.addEventListener('click',function(){pick(ai,b)});
      opts.appendChild(b);
    });
    back.disabled=cur===0;
    if(anim){ask.classList.remove('qz-swap');void ask.offsetWidth;ask.classList.add('qz-swap')}
  }
  var busy=false;
  function pick(ai,b){
    if(busy) return; busy=true;
    ans[cur]=ai; paint();
    opts.querySelectorAll('.opt').forEach(function(x){x.classList.toggle('on',x===b)});
    setTimeout(function(){
      busy=false;
      if(cur<11){cur++;showQ(true)} else {setTimeout(result,700)}
    },380);
  }
  back.addEventListener('click',function(){if(cur>0){cur--;showQ(true)}});
  function winner(){
    var sc={t:0,o:0,g:0,r:0,n:0,k:0}, last={};
    ans.forEach(function(a,qi){var o=QS[qi][1][a];sc[o[1]]+=2;last[o[1]]=qi;if(o[2]){sc[o[2]]+=1;last[o[2]]=Math.max(last[o[2]]||0,qi-.5)}});
    var best='t';
    Object.keys(sc).forEach(function(k){if(sc[k]>sc[best]||(sc[k]===sc[best]&&(last[k]||-1)>(last[best]||-1)))best=k});
    return best;
  }
  var prof=null;
  function fillRes(){
    var p=P[prof];
    res.querySelector('.res-name').textContent=pv(prof,'name');
    res.querySelector('.res-desc').textContent=pv(prof,'desc');
    var pal=res.querySelector('.res-pal'); pal.innerHTML='';
    p.pal.forEach(function(c,ix){
      var d=doc.createElement('div'), sq=doc.createElement('i'), b=doc.createElement('b'), sm=doc.createElement('small');
      sq.style.setProperty('--c',c[0]); sq.style.transitionDelay=(ix*90)+'ms';
      b.textContent=palName(prof,ix); sm.textContent=c[0].replace('#','');
      d.appendChild(sq);d.appendChild(b);d.appendChild(sm);pal.appendChild(d);
    });
    var ol=res.querySelector('.res-recs'); ol.innerHTML='';
    pv(prof,'recs').forEach(function(t){var li=doc.createElement('li');li.textContent=t;ol.appendChild(li)});
    var img=res.querySelector('.res-fig img'); img.src='assets/img/'+p.img+'.webp'; img.alt=pv(prof,'name');
    res.querySelector('.res-proj').textContent=p.proj;
    try{res.querySelector('.doc-d').textContent=(function(d){function z(n){return (n<10?'0':'')+n}return z(d.getDate())+'.'+z(d.getMonth()+1)+'.'+d.getFullYear()})(new Date())}catch(e){}
  }
  function result(){
    prof=winner(); fillRes();
    box.dataset.state='res'; grid.classList.add('res'); res.hidden=false; res.classList.remove('show');
    var top=grid.getBoundingClientRect().top+window.pageYOffset-parseInt(getComputedStyle(root).scrollPaddingTop||0,10)-24;
    window.scrollTo({top:top,behavior:'auto'});
    requestAnimationFrame(function(){requestAnimationFrame(function(){res.classList.add('show')})});
  }
  box.querySelector('.qz-again').addEventListener('click',function(){
    ans=[];cur=0;prof=null;res.hidden=true;box.dataset.state='ask';grid.classList.remove('res');paint();showQ(true);
  });
  var form=res.querySelector('.res-form');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var ph=form.querySelector('[name=phone]'), err=form.querySelector('.res-err');
    if(form.querySelector('.hp').value) return;
    var digits=ph.value.replace(/\D/g,'');
    if(digits.length<10){err.hidden=false;ph.focus();return}
    err.hidden=true;
    var p=P[prof];
    var txt=wTpl('quiz').replace('{x}',pv(prof,'name')).replace('{c}',p.pal.map(function(c,ix){return palName(prof,ix)+' '+c[0]}).join(', ')).replace('{p}',ph.value.trim());
    window.open(waUrl(txt),'_blank','noopener');
    form.querySelector('.fm-ok').hidden=false;
  });
  paint(); showQ(false);
  Q={render:function(){ if(box.dataset.state==='res'&&prof) fillRes(); else showQ(false); }};
}

/* Заявка */
function initForm(){
  var f=doc.getElementById('lead-form'); if(!f) return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var ph=f.querySelector('[name=phone]'), err=f.querySelector('.res-err');
    if(f.querySelector('.hp').value) return;
    if(ph.value.replace(/\D/g,'').length<10){err.hidden=false;ph.focus();return}
    err.hidden=true;
    var sel=f.querySelector('select');
    var txt=wTpl('form').replace('{n}',f.querySelector('[name=name]').value.trim()||'-').replace('{p}',ph.value.trim())
      .replace('{o}',sel.options[sel.selectedIndex].text).replace('{a}',f.querySelector('[name=area]').value.trim()||'-');
    window.open(waUrl(txt),'_blank','noopener');
    f.querySelector('.fm-ok').hidden=false;
  });
}

/* Меню */
function initMenu(){
  var b=doc.querySelector('.burger'), m=doc.getElementById('menu'); if(!b||!m) return;
  function set(open){
    m.hidden=!open; b.setAttribute('aria-expanded',String(open));
    doc.body.classList.toggle('menu-open',open);
  }
  b.addEventListener('click',function(){set(m.hidden)});
  m.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  doc.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden){set(false);b.focus()}});
  /* порог бургера = порог меню = 1120px (styles.css) */
  window.addEventListener('resize',function(){if(window.innerWidth>1120&&!m.hidden)set(false)});
}

/* Лента проектов */
function initLane(){
  var lane=doc.querySelector('.lane'), nav=doc.querySelector('.lane-nav'); if(!lane||!nav) return;
  var prev=nav.querySelector('[data-dir="-1"]'), next=nav.querySelector('[data-dir="1"]');
  function upd(){
    var max=lane.scrollWidth-lane.clientWidth;
    nav.hidden=max<4;
    prev.disabled=lane.scrollLeft<4;
    next.disabled=lane.scrollLeft>max-4;
  }
  function step(dir){
    var cards=lane.querySelectorAll('.card'), gap=parseFloat(getComputedStyle(lane).columnGap)||24;
    var x=lane.scrollLeft, w=cards[0].getBoundingClientRect().width+gap;
    for(var i=0;i<cards.length;i++){var cw=cards[i].offsetLeft-lane.offsetLeft;if(dir>0&&cw>x+8){w=cw-x;break}}
    if(dir<0){var t=0;for(var j=cards.length-1;j>=0;j--){var cl=cards[j].offsetLeft-lane.offsetLeft;if(cl<x-8){t=cl;break}}w=x-t}
    lane.scrollBy({left:dir*w,behavior:'smooth'});
  }
  prev.addEventListener('click',function(){step(-1)});
  next.addEventListener('click',function(){step(1)});
  lane.addEventListener('scroll',upd,{passive:true});
  window.addEventListener('resize',upd);
  lane.querySelectorAll('img').forEach(function(im){im.addEventListener('load',upd)});
  upd();
}

/* Герой: проекты сменяют друг друга, палитра перетекает */
var HERO=null;
function initHero(){
  var pic=doc.getElementById('hero-pic'); if(!pic) return;
  var slides=pic.querySelectorAll('.hs'), tabs=doc.querySelectorAll('.hero-tabs [data-hs]'),
      pal=doc.querySelectorAll('.pal-hero li'), sets=doc.querySelectorAll('.hero-paldata ul'),
      link=doc.querySelector('.hero-cap-link'), fig=doc.querySelector('.hero-fig');
  if(slides.length<2||!sets.length) return;
  var cur=0, timer=null, hold=false, loaded=false, started=false, DUR=7000;
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function load(){if(loaded)return;loaded=true;pic.querySelectorAll('img[data-src]').forEach(function(im){im.src=im.getAttribute('data-src');im.removeAttribute('data-src')})}
  var palUl=doc.querySelector('.pal-hero'), swapT=null;
  pal.forEach(function(li,k){li.style.setProperty('--d',(k*60)+'ms')});
  function paintPal(i,anim){
    if(anim&&palUl&&!reduce){
      palUl.classList.add('ready','swap'); clearTimeout(swapT);
      swapT=setTimeout(function(){fill(i);requestAnimationFrame(function(){palUl.classList.remove('swap')})},420+pal.length*60);
      if(link) link.setAttribute('href',sets[i].getAttribute('data-href'));
      return;
    }
    fill(i);
  }
  function fill(i){
    var items=sets[i].children;
    pal.forEach(function(li,k){
      var src=items[k]; if(!src) return;
      var c=src.style.getPropertyValue('--c').trim(), key=src.getAttribute('data-i');
      li.style.setProperty('--c',c);
      var sp=li.querySelector('span'), sm=li.querySelector('small');
      if(sp){sp.setAttribute('data-i',key); sp.textContent=tv(key)||src.textContent}
      if(sm) sm.textContent=c.replace('#','');
    });
    if(link) link.setAttribute('href',sets[i].getAttribute('data-href'));
  }
  function run(){
    tabs.forEach(function(t){t.classList.remove('run')});
    clearTimeout(timer);
    if(!started||reduce||hold||doc.hidden) return;
    var t=tabs[cur]; if(t){void t.offsetWidth; t.classList.add('run')}
    timer=setTimeout(function(){go((cur+1)%slides.length)},DUR);
  }
  function go(i){
    load();
    var img=slides[i].querySelector('img');
    function show(){
      slides.forEach(function(s,k){s.classList.toggle('on',k===i)});
      tabs.forEach(function(t,k){t.setAttribute('aria-selected',String(k===i));t.tabIndex=k===i?0:-1});
      cur=i; paintPal(i,true); run();
    }
    if(img&&!img.complete){img.addEventListener('load',show,{once:true});img.addEventListener('error',show,{once:true})} else show();
  }
  tabs.forEach(function(t,k){t.addEventListener('click',function(){if(k!==cur)go(k)})});
  if(fig){
    fig.addEventListener('mouseenter',function(){hold=true;run()});
    fig.addEventListener('mouseleave',function(){hold=false;run()});
    fig.addEventListener('focusin',function(){hold=true;run()});
    fig.addEventListener('focusout',function(){hold=false;run()});
  }
  doc.addEventListener('visibilitychange',run);
  /* вне экрана не крутим */
  if('IntersectionObserver' in window){new IntersectionObserver(function(en){var v=en[0].isIntersecting;if(v!==!hold){hold=!v;run()}}).observe(pic)}
  HERO={start:function(){setTimeout(function(){started=true;load();run()},2200)},repaint:function(){paintPal(cur)}};
}

/* Липкая палитра проектов */
var PAL_RU={pal_calacatta:'Калакатта',pal_silver:'Серебро',pal_ash:'Пепел',pal_patina:'Патина',pal_wenge:'Венге'};
var PST=null;
function initPstick(){
  var bar=doc.querySelector('.pstick'); if(!bar) return;
  var arts=doc.querySelectorAll('[data-pal]'), ul=bar.querySelector('.pal-stick'),
      nb=bar.querySelector('.pstick-name b'), ns=bar.querySelector('.pstick-name span');
  if(!arts.length) return;
  var cur=-1, i;
  for(i=0;i<6;i++){var li=doc.createElement('li'); li.appendChild(doc.createElement('span')); ul.appendChild(li)}
  function nm(k){var v=tv(k); return v!=null?v:(PAL_RU[k]||'')}
  function set(ix,force){
    if(ix===cur&&!force) return;
    var a=arts[ix], items=a.getAttribute('data-pal').split(','), first=cur<0;
    cur=ix;
    items.forEach(function(it,k){
      var pr=it.split(':'), li=ul.children[k]; if(!li) return;
      li.style.setProperty('--c',pr[0]);
      li.querySelector('span').textContent=nm(pr[1]);
    });
    if(first||force){nb.textContent=a.getAttribute('data-pname');ns.textContent=tv('pal_aria')||'Палитра проекта'}
    else {bar.classList.add('sw');setTimeout(function(){nb.textContent=a.getAttribute('data-pname');ns.textContent=tv('pal_aria')||'Палитра проекта';bar.classList.remove('sw')},260)}
  }
  var tick=false;
  function upd(){
    tick=false;
    var mid=window.innerHeight*.5, best=0;
    for(var k=0;k<arts.length;k++){if(arts[k].getBoundingClientRect().top<mid) best=k}
    set(best);
  }
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});
  set(0); upd();
  PST={repaint:function(){set(cur,true)}};
}

/* Проявление кадров */
function initReveal(){
  var els=doc.querySelectorAll('.rv,.pal:not(.pal-hero)');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -6% 0px',threshold:.05});
  els.forEach(function(e){io.observe(e)});
}

/* Старт */
doc.querySelectorAll('[data-i]').forEach(function(el){RU[el.getAttribute('data-i')]=el.textContent});
doc.querySelectorAll('[data-i-list]').forEach(function(ul){RUL[ul.getAttribute('data-i-list')]=[].map.call(ul.children,function(li){return li.textContent})});
doc.querySelectorAll('[data-i-aria]').forEach(function(el){var k=el.getAttribute('data-i-aria');RUA[k+'|'+(el.id||'')]=el.getAttribute('aria-label')});

initQuiz(); initForm(); initMenu(); initLane(); initReveal(); initHero(); initPstick();

var startLang='ru';
try{
  var qp=new URLSearchParams(location.search).get('lang');
  if(qp==='ru'||qp==='kk'||qp==='en') startLang=qp;
  else {var s=localStorage.getItem('yd-lang'); if(s) startLang=s;}
}catch(e){}
setLang(startLang);
doc.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.lang)})});

/* Свет в герое включается после загрузки кадра */
var hero=doc.querySelector('.hero-pic img');
var litDone=false;
function lit(){if(litDone)return;litDone=true;requestAnimationFrame(function(){doc.body.classList.add('lit');if(HERO)HERO.start()})}
/* Переход по якорю или прокрученная страница - интро героя пропускаем */
if(location.hash||window.pageYOffset>80){doc.body.classList.add('lit','no-intro')}

/* Липкая панель: после ~55% первого экрана, прячется на блоке контактов */
(function(){
  var bar=doc.querySelector('.mbar'), heroEl=doc.querySelector('.hero'), cont=doc.getElementById('kontakty'); if(!bar) return;
  var tick=false;
  function upd(){
    tick=false;
    var h=heroEl?heroEl.offsetHeight:600, y=window.pageYOffset, vh=window.innerHeight;
    var inC=cont?cont.getBoundingClientRect().top<vh*.6:false;
    bar.classList.toggle('on',y>h*.55&&!inC);
  }
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});
  upd();
})();
if(hero&&!hero.complete){hero.addEventListener('load',lit);hero.addEventListener('error',lit);setTimeout(lit,1800)} else lit();
})();
