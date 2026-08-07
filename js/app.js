// River House Web Portal Application Logic

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  let activePoiId = 'poi-ebro-kayak';

  // DOM Element References
  const cardsGrid = document.getElementById('cards-grid');
  const langBtns = document.querySelectorAll('.lang-btn');
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');

  // Modal References
  const poiHubModal = document.getElementById('poi-hub-modal');
  const poiHubClose = document.getElementById('poi-hub-close');

  const emergencyModal = document.getElementById('emergency-modal');
  const emergencyModalClose = document.getElementById('emergency-modal-close');
  const btnCloseEmergency = document.getElementById('btn-close-emergency');

  const recordsModal = document.getElementById('records-modal');
  const recordsModalClose = document.getElementById('records-modal-close');
  const btnOpenRecords = document.getElementById('btn-open-records');
  let activeRecordId = 'cat-1';

  const weatherModal = document.getElementById('weather-modal');
  const weatherModalClose = document.getElementById('weather-modal-close');
  const btnOpenWeather = document.getElementById('btn-open-weather');

  const villaModal = document.getElementById('villa-modal');
  const villaModalClose = document.getElementById('villa-modal-close');
  const villaCarouselPrev = document.getElementById('villa-carousel-prev');
  const villaCarouselNext = document.getElementById('villa-carousel-next');
  const villaCarouselImage = document.getElementById('villa-carousel-image');
  const villaCarouselCounter = document.getElementById('villa-carousel-counter');
  const villaCarouselText = document.getElementById('villa-carousel-text');

  const villaCarouselSlides = [
    { src: 'assets/house/house.png', alt: 'River House exterior' },
    { src: 'assets/house/house2.png', alt: 'River House villa' },
    { src: 'assets/house/house3.png', alt: 'River House view' },
    { src: 'assets/house/riverview.png', alt: 'River view from River House' },
    { src: 'assets/house/pool.png', alt: 'Private pool at River House' }
  ];
  let villaCarouselIndex = 0;

  let weatherChartInstance = null;

  // Initialize App
  initLanguage();
  initQRCodes();
  renderUI();
  setupEventListeners();
  initWeather();

  // Language Setup
  function initLanguage() {
    const savedLang = localStorage.getItem('riverhouse_lang');
    if (savedLang && PORTAL_DATA.translations[savedLang]) {
      currentLang = savedLang;
    }
  }

  function setLanguage(lang) {
    if (!PORTAL_DATA.translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('riverhouse_lang', lang);

    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    renderUI();
  }

  // Render UI Components
  function renderUI() {
    const t = PORTAL_DATA.translations[currentLang];

    // Static Strings
    document.getElementById('hero-title').innerText = t.heroTagline;
    document.getElementById('hero-subtitle').innerText = t.heroSubtitle;
    document.getElementById('btn-hero-official-text').innerText = t.officialSiteBtn;
    document.getElementById('btn-hero-whatsapp-text').innerText = t.quickWhatsapp;

    document.getElementById('lbl-weather-title').innerText = t.weatherTitle;
    document.getElementById('live-condition').innerText = t.weatherCondition;
    document.getElementById('lbl-record-title').innerText = t.recordCatchTitle;
    document.getElementById('lbl-record-desc').innerText = t.recordCatchDesc;

    document.getElementById('lbl-hub-dist').innerText = t.distance;
    document.getElementById('lbl-hub-dur').innerText = t.duration;
    document.getElementById('lbl-hub-rec').innerText = t.recommended;
    document.getElementById('lbl-daves-tip-title').innerText = t.davesTipLabel;
    document.getElementById('lbl-hub-map-btn').innerText = t.directionsBtn;
    document.getElementById('qr-subtitle').innerText = t.qrGeneratorSubtitle;
    document.getElementById('btn-print-qr-text').innerText = t.printQrBtn;
    document.getElementById('footer-text').innerText = t.footerRights;

    const emTitle = document.getElementById('lbl-emergency-modal-title');
    if (emTitle) emTitle.innerHTML = `<i class="fa-solid fa-hospital-user" aria-hidden="true" style="color: var(--accent-gold); margin-right: 8px;"></i> ${t.emergencyTitle}`;
    const emClose = document.getElementById('btn-close-emergency-text');
    if (emClose) emClose.innerText = t.modalClose;
    document.getElementById('poi-modal-title-text').innerText = t.poiModalTitle;
    document.getElementById('poi-modal-subtitle').innerText = t.poiModalSubtitle;
    document.getElementById('lbl-emergency-subtitle').innerText = t.directorySubtitle;
    document.getElementById('records-modal-title-text').innerText = t.recordsModalTitle;
    document.getElementById('annual-reports-title').innerText = t.annualReports;
    document.getElementById('weather-modal-title-text').innerText = t.weatherModalTitle;
    document.getElementById('villa-modal-title').innerHTML = `<i class="fa-solid fa-house" aria-hidden="true"></i> ${t.villaModalTitle}`;
    document.getElementById('villa-modal-subtitle').innerText = t.villaModalSubtitle;
    document.getElementById('weather-condition-label').innerText = t.condition;
    document.getElementById('weather-wind-label').innerText = t.wind;
    document.getElementById('weather-humidity-label').innerText = t.humidity;
    document.getElementById('weather-forecast-title').innerText = t.forecast;
    const directoryHeadings = [
      ['.directory-accordion-item--medical .cat-title-text', t.directoryMedical],
      ['.directory-accordion-item--emergency .cat-title-text', t.directoryEmergency],
      ['.directory-accordion-item--supermarkets .cat-title-text', t.directorySupermarkets],
      ['.directory-accordion-item--restaurants .cat-title-text', t.directoryRestaurants]
    ];
    directoryHeadings.forEach(([selector, text]) => {
      const heading = document.querySelector(selector);
      const textNode = [...heading.childNodes].find(node => node.nodeType === Node.TEXT_NODE);
      if (textNode) textNode.nodeValue = ` ${text}`;
    });
    document.getElementById('local-festivities-heading').innerText = t.directoryFestivities;
    document.getElementById('local-festivities-title').innerText = t.festivitiesTitle;
    document.getElementById('local-festivities-detail').innerText = t.festivitiesDetail;
    localizeTownEvents();
    localizeDirectoryDescriptions();
    document.querySelectorAll('.modal-close-btn').forEach(button => button.setAttribute('aria-label', t.modalClose));
    document.querySelectorAll('.nav-btn--walk').forEach(button => {
      const duration = button.textContent.match(/\([^)]+\)/)?.[0] || '';
      button.lastChild.nodeValue = ` ${t.walk} ${duration}`;
      button.title = `${t.walk} from River House`;
    });
    document.querySelectorAll('.nav-btn--drive').forEach(button => {
      const duration = button.textContent.match(/\([^)]+\)/)?.[0] || '';
      button.lastChild.nodeValue = ` ${t.drive} ${duration}`;
      button.title = `${t.drive} from River House`;
    });
    renderVillaCarouselSlide(villaCarouselIndex);


    renderCards();
    renderPoiSelectorList();
    renderRecordsList();
    renderAnnualReports();
  }

  function localizeDirectoryDescriptions() {
    const translations = {
      en: {
        medical: [
          'Tel: <a href="tel:+34977401818">+34 977 40 18 18</a> • Carrer Major, 11 (Town Center)',
          'Tel: <a href="tel:+34977401551">+34 977 40 15 51</a> • 24h Emergency Ward (Across the Ebro bridge)',
          'Tel: <a href="tel:+34977400332">+34 977 40 03 32</a> • Carrer Major 2 (Town Center)'
        ],
        emergency: [
          'Call: <a href="tel:112">112</a> or <a href="tel:061">061</a> (Immediate emergency response)',
          'Emergency: <a href="tel:112">112</a> • Local Station: <a href="tel:+34977400012">+34 977 40 00 12</a>',
          'Call: <a href="tel:112">112</a> or <a href="tel:085">085</a>'
        ],
        supermarkets: [
          'Large supermarket • Fresh fish, bakery, meats &amp; full groceries',
          'Quality local meats, cold cuts, prepared meals &amp; groceries (Across the bridge)',
          'Large regional hypermarket with fresh local Catalan produce &amp; fish counter in town',
          'Convenient local supermarket for daily groceries &amp; fresh daily bread'
        ],
        restaurants: [
          '★ Local Favorite! Great tapas, daily lunch menus &amp; cold beers right in town.',
          'Quality grilled meats, traditional rice dishes &amp; Catalan tapas right in Móra la Nova.',
          'Great local daily lunches, grilled meats &amp; friendly neighborhood atmosphere.',
          'Popular local spot serving delicious tapas, hot sandwiches &amp; daily dishes.'
        ]
      },
      ca: {
        medical: [
          'Tel.: <a href="tel:+34977401818">+34 977 40 18 18</a> • Carrer Major, 11 (centre del poble)',
          "Tel.: <a href=\"tel:+34977401551\">+34 977 40 15 51</a> • Urgències 24 h (a l'altra banda del pont de l’Ebre)",
          'Tel.: <a href="tel:+34977400332">+34 977 40 03 32</a> • Carrer Major, 2 (centre del poble)'
        ],
        emergency: [
          'Truca al <a href="tel:112">112</a> o al <a href="tel:061">061</a> (resposta d’emergència immediata)',
          'Emergències: <a href="tel:112">112</a> • Comissaria local: <a href="tel:+34977400012">+34 977 40 00 12</a>',
          'Truca al <a href="tel:112">112</a> o al <a href="tel:085">085</a>'
        ],
        supermarkets: [
          'Supermercat gran • Peix fresc, fleca, carn i queviures',
          'Carn local de qualitat, embotits, plats preparats i queviures (a l’altra banda del pont)',
          'Hipermercat regional amb producte local català fresc i peixateria al poble',
          'Supermercat local pràctic per a la compra diària i pa fresc cada dia'
        ],
        restaurants: [
          '★ Favorit local! Bones tapes, menús de migdia i cervesa freda al poble.',
          'Carn a la brasa de qualitat, arrossos tradicionals i tapes catalanes a Móra la Nova.',
          'Bons dinars de menú, carn a la brasa i un ambient de barri acollidor.',
          'Lloc local popular amb tapes delicioses, entrepans calents i plats del dia.'
        ]
      },
      es: {
        medical: [
          'Tel.: <a href="tel:+34977401818">+34 977 40 18 18</a> • Carrer Major, 11 (centro del pueblo)',
          'Tel.: <a href="tel:+34977401551">+34 977 40 15 51</a> • Urgencias 24 h (al otro lado del puente del Ebro)',
          'Tel.: <a href="tel:+34977400332">+34 977 40 03 32</a> • Carrer Major, 2 (centro del pueblo)'
        ],
        emergency: [
          'Llama al <a href="tel:112">112</a> o al <a href="tel:061">061</a> (respuesta de emergencia inmediata)',
          'Emergencias: <a href="tel:112">112</a> • Comisaría local: <a href="tel:+34977400012">+34 977 40 00 12</a>',
          'Llama al <a href="tel:112">112</a> o al <a href="tel:085">085</a>'
        ],
        supermarkets: [
          'Supermercado grande • Pescado fresco, panadería, carne y comestibles',
          'Carnes locales de calidad, embutidos, platos preparados y comestibles (al otro lado del puente)',
          'Hipermercado regional con productos catalanes frescos y pescadería en el pueblo',
          'Supermercado local práctico para la compra diaria y pan fresco cada día'
        ],
        restaurants: [
          '★ ¡Favorito local! Buenas tapas, menús de mediodía y cerveza fría en el pueblo.',
          'Carnes a la parrilla de calidad, arroces tradicionales y tapas catalanas en Móra la Nova.',
          'Buenos menús diarios, carnes a la parrilla y un ambiente de barrio acogedor.',
          'Popular local con deliciosas tapas, bocadillos calientes y platos del día.'
        ]
      }
    };

    const localized = translations[currentLang];
    if (!localized) return;
    Object.entries(localized).forEach(([section, descriptions]) => {
      document.querySelectorAll(`.directory-accordion-item--${section} .dir-item-info > p`).forEach((item, index) => {
        item.innerHTML = descriptions[index];
      });
    });
  }

  function localizeTownEvents() {
    const events = {
      en: {
        tivissa: ['Tivissa Festa Major de Sant Jaume 2026', 'Ten days of music, the traditional Dansa de Tivissa, correfoc, concerts and family events.'],
        garcia: ['Garcia Festa Major 2026', 'Local festivities with music, the Fira dels Sentits, a correfoc, family activities and the traditional river kayak descent.'],
        'mora-ebre': ['Móra d’Ebre Festa Major 2026', 'A ten-day celebration with concerts, correfoc, the Festa del Riu and a grand fireworks display.'],
        fira: ['Fira Agrícola, Ramadera i Industrial — Móra la Nova', 'A major October fair with agriculture, livestock, machinery, trade stands and a fairground for all ages.']
      },
      ca: {
        tivissa: ['Festa Major de Sant Jaume de Tivissa 2026', 'Deu dies de música, la tradicional Dansa de Tivissa, correfoc, concerts i activitats familiars.'],
        garcia: ['Festa Major de Garcia 2026', 'Festes locals amb música, la Fira dels Sentits, correfoc, activitats familiars i la tradicional baixada en caiac pel riu.'],
        'mora-ebre': ['Festa Major de Móra d’Ebre 2026', 'Deu dies de celebració amb concerts, correfoc, la Festa del Riu i un gran castell de focs artificials.'],
        fira: ['Fira Agrícola, Ramadera i Industrial — Móra la Nova', 'Una gran fira d’octubre amb agricultura, ramaderia, maquinària, expositors comercials i atraccions per a totes les edats.']
      },
      es: {
        tivissa: ['Fiesta Mayor de Sant Jaume de Tivissa 2026', 'Diez días de música, la tradicional Dansa de Tivissa, correfoc, conciertos y actividades familiares.'],
        garcia: ['Fiesta Mayor de Garcia 2026', 'Fiestas locales con música, la Fira dels Sentits, correfoc, actividades familiares y el tradicional descenso en kayak por el río.'],
        'mora-ebre': ['Fiesta Mayor de Móra d’Ebre 2026', 'Diez días de celebración con conciertos, correfoc, la Festa del Riu y un gran castillo de fuegos artificiales.'],
        fira: ['Feria Agrícola, Ganadera e Industrial — Móra la Nova', 'Una gran feria de octubre con agricultura, ganadería, maquinaria, puestos comerciales y atracciones para todas las edades.']
      }
    };
    const localized = events[currentLang];
    Object.entries(localized).forEach(([id, [title, detail]]) => {
      document.querySelector(`[data-town-event-title="${id}"]`).innerText = title;
      document.querySelector(`[data-town-event-detail="${id}"]`).innerText = detail;
    });
  }

  // Render Filtered Cards Grid
  function renderCards() {
    cardsGrid.innerHTML = '';

    PORTAL_DATA.cards.forEach(card => {
      const cardEl = document.createElement('article');
      cardEl.className = 'portal-card';

      const title = card.title[currentLang] || card.title.en;
      const desc = card.description[currentLang] || card.description.en;
      const btnText = card.linkText[currentLang] || card.linkText.en;

      let cardActionHTML = '';
      if (card.actionType === 'openPoiSelector') {
        cardActionHTML = `
          <button class="card-btn btn-open-poi-hub" data-id="${card.id}">
            <i class="fa-solid fa-layer-group"></i> ${btnText}
          </button>
        `;
      } else if (card.actionType === 'openEmergencyModal') {
        cardActionHTML = `
          <button class="card-btn btn-open-emergency" data-id="${card.id}">
            <i class="fa-solid fa-phone-volume"></i> ${btnText}
          </button>
        `;
      } else if (card.isModal) {
        cardActionHTML = `
          <button class="card-btn btn-open-villa" data-id="${card.id}">
            <i class="fa-solid fa-images"></i> ${btnText}
          </button>
        `;
      } else {
        cardActionHTML = `
          <a href="${card.link}" target="_blank" rel="noopener" class="card-btn">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> ${btnText}
          </a>
        `;
      }

      const imageHTML = `<div class="card-image-wrapper">
            <img src="${card.image}" alt="${title}" class="card-image" loading="lazy">
            <span class="card-badge ${card.badgeClass}">${card.badge}</span>
          </div>`;

      cardEl.innerHTML = `
        ${imageHTML}
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-description">${desc}</p>
          ${cardActionHTML}
        </div>
      `;

      cardsGrid.appendChild(cardEl);
    });

    attachDynamicListeners();
  }

  // Attach dynamic button event handlers
  function attachDynamicListeners() {
    document.querySelectorAll('.btn-open-poi-hub').forEach(btn => {
      btn.addEventListener('click', () => {
        poiHubModal.classList.add('active');
      });
    });

    document.querySelectorAll('.btn-open-emergency').forEach(btn => {
      btn.addEventListener('click', () => {
        emergencyModal.classList.add('active');
      });
    });

    document.querySelectorAll('.btn-open-villa').forEach(btn => {
      btn.addEventListener('click', () => {
        villaCarouselIndex = 0;
        renderVillaCarouselSlide(villaCarouselIndex);
        villaModal.classList.add('active');
      });
    });
  }

  // Render Catch Records — two-column leaderboard
  function renderRecordsList() {
    const catCol  = document.getElementById('records-cat-col');
    const carpCol = document.getElementById('records-carp-col');
    if (!catCol || !carpCol) return;

    const cats  = PORTAL_DATA.catchRecords.filter(r => r.species === 'Wels Catfish');
    const carps = PORTAL_DATA.catchRecords.filter(r => r.species === 'Common Carp');

    const t = PORTAL_DATA.translations[currentLang];
    catCol.innerHTML  = buildColumn(cats,  '#10b981', t.topCatfish);
    carpCol.innerHTML = buildColumn(carps, '#f59e0b', t.topCarp);
  }

  function buildColumn(records, accentColor, heading) {
    const medals = ['🥇', '🥈', '🥉'];
    let html = `<p class="records-col-header" style="color:${accentColor};">${heading}</p>`;

    records.forEach((rec, i) => {
      if (i === 0) {
        // #1 — real photo + name + weight + angler
        html += `
          <div class="record-gold-card">
            <img src="${rec.image}" alt="${rec.name}" loading="lazy">
            <div class="record-gold-info">
              <div class="medal-row">
                <span class="medal">🥇</span>
                <h4>${rec.name}</h4>
              </div>
              <p class="weight-tag">${rec.weight}</p>
              <p class="angler-tag">${PORTAL_DATA.translations[currentLang].angler}: <strong>${rec.angler}</strong></p>
            </div>
          </div>
        `;
      } else {
        // #2 & #3 — compact tier rows, weight only
        html += `
          <div class="record-tier-row">
            <span class="record-tier-medal">${medals[i]}</span>
            <div class="record-tier-info">
              <h5 class="tier-weight-value">${rec.weight}</h5>
            </div>
          </div>
        `;
      }
    });

    return html;
  }

  // Render Annual Catch Reports Accordion
  function renderAnnualReports() {
    const container = document.getElementById('reports-accordion-container');
    if (!container || !PORTAL_DATA.annualReports) return;
    
    container.innerHTML = '';
    
    PORTAL_DATA.annualReports.forEach((report, index) => {
      const item = document.createElement('div');
      item.className = 'annual-report-item';
      
      item.innerHTML = `
        <div class="annual-report-title">
          <span>${report.year} ${currentLang === 'ca' ? 'Informe de captures' : currentLang === 'es' ? 'Informe de capturas' : 'Catch Report'}</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="annual-report-content">
          ${localizeReportContent(report.content, report.year)}
        </div>
      `;
      
      // Individual accordion item toggle
      item.querySelector('.annual-report-title').addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all other items (optional, but clean for an accordion)
        document.querySelectorAll('.annual-report-item').forEach(el => el.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
      
      container.appendChild(item);
    });
  }

  function localizeReportContent(content, year) {
    if (currentLang === 'en') return content;

    if (currentLang === 'ca') {
      if (year === '2024') return 'Fes clic als enllaços de pesca de silurs o carpes al riu Ebre del web oficial per veure les captures més recents.';
      if (year === '2020') return 'Abans del confinament per la covid, Chris, Ramona i Angelina van tenir un parell de setmanes fantàstiques. El silur més gran va ser de 118 lb; també n’hi va haver de 114, 111 i 102 lb, i una carpa de 28 lb. Angelina va capturar-ne un de 52 lb. Ramona va capturar una carpa híbrida/deformada. Total: 56 silurs, 5 carpes i un barb.';
      return content
        .replace(/\(Still covid restrictions\.\)/g, '(Encara hi havia restriccions per la covid.)')
        .replace(/Over (\d+) Wels catfish over 50lb\./g, 'Més de $1 silurs Wels de més de 50 lb.')
        .replace(/(\d+) Carp (\d+)lb and over\./g, '$1 carpes de $2 lb o més.')
        .replace(/Including/g, 'Inclou')
        .replace(/Cats are driving out the carp and more people fishing for catfish/g, 'Els silurs estan desplaçant les carpes i cada vegada hi ha més gent pescant silurs')
        .replace(/More people fishing for the catfish last year/g, 'L’any passat hi va haver més gent pescant silurs');
    }

    if (year === '2024') return 'Haz clic en los enlaces de pesca de siluros o carpas en el río Ebro de la web oficial para ver las capturas más recientes.';
    if (year === '2020') return 'Antes del confinamiento por la covid, Chris, Ramona y Angelina tuvieron un par de semanas estupendas. El siluro más grande fue de 118 lb; también hubo capturas de 114, 111 y 102 lb, y una carpa de 28 lb. Angelina consiguió uno de 52 lb. Ramona capturó una carpa híbrida/deformada. Total: 56 siluros, 5 carpas y un barbo.';
    return content
      .replace(/\(Still covid restrictions\.\)/g, '(Aún había restricciones por la covid.)')
      .replace(/Over (\d+) Wels catfish over 50lb\./g, 'Más de $1 siluros Wels de más de 50 lb.')
      .replace(/(\d+) Carp (\d+)lb and over\./g, '$1 carpas de $2 lb o más.')
      .replace(/Including/g, 'Incluye')
      .replace(/Cats are driving out the carp and more people fishing for catfish/g, 'Los siluros están desplazando a las carpas y cada vez hay más gente pescando siluros')
      .replace(/More people fishing for the catfish last year/g, 'El año pasado hubo más gente pescando siluros');
  }

  // Render POI List Selector inside POI Explorer Hub
  function renderPoiSelectorList() {
    const selectorContainer = document.getElementById('poi-selector-list');
    if (!selectorContainer) return;

    selectorContainer.innerHTML = '';

    PORTAL_DATA.poisList.filter(poi => !poi.hidden).forEach(poi => {
      const itemEl = document.createElement('div');
      itemEl.className = `poi-item-card ${poi.id === activePoiId ? 'active' : ''}`;
      itemEl.dataset.id = poi.id;

      const title = poi.title[currentLang] || poi.title.en;

      itemEl.innerHTML = `
        <img src="${poi.image}" class="poi-item-thumb" alt="${title}">
        <div>
          <h5 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); line-height: 1.25;">${title}</h5>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 3px;">${localizePoiCategory(poi.category)}</p>
        </div>
      `;

      itemEl.addEventListener('click', () => {
        activePoiId = poi.id;
        document.querySelectorAll('.poi-item-card').forEach(c => c.classList.remove('active'));
        itemEl.classList.add('active');
        updateActivePoiDetail(poi);
      });

      selectorContainer.appendChild(itemEl);
    });

    // Default select active POI
    const visiblePois = PORTAL_DATA.poisList.filter(poi => !poi.hidden);
    const defaultPoi = visiblePois.find(p => p.id === activePoiId) || visiblePois[0];
    if (defaultPoi) updateActivePoiDetail(defaultPoi);
  }

  // Weather Hub API & Chart Logic
  async function initWeather() {
    // 1. Tick local time in Móra la Nova (Europe/Madrid)
    function updateTime() {
      const timeStr = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Madrid',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      }).format(new Date());
      const el = document.getElementById('weather-local-time');
      if (el) el.innerText = `${PORTAL_DATA.translations[currentLang].localTime}: ${timeStr}`;
    }
    updateTime();
    setInterval(updateTime, 1000);

    // 2. Fetch Open-Meteo Data for Móra la Nova
    try {
      const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.09&longitude=0.65&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FMadrid');
      const data = await res.json();
      
      const current = data.current;
      const daily = data.daily;

      // Map WMO code to condition text
      const wmoMap = {
        0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
        45: 'Fog', 48: 'Depositing rime fog', 51: 'Light drizzle', 53: 'Moderate drizzle',
        55: 'Dense drizzle', 61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
        71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow', 77: 'Snow grains',
        80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
        95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail'
      };

      const condition = wmoMap[current.weather_code] || 'Unknown';
      const temp = Math.round(current.temperature_2m);

      // Update Widget
      document.getElementById('live-temp').innerText = temp;
      document.getElementById('live-condition').innerText = condition;

      // Update Modal Current
      document.getElementById('current-temp').innerText = `${temp}°C`;
      document.getElementById('current-condition').innerText = condition;
      document.getElementById('current-wind').innerText = `${current.wind_speed_10m} km/h`;
      document.getElementById('current-humidity').innerText = `${current.relative_humidity_2m}%`;

      // Update icon based on condition loosely
      const iconEl = document.getElementById('weather-icon');
      if (iconEl) {
        if (current.weather_code <= 1) iconEl.className = 'fa-solid fa-sun';
        else if (current.weather_code <= 3) iconEl.className = 'fa-solid fa-cloud-sun';
        else if (current.weather_code < 60) iconEl.className = 'fa-solid fa-smog';
        else if (current.weather_code < 70) iconEl.className = 'fa-solid fa-cloud-rain';
        else if (current.weather_code < 80) iconEl.className = 'fa-solid fa-snowflake';
        else if (current.weather_code < 95) iconEl.className = 'fa-solid fa-cloud-showers-heavy';
        else iconEl.className = 'fa-solid fa-bolt';
      }
      
      const widgetIcon = document.getElementById('weather-widget-icon');
      if (widgetIcon && iconEl) {
         widgetIcon.className = iconEl.className;
      }

      // 3. Render Chart.js
      renderWeatherChart(daily.time, daily.temperature_2m_max, daily.temperature_2m_min);
    } catch (err) {
      console.error('Weather fetch failed', err);
      document.getElementById('live-condition').innerText = 'Data unavailable';
    }
  }

  function renderWeatherChart(dates, maxTemps, minTemps) {
    const ctx = document.getElementById('weatherChart');
    if (!ctx) return;

    // Format dates to short weekday
    const labels = dates.map(d => new Date(d).toLocaleDateString('en-GB', { weekday: 'short' }));

    if (weatherChartInstance) {
      weatherChartInstance.destroy();
    }

    weatherChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: PORTAL_DATA.translations[currentLang].maxTemp,
            data: maxTemps,
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            borderWidth: 2,
            pointBackgroundColor: '#f59e0b',
            fill: true,
            tension: 0.4
          },
          {
            label: PORTAL_DATA.translations[currentLang].minTemp,
            data: minTemps,
            borderColor: '#0ea5e9',
            backgroundColor: 'rgba(14, 165, 233, 0.1)',
            borderWidth: 2,
            pointBackgroundColor: '#0ea5e9',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#cbd5e1', font: { family: 'Inter' } }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#fff',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8' }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8' }
          }
        },
        interaction: { mode: 'nearest', axis: 'x', intersect: false }
      }
    });
  }

  // Update right side POI detail view with Dave's Local Tip
  function updateActivePoiDetail(poi) {
    document.getElementById('poi-detail-img').src = poi.image;
    document.getElementById('poi-detail-category-badge').innerText = localizePoiCategory(poi.category);
    document.getElementById('poi-detail-title').innerText = poi.title[currentLang] || poi.title.en;
    document.getElementById('poi-detail-desc').innerText = poi.description[currentLang] || poi.description.en;
    document.getElementById('poi-detail-tip-text').innerText = poi.tip || "Enjoy exploring this local spot!";
    document.getElementById('poi-detail-dist').innerText = poi.distance;
    document.getElementById('poi-detail-dur').innerText = poi.duration;
    document.getElementById('poi-detail-rec').innerText = poi.recommended;
    document.getElementById('poi-detail-map-btn').href = poi.mapUrl;
  }

  function localizePoiCategory(category) {
    const categories = {
      ca: {
        'River Activities': 'Activitats al riu', 'Local Heritage': 'Patrimoni local',
        'History & Landmarks': 'Història i monuments', 'Natural Wonder': 'Meravella natural',
        'Historic Town': 'Poble històric', 'Cycling & Hiking': 'Ciclisme i senderisme',
        'Gastronomy & Wine': 'Gastronomia i vi', 'Nature & Reserve': 'Natura i reserva',
        'Local Culture & Events': 'Cultura local i esdeveniments'
      },
      es: {
        'River Activities': 'Actividades en el río', 'Local Heritage': 'Patrimonio local',
        'History & Landmarks': 'Historia y monumentos', 'Natural Wonder': 'Maravilla natural',
        'Historic Town': 'Casco histórico', 'Cycling & Hiking': 'Ciclismo y senderismo',
        'Gastronomy & Wine': 'Gastronomía y vino', 'Nature & Reserve': 'Naturaleza y reserva',
        'Local Culture & Events': 'Cultura local y eventos'
      }
    };
    return categories[currentLang]?.[category] || category;
  }

  // Event Handlers & Interactions
  function setupEventListeners() {
    // Language Buttons
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });


    // Records widget open
    btnOpenRecords.addEventListener('click', () => {
      recordsModal.classList.add('active');
    });
    recordsModalClose.addEventListener('click', () => {
      recordsModal.classList.remove('active');
      // Reset reports accordion state on close
      document.getElementById('reports-accordion-wrapper').classList.remove('open');
      document.getElementById('btn-toggle-reports').classList.remove('open');
    });
    recordsModal.addEventListener('click', (e) => {
      if (e.target === recordsModal) recordsModal.classList.remove('active');
    });

    // Weather widget open
    if (btnOpenWeather) {
      btnOpenWeather.addEventListener('click', () => {
        weatherModal.classList.add('active');
      });
    }
    if (weatherModalClose) {
      weatherModalClose.addEventListener('click', () => {
        weatherModal.classList.remove('active');
      });
    }
    if (weatherModal) {
      weatherModal.addEventListener('click', (e) => {
        if (e.target === weatherModal) weatherModal.classList.remove('active');
      });
    }

    if (villaModalClose) {
      villaModalClose.addEventListener('click', () => villaModal.classList.remove('active'));
    }
    if (villaModal) {
      villaModal.addEventListener('click', (e) => {
        if (e.target === villaModal) villaModal.classList.remove('active');
      });
    }
    if (villaCarouselPrev) {
      villaCarouselPrev.addEventListener('click', () => {
        villaCarouselIndex = (villaCarouselIndex - 1 + villaCarouselSlides.length) % villaCarouselSlides.length;
        renderVillaCarouselSlide(villaCarouselIndex);
      });
    }
    if (villaCarouselNext) {
      villaCarouselNext.addEventListener('click', () => {
        villaCarouselIndex = (villaCarouselIndex + 1) % villaCarouselSlides.length;
        renderVillaCarouselSlide(villaCarouselIndex);
      });
    }

    // Annual Reports Main Toggle
    document.getElementById('btn-toggle-reports').addEventListener('click', (e) => {
      const header = e.currentTarget;
      const wrapper = document.getElementById('reports-accordion-wrapper');
      header.classList.toggle('open');
      wrapper.classList.toggle('open');
    });

    // POI Hub Modal Close
    poiHubClose.addEventListener('click', () => {
      poiHubModal.classList.remove('active');
    });
    poiHubModal.addEventListener('click', (e) => {
      if (e.target === poiHubModal) poiHubModal.classList.remove('active');
    });

    // Emergency Modal Close
    if (emergencyModalClose) {
      emergencyModalClose.addEventListener('click', () => {
        emergencyModal.classList.remove('active');
      });
    }
    if (btnCloseEmergency) {
      btnCloseEmergency.addEventListener('click', () => {
        emergencyModal.classList.remove('active');
      });
    }
    if (emergencyModal) {
      emergencyModal.addEventListener('click', (e) => {
        if (e.target === emergencyModal) emergencyModal.classList.remove('active');
      });
    }

    // Directory Modal Foldable Accordion Header Toggles
    document.querySelectorAll('.directory-cat-header').forEach(header => {
      header.addEventListener('click', () => {
        const accordionItem = header.closest('.directory-accordion-item');
        if (accordionItem) {
          accordionItem.classList.toggle('active');
          const isExpanded = accordionItem.classList.contains('active');
          header.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        }
      });
    });

    // Print QR Stand Button
    const printBtn = document.getElementById('btn-print-qr');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  function renderVillaCarouselSlide(index) {
    if (!villaCarouselImage || !villaCarouselCounter || !villaCarouselText) return;
    const slide = villaCarouselSlides[index];
    if (!slide) return;
    villaCarouselImage.src = slide.src;
    villaCarouselImage.alt = slide.alt;
    villaCarouselCounter.innerText = `${index + 1} / ${villaCarouselSlides.length}`;
    villaCarouselText.innerText = slide.alt;
  }

  // Central Modal Helper for locking body scroll when modal is open
  function syncModalScroll() {
    const hasActiveModal = document.querySelector('.modal-overlay.active') !== null;
    document.body.classList.toggle('modal-open', hasActiveModal);
  }

  // Observe all modal overlays for class changes to handle body scroll locking automatically
  const modalObserver = new MutationObserver(() => syncModalScroll());
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modalObserver.observe(modal, { attributes: true, attributeFilter: ['class'] });
  });

  // QRCode Generator Setup
  function initQRCodes() {
    const qrContainer = document.getElementById('qrcode');
    if (!qrContainer) return;
    qrContainer.innerHTML = '';
    
    const qrUrl = window.location.href.startsWith('http') ? window.location.href : PORTAL_DATA.business.ogWebsite;

    new QRCode(qrContainer, {
      text: qrUrl,
      width: 180,
      height: 180,
      colorDark: '#0f172a',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  }
});
