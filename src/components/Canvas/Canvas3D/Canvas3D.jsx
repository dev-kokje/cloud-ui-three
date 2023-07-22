import { Canvas } from "@react-three/fiber"
import BottomPlane from "./BottomPlane"
import { ThemeContext } from "../../../context/ThemeContext"
import { OrbitControls } from "@react-three/drei"
import { useCallback, useContext, useState } from "react"
import Element3D from "./Element3D"
import { useDispatch, useSelector } from "react-redux"
import { useDrop } from "react-dnd"
import { ItemTypes } from "../../../helpers/ItemTypes"
import { addDesignElement } from "../../../store/designSlice"
import update from "immutability-helper"

const Canvas3D = ({selectedElement, handleElementSelection}) => {

    const camera = {
        position: [2.5, 7, 2.5]
    }
    const { darkMode } = useContext(ThemeContext)
    const [isDragging, setIsDragging] = useState(true)
    const elements = useSelector((state) => state.designSlice.elements)
    const dispatch = useDispatch()

    const moveElement = useCallback(
        (id, left, top) => {
            dispatch(addDesignElement(
                update(elements, {
                    [id]: {
                        $merge: {
                            position: {
                                left, top
                            }
                        }
                    }
                })
            ))
        },
        [elements, dispatch]
    )

    const [, drop] = useDrop(() => ({
            accept: [ItemTypes.ELEMENT_CARD, ItemTypes.ELEMENT_3D],
            drop: (item, monitor) => {
                if(item.type === ItemTypes.ELEMENT_3D) {
                    const delta = monitor.getDifferenceFromInitialOffset()
                    const left = Math.round(item.left + delta.x)
                    const top = Math.round(item.top + delta.y)
                    moveElement(item.id, left, top)
                }
                return { name: "Canvas3D" }
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            })
        }),
        [moveElement]
    )

    const handleDraggingChange = (val) => {
        setIsDragging(val)
    }

    return <>
        <Canvas
            name="canvas3D"
            camera={camera}
            data-testid="Canvas3D"
            ref={drop}
            frameloop="demand"
        >
            <OrbitControls
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
                enabled={isDragging}
            />
            <gridHelper 
                args={[13, 13, 0xaaaaaa]} 
            />
            <BottomPlane 
                position={[0, -0.01, 0]}
                color={darkMode ? "#333" : "#fff"}
            />
            <directionalLight 
                color="#ffffff" 
                intensity={1} 
                position={[-1, 2, 4]} 
            />
            {
                Object.keys(elements).map((key) => {
                    const element = elements[key]
                    console.log("Creating 3D element - ", element)
                    return <Element3D 
                        key={key}
                        id={key}
                        left={element.position.left}
                        top={element.position.top}
                        resource={element.resource}
                        hideResourceOnDrag={true}
                        selectedElement={selectedElement}
                        handleElementSelection={(element) => handleElementSelection(element)}
                        handleDraggingChange={handleDraggingChange}
                    />
                })
            }
            <ambientLight />
        </Canvas>
    </>
}

export default Canvas3D