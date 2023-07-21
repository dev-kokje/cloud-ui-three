import { useState } from "react"
import Canvas2D from "./Canvas2D/Canvas2D"
import MainCanvas from "./MainCanvas"
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
                    selectedElement={selectedElement}
                    handleElementSelection={(element) => handleElementSelection(element)}    
                />
        }
        <ResourceDetails selectedElement={selectedElement} />
    </>
}

export default Canvas