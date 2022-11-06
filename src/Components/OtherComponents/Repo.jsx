import React from 'react'
import { Link } from 'react-router-dom'
import Timestamp from './Timestamp'
import StarComponent from './StarComponent'

function Repo({name, link, language, updated_at, stars, id, data}) {
  return (
    <>
    <div className='flex flex-row mb-10 items-center justify-between max-h-full'>
      <div className='w-1/2 flex flex-col max-h-60 h-48 justify-self-center justify-between'>
        <h3 className='text-5xl text-black xs:text-4xl font-bold capitalize mb-8'><Link to={`/repositories/${id}`} state={data}>{name}</Link></h3>
        <StarComponent starCount={stars} />
      </div>
      <div className='flex flex-col max-h-60 h-48 justify-self-center justify-between'>
        <span className='text-2xl text-black font-medium capitalize'>{language ? language : "No Language"}</span>
        <span className='capitalize'>Created at: <Timestamp timeStamp={updated_at} /></span>
        <a href={link} className='px-3 py-2 bg-black text-gray-200 rounded-md' target="_blank">View on GitHub</a>
      </div>
    </div>
    <hr className='my-8 h-px bg-gray-200 border-0 dark:bg-gray-700'/>
    </>
  )
}

export default Repo
