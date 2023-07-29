import { Suspense, lazy } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../helpers/ItemTypes';
import { useDispatch } from 'react-redux';
import { addDesignElement } from '../../../store/designSlice';

const ElementCard = (props) => {

    const dispatch = useDispatch()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.ELEMENT_CARD,
        item: { 
            type: ItemTypes.ELEMENT_CARD,
            data: {
                resource: {
                    name: props.code,
                    type: 'default',
                    shortName: props.shortName,
                    fullName: props.fullName,
                },
                position: {
                    left: 200,
                    top: 200
                }
            }},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if(item && dropResult) {
                const randomId = Date.now()
                const dropItem = {
                    [randomId]: item.data
                }
                dispatch(addDesignElement(dropItem))
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))    

    const Icon = lazy(() => import(`react-aws-icons/dist/aws/${props.icon}`))

    return <div 
        ref={drag} 
        className="card w-100 mb-2 stretched-link" 
        style={{ opacity: isDragging ? 0.4 : 1 }} 
        data-testid={`element-card`}
        >
        <div className="card-body p-0">
            <div className="row g-0 d-flex justify-content-center">
                <Suspense fallback={<div>Hi, This page is Loading...</div>}>
                    <div className="col-md-2 d-flex justify-content-end align-items-center">
                        <Icon size={42} />
                    </div>
                </Suspense>
                <div className="col-md-8 p-2">
                    <p className='fs-6 p-0 m-0'>{props.shortName}</p>
                    <p className='text-secondary p-0 m-0' style={{ fontSize: "11px" }}>
                        {props.fullName}
                    </p>
                </div>
            </div>       
            <div style={{ position: 'absolute', top: '0', right: '0' }}>
                <span style={{borderRadius: "0px 0px 5px 5px"}} className="badge text-primary">
                    <small>AWS</small>
                </span>
            </div>
        </div>
    </div>
}

export default ElementCard