
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

  document.querySelectorAll('.lang-toggle span').forEach(span => {
    span.classList.toggle('active', span.dataset.lang === lang);
  });
}

const initLang = localStorage.getItem('siteLang') || 'az';
applyLocale(initLang);

document.querySelectorAll('.lang-toggle span').forEach(span => {
  span.addEventListener('click', () => {
    const selectedLang = span.dataset.lang;
    localStorage.setItem('siteLang', selectedLang);
    applyLocale(selectedLang);
  });
});

