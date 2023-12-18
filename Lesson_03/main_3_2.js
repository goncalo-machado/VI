import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);


var texloader = new THREE.TextureLoader();
const geometry = new THREE.BoxGeometry( 1, 1, 1);

// //How is the image mapped to the cube
// //It is the same image on all 6 sides of the cube
// var tex=texloader.load("../images/lena.jpg");
// const material = new THREE.MeshBasicMaterial( { map: tex } );
// const cube = new THREE.Mesh( geometry, material );

const materials = [];
for (var i = 1; i <= 6; i++){
    materials.push(new THREE.MeshBasicMaterial({ map: new
                    THREE.TextureLoader().load('images/Im'+i+'.jpg') }));
}
const cube = new THREE.Mesh( geometry, materials );

scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();