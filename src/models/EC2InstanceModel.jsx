import { useGLTF } from "@react-three/drei"

const EC2InstanceModel = ({position}) => {
    const { nodes, materials } = useGLTF('/models/ec2.gltf')
    console.log("Position - ", position)
    return (
        <group dispose={null}>
            <group position={position} scale={[0.5, 0.123, 0.5]}>
                <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} />
                <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.003']} />
                <mesh geometry={nodes.Cube001_2.geometry} material={materials['SVGMat.001']} />
            </group>
        </group>
    )
}

export default EC2InstanceModel