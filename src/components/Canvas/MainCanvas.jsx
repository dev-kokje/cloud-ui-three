import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import ElementTypeOne from "./ElementTypeOne"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { changeActiveElement } from "../../store/activeElementSlice"

const MainCanvas = (props) => {

    const [isDragging, setIsDragging] = useState(false)
    const ref = useRef()
    const dispatch = useDispatch()

    const camera = {
        position: [3, 3, 3]
    }

    const handleDragging = (bool) => {
        setIsDragging(bool)
    }

    const handleClick = () => {
        dispatch(changeActiveElement(1))
    }

    return <Canvas name="mainCanvas" ref={ref} frameloop="demand" camera={camera} onClick={handleClick}>
        {/* <fog attach="fog" args={["#041830", 5, 15]} /> */}
        <ElementTypeOne id="e1" position={[1, 0.25, 1]} color="#f56f42" setDragging={handleDragging} />
        <OrbitControls
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enabled={!isDragging}
        />
        <gridHelper args={[20, 20, 0xaaaaaa]} />
        <directionalLight color="#ffffff" intensity={1} position={[-1, 2, 4]} />
    </Canvas>
}

export default MainCanvas