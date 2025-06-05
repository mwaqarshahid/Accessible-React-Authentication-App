import type { InputHTMLAttributes } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onPasswordToggle?: () => void;
}

export default function FormInput({
  label,
  description,
  id,
  showPasswordToggle = false,
  showPassword = false,
  onPasswordToggle,
  className = "",
  ...props
}: FormInputProps) {
  const inputClasses = `block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                     text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${className}`;

  const descriptionId = description ? `${id}-description` : undefined;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1">
        <input
          id={id}
          aria-describedby={descriptionId}
          className={inputClasses}
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onPasswordToggle}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeSlashIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
      {description && (
        <p id={descriptionId} className="mt-1 text-xs text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
}
