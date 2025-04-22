import Button from "@/ui/Button";
import { ReactNode } from "react";
import { IoCodeSlash, IoHome, IoPerson } from "react-icons/io5";

interface INavbarProps {
  onToMain: () => void;
  onToAbout: () => void;
  onToProject: () => void;
}

const NavbarItem = ({
  icon,
  action,
}: {
  icon: ReactNode;
  action: () => void;
}) => (
  <li>
    <Button
      ariaLabel="Home"
      className="flex items-center justify-center size-10 rounded-full border cursor-pointer duration-300 ease-in-out btn-default-color"
      action={() => action()}
      icon={icon}
    />
  </li>
);

export default function Navbar({
  onToMain,
  onToAbout,
  onToProject,
}: INavbarProps) {
  const sectionList = [
    {
      name: "about",
      icon: <IoPerson className="text-2xl" />,
      action: () => onToAbout(),
    },
    {
      name: "main",
      icon: <IoHome className="text-2xl" />,
      action: () => onToMain(),
    },
    {
      name: "project",
      icon: <IoCodeSlash className="text-2xl" />,
      action: () => onToProject(),
    },
  ];

  return (
    <nav className="absolute bottom-0 z-50 w-full h-12 rounded-t-lg border-t border-black/10 backdrop-blur-xs duration-300 ease-in-out dark:border-white/10 md:top-0 md:bottom-auto md:left-0 md:w-12 md:h-fit md:py-4 md:border md:rounded-none md:rounded-r-lg">
      <ul className="flex items-center justify-center size-full gap-4 md:flex-col md:justify-start">
        {sectionList.map((item, index) => (
          <NavbarItem key={index} icon={item.icon} action={item.action} />
        ))}
      </ul>
    </nav>
  );
}
