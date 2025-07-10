
const translations = {
 "en": {
    "title": "Web Agency",
  },
  "ru": {
    "title": " Создаём цифровое превосходство",
  },
  "az": {
    "title": "Rəqəmsal Mükəmməllik Yaradın",
  }
};

function applyLocale(lang) {
  const dict = translations[lang] || translations.az;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

}

const langSelect = document.getElementById('lang-select');
const initLang = localStorage.getItem('siteLang') || 'az';

langSelect.value = initLang;
applyLocale(initLang);

langSelect.addEventListener('change', e => {
  const newLang = e.target.value;
  localStorage.setItem('siteLang', newLang);
  applyLocale(newLang);
});
