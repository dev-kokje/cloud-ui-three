import { useDrag } from "react-dnd"
import { Ec2Instance } from "../icons/aws/ec2/ec2"
import { ItemTypes } from "../../helpers/ItemTypes"

const Element2D = ({ id, left, top, hideSourceOnDrag, children }) => {

    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.ELEMENT_2D,
            item: { id, left, top },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top]
    )

    if(isDragging && hideSourceOnDrag) {
        return <div ref={drag} />
    }

    return <div 
        className="card"
        ref={drag} 
        style={{ height: '50px', width: '50px' }}
        dara-testid="element-2d"
        >
        { Ec2Instance }
    </div>
}

export default Element2D