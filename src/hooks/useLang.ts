import { useLanguageContext } from "@/hooks/useLanguageContext";

const useLang = () => {
  const {
    language,
    translations: t,
    toggleLanguage,
    isRTL,
  } = useLanguageContext();

  const dir = isRTL ? "rtl" : "ltr";
  const align: "left" | "right" = isRTL ? "right" : "left";
  const reverseAlign: "left" | "right" = !isRTL ? "right" : "left";
  const textAlignClass = isRTL ? "text-right" : "text-left";
  const marginClass = isRTL ? "ml" : "mr";
  const reverseMarginClass = !isRTL ? "ml" : "mr";
  const flexDirectionClass = isRTL ? "flex-row-reverse" : "flex-row";

  return {
    language,
    t,
    toggleLanguage,
    isRTL,
    dir,
    align,
    reverseAlign,
    textAlignClass,
    marginClass,
    reverseMarginClass,
    flexDirectionClass,
  };
};

export default useLang;
