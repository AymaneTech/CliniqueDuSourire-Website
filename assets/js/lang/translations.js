const translations = {
  fr: {
    acceuil : 'Acceuil',
    propos : 'A Propos',
    service : 'services',
    rendez : 'Rendez-vous',
    langues : 'Langues',
    selectLanguage : 'languages',
    french : 'french',
    arabic  : 'arabic',
  },
  ar: {
    acceuil : 'الصفحة الرئيسية',
    propos : 'معلومات عنا',
    service : 'خدمات',
    rendez : 'ميعاد',
    langues : 'اللغات',
    selectLanguage : 'languages',
    french : 'اللغة الفرنسية',
    arabic  : 'اللغة العربية',
  },
}
const languageSelector = document.querySelector("select");

languageSelector.addEventListener("change", (event) =>{
  setLanguage(event.target.value);
});

const setLanguage = (language) =>{
  const elements = document.querySelectorAll("data-translations");
  console.log(elements);
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-translations");
    element.textContent = translations(language);
  });
};
