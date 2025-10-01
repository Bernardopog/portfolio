import ThemeToggler from "@/components/ThemeToggler";

export default function Header({ darkMode }: { darkMode: boolean }) {
  return (
    <header className="flex items-center justify-end relative top-0 z-50 w-full h-12 px-4 bg-white/5 dark:bg-black/5">
      <ThemeToggler darkMode={darkMode} />
    </header>
  );
}
