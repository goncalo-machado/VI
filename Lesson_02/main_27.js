/* Transformations (rotations) */

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

// Materials
const glassMaterial = new THREE.MeshPhongMaterial( { 
    color: "#45b6fe", 
    specular: 0xFFFFFF,
    shininess: 100, 
    opacity: 0.3, 
    transparent: true,
});

const red = new THREE.MeshPhongMaterial({
    shading: THREE.SmoothShading
});
red.color = new THREE.Color(0.5, 0.0, 0.0);
red.specular= new THREE.Color(0.7, 0.6, 0.6);
red.shininess = 0.25 * 256;

const green = new THREE.MeshPhongMaterial({
    shading: THREE.SmoothShading
});
green.color = new THREE.Color("#00ff00");
green.specular= new THREE.Color(0.7,0.6,0.6);
green.shininess = 0.25 * 256;

const blue = new THREE.MeshPhongMaterial({
    shading: THREE.SmoothShading
});
blue.color = new THREE.Color("#0000ff");
blue.specular= new THREE.Color(0.7,0.6,0.6);
blue.shininess = 0.25 * 256;

// Box
const box_geometry = new THREE.BoxGeometry(2, 1, 4);

const box = new THREE.Mesh( box_geometry, glassMaterial );
box.position.set(0, 0, 0);

// Cylinder
const Cylinder_geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 10, 10);

const Cylinder_1 = new THREE.Mesh( Cylinder_geometry, red );
Cylinder_1.position.set(1, -0.5, 2);
Cylinder_1.rotation.z=Math.PI/2
box.add(Cylinder_1);

const Cylinder_2 = new THREE.Mesh( Cylinder_geometry, red );
Cylinder_2.position.set(1, -0.5, -2);
Cylinder_2.rotation.z=Math.PI/2
box.add(Cylinder_2);

const Cylinder_3 = new THREE.Mesh( Cylinder_geometry, red );
Cylinder_3.position.set(-1, -0.5, -2);
Cylinder_3.rotation.z=Math.PI/2
box.add(Cylinder_3);

const Cylinder_4 = new THREE.Mesh( Cylinder_geometry, red );
Cylinder_4.position.set(-1, -0.5, 2);
Cylinder_4.rotation.z=Math.PI/2
box.add(Cylinder_4);

// Axis
const axis = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 10, 10);

const axis_x = new THREE.Mesh( axis, red );
axis_x.position.set(0.2, 0, 0);
axis_x.rotation.z = Math.PI/2;
box.add(axis_x);

const axis_y = new THREE.Mesh( axis, green );
axis_y.position.set(0, 0.2, 0);
box.add(axis_y);

const axis_z = new THREE.Mesh( axis, blue );
axis_z.position.set(0, 0, 0.2);
axis_z.rotation.x = Math.PI/2;
box.add(axis_z);

scene.add( box );


const alight = new THREE.AmbientLight(0xffffff);
scene.add(alight);
camera.position.z = 5;
// Define the background color
renderer.setClearColor(0xffffff);


/* 1.2 - Scene rendering */
function render() {

    Cylinder_1.rotation.x += 0.01;
    Cylinder_2.rotation.x += 0.01;
    Cylinder_3.rotation.x += 0.01;
    Cylinder_4.rotation.x += 0.01;

    const radius = 1;
    const angle = Date.now() * 0.001;

    const translation_X = 0 + radius * Math.sin(angle);
    const translation_Y = 0;
    const translation_Z = -1 + radius * Math.cos(angle);

    box.position.set(translation_X, translation_Y, translation_Z);

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