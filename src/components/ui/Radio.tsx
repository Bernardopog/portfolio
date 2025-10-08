"use client";
import { Dispatch, SetStateAction } from "react";

interface IRadioProps {
  id: string;
  name: string;
  label: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export default function Radio({
  id,
  name,
  label,
  state,
  setState,
}: IRadioProps) {
  return (
    <label
      id={id}
      className="flex items-center gap-1 text-shark-900 dark:text-shark-100"
    >
      <input
        type="radio"
        name={name}
        id={id}
        className="peer hidden"
        checked={state}
        onChange={() => setState(!state)}
      />
      <div className="flex items-center justify-center w-4 h-4 rounded-full border border-shark-600 dark:border-shark-500 peer-checked:border-purple-heart-800 dark:peer-checked:border-punch-800">
        <div
          className={`w-3 h-3 rounded-full bg-purple-heart-600 ease-out duration-300 dark:bg-punch-600 ${
            state ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
      <span className="text-sm md:text-base">{label}</span>
    </label>
  );
}
