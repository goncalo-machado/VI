import * as THREE from 'three';

var newWidth = window.innerWidth
var newHeight = window.innerHeight
var height = 6

var width = (newWidth*height) / newHeight

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(0 - (width/2), width/2, 3, -3);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 , wireframe : true} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
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