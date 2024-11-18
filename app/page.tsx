import { Preloader } from "./animations/preloader/preloader";
import { Hero } from "./hero-section/Hero";

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="flex flex-col items-center justify-center">
        <Hero />
      </main>
    </>
  );
}
