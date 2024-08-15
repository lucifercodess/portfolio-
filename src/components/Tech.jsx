import React from 'react'
import { BallCanvas } from './canvas'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <>
    <div className={`${styles.sectionHeadText} flex items-center justify-center mb-10`}>
      <h1>Technologies I work with </h1>
    </div>
    <p className='flex items-center justify-center text-slate-400'>Please feel free to check them </p>
    <div className='flex flex-row flex-wrap items-center justify-center gap-3'>
      {technologies.map((technology) =>(
        <div className='w-28 h-28 ' key = {technology.name}>
          <BallCanvas icon = {technology.icon}/>
        </div>
      ))}
    </div>
    </>
    
  )
}

export default SectionWrapper(Tech," ");