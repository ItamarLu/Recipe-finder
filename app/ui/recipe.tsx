export default function Recipe(
  {ingTitle, ings, ingInstructions}
  :
  {ingTitle : string, ings : string[], ingInstructions : string}
) {

  return (
    <div className="md:w-1/2 py-5 px-5 flex flex-col gap-3 bg-slate-950 rounded-md">
      <h1>{ingTitle}</h1>
      <ul className="list-inside">
        {ings.map(ing => (
          <li className="list-disc" key={ing}>{ing}</li>
        ))}
      </ul>
      <p className="text-justify">{ingInstructions}</p>
    </div>
  );
}