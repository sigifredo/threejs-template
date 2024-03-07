

import * as THREE from 'three';

export default class Geometry {
    constructor(env) {
        this.geometry = new THREE.PlaneGeometry(1, 1);
        this.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
        });

        this.material.metalness = 0.2;
        this.material.roughness = 0.5;

        this.mesh = new THREE.Mesh(this.geometry, this.material);

        env.scene.add(this.mesh);
    }

    update() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }
}
