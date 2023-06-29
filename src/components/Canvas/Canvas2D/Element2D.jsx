import { useDrag } from "react-dnd"
import { ItemTypes } from "../../../helpers/ItemTypes"
import { elements } from "../../icons/aws/elements"

const Element2D = ({ id, left, top, resource, hideSourceOnDrag, selectedElement, handleElementSelection }) => {

    const style = {
        position: 'absolute',
        cursor: 'move',
        borderColor: (selectedElement !== null && selectedElement.id === id) ? '#000' : ''
    }

    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.ELEMENT_2D,
            item: { id, left, top, type: ItemTypes.ELEMENT_2D },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top]
    )

    const selectThisElement = () => {
        const element = {
            id: id,
            resource: resource
        }
        handleElementSelection(element)
    }

    if(isDragging && hideSourceOnDrag) {
        return <div ref={drag} />
    }

    return <div style={{ ...style, left, top }}>
        <div 
        className="card d-flex justify-content-center align-items-center"
        ref={drag}
        style={{ height: '50px', width: '50px' }}
        dara-testid="element-2d"
        onClick={selectThisElement}
        >
            { resource.type === '' ? elements[resource.name]['default'] : elements[resource.name][resource.type] }
        </div>
        <div className="text-center" style={{ maxWidth: "48px" }}>{resource.name}</div>
    </div>
}

export default Element2D