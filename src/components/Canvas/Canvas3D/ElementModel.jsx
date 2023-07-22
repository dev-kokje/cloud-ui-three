import { useFrame, useLoader } from "@react-three/fiber"
import { useRef, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const ElementModel = (props) => {
    const ref = useRef()
    const gltf = useLoader(GLTFLoader, "/models/ec2.gltf")
    const [hovered, hover] = useState(false)
    
    //useFrame((state, delta) => (ref.current.rotation.y += 0.003))
    
    return <>
        <primitive
            ref={ref}
            object={gltf.scene}
            position={props.position}
            scale={props.scale}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        />
    </>
}

export default ElementModel