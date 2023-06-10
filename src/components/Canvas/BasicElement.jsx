import { useSpring, animated } from "@react-spring/three"
import { useThree } from "@react-three/fiber"
import { useGesture } from "@use-gesture/react"

const BasicElement = (props) => {

    const { size, viewport } = useThree()
    const [ spring, api ] = useSpring(() => ({
        scale: [1, 1, 1],
        position: [0, 0, 0],
        rotation: [0, 0, 0]
    }))
    const aspect = size.width / viewport.width
    const bind = useGesture({
        onDragStart: () => props.disableControls(),
        onDragEnd: () => props.enableControls(),
        onDrag : ({ offset: [x, y] }) => {
            let position = [x/aspect, 0, y/aspect]
            return api.start({ position: position })
        },
        onHover: ({ hovering }) => api({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] }) 
    })

    return <animated.mesh
            {...spring}
            {...bind()}
            castShadow
        >
        <boxGeometry args={[1, 0.5, 1]} />
        <meshPhongMaterial color="red" />
    </animated.mesh>
}

export default BasicElement