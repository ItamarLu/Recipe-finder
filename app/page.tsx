import Hero from "./ui/hero";
import Ingredients from "./ui/ingredients";
import Search from "./ui/Search";

export default function Home() {
  return (
    <main className="flex flex-col px-10 pb-5 flex-grow">
      <Hero />
      <Search />
      <Ingredients />
    </main>
  );
}
