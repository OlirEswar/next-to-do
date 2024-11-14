"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

export default function Component({ label = "Checkbox Label", setTodos }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  useEffect(() => {
    if (isChecked) {
      fetch(`/api/delete-pet?text=${label}`).then((res) => res.json());
    }
  }, [isChecked]);

  return (
    <label className="flex items-center space-x-3 cursor-pointer select-none">
      <div
        className={`w-6 h-6 border-2 rounded-md flex items-center justify-center ${
          isChecked
            ? "bg-primary border-primary"
            : "border-gray-300 dark:border-gray-600"
        }`}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        {isChecked && <Check className="w-4 h-4 text-primary-foreground" />}
      </div>
      <span
        className={`${
          isChecked ? "line-through text-gray-500 dark:text-gray-400" : ""
        }`}
      >
        {label}
      </span>
    </label>
  );
}
