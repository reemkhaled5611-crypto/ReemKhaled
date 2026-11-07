var IMG={"as_ch2":"images/as_ch2.webp","as_ch1":"images/as_ch1.webp","palm":"images/palm.jpg","salama":"images/salama.jpg","jv":"images/jv.jpg","mo":"images/mo.jpg","j1":"images/j1.jpg","j2":"images/j2.jpg","j3":"images/j3.jpg","j4":"images/j4.jpg","j5":"images/j5.jpg","j6":"images/j6.jpg","r1":"images/r1.jpg","r2":"images/r2.jpg","l1":"images/l1.jpg","empc":"images/empc.jpg","doha":"images/doha.jpg","cn":"images/cn.jpg","nemo":"images/nemo.jpg","fit":"images/fit.jpg","eskan":"images/eskan.jpg","v1":"images/v1.jpg","v2":"images/v2.jpg","z1":"images/z1.jpg","z2":"images/z2.jpg","cm":"images/cm.jpg","a1":"images/a1.jpg","a2":"images/a2.jpg"};
var VID={jv:"vid/jammy-logo.mp4",mo:"vid/motion.mp4"};var vv=document.getElementById("v-vid");var P=[
{t:"Jammy rebranding",cat:"Branding",d:"A full rebrand of a kids’ snack brand: a new logo, Arabic lettering, characters, packaging and everyday applications.",tags:["Logo design","Illustration","Arabic typography","Packaging","Posters"],s:[["j1","A candy cane and two letter shapes become a bold, memorable logo, refined through research, sketching and color testing."],["jv","A small dot grows into the logo in a short animation on the brand’s yellow."],["j2","Bold Arabic lettering, a bright palette and playful patterns make the brand feel cheerful."],["j3","Custom illustrations and expressive characters designed to create emotional engagement with children."],["j4","A complete packaging system that stays consistent across the range while each product keeps its own colors and illustrations."],["j5","The identity at work on a business card, mugs, wristbands, a shirt, stationery and shipping boxes."],["j6","Street posters with Arabic taglines, each starring one of the characters."]]},
{t:"Ristello",cat:"Branding",d:"A café identity that feels cozy and welcoming: logo, colors, typography and menus.",tags:["Logo design","Menu design","Bilingual type"],s:[["r1","A clean, modern logo: a coffee cup whose ending forms an r, in teal green and soft beige, shown on cups, lids and signage."],["r2","The brand system: a teal and beige palette, Avigea and Corbel for English, DG Trika for Arabic, and bilingual menu spreads."]]},
{t:"Linguas Academy",cat:"Logo design",d:"A logo for a language academy: a flowing L and a blue-to-pink gradient that stand for growth, creativity and global connection.",tags:["Logo","Gradient","Mockups"],s:[["l1","The logo on a foil-stamped dark card and on textured paper, with a note on what the shapes mean."]]},
{t:"Nemo store",cat:"Logo design",d:"A playful logo for a kids’ store: chunky rounded letters, an E drawn as a snorkeling character and the tagline “Little Hands, Big Joy!”",tags:["Logo","Character","Tagline"],s:[["nemo","Chunky letters, bubbles and a balloon-like O give the logo an underwater feel."]]},
{t:"Chinese page",cat:"Logo design",d:"A logo for a page that teaches Chinese: a red circle for energy and stacked pages shaped like a pagoda, with the phrase “Chinese isn’t hard.”",tags:["Logo","Calligraphy"],s:[["cn","A red circle, a pagoda made of stacked pages and bold brush-style strokes."]]},
{t:"El Doha company",cat:"Logo design",u:1,d:"A university project: multiple logo options for El Doha company, with a palette, grid and packaging mockups.",tags:["Logo options","Arabic calligraphy","Packaging"],s:[["doha","Arabic logo options with a four-color palette, a construction grid and packaging mockups."]]},
{t:"EMPC",cat:"Logo design",u:1,d:"A university project: several logo options for the Egyptian Media Production Company.",tags:["Logo options","Arabic","Stationery"],s:[["empc","Five logo directions on business cards, a wall sign and paper mockups."]]},
{t:"Planet Fitness",cat:"Social media",d:"Social media posts for a gym, in English and Arabic: classes, offers and Ramadan promotions.",tags:["Social media","Offers","Arabic and English"],s:[["fit","Posts for yoga, kung-fu, ballet, crossfit, dance and Ramadan offers, each with its own color and photo."]]},
{t:"Eskan Misr",cat:"Social media",d:"Arabic social media posts for a shopping mall project: property shots, key features and an Eid greeting.",tags:["Social media","Arabic","Real estate"],s:[["eskan","A consistent maroon and white post template with photos, short headlines and a festive Eid design."]]},
{t:"Valu",cat:"Printed media",u:1,d:"Brochures and flyers in Arabic for the Valu brand, built on an orange and teal system.",tags:["Brochures","Flyers","Arabic"],s:[["v1","Tri-fold brochures with orange and teal layouts, phone illustrations and a clear contact panel."],["v2","Flyers and leaflets in the same orange and teal look."]]},
{t:"Zawya",cat:"Printed media",u:1,d:"Brochure concepts for an independent cinema, in two very different visual directions.",tags:["Brochures","Layout","Illustration"],s:[["z1","A calm direction in grey and blush, with film-set illustrations and a bold headline."],["z2","A brighter Arabic direction with a retro cinema look in teal, pink and cream."]]},
{t:"Child Museum",cat:"Printed media",u:1,d:"A colorful tri-fold brochure in Arabic for a children’s museum.",tags:["Brochure","Arabic","Illustration"],s:[["cm","Rounded shapes, a rocket and bright colors make each panel easy to tell apart."]]},
{t:"Palm Egypt website",cat:"UI/UX design",u:1,d:"A modern, user-centered website for Palm Egypt, an exporter of dates, fruits and vegetables, with clear navigation and responsive layouts.",tags:["Web design","Responsive","Illustration"],s:[["palm","Home, farms and shop pages in orange, green and red, with hand-drawn fruit and palm illustrations."]]},
{t:"Salama Hegazy website",cat:"UI/UX design",u:1,d:"A modern, responsive Arabic website for Salama Hegazy, with a clean interface, intuitive navigation and a clear visual hierarchy.",tags:["Web design","Arabic","Accessibility"],s:[["salama","Dark pages with gold accents for his achievements and key works, using archival-style portraits and theater scenes."]]},
{t:"Smart App",cat:"UI/UX design",d:"Buttons, icons and menus for a language-learning app, in bright, glossy styles.",tags:["UI kit","Icons","App UI"],s:[["a1","A set of action buttons and icons: record, play, skip, stars and lesson shortcuts."],["a2","Menu buttons for Arabic, English, Putonghua and Cantonese, plus games and lessons."]]},
{t:"Motion graphics",cat:"Motion graphics",u:1,d:"A short animation of stacked cards, each with 3D icons: payment hold, no data, account bans and no control.",tags:["Animation","3D icons","Motion"],s:[["mo","Glowing titles appear and each card slides in with its own 3D icon."]]}
];
var cats=["All","Branding","Logo design","Social media","Printed media","UI/UX design","Motion graphics"],cur="All";
var fil=document.getElementById("filters"),grid=document.getElementById("projects"),dlg=document.getElementById("viewer"),vi=document.getElementById("v-img"),pj=null,ix=0;
function cards(){
  grid.innerHTML="";
  P.forEach(function(p){
    if(cur!=="All"&&p.cat!==cur)return;
    var b=document.createElement("button");b.type="button";b.className="pcard";
    var im=document.createElement("img");im.src=IMG[p.cv||p.s[0][0]];im.alt="";im.loading="lazy";
    var d=document.createElement("span");d.className="b";
    var t=document.createElement("strong");t.textContent=p.t;
    var m=document.createElement("small");m.textContent=p.cat+(p.s.length>1?", "+p.s.length+" slides":"");
    d.appendChild(t);d.appendChild(m);
    if(p.u){var u=document.createElement("span");u.className="u";u.textContent="Unofficial project";d.appendChild(u)}
    b.appendChild(im);b.appendChild(d);b.addEventListener("click",function(){open(p)});grid.appendChild(b);
  });
}
cats.forEach(function(c){
  var b=document.createElement("button");b.type="button";b.textContent=c;b.setAttribute("aria-pressed",c===cur?"true":"false");
  b.addEventListener("click",function(){cur=c;Array.prototype.forEach.call(fil.children,function(x){x.setAttribute("aria-pressed",x.textContent===c?"true":"false")});cards()});
  fil.appendChild(b);
});
function slide(i,anim){
  ix=i;var s=pj.s[i];vv.pause();if(VID[s[0]]){vi.hidden=true;vv.hidden=false;vv.poster=IMG[s[0]];vv.src=VID[s[0]];vv.setAttribute("aria-label",pj.t+": "+s[1])}else{vv.hidden=true;vi.hidden=false;vi.src=IMG[s[0]];vi.alt=pj.t+": "+s[1]}
  document.getElementById("v-cap").textContent=s[1];
  document.getElementById("v-count").textContent=pj.s.length>1?(i+1)+" of "+pj.s.length:"";
  document.getElementById("v-prev").disabled=i===0;document.getElementById("v-next").disabled=i===pj.s.length-1;
  document.querySelector(".vnav").style.display=pj.s.length>1?"flex":"none";
  if(anim){vi.classList.remove("swap");void vi.offsetWidth;vi.classList.add("swap")}
}
function open(p){
  pj=p;document.getElementById("v-title").textContent=p.t;
  document.getElementById("v-meta").textContent=p.cat+(p.u?", unofficial project":"");
  document.getElementById("v-desc").textContent=p.d;
  var tg=document.getElementById("v-tags");tg.innerHTML="";
  p.tags.forEach(function(t){var li=document.createElement("li");li.textContent=t;tg.appendChild(li)});
  slide(0,false);dlg.showModal();dlg.scrollTop=0;
}
document.getElementById("v-prev").addEventListener("click",function(){if(ix>0)slide(ix-1,true)});
document.getElementById("v-next").addEventListener("click",function(){if(ix<pj.s.length-1)slide(ix+1,true)});
document.getElementById("v-close").addEventListener("click",function(){dlg.close()});
dlg.addEventListener("click",function(e){var r=dlg.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dlg.close()});
dlg.addEventListener("keydown",function(e){if(e.key==="ArrowRight"&&ix<pj.s.length-1)slide(ix+1,true);if(e.key==="ArrowLeft"&&ix>0)slide(ix-1,true)});
dlg.addEventListener("close",function(){vv.pause()});
Array.prototype.forEach.call(document.querySelectorAll(".deco"),function(i){i.src=IMG[i.dataset.k]});
cards();
/* confetti when you tap the smiley, the photo or Hire me */
var calm=window.matchMedia("(prefers-reduced-motion:reduce)").matches,cv=document.getElementById("confetti"),ctx=cv.getContext("2d"),bits=[],running=false;
var cols=["#FFD21F","#E8302F","#1F3FD1","#F26A2E","#A9CDEF","#BFE3C4"];
function fit(){var d=window.devicePixelRatio||1;cv.width=innerWidth*d;cv.height=innerHeight*d;ctx.setTransform(d,0,0,d,0,0)}
function burst(x,y){
  if(calm)return;fit();
  for(var i=0;i<70;i++){var a=Math.random()*6.283,v=4+Math.random()*8;
    bits.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-5,w:6+Math.random()*7,h:4+Math.random()*5,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:cols[i%cols.length]})}
  if(!running){running=true;requestAnimationFrame(tick)}
}
function tick(){
  ctx.clearRect(0,0,innerWidth,innerHeight);
  bits=bits.filter(function(b){b.vy+=.28;b.vx*=.99;b.x+=b.vx;b.y+=b.vy;b.r+=b.vr;return b.y<innerHeight+20});
  bits.forEach(function(b){ctx.save();ctx.translate(b.x,b.y);ctx.rotate(b.r);ctx.fillStyle=b.c;ctx.fillRect(-b.w/2,-b.h/2,b.w,b.h);ctx.restore()});
  if(bits.length)requestAnimationFrame(tick);else{running=false;ctx.clearRect(0,0,innerWidth,innerHeight)}
}
Array.prototype.forEach.call(document.querySelectorAll(".pop"),function(el){
  el.addEventListener("click",function(e){var r=el.getBoundingClientRect();burst(e.clientX||r.left+r.width/2,e.clientY||r.top+r.height/2)});
});
