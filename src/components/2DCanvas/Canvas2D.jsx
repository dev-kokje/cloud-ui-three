import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { useDrop } from "react-dnd"
import { ItemTypes } from "../../helpers/ItemTypes"
import { useSelector } from "react-redux"
import Element2D from "./Element2D.jsx"

const Canvas2D = (props) => {

    const { darkMode } = useContext(ThemeContext)
    const elements = useSelector((state) => state.designSlice.elements)

    // Make canvas droppable
    const [, drop] = useDrop(() => ({
        accept: [ItemTypes.ELEMENT_CARD],
        drop: () => ({ name: "Canvas2D" }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))

    // Grid Styling
    const dotColor = darkMode ? '#999' : '#000'
    const gridBg = {
        backgroundSize: '40px 40px',
        backgroundImage: `radial-gradient(circle, ${dotColor} 1px, rgba(0, 0, 0, 0) 1px)`
    }

    return <div style={{ width: '100%' }} ref={drop} data-testid="Canvas2D">
        <div className="row d-flex justify-content-center w-100 h-100" style={{ backgroundColor: darkMode ? '#222' : '#fff' }}>
            <div className="col-md-12 canvas-bg" style={gridBg}>
                <Element2D />
            </div>
        </div>
    </div>
}

export default Canvas2D