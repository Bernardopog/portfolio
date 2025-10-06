import { SiFrontendmentor, SiGithub, SiLinkedin } from "react-icons/si";

export default function SocialMediaList() {
  const socialMedia = [
    {
      name: "github",
      icon: <SiGithub />,
      href: "https://github.com/Bernardopog",
    },
    {
      name: "linkedin",
      icon: <SiLinkedin />,
      href: "https://www.linkedin.com/in/bernardo-poggioni-3746a42a5/",
    },
    {
      name: "frontendmentor",
      icon: <SiFrontendmentor />,
      href: "https://www.frontendmentor.io/profile/Bernardopog",
    },
  ];

  return (
    <ul className="flex absolute top-46 p-2 gap-2 rounded-lg border border-black/10 dark:border-white/10 text-black md:flex-col md:left-[calc(100vw-3.5rem)] md:top-0">
      {socialMedia.map((socialMedia) => (
        <li
          key={socialMedia.name}
          className="text-shark-950 dark:text-shark-50"
        >
          <a
            aria-label={`Ir para ${socialMedia.name}`}
            href={socialMedia.href}
            target="_blank"
            className="flex items-center text-lg border p-2 rounded-full duration-300 ease-in-out border-black/25 hover:bg-black/10 dark:hover:bg-white/10 dark:border-white/25"
          >
            {socialMedia.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
