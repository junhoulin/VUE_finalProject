import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function model3d(container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  let object;

  const loader = new GLTFLoader();

  loader.load(
    '/model.gltf',
    (gltf) => {
      object = gltf.scene;
      scene.add(object);
    },
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  document.getElementById('container3D').appendChild(renderer.domElement);
  if (container.clientWidth <= 160) {
    camera.position.z = 10;
  } else {
    camera.position.z = 6;
  }

  const topLight = new THREE.DirectionalLight(0xffffff, 3);
  topLight.position.set(500, 500, 1000);
  topLight.castShadow = true;
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0x333333, 10);
  scene.add(ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);

  const bounceSpeed = 0.03;
  let bounceDirection = 1;

  function animate() {
    requestAnimationFrame(animate);
    if (object) {
      object.position.y += bounceSpeed * bounceDirection;
      if (object.position.y > 1 || object.position.y < -1) {
        bounceDirection *= -1;
      }
    }
    controls.update();
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.render(scene, camera);
  });

  animate();
}
