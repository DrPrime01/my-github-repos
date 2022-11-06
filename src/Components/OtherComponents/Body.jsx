import React from 'react'
import { Link } from 'react-router-dom'

function Body() {
  return (
    <div className="w-full bg-center bg-cover min-h-screen bg-landingPageBg flex items-center justify-center">
        <div className="container flex items-center justify-center w-full h-full mx-auto px-40 xs:px-12">
            <div className="text-center">
                <h1 className="text-[3.5rem] xs:text-3xl leading-none font-extrabold text-white font-sans mb-6">The place for Dr Prime to build anything from anywhere</h1>
                <p className='text-2xl xs:text-base font-normal text-slate-500 mb-6'>Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s build from here.</p>
                <div className="flex flex-row xs:flex-col items-center justify-center">
                <Link to="/repositories" className="w-full px-8 py-4 mt-4 text-xl font-medium text-black transition-colors duration-200 transform bg-white rounded-md lg:w-auto mr-4 xs:mb-4 xs:mr-0 border hover:border-white hover:bg-transparent hover:text-white">Go to repositories</Link>
                <a href="https://github.com/signup?ref_cta=Sign+up+for+GitHub&ref_loc=Home+campaign+footer&ref_page=%2F" className="w-full px-8 py-4 mt-4 text-xl font-medium text-white transition-colors duration-200 transform border border-white bg-transparent rounded-md lg:w-auto hover:bg-white hover:text-black">Sign up for GitHub</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body
