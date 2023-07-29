import { useState } from "react"
import Canvas2D from "./Canvas2D/Canvas2D"
import ResourceDetails from "./ResourceDetails/ResourceDetails"
import Canvas3D from "./Canvas3D/Canvas3D"

const Canvas = ({ canvas2D }) => {

    const [selectedElement, setSelectedElement] = useState(null)

    const handleElementSelection = (element) => {
        setSelectedElement(element)
    }

    return <>
        {
            canvas2D ? <Canvas2D 
                    selectedElement={selectedElement} 
                    handleElementSelection={(element) => handleElementSelection(element)} 
                /> : <Canvas3D 
                    handleElementSelection={(element) => handleElementSelection(element)}    
                />
        }
        <ResourceDetails />
    </>
}

export default Canvas