import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class GemModel {
  constructor(containerId, color, refractionRatio = 0.98) {
    this.container = document.getElementById(containerId);
    this.color = color;
    this.refractionRatio = refractionRatio;
    this.init();
  }

  init() {
    // Create scene
    this.scene = new THREE.Scene();

    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 3;

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.container.appendChild(this.renderer.domElement);

    // Add controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.rotateSpeed = 0.5;

    // Create gem geometry
    this.createGem();

    // Add lights
    this.addLights();

    // Start animation
    this.animate();

    // Handle window resize
    window.addEventListener("resize", () => this.onWindowResize());
  }

  createGem() {
    // Create diamond geometry
    const geometry = new THREE.OctahedronGeometry(1, 2);

    // Create material with refraction and reflection
    const material = new THREE.MeshPhysicalMaterial({
      color: this.color,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.5,
      envMapIntensity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      ior: 2.4,
      reflectivity: 0.5,
      iridescence: 0.3,
      iridescenceIOR: 1.3,
      sheen: 0.5,
    });

    this.gem = new THREE.Mesh(geometry, material);
    this.scene.add(this.gem);
  }

  addLights() {
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    // Add directional lights
    const lights = [
      { position: [5, 5, 5], intensity: 1 },
      { position: [-5, -5, 5], intensity: 0.5 },
      { position: [0, 0, 5], intensity: 0.8 },
    ];

    lights.forEach((light) => {
      const directionalLight = new THREE.DirectionalLight(
        0xffffff,
        light.intensity
      );
      directionalLight.position.set(...light.position);
      this.scene.add(directionalLight);
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Rotate gem
    if (this.gem) {
      this.gem.rotation.y += 0.002;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
  }
}
