export function RecipeSkeleton() {
  return (
    <div
      className="rounded-md bg-slate-950 p-5 flex flex-col gap-3 md:w-1/2"
    >
      <div className="h-8 bg-gray-400 rounded animate-pulse"></div>
      <div className="flex flex-col gap-2 animate-pulse">
        <div className="bg-gray-400 rounded h-6 max-w-56" />
        <div className="bg-gray-400 rounded h-6 max-w-48" />
        <div className="bg-gray-400 rounded h-6 max-w-72" />
        <div className="bg-gray-400 rounded h-6 max-w-64" />
        <div className="bg-gray-400 rounded h-6 max-w-80" />
      </div>
      <div className="text-justify bg-gray-400 rounded h-32 animate-pulse"/>
    </div>
  );
}

export function RecipeSkeleton2() {
  return (
    <div
      className="rounded-md bg-slate-950 p-5 flex flex-col gap-3"
    >
      <div className="h-8 bg-gray-400 rounded animate-pulse"></div>
      <div className="flex flex-col gap-2 animate-pulse">
        <div className="bg-gray-400 rounded h-6 max-w-56" />
        <div className="bg-gray-400 rounded h-6 max-w-48" />
        <div className="bg-gray-400 rounded h-6 max-w-72" />
        <div className="bg-gray-400 rounded h-6 max-w-64" />
        <div className="bg-gray-400 rounded h-6 max-w-80" />
      </div>
      <div className="text-justify bg-gray-400 rounded h-32 animate-pulse"/>
    </div>
  );
}

export function RecipesSkeleton() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <RecipeSkeleton2 />
      <RecipeSkeleton2 />
      <RecipeSkeleton2 />
    </div>
  );
}