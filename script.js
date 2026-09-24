/**
 * SOFIA ZHUKOVA — 15TH BIRTHDAY
 * Cinematic Digital Birthday Gift & Personal Letter
 * Pure Vanilla JavaScript • Zero Dependencies • Cloudflare Ready
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. INTERNATIONALIZATION (i18n) DICTIONARY
     ========================================================================== */
  const translations = {
    ru: {
      documentTitle: 'Sofia Zhukova — A Gift For You',
      'opening.intro': 'Маленький подарок для тебя.',
      'opening.button': 'Открыть сюрприз →',
      'hero.for_you': 'ДЛЯ ТЕБЯ',
      'hero.greeting': 'С Днём Рождения',
      'hero.name': 'София',
      'hero.scroll': 'Листай дальше ↓',
      'for_you.heading': 'Для тебя',
      'for_you.paragraph1': 'Сегодня твой день.<br>И мне просто хотелось сделать для тебя что-то немного особенное.',
      'for_you.paragraph2': 'Пусть этот новый год твоей жизни принесёт тебе много улыбок, добрых людей, красивых моментов и причин радоваться каждому новому дню.',
      'gallery.view': 'Увеличить ↗',
      'captions.moment1': 'Один из тех моментов.',
      'captions.moment2': 'Просто хороший день.',
      'captions.moment3': 'Некоторые моменты остаются.',
      'heartbeat.sign': 'Просто маленький знак.',
      'letter.for_sofia': 'Для Софии',
      'letter.heading': 'Письмо от меня',
      'letter.teaser': 'Несколько искренних слов, написанных специально для тебя.',
      'letter.open_btn': 'Открыть письмо',
      'letter.date': 'Для Софии · В твой день',
      'letter.salutation': 'Привет, София.',
      'letter.p1': 'Спасибо тебе за то, что когда-то была частью моей жизни, даже несмотря на то, что нам так и не удалось встретиться вживую.',
      'letter.p2': 'Как ты там? Всё ли у тебя хорошо? Ты хорошо кушаешь? :)<br>А как твои занятия плаванием? Наверное, ты часто занимаешь призовые места, да?',
      'letter.p3': 'Я хотел сказать тебе ещё кое-что.',
      'letter.p4': 'Прости меня за то, что иногда я был эгоистичным и постоянно хотел первым поставить точку и попрощаться. Я сам не знаю, что тогда со мной происходило.',
      'letter.p5': 'Если честно, какая-то часть меня всё ещё хотела бы иногда общаться с тобой. Не знаю, случится ли это когда-нибудь снова, но мне просто хотелось сказать тебе об этом.',
      'letter.p6': 'Спасибо, что открыла это маленькое письмо.',
      'letter.closing': 'С теплом,',
      'letter.author': 'Архан',
      'memory.heading': 'ЕСЛИ БЫ ЭТО БЫЛО ВОСПОМИНАНИЕМ...',
      'memory.quote': 'Думаю, это воспоминание я бы сохранил.',
      'quiet_pause.quote': 'Некоторые вещи просто хочется сказать однажды.',
      'moments.title': 'Моменты',
      'moments.caption1': 'Тёплые воспоминания.',
      'moments.caption2': 'Хорошие дни.',
      'moments.caption3': 'Моменты, которые хочется сохранить.',
      'fifteen.name': 'София Жукова',
      'fifteen.triplet': 'Новый год.<br>Новые моменты.<br>Новые мечты.',
      'note.tag': 'МАЛЕНЬКАЯ ЗАПИСКА',
      'note.open_btn': 'Открыть',
      'note.content': 'Без громких слов.<br><br>Просто... я рад, что когда-то ты была частью моей истории.',
      'surprise.eyebrow': 'И ещё кое-что...',
      'surprise.button': 'Открыть ✦',
      'surprise.title': 'С 15-летием, София. ✨',
      'surprise.message': 'Пусть впереди будет много дней,<br>которые захочется запомнить.',
      'surprise.final_wish': 'Для тебя — с теплом.',
      'stay.tag': 'Для моментов, которые остаются',
      'stay.main_p1': 'Некоторые люди тихо становятся частью нашей истории.',
      'stay.main_p2': 'Не потому, что остаются навсегда,<br>а потому, что однажды<br>делают что-то немного более значимым.',
      'stay.secondary': 'Может быть, этого достаточно.',
      'stay.button': 'Ещё кое-что ✦',
      'stay.overlay_p1': 'Пусть жизнь подарит тебе много маленьких поводов для улыбки.',
      'stay.overlay_p2': 'И когда-нибудь, оглядываясь назад,<br>пусть некоторые моменты вспоминаются тебе с теплом.',
      'stay.hidden_note': 'Некоторые вещи лучше оставить красивым воспоминанием.',
      'space.title': 'Маленькое место для тебя',
      'space.subtitle': 'Просто маленькое место, где можно что-то оставить.',
      'space.open_btn': 'Оставить что-нибудь ✦',
      'space.panel_intro': 'Может быть, мысль.<br>Может быть, несколько слов.<br>А может, ничего.',
      'space.placeholder': 'Напиши что-нибудь...',
      'space.submit_btn': 'Оставить здесь ✦',
      'space.submitted': 'Оставлено здесь. ✦',
      'space.secret_found': 'Ты нашла тихую часть. ✦',
      'final.title': 'С Днём Рождения ✨',
      'final.wish': 'Пусть твои 15 будут наполнены красивыми моментами, искренними улыбками и маленькими радостями, которые делают тебя счастливой.',
      'final.closing_whisper': 'Некоторые моменты стоит сохранить.',
      'footer.wishes': '15-летие',
      'lightbox.hint': 'Используйте стрелки ← → или свайп для навигации'
    },
    en: {
      documentTitle: 'Sofia Zhukova — A Gift For You',
      'opening.intro': 'A little gift for you.',
      'opening.button': 'Open the surprise →',
      'hero.for_you': 'FOR YOU',
      'hero.greeting': 'Happy Birthday',
      'hero.name': 'Sofia',
      'hero.scroll': 'Scroll down ↓',
      'for_you.heading': 'For You',
      'for_you.paragraph1': 'Today is your day.<br>And I simply wanted to make something a little special for you.',
      'for_you.paragraph2': 'May this new year of your life bring you many smiles, wonderful people, beautiful moments, and reasons to smile every single day.',
      'gallery.view': 'Expand ↗',
      'captions.moment1': 'One of those moments.',
      'captions.moment2': 'Just a good day.',
      'captions.moment3': 'Some moments stay.',
      'heartbeat.sign': 'Just a little sign.',
      'letter.for_sofia': 'For Sofia',
      'letter.heading': 'A Letter From Me',
      'letter.teaser': 'A few heartfelt words written just for you.',
      'letter.open_btn': 'Open the letter',
      'letter.date': 'For Sofia · On your special day',
      'letter.salutation': 'Hi Sofia.',
      'letter.p1': 'Thank you for having been a part of my life, even though we never had the chance to meet in person.',
      'letter.p2': 'How have you been? Is everything going well with you? Are you eating well? :)<br>And how is your swimming going? You probably win medals all the time, don\'t you?',
      'letter.p3': 'There is something else I wanted to tell you.',
      'letter.p4': 'I\'m sorry for the times I was selfish and always wanted to be the one to end the conversation and say goodbye. Looking back, I honestly don\'t know what was going on with me.',
      'letter.p5': 'To be completely honest, a part of me still wishes we could talk from time to time. I don\'t know if that will ever happen again, but I simply wanted to let you know.',
      'letter.p6': 'Thank you for opening this little letter.',
      'letter.closing': 'Warmly,',
      'letter.author': 'Arkhan',
      'memory.heading': 'IF THIS WERE A MEMORY...',
      'memory.quote': 'I think I\'d keep this one.',
      'quiet_pause.quote': 'Some things are simply worth saying once.',
      'moments.title': 'Moments',
      'moments.caption1': 'Warm memories.',
      'moments.caption2': 'Good days.',
      'moments.caption3': 'Moments worth keeping.',
      'fifteen.name': 'Sofia Zhukova',
      'fifteen.triplet': 'A new year.<br>New moments.<br>New dreams.',
      'note.tag': 'A LITTLE NOTE',
      'note.open_btn': 'Open',
      'note.content': 'No big words.<br><br>Just... I\'m glad you were once part of my story.',
      'surprise.eyebrow': 'And one more thing...',
      'surprise.button': 'Open ✦',
      'surprise.title': 'Happy 15th Birthday, Sofia. ✨',
      'surprise.message': 'May there be many days ahead<br>that you will cherish and remember.',
      'surprise.final_wish': 'For you — with warmth.',
      'stay.tag': 'For the moments that stay',
      'stay.main_p1': 'Some people become part of our story quietly.',
      'stay.main_p2': 'Not because they stayed forever,<br>but because, for a moment,<br>they made something feel a little more meaningful.',
      'stay.secondary': 'Maybe that\'s enough.',
      'stay.button': 'One more thing ✦',
      'stay.overlay_p1': 'I hope life gives you many little reasons to smile.',
      'stay.overlay_p2': 'And when you look back someday,<br>I hope you\'ll remember some moments kindly.',
      'stay.hidden_note': 'Some things are better left as a beautiful memory.',
      'space.title': 'A Little Space For You',
      'space.subtitle': 'Just a small place to leave something behind.',
      'space.open_btn': 'Leave something here ✦',
      'space.panel_intro': 'Maybe a thought.<br>Maybe a few words.<br>Maybe nothing at all.',
      'space.placeholder': 'Write something...',
      'space.submit_btn': 'Leave it here ✦',
      'space.submitted': 'Left here. ✦',
      'space.secret_found': 'You found the quiet part. ✦',
      'final.title': 'Happy Birthday ✨',
      'final.wish': 'May your 15th be filled with beautiful moments, genuine smiles, and little things that make you happy.',
      'final.closing_whisper': 'Some moments are worth keeping.',
      'footer.wishes': '15th Birthday',
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
    
    // Letter Elements
    const letterClosed = document.getElementById('letter-closed');
    const letterOpenBtn = document.getElementById('letter-open-btn');
    const letterUnfolded = document.getElementById('letter-unfolded');
    const letterWrapper = document.getElementById('letter-wrapper');

    // Surprise Reveal Elements
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseInitial = document.getElementById('surprise-initial');
    const surpriseRevealed = document.getElementById('surprise-revealed');
    const surpriseCard = document.getElementById('surprise-card');

    // "For The Moments That Stay" Elements
    const stayTriggerBtn = document.getElementById('stay-trigger-btn');
    const stayOverlayCard = document.getElementById('stay-overlay-card');
    const stayOverlayClose = document.getElementById('stay-overlay-close');

    // "A Little Space For You" Elements
    const spaceOpenBtn = document.getElementById('space-open-btn');
    const spaceTriggerWrapper = document.getElementById('space-trigger-wrapper');
    const spacePanel = document.getElementById('space-panel');
    const spaceTextarea = document.getElementById('space-textarea');
    const spaceForm = document.getElementById('space-form');
    const spaceSubmitBtn = document.getElementById('space-submit-btn');
    const spaceSubmittedState = document.getElementById('space-submitted-state');
    const spaceSecretTrigger = document.getElementById('space-secret-trigger');
    const spaceSecretToast = document.getElementById('space-secret-toast');

    // Heartbeat Elements
    const heartbeatWidget = document.getElementById('heartbeat-widget');
    const heartbeatIcon = document.getElementById('heartbeat-icon');
    const heartbeatTooltip = document.getElementById('heartbeat-tooltip');
    let heartbeatTimer = null;

    // Note Card Elements
    const noteOpenBtn = document.getElementById('note-open-btn');
    const noteModal = document.getElementById('note-modal');
    const noteCloseBtn = document.getElementById('note-close-btn');
    const noteBackdrop = document.getElementById('note-backdrop');

    // Final Section Elements
    const finalSection = document.getElementById('final-photo');
    const finalWhisper = document.getElementById('final-whisper');
    const finalFadeToDark = document.getElementById('final-fade-to-dark');

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

    // --- Opening Screen Smooth Transition ---
    if (openingBtn && openingScreen) {
      openingBtn.addEventListener('click', () => {
        openingScreen.classList.add('is-opened');
        setTimeout(() => {
          openingScreen.style.display = 'none';
        }, 850);
      });
    }

    // --- Interactive Letter Unfolding Handler ---
    if (letterOpenBtn && letterClosed && letterUnfolded) {
      letterOpenBtn.addEventListener('click', () => {
        letterClosed.style.opacity = '0';
        letterClosed.style.transform = 'scale(0.96) translateY(-10px)';
        
        setTimeout(() => {
          letterClosed.style.display = 'none';
          letterUnfolded.style.display = 'block';
          letterUnfolded.style.opacity = '0';
          letterUnfolded.style.transform = 'translateY(24px) scale(0.98)';
          
          if (letterWrapper) letterWrapper.classList.add('is-unfolded-state');
          
          requestAnimationFrame(() => {
            letterUnfolded.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
            letterUnfolded.style.opacity = '1';
            letterUnfolded.style.transform = 'translateY(0) scale(1)';
          });
        }, 300);
      });
    }

    // --- Climax Surprise Reveal Handler ---
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

    // --- "For The Moments That Stay" Overlay Handlers ---
    if (stayTriggerBtn && stayOverlayCard) {
      function openStayOverlay() {
        stayOverlayCard.style.display = 'block';
        stayOverlayCard.style.opacity = '0';
        stayOverlayCard.style.transform = 'translateY(16px) scale(0.98)';
        stayTriggerBtn.setAttribute('aria-expanded', 'true');

        requestAnimationFrame(() => {
          stayOverlayCard.style.transition = 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
          stayOverlayCard.style.opacity = '1';
          stayOverlayCard.style.transform = 'translateY(0) scale(1)';
          if (stayOverlayClose) stayOverlayClose.focus();
        });
      }

      function closeStayOverlay() {
        stayOverlayCard.style.opacity = '0';
        stayOverlayCard.style.transform = 'translateY(12px) scale(0.98)';
        stayTriggerBtn.setAttribute('aria-expanded', 'false');

        setTimeout(() => {
          stayOverlayCard.style.display = 'none';
          stayTriggerBtn.focus();
        }, 400);
      }

      stayTriggerBtn.addEventListener('click', () => {
        if (stayOverlayCard.style.display === 'none' || stayOverlayCard.style.display === '') {
          openStayOverlay();
        } else {
          closeStayOverlay();
        }
      });

      if (stayOverlayClose) {
        stayOverlayClose.addEventListener('click', closeStayOverlay);
      }
    }

    // --- A Little Space For You Interactions ---
    if (spaceOpenBtn && spaceTriggerWrapper && spacePanel) {
      spaceOpenBtn.addEventListener('click', () => {
        spaceTriggerWrapper.style.opacity = '0';
        spaceTriggerWrapper.style.transform = 'scale(0.96)';
        
        setTimeout(() => {
          spaceTriggerWrapper.style.display = 'none';
          spacePanel.style.display = 'block';
          spacePanel.style.opacity = '0';
          spacePanel.style.transform = 'translateY(16px)';
          
          requestAnimationFrame(() => {
            spacePanel.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            spacePanel.style.opacity = '1';
            spacePanel.style.transform = 'translateY(0)';
            if (spaceTextarea) spaceTextarea.focus();
          });
        }, 250);
      });
    }

    if (spaceSubmitBtn && spaceForm && spaceSubmittedState) {
      spaceSubmitBtn.addEventListener('click', () => {
        const introP = document.querySelector('.space-panel-intro');
        if (introP) {
          introP.style.opacity = '0';
          introP.style.transform = 'translateY(-8px)';
        }
        spaceForm.style.opacity = '0';
        spaceForm.style.transform = 'translateY(-8px)';

        setTimeout(() => {
          if (introP) introP.style.display = 'none';
          spaceForm.style.display = 'none';
          spaceSubmittedState.style.display = 'block';
          spaceSubmittedState.style.opacity = '0';
          spaceSubmittedState.style.transform = 'scale(0.95)';

          requestAnimationFrame(() => {
            spaceSubmittedState.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
            spaceSubmittedState.style.opacity = '1';
            spaceSubmittedState.style.transform = 'scale(1)';
          });
        }, 300);
      });
    }

    // --- Secret Quiet Detail (Click ✦ 3 times) ---
    if (spaceSecretTrigger && spaceSecretToast) {
      let secretClicks = 0;
      let secretTimer = null;
      let toastHideTimer = null;

      function handleSecretTrigger() {
        secretClicks++;
        clearTimeout(secretTimer);
        secretTimer = setTimeout(() => {
          secretClicks = 0;
        }, 4000);

        if (secretClicks >= 3) {
          secretClicks = 0;
          clearTimeout(toastHideTimer);

          spaceSecretToast.style.display = 'block';
          spaceSecretToast.style.opacity = '0';
          spaceSecretToast.style.transform = 'translateY(8px)';

          requestAnimationFrame(() => {
            spaceSecretToast.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            spaceSecretToast.style.opacity = '1';
            spaceSecretToast.style.transform = 'translateY(0)';
          });

          toastHideTimer = setTimeout(() => {
            spaceSecretToast.style.opacity = '0';
            spaceSecretToast.style.transform = 'translateY(-8px)';
            setTimeout(() => {
              spaceSecretToast.style.display = 'none';
            }, 500);
          }, 3500);
        }
      }

      spaceSecretTrigger.addEventListener('click', handleSecretTrigger);
      spaceSecretTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSecretTrigger();
        }
      });
    }

    // --- Heartbeat Sign Interaction ---
    if (heartbeatWidget) {
      function triggerHeartbeatSign() {
        if (heartbeatIcon) heartbeatIcon.textContent = '♥';
        heartbeatWidget.classList.add('active');
        if (heartbeatTooltip) heartbeatTooltip.classList.add('is-visible');

        clearTimeout(heartbeatTimer);
        heartbeatTimer = setTimeout(() => {
          if (heartbeatTooltip) heartbeatTooltip.classList.remove('is-visible');
          if (heartbeatIcon) heartbeatIcon.textContent = '♡';
          heartbeatWidget.classList.remove('active');
        }, 3500);
      }

      heartbeatWidget.addEventListener('click', triggerHeartbeatSign);
      heartbeatWidget.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerHeartbeatSign();
        }
      });
    }

    // --- "A Little Note" Modal Interactions ---
    if (noteOpenBtn && noteModal) {
      function openNoteModal() {
        noteModal.classList.add('active');
        noteModal.setAttribute('aria-hidden', 'false');
        noteOpenBtn.setAttribute('aria-expanded', 'true');
        lastFocusedElement = document.activeElement;
        document.body.style.overflow = 'hidden';
        if (noteCloseBtn) noteCloseBtn.focus();
      }

      function closeNoteModal() {
        noteModal.classList.remove('active');
        noteModal.setAttribute('aria-hidden', 'true');
        noteOpenBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
          lastFocusedElement.focus();
        } else {
          noteOpenBtn.focus();
        }
      }

      noteOpenBtn.addEventListener('click', openNoteModal);
      if (noteCloseBtn) noteCloseBtn.addEventListener('click', closeNoteModal);
      if (noteBackdrop) noteBackdrop.addEventListener('click', closeNoteModal);
    }

    // --- Final Section Delayed Whisper & Fade to Dark Observer ---
    if (finalSection && (finalWhisper || finalFadeToDark)) {
      if ('IntersectionObserver' in window) {
        const finalObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.unobserve(entry.target);
              setTimeout(() => {
                if (finalWhisper) finalWhisper.classList.add('is-visible');
              }, 2000);
              setTimeout(() => {
                if (finalFadeToDark) finalFadeToDark.classList.add('is-dimmed');
              }, 3800);
            }
          });
        }, {
          threshold: 0.35
        });
        finalObserver.observe(finalSection);
      } else {
        if (finalWhisper) finalWhisper.classList.add('is-visible');
        if (finalFadeToDark) finalFadeToDark.classList.add('is-dimmed');
      }
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

      // Page Title
      if (translations[lang].documentTitle) {
        document.title = translations[lang].documentTitle;
      }

      // Update all translatable text elements
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

      // Update all placeholder elements
      const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
      placeholderElements.forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
          el.setAttribute('placeholder', translations[lang][key]);
        }
      });
    }

    if (btnRu) btnRu.addEventListener('click', () => setLanguage('ru'));
    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

    // Apply language on startup
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
      if (e.key === 'Escape') {
        if (lightbox && lightbox.classList.contains('active')) {
          closeLightbox();
        } else if (noteModal && noteModal.classList.contains('active')) {
          closeNoteModal();
        } else if (stayOverlayCard && stayOverlayCard.style.display !== 'none') {
          stayOverlayCard.style.display = 'none';
          if (stayTriggerBtn) stayTriggerBtn.setAttribute('aria-expanded', 'false');
        }
      } else if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
          showPrevPhoto();
        } else if (e.key === 'ArrowRight') {
          showNextPhoto();
        }
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

      const interactiveTargets = document.querySelectorAll('a, button, [role="button"], .photo-card, .moment-media');
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
