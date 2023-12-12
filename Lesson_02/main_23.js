/* Lighting and materials */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { TrackballControls } from 'three/addons/controls/TrackballControls.js'
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js'
import { FlyControls } from 'three/addons/controls/FlyControls.js'

/* ------- 1.2 - First example ------- */
/* 1.2 - Define the scene */
const scene = new THREE.Scene();
/* Doc: https://threejs.org/docs/#api/en/cameras/OrthographicCamera */
// const camera = new THREE.OrthographicCamera(-3, 3, 3, -3, 0.1, 1000 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
/* ---------------- */

/* 2.2 - Orbit control */
const controls = new OrbitControls(camera, renderer.domElement);
// const controls = new TrackballControls(camera, renderer.domElement);
// const controls = new FirstPersonControls(camera, renderer.domElement);
// const controls = new FlyControls(camera, renderer.domElement);

/* 1.2 - Definition of an object/geometry and camera position */
const geometry = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
/* 2.3 - Lighting and materials */
const material = new THREE.MeshPhongMaterial({
    color: '#006063',
specular: '#a9fcff',
shininess: 100
});
/* ---------------- */
const cube = new THREE.Mesh( geometry, material );
scene.add( cube ); 
camera.position.z = 5;

/* 2.3 - Lighting and materials */
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
const alight = new THREE.AmbientLight(0xffffff);
scene.add(alight);
/* ---------------- */

/* ----------------------------------------------------------- */

/* 1.2 - Scene rendering */
function render() {
    /* 1.2 - Scene animation */
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    /* --------------- */
	requestAnimationFrame(render);
	renderer.render(scene, camera);

    /* 2.2 - Orbit control */
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

/* ----------------------------------- */