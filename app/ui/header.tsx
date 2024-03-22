import Image from "next/image"

export default function Header() {
  return (
    <header className="flex gap-2 items-center p-4 self-stretch">
      <h1 className='font-semibold text-red-500'>Recipe Finder</h1>
      <Image 
        src="./food-svgrepo-com-red.svg"
        width={30}
        height={30}
        alt="red food icon from svgrepo"
      />
    </header>
  )
}