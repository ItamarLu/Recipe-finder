import { useState } from 'react';
import { ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Recipe({ ingTitle, ings, ingInstructions }: { ingTitle: string, ings: string[], ingInstructions: string }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="relative md:w-1/2 p-5 flex flex-col gap-3 bg-slate-950 rounded-md max-h-96 overflow-y-auto custom-scrollbar">
      <button onClick={toggleModal} className="invisible md:visible absolute top-0 right-0 m-3">
        <ArrowsPointingOutIcon className='size-7 text-gray-500 hover:text-slate-200 duration-200'/>
      </button>
      <h1>{ingTitle ? ingTitle : 'Missing Name'}</h1>
      <ul className="list-inside">
        {ings.map(ing => (
          <li className="list-disc" key={ing}>{ing}</li>
        ))}
      </ul>
      <p className="text-justify">{ingInstructions}</p>
      {modalOpen && (
        <div className="overflow-y-auto overflow-x-hidden fixed z-50 inset-0 bg-opacity-50 bg-black flex-col flex items-center">
          <div className="bg-slate-950 p-6 rounded-md max-w-xl relative flex flex-col gap-3 my-1">
            <button onClick={toggleModal} className="absolute top-0 right-0 m-3">
              <XMarkIcon className='size-7 text-gray-500 hover:text-slate-200 duration-200'/>
            </button>
            <h2>{ingTitle ? ingTitle : 'Missing Name'}</h2>
            <ul className="list-inside">
              {ings.map(ing => (
                <li className="list-disc" key={ing}>{ing}</li>
              ))}
            </ul>
            <p className="text-justify">{ingInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}