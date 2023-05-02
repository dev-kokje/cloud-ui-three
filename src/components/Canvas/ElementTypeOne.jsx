import { useRef, useState } from "react"
import { red } from "./materials/phong-materials"
import { ec2 } from "./geometries/aws"
import { PivotControls } from "@react-three/drei"
import { useDispatch } from "react-redux"
import { changeActiveElement } from "../../store/activeElementSlice"

const ElementTypeOne = (props) => {

    const ref = useRef()
    const dispatch = useDispatch()
    const [showControls, setShowControls] = useState(false)

    const handleOnClick = () => {
        setShowControls(true)
        dispatch(changeActiveElement(ref.current.uuid))
    }

    const handleOutsideClick = () => {
        setShowControls(false)
    }

    return <PivotControls
                scale={2}
                onDragStart={() => props.setDragging(true)}
                onDragEnd={() => props.setDragging(false)}
                activeAxes={[true, false, true]}
                autoTransform
                visible={showControls}
                onClick={handleOnClick}
                onPointerMissed={handleOutsideClick}
            >
            <mesh 
                ref={ref} 
                material={red} 
                geometry={ec2([1, 0.5, 1])} 
                position={props.position}   
                >
        </mesh>
    </PivotControls> 
}

export default ElementTypeOne