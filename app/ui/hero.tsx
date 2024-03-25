import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex p-5 bg-gradient-to-br from-red-500 to-orange-500 rounded-md flex-col sm:flex-row items-center">
      <div className="sm:w-2/4 flex items-center min-h-36">
        <h2 className="text-center text-slate-100">Discover Delicious Possibilities: Let us inspire your next meal with our recipes and experience the magic of cooking something new</h2>
      </div>
      <div className="sm:w-2/4 flex justify-center min-w-40 sm:min-w-80">
        <Image 
          src="./food-svgrepo-com.svg"
          width={150}
          height={150}
          alt="colored food icon from svgrepo"/>
      </div>
    </div>
  );
}