/*------------------------- Global declarations --------------------------*/

let scene; // Global for the scene, initialized in the initScene function
let sceneCamera; // Global for the camera, also intialized in the initScene function
let sceneRenderer; // Global for the renderer, also initialized in the initScene function

/*-------------- Main initializer function for scene object --------------*/

function initScene() {
    scene = new THREE.Scene; // Initialize the scene object using three.js's scene class
    scene.background = new THREE.Color(0x29333B); // Set the background color to a dark off-grey using hexidecimal format

    sceneCamera = new THREE.PerspectiveCamera(50, (window.innerWidth/window.innerHeight), 1, 5000); // Initialize camera with FOV, aspect ratio, and clipping distances

    ambientLighting = new THREE.AmbientLight(0xFFFEE1, 100); // Create an ambient light source with a off-yellow color and intensity of 100
    scene.add(ambientLighting) // Add the ambient light to the existing scene

    sceneRenderer = new THREE.WebGLRenderer({antialias:true}); // Initialize the WebGL renderer that will be used to render the scene with antialiasing enabled (to prevent pixelation in the output)
    sceneRenderer.setSize(window.innerWidth,window.innerHeight); // Set the aspect ratio of the renderer to that the of the window size

    document.body.appendChild(sceneRenderer.domElement); // Add the DOM element that the renderer will use to render the scene

    loadModel(scene, sceneCamera, sceneRenderer); // Run the model loader function with the scene, camera, and renderer as arguments

    sceneRenderer.render(scene, sceneCamera);  // Render the scene
}

/*------------------------ Model loader for scene ------------------------*/

function loadModel(modelScene, modelCamera, modelRenderer) {
    let modelLoader = new THREE.GLTFLoader(); // Create the model loader object
    modelLoader.load('./model/scene.gltf', function(model){ // main function for loading the model from the .gltf file
        modelScene.add(model.scene); // add the model to the specified scene
    });
}

/*--------------- Code to be executed on application start ---------------*/
initScene();