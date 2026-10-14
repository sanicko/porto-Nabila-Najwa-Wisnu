(() => {
  const languageKey = "three-paths-language";
  const languageToggle = document.getElementById("languageToggle");
  const supportedLanguages = ["id", "en"];
  const savedLanguage = window.localStorage.getItem(languageKey);
  let language = supportedLanguages.includes(savedLanguage) ? savedLanguage : "id";

  function updateLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.title = language === "en"
      ? document.documentElement.dataset.titleEn
      : document.documentElement.dataset.titleId;

    document.querySelectorAll("[data-id][data-en]").forEach((element) => {
      element.innerHTML = element.dataset[language];
    });

    if (languageToggle) {
      languageToggle.textContent = language === "id" ? "EN" : "ID";
      languageToggle.setAttribute("aria-label", language === "id" ? "Switch to English" : "Beralih ke Bahasa Indonesia");
    }
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const nextLanguage = language === "id" ? "en" : "id";
      window.localStorage.setItem(languageKey, nextLanguage);
      updateLanguage(nextLanguage);
    });
  }

  document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  updateLanguage(language);
})();
