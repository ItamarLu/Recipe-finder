import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex p-5 bg-slate-950 rounded-md">
      <div className="w-2/4 flex items-center min-h-36">
        <h2 className="text-center">Discover Delicious Possibilities: Find Your Perfect Recipe with What&#39;s in Your Kitchen</h2>
      </div>
      <div className="w-2/4 flex justify-end min-w-40 sm:min-w-80">
        <div className='sm:absolute flex items-center'>
          <Image
            src="/food-1.png"
            width={1280}
            height={865}
            className='max-w-40 sm:max-w-80'
            alt="Image of variety of food on a plate. By Sr. M. Jutta from Pixabay"
          />
        </div>
      </div>
    </div>
  );
}