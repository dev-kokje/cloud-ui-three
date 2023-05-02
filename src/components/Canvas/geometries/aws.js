import * as THREE from "three"

export const ec2 = (args) => {
    return new THREE.BoxGeometry(args[0], args[1], args[2])
}