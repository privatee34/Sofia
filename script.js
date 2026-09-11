/**
 * SOFIA ZHUKOVA — 15TH BIRTHDAY
 * Cinematic Digital Experience Controller
 * Pure Vanilla JavaScript • Zero Dependencies • Cloudflare Ready
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. INTERNATIONALIZATION (i18n) DICTIONARY
     ========================================================================== */
  const translations = {
    ru: {
      documentTitle: 'Sofia Zhukova — 15th Birthday',
      'opening.intro': 'Маленький подарок для тебя.',
      'opening.button': 'Открыть сюрприз →',
      'hero.greeting': 'С Днём Рождения',
      'hero.subtitle': '15 лет — это только начало.',
      'hero.scroll': 'Листай дальше ↓',
      'message.heading': 'Для тебя',
      'message.paragraph': 'Сегодня тебе исполняется 15. Пусть этот новый год твоей жизни принесёт тебе больше счастливых моментов, искренних улыбок, новых открытий и людей, рядом с которыми хочется улыбаться.',
      'gallery.view': 'Увеличить ↗',
      'captions.moment1': 'Один из тех моментов.',
      'captions.moment2': 'Просто хороший день.',
      'captions.moment3': 'Такие моменты хочется сохранить.',
      'captions.moment4': 'Некоторые воспоминания остаются тёплыми.',
      'fullscreen.quote1': 'Некоторые моменты просто хочется сохранить.',
      'fifteen_moments.title': '15 маленьких моментов',
      'fifteen_moments.subtitle': '15 пожеланий и светлых деталей для твоего нового года',
      'pills.1': 'Улыбки',
      'pills.2': 'Новые мечты',
      'pills.3': 'Маленькие радости',
      'pills.4': 'Красивые дни',
      'pills.5': 'Новые истории',
      'pills.6': 'Тёплые воспоминания',
      'pills.7': 'Искренность',
      'pills.8': 'Вдохновение',
      'pills.9': 'Светлые мысли',
      'pills.10': 'Уютные вечера',
      'pills.11': 'Добрые люди',
      'pills.12': 'Смех и радость',
      'pills.13': 'Новые открытия',
      'pills.14': 'Счастливые случайности',
      'pills.15': 'Твой особенный год',
      'special.title': 'Некоторые люди делают моменты особенными.',
      'special.text': 'И сегодня просто хочется пожелать тебе всего самого доброго — чтобы впереди было много дней, которые захочется запомнить.',
      'moments.title': 'Моменты',
      'moments.subtitle': 'Время проходит, а хорошие моменты остаются.',
      'fifteen.name': 'София Жукова',
      'fifteen.triplet': 'Новый год. Новые моменты. Новые мечты.',
      'surprise.eyebrow': 'И ещё кое-что...',
      'surprise.button': 'Открыть ✦',
      'surprise.message': 'С 15-летием, София.<br>Пусть впереди будет много счастливых дней, искренних улыбок и моментов, которые однажды захочется вспомнить.',
      'final.title': 'С Днём Рождения ✨',
      'final.wishes': 'С добрыми пожеланиями.',
      'footer.wishes': 'С добрыми пожеланиями.',
      'lightbox.hint': 'Используйте стрелки ← → или свайп для навигации'
    },
    en: {
      documentTitle: 'Sofia Zhukova — 15th Birthday',
      'opening.intro': 'A little something for you.',
      'opening.button': 'Open the surprise →',
      'hero.greeting': 'Happy Birthday',
      'hero.subtitle': '15 is only the beginning.',
      'hero.scroll': 'Scroll to discover ↓',
      'message.heading': 'For You',
      'message.paragraph': 'Today you turn 15. May this new year of your life bring you more happy moments, genuine smiles, new discoveries, and people who make you want to smile.',
      'gallery.view': 'Expand ↗',
      'captions.moment1': 'One of those moments.',
      'captions.moment2': 'Just a good day.',
      'captions.moment3': 'Moments worth keeping.',
      'captions.moment4': 'Some memories stay warm.',
      'fullscreen.quote1': 'Some moments are simply worth keeping.',
      'fifteen_moments.title': '15 Little Moments',
      'fifteen_moments.subtitle': '15 warm wishes and bright details for your new year',
      'pills.1': 'Smiles',
      'pills.2': 'New dreams',
      'pills.3': 'Little joys',
      'pills.4': 'Beautiful days',
      'pills.5': 'New stories',
      'pills.6': 'Warm memories',
      'pills.7': 'Sincerity',
      'pills.8': 'Inspiration',
      'pills.9': 'Bright thoughts',
      'pills.10': 'Cozy evenings',
      'pills.11': 'Kind people',
      'pills.12': 'Laughter & joy',
      'pills.13': 'New discoveries',
      'pills.14': 'Happy coincidences',
      'pills.15': 'Your special year',
      'special.title': 'Some people make moments feel special.',
      'special.text': 'And today, I simply want to wish you the very best — may there be many days ahead that you’ll want to remember.',
      'moments.title': 'Moments',
      'moments.subtitle': 'Time passes, but the good moments remain.',
      'fifteen.name': 'Sofia Zhukova',
      'fifteen.triplet': 'A new year. New moments. New dreams.',
      'surprise.eyebrow': "There's one more thing...",
      'surprise.button': 'Open ✦',
      'surprise.message': 'Happy 15th Birthday, Sofia.<br>May there be many happy days ahead, genuine smiles, and moments you’ll one day want to remember.',
      'final.title': 'Happy Birthday ✨',
      'final.wishes': 'With warm wishes.',
      'footer.wishes': 'With warm wishes.',
      'lightbox.hint': 'Use arrow keys ← → or swipe to navigate'
    }
  };

  /* Photo collection for Lightbox */
  const photosData = [
    { src: 'images/image7.jpg', alt: 'Sofia Zhukova' },
    { src: 'images/image1.jpg', alt: 'Sofia Zhukova' },
    { src: 'images/image5.jpg', alt: 'Sofia Zhukova' },
    { src: 'images/image2.jpg', alt: 'Sofia Zhukova' },
    { src: 'images/image8.jpg', alt: 'Sofia Zhukova' },
    { src: 'images/image3.jpg', alt: 'Sofia Zhukova' },
    { src: 'images/image4.jpg', alt: 'Sofia Zhukova' },
    { src: 'images/image6.jpg', alt: 'Sofia Zhukova' }
  ];

  /* ==========================================================================
     2. SAFE STORAGE HELPERS
     ========================================================================== */
  const STORAGE_KEY = 'sofia_bday_lang';

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'ru';
    } catch (e) {
      return 'ru';
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // Safe fallback if local storage is restricted
    }
  }

  /* ==========================================================================
     3. MAIN CONTROLLER
     ========================================================================== */
  function initApp() {
    // --- Elements ---
    const btnRu = document.getElementById('btn-lang-ru');
    const btnEn = document.getElementById('btn-lang-en');
    const header = document.getElementById('header');
    const openingScreen = document.getElementById('opening-screen');
    const openingBtn = document.getElementById('opening-btn');
    
    // Surprise Reveal Elements
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseInitial = document.getElementById('surprise-initial');
    const surpriseRevealed = document.getElementById('surprise-revealed');
    const surpriseCard = document.getElementById('surprise-card');

    // Lightbox Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCurrent = document.getElementById('lightbox-current');
    const lightboxTotal = document.getElementById('lightbox-total');
    const lightboxCloseBtn = document.getElementById('lightbox-close');
    const lightboxPrevBtn = document.getElementById('lightbox-prev');
    const lightboxNextBtn = document.getElementById('lightbox-next');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');

    let currentLang = getStoredLang();
    if (!translations[currentLang]) currentLang = 'ru';

    let currentPhotoIndex = 0;
    let lastFocusedElement = null;

    if (lightboxTotal) {
      lightboxTotal.textContent = photosData.length.toString();
    }

    // --- Opening Screen Handler ---
    if (openingBtn && openingScreen) {
      openingBtn.addEventListener('click', () => {
        openingScreen.classList.add('is-opened');
        setTimeout(() => {
          openingScreen.style.display = 'none';
        }, 850);
      });
    }

    // --- Surprise Reveal Handler ---
    if (surpriseBtn && surpriseInitial && surpriseRevealed) {
      surpriseBtn.addEventListener('click', () => {
        surpriseInitial.style.opacity = '0';
        surpriseInitial.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
          surpriseInitial.style.display = 'none';
          surpriseRevealed.style.display = 'block';
          if (surpriseCard) surpriseCard.classList.add('is-revealed-state');
          
          requestAnimationFrame(() => {
            surpriseRevealed.style.opacity = '1';
            surpriseRevealed.style.transform = 'scale(1)';
          });
        }, 300);
      });
    }

    // --- Lightbox Functions ---
    function updateLightboxContent() {
      const photo = photosData[currentPhotoIndex];
      if (!photo) return;

      if (lightboxImg) {
        lightboxImg.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.97)';
        
        const tempImg = new Image();
        tempImg.onload = () => {
          lightboxImg.src = photo.src;
          lightboxImg.alt = photo.alt;
          lightboxImg.style.opacity = '1';
          lightboxImg.style.transform = 'scale(1)';
        };
        tempImg.src = photo.src;
      }

      if (lightboxCurrent) {
        lightboxCurrent.textContent = (currentPhotoIndex + 1).toString();
      }
    }

    function openLightbox(index) {
      if (!lightbox) return;
      currentPhotoIndex = (index >= 0 && index < photosData.length) ? index : 0;
      lastFocusedElement = document.activeElement;
      
      updateLightboxContent();

      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (lightboxCloseBtn) {
        lightboxCloseBtn.focus();
      }
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    function showPrevPhoto() {
      currentPhotoIndex = (currentPhotoIndex - 1 + photosData.length) % photosData.length;
      updateLightboxContent();
    }

    function showNextPhoto() {
      currentPhotoIndex = (currentPhotoIndex + 1) % photosData.length;
      updateLightboxContent();
    }

    // --- Language Switcher ---
    function setLanguage(lang) {
      if (!translations[lang]) return;
      currentLang = lang;
      setStoredLang(lang);
      document.documentElement.setAttribute('lang', lang);

      // Buttons active state
      if (btnRu) btnRu.classList.toggle('active', lang === 'ru');
      if (btnEn) btnEn.classList.toggle('active', lang === 'en');

      // Title
      if (translations[lang].documentTitle) {
        document.title = translations[lang].documentTitle;
      }

      // Update all translatable elements
      const translatableElements = document.querySelectorAll('[data-i18n]');
      translatableElements.forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          const content = translations[lang][key];
          if (content.includes('<br>')) {
            el.innerHTML = content;
          } else {
            el.textContent = content;
          }
        }
      });
    }

    if (btnRu) btnRu.addEventListener('click', () => setLanguage('ru'));
    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

    // Apply language right away
    setLanguage(currentLang);

    // --- Header Scroll State ---
    function handleScroll() {
      if (!header) return;
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- Intersection Observer for Scroll Reveals ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.08,
        rootMargin: '0px 0px 50px 0px'
      });

      revealElements.forEach((el) => revealObserver.observe(el));
    } else {
      revealElements.forEach((el) => el.classList.add('is-revealed'));
    }

    // Safety fallback
    setTimeout(() => {
      revealElements.forEach((el) => el.classList.add('is-revealed'));
    }, 1200);

    // --- Gallery Lightbox Triggers ---
    const photoTriggers = document.querySelectorAll('[data-photo-index]');
    photoTriggers.forEach((trigger) => {
      const index = parseInt(trigger.getAttribute('data-photo-index'), 10);
      
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(index);
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });
    });

    // Lightbox button controls
    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevPhoto);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextPhoto);

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (!lightbox || !lightbox.classList.contains('active')) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevPhoto();
      } else if (e.key === 'ArrowRight') {
        showNextPhoto();
      }
    });

    // Mobile Touch Swipe Handling
    if (lightbox) {
      let touchStartX = 0;
      let touchStartY = 0;
      let touchEndX = 0;
      let touchEndY = 0;

      lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;
        const threshold = 40;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
          if (diffX > 0) {
            showPrevPhoto();
          } else {
            showNextPhoto();
          }
        } else if (diffY > 90 && Math.abs(diffX) < 60) {
          closeLightbox();
        }
      }, { passive: true });
    }

    // --- Custom Cursor on Desktop ---
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice && cursorDot && cursorRing && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      let mouseX = -100;
      let mouseY = -100;
      let ringX = -100;
      let ringY = -100;

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      });

      function renderCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        requestAnimationFrame(renderCursor);
      }
      renderCursor();

      const interactiveTargets = document.querySelectorAll('a, button, [role="button"], .photo-card, .moment-pill-card');
      interactiveTargets.forEach((target) => {
        target.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
        target.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
      });
    }
  }

  // DOM ready hook
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
