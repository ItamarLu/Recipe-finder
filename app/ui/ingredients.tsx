'use client';

import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Ingredients({
  list, removeFunction
} : {
  list: string[], removeFunction: (id:string) => void
}) {

  return (
    <div>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 max-w-xl">
        {list.map((name) => (
          <li className="flex items-center border border-slate-200 pl-2 py-1 rounded-md" key={name}>
            {name}
            <button className='group pl-1 pr-2' onClick={() => removeFunction(name)}>
              <XMarkIcon className='size-5 text-gray-500 group-hover:text-slate-200 group-hover:animate-pulse'/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}