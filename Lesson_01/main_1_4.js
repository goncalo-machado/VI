import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000)
document.body.appendChild( renderer.domElement );

var geometry1 = new THREE.BufferGeometry();
var geometry2 = new THREE.BufferGeometry();
var geometry3 = new THREE.BufferGeometry();
var geometry4 = new THREE.BufferGeometry();

const vertices1 = new Float32Array( [
	0.0,  0.0,  0.0,
	1.0,  0.0,  0.0,
	0.5,  0.75, 0.0,
] );

const vertices2 = new Float32Array( [
	0.0,  0.0,  0.0,
	-0.7,  0.25, 0.0,
	-0.35,-1.0,  0.0,
] );

const vertices3 = new Float32Array( [
	-0.2, 0.15, 0.0,
	0.35, 0.65, 0.0,
	-0.85, 0.9,  0.0,
] );

const vertices4 = new Float32Array( [
	0.15,-0.95, 0.0,
	0.90,-0.7,  0.0,
	0.65, 0.10, 0.0,
] );

geometry1.setAttribute( 'position', new THREE.BufferAttribute( vertices1, 3 ) );
geometry2.setAttribute( 'position', new THREE.BufferAttribute( vertices2, 3 ) );
geometry3.setAttribute( 'position', new THREE.BufferAttribute( vertices3, 3 ) );
geometry4.setAttribute( 'position', new THREE.BufferAttribute( vertices4, 3 ) );


var colors = new Uint8Array( [
	255,  0,  0,  
	0,  255,  0,  
	0,  0,  255,  
] );

geometry3.setAttribute( 'color', new THREE.BufferAttribute( colors, 3, true) );

const material1 = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
const material2 = new THREE.MeshBasicMaterial( {color: 0xFFFF00} );
const material3 = new THREE.MeshBasicMaterial( {vertexColors: true} );
const material4 = new THREE.MeshBasicMaterial( { color: 0xffffff , wireframe : true} );

const triangle1 = new THREE.Mesh( geometry1, material1 );
const triangle2 = new THREE.Mesh( geometry2, material2 );
const triangle3 = new THREE.Mesh( geometry3, material3 );
const triangle4 = new THREE.Mesh( geometry4, material4 );

scene.add( triangle1 );
scene.add( triangle2 );
scene.add( triangle3 );
scene.add( triangle4 );

scene.position.z = -2;

function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();