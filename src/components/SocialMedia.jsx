import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF, FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='left-0 fixed top-[40%]'>
      <div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
              <FaInstagram />
              </a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
              <FaFacebook />
              </a>
                  </div>          
       
        </div>
      </div>
  )
}

export default SocialMedia