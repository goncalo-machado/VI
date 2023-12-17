import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.SphereGeometry( 1, 32, 32 ); 

var texloader = new THREE.TextureLoader();
var tex=texloader.load("../images/earth_surface_2048.jpg");

const material = new THREE.MeshPhongMaterial( { map: tex } ); 
const sphere = new THREE.Mesh( geometry, material );
sphere.rotation.z += 0.41
scene.add( sphere );

const alight = new THREE.AmbientLight(0x333333);
scene.add(alight);

const directionalLight = new THREE.DirectionalLight( 0xfffff, 3 );
scene.add( directionalLight );
directionalLight.position.set( 1, 0, 0 );
directionalLight.target.position.set( 0, 0, 0 );



camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    sphere.rotation.y += 0.0025;
    // cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();