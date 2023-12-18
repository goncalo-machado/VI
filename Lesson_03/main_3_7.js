import * as THREE from 'three';

const DISTANCE_FROM_EARTH = 356400;
const PERIOD = 28;
const INCLINATION = 0.089;
const SIZE_IN_EARTHS = 1 / 3.7;
const EARTH_RADIUS = 6371;

var rotation_speed = 0.0025

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const earth_geometry = new THREE.SphereGeometry( 1, 32, 32 ); 

var texloader = new THREE.TextureLoader();
var earth_tex = texloader.load("../images/earth_surface_2048.jpg");
var moon_tex = texloader.load("../images/moon_1024.jpg");

const basic_material = new THREE.MeshBasicMaterial( { map: earth_tex } );
const phong_material = new THREE.MeshPhongMaterial( { map: earth_tex } ); 
const earth = new THREE.Mesh( earth_geometry, phong_material );
earth.rotation.z += 0.41
scene.add( earth );

const moon_geometry = new THREE.SphereGeometry(SIZE_IN_EARTHS, 32, 32)
const moon_material = new THREE.MeshPhongMaterial( {map: moon_tex});
const moon = new THREE.Mesh(moon_geometry,moon_material);
earth.add( moon );

var distance = DISTANCE_FROM_EARTH / EARTH_RADIUS;
moon.position.set(Math.sqrt(distance / 2), 0,-Math.sqrt(distance / 2));

moon.rotation.y = Math.PI;
moon.rotation.x = INCLINATION;

const alight = new THREE.AmbientLight(0x333333);
scene.add(alight);

const directionalLight = new THREE.DirectionalLight( 0xfffff, 3 );
scene.add( directionalLight );
directionalLight.position.set( 1, 0, 0 );
directionalLight.target.position.set( 0, 0, 0 );

camera.position.z = 5;

document.addEventListener("keydown", onDocumentKeyDown, false);

var light_on = true
var phong_mesh = true

function onDocumentKeyDown(event){ 
    // Get the key code of the pressed key 
    var keyCode = event.which;
    console.log("Key  " + keyCode);

    switch(keyCode){
        // l Key
        case 76:
            if (light_on){
                scene.remove(directionalLight);
                light_on = false;
                console.log('Directional Light Off');
            }else{
                scene.add(directionalLight);
                light_on = true;
                console.log('Directional Light On');
            }
            break;
        // k key
        case 75:
            if (phong_mesh){
                earth.material = basic_material;
                phong_mesh = false;
                console.log('Using Basic Material');
            }else{
                earth.material = phong_material;
                phong_mesh = true;
                console.log('Using Phong Material');
            }
            break;
        // + key
        case 107:
            directionalLight.intensity += 0.1;
            console.log('Increased directional light intensity to ' + directionalLight.intensity.toFixed(1));
            break;
        // - key
        case 109:
            if (directionalLight.intensity >= 0){
                directionalLight.intensity -= 0.1;
                console.log('Reduced directional light intensity to ' + directionalLight.intensity.toFixed(1));
            }else{
                console.log('Directional light intensity cannot be reduced further');
            }
            break;
        // left arrow key
        case 37:
            rotation_speed -= 0.0005;
            console.log('Increased rotation speed to ' + rotation_speed.toFixed(4));
            break;
        // right arrow key
        case 39:
            rotation_speed += 0.0005;
            console.log('Increased rotation speed to ' + rotation_speed.toFixed(4));
            break;
        // up arrow key
        case 38:
            earth.rotation.z += 0.01;
            console.log('Increased earth inclination to ' + earth.rotation.z.toFixed(2));
            break;
        // down arrow key
        case 40:
            earth.rotation.z -= 0.01;
            console.log('Increased earth inclination to ' + earth.rotation.z.toFixed(2));
            break;
    }
}

function animate() {
	requestAnimationFrame( animate );
    earth.rotation.y += rotation_speed;
    moon.rotation.y += (earth.rotation.y / PERIOD);
	renderer.render( scene, camera );
}
animate();