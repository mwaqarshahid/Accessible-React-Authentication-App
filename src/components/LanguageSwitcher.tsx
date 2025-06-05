import useLang from "@/hooks/useLang";

export default function LanguageSwitcher() {
  const { t, toggleLanguage, isRTL } = useLang();

  return (
    <button
      onClick={toggleLanguage}
      className={`fixed ${
        isRTL ? "left-4" : "right-4"
      } top-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      aria-label={t.language.switch}
    >
      {t.language.current}
    </button>
  );
}
