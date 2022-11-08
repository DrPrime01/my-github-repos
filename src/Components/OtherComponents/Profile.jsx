import React from 'react'
import { useEffect, useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md'
import { RiTwitterFill } from 'react-icons/ri';

function Profile() {
    const githubProfileURL = "https://api.github.com/users/drprime01";
    const [profileList, setProfileList] = useState([]);
    useEffect(() => {
        fetch(githubProfileURL)
            .then(res => res.json())
            .then(data => setProfileList(data))
    }, [])
    const avatar = profileList.avatar_url;
    
  return (
    <div id='profile' className='w-96 xs:w-auto xs:text-center md:w-64'>
      <div className="rounded-full w-64 xs:h-80 xs:w-80 h-64 border-gray-400 border-2 bg-cover bg-center flex justify-center items-center mb-3  xs:m-auto" style={{backgroundImage: `url(${avatar})`}}>
        
      </div>
      <h3 className='text-2xl font-bold mb-2 text-gray-800 xs:mt-3'>{profileList.name}</h3>
      <p className='text-lg mb-2 text-gray-700'>{profileList.login}</p>
      <p className='mb-3'>{profileList.bio}</p>
      <p className='flex items-center mb-2'><GoLocation className='mr-2'/> {profileList.location}</p>
      <p className='flex items-center mb-2'><a href={`mailto:${profileList.email}`}><MdOutlineEmail className='mr-2'/> {profileList.email}</a></p>
      <p className='flex items-center'><RiTwitterFill className='mr-2'/> <a href={`https://twitter.com/${profileList.twitter_username}`}>{profileList.twitter_username}</a></p>
    </div>
  )
}

export default Profile
