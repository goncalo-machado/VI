/* Transformations (scale and rotation) */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

/* ------- 1.2 - First example ------- */
/* 1.2 - Define the scene */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
/* ---------------- */

const controls = new OrbitControls(camera, renderer.domElement);

// Box
const box_geometry = new THREE.BoxGeometry(2, 1, 4);
const glassMaterial = new THREE.MeshPhongMaterial( { 
    color: "#45b6fe", 
    specular: 0xFFFFFF,
    shininess: 100, 
    opacity: 0.3, 
    transparent: true,
});

const box = new THREE.Mesh( box_geometry, glassMaterial );
box.position.set(0, 0, 0);

// Sphere
const SPHERE_geometry = new THREE.SphereGeometry(0.5, 10, 10);
const red = new THREE.MeshPhongMaterial({
    shading: THREE.SmoothShading
});
red.color = new THREE.Color(0.5, 0.0, 0.0);
red.specular= new THREE.Color(0.7, 0.6, 0.6);
red.shininess = 0.25 * 256;

const sphere_1 = new THREE.Mesh( SPHERE_geometry, red );
sphere_1.position.set(1, -0.5, 2);
box.add(sphere_1);

const sphere_2 = new THREE.Mesh( SPHERE_geometry, red );
sphere_2.position.set(1, -0.5, -2);
box.add(sphere_2);

const sphere_3 = new THREE.Mesh( SPHERE_geometry, red );
sphere_3.position.set(-1, -0.5, -2);
box.add(sphere_3);

const sphere_4 = new THREE.Mesh( SPHERE_geometry, red );
sphere_4.position.set(-1, -0.5, 2);
box.add(sphere_4);

scene.add( box );

var box_matrix = box.matrix
console.log('Box Matrix:', box_matrix)

var sphere_1_matrix = sphere_1.matrix

console.log('Sphere_1 Matrix: ',sphere_1_matrix)


const alight = new THREE.AmbientLight(0xffffff);
scene.add(alight);
camera.position.z = 5;
// Define the background color
renderer.setClearColor(0xffffff);


/* 1.2 - Scene rendering */
function render() {

    sphere_1.rotation.x += 0.01;
    sphere_2.rotation.x += 0.01;
    sphere_3.rotation.x += 0.01;
    sphere_4.rotation.x += 0.01;
    
	requestAnimationFrame(render);
	renderer.render(scene, camera);
    controls.update();
}
render();
/* --------------- */

/* 1.5 - Viewport Update */
window.addEventListener('resize', function () {
    // Get window size
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Update the size
    renderer.setSize(width, height);
    // Update the ratio
    camera.aspect = width / height;
    // Update the changes made
    camera.updateProjectionMatrix()
});
/* --------------------- */