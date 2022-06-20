import type { NextPage } from 'next'
import SoonIndicator from '../components/SoonIndicator/SoonIndicator';


const Projects: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className='font-bold text-2xl'>Projects</h1>
        <SoonIndicator/>
      </div>
    </>
  )
}

export default Projects;