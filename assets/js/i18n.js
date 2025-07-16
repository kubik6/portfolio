
const translations = {
  "en": {
    "title": "Web Agency",
    "home": "Home",
    "about": "About",
    "how_it_work": "How It Works",
    "service": "Services",
    "main": "Stunning Websites Made for You",
    "what_we_do": "What We Do",
    "design": "Design",
    "design_description": "We craft eye‑catching, user‑friendly interfaces that capture your brand’s essence and engage your audience.",
    "solution": "Solutions",
    "solution_description": "Our team develops robust, scalable web solutions tailored to your needs—whether it’s an e‑commerce platform or a dynamic marketing site.",
    "responsive": "Responsive",
    "responsive_description": "Every site we build adapts flawlessly to any screen size, ensuring a seamless experience on desktop, tablet, and mobile.",
    "custom": "Custom",
    "custom_description": "From unique animations to advanced integrations, we deliver custom features that set you apart from the competition.",
    "get_in_touch": "Get in Touch",
    "email": "Email",
    "name": "Name",
    "message": "Message",
    "send": "Send",
    "our_work": "Check Our Work",
    "portfolio_description": "Browse our latest projects to see how we turn bold ideas into beautiful, high‑performance websites.",
    "pricing": "Pricing",
    "pricing_description": "Explore our transparent pricing plans and find the perfect package for your budget and goals.",
    "services": "Unlimited Services",
    "services_description": "From design and development to ongoing support, enjoy unlimited access to our full suite of professional services.",
    "faq": "Frequently Asked Questions",
    "footer_description": "Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life."
  },
  "ru": {
    "title": "Веб‑Агентство",
    "home": "Главная",
    "about": "О нас",
    "how_it_work": "Как это работает",
    "service": "Услуги",
    "main": "Впечатляющие сайты созданные для вас",
    "what_we_do": "Что мы делаем",
    "design": "Дизайн",
    "design_description": "Мы создаём яркие и удобные интерфейсы, которые отражают характер вашего бренда и привлекают пользователей.",
    "solution": "Решения",
    "solution_description": "Наша команда разрабатывает надёжные и масштабируемые веб‑решения, адаптированные под ваши задачи — от интернет‑магазинов до маркетинговых сайтов.",
    "responsive": "Адаптивность",
    "responsive_description": "Каждый сайт отлично отображается на любых экранах — от десктопа до смартфона и планшета.",
    "custom": "Индивидуально",
    "custom_description": "Уникальные анимации, сложные интеграции и другие эксклюзивные функции, которые выделят вас на фоне конкурентов.",
    "get_in_touch": "Свяжитесь с нами",
    "email": "Электронная почта",
    "name": "Имя",
    "message": "Сообщение",
    "send": "Отправить",
    "our_work": "Наши работы",
    "portfolio_description": "Посмотрите наши последние проекты и убедитесь, как мы превращаем смелые идеи в эффективные и красивые сайты.",
    "pricing": "Цены",
    "pricing_description": "Изучите наши прозрачные тарифные планы и выберите оптимальный пакет под ваш бюджет и задачи.",
    "services": "Неограниченный спектр услуг",
    "services_description": "От дизайна и разработки до технической поддержки — получите полный набор профессиональных услуг без ограничений.",
    "faq": "Часто задаваемые вопросы",
    "footer_description": "Готовы вывести своё присутствие в интернете на новый уровень? Свяжитесь с нами сегодня, чтобы обсудить проект и узнать, как мы воплотим вашу идею в жизнь."
  },
  "az": {
    "title": "Web Agentliyi",
    "home": "Ana Səhifə",
    "about": "Haqqımızda",
    "how_it_work": "Necə İşləyir",
    "service": "Xidmətlər",
    "main": "Sizin üçün yaradılmış heyrətamiz saytlar",
    "what_we_do": "Biz Nə Edirik",
    "design": "Dizayn",
    "design_description": "Brendinizin ruhunu əks etdirən və istifadəçiləri cəlb edən gözoxşayan və rahat interfeyslər yaradırıq.",
    "solution": "Həllər",
    "solution_description": "Komandamız ehtiyaclarınıza uyğun, etibarlı və miqyaslana bilən veb‑həllər hazırlayır — e‑ticarət platformalarından dinamik marketinq saytlarına qədər.",
    "responsive": "Adaptivlik",
    "responsive_description": "Yaratdığımız hər sayt istənilən ekranda mükəmməl işləyir — masaüstündən mobil telefona qədər.",
    "custom": "Fərdiləşdirmə",
    "custom_description": "Yaradıcılıq animasiyalardan tutmuş qabaqcıl inteqrasiyalara qədər, sizi rəqiblərdən fərqləndirəcək xüsusi funksiyalar təqdim edirik.",
    "get_in_touch": "Əlaqə Saxlayın",
    "email": "E‑poçt",
    "name": "Ad",
    "message": "Mesaj",
    "send": "Göndər",
    "our_work": "Layihələrimiz",
    "portfolio_description": "Son layihələrimizə baxın və ideyaları necə gözəl və yüksək performanslı veb‑saytlara çevirtdiyimizi görün.",
    "pricing": "Qiymətlər",
    "pricing_description": "Şəffaf qiymət planlarımızı araşdırın və büdcənizə ən uyğun paketi seçin.",
    "services": "Məhdudiyyətsiz Xidmətlər",
    "services_description": "Dizayndan inkişafına və davamlı dəstəyə qədər peşəkar xidmətlərimizin tam spektrini məhdudiyyətsiz əldə edin.",
    "faq": "Tez‑tez Verilən Suallar",
    "footer_description": "Onlayn mövcudluğunuzu növbəti səviyyəyə qaldırmağa hazırsınız? Layihənizi müzakirə etmək və ideyanızı həyata keçirmək yollarını öyrənmək üçün bu gün bizimlə əlaqə saxlayın."
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

