import { Suspense, lazy } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../helpers/ItemTypes';

const BasicElement = (props) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.ELEMENT_CARD,
        item: { shortName: props.shortName },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if(item && dropResult) {
                alert(`You dropped ${item.shortName} into ${dropResult.name}!`)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))    

    const Icon = lazy(() => import(`react-aws-icons/dist/aws/logo/${props.icon}`))
    let bagdeStyle = "text-bg-primary"

    switch(props.category) {
        case "Compute": break;
        case "Storage": bagdeStyle = "text-bg-success"; break;
        case "Container Orchastration": bagdeStyle = "text-bg-danger"; break;
        default: break;
    }

    return <div 
        ref={drag} 
        className="card w-100 mb-3 stretched-link" 
        style={{ opacity: isDragging ? 0.4 : 1 }} 
        onClick={() => console.log("Click")}
        data-testid={`element-card`}
        >
        <div className="card-body p-0">
            <div className="row g-0 py-1">
                <Suspense fallback={<div>Hi, This page is Loading...</div>}>
                    <div className="col-md-4 d-flex justify-content-end align-items-center">
                        <Icon size={32} />
                    </div>
                </Suspense>
                <div className="col-md-8 p-2">
                    <p className='fs-6 p-0 m-0'>{props.shortName}</p>
                    {/* <p className='text-muted p-0 m-0'>
                        <small>{props.fullName}</small>
                    </p> */}
                </div>
            </div>       
            <div className="row g-0">
                <span style={{borderRadius: "0px 0px 5px 5px"}} className={"badge " + bagdeStyle}>
                    <small>{props.category}</small>
                </span>
            </div>
        </div>
    </div>
}

export default BasicElement