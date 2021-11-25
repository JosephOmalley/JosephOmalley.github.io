
import * as THREE from './three.js-master/build/three.module.js';
import { OrbitControls } from './three.js-master/examples/jsm/controls/OrbitControls.js';
import { BoxGeometry, BufferGeometry, Sphere, SphereGeometry } from './three.js-master/build/three.module.js';

const scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});



renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera );


window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  console.log("Resize")
  renderer.setPixelRatio( window.devicePixelRatio);
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.position.setZ(30);
}

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus = new THREE.Mesh( geometry, material );

// scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5); 

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add();

const controls = new OrbitControls(camera, renderer.domElement)

function addStar() {
  const geometry = new SphereGeometry(5, 5, 5); 
  const material = new THREE.MeshStandardMaterial( { color: 0xf1f1f1})
  const star = new THREE.Mesh( geometry, material ); 

  const [x, y ,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );

  star.position.set(x, y, z);
  scene.add(star)
}

Array(200).fill().forEach(addStar)


renderer.setClearColor( 0xffffff );
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.05;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera

function animate() {
  requestAnimationFrame( animate );
  torus.rotation.z += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  controls.update();
  renderer.render( scene, camera );
}
animate();
//////////////Navbar Code//////////////
var toggleCounter = 0;
document.getElementById("CloseNav").addEventListener("click", toggleNav);
function toggleNav(){
  const LinksForNav = document.querySelectorAll(".link");
  if (toggleCounter % 2 == 0) { // even == close the nav 
    LinksForNav.forEach(function(i){i.style.display = "none"});
    document.getElementById("NavBar-Container").style.width = 10; 
    document.getElementById("CloseNav").innerHTML = "→";
    document.getElementById("CloseNav").style.color = "black";
    document.getElementById("CloseNav").style.height = "10px";
    toggleCounter++;
    console.log("this block fired") ;
  }
  else{ // odd == open the nav
    LinksForNav.forEach(function(i){i.style.display = "inline"});
    document.getElementById("CloseNav").innerHTML = "x";
    document.getElementById("CloseNav").style.color = "red";
    toggleCounter++;
  }
}




