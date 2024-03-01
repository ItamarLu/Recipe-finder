import { PlusIcon } from '@heroicons/react/24/solid'

export default function Search() {
  return (
    <div className="py-10">
      <div className="flex items-center gap-1 w-fit bg-slate-950 rounded-md">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id='search' 
          className="bg-slate-950 rounded-md py-2 pl-5 pr-1 placeholder:text-gray-500 h-[50px] outline-none"
          placeholder="Put one Ingredient"
        />
        <button className='rounded-md px-2 group h-[50px]'>
          <PlusIcon className='size-8 text-gray-500 group-hover:text-slate-200 group-hover:animate-pulse'/>
        </button>
      </div>
    </div>
  );
}