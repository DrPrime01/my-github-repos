import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function StarComponent({starCount}) {
  return (
    <div className='px-3 py-3 border border-gray-500 flex justify-between w-32 rounded-md'>
      {starCount >=1 ? <AiFillStar /> : <AiOutlineStar />}
      {starCount >=2 ? <AiFillStar /> : <AiOutlineStar />}
      {starCount >=3 ? <AiFillStar /> : <AiOutlineStar />}
      {starCount >=4 ? <AiFillStar /> : <AiOutlineStar />}
      {starCount >=5 ? <AiFillStar /> : <AiOutlineStar />}
    </div>
  )
}

export default StarComponent
