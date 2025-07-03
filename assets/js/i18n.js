
// 1) All translations in one object:
const translations = {
  en: {
    title:        "Document",
    services:     "Services",
    contact:      "Contact",
    hello_text:   "Say Hello To Your New Site",
    web_title:    "Custom Website Creation",
    web_text:     "We build responsive, SEO‑friendly websites tailored to your brand’s needs.",
    secure_title: "Secure App Development",
    secure_text:  "From backend APIs to mobile apps, security is baked into every line of code.",
    ar_title:     "AR & Immersive Experiences",
    ar_text:      "Leverage augmented reality to engage your users in entirely new ways.",
    support_title:"Ongoing Maintenance & Support",
    support_text: "We ensure your digital products stay up‑to‑date, secure, and performing.",
    footer_about: "Building secure web & mobile experiences, immersive AR, and more."
  },
  az: {
    title:        "Sənəd",
    services:     "Xidmətlər",
    contact:      "Əlaqə",
    hello_text:   "Yeni Saytınıza Salam De",
    web_title:    "Xüsusi Veb Sayt Yaradılması",
    web_text:     "Brendinizin ehtiyaclarına uyğun cavab verən, SEO‑dostu saytlar qururuq.",
    secure_title: "Təhlükəsiz Tətbiq İnkişafı",
    secure_text:  "Backend API‑lərdən mobil tətbiqlərə qədər təhlükəsizlik hər kod sətrində nəzərə alınır.",
    ar_title:     "AR və Immersiv Təcrübələr",
    ar_text:      "İstifadəçilərinizi tamamilə yeni üsullarla cəlb etmək üçün artırılmış reallıqdan istifadə edin.",
    support_title:"Davamlı Texniki Dəstək",
    support_text: "Rəqəmsal məhsullarınızın daim güncəl, təhlükəsiz və yüksək performanslı qalmasını təmin edirik.",
    footer_about: "Təhlükəsiz veb və mobil təcrübələr, immersiv AR və daha çoxunu yaradırıq."
  },
  ru: {
    title:        "Документ",
    services:     "Услуги",
    contact:      "Контакты",
    hello_text:   "Скажите Привет Вашему Новому Сайту",
    web_title:    "Создание Сайтов на Заказ",
    web_text:     "Мы создаем адаптивные, SEO‑дружественные сайты под ваш бренд.",
    secure_title: "Разработка Безопасных Приложений",
    secure_text:  "От API на сервере до мобильных приложений — безопасность в каждой строке кода.",
    ar_title:     "AR и Иммерсивный Опыт",
    ar_text:      "Используйте дополненную реальность, чтобы по‑новому вовлечь пользователей.",
    support_title:"Техническая Поддержка",
    support_text: "Мы следим, чтобы ваши цифровые продукты оставались актуальными, защищенными и быстрыми.",
    footer_about: "Создаем безопасный веб и мобильный опыт, иммерсивный AR и многое другое."
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

  animateHeaderText();
}

function animateHeaderText() {
  const textEl = document.getElementById("animated-text");

  textEl.innerHTML = "";

  // get the new translated string
  const str = translations[ localStorage.getItem('siteLang') || 'az' ].hello_text;

  // split into spans
  str.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    // start them down & invisible
    span.style.transform = "translateY(100%)";
    span.style.opacity = "0";
    textEl.appendChild(span);
  });

  // animate in & then wobble
  gsap.to("#animated-text span", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power4.out",
    stagger: 0.05,
    onComplete: () => {
      gsap.to("#animated-text span", {
        y: i => Math.sin(i * 0.5) * -10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 0.5,
        stagger: 0.05,
      });
    }
  });
}

// 3) hook up your selector and initial load
const langSelect = document.getElementById('lang-select');
const initLang = localStorage.getItem('siteLang') || 'az';

langSelect.value = initLang;
applyLocale(initLang);

langSelect.addEventListener('change', e => {
  const newLang = e.target.value;
  localStorage.setItem('siteLang', newLang);
  applyLocale(newLang);
});
