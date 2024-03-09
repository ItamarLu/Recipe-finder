import ContactMe from "./contactMe"

export default function Footer() {
  return (
    <footer className="py-4 flex justify-evenly items-center text-sm bg-slate-950">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">Recipe Finder</h2>
        <p className="text-zinc-400">Built by Itamar Lucio</p>
      </div>
      <ContactMe />
    </footer>
  )
}''