import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';



var newWidth = window.innerWidth
var newHeight = window.innerHeight
var height = 6

var width = (newWidth*height) / newHeight

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(0 - (width/2), width/2, 3, -3);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 , wireframe : true} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    controls.update();
}
animate();

window.addEventListener('resize', function () {				       
    var newWidth = window.innerWidth
    var newHeight = window.innerHeight
    var height = 6

    var width = (newWidth*height) / newHeight

    camera.left = 0 - (width/2)
    camera.right = width/2
    renderer.setSize(newWidth, newHeight)
    camera.updateProjectionMatrix()
    });