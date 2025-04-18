"use client";

interface IButtonProps {
  label: string;
  action: () => void;
}

export default function Button({ label, action }: IButtonProps) {
  return (
    <button
      className="min-w-fit py-2 px-4 border rounded-lg ease-in-out duration-300 cursor-pointer border-black/25 text-shark-900 dark:border-white/25 dark:text-shark-100 hover:bg-black/10 dark:hover:bg-white/10"
      onClick={() => action()}
    >
      {label}
    </button>
  );
}
