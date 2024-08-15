import {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'
// import { Mesh } from 'three';
const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight  intensity={1} groundColor="black"/>
      <pointLight intensity={10}/>
      <spotLight position={[-20,50,20]} angle={0.12} penumbra={1}castShadow shadow-mapSize = {1024} />
      <primitive object={computer.scene} scale = {isMobile ? 0.4: 0.78} position = {isMobile? [0,-3,-2.2]: [0,-3.25,-1.5]} rotation = {[-0.01,-0.2,-0.1]}/>
    </mesh>
  )
}



const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);
  useEffect(()=>{
    const width = window.matchMedia('(max-width: 500px)');
    setisMobile(width.matches);

    const handlewidthchange = (e)=>{
      setisMobile(e.matches);
    }
    width.addEventListener('change', handlewidthchange);
    return()=>{
      width.removeEventListener('change', handlewidthchange);

    }
    
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback = {<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile = {isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
