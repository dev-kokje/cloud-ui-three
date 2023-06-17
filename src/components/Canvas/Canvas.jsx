import { useState } from "react"
import Canvas2D from "./Canvas2D/Canvas2D"
import MainCanvas from "./MainCanvas"
import ResourceDetails from "./ResourceDetails/ResourceDetails"

const Canvas = ({ canvas2D }) => {

    const [selectedElement, setSelectedElement] = useState(null)

    const handleElementSelection = (element) => {
        setSelectedElement(element)
        console.log("Element - ", selectedElement)
    }

    return <>
        {
            canvas2D ? <Canvas2D 
                    selectedElement={selectedElement} 
                    handleElementSelection={handleElementSelection} 
                /> : <MainCanvas 
                    selectedElement={selectedElement}
                    handleElementSelection={handleElementSelection}    
                />
        }
        <ResourceDetails selectedElement={selectedElement} />
    </>
}

export default Canvas