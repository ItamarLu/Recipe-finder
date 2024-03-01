import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Ingredients() {
  const ingredientsList = [
    "Chicken breasts",
    "Broccoli",
    "Carrots",
    "Bell peppers",
    "Olive oil",
    "Garlic",
    "Salt",
    "Black pepper",
    "Soy sauce",
    "Honey",
    "Sesame seeds"
  ];

  return (
    <div>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 max-w-xl">
        {ingredientsList.map((name) => (
          <li className="flex items-center border border-slate-200 pl-2 py-1 rounded-md" key={name}>
            {name}
            <button className='group pl-1 pr-2'>
              <XMarkIcon className='size-5 text-gray-500 group-hover:text-slate-200 group-hover:animate-pulse'/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}