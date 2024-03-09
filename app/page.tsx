import Hero from "./ui/hero";
import Search from "./ui/search";

export default function Home() {
  return (
    <main className="flex flex-col px-10 pb-5 gap-5 flex-grow">
      <Hero />
      <Search />
    </main>
  );
}
