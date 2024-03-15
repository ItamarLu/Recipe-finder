import { useState } from 'react';
import { ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/24/solid';

export default function OtherRecipes({ otherRecipes }: { otherRecipes: object[] }) {
  const [modalOpen, setModalOpen] = useState(new Array(otherRecipes.length).fill(false));

  const toggleModal = (index: number) => {
    const newModalOpen = [...modalOpen];
    newModalOpen[index] = !newModalOpen[index];
    setModalOpen(newModalOpen);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      {
        otherRecipes.map((recipe: any, index: number) => (
        <div key={recipe.title} className="py-5 px-5 flex flex-col gap-2 bg-slate-950 rounded-md max-h-96 overflow-y-auto custom-scrollbar relative">
          <button onClick={() => toggleModal(index)} className="invisible md:visible absolute top-0 right-0 m-3">
            <ArrowsPointingOutIcon className='size-7 text-gray-500 hover:text-slate-200 duration-200'/>
          </button>
          <h1>{recipe.title? recipe.title : 'Missing Name'}</h1>
          <ul className="list-inside">
            {recipe.ingredients.map((ing: any) => (
              <li className="list-disc" key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="text-justify">{recipe.instructions}</p>
          {modalOpen[index] && (
            <div className="overflow-y-auto overflow-x-hidden fixed z-50 inset-0 bg-opacity-50 bg-black flex-col flex items-center">
              <div className="bg-slate-950 p-6 rounded-md max-w-xl relative flex flex-col gap-3 my-1">
                <button onClick={() => toggleModal(index)} className="absolute top-0 right-0 m-3">
                  <XMarkIcon className='size-7 text-gray-500 hover:text-slate-200 duration-200'/>
                </button>
                <h2>{recipe.title ? recipe.title : 'Missing Name'}</h2>
                <ul className="list-inside">
                  {recipe.ingredients.map((ing: any) => (
                    <li className="list-disc" key={ing}>{ing}</li>
                  ))}
                </ul>
                <p className="text-justify">{recipe.instructions}</p>
              </div>
            </div>
          )}
        </div>
        ))
      }
    </div>
  );
}