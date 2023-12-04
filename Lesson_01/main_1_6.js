import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const BoxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const BoxMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 , wireframe : true} );
const Box = new THREE.Mesh( BoxGeometry, BoxMaterial );
scene.add( Box );

const SphereGeometry = new THREE.SphereGeometry( 1, 20, 10 );
const Spherematerial = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe : true} );
const Sphere = new THREE.Mesh( SphereGeometry, Spherematerial );
Sphere.position.x = -2
scene.add( Sphere );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    Box.rotation.x += 0.01;
    Box.rotation.y += 0.01;

    Sphere.rotation.x += 0.01;
    Sphere.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();