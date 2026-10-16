const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav.classList.toggle("open", !isOpen);
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

// Rotate the role text without using a library.
const roleWords = ["Developer", "Creator", "Dreamer", "Problem Solver"];
const rotatingWord = document.querySelector("#rotating-word");
let wordIndex = 0;
setInterval(() => {
  const activeWords = (typeof roleWordsByLanguage !== "undefined" && roleWordsByLanguage[currentLanguage]) ? roleWordsByLanguage[currentLanguage] : roleWords;
  wordIndex = (wordIndex + 1) % activeWords.length;
  rotatingWord.animate(
    [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(8px)" }],
    { duration: 180, fill: "forwards" }
  ).onfinish = () => {
    rotatingWord.textContent = activeWords[wordIndex];
    rotatingWord.animate(
      [{ opacity: 0, transform: "translateY(-8px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 220, fill: "forwards" }
    );
  };
}, 2400);

// Reveal cards as they enter the viewport.
const revealItems = document.querySelectorAll(".reveal-card");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}

// Highlight the navigation item for the section currently in view.
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => sectionObserver.observe(section));
}

// Subtle pointer glow on devices with a fine pointer.
const glow = document.querySelector(".cursor-glow");
if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", event => {
    glow.style.left = `${event.clientX - 110}px`;
    glow.style.top = `${event.clientY - 110}px`;
  }, { passive: true });
}
document.querySelector("#year").textContent = new Date().getFullYear();

// Bilingual content: English and Japanese. No translation API is required.
const languageToggle = document.querySelector('#languageToggle');
const translations = {
  en: {
    navHome:'Home', navAbout:'About', navSkills:'Skills', navAI:'AI', navProjects:'Projects', navContact:'Let’s talk <span>↗</span>',
    openTo:'OPEN TO OPPORTUNITIES', hello:'Hello, I\'m', creative:'Creative',
    heroDescription:'I turn ideas into <span class="text-gradient">colorful digital experiences.</span> Learning, building, and growing from Nepal to Japan — using code and AI to bring ideas to life.',
    exploreWork:'Explore my work <span>↘</span>', contactMe:'Contact me <span>↗</span>', socialNote:'Currently learning & building',
    ideasReality:'IDEAS → REALITY', designCode:'DESIGN / CODE / CREATE', magic:'LET’S<br>MAKE<br><em>MAGIC</em> ✳', scrollExplore:'SCROLL TO EXPLORE',
    aboutKicker:'<span>01</span> / A LITTLE ABOUT ME', aboutTitle:'Curious mind.<br><span class="outline-text">Creative soul.</span><br>Building the future.',
    aboutP1:'I\'m Bijay, a student in Japan who loves turning ideas into websites and digital products. I’m currently growing my skills in front-end development and exploring what I can create with code.',
    aboutP2:'My goal is to become an IT engineer and build useful, thoughtful experiences that make people’s lives a little easier.', moreAbout:'A little more about me <span>↗</span>',
    marquee:'DESIGN <span>✳</span> BUILD <span>✳</span> LEARN <span>✳</span> REPEAT <span>✳</span> DESIGN <span>✳</span> BUILD <span>✳</span> LEARN <span>✳</span> REPEAT <span>✳</span>',
    skillsKicker:'<span>02</span> / MY TOOLKIT', skillsTitle:'Things I’m <span class="text-gradient">learning.</span>', skillsDesc:'Small steps every day. Strong foundations for bigger ideas.',
    htmlDesc:'The structure behind the web.', cssDesc:'Bringing ideas to life with style.', jsDesc:'Making websites interactive.', uxDesc:'Making experiences feel simple.', skillsNote:'* Skills shown reflect my learning journey. I’m always improving.',
    aiKicker:'<span>03</span> / HOW I CREATE', aiOverline:'HUMAN IDEAS, AI-POWERED WORKFLOW', aiTitle:'Curiosity meets<br><span class="text-gradient">artificial intelligence.</span>',
    aiDesc:'I use AI as a creative partner to explore ideas, learn new technologies, troubleshoot code, and make my development workflow more productive.',
    aiTags:'<span>AI-assisted coding</span><span>Idea exploration</span><span>Creative workflows</span>', aiCaption:'IMAGINE · LEARN · BUILD', aiNote:'AI is part of my learning and creative process — I keep developing my own skills along the way.',
    projectsKicker:'<span>04</span> / SELECTED WORK', projectsTitle:'Made with <span class="text-gradient">curiosity.</span>', projectsDesc:'Websites I’ve built and published. Open each live project to explore it.',
    cafeDesc:'A café website focused on a calm atmosphere and a responsive layout.', viewLive:'View live website <span>↗</span>', shopDesc:'A shopping website concept published online as a live project.',
    portfolioDesc:'A personal corner of the internet to show my growth.', explorePortfolio:'Explore this portfolio <span>↗</span>',
    contactKicker:'<span>05</span> / YOUR TURN', contactTitle:'Have an idea?<br><span class="text-gradient">Let’s make it real.</span>',
    contactDesc:'I’m learning, creating, and open to connecting with people who love building things.', sayHello:'Say hello <span>↗</span>',
    footerDesc:'Learning in public. Building with purpose.', backTop:'BACK TO TOP ↑', liveBadge:'LIVE WEBSITE ↗', metaWebsite1:'01 / WEBSITE', metaWebsite2:'02 / WEBSITE', metaPortfolio:'03 / PORTFOLIO', basedJapan:'BASED IN JAPAN 🇯🇵', madeCuriosity:'MADE WITH CURIOSITY ✳'
  },
  ja: {
    navHome:'ホーム', navAbout:'自己紹介', navSkills:'スキル', navAI:'AI活用', navProjects:'制作実績', navContact:'お問い合わせ <span>↗</span>',
    openTo:'新しい機会を探しています', hello:'こんにちは、', creative:'クリエイティブ',
    heroDescription:'アイデアを <span class="text-gradient">カラフルなデジタル体験</span> に変えていきます。ネパールから日本へ。コードとAIを活用しながら、学び、制作し、成長しています。',
    exploreWork:'制作実績を見る <span>↘</span>', contactMe:'お問い合わせ <span>↗</span>', socialNote:'学びながら制作中',
    ideasReality:'アイデアを形に', designCode:'デザイン / コード / 制作', magic:'一緒に<br><em>新しいもの</em><br>を作ろう ✳', scrollExplore:'スクロールして見る',
    aboutKicker:'<span>01</span> / 自己紹介', aboutTitle:'好奇心を大切に。<br><span class="outline-text">創造する心。</span><br>未来をつくる。',
    aboutP1:'ビザエです。日本で学びながら、アイデアをウェブサイトやデジタル製品にすることを楽しんでいます。現在はフロントエンド開発のスキルを伸ばし、コードで何が作れるかを探っています。',
    aboutP2:'将来はITエンジニアになり、人々の生活を少し便利にする、役立つサービスを作ることが目標です。', moreAbout:'もっと詳しく <span>↗</span>',
    marquee:'デザイン <span>✳</span> 制作 <span>✳</span> 学ぶ <span>✳</span> 繰り返す <span>✳</span> デザイン <span>✳</span> 制作 <span>✳</span> 学ぶ <span>✳</span> 繰り返す <span>✳</span>',
    skillsKicker:'<span>02</span> / スキル', skillsTitle:'現在 <span class="text-gradient">学んでいること。</span>', skillsDesc:'毎日少しずつ。大きなアイデアにつながる基礎を学んでいます。',
    htmlDesc:'ウェブページの構造を作ります。', cssDesc:'デザインでアイデアを形にします。', jsDesc:'ウェブサイトに動きや機能を加えます。', uxDesc:'使いやすい体験を考えます。', skillsNote:'※ 現在の学習状況を示しています。これからも成長を続けます。',
    aiKicker:'<span>03</span> / 制作方法', aiOverline:'人のアイデア × AIの活用', aiTitle:'好奇心と<br><span class="text-gradient">人工知能の出会い。</span>',
    aiDesc:'AIをアイデア探し、新しい技術の学習、コードの問題解決、開発作業の効率化に活用しています。AIを創作のパートナーとして使いながら、自分のスキルも伸ばしています。',
    aiTags:'<span>AIを活用したコーディング</span><span>アイデア探し</span><span>創造的な制作</span>', aiCaption:'想像する · 学ぶ · 作る', aiNote:'AIは学習と制作を助けるツールです。自分自身の技術も継続して磨いています。',
    projectsKicker:'<span>04</span> / 制作実績', projectsTitle:'好奇心から <span class="text-gradient">生まれた作品。</span>', projectsDesc:'制作して公開したウェブサイトです。各リンクから実際のサイトをご覧いただけます。',
    cafeDesc:'落ち着いた雰囲気と、スマートフォンにも対応したカフェのウェブサイトです。', viewLive:'公開サイトを見る <span>↗</span>', shopDesc:'オンラインで公開している、ショップをイメージしたウェブサイトです。',
    portfolioDesc:'学びや成長を紹介するための個人ポートフォリオです。', explorePortfolio:'このポートフォリオを見る <span>↗</span>',
    contactKicker:'<span>05</span> / お問い合わせ', contactTitle:'アイデアがありますか？<br><span class="text-gradient">一緒に形にしましょう。</span>',
    contactDesc:'学びながら制作しています。ものづくりが好きな方とのつながりを歓迎します。', sayHello:'気軽にご連絡ください <span>↗</span>',
    footerDesc:'学びを共有し、目的を持って制作する。', backTop:'ページ上部へ ↑', liveBadge:'公開中のサイト ↗', metaWebsite1:'01 / ウェブサイト', metaWebsite2:'02 / ウェブサイト', metaPortfolio:'03 / ポートフォリオ', basedJapan:'日本を拠点に 🇯🇵', madeCuriosity:'好奇心を大切に制作 ✳'
  }
};

const roleWordsByLanguage = {
  en: ['Developer', 'Creator', 'Dreamer', 'Problem Solver'],
  ja: ['開発者', 'クリエイター', '挑戦者', '問題解決者']
};
let currentLanguage = 'en';
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[language][key] !== undefined) element.innerHTML = translations[language][key];
  });
  languageToggle.textContent = language === 'en' ? '日本語' : 'English';
  languageToggle.setAttribute('aria-label', language === 'en' ? '日本語に切り替える' : 'Switch to English');
  const heroName = document.querySelector('#heroName');
  if (heroName) heroName.innerHTML = language === 'en' ? 'BIJAY<span class="gradient-period">.</span>' : 'ビザエです。';
  document.title = language === 'en' ? 'BIJAY — Creative Developer' : 'ビザエ — クリエイティブ開発者';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = language === 'en'
    ? 'Bijay — creative web developer building colorful digital experiences with HTML, CSS and JavaScript.'
    : 'ビザエのポートフォリオ。HTML、CSS、JavaScriptとAIを活用したウェブ制作を紹介します。';
  const words = roleWordsByLanguage[language];
  wordIndex = 0;
  if (rotatingWord) rotatingWord.textContent = words[0];
  if (language === 'ja') {
    const gh = document.querySelector('.social-row a[aria-label="GitHub"]');
    const email = document.querySelector('.social-row a[aria-label="Email"]');
    if (gh) gh.innerHTML = 'GitHub <span>↗</span>';
    if (email) email.innerHTML = 'メール <span>↗</span>';
  } else {
    const gh = document.querySelector('.social-row a[aria-label="GitHub"]');
    const email = document.querySelector('.social-row a[aria-label="Email"]');
    if (gh) gh.innerHTML = 'GH <span>↗</span>';
    if (email) email.innerHTML = 'EMAIL <span>↗</span>';
  }
}
languageToggle.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'ja' : 'en'));
