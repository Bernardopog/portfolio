"use client";

export default function SoftskillDescription() {
  return (
    <div>
      <p>
        Minhas habilidades interpessoais que desenvolvi ajudando outros devs na
        prática, colaborando com outros desenvolvedores no site{" "}
        <a
          href="https://www.frontendmentor.io/profile/Bernardopog"
          target="_blank"
          className="underline"
          onClick={(ev) => ev.stopPropagation()}
        >
          <b>Frontend Mentor</b>
        </a>
        .
      </p>
      <br />
      <ul className="list-disc pl-6 py-2 border rounded-lg border-black/25 dark:border-white/25">
        <li>
          <b>Comunicação clara</b>
        </li>
        <li>
          <b>Empatia</b>
        </li>
        <li>
          <b>Colaboração</b>
        </li>
      </ul>
      <br />
      <p>
        Estas habilidades são pilares do meu crescimento, dentro e fora do
        código.
      </p>
    </div>
  );
}
