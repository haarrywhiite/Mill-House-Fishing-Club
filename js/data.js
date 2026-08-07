// Data Store for River House & Mill House Fishing Club Guest Portal
const PORTAL_DATA = {
  business: {
    name: "River House & Mill House Fishing Club",
    location: "Móra la Nova, Terres de l'Ebre, Catalonia, Spain",
    phone: "+34 6871 56179",
    phoneClean: "34687156179",
    email: "info@millhousefishingclub.co.uk",
    ogWebsite: "https://www.millhousefishingclub.co.uk/",
    instagram: "https://www.instagram.com/dave.carp.cat/",
    facebook: "https://www.facebook.com/TheMillhouse.fishing.club?locale=es_ES",
    coordinates: { lat: 41.1012, lng: 0.6508 }
  },

  translations: {
    en: {
      heroTagline: "Mill House Fishing Club",
      heroSubtitle: "Guided Catfishing and Carp Fishing on the River Ebro",
      officialSiteBtn: "Official Fishing Website",
      recordCatchesTitle: "Record Catches at the Villa",
      recordCatchesDesc: "Tap to see our top catfish & carp catches",
      quickWhatsapp: "Chat on WhatsApp",
      quickCall: "Call Us Now",
      searchPlaceholder: "Search attractions, fishing info, services...",
      filterAll: "All Links",
      filterWebsite: "Our Website",
      filterPois: "Explore POIs",
      filterSocials: "Social Links",
      filterGuest: "Local Services & Info",
      modalClose: "Close",
      directionsBtn: "Open in Google Maps",
      distance: "Distance",
      duration: "Duration",
      recommended: "Best For",
      davesTipLabel: "Dave's Local Tip",
      recordCatchTitle: "Club Record Catfish: 149 lbs!",
      recordCatchDesc: "Guided by Dave with 19+ years experience on the Ebro River.",
      qrGeneratorTitle: "Share or Save QR Code",
      qrGeneratorSubtitle: "Scan or print this QR code to quickly open the River House Portal anytime on your phone.",
      printQrBtn: "Print QR Code Stand",
      weatherTitle: "Móra la Nova Live Weather",
      weatherCondition: "Sunny & Mild",
      tempUnit: "°C",
      emergencyTitle: "Local Contact & Emergency",
      emergencyDoctor: "CAP Móra la Nova (Medical): +34 977 40 18 18",
      emergencyPolice: "Local Police (Guàrdia Urbana): 112 / +34 977 40 00 12",
      emergencyTaxi: "Móra Taxi Service: +34 609 36 21 44",
      supermarkets: "Supermarkets (BonÀrea, Mercadona): 15 min walk in town center",
      poiModalTitle: "Dave's Local POIs Guide",
      poiModalSubtitle: "Select an attraction below to view personal tips, details, and Google Maps directions",
      directorySubtitle: "Medical services, emergency numbers, shops & Dave's favorite local spots with walking and driving routes from River House",
      directoryMedical: "Medical & Healthcare",
      directoryEmergency: "Police, Fire & Emergency Numbers",
      directorySupermarkets: "Supermarkets & Food Shops",
      directoryRestaurants: "Restaurants & Local Bars",
      directoryFestivities: "Local Festivities & Dates",
      festivitiesTitle: "Móra la Nova Festa Major 2026",
      festivitiesDetail: "25 July – 3 August 2026. The closing fireworks display is on Monday 3 August, with music, family activities, food, parades and local celebrations throughout the festival.",
      recordsModalTitle: "Record Catches at the Villa",
      annualReports: "Annual Catch Reports",
      topCatfish: "🐟 Top Catfish Catches",
      topCarp: "🎣 Top Carp Catches",
      angler: "Angler",
      weatherModalTitle: "Móra la Nova Weather",
      villaModalTitle: "River House Villa & Private Pool",
      villaModalSubtitle: "A look around River House, its river views and private pool.",
      localTime: "Local Time",
      condition: "Condition",
      wind: "Wind",
      humidity: "Humidity",
      forecast: "7-Day Forecast",
      maxTemp: "Max Temp (°C)",
      minTemp: "Min Temp (°C)",
      walk: "Walk",
      drive: "Drive",
      footerRights: "River House Móra la Nova — Family run for guests & visitors."
    },
    ca: {
      heroTagline: "Benvinguts a River House Móra la Nova",
      heroSubtitle: "Dirigit per Dave i família. Pesca de silurs al riu Ebre, carpes, consells locals i relax.",
      officialSiteBtn: "Lloc Web Oficial de Pesca",
      quickWhatsapp: "Xat per WhatsApp",
      quickCall: "Truca'ns ara",
      searchPlaceholder: "Cerca atraccions, informació de pesca, serveis...",
      filterAll: "Tots els enllaços",
      filterWebsite: "Lloc Web",
      filterPois: "Explorar POIs",
      filterSocials: "Xarxes Socials",
      filterGuest: "Serveis Locals i Info",
      modalClose: "Tancar",
      directionsBtn: "Obrir a Google Maps",
      distance: "Distància",
      duration: "Durada",
      recommended: "Ideal Per",
      davesTipLabel: "Consell de Dave",
      recordCatchTitle: "Rècord del Club: Silur de 149 lbs!",
      recordCatchDesc: "Guiat per Dave amb més de 19 anys d'experiència al Riu Ebre.",
      qrGeneratorTitle: "Compartir o Descarregar Codi QR",
      qrGeneratorSubtitle: "Escaneja o imprimeix aquest codi QR per obrir el Portal quan vulguis.",
      printQrBtn: "Imprimir Stand Codi QR",
      weatherTitle: "Temps en directe a Móra la Nova",
      weatherCondition: "Assolellat i agradable",
      tempUnit: "°C",
      emergencyTitle: "Contactes Locals i Emergències",
      emergencyDoctor: "CAP Móra la Nova (Centre Mèdic): +34 977 40 18 18",
      emergencyPolice: "Policia Local / Emergències: 112 / +34 977 40 00 12",
      emergencyTaxi: "Servei de Taxi Móra: +34 609 36 21 44",
      supermarkets: "Supermercats (BonÀrea, Mercadona): a 15 min a peu al centre",
      poiModalTitle: "Guia de punts d'interès locals de Dave",
      poiModalSubtitle: "Selecciona una atracció per veure consells personals, detalls i indicacions de Google Maps",
      directorySubtitle: "Serveis mèdics, números d'emergència, botigues i els llocs locals preferits de Dave amb rutes a peu i en cotxe des de River House",
      directoryMedical: "Salut i assistència mèdica",
      directoryEmergency: "Policia, bombers i números d'emergència",
      directorySupermarkets: "Supermercats i botigues d'alimentació",
      directoryRestaurants: "Restaurants i bars locals",
      directoryFestivities: "Festes locals i dates",
      festivitiesTitle: "Festa Major de Móra la Nova 2026",
      festivitiesDetail: "Del 25 de juliol al 3 d’agost de 2026. Els focs artificials de cloenda són dilluns 3 d’agost, amb música, activitats familiars, menjar, cercaviles i celebracions locals durant tota la festa.",
      recordsModalTitle: "Captures rècord de la vila",
      annualReports: "Informes anuals de captures",
      topCatfish: "🐟 Millors captures de silur",
      topCarp: "🎣 Millors captures de carpa",
      angler: "Pescador",
      weatherModalTitle: "Temps a Móra la Nova",
      villaModalTitle: "Vila River House i piscina privada",
      villaModalSubtitle: "Una ullada a River House, les vistes al riu i la piscina privada.",
      localTime: "Hora local",
      condition: "Condicions",
      wind: "Vent",
      humidity: "Humitat",
      forecast: "Previsió de 7 dies",
      maxTemp: "Temp. màx. (°C)",
      minTemp: "Temp. mín. (°C)",
      walk: "A peu",
      drive: "En cotxe",
      footerRights: "River House Móra la Nova — Familiar per a oients i visitants."
    },
    es: {
      heroTagline: "Bienvenidos a River House Móra la Nova",
      heroSubtitle: "Dirigido por Dave y familia. Pesca de siluros en el río Ebro, carpas, consejos locales y relax.",
      officialSiteBtn: "Sitio Web Oficial de Pesca",
      quickWhatsapp: "Chat por WhatsApp",
      quickCall: "Llámanos ahora",
      searchPlaceholder: "Buscar atracciones, información de pesca, servicios...",
      filterAll: "Todos los enlaces",
      filterWebsite: "Sitio Web",
      filterPois: "Explorar POIs",
      filterSocials: "Redes Sociales",
      filterGuest: "Servicios Locales e Info",
      modalClose: "Cerrar",
      directionsBtn: "Abrir en Google Maps",
      distance: "Distancia",
      duration: "Duración",
      recommended: "Ideal Para",
      davesTipLabel: "Consejo de Dave",
      recordCatchTitle: "¡Récord del Club: Siluro de 149 lbs!",
      recordCatchDesc: "Guiado por Dave con más de 19 años de experiencia en el Río Ebro.",
      qrGeneratorTitle: "Compartir o Descargar Código QR",
      qrGeneratorSubtitle: "Escanea o imprime este código QR para abrir el Portal en cualquier momento.",
      printQrBtn: "Imprimir Stand Código QR",
      weatherTitle: "Tiempo en directo en Móra la Nova",
      weatherCondition: "Soleado y agradable",
      tempUnit: "°C",
      emergencyTitle: "Contactos Locales y Emergencias",
      emergencyDoctor: "CAP Móra la Nova (Centro Médico): +34 977 40 18 18",
      emergencyPolice: "Policía Local / Emergencias: 112 / +34 977 40 00 12",
      emergencyTaxi: "Servicio de Taxi Móra: +34 609 36 21 44",
      supermarkets: "Supermercados (BonÀrea, Mercadona): 15 min a pie en el centro",
      poiModalTitle: "Guía de lugares de interés locales de Dave",
      poiModalSubtitle: "Selecciona una atracción para ver consejos personales, detalles e indicaciones de Google Maps",
      directorySubtitle: "Servicios médicos, números de emergencia, tiendas y los lugares locales favoritos de Dave con rutas a pie y en coche desde River House",
      directoryMedical: "Salud y asistencia médica",
      directoryEmergency: "Policía, bomberos y números de emergencia",
      directorySupermarkets: "Supermercados y tiendas de alimentación",
      directoryRestaurants: "Restaurantes y bares locales",
      directoryFestivities: "Fiestas locales y fechas",
      festivitiesTitle: "Fiesta Mayor de Móra la Nova 2026",
      festivitiesDetail: "Del 25 de julio al 3 de agosto de 2026. Los fuegos artificiales de clausura son el lunes 3 de agosto, con música, actividades familiares, comida, desfiles y celebraciones locales durante toda la fiesta.",
      recordsModalTitle: "Capturas récord de la villa",
      annualReports: "Informes anuales de capturas",
      topCatfish: "🐟 Mejores capturas de siluro",
      topCarp: "🎣 Mejores capturas de carpa",
      angler: "Pescador",
      weatherModalTitle: "Tiempo en Móra la Nova",
      villaModalTitle: "Villa River House y piscina privada",
      villaModalSubtitle: "Una mirada a River House, las vistas al río y la piscina privada.",
      localTime: "Hora local",
      condition: "Condiciones",
      wind: "Viento",
      humidity: "Humedad",
      forecast: "Previsión de 7 días",
      maxTemp: "Temp. máx. (°C)",
      minTemp: "Temp. mín. (°C)",
      walk: "A pie",
      drive: "En coche",
      footerRights: "River House Móra la Nova — Familiar para huéspedes y visitantes."
    }
  },

  // Master Cards Layout
  cards: [
    {
      id: "official-website",
      category: "website",
      badge: "OFFICIAL WEBSITE",
      badgeClass: "badge-gold",
      title: {
        en: "Mill House Fishing Club Official Website",
        ca: "Lloc Web Oficial de Mill House Fishing Club",
        es: "Sitio Web Oficial de Mill House Fishing Club"
      },
      description: {
        en: "Check out Dave's guided catfishing & carp packages, 19+ years catch leaderboards, rod hire, pellet baits, and trip bookings.",
        ca: "Descobreix les opcions de pesca de silurs i carpes amb Dave, líder de captures de 19+ anys, lloguer i reserves.",
        es: "Descubre las opciones de pesca de siluros y carpas con Dave, tabla de capturas de 19+ años, alquiler y reservas."
      },
      image: "assets/house/riverview.png",
      link: "https://www.millhousefishingclub.co.uk/",
      linkText: {
        en: "Visit Official Website ↗",
        ca: "Visitar Lloc Web Oficial ↗",
        es: "Visitar Sitio Web Oficial ↗"
      }
    },
    {
      id: "river-house-villa",
      category: "website",
      badge: "VILLA & POOL",
      badgeClass: "badge-green",
      title: {
        en: "River House Villa & Private Pool",
        ca: "Vila i Piscina Privada de River House",
        es: "Villa y Piscina Privada de River House"
      },
      description: {
        en: "Relax at our private sunny villa with pool, sun loungers, and balcony views overlooking the Ebro River.",
        ca: "Relaxa't a la nostra vila amb piscina privada, gandules i terrassa amb vista sobre el riu Ebre.",
        es: "Relájate en nuestra villa con piscina privada, hamacas y terraza con vistas al río Ebro."
      },
      image: "assets/house/house2.png",
      images: [
        "assets/house/house.png",
        "assets/house/house2.png",
        "assets/house/house3.png",
        "assets/house/pool.png",
        "assets/house/riverview.png"
      ],
      details: {
        distance: "On-site / Móra la Nova riverfront",
        duration: "Full stay",
        recommended: "Guests, Families, Anglers",
        tip: "Enjoy morning coffee on the balcony terrace overlooking the river before heading out fishing!",
        mapUrl: "https://maps.google.com/?q=Mora+la+Nova"
      },
      linkText: {
        en: "View Villa Info",
        ca: "Veure detalls de la vila",
        es: "Ver detalles de la villa"
      },
      isModal: true
    },
    {
      id: "master-pois-hub",
      category: "pois",
      badge: "LOCAL GUIDE",
      badgeClass: "badge-purple",
      title: {
        en: "Dave's Curated Local POIs Guide",
        ca: "Guia de POIs de Dave",
        es: "Guía de POIs de Dave"
      },
      description: {
        en: "Click here to see our personal recommendations for local spots: Railway Museum, Miravet Castle, Kayaking, Benifallet Caves & Wineries.",
        ca: "Clica per veure les recomanacions de Dave: Museu del Ferrocarril, Castell de Miravet, Caiac, Coves i Cellers.",
        es: "Haz clic para ver las recomendaciones de Dave: Museo del Ferrocarril, Castillo de Miravet, Kayak, Cuevas y Bodegas."
      },
      image: "assets/poi/miravet.png",
      actionType: "openPoiSelector",
      linkText: {
        en: "Open POI Guide ↗",
        ca: "Obrir Guia de POIs ↗",
        es: "Abrir Guía de POIs ↗"
      }
    },
    {
      id: "social-instagram",
      category: "socials",
      badge: "INSTAGRAM",
      badgeClass: "badge-pink",
      title: {
        en: "Dave's Instagram (@dave.carp.cat)",
        ca: "Instagram de Dave (@dave.carp.cat)",
        es: "Instagram de Dave (@dave.carp.cat)"
      },
      description: {
        en: "Follow @dave.carp.cat on Instagram for real daily catches, giant Ebro catfish photos, and River House stories.",
        ca: "Segueix @dave.carp.cat a Instagram per veure captures diàries de silurs del Riu Ebre.",
        es: "Sigue a @dave.carp.cat en Instagram para ver capturas diarias de siluros del Río Ebro."
      },
      image: "assets/house/house3.png",
      link: "https://www.instagram.com/dave.carp.cat/",
      linkText: {
        en: "View @dave.carp.cat ↗",
        ca: "Veure Instagram ↗",
        es: "Ver Instagram ↗"
      }
    },
    {
      id: "social-facebook",
      category: "socials",
      badge: "FACEBOOK",
      badgeClass: "badge-blue",
      title: {
        en: "Mill House Fishing Club Facebook Page",
        ca: "Pàgina de Facebook de Mill House Fishing Club",
        es: "Página de Facebook de Mill House Fishing Club"
      },
      description: {
        en: "Connect with returning anglers, see catch reports, guest reviews, and trip updates directly on Facebook.",
        ca: "Connecta amb altres pescadors, consulta disponibilitat i llegeix opinions a Facebook.",
        es: "Conecta con otros pescadores, consulta disponibilidad y lee opiniones en Facebook."
      },
      image: "assets/house/pool.png",
      link: "https://www.facebook.com/TheMillhouse.fishing.club?locale=es_ES",
      linkText: {
        en: "Open Facebook Page ↗",
        ca: "Obrir Facebook ↗",
        es: "Abrir Facebook ↗"
      }
    },
    {
      id: "guest-emergency-card",
      category: "guest",
      badge: "GUEST INFO",
      badgeClass: "badge-orange",
      title: {
        en: "Local Directory & Route Maps",
        ca: "Directori Local i Mapes de Ruta",
        es: "Directorio Local y Mapas de Ruta"
      },
      description: {
        en: "Local medical (CAP & Hospital), emergency services, supermarkets (Mercadona, Esclat, BonÀrea, Spar), and Dave's favorite tapas bars — with walking & driving routes right from the villa.",
        ca: "Serveis mèdics (CAP i Hospital), supermercats i els nostres bars de tapes preferits — amb rutes a peu i en cotxe des de la casa.",
        es: "Servicios médicos (CAP y Hospital), supermercados y nuestros bares de tapas preferidos — con rutas a pie y en coche desde la casa."
      },
      image: "assets/poi/mora-la-nova-map.png",
      actionType: "openEmergencyModal",
      linkText: {
        en: "View Local Directory",
        ca: "Veure Directori Local",
        es: "Ver Directorio Local"
      }
    }
  ],

  // Expanded POIs with Dave's Personal Tips
  poisList: [
    {
      id: "poi-ebro-kayak",
      title: {
        en: "Ebro River Kayaking & Canoeing",
        ca: "Caiac i Canoa pel Riu Ebre",
        es: "Kayak y Canoa en el Río Ebro"
      },
      category: "River Activities",
      description: {
        en: "Paddle along the tranquil Ebro River from Móra la Nova down towards Miravet or Benifallet. Enjoy pristine river scenery, calm waters, and birdwatching.",
        ca: "Navega en caiac pel riu Ebre des de Móra la Nova fins a Miravet o Benifallet. Gaudeix de la natura i les aigües tranquil·les.",
        es: "Navega en kayak por el río Ebro desde Móra la Nova hasta Miravet o Benifallet. Disfruta de la naturaleza y las aguas tranquilas."
      },
      image: "assets/poi/kayak.png",
      distance: "Direct access from River House",
      duration: "2 - 4 Hours",
      recommended: "Kayakers, Nature Lovers, Families",
      tip: "Dave's Tip: Take water and sunscreen! The 2-hour paddle down to Miravet is smooth, easy, and stunning.",
      mapUrl: "https://maps.google.com/?q=Mora+la+Nova+Ebre+Kayak"
    },
    {
      id: "poi-railway-museum",
      title: {
        en: "Móra la Nova Railway Museum (El Museu del Ferrocarril)",
        ca: "Museu del Ferrocarril de Móra la Nova",
        es: "Museo del Ferrocarril de Móra la Nova"
      },
      category: "Local Heritage",
      description: {
        en: "Historic railway heritage museum featuring restored vintage steam locomotives, train turntables, signal box, and guided engine tours.",
        ca: "Museu de patrimoni ferroviari amb trens de vapor restaurats, locomotores i visites guiades interactives.",
        es: "Museo de patrimonio ferroviario con trenes de vapor restaurados, locomotoras y visitas guiadas interactivas."
      },
      image: "assets/poi/train.png",
      distance: "1.2 km (15 min walk / 3 min drive)",
      duration: "1.5 - 2 Hours",
      recommended: "Families, Train Enthusiasts, Cultural Visitors",
      tip: "Dave's Tip: Great for kids and train lovers. It is just a 15-minute stroll from River House in town.",
      mapUrl: "https://maps.google.com/?q=Museu+del+Ferrocarril+a+Mora+la+Nova"
    },
    {
      id: "poi-miravet-castle",
      title: {
        en: "Miravet Templar Castle & Wooden River Ferry",
        ca: "Castell de Miravet i Pas de Barca",
        es: "Castillo de Miravet y Paso de Barca"
      },
      category: "History & Landmarks",
      description: {
        en: "12th-century Templar Fortress dramatically built on cliffs over the Ebro River. Cross the river on the traditional non-motorized wood ferry!",
        ca: "Fortalesa templera del segle XII dalt del riu Ebre. Creua el riu amb el tradicional pas de barca de fusta!",
        es: "Fortaleza templaria del siglo XII sobre el río Ebro. ¡Cruza el río en el tradicional paso de barca de madera!"
      },
      image: "assets/poi/miravet.png",
      distance: "14 km (15 min drive)",
      duration: "Half-day excursion",
      recommended: "History Lovers, Scenic Views, Photography",
      tip: "Dave's Tip: Don't miss taking your car across the Ebro on the ancient wooden ferry (Pas de Barca) pushed only by river current!",
      mapUrl: "https://maps.google.com/?q=Castell+de+Miravet"
    },
    {
      id: "poi-coves-benifallet",
      title: {
        en: "Benifallet Caves (Coves de Meravelles)",
        ca: "Coves de Benifallet (Coves de Meravelles)",
        es: "Cuevas de Benifallet (Coves de Meravelles)"
      },
      category: "Natural Wonder",
      description: {
        en: "Spectacular underground caves featuring spiral stalactites, stalagmites, and crystal formations guided tours deep inside limestone hills.",
        ca: "Espectaculars coves subterrànies amb estalactites helictoïdals i formacions de cristall amb visites guiades.",
        es: "Espectaculares cuevas subterráneas con estalactitas helictoidales y cristalizaciones con visitas guiadas."
      },
      image: "assets/poi/CovesdeMeravelles.png",
      distance: "22 km (20 min drive)",
      duration: "1.5 Hours",
      recommended: "Families, Nature Explorers, Cool Summer Activity",
      tip: "Dave's Tip: It stays a cool 15°C inside the caves all summer — perfect on a hot afternoon!",
      mapUrl: "https://maps.google.com/?q=Coves+de+Meravelles+Benifallet"
    },
    {
      id: "poi-mora-debre",
      hidden: true,
      title: {
        en: "Móra d'Ebre Old Town & River Bridge",
        ca: "Nucli Antic de Móra d'Ebre i Pont de l'Ebre",
        es: "Casco Antiguo de Móra d'Ebre y Puente del Ebro"
      },
      category: "Historic Town",
      description: {
        en: "Charming historic town across the river bridge from Móra la Nova. Features riverwalk promenades, castle ruins, tapas bars, and shopping.",
        ca: "Poble històric a l'altra banda del pont de Móra la Nova. Amb passeig del riu, castell, bars de tapes i botigues.",
        es: "Pueblo histórico al otro lado del puente de Móra la Nova. Con paseo fluvial, castillo, bares de tapas y tiendas."
      },
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1000&q=80",
      distance: "1.5 km (20 min walk across bridge / 3 min drive)",
      duration: "2 - 3 Hours",
      recommended: "Dining, Walking, Local Tapas",
      tip: "Dave's Tip: Walk across the bridge in the evening for cold beer and authentic Catalan tapas at the local town square plazas.",
      mapUrl: "https://maps.google.com/?q=Mora+dEbre+Town+Center"
    },
    {
      id: "poi-via-verda",
      title: {
        en: "Via Verda Rail-Trail (Terra Alta Cycling)",
        ca: "Via Verda de la Terra Alta",
        es: "Vía Verde de la Terra Alta"
      },
      category: "Cycling & Hiking",
      description: {
        en: "A scenic car-free cycle path converted from a historic railway line passing through limestone canyons, mountain tunnels, and aqueducts.",
        ca: "Ruta de cicloturisme sense cotxes creada sobre una antiga via de tren que passa per gorges de roca i túnels.",
        es: "Ruta de cicloturismo sin coches creada sobre una antigua vía de tren que atraviesa gargantas de roca y túneles."
      },
      image: "assets/poi/via-verda-barranquisme.png",
      distance: "20 km drive to trailheads (Pinell de Brai / Benifallet)",
      duration: "3 - 5 Hours",
      recommended: "Biking, Outdoor Hiking, Families",
      tip: "Dave's Tip: You can rent bikes in Pinell de Brai or Benifallet. Bringing a flashlight for the longer railway tunnels is fun!",
      mapUrl: "https://maps.google.com/?q=Via+Verda+Terra+Alta"
    },
    {
      id: "poi-wine-priorat",
      title: {
        en: "Priorat & Terra Alta Wine Tasting Routes",
        ca: "Ruta del Vi del Priorat i Terra Alta",
        es: "Ruta del Vino del Priorat y Terra Alta"
      },
      category: "Gastronomy & Wine",
      description: {
        en: "World-renowned DOQ Priorat & DO Terra Alta vineyards. Taste bold Grenache wines, visit cathedral wineries (Catedral del Vi), and local tapas.",
        ca: "Cellerets i vinyes de renom mundial DOQ Priorat i DO Terra Alta. Tasta vins excel·lents i visita la Catedral del Vi.",
        es: "Bodegas y viñedos de renombre mundial DOQ Priorat y DO Terra Alta. Cata vinos excelentes y visita la Catedral del Vino."
      },
      image: "assets/poi/wine.png",
      distance: "20 - 30 min drive to Falset / Gandesa",
      duration: "Half-day / Full-day",
      recommended: "Wine Connoisseurs, Couples, Foodies",
      tip: "Dave's Tip: Visit Falset or the Pinell de Brai Wine Cathedral for incredible local Garnatxa wines and olive oils.",
      mapUrl: "https://maps.google.com/?q=Priorat+Wine+Tasting+Falset"
    },
    {
      id: "poi-delta-ebre",
      title: {
        en: "Delta de l'Ebre Natural Park & Beaches",
        ca: "Parc Natural del Delta de l'Ebre i Platges",
        es: "Parque Natural del Delta del Ebro y Playas"
      },
      category: "Nature & Reserve",
      description: {
        en: "Spain's largest wetland reserve. Home to thousands of wild flamingos, endless sandy beaches, rice fields, and traditional seafood restaurants.",
        ca: "Reserva natural amb flamencs salvatges, platges d'arena infinites, camps d'arròs i restaurants de marisc.",
        es: "Reserva natural con flamencos salvajes, playas de arena infinitas, arrozales y restaurantes de mariscos."
      },
      image: "assets/poi/delta-ebre.png",
      distance: "45 km (40 min drive south)",
      duration: "Full-day excursion",
      recommended: "Beach Lovers, Birdwatching, Seafood Dining",
      tip: "Dave's Tip: Fantastic day trip. Try the local Delta paella at one of the rustic seafood restaurants right on the beach!",
      mapUrl: "https://maps.google.com/?q=Delta+de+lEbre+Natural+Park"
    },
    {
      id: "poi-local-festivities",
      hidden: true,
      title: {
        en: "Local Festivities, Fireworks & Town Celebrations",
        ca: "Festes Locals, Focs Artificials i Celebracions",
        es: "Fiestas Locales, Fuegos Artificiales y Celebraciones"
      },
      category: "Local Culture & Events",
      description: {
        en: "Enjoy the character of Móra la Nova and nearby towns during their local fiestas: live music, food, community events, traditional activities, and special firework nights. Dates vary throughout the year.",
        ca: "Gaudeix de l’ambient de Móra la Nova i dels pobles propers durant les festes locals: música en directe, menjar, activitats populars, tradicions i nits especials de focs artificials. Les dates varien al llarg de l’any.",
        es: "Disfruta del ambiente de Móra la Nova y los pueblos cercanos durante sus fiestas locales: música en directo, comida, actividades populares, tradiciones y noches especiales de fuegos artificiales. Las fechas varían a lo largo del año."
      },
      image: "assets/house/riverview.png",
      distance: "In and around Móra la Nova",
      duration: "Evening or full-day event",
      recommended: "Families, Couples, Food & Culture Lovers",
      tip: "Dave's Tip: Ask us what is on during your stay — we are happy to point you towards the best local celebration or fireworks night.",
      mapUrl: "https://maps.google.com/?q=Mora+la+Nova+Town+Center"
    }
  ],

  // Top 3 Catfish & Top 3 Carp Catch Records
  catchRecords: [
    {
      id: "cat-1",
      species: "Wels Catfish",
      speciesLabel: "🐟 Catfish — #1 Record",
      name: "New club catfishing record on 2/8/2021",
      weight: "149lb",
      year: "02/08/2021",
      angler: "Rob",
      location: "River Ebro — Villa swim",
      story: "After a four year wait, we have a new villa record catfish. Rob caught a 149lb monster.",
      image: "assets/fish-pics/catpb.png"
    },
    {
      id: "cat-2",
      species: "Wels Catfish",
      speciesLabel: "🐟 Catfish — #2 Record",
      name: "134 lb Ebro Giant",
      weight: "134 lbs / 60.7 kg",
      year: "2021",
      angler: "Guest — Mark T. (Germany)",
      location: "River Ebro — deep pool bend, Móra section",
      story: "Mark came with his brother on a 5-day guided trip. This 134-pounder took a live bait suspended mid-water on a float rig — Dave's preferred method for the deeper channel holds. It gave a 30-minute fight before finally surfacing. Mark called it the best day of his life.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "cat-3",
      species: "Wels Catfish",
      speciesLabel: "🐟 Catfish — #3 Record",
      name: "118 lb Summer Siluro",
      weight: "118 lbs / 53.5 kg",
      year: "2023",
      angler: "Guest — Paul & Jo (Australia)",
      location: "Shallow gravel bar, River Ebro",
      story: "Paul and Jo came all the way from Brisbane for a bucket-list catfish trip. On day two, Paul connected with this powerful 118-pounder on a wading cast from the gravel bar right below the villa. Jo waded in to help Dave tail it for the photos. A brilliant memory for both of them.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "carp-1",
      species: "Common Carp",
      speciesLabel: "🎣 Carp — #1 Record",
      name: "Our club record Carp.",
      weight: "48lb",
      year: "Villa Record",
      angler: "Villa Guest",
      location: "Wood Swim",
      story: "Our club record carp. The largest carp caught from our swims, landed from the wood swim and weighed in at 48lb.",
      image: "assets/fish-pics/carppb.png"
    },
    {
      id: "carp-2",
      species: "Common Carp",
      speciesLabel: "🎣 Carp — #2 Record",
      name: "47 lb Mirror Carp",
      weight: "47 lbs / 21.3 kg",
      year: "2020",
      angler: "Guest — James K. (Ireland)",
      location: "River Ebro — slack water bay, upstream of villa",
      story: "James was a first-timer to the Ebro and had never caught a carp over 30 lbs before. Dave spotted a cluster of big fish moving into the slack water bay just upstream, and James placed his rig right in front of them. The take came within an hour — a stunning mirror carp that James still talks about.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "carp-3",
      species: "Common Carp",
      speciesLabel: "🎣 Carp — #3 Record",
      name: "44 lb Leather Carp",
      weight: "44 lbs / 20 kg",
      year: "2024",
      angler: "Dave's son — personal catch",
      location: "River Ebro — main river, opposite villa bank",
      story: "This one's personal — Dave's son landed this rare fully-scaled leather carp on a social session opposite the villa. They weren't even expecting much that afternoon, but the river had other ideas. Dave says it's one of the prettiest fish he's ever seen come out of the Ebro.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80"
    }
  ],

  // Annual Catch Reports
  annualReports: [
    {
      year: "2024",
      content: "Click on the Catfishing the River Ebro or Carpfishing the River Ebro link on the official website to see latest catches."
    },
    {
      year: "2023",
      content: "<strong>Over 140 Wels catfish over 50lb.</strong> Including 1 x 142lbs, 2 x 141lbs, 1 x 134lbs, 1 x 132lbs, 1 x 130lbs, 1 x 100lbs+, 6 x 90lbs+, 6 x 80lbs+, 5 x 70lbs+ and 8 x 60lbs+.<br><br><strong>7 Carp 30lb and over.</strong> Including 1 x 36lbs, 1 x 35lbs 8oz, 1 x 34lbs, 1 x 27lbs, 1 x 26lbs and 4 x 20lb+."
    },
    {
      year: "2022",
      content: "<strong>Over 130 Wels catfish over 50lb.</strong> Including 1 x 136lbs, 1 x 131lbs, 2 x 128lbs, 2 x 123lbs, 1 x 116lbs, 5 x 100lbs+, 2 x 90lbs+, 10 x 80lbs+, 1 x 70lbs+ and 1 x 60lbs+.<br><br><strong>7 Carp 30lb and over.</strong> Including 1 x 37lbs, 2 x 32lbs, 1 x 31lbs, 3 x 30lbs, 1 x 29lbs 12oz and 2 x 25lb+."
    },
    {
      year: "2021",
      content: "<em>(Still covid restrictions).</em><br><br><strong>69 Wels catfish over 50lb.</strong> Including 1 x 149lbs, 1 x 131lbs, 1 x 128lbs, 1 x 126lbs, 1 x 119lbs, 6 x 100lbs+, 4 x 90lbs+, 17 x 80lbs+, 10 x 70lbs+ and 17 x 60lbs+.<br><br><strong>4 Carp 20lb and over.</strong> Including 1 x 42lbs, 1 x 29lbs, 1 x 22lbs and 1 x 20lbs. (Cats are driving out the carp and more people fishing for catfish)."
    },
    {
      year: "2020",
      content: "Before covid lock down, Chris, Ramona and Angelina have had a great couple of weeks. Biggest cat 118lbs, a 114lbs, a 111lbs, a 102lbs and a 28lbs carp. Angelina bagged a 52lbs. Ramona caught a hybrid/deformed carp. Total of 56 cats, 5 carp and one chub."
    },
    {
      year: "2019",
      content: "<strong>75 Wels catfish over 50lb.</strong> Including 2 x 109lbs, 1 x 108lbs, 1 x 104lbs, 10 x 90lbs+, 17 x 80lbs+, 8 x 70lbs+ and 14 x 60lbs+.<br><br><strong>10 Carp 20lb and over.</strong> Including 1 x 33lbs, 2 x 25lbs, and 1 x 23lbs (Cats are driving out the carp and more people fishing for catfish)."
    },
    {
      year: "2018",
      content: "<strong>53 Wels catfish over 50lb.</strong> Including 8 x 70lbs+, 8 x 80lbs+, 3 x 90lbs+ and 2 x 100lbs+.<br><br><strong>15 Carp 25lb and over.</strong> Including 9 x 20lbs+, 5 x 30lbs+ and a 37lbs. (Cats are driving out the carp)."
    },
    {
      year: "2017",
      content: "<strong>47 Wels catfish over 50lb.</strong> Including 6 x 80lbs plus, 1 x 90lbs plus and the 132lbs.<br><br><strong>12 Carp 25lb and over.</strong> Including 6 x 30lbs plus. (More people fishing for the catfish last year)."
    },
    {
      year: "2016",
      content: "<strong>37 Wels catfish over 50lb.</strong><br><br><strong>21 Carp 25lb and over.</strong>"
    }
  ]
};
