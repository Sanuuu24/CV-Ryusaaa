import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import React from 'react'
import WebDev from './Webdev'

const Content = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <WebDev />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}

export default Content
