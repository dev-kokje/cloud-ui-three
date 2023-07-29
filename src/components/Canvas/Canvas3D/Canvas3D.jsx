import { Canvas } from "@react-three/fiber"
import BottomPlane from "./BottomPlane"
import { ThemeContext } from "../../../context/ThemeContext"
import { Bounds, OrbitControls } from "@react-three/drei"
import { Suspense, useCallback, useContext } from "react"
import Element3D from "./Element3D"
import { useDispatch, useSelector } from "react-redux"
import { useDrop } from "react-dnd"
import { ItemTypes } from "../../../helpers/ItemTypes"
import { addDesignElement } from "../../../store/designSlice"
import update from "immutability-helper"

const Canvas3D = ({ handleElementSelection }) => {

    const camera = {
        position: [2.5, 7, 2.5],
        fov: 50
    }
    const { darkMode } = useContext(ThemeContext)
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

    return <>
        <Canvas
            name="canvas3D"
            camera={camera}
            data-testid="Canvas3D"
            ref={drop}
            frameloop="demand"
        >
            <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
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
            <Suspense fallback={null}>
                <Bounds fit clip observe margin={2} damping={6}>
                    {
                        Object.keys(elements).map((key) => {
                            const element = elements[key]
                            return <Element3D 
                                    key={key}
                                    id={key}
                                    left={element.position.left}
                                    top={element.position.top}
                                    resource={element.resource}
                                    handleElementSelection={(element) => handleElementSelection(element)}
                            />
                        })
                    }
                </Bounds>
            </Suspense>
            <ambientLight />
        </Canvas>
    </>
}

export default Canvas3D