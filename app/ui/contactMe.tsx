'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { EnvelopeIcon, EnvelopeOpenIcon, ClipboardDocumentIcon } from '@heroicons/react/24/solid';

export default function ContactMe() {
  const [isActive, setActive] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const handleGoTo = (url : string) => {
    window.open(url,"_blank");
  };

  const handlePress = () => {
    isActive? setActive(false) : setActive(true);
    setIsCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('Itamarlucio19@gmail.com')
    .then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    })
    .catch(error => console.log('Error copying to clipboard:', error));
  };

  const isActiveStyles : string = clsx("absolute flex gap-1 w-auto p-2 min-w-max rounded-md text-white bg-red-800 text-sm font-bold transition-all duration-200 scale-0 origin-bottom mt-[-40px] justify-end", {'scale-100' : isActive})

  return (
    <div className="flex flex-col gap-2 items-center">
      <p className='font-medium text-base text-slate-100'>Contact Me</p>
      <div className="flex gap-2">
        <button onClick={() => {
              handleGoTo("https://github.com/ItamarLu")
            }}>
          <Image 
            src="./github-white.svg"
            width={25}
            height={25}
            className='hover:animate-pulse'
            alt="github icon"/>
        </button>
        <button onClick={() => {
              handleGoTo("https://www.linkedin.com/in/itamar-lucio-16a2521ab/")
            }}>
          <Image 
            src="./linkedin-white.svg"
            width={25}
            height={25}
            className='hover:animate-pulse'
            alt="linkedin icon"/>
        </button>
        <div className='group flex justify-center'>
          <button onClick={handlePress}>
            {isActive? 
              <EnvelopeOpenIcon className='size-[25px] hover:animate-pulse text-slate-100'/> 
            : 
              <EnvelopeIcon className='size-[25px] hover:animate-pulse text-slate-100'/>
            }
          </button>
          <span className={isActiveStyles}>
            <p>Itamarlucio19@gmail.com</p>
            <button onClick={copyToClipboard}>
              <ClipboardDocumentIcon className='size-4 hover:animate-pulse'/>
            </button>
            {isCopied && <p className="absolute w-auto p-2 min-w-max rounded-md text-white bg-red-800 text-sm font-bold transition-all duration-200 origin-bottom mt-[-45px]">Copied!</p>}
          </span>
        </div>
      </div>
    </div>
  );
}