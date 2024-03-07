'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { EnvelopeIcon, EnvelopeOpenIcon, ClipboardDocumentIcon } from '@heroicons/react/24/solid';

export default function ContactMe() {
  const [isActive, setActive] = useState(false);
  
  const handleGoTo = (url : string) => {
    window.open(url,"_blank");
  };

  const handlePress = () => {
    isActive? setActive(false) : setActive(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('Itamarlucio19@gmail.com');
  };

  const isActiveStyles : string = clsx("absolute flex gap-1 w-auto p-2 min-w-max rounded-md shadow-sm shadow-slate-400 text-white dark:shadow-slate-950 bg-gray-900 text-sm font-bold transition-all duration-200 scale-0 origin-bottom mt-[-40px]", {'scale-100' : isActive})

  return (
    <div className="flex flex-col gap-3">
      <p>Contact Me</p>
      <div className="flex gap-2">
        <button onClick={() => {
              handleGoTo("https://github.com/ItamarLu")
            }}>
          <Image 
            src="./github-white.svg"
            width={30}
            height={30}
            className='hover:animate-pulse'
            alt="github icon"/>
        </button>
        <button onClick={() => {
              handleGoTo("https://www.linkedin.com/in/itamar-lucio-16a2521ab/")
            }}>
          <Image 
            src="./linkedin-white.svg"
            width={30}
            height={30}
            className='hover:animate-pulse'
            alt="linkedin icon"/>
        </button>
        <div className='group flex justify-center'>
          <button onClick={handlePress}>
            {isActive? 
              <EnvelopeOpenIcon className='size-[30px] hover:animate-pulse'/> 
            : 
              <EnvelopeIcon className='size-[30px] hover:animate-pulse'/>
            }
          </button>
          <span className={isActiveStyles}>
            <p>Itamarlucio19@gmail.com</p>
            <button onClick={copyToClipboard}>
              <ClipboardDocumentIcon className='size-4 hover:animate-pulse'/>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}