import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
     
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span className="ml-3 text-xl">
        <Image className="text-2xl leading-[48px]" src={`/Logo.png`} alt="logo" width={140} height={150} ></Image>
        </span>
      </a>
      <p className="text-[rgba(19, 19, 19, 0.6)]  font-[plusJakartaSans] font-medium text-base mt-6 ml-3">
      Our vision is to provide convenience and help increase your sales business.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-end ml-10">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
          About
        </h2>
        <nav className="list-none mb-10 space-y-3">
          <li>
            <a className="text-gray-600 hover:text-gray-800">How it works</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Featured</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Partnership</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Business Relation</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
          Community
        </h2>
        <nav className="list-none mb-10 space-y-3">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Events</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Blogs</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">podcast</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Invite a friend</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
          Socials
        </h2>
        <nav className="list-none mb-10 space-y-3">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Discord</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Instagram</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Twitter</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Facebook</a>
          </li>
        </nav>
      </div>
      
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-900 text-sm font-bold text-center sm:text-left">
      ©2022 MORENT. All rights reserved
        </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start mr-16 font-bold gap-8">
        <a className="text-gray-900">
        Privacy & Policy
        </a>
        <a className=" text-gray-900 ">
        Terms & Condition 
            
        </a>
        
           
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer