import { useRef, useState } from "react"
import { Edges } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import EC2InstanceModel from "../../../models/EC2InstanceModel"

const Element3D = ({ id, left, top, resource, hideSourceOnDrag, selectedElement, handleElementSelection, handleDraggingChange }) => {

    const displayEdge = (selectedElement !== undefined && selectedElement !== null && selectedElement.id === id)
    
    const [position, setPosition] = useState([(left/100) - 5, 0.130, (top/100) - 5])

    const selectThisElement = () => {
        const element = {
            id: id,
            resource: resource
        }
        handleElementSelection(element)
    }

    useFrame(() => {
        console.log("Hey, I am executing every frame")
    })

    return <>
        <group onClick={selectThisElement}>
            <mesh position={position}>
            <boxGeometry args={[1.05, 0.25, 1.05]}/>
            <meshPhongMaterial 
                opacity={displayEdge ? 0.2 : 0} 
                color="#ff3300"
                transparent />
                <Edges 
                    visible={displayEdge} 
                    scale={1} 
                    renderOrder={1000}>
                    <meshBasicMaterial 
                        transparent
                        color="#3333ff" 
                        depthTest={true} />
                </Edges>
            </mesh>
            <EC2InstanceModel position={position} />
        </group>
    </>
}

export default Element3D