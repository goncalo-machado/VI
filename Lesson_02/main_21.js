/* Camera models */

import * as THREE from 'three';

/* ------- 1.2 - First example ------- */
/* 1.2 - Define the scene */
const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
/* 2.1 - Camera models */
/* Doc: https://threejs.org/docs/#api/en/cameras/OrthographicCamera */
// Correct the aspect ration
const correct_width_left = -(((6 * window.innerWidth) / window.innerHeight) / 2);
const correct_width_right = ((6 * window.innerWidth) / window.innerHeight) / 2;
const camera = new THREE.OrthographicCamera(correct_width_left, correct_width_right, 3, -3);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
/* ---------------- */

/* 1.2 - Definition of an object/geometry and camera position */
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube ); 
camera.position.z = 5;
/* ----------------------------------------------------------- */

/* 1.2 - Scene rendering */
function render() {
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
    // Update the ratio: 2.1 - Camera models
    const correct_width_left = -(((6 * window.innerWidth) / window.innerHeight) / 2);
    const correct_width_right = ((6 * window.innerWidth) / window.innerHeight) / 2;
    camera.left = correct_width_left
    camera.righ = correct_width_right
    // Update the size
    renderer.setSize(width, height);
    // Update the changes made
    camera.updateProjectionMatrix()
});
/* --------------------- */

/* ----------------------------------- */