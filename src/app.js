/*-------------------------------- Imports -------------------------------*/
import * as THREE from './modules/three.module.js';
import { GLTFLoader } from './modules/GLTFLoader.js';
import { OrbitControls } from './modules/OrbitControls.js';
import { GUI } from './modules/dat.gui.module.js';

/*-------------------------------- Globals ------------------------------ */
let scene, renderer, camera, controls;

/*-------------- Main initializer function for scene object --------------*/

function initScene() {
	let params = { // Parameters that can be tweaked
		lightColor: 0xffffff,
		lightIntensity: 10,
		bgColor: 0x29333b,
		camPos: [400, 700, 400],
		modelScale: [500, 500, 500]
	};

	scene = new THREE.Scene(); // Initialize the scene object using three.js's scene class
	scene.background = new THREE.Color(params.bgColor); // Set the background color to a dark off-grey using hexadecimal format

	const gui = new GUI(); // Create a new GUI object to tweak the values of the scene

	camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100000); // Initialize camera with FOV, aspect ratio, and clipping distances
	// Camera initial position offsets
	camera.position.y = params.camPos[0];
	camera.position.x = params.camPos[1];
	camera.position.z = params.camPos[2];

	const ambientLighting = new THREE.AmbientLight(params.lightColor, 10); // Create an ambient light source 
	scene.add(ambientLighting); // Add the ambient light to the existing scene

	const directionalLighting = new THREE.DirectionalLight(params.lightColor, 10); // Create a directional light source
	directionalLighting.position.set(4,0,1); // Position the directional light
	directionalLighting.castShadow = true; // Enable shadows for the light
	scene.add(directionalLighting); // Add the light to the scene

	let sceneLightMenu = gui.addFolder('Scene Lighting'); // Add a menu for scene lighting

	sceneLightMenu.addColor(params, 'lightColor') // Parameter to control the color of scene lighting
	.onChange(function() { // Update the lights with new parameters on change
		ambientLighting.color.set(params.lightColor); // Update the ambient light
		directionalLighting.color.set(params.lightColor); // Update the directional light
	})
	.name('Light Color'); // Name for parameter

	sceneLightMenu.add(params, 'lightIntensity', 0, 100) // Parameter to control the intensity of the lighting
	.onChange(function() { // Update the light with new parameters upon change
		ambientLighting.intensity = params.lightIntensity; // Update the ambient light
		directionalLighting.intensity = params.lightIntensity; // Update the directional light
	})
	.name('Light Intensity'); // Name for parameter

	renderer = new THREE.WebGLRenderer({ antialias: true }); // Initialize the WebGL renderer that will be used to render the scene with antialiasing enabled (to prevent pixelation in the output)
	renderer.setSize(window.innerWidth, window.innerHeight); // Set the aspect ratio of the renderer to that the of the window size

	document.body.appendChild(renderer.domElement); // Add the DOM element that the renderer will use to render the scene

	controls = new OrbitControls(camera, renderer.domElement); // Add orbital controls using three.js's built-in script for orbital camera movement

	let modelLoader = new GLTFLoader(); // Create the model loader object
	modelLoader.load('./src/model/scene.gltf', function (mesh) { // Main function for loading the model from the .gltf file
		let model = mesh.scene; // Derive the renderable model from the .gltf file
		model.scale.set(params.modelScale[0], params.modelScale[1], params.modelScale[2]); // Scale the model according to parameters
		scene.add(model); // Add the model to the specified scene
		let scaleMenu = gui.addFolder('Object Scaling'); // Add a menu to scale the model
		scaleMenu.add(model.scale, 'x', 1, 5000).name('Scale X'); // Menu scaling X
		scaleMenu.add(model.scale, 'y', 1, 5000).name('Scale X'); // Menu scaling Y
		scaleMenu.add(model.scale, 'z', 1, 5000).name('Scale X'); // Menu scaling Z
		animateScene(scene, camera, renderer, controls); // Render the scene using the animate function
	});
}

/*------------------------- Animation functions --------------------------*/

function animateScene(){ // Recursive function to render animate frames within the scene
	requestAnimationFrame(animateScene); // Request the current animation frame recursively
	controls.update(); // Run control update routine so orbital controls work smoothly
	renderer.render(scene, camera); // Re-render the scene for every update
}

/*--------------- Code to be executed on application start ---------------*/
initScene(); // Initial the renderer and display the scene

window.addEventListener( 'resize', onWindowResize, false ); // Add an event listener for resizing the window

function onWindowResize(){ // Function to correct the camera aspect when the window is resized
    camera.aspect = window.innerWidth / window.innerHeight; // Resize the camera aspect to the current window size
    camera.updateProjectionMatrix(); // Update the camera's position matrix
    renderer.setSize( window.innerWidth, window.innerHeight ); // Resize the renderer accordingly
}