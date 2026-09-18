const opener=document.getElementById('open');
const letter=document.getElementById('letter');
const video=document.getElementById('video');
const hint=document.getElementById('hint');
const replay=document.getElementById('replay');
const url=window.BIRTHDAY_VIDEO;
let transitionTimer;
if(url){video.src=url;video.hidden=false;document.getElementById('message').hidden=true;replay.hidden=false;}
opener.addEventListener('click',()=>{
  opener.classList.add('opened');opener.setAttribute('aria-expanded','true');hint.classList.add('fade');
  if(url)video.play().catch(()=>{});
  clearTimeout(transitionTimer);transitionTimer=setTimeout(()=>{
    opener.hidden=true;hint.hidden=true;letter.hidden=false;
    document.getElementById('close').focus({preventScroll:true});
  },window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:750);
});
document.getElementById('close').addEventListener('click',()=>{
  video.pause();letter.hidden=true;opener.hidden=false;hint.hidden=false;
  opener.classList.remove('opened');hint.classList.remove('fade');opener.setAttribute('aria-expanded','false');opener.focus({preventScroll:true});
});
replay.addEventListener('click',()=>{video.currentTime=0;video.play().catch(()=>{});});
video.addEventListener('error',()=>{document.getElementById('video-error').hidden=false;});
