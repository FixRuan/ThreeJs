import React from "react";
import { useEffect } from "react"

import * as THREE from 'three';
import { SceneInit } from "./scene/SceneInit";
import { GUI } from 'dat.gui';

import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export function App() {

  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(24, 24, 24);
    const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xfaebd7 });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.x = -1;
    test.scene?.add(boxMesh);

    //init GUI
    const gui = new GUI();

    //GUI folders
    const geometryFolder = gui.addFolder('Mesh Geometry');
    geometryFolder.open();
    const rotationFolder = geometryFolder.addFolder('Rotation');
    rotationFolder.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotate X Axis');
    rotationFolder.add(boxMesh.rotation, 'y', 0, Math.PI).name('Rotate y Axis');
    rotationFolder.add(boxMesh.rotation, 'z', 0, Math.PI).name('Rotate z Axis');
    const scaleFolder = geometryFolder.addFolder('Scale');
    scaleFolder.add(boxMesh.scale, 'x', 0, 2).name("Scale X Axis");
    scaleFolder.add(boxMesh.scale, 'y', 0, 2).name("Scale Y Axis");
    scaleFolder.add(boxMesh.scale, 'z', 0, 2).name("Scale Z Axis");
    const materialFolder = gui.addFolder('Mesh Material');
    const materialParams = { boxMeshColor: boxMesh.material.color.getHex() };
    materialFolder.add(boxMesh.material, 'wireframe');
    materialFolder.addColor(materialParams, 'boxMeshColor')
      .onChange((value) => boxMesh.material.color.set(value));
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  )
}
