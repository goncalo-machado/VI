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
const Spherematerial = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe : true} );
const Sphere = new THREE.Mesh( SphereGeometry, Spherematerial );
Sphere.position.x = -2
scene.add( Sphere );

const ConeGeometry = new THREE.ConeGeometry( 1, 2, 15, 5); 
const ConeMaterial = new THREE.MeshBasicMaterial( {color: 0x5050ff, wireframe : true} );
const Cone = new THREE.Mesh(ConeGeometry, ConeMaterial ); 
scene.add( Cone );

Cone.position.x = -5

const CylinderGeometry = new THREE.CylinderGeometry( 1, 1, 1, 20 ); 
const CylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe : true} ); 
const Cylinder = new THREE.Mesh( CylinderGeometry, CylinderMaterial ); 
scene.add( Cylinder );

Cylinder.position.x = 2

const TorusKnotGeometry = new THREE.TorusKnotGeometry( 1, 0.2, 100, 16 ); 
const TorusKnotMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 , wireframe : true} ); 
const TorusKnot = new THREE.Mesh( TorusKnotGeometry, TorusKnotMaterial ); 
scene.add( TorusKnot );

TorusKnot.position.x = 5

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    Box.rotation.x += 0.01;
    Box.rotation.y += 0.01;

    Sphere.rotation.x += 0.01;
    Sphere.rotation.y += 0.01;

    Cone.rotation.x += 0.01;
    Cone.rotation.y += 0.01;

    Cylinder.rotation.x += 0.01;
    Cylinder.rotation.y += 0.01;

    TorusKnot.rotation.x += 0.01;
    TorusKnot.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();