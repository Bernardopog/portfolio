import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  variable: "--font-roboto-mono",
});

export default function Presentation() {
  return (
    <section className="text-center">
      <h1
        className={`inline-block h-fit py-1 text-5xl font-bold text-gradient ${robotoMono.className}`}
      >
        Bernardo Poggioni
      </h1>
      <p className={`mt-2 text-3xl text-gradient ${robotoMono.className}`}>
        Desenvolvedor{" "}
        <span className="inline-block h-fit px-2 bg-black dark:bg-white rounded-lg">
          <span className="text-gradient-inverted">Front</span>
        </span>{" "}
        end
      </p>
    </section>
  );
}
