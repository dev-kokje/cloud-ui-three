import { useRef, useState } from "react"
import { Edges, useBounds } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import EC2InstanceModel from "../../../models/EC2InstanceModel"
import { useDispatch } from "react-redux"
import { changeActiveElement } from "../../../store/activeElementSlice"

const Element3D = ({ id, left, top, resource, handleElementSelection }) => {

    const [displayEdge, setDisplayEdge] = useState(false)
    const ref = useRef()
    const [position, ] = useState([(left/100) - 5, 0.130, (top/100) - 5])
    const api = useBounds()
    const dispatch = useDispatch()

    const selectThisElement = () => {
        const element = {
            id: id,
            resource: resource
        }
        dispatch(changeActiveElement(element))
    }

    useFrame(() => {
        console.log("Hey, I am executing every frame")
    })

    const handleObjectClicked = (e) => {
        e.stopPropagation()
        e.delta <= 20 && api.refresh(e.object).fit()
        setDisplayEdge(true)
        selectThisElement()
    }

    return <>
        <group onClick={handleObjectClicked} ref={ref}>
            <mesh position={position} dispose={null}>
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