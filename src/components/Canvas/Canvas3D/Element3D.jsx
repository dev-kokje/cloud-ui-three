import { useRef, useState } from "react"
import { Edges } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const Element3D = ({ id, left, top, resource, hideSourceOnDrag, selectedElement, handleElementSelection, handleDraggingChange }) => {

    const mesh = useRef()
    const [position, setPosition] = useState([(left/100)-5, 0.30, (top/100)-5])
    const displayEdge = (selectedElement !== undefined && selectedElement !== null && selectedElement.id === id)

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

    return <mesh 
                position={position} 
                onClick={selectThisElement}
                ref={mesh}
        >
        <boxGeometry 
            args={[1, 0.5, 1]}
        />
        <meshPhongMaterial 
            color="red"
        />
        <Edges visible={displayEdge} scale={1.1} renderOrder={1000}>
            <meshBasicMaterial transparent color="#333" depthTest={true} />
        </Edges>
    </mesh>
}

export default Element3D