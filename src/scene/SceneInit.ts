import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from 'three/examples/jsm/libs/stats.module';

let width = window.innerWidth;
let height = window.innerHeight;

export class SceneInit {
  fov: number;
  canvasId: string;
  scene: THREE.Scene | undefined;
  camera: any;
  stats: any;
  controls: any;
  renderer: any;
  clock: THREE.Clock | undefined;

  constructor(canvasId: string) {
    this.fov = 96;
    this.canvasId = canvasId;

    this.scene = undefined;
    this.stats = undefined;
    this.camera = undefined;
    this.controls = undefined;
    this.renderer = undefined;
  }

  initialize() {
    //set Camera
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      width / height,
      1,
      1000
    );

    this.camera.position.z = 96;
    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();

    //render canvas element
    const canvas = document.getElementById(this.canvasId)!;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    //renderer sizes
    this.renderer.setSize(width, height);
    document.body.appendChild(this.renderer.domElement);

    //Add Orbit Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    //Add Fps Stats
    this.stats = Stats();
    document.body.appendChild(this.stats.dom);

    // Ambient Light
    let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    this.scene.add(ambientLight);

    // Ambient Spot Light
    let spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    this.scene.add(spotLight);

    //if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);
  }

  onWindowResize() {
    //resize window
    width = window.innerWidth;
    height = window.innerHeight;
  }

  animate() {
    //animate and update
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats.update();
    this.controls.update();
  }

  render() {
    //render camera and scene
    this.renderer.render(this.scene, this.camera);
  }
};