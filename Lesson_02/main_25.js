/* Transparency */

import * as THREE from 'three';

/* ------- 1.2 - First example ------- */
/* 1.2 - Define the scene */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
/* ---------------- */

// Sphere Geometry
const SPHERE_geometry = new THREE.SphereGeometry(1,10,10);

const emerald = new THREE.MeshPhongMaterial({
    shading: THREE.SmoothShading
});
emerald.color = new THREE.Color(0.07568, 0.61424, 0.07568);
emerald.specular= new THREE.Color(0.633, 0.7278, 0.633);
emerald.shininess = 0.6 * 256;

const gold = new THREE.MeshPhongMaterial({
    shading: THREE.SmoothShading
});
gold.color = new THREE.Color(0.75164, 0.60648, 0.22648);
gold.specular= new THREE.Color(0.628281, 0.555802, 0.366065);
gold.shininess = 0.4 * 256;

const SPHERE = new THREE.Mesh( SPHERE_geometry, emerald );
SPHERE.position.x = -2.5
scene.add( SPHERE );

const SPHERE_2 = new THREE.Mesh( SPHERE_geometry, gold );
SPHERE_2.position.x = 2.5
scene.add( SPHERE_2 );

// -----------------"--"-----------------

const SPHERE_geometry_2 = new THREE.SphereGeometry(1.5,10,10);

const glassMaterial = new THREE.MeshPhongMaterial( { 
    color: 0x222222, 
    specular: 0xFFFFFF,
    shininess: 100,
    opacity: 0.8,
    transparent: true
});

const SPHERE_inner = new THREE.Mesh( SPHERE_geometry_2, glassMaterial );
SPHERE_inner.position.x = -2.5
scene.add( SPHERE_inner );

const SPHERE_2_inner = new THREE.Mesh( SPHERE_geometry_2, glassMaterial );
SPHERE_2_inner.position.x = 2.5
scene.add( SPHERE_2_inner );

// -----------------"--"-----------------

camera.position.z = 5;

/* 2.3 - Lighting and materials */
const directionalLight_1 = new THREE.DirectionalLight( 0x0000ff );
directionalLight_1.position.set( 5, 0, 0 );
scene.add( directionalLight_1 );

const directionalLight_2 = new THREE.DirectionalLight( 0xff0000 );
directionalLight_2.position.set( -5, 0, 0 );
scene.add( directionalLight_2 );

const spotlight = new THREE.SpotLight( 0xffffff );
spotlight.position.set( 0, 0, -5 );
scene.add(spotlight);

const alight = new THREE.AmbientLight(0xffffff);
scene.add(alight);
/* ---------------- */

/* ----------------------------------------------------------- */

/* 1.2 - Scene rendering */
function render() {

    SPHERE.rotation.x += 0.01;
    SPHERE.rotation.y += 0.01;

    SPHERE_2.rotation.x += 0.01;
    SPHERE_2.rotation.y += 0.01;

	requestAnimationFrame(render);
	renderer.render(scene, camera);
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

/* ----------------------------------- */