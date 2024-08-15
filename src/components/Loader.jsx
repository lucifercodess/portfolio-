import React from 'react'
import {Html, useProgress} from '@react-three/drei';
const Loader = () => {
  const {progress} = useProgress();

  return (
   <Html>
      <span className='canvas-loader'></span>
      <p className='size-14 text-white font-bold mt-40'>{progress.toFixed(2)}%</p>
   </Html>
  )
}

export default Loader