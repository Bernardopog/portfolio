import Presentation from "@/components/Presentation";
import TechList from "@/components/TechList";

export default function Home() {
  return (
    <main className="grid-bg-light dark:grid-bg-dark relative w-full h-[calc(100vh-3rem)] bg-white dark:bg-black">
      <Presentation />
      <TechList />
    </main>
  );
}
