import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var texloader = new THREE.TextureLoader();
var tex=texloader.load("../images/lena.jpg");

//Modify the size of the plane, what happens to the texture?
//The texture becomes stretched
const geometry = new THREE.PlaneGeometry( 1, 1);
const material = new THREE.MeshBasicMaterial( { map: tex } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();