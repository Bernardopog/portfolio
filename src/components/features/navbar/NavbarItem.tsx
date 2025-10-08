import Button from "@/components/ui/Button";
import { ViewTypes } from "@/types/aliases/ViewTypes";
import { ReactNode } from "react";

interface INavbarItemProps {
  icon: ReactNode;
  action: () => void;
  name: string;
  view: ViewTypes;
}

export default function NavbarItem({
  icon,
  action,
  name,
  view,
}: INavbarItemProps) {
  return (
    <li>
      <Button
        ariaLabel="Home"
        className={`flex items-center justify-center size-10 rounded-full border cursor-pointer duration-300 ease-in-out btn-default-color ${
          view === name &&
          "shadow-lg shadow-purple-heart-600/30 outline-1 outline-purple-600 dark:shadow-punch-600/30 dark:outline-punch-600/50"
        }`}
        action={() => action()}
        icon={icon}
      />
    </li>
  );
}
