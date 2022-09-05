import React from "react";
import { useEffect } from "react"

import * as THREE from 'three';
import { SceneInit } from "./scene/SceneInit";

import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export function App() {

  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const roundedBoxGeometry = new RoundedBoxGeometry(1, 1, 1, 4, 0.1);
    const roundedBoxMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const roundedBoxMesh = new THREE.Mesh(roundedBoxGeometry, roundedBoxMaterial);
    roundedBoxMesh.position.x = -1;
    test.scene?.add(roundedBoxMesh);

    const teapotGeometry = new TeapotGeometry(0.5, 8);
    const teapotGeometryMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const teapotGeometryMesh = new THREE.Mesh(teapotGeometry, teapotGeometryMaterial);
    teapotGeometryMesh.position.x = +1;
    test.scene?.add(teapotGeometryMesh);

    // const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // boxMesh.position.x = -1;
    // test.scene?.add(boxMesh);

    // const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32, 16)
    // const cylinderMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    // const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    // cylinderMesh.position.x = 1;
    // test.scene?.add(cylinderMesh);
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  )
}
