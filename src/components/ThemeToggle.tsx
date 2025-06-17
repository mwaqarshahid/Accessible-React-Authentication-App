import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../hooks/useTheme";
import useLang from "../hooks/useLang";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { isRTL } = useLang();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed ${
        isRTL ? "left-32" : "right-4"
      } top-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-700 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-colors duration-200`}
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <SunIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
