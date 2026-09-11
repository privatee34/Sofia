/**
 * SOFIA ZHUKOVA — 15TH BIRTHDAY
 * Premium Cinematic Microsite Controller
 * Bulletproof & Zero-Dependency
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. INTERNATIONALIZATION (i18n) DICTIONARY
     ========================================================================== */
  const translations = {
    ru: {
      documentTitle: 'София Жукова — 15th Birthday',
      'hero.greeting': 'С Днём Рождения',
      'hero.name': 'София',
      'hero.subtitle': '15 лет — это только начало.',
      'hero.scroll': 'Листай дальше ↓',
      'message.tag': 'Праздничное послание',
      'message.heading': 'Для Софии',
      'message.paragraph1': 'Сегодня тебе исполняется 15.',
      'message.paragraph2': 'Пусть этот новый год твоей жизни принесёт тебе много счастливых моментов, новых открытий, добрых людей и причин улыбаться.',
      'story.tag': 'Фотоистория',
      'story.title': 'История в кадрах',
      'story.subtitle': 'Каждая фотография хранит тепло, улыбки и атмосферу этого времени.',
      'gallery.view': 'Увеличить ↗',
      'gallery.item1_title': 'Свет и вдохновение',
      'gallery.item2_title': 'Искренняя улыбка',
      'gallery.item3_title': 'Красота момента',
      'gallery.item4_title': 'Радость каждого дня',
      'gallery.item5_title': 'Неповторимый стиль',
      'moments.title': 'Моменты',
      'moments.subtitle': 'Некоторые моменты просто хочется сохранить.',
      'moments.moment1': 'Теплые воспоминания',
      'moments.moment1_note': 'Кадры, которые дарят уют и улыбку',
      'moments.moment2': 'Яркие дни',
      'moments.moment2_note': 'Энергия, юность и гармония',
      'moments.moment3': 'Прекрасное будущее',
      'moments.moment3_note': 'Впереди целый мир новых возможностей',
      'fifteen.name': 'София Жукова',
      'fifteen.triplet': 'Новый год. Новые моменты. Новые мечты.',
      'wish.text': 'Пусть твои 15 лет будут наполнены улыбками, добрыми людьми, маленькими радостями и моментами, которые однажды захочется вспомнить.',
      'final.title': 'С Днём Рождения, София.',
      'final.sparkle': '15 ✨',
      'footer.wishes': 'С добрыми пожеланиями.',
      'lightbox.hint': 'Используйте стрелки ← → или свайп для навигации'
    },
    en: {
      documentTitle: 'Sofia Zhukova — 15th Birthday',
      'hero.greeting': 'Happy Birthday',
      'hero.name': 'Sofia',
      'hero.subtitle': '15 years is only the beginning.',
      'hero.scroll': 'Scroll to discover ↓',
      'message.tag': 'Birthday Message',
      'message.heading': 'For Sofia',
      'message.paragraph1': 'Today you turn 15.',
      'message.paragraph2': 'May this new year of your life bring you many happy moments, new discoveries, kind people, and countless reasons to smile.',
      'story.tag': 'Photo Story',
      'story.title': 'Story in Frames',
      'story.subtitle': 'Every photograph preserves warmth, smiles, and the atmosphere of this time.',
      'gallery.view': 'Expand ↗',
      'gallery.item1_title': 'Light & Inspiration',
      'gallery.item2_title': 'A Genuine Smile',
      'gallery.item3_title': 'Beauty of the Moment',
      'gallery.item4_title': 'Joy of Every Day',
      'gallery.item5_title': 'Unique Style',
      'moments.title': 'Moments',
      'moments.subtitle': 'Some moments are simply worth keeping.',
      'moments.moment1': 'Warm Memories',
      'moments.moment1_note': 'Frames that bring comfort and a smile',
      'moments.moment2': 'Bright Days',
      'moments.moment2_note': 'Energy, youth, and harmony',
      'moments.moment3': 'A Beautiful Future',
      'moments.moment3_note': 'A whole world of new possibilities ahead',
      'fifteen.name': 'Sofia Zhukova',
      'fifteen.triplet': 'A new year. New moments. New dreams.',
      'wish.text': 'May your 15th year be filled with smiles, kind people, little joys, and moments you’ll one day be happy to remember.',
      'final.title': 'Happy Birthday, Sofia.',
      'final.sparkle': '15 ✨',
      'footer.wishes': 'Made with good wishes.',
      'lightbox.hint': 'Use arrow keys ← → or swipe to navigate'
    }
  };

  /* Photo collection for Lightbox */
  const photosData = [
    {
      src: 'images/image7.jpg',
      captionRu: 'Свет и вдохновение · София',
      captionEn: 'Light & Inspiration · Sofia'
    },
    {
      src: 'images/image1.jpg',
      captionRu: 'Искренняя улыбка · София',
      captionEn: 'A Genuine Smile · Sofia'
    },
    {
      src: 'images/image5.jpg',
      captionRu: 'Красота момента · София',
      captionEn: 'Beauty of the Moment · Sofia'
    },
    {
      src: 'images/image2.jpg',
      captionRu: 'Радость каждого дня · София',
      captionEn: 'Joy of Every Day · Sofia'
    },
    {
      src: 'images/image8.jpg',
      captionRu: 'Неповторимый стиль · София',
      captionEn: 'Unique Style · Sofia'
    },
    {
      src: 'images/image3.jpg',
      captionRu: 'Теплые воспоминания · София',
      captionEn: 'Warm Memories · Sofia'
    },
    {
      src: 'images/image4.jpg',
      captionRu: 'Яркие дни · София',
      captionEn: 'Bright Days · Sofia'
    },
    {
      src: 'images/image6.jpg',
      captionRu: 'Прекрасное будущее · София',
      captionEn: 'A Beautiful Future · Sofia'
    }
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
      // Ignore if storage is blocked
    }
  }

  /* ==========================================================================
     3. INITIALIZATION ON DOM READY
     ========================================================================== */
  function initApp() {
    // --- DOM Elements ---
    const btnRu = document.getElementById('btn-lang-ru');
    const btnEn = document.getElementById('btn-lang-en');
    const header = document.getElementById('header');
    
    // Lightbox DOM Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
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

    // --- Lightbox Functions ---
    function updateLightboxContent() {
      const photo = photosData[currentPhotoIndex];
      if (!photo) return;

      if (lightboxImg) {
        lightboxImg.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.96)';
        
        const tempImg = new Image();
        tempImg.onload = () => {
          lightboxImg.src = photo.src;
          lightboxImg.alt = currentLang === 'ru' ? photo.captionRu : photo.captionEn;
          lightboxImg.style.opacity = '1';
          lightboxImg.style.transform = 'scale(1)';
        };
        tempImg.src = photo.src;
      }

      if (lightboxCaption) {
        lightboxCaption.textContent = currentLang === 'ru' ? photo.captionRu : photo.captionEn;
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

      // Update button active state
      if (btnRu) btnRu.classList.toggle('active', lang === 'ru');
      if (btnEn) btnEn.classList.toggle('active', lang === 'en');

      // Update page title
      if (translations[lang].documentTitle) {
        document.title = translations[lang].documentTitle;
      }

      // Update all elements with data-i18n attribute
      const translatableElements = document.querySelectorAll('[data-i18n]');
      translatableElements.forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });

      // Update active lightbox if open
      if (lightbox && lightbox.classList.contains('active')) {
        updateLightboxContent();
      }
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
      // Fallback: reveal immediately
      revealElements.forEach((el) => el.classList.add('is-revealed'));
    }

    // Safety fallback: reveal all after 1.2s in case observer didn't trigger
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

    // --- Subtle 3D Card Tilt for Desktop ---
    const tiltCards = document.querySelectorAll('.photo-card, .moment-exhibit-card');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      tiltCards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const deltaX = (x - centerX) / centerX;
          const deltaY = (y - centerY) / centerY;
          
          const rotateX = (-deltaY * 3.5).toFixed(2);
          const rotateY = (deltaX * 3.5).toFixed(2);
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
