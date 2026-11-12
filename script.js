(function(){
'use strict';
var WA='77020387454';
var doc=document, root=doc.documentElement, body=doc.body;
var PAGE=body.getAttribute('data-page')||'home';
/* Тексты сообщений WhatsApp (русский; казахский и английский - в assets/lang) */
var W={
 "gen": "Здравствуйте! Хочу обсудить проект интерьера.",
 "srv": "Здравствуйте! Интересует дизайн-проект: {x}.",
 "form": "Здравствуйте! Заявка с сайта.\nТема: {r}\nИмя: {n}\nТелефон: {p}\nТип помещения: {o}\nПлощадь: {a} м²\n{q}",
 "quiz": "Здравствуйте! Мой паспорт интерьера: «{x}».\nПалитра: {c}\nТелефон: {p}\nХочу обсудить проект."
};
/* ===== Паспорт интерьера (русский) ===== */
var P={"t":{"img":"q-t","proj":"ЖК Green Line Aqua","href":"aqua","pal":[["#F4F1EA","Молоко"],["#DCD3C4","Лён"],["#C2B39C","Песок"],["#8F8374","Тауп"],["#3A3530","Графит"]],"name":"Тихий свет","desc":"Светлый дом, в котором отдыхают глаза: мягкие оттенки, тактильные ткани и свет без резких теней.","recs":["Три сценария освещения - утро, работа, вечер - с регулировкой яркости.","Закрытые системы хранения от пола до потолка, на виду только избранные вещи.","Фактурные материалы - лён, шерсть, микроцемент - вместо декоративных предметов."]},"o":{"img":"q-o","proj":"Vela Village","href":"vela","pal":[["#F1E2C8","Сливки"],["#D9A85B","Мёд"],["#8A5A3A","Орех"],["#6E7552","Олива"],["#3B2A22","Мокко"]],"name":"Тёплый очаг","desc":"Дом для большой семьи: тёплое дерево, просторная кухня-гостиная и общий стол для всех.","recs":["Кухня с островом как центр дома, обеденный стол на 8-10 мест.","Дерево в отделке пола и в мебели, износостойкие ткани для семьи с детьми.","Отдельный кабинет или библиотека для взрослых."]},"g":{"img":"q-g","proj":"ЖК Parkside","href":"parkside","pal":[["#FFFFFF","Белый"],["#C9C9C6","Бетон"],["#7D8288","Сталь"],["#232425","Уголь"],["#FFCD2A","Жёлтый"]],"name":"Чистая линия","desc":"Графичный контрастный интерьер: точная геометрия, минимум предметов и одна выразительная деталь.","recs":["Фасады без ручек, скрытые двери в цвет стен.","Один арт-объект на главной стене вместо множества мелкого декора.","Трековые светильники, которые легко перенастроить под новую расстановку мебели."]},"r":{"img":"q-r","proj":"ЖК Dara Residence","href":"dara","pal":[["#EFE6D6","Слоновая кость"],["#D6C7AE","Травертин"],["#B48F4E","Латунь"],["#6B4532","Каштан"],["#151413","Чёрный"]],"name":"Резиденция","desc":"Неоклассика: мрамор, латунь, молдинги и симметрия. Мебель и материалы, которые служат десятилетиями.","recs":["Симметричные композиции и молдинги, рассчитанные на высоту потолков.","Натуральный мрамор как акцент в одной-двух зонах.","Витрина или ниша с подсветкой для коллекции."]},"n":{"img":"q-n","proj":"","href":"spa","pal":[["#E4E8E2","Туман"],["#BDB6A8","Камень"],["#9AA58A","Шалфей"],["#A97E5F","Глина"],["#3E403A","Базальт"]],"name":"Ретрит","desc":"Интерьер в духе SPA: камень, дерево, живые растения и мягкий тёплый свет.","recs":["Ванная как зона отдыха: тёплый пол, ниши и свет по периметру.","Фактурная штукатурка и камень вместо обоев.","Места для живых растений, заложенные в планировку."]},"k":{"img":"q-k","proj":"ЖК The ONE","href":"theone","pal":[["#E2D5BE","Пергамент"],["#9C5B2E","Коньяк"],["#5A2F25","Палисандр"],["#2E221C","Эспрессо"],["#12161D","Ночь"]],"name":"Вечерний клуб","desc":"Глубокие тона, тёмное дерево, кожа и тёплый вечерний свет. Интерьер для работы и приёма гостей.","recs":["Стеновые панели из шпона тёмных пород.","Тёплый свет 2700 K: бра и торшеры вместо верхнего освещения.","Библиотека или бар как композиционный центр гостиной."]}};
/* Вопрос: [текст, ответы: [текст, профиль, второй профиль]] */
var QS=[["Идеальное утро выходного дня - это...",[["Тишина, кофе и книга, пока все спят","t"],["Большой завтрак со всей семьёй","o"],["Тренировка, затем сразу дела","g"],["Неспешное утро и время для себя","n"]]],["Вы вернулись домой после трудного дня. Что вам нужно в первую очередь?",[["Приглушённый свет и тишина","t","n"],["Голоса близких и запах ужина","o"],["Порядок: ничего лишнего на виду","g"],["Кресло, бокал и любимая музыка","k"]]],["Какой отпуск вы выберете?",[["Дом в горах с камином","o","n"],["Европейская столица: музеи, рестораны, архитектура","r","g"],["Спа-отель у моря","n","t"],["Новый город и плотная программа","g","k"]]],["Гости в вашем доме - это...",[["Часто и много, двери открыты","o"],["Редко и только самые близкие","t"],["Ужины с продуманной сервировкой","r"],["Деловые встречи и долгие разговоры","k"]]],["Какая фактура приятнее на ощупь?",[["Лён и шерсть","t"],["Тёплое дерево","o"],["Гладкий камень и металл","g"],["Бархат и кожа","k","r"]]],["Как сейчас выглядит ваш рабочий стол?",[["Пустой: только ноутбук","g","t"],["Книги и заметки, но я знаю, где что","k"],["Цветы, свеча и красивые аксессуары","r"],["Работаю там, где удобно: за столом, на диване, на кухне","o","n"]]],["Какое время суток - ваше?",[["Раннее утро","t"],["Солнечный полдень","o"],["Золотой час перед закатом","n","r"],["Поздний вечер","k","g"]]],["Вещи с историей в вашем доме - это...",[["Обязательно: семейные реликвии и антиквариат","r"],["Одна-две, как акцент","k"],["Предпочитаю новое и чистое","g"],["Важнее природные материалы: камень, дерево, растения","n"]]],["Какой звук у вас ассоциируется с домом?",[["Тишина","t"],["Смех детей и шум кухни","o"],["Джаз на виниле","k"],["Дождь и ветер в деревьях","n"]]],["Что вам не нравится в чужих интерьерах?",[["Перегруз и пестрота","t","g"],["Холодная гостиничная обстановка","o"],["Случайные вещи и дешёвые материалы","r"],["Мало света и воздуха","n"]]],["Как вы принимаете важные решения?",[["Долго взвешиваю, мне нужна ясность","t"],["Советуюсь с семьёй","o"],["Быстро и по фактам","g"],["Беру решение и ответственность на себя","k"]]],["Каким должен быть ваш дом через 10 лет?",[["Местом, где можно выдохнуть","t","n"],["Домом, где собирается вся семья","o"],["Отражением моего вкуса и статуса","r","k"],["Пространством, которое не надоест","g"]]]];
var CNT='Вопрос {i} из 12';
/* Подписи, которых нет в разметке страницы */
var RU_EXTRA={
 m_t_zamer:'Запись на бесплатный замер', m_t_meet:'Назначить встречу', m_t_cons:'Записаться на консультацию',
 r_zamer:'Бесплатный замер', r_proj:'Проект, похожий на «{x}»', r_srv:'Услуга: {x}', r_tar:'Тариф «{x}»', r_nadzor:'Авторское сопровождение', r_quiz:'Паспорт интерьера', r_contact:'Встреча в студии или замер',
 v_phone:'Укажите номер телефона полностью: +7 и 10 цифр', v_name:'Укажите, как к вам обращаться', v_type:'Выберите тип помещения', v_agree:'Подтвердите согласие на обработку персональных данных',
 pn_spa:'SPA-комплекс', pal_word:'Палитра', lb_of:'из', s1_h:'Квартиры', s2_h:'Загородные дома', s3_h:'Пентхаусы', s4_h:'Коммерция', s5_h:'Офисы и кабинеты', t1_h:'Базовый', t2_h:'Стандарт', t3_h:'Бизнес', nz_h:'Авторское сопровождение', pass_t:'Паспорт интерьера'
};

/* Словари kk и en лежат в assets/lang и грузятся только по выбору языка */
var me=doc.currentScript;
var ASSET_V=((me&&me.src.match(/[?&]v=([^&]+)/))||[])[1]||'';
var BASE=me?me.src.replace(/script\.js.*$/,''):'';
var I18N={};
var lang='ru', RU={}, RUL={}, RUA={}, RUPH={}, RU_META={t:doc.title,d:(doc.querySelector('meta[name="description"]')||{}).content||''};
function D(){return lang==='ru'?null:I18N[lang]}
function tv(k){var d=D(), v=d?d.t[k]:null; if(v==null) v=RU[k]; if(v==null) v=RU_EXTRA[k]; return v}
function wTpl(k){var d=D();return (d&&d.w[k])||W[k]}
function qText(i){var d=D();return d?d.qs[i][0]:QS[i][0]}
function aText(i,a){var d=D();return d?d.qs[i][1][a]:QS[i][1][a][0]}
function pv(k,f){var d=D();return d?d.p[k][f]:P[k][f]}
function palName(k,ix){var d=D();return d?d.p[k].pal[ix]:P[k].pal[ix][1]}
function projName(k){return P[k].proj||tv('pn_spa')}
function loadLang(l,done){
  if(l==='ru'||I18N[l]) return done();
  var s=doc.createElement('script');
  s.src=BASE+'assets/lang/'+l+'.js'+(ASSET_V?'?v='+ASSET_V:'');
  s.onload=function(){var d=l==='kk'?window.SITE_KK:window.SITE_EN; if(d) I18N[l]=d; done()};
  s.onerror=function(){done()};
  doc.head.appendChild(s);
}
function setLang(l){l=(l==='kk'||l==='en')?l:'ru'; loadLang(l,function(){applyLang((l==='ru'||I18N[l])?l:'ru')})}
function waUrl(txt){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(txt)}

var hooks=[], preHooks=[];
function applyLang(l){
  preHooks.forEach(function(f){f()});
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
  doc.querySelectorAll('[data-i-ph]').forEach(function(el){
    var k=el.getAttribute('data-i-ph'), d=D(), v=d?d.t[k]:RUPH[k];
    if(v) el.setAttribute('placeholder',v);
  });
  var d=D(), sfx=PAGE==='home'?'':'_'+PAGE;
  doc.title=d?(d.t['meta_title'+sfx]||RU_META.t):RU_META.t;
  var md=doc.querySelector('meta[name="description"]'); if(md) md.setAttribute('content',d?(d.t['meta_desc'+sfx]||RU_META.d):RU_META.d);
  doc.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.lang===lang))});
  doc.querySelectorAll('[data-wa]').forEach(function(a){
    var k=a.getAttribute('data-wa'), x=a.getAttribute('data-x');
    a.href=waUrl(wTpl(k).replace('{x}',x?tv(x):''));
  });
  try{localStorage.setItem('yd-lang',lang)}catch(e){}
  hooks.forEach(function(f){f()});
}

/* ===== Формы заявки ===== */
function digits(v){return (v||'').replace(/\D/g,'')}
function vmsg(el){
  if(el.name==='phone'){var n=digits(el.value).length;return (n<10||n>12)?tv('v_phone'):''}
  if(el.type==='checkbox') return el.checked?'':tv('v_agree');
  if(el.tagName==='SELECT') return el.value?'':tv('v_type');
  if(el.required&&!el.value.trim()) return tv('v_name');
  return '';
}
function initValidation(f){
  var els=[].slice.call(f.querySelectorAll('[required]'));
  function chk(el){el.setCustomValidity(vmsg(el))}
  els.forEach(function(el){chk(el);el.addEventListener(el.type==='checkbox'||el.tagName==='SELECT'?'change':'input',function(){chk(el)})});
  hooks.push(function(){els.forEach(chk)});
}
function fieldText(sel){return sel&&sel.value?sel.options[sel.selectedIndex].text.trim():''}
function initLeadForm(f){
  if(!f) return;
  initValidation(f);
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(f.querySelector('.hp').value) return;
    var g=function(n){var el=f.querySelector('[name='+n+']');return el?el.value.trim():''};
    var reason=g('reason')||(f.id==='c-form'?tv('r_contact'):(doc.getElementById('m-title')||{}).textContent||'');
    var txt=wTpl('form').replace('{r}',reason).replace('{n}',g('name')).replace('{p}',g('phone'))
      .replace('{o}',fieldText(f.querySelector('[name=room_type]'))).replace('{q}',g('passport'));
    var area=g('area');
    txt=txt.split('\n').filter(function(line){return !(/\{a\}/.test(line)&&!area)}).join('\n').replace('{a}',area);
    window.open(waUrl(txt.replace(/\n+$/,'')),'_blank','noopener');
    f.querySelector('.fm-ok').hidden=false;
  });
}

/* Окно заявки */
var MODAL=null;
function initModal(){
  var m=doc.getElementById('lead-modal'); if(!m) return;
  var f=m.querySelector('form'), title=m.querySelector('.modal-t'), last=null, cur=null;
  var rWrap=f.querySelector('.fld-reason'), rIn=f.querySelector('[name=reason]'),
      pWrap=f.querySelector('.fld-pass'), pIn=f.querySelector('[name=passport]'),
      room=f.querySelector('[name=room_type]'), phone=f.querySelector('[name=phone]');
  function paint(){
    if(!cur) return;
    title.textContent=tv('m_t_'+cur.kind);
    var r='';
    if(cur.reason==='proj') r=tv('r_proj').replace('{x}',cur.x==='SPA-комплекс'?tv('pn_spa'):cur.x);
    else if(cur.reason==='srv'||cur.reason==='tar') r=tv('r_'+cur.reason).replace('{x}',tv(cur.x));
    else if(cur.reason) r=tv('r_'+cur.reason);
    rIn.value=r; rWrap.hidden=!r||cur.kind==='zamer';
    pWrap.hidden=!cur.pass; pIn.value=cur.pass||'';
  }
  function open(o,btn){
    cur=o; last=btn||doc.activeElement;
    f.querySelector('.fm-ok').hidden=true;
    room.value=o.room||''; room.dispatchEvent(new Event('change'));
    if(o.phone){phone.value=o.phone; phone.dispatchEvent(new Event('input'))}
    paint();
    m.hidden=false; body.classList.add('modal-open');
    setTimeout(function(){(f.querySelector('[name=name]')).focus({preventScroll:true})},60);
  }
  function close(){m.hidden=true; body.classList.remove('modal-open'); if(last&&last.focus) last.focus({preventScroll:true})}
  m.addEventListener('click',function(e){if(e.target.closest('[data-close]'))close()});
  doc.addEventListener('keydown',function(e){
    if(m.hidden) return;
    if(e.key==='Escape') close();
    if(e.key==='Tab'){
      var fs=[].filter.call(m.querySelectorAll('button,input:not([type=hidden]):not(.hp),select,textarea,a[href]'),function(x){return x.offsetParent!==null});
      if(!fs.length) return;
      if(e.shiftKey&&doc.activeElement===fs[0]){e.preventDefault();fs[fs.length-1].focus()}
      else if(!e.shiftKey&&doc.activeElement===fs[fs.length-1]){e.preventDefault();fs[0].focus()}
    }
  });
  doc.addEventListener('click',function(e){
    var b=e.target.closest('[data-modal]'); if(!b) return;
    e.preventDefault();
    var menu=doc.getElementById('menu'); if(menu&&!menu.hidden&&MENU) MENU(false);
    var kind=b.getAttribute('data-modal');
    open({kind:kind,reason:b.getAttribute('data-reason')||(kind==='zamer'?'zamer':''),x:b.getAttribute('data-x')||'',room:b.getAttribute('data-room')||''},b);
  });
  hooks.push(paint);
  initLeadForm(f);
  MODAL=open;
}

/* ===== Паспорт интерьера ===== */
function initQuiz(){
  var box=doc.querySelector('.qz'); if(!box) return;
  var grid=box.closest('.qz-grid')||box.parentNode, pass=grid.querySelector('.pass');
  var qEl=box.querySelector('.qz-q'), opts=box.querySelector('.qz-opts'), cnt=box.querySelector('.qz-count'),
      back=box.querySelector('.qz-back'), ask=box.querySelector('.qz-ask'),
      num=pass.querySelector('.pass-n b'), sw=pass.querySelector('.pass-sw'), res=box.querySelector('.qz-res');
  var ans=[], cur=0, i;
  for(i=0;i<12;i++) sw.appendChild(doc.createElement('span'));
  /* цвет ответа = цвет из палитры его профиля; у каждого вопроса свой цвет профиля */
  var CI=[2,1,3,0,2,4,1,3,0,2,1,3];
  function cref(qi,a){var o=QS[qi][1][a];return [o[1],CI[qi]]}
  function color(qi,a){var r=cref(qi,a);return P[r[0]].pal[r[1]][0]}
  function paint(){
    var ss=sw.children, n=ans.filter(function(x){return x!=null}).length;
    var smp=n===0, SM=['#EFE6D6','#D6C7AE','#B48F4E','#6B4532','#151413','#F1E2C8','#D9A85B','#8A5A3A','#6E7552','#DCD3C4','#FFCD2A','#9AA58A'];
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
  /* счёт профилей: основной ответ 2 балла, второй профиль 1 */
  function ranking(){
    var sc={t:0,o:0,g:0,r:0,n:0,k:0}, last={};
    ans.forEach(function(a,qi){var o=QS[qi][1][a];sc[o[1]]+=2;last[o[1]]=qi;if(o[2]){sc[o[2]]+=1;last[o[2]]=Math.max(last[o[2]]||0,qi-.5)}});
    return Object.keys(sc).sort(function(a,b){return (sc[b]-sc[a])||((last[b]||-1)-(last[a]||-1))});
  }
  /* палитра из ответов: цвета по частоте, без повторов, до 6 */
  function palette(){
    var cnt={}, order=[];
    ans.forEach(function(a,qi){var r=cref(qi,a), k=r.join(':'); if(!(k in cnt)){cnt[k]=0;order.push(k)} cnt[k]++});
    order.sort(function(a,b){return cnt[b]-cnt[a]||order.indexOf(a)-order.indexOf(b)});
    return order.slice(0,6).map(function(k){var r=k.split(':');return [r[0],+r[1]]});
  }
  var prof=null, second=null, pal=[];
  function passText(){
    return pv(prof,'name')+'. '+tv('pal_word')+': '+pal.map(function(r){return palName(r[0],r[1])}).join(', ');
  }
  function fillRes(){
    var p=P[prof];
    res.querySelector('.res-name').textContent=pv(prof,'name');
    res.querySelector('.res-desc').textContent=pv(prof,'desc');
    var box2=res.querySelector('.res-pal'); box2.innerHTML='';
    pal.forEach(function(r,ix){
      var c=P[r[0]].pal[r[1]][0];
      var d=doc.createElement('div'), sq=doc.createElement('i'), b=doc.createElement('b'), sm=doc.createElement('small');
      sq.style.setProperty('--c',c); sq.style.transitionDelay=(ix*90)+'ms';
      b.textContent=palName(r[0],r[1]); sm.textContent=c.replace('#','');
      d.appendChild(sq);d.appendChild(b);d.appendChild(sm);box2.appendChild(d);
    });
    /* рекомендации: две от ведущего профиля и одна от второго */
    var r1=pv(prof,'recs'), recs=[r1[0],r1[1],second?pv(second,'recs')[0]:r1[2]];
    var ol=res.querySelector('.res-recs'); ol.innerHTML='';
    recs.forEach(function(t){var li=doc.createElement('li');li.textContent=t;ol.appendChild(li)});
    var img=res.querySelector('.res-fig img'); img.src=BASE+'assets/img/'+p.img+'.webp'; img.alt=projName(prof);
    res.querySelector('.res-proj').textContent=projName(prof);
    var lk=res.querySelector('.res-fig a'); if(lk) lk.href=BASE+'proekty/#'+p.href;
    res.querySelector('#qz-res-txt').value=passText();
    try{res.querySelector('.doc-d').textContent=(function(d){function z(n){return (n<10?'0':'')+n}return z(d.getDate())+'.'+z(d.getMonth()+1)+'.'+d.getFullYear()})(new Date())}catch(e){}
  }
  function result(){
    var rk=ranking(); prof=rk[0]; second=rk[1]||null; pal=palette(); fillRes();
    box.dataset.state='res'; grid.classList.add('res'); res.hidden=false; res.classList.remove('show');
    var top=grid.getBoundingClientRect().top+window.pageYOffset-parseInt(getComputedStyle(root).scrollPaddingTop||0,10)-24;
    jumpTo(top);
    requestAnimationFrame(function(){requestAnimationFrame(function(){res.classList.add('show')})});
  }
  box.querySelector('.qz-again').addEventListener('click',function(){
    ans=[];cur=0;prof=null;res.hidden=true;box.dataset.state='ask';grid.classList.remove('res');paint();showQ(true);
  });
  var form=res.querySelector('.res-form');
  initValidation(form);
  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(form.querySelector('.hp').value) return;
    var ph=form.querySelector('[name=phone]');
    var txt=wTpl('quiz').replace('{x}',pv(prof,'name')).replace('{c}',pal.map(function(r){return palName(r[0],r[1])+' '+P[r[0]].pal[r[1]][0]}).join(', ')).replace('{p}',ph.value.trim());
    window.open(waUrl(txt),'_blank','noopener');
    form.querySelector('.fm-ok').hidden=false;
  });
  form.querySelector('.qz-talk').addEventListener('click',function(e){
    if(MODAL) MODAL({kind:'cons',reason:'quiz',pass:passText(),phone:form.querySelector('[name=phone]').value},e.currentTarget);
  });
  paint(); showQ(false);
  hooks.push(function(){ if(box.dataset.state==='res'&&prof) fillRes(); else showQ(false); });
}

/* Меню */
var MENU=null;
function initMenu(){
  var b=doc.querySelector('.burger'), m=doc.getElementById('menu'); if(!b||!m) return;
  function set(open){
    m.hidden=!open; b.setAttribute('aria-expanded',String(open));
    body.classList.toggle('menu-open',open);
  }
  MENU=set;
  b.addEventListener('click',function(){set(m.hidden)});
  m.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  doc.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden){set(false);b.focus()}});
  /* порог бургера = порог меню = 1200px (styles.css) */
  window.addEventListener('resize',function(){if(window.innerWidth>1200&&!m.hidden)set(false)});
}

var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var LENIS=null;
function jumpTo(y){if(LENIS) LENIS.scrollTo(y,{immediate:true,force:true}); else window.scrollTo({top:y,behavior:'auto'})}

/* Первый экран: кадры проектов сменяют друг друга */
var HERO=null;
function initHero(){
  var pic=doc.getElementById('hero-pic'); if(!pic) return;
  var slides=pic.querySelectorAll('.hs'), dots=doc.querySelectorAll('.hero-dots i'), media=pic.parentNode;
  if(slides.length<2) return;
  var cur=0, timer=null, hold=false, started=false, DUR=6500;
  function run(){
    clearTimeout(timer);
    if(!started||reduce||hold||doc.hidden) return;
    timer=setTimeout(function(){go((cur+1)%slides.length)},DUR);
  }
  function go(i){
    var img=slides[i].querySelector('img');
    function show(){
      slides.forEach(function(s,k){s.classList.toggle('on',k===i);s.tabIndex=k===i?0:-1});
      dots.forEach(function(d,k){d.classList.toggle('on',k===i)});
      cur=i; run();
    }
    if(img&&!img.complete){img.loading='eager';img.addEventListener('load',show,{once:true});img.addEventListener('error',show,{once:true})} else show();
  }
  media.querySelectorAll('[data-hd]').forEach(function(b){b.addEventListener('click',function(){go((cur+(+b.getAttribute('data-hd'))+slides.length)%slides.length)})});
  media.addEventListener('mouseenter',function(){hold=true;run()});
  media.addEventListener('mouseleave',function(){hold=false;run()});
  media.addEventListener('focusin',function(){hold=true;run()});
  media.addEventListener('focusout',function(){hold=false;run()});
  var sx=null;
  media.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  media.addEventListener('touchend',function(e){if(sx==null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>50)go((cur+(dx<0?1:-1)+slides.length)%slides.length)},{passive:true});
  doc.addEventListener('visibilitychange',run);
  if('IntersectionObserver' in window){new IntersectionObserver(function(en){hold=!en[0].isIntersecting;run()}).observe(media)}
  HERO={start:function(){setTimeout(function(){started=true;slides.forEach(function(s){var im=s.querySelector('img');if(im)im.loading='eager'});run()},1800)}};
}

/* Избранные проекты: листаются сами, со стрелками */
function initFeat(){
  var tr=doc.querySelector('.feat-track'), nav=doc.querySelector('.feat-nav'); if(!tr||!nav) return;
  var prev=nav.querySelector('[data-dir="-1"]'), next=nav.querySelector('[data-dir="1"]'), timer=null, auto=!reduce, vis=false;
  function idx(){return Math.round(tr.scrollLeft/tr.clientWidth)}
  function n(){return tr.children.length}
  function to(i){tr.scrollTo({left:i*tr.clientWidth,behavior:reduce?'auto':'smooth'})}
  function upd(){prev.disabled=tr.scrollLeft<4;next.disabled=tr.scrollLeft>tr.scrollWidth-tr.clientWidth-4}
  function run(){clearTimeout(timer); if(!auto||!vis||doc.hidden) return; timer=setTimeout(function(){var i=idx()+1;to(i>=n()?0:i);run()},6500)}
  function stop(){auto=false;clearTimeout(timer)}
  prev.addEventListener('click',function(){stop();to(Math.max(0,idx()-1))});
  next.addEventListener('click',function(){stop();to(Math.min(n()-1,idx()+1))});
  ['pointerdown','wheel','keydown'].forEach(function(ev){tr.addEventListener(ev,stop,{passive:true})});
  tr.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();to(Math.min(n()-1,idx()+1))}if(e.key==='ArrowLeft'){e.preventDefault();to(Math.max(0,idx()-1))}});
  tr.addEventListener('mouseenter',function(){clearTimeout(timer)});
  tr.addEventListener('mouseleave',run);
  tr.addEventListener('scroll',upd,{passive:true});
  window.addEventListener('resize',function(){upd()});
  doc.addEventListener('visibilitychange',run);
  if('IntersectionObserver' in window){new IntersectionObserver(function(en){vis=en[0].isIntersecting;run()},{threshold:.35}).observe(tr)}
  upd();
}

/* Страница проектов: один проект на экране, переключение карточками */
function initProjTabs(){
  var box=doc.getElementById('ptabs'); if(!box) return;
  var tabs=[].slice.call(box.querySelectorAll('.pt')), panels=doc.querySelectorAll('.pj');
  function show(id,scroll){
    var ok=tabs.some(function(t){return t.getAttribute('aria-controls')===id}); if(!ok) id=tabs[0].getAttribute('aria-controls');
    tabs.forEach(function(t){var on=t.getAttribute('aria-controls')===id;t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1});
    panels.forEach(function(p){p.hidden=p.id!==id});
    if(window.YD_GAL) window.YD_GAL();
    if(window.YD_PANEL) window.YD_PANEL(doc.getElementById(id));
    if(scroll){
      var y=box.getBoundingClientRect().top+window.pageYOffset-parseInt(getComputedStyle(root).scrollPaddingTop||0,10)-16;
      if(scroll==='panel'){var sec=doc.querySelector('.pj-sec');y=sec.getBoundingClientRect().top+window.pageYOffset-parseInt(getComputedStyle(root).scrollPaddingTop||0,10)}
      jumpTo(y);
    }
    return id;
  }
  function go(id,scroll){id=show(id,scroll);try{history.replaceState(null,'','#'+id)}catch(e){}}
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(e){e.preventDefault();go(t.getAttribute('aria-controls'),window.pageYOffset>box.offsetTop?'panel':false)});
    t.addEventListener('keydown',function(e){
      var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0; if(!d) return;
      e.preventDefault(); var n=tabs[(i+d+tabs.length)%tabs.length]; n.focus(); go(n.getAttribute('aria-controls'));
    });
  });
  doc.querySelectorAll('.pj-go').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();go(a.getAttribute('href').slice(1),'panel')})});
  window.addEventListener('hashchange',function(){show(location.hash.slice(1),'panel')});
  if(location.hash){var id=location.hash.slice(1);show(id,false);requestAnimationFrame(function(){show(id,'tabs')})}
}

/* Просмотр фото на странице проектов */
function initLightbox(){
  var lb=doc.getElementById('lb'); if(!lb) return;
  var img=lb.querySelector('.lb-img'), num=lb.querySelector('.lb-n'), list=[], cur=0, last=null;
  function show(i){
    cur=(i+list.length)%list.length; var a=list[cur];
    img.src=a.getAttribute('href'); img.alt=a.querySelector('img').alt;
    num.textContent=(cur+1)+' '+tv('lb_of')+' '+list.length+' · '+a.closest('.pj').querySelector('h2').textContent.split(' - ')[0];
    var nx=list[(cur+1)%list.length]; (new Image()).src=nx.getAttribute('href');
  }
  function close(){lb.hidden=true;body.classList.remove('modal-open');if(last)last.focus({preventScroll:true})}
  doc.querySelectorAll('.gal').forEach(function(g){
    var items=[].slice.call(g.querySelectorAll('.gal-it'));
    items.forEach(function(a,i){a.addEventListener('click',function(e){
      e.preventDefault(); list=items; last=a; lb.hidden=false; body.classList.add('modal-open'); show(i); lb.querySelector('.lb-x').focus({preventScroll:true});
    })});
  });
  lb.querySelector('.lb-x').addEventListener('click',close);
  lb.querySelector('.lb-p').addEventListener('click',function(){show(cur-1)});
  lb.querySelector('.lb-nx').addEventListener('click',function(){show(cur+1)});
  lb.addEventListener('click',function(e){if(e.target===lb)close()});
  doc.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1)});
  var sx=null;
  lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  lb.addEventListener('touchend',function(e){if(sx==null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>50)show(cur+(dx<0?1:-1))},{passive:true});
}

/* Проявление кадров */
function initReveal(){
  var els=doc.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -6% 0px',threshold:.05});
  els.forEach(function(e){io.observe(e)});
}


/* ===== Плавность: Lenis + GSAP. Одна кривая cubic-bezier(.2,.7,.2,1), длительности .2 / .4 / 1 ===== */
function initMotion(){
  var G=window.gsap, ST=window.ScrollTrigger;
  if(!G||!ST||reduce) return;
  G.registerPlugin(ST); if(window.SplitText) G.registerPlugin(window.SplitText);
  ST.config({ignoreMobileResize:true});
  root.classList.add('gs');
  function bez(x1,y1,x2,y2){return function(t){if(t<=0)return 0;if(t>=1)return 1;var a=0,b=1,u=t;for(var i=0;i<18;i++){u=(a+b)/2;var x=3*u*(1-u)*(1-u)*x1+3*u*u*(1-u)*x2+u*u*u;if(x<t)a=u;else b=u}return 3*u*(1-u)*(1-u)*y1+3*u*u*(1-u)*y2+u*u*u}}
  var E=bez(.2,.7,.2,1), T3=1, STG=.08;
  var MOB=window.matchMedia('(max-width:760px)').matches;
  var $$=function(q,r){return [].slice.call((r||doc).querySelectorAll(q))};

  /* плавная прокрутка */
  if(window.Lenis){
    LENIS=new window.Lenis({lerp:.1,smoothWheel:true});
    LENIS.on('scroll',ST.update);
    G.ticker.add(function(t){LENIS.raf(t*1000)});
    G.ticker.lagSmoothing(0);
    /* меню, окно заявки и просмотр фото - прокрутка страницы стоит */
    new MutationObserver(function(){var stop=body.classList.contains('menu-open')||body.classList.contains('modal-open');if(stop)LENIS.stop();else LENIS.start()}).observe(body,{attributes:true,attributeFilter:['class']});
    /* якоря внутри страницы - с отступом шапки */
    doc.addEventListener('click',function(e){
      var a=e.target.closest('a[href^="#"]'); if(!a||e.defaultPrevented) return;
      var id=a.getAttribute('href'); if(id.length<2) return;
      var t=doc.getElementById(id.slice(1)); if(!t||t.closest('[hidden]')||t.getAttribute('role')==='tabpanel') return;
      e.preventDefault();
      var hdr=doc.querySelector('.hdr'), off=hdr?hdr.offsetHeight:0;
      LENIS.scrollTo(t,{offset:-off,duration:1.2});
      try{history.replaceState(null,'',id)}catch(err){}
    });
  }

  /* заголовки секций: слова поднимаются из-под маски */
  var splits=[];
  function doSplit(){
    $$('.head h2,.feat-head h2,.qz-side h2,.f-txt h2,.proc-txt h2,.award-txt h3,.rev-head h2,.pg-head h1,.sv-txt h2,.work h2,.pg-cta h2,.nadzor-sec h2,.how h2,.statement').forEach(function(h){
      var sp=new window.SplitText(h,{type:'words,lines',mask:'lines'});
      splits.push(sp);
      G.from(sp.words,{yPercent:110,duration:T3,ease:E,stagger:.03,scrollTrigger:{trigger:h,start:'top 90%',once:true}});
    });  }
  if(window.SplitText){ if(doc.fonts&&doc.fonts.ready) doc.fonts.ready.then(function(){doSplit();ST.refresh()}); else doSplit(); }
  /* смена языка заменяет текст - разбивку снимаем */
  preHooks.push(function(){splits.forEach(function(sp){sp.revert()});splits=[]});

  /* блоки текста и карточки: мягкий подъём пачками */
  var items=$$('.head .lead,.head-row .link,.feat-head .lead,.feat-nav,.fs-cap,.feat-foot,.philo .kicker,.philo-list li,.srv-cards li,.proc-txt .lead,.steps li,.f-txt .kicker,.f-lead,.f-list li,.f-acts,.award-txt p,.qz-side .kicker,.qz-side .lead,.pass,.qz,.tier,.nadzor-row,.prices-note,.rev-rate,.rev,.c-grid .lead-form,.c-info>*,.pg-head .lead,.ptabs,.pj-head>*,.sv-txt p,.sv-acts,.work .lead,.work .btn,.work-list li,.nadzor p,.nadzor .btn,.pg-cta-acts,.pol h2,.pol p');
  items=items.filter(function(el){return !el.closest('.hero')});
  G.set(items,{y:28,autoAlpha:0});
  ST.batch(items,{start:'top 92%',once:true,onEnter:function(b){G.to(b,{y:0,autoAlpha:1,duration:.9,ease:E,stagger:STG,overwrite:true})}});

  /* кадры: раскрытие шторкой снизу и лёгкий наезд; на телефоне только проявление */
  $$('.proc-img,.f-img,.award-fig,.rev-fig,.sv-img,.c-office,.sc-img').forEach(function(fig){
    fig.classList.remove('rv');
    var img=fig.querySelector('img'); if(!img) return;
    if(MOB){G.from(fig,{autoAlpha:0,duration:.9,ease:E,scrollTrigger:{trigger:fig,start:'top 92%',once:true}});return}
    var tl=G.timeline({scrollTrigger:{trigger:fig,start:'top 88%',once:true}});
    tl.fromTo(fig,{clipPath:'inset(18% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.2,ease:E})
      .fromTo(img,{scale:1.12},{scale:1,duration:1.6,ease:E},0);
  });
  /* параллакс внутри крупных кадров (только компьютер) */
  if(!MOB) $$('.proc-img img,.f-img img,.sv-img img,.award-fig img').forEach(function(img){
    var w=doc.createElement('span'); w.className='px'; img.parentNode.insertBefore(w,img); w.appendChild(img);
    G.fromTo(w,{yPercent:-5},{yPercent:5,ease:'none',scrollTrigger:{trigger:w.parentNode,start:'top bottom',end:'bottom top',scrub:.6}});
  });
  /* шаги процесса: номер загорается по очереди */
  $$('.steps li').forEach(function(li){
    var n=li.querySelector('.n'); if(!n) return;
    G.fromTo(n,{opacity:.25},{opacity:1,duration:.4,ease:E,scrollTrigger:{trigger:li,start:'top 75%',once:true}});
  });
  /* лента «Наши проекты» проявляется при входе блока */
  var feat=doc.querySelector('.feat-track');
  if(feat) G.from(feat,{autoAlpha:0,y:40,duration:1.2,ease:E,scrollTrigger:{trigger:feat,start:'top 88%',once:true}});
  /* страница проектов: кадры открытого проекта ложатся по очереди */
  function panel(p){
    if(!p) return;
    var g=(p.querySelector('.gal')._items||$$('.gal-it',p)).slice(0,12);
    G.fromTo(g,{y:36,autoAlpha:0},{y:0,autoAlpha:1,duration:.9,ease:E,stagger:.05,overwrite:true,clearProps:'transform'});
    requestAnimationFrame(function(){ST.refresh()});
  }
  window.YD_PANEL=panel;
  var open=doc.querySelector('.pj:not([hidden])'); if(open) panel(open);
  window.addEventListener('load',function(){ST.refresh()});
}


/* Галереи проектов: ряды на всю ширину. Кадры целиком, в ряду одна высота,
   число рядов - от желаемой высоты ряда, кадры делятся по рядам поровну (линейное разбиение) */
function initMasonry(){
  var gals=[].slice.call(doc.querySelectorAll('.gal')); if(!gals.length) return;
  gals.forEach(function(g){g._items=[].slice.call(g.querySelectorAll('.gal-it'));g.classList.add('jr')});
  function asp(it){return (+it.getAttribute('data-w')||1)/(+it.getAttribute('data-h')||1)}
  function part(a,k){
    var n=a.length,i,j,x,pre=[0];
    for(i=0;i<n;i++) pre.push(pre[i]+a[i]);
    if(k>=n) return a.map(function(_,i){return [i,i+1]});
    var M=[],Dv=[];
    for(i=0;i<=n;i++){M.push([]);Dv.push([]);for(j=0;j<=k;j++){M[i].push(Infinity);Dv[i].push(0)}}
    M[0][0]=0;
    for(i=1;i<=n;i++) for(j=1;j<=Math.min(i,k);j++) for(x=j-1;x<i;x++){
      var c=Math.max(M[x][j-1],pre[i]-pre[x]); if(c<M[i][j]){M[i][j]=c;Dv[i][j]=x}
    }
    var out=[],e=n; for(j=k;j>0;j--){var st=Dv[e][j];out.unshift([st,e]);e=st}
    return out;
  }
  function layout(){
    var vw=window.innerWidth, H=vw>=1500?440:vw>900?380:vw>560?260:210, G=vw>760?14:8;
    gals.forEach(function(g){
      var W=g.clientWidth||g.parentNode.clientWidth; if(!W) {g._w=0;return}
      if(g._w===W) return; g._w=W;
      var it=g._items, a=it.map(asp), S=a.reduce(function(p,c){return p+c},0);
      var k=Math.max(1,Math.round(S*H/W));
      g.innerHTML='';
      part(a,k).forEach(function(r){
        var row=doc.createElement('div'); row.className='gal-row';
        var sa=0,i; for(i=r[0];i<r[1];i++) sa+=a[i];
        var n=r[1]-r[0];
        for(i=r[0];i<r[1];i++){it[i].style.width='calc((100% - '+(G*(n-1))+'px) * '+(a[i]/sa).toFixed(5)+')';row.appendChild(it[i])}
        g.appendChild(row);
      });
    });
    if(window.ScrollTrigger) window.ScrollTrigger.refresh();
  }
  layout();
  window.YD_GAL=layout;
  var t=null; window.addEventListener('resize',function(){clearTimeout(t);t=setTimeout(layout,150)});
}

/* Старт */
doc.querySelectorAll('[data-i]').forEach(function(el){RU[el.getAttribute('data-i')]=el.textContent});
doc.querySelectorAll('[data-i-list]').forEach(function(ul){RUL[ul.getAttribute('data-i-list')]=[].map.call(ul.children,function(li){return li.textContent})});
doc.querySelectorAll('[data-i-aria]').forEach(function(el){var k=el.getAttribute('data-i-aria');RUA[k+'|'+(el.id||'')]=el.getAttribute('aria-label')});
doc.querySelectorAll('[data-i-ph]').forEach(function(el){RUPH[el.getAttribute('data-i-ph')]=el.getAttribute('placeholder')});

initMenu(); initModal(); initLeadForm(doc.getElementById('c-form')); initQuiz(); initHero(); initFeat(); initProjTabs(); initLightbox(); initMasonry(); initReveal();

var startLang='ru';
try{
  var qp=new URLSearchParams(location.search).get('lang');
  if(qp==='ru'||qp==='kk'||qp==='en') startLang=qp;
  else {var s=localStorage.getItem('yd-lang'); if(s) startLang=s;}
}catch(e){}
setLang(startLang);
initMotion();
doc.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.lang)})});

/* Липкая панель на телефоне: после части первого экрана, прячется на блоке контактов */
(function(){
  var bar=doc.querySelector('.mbar'), heroEl=doc.querySelector('.hero'), cont=doc.getElementById('kontakty'); if(!bar) return;
  var tick=false;
  function upd(){
    tick=false;
    var h=heroEl?heroEl.offsetHeight*.55:240, vh=window.innerHeight;
    var inC=cont?cont.getBoundingClientRect().top<vh*.6:false;
    bar.classList.toggle('on',window.pageYOffset>h&&!inC);
  }
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});
  upd();
})();

/* Свет в герое включается после загрузки кадра */
var hero=doc.querySelector('.hs.on img');
var litDone=false;
function lit(){if(litDone)return;litDone=true;requestAnimationFrame(function(){body.classList.add('lit');if(HERO)HERO.start()})}
if(!hero){body.classList.add('lit');}
else {
  if(location.hash||window.pageYOffset>80){body.classList.add('lit','no-intro')}
  if(!hero.complete){hero.addEventListener('load',lit);hero.addEventListener('error',lit);setTimeout(lit,1800)} else lit();
}
})();
