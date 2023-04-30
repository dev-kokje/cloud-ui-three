import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const MainCanvas = (props) => {

    const bgColor = '#000'

    const camera = {
        position: [3, 3, 3]
    }

    return <Canvas frameloop="demand" camera={camera}>
        {/* <color attach="background" args={[bgColor]} /> */}
        <fog attach="fog" args={["#041830", 5, 15]} />
        <OrbitControls
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
        />
        <axesHelper args={[5]} />
        <gridHelper args={[20, 20, 0xaaaaaa]} />
    </Canvas>
}

export default MainCanvas