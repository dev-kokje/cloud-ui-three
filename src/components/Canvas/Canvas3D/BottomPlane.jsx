import { DoubleSide } from "three"

const BottomPlane = (props) => {
    return <mesh 
                position={props.position} 
                rotation={[Math.PI / 2, 0, 0]} 
                scale={[13, 13, 13]}
            >
            <planeBufferGeometry />
            <meshBasicMaterial color={props.color} side={DoubleSide} />
    </mesh>
}

export default BottomPlane