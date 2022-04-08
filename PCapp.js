/*      COOKIE     */

let cookieImage = document.getElementById("cookieImage");
let cookieTxt = document.getElementById("cookieTxt");
let acceptCookie_btn = document.getElementById("acceptCookie_btn");
let removeCookies = document.querySelector('#removeCookies');
let removeCookiesPopup = document.querySelector('.popupRemoveCookiePopup_class');

acceptCookie_btn.onclick = ()=>{
  localStorage.setItem('cookieAccept',true);
  document.querySelector('blurSelection').style.display = 'none';
  removeCookies.style.display = 'block';
}

if(localStorage.getItem('cookieAccept')){
  document.querySelector('blurSelection').style.display = 'none';
  removeCookies.style.display = 'block';
}else{
  document.querySelector('blurSelection').style.display = 'flex';
}


let declineCookie_btn =document.getElementById("declineCookie_btn");

declineCookie_btn.onclick = ()=>{document.querySelector('blurSelection').style.display = 'none';}



removeCookies.onclick = ()=>{
  localStorage.removeItem('cookieAccept');
  removeCookies.style.display = 'none';
  removeCookiesPopup.id = 'removeCookiesPopup';
  setTimeout(()=>{removeCookiesPopup.id = ""},1500);
}


/*            FONT SIZE              */

if(window.innerWidth >= 2000){
  cookieTxt.style.fontSize = '20px';
}
else{
  if(window.innerWidth >= 1000){
    cookieTxt.style.fontSize = '10px';
  }else{
    if(window.innerWidth >= 800){
      cookieTxt.style.fontSize = '6.25px';
    }
  }
}

window.onresize = ()=>{
  if(window.innerWidth >= 2000){
    cookieTxt.style.fontSize = '20px';
  }
  else{
    if(window.innerWidth >= 1000){
      cookieTxt.style.fontSize = '10px';
    }else{
      if(window.innerWidth >= 800){
        cookieTxt.style.fontSize = '6.25px';
      }
    }
  }
}


/*         MOUSE EFFECT       */

let content = document.querySelector('content');
let newCircle = "";
let newCircle_class = 0;

content.onmousemove = (e)=>{
  if(e.target.id != 'content'){}else{
    x=e.clientX;
    y=e.clientY;

    newCircle = document.createElement('circle');
    newCircle.id = newCircle_class;
    newCircle_class++

    newCircle.style.top = y-70;
    newCircle.style.left = x;

    content.appendChild(newCircle);
  }
}

let removeCircle_id = 0;
let removeCircle = setInterval(()=>{
  if(removeCircle_id<newCircle_class){
    document.getElementById(removeCircle_id).remove();
    removeCircle_id++
  }
},10)


/*              CREDITS                */

let credits_btn = document.getElementById('credits');
let blurSelection2 = document.querySelector('blurSelection2');
let creditsPoput = document.querySelector('creditsPoput');

credits_btn.onclick = function(){
  blurSelection2.style.display = 'flex';
}
document.onclick = function(e){
  if(e.target.id =="blur2"){blurSelection2.style.display = 'none';}
}

let closeCredits = document.getElementById('closeCredits');
closeCredits.onclick = function() {
  blurSelection2.style.display = 'none';
}



/*
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

var loader = new THREE.TextureLoader();
var texture = loader.load('1257.jpg');

var geometry = new THREE.TetrahedronGeometry(2, 3);;
var material = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  shading: THREE.FlatShading
});
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

var ambientLight = new THREE.AmbientLight(0x999999 );
scene.add(ambientLight);

var lights = [];
lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
lights[0].position.set( 1, 0, 0 );
lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
lights[1].position.set( 0.75, 1, 0.5 );
lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
lights[2].position.set( -0.75, -1, 0.5 );
scene.add( lights[0] );
scene.add( lights[1] );
scene.add( lights[2] );



renderer.render(scene, camera);

var render = function() {
    requestAnimationFrame(render);


    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

    renderer.render(scene, camera);
}




let cubeColor20 = "hsl(257, 24%, 11%)";

scene.background = new THREE.Color( cubeColor20 );

render()

window.onload = function() {
  setTimeout(()=>{
    document.querySelector('canvas').remove()
  },650)
}*/


/*             PAYPAL              */

let paypal = document.querySelector('#paypal');
paypal.onclick = () => {window.open('https://www.paypal.com/paypalme/feweir','_new');}

/*          CALENDARY            */

let calendar = document.querySelector('#calendary');

setInterval(() => {
  if(localStorage.getItem('cookieAccept')=='true'){
    calendar.onclick = () => {};
    calendar.href = 'PCcalendar/index.html';
  }else{
    calendar.href = '';
    calendar.onclick = () => {alert('THIS CALNDER WORK ONLY WITH COOKIE')}
  }
}, 0);