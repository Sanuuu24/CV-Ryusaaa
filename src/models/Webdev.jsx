
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/webdev-transformed.glb')
  return (
    <group {...props} dispose={null} position={[2, 0, 0]} >
      <mesh geometry={nodes.JS_text001_0.geometry} material={materials.PaletteMaterial001} position={[0, 0, 0]} scale={[2.5, 2.5, 2.5]} />
    </group>
  )
}

useGLTF.preload('/webdev-transformed.glb')
