import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex p-5 bg-slate-950 rounded-md">
      <div className="w-2/4 flex items-center min-h-36">
        <h2 className="text-center">Discover Delicious Possibilities: Find Your Perfect Recipe with What&#39;s in Your Kitchen</h2>
      </div>
      <div className="w-2/4 flex justify-center min-w-40 sm:min-w-80">
        <Image 
          src="./food-svgrepo-com.svg"
          width={150}
          height={150}
          alt="colored food icon from svgrepo"/>
      </div>
    </div>
  );
}