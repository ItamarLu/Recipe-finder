import ContactMe from "./contactMe"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-4 flex justify-evenly items-center text-sm bg-slate-950">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">Recipe Finder</h2>
        <p className="text-zinc-400">Built by Itamar Lucio</p>
        <div className="flex gap-2">
          <Image 
            src={'./nextjs-white.svg'}
            width={25}
            height={25}
            alt="nextjs icon"
          />
          <Image
            src={'./typescript.svg'}
            width={25}
            height={25}
            alt="typescript icon"
          />
          <Image 
            src={'./tailwindcss.svg'}
            width={25}
            height={25}
            alt="tailwind icon"
          />
        </div>
      </div>
      <ContactMe />
    </footer>
  )
}''