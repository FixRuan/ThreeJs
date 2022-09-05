/* eslint-disable no-unused-vars */

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, cashShadow: true },
) {
  const { receiveShadow, cashShadow } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene;
        obj.name = "book";
        obj.position.x = 2;
        obj.position.y = -10;
        obj.receiveShadow = receiveShadow;
        obj.cashShadow = cashShadow;
        obj.scale.x = 1;
        obj.scale.y = 1;
        obj.scale.z = 1;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMeh) {
            child.cashShadow = cashShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      }, undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
