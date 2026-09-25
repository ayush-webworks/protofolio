const header=document.getElementById('header'),progress=document.getElementById('progress');
const links=document.getElementById('links'),hamb=document.getElementById('hamb');
function scrollUI(){const y=scrollY,d=document.documentElement;header.classList.toggle('scrolled',y>10);progress.style.width=(y/(d.scrollHeight-d.clientHeight)*100)+'%';document.querySelectorAll('main section[id]').forEach(s=>{if(y>=s.offsetTop-150){document.querySelectorAll('.links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+s.id));}})}
addEventListener('scroll',scrollUI,{passive:true});scrollUI();
hamb.onclick=()=>{links.classList.toggle('open');hamb.textContent=links.classList.contains('open')?'×':'☰'};
document.querySelectorAll('.links a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('a[href="#"]').forEach(a=>a.onclick=e=>e.preventDefault());
document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),name=f.get('name'),email=f.get('email'),msg=f.get('message');const to='your-email@example.com';const subject=encodeURIComponent('Portfolio enquiry from '+name);const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+msg);document.getElementById('note').textContent='Opening your email app…';location.href=`mailto:${to}?subject=${subject}&body=${body}`;});