'use client';

import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Ingredients({
  list, removeFunction
} : {
  list: string[], removeFunction: (id:string) => void
}) {

  return (
    <div>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {list.map((name) => (
          <li className="flex items-center border-red-500 border-2 pl-2 py-1 rounded-md" key={name}>
            <p className='text-red-500'>
              {name}
            </p>
            <button className='group pl-1 pr-2' onClick={() => removeFunction(name)}>
              <XMarkIcon className='size-5 text-red-500 group-hover:text-red-900 duration-300'/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}