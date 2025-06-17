import useLang from "@/hooks/useLang";

export default function LanguageSwitcher() {
  const { t, toggleLanguage, isRTL } = useLang();

  return (
    <button
      onClick={toggleLanguage}
      className={`fixed ${
        isRTL ? "left-4" : "right-32"
      } top-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 dark:bg-indigo-700 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-colors duration-200`}
      aria-label={t.language.switch}
    >
      {t.language.current}
    </button>
  );
}
