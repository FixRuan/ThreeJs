import React from "react";
import { useEffect } from "react"

import * as THREE from 'three';
import { SceneInit } from "./scene/SceneInit";



// let width = 400;
// let height = 400;

export function App() {

  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    test.scene?.add(boxMesh);
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  )
}
