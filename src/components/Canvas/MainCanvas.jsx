import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useContext, useState } from "react"
import { useDispatch } from "react-redux"
import { changeActiveElement } from "../../store/activeElementSlice"
import BottomPlane from "./BottomPlane"
import { ThemeContext } from "../../context/ThemeContext"
import BasicElement from "./BasicElement"
import { useDrop } from "react-dnd"
import { ItemTypes } from "../../helpers/ItemTypes"

const MainCanvas = (props) => {

    // Drop effect
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.ELEMENT_CARD,
        drop: () => ({ name: "Canvas" }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    // Other Props
    const { darkMode } = useContext(ThemeContext)
    const [dragControls, setDragControls] = useState(true)
    const dispatch = useDispatch()

    const camera = {
        position: [0, 10, 0]
    }

    const handleClick = () => {
        dispatch(changeActiveElement(1))
    }

    const disableControls = () => {
        setDragControls(false)
    }

    const enableControls = () => {
        setDragControls(true)
    }

    return <Canvas ref={drop} name="mainCanvas" frameloop="demand" camera={camera} onClick={handleClick} data-testid="Canvas">
        {/* <fog attach="fog" args={["#041830", 5, 20]} /> */}
        <BottomPlane 
            position={[0, -0.1, 0]}
            color={darkMode ? "#333" : "white"}
            />
        <BasicElement position={[0, 0.25, 0]} disableControls={disableControls} enableControls={enableControls} />
        <OrbitControls
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enabled={dragControls}
        />
        <gridHelper args={[20, 20, 0xaaaaaa]} />
        <directionalLight color="#ffffff" intensity={1} position={[-1, 2, 4]} />
        <axesHelper scale={20} />
    </Canvas>
}

export default MainCanvas