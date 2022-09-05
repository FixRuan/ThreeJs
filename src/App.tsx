import React from "react";
import { useEffect } from "react"

import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from 'three/examples/jsm/libs/stats.module';

let width = window.innerWidth;
let height = window.innerHeight;

// let width = 400;
// let height = 400;

export function App() {

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      width / height,
      1,
      1000
    );

    camera.position.z = 96;

    const canvas = document.getElementById('myThreeJsCanvas')!;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;

    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const boxGeometry = new THREE.BoxGeometry(6, 6, 6);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    //Add Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement)

    //Add Fps Stats
    const stats = Stats();
    document.body.appendChild(stats.dom);

    const animate = () => {
      // boxMesh.rotation.x += 0.001;
      // boxMesh.rotation.y += 0.02;

      stats.update();
      controls.update();


      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  )
}
