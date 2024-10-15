import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function model3d() {
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
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container3D').appendChild(renderer.domElement);
  camera.position.z = 10;

  const topLight = new THREE.DirectionalLight(0xffffff, 3);
  topLight.position.set(500, 500, 500);
  topLight.castShadow = true;
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0x333333, 10);
  scene.add(ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    if (object) {
      object.rotation.y += 0.01;
      object.rotation.x += 0.005;
    }

    controls.update(); // 更新控制器
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
}
