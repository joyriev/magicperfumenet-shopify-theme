// ===== COMPLETE PERFUME CATALOG =====
// perfume-catalog.js - All brand data organized by brand

const PerfumeCatalog = {
  // ===== MUGLER =====
  mugler: [
    {
      id: "mugler_angel",
      name: "Angel",
      brand: "Mugler",
      image: "https://magyx.fr/cdn/shop/files/Mugler.jpg?v=1772007545",
      top_notes: ["Bergamotte", "Mandarine", "Pfefferminze"],
      heart_notes: ["Jasmin", "Orchidee", "Honig"],
      base_notes: ["Vanille", "Patschuli", "Karamell", "Sandelholz"],
      description: "Legendär. Süchtig machend. Verführerisch. Ein Gourmand-Duft, der die Welt der Parfümerie revolutionierte mit seiner einzigartigen Kombination aus süßen und holzigen Noten.",
      year: "1992",
      gender: "Female",
      productNumbers: ["113"],
      shopifyProduct: {
        title: "No. 113— Senteur Inspirée Angel",
        url: "https://magyx.fr/products/magic-perfume-no-113w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/113W_c.webp?v=1771385180&width=300"
      }
    },
  ],

  // ===== PACO RABANNE =====
  pacoRabanne: [
    {
      id: "paco_lady_million",
      name: "Lady Million",
      brand: "Paco Rabanne",
      image: "https://magyx.fr/cdn/shop/files/023W_c.webp?v=1771385152&width=300",
      top_notes: ["Neroli", "Bittermandel", "Freesie"],
      heart_notes: ["Jasmin", "Orangenblüte", "Gardenie"],
      base_notes: ["Honig", "Patschuli", "Moschus"],
      description: "Glamourös. Selbstbewusst. Verführerisch. Ein opulenter Blumenduft für die Frau, die weiß, was sie will.",
      year: "2010",
      gender: "Female",
      productNumbers: ["023"],
      shopifyProduct: {
        title: "No. 023— Senteur Inspirée LADY MILION",
        url: "https://magyx.fr/products/magic-perfume-no-023w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/023W_c.webp?v=1771385152&width=300"
      }
    }
  ],

  // ===== YVES SAINT LAURENT =====
  ysl: [
    {
      id: "ysl_black_opium",
      name: "Black Opium",
      brand: "Yves Saint Laurent",
      image: "https://magyx.fr/cdn/shop/files/132W_c.webp?v=1771385154&width=300",
      top_notes: ["Kaffee", "Birne", "Pink Pfeffer"],
      heart_notes: ["Orangenblüte", "Jasmin", "Bittermandel"],
      base_notes: ["Vanille", "Kaffee", "Patschuli", "Zeder"],
      description: "Süchtig machend. Dunkel. Verführerisch. Ein moderner Gourmand-Duft mit einer süchtig machenden Kaffee-Note.",
      year: "2014",
      gender: "Female",
      productNumbers: ["132"],
      shopifyProduct: {
        title: "No. 132— Senteur Inspirée Black Opium",
        url: "https://magyx.fr/products/magic-perfume-no-132w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/132W_c.webp?v=1771385154&width=300"
      }
    },
    {
      id: "ysl_manifesto",
      name: "Manifesto",
      brand: "Yves Saint Laurent",
      image: "https://magyx.fr/cdn/shop/files/134W_c.webp?v=1771385190&width=300",
      top_notes: ["Schwarze Johannisbeere", "Bergamotte", "Grüner Apfel"],
      heart_notes: ["Jasmin", "Maiglöckchen", "Rose"],
      base_notes: ["Sandelholz", "Vanille", "Tonkabohne", "Zeder"],
      description: "Elegant. Sinnlich. Selbstbewusst. Ein moderner Holzduft mit blumigen Akzenten.",
      year: "2012",
      gender: "Female",
      productNumbers: ["134"],
      shopifyProduct: {
        title: "No. 134 — Senteur Inspirée Laurent Manifesto",
        url: "https://magyx.fr/products/magic-perfume-no-134w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/134W_c.webp?v=1771385190&width=300"
      }
    },
    {
      id: "ysl_opium",
      name: "Opium",
      brand: "Yves Saint Laurent",
      image: "https://magyx.fr/cdn/shop/files/083W_c.webp?v=1771385185&width=300",
      top_notes: ["Mandarine", "Bergamotte", "Nelke"],
      heart_notes: ["Jasmin", "Rose", "Ylang-Ylang"],
      base_notes: ["Vanille", "Patschuli", "Weihrauch", "Sandelholz"],
      description: "Exotisch. Orientalisch. Legendär. Ein ikonischer orientalischer Duft mit würzigen und blumigen Noten.",
      year: "1977",
      gender: "Female",
      productNumbers: ["083"],
      shopifyProduct: {
        title: "No. 083— Senteur Inspirée Laurent Opium",
        url: "https://magyx.fr/products/magic-perfume-no-083w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/083W_c.webp?v=1771385185&width=300"
      }
    }
  ],

  // ===== GIVENCHY =====
  givenchy: [
    {
      id: "givenchy_ange_ou_demon",
      name: "Ange ou Démon",
      brand: "Givenchy",
      image: "https://magyx.fr/cdn/shop/files/142W_c.webp?v=1771385169&width=300",
      top_notes: ["Mandarine", "Thymian", "Koriander"],
      heart_notes: ["Lilie", "Orchidee", "Rose"],
      base_notes: ["Vanille", "Tonkabohne", "Sandelholz", "Eichenmoos"],
      description: "Geheimnisvoll. Verführerisch. Kontrastreich. Ein Duft zwischen Licht und Schatten, Engel und Dämon.",
      year: "2006",
      gender: "Female",
      productNumbers: ["142"],
      shopifyProduct: {
        title: "No. 142— Senteur Inspirée Ange Ou Demon",
        url: "https://magyx.fr/products/magic-perfume-no-142w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/142W_c.webp?v=1771385169&width=300"
      }
    }
  ],

  // ===== PRADA =====
  prada: [
    {
      id: "prada_candy",
      name: "Candy",
      brand: "Prada",
      image: "https://magyx.fr/cdn/shop/files/182W_c.webp?v=1771385187&width=300",
      top_notes: ["Moschus", "Benzoe"],
      heart_notes: ["Patschuli"],
      base_notes: ["Karamell", "Vanille", "Moschus"],
      description: "Süß. Sinnlich. Modern. Ein Gourmand-Duft mit cremigen Karamell- und Vanillenoten.",
      year: "2011",
      gender: "Female",
      productNumbers: ["182"],
      shopifyProduct: {
        title: "No. 182— Senteur Inspirée Candy",
        url: "https://magyx.fr/products/magic-perfume-no-182w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/182W_c.webp?v=1771385187&width=300"
      }
    }
  ],

  // ===== GIORGIO ARMANI =====
  armani: [
    {
      id: "armani_si",
      name: "Si",
      brand: "Giorgio Armani",
      image: "https://magyx.fr/cdn/shop/files/129W_c.webp?v=1771385148&width=300",
      top_notes: ["Schwarze Johannisbeere", "Bergamotte"],
      heart_notes: ["Rose", "Freesie", "Jasmin"],
      base_notes: ["Vanille", "Patschuli", "Zeder"],
      description: "Elegant. Modern. Selbstbewusst. Ein zeitloser Duft mit einer süchtig machenden Kombination aus Schwarzer Johannisbeere und Vanille.",
      year: "2013",
      gender: "Female",
      productNumbers: ["129"],
      shopifyProduct: {
        title: "No. 129— Senteur Inspirée Si",
        url: "https://magyx.fr/products/magic-perfume-no-129w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/129W_c.webp?v=1771385148&width=300"
      }
    },
    {
      id: "armani_my_way",
      name: "My Way",
      brand: "Giorgio Armani",
      image: "https://magyx.fr/cdn/shop/files/140W_c.webp?v=1771385219&width=300",
      top_notes: ["Bergamotte", "Orangenblüte"],
      heart_notes: ["Indische Tuberose", "Jasmin"],
      base_notes: ["Zeder", "Vanille", "Moschus"],
      description: "Frisch. Lebendig. Entdeckungsfreudig. Ein blumiger Duft, der die Freude am Entdecken neuer Horizonte feiert.",
      year: "2020",
      gender: "Female",
      productNumbers: ["140"],
      shopifyProduct: {
        title: "No. 140 — Senteur Inspirée MY WAY",
        url: "https://magyx.fr/products/magic-perfume-no-140w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/140W_c.webp?v=1771385219&width=300"
      }
    },
    {
      id: "armani_emporio_she",
      name: "Emporio She",
      brand: "Giorgio Armani",
      image: "https://magyx.fr/cdn/shop/files/150W_c.webp?v=1771385147&width=300",
      top_notes: ["Mandarine", "Zitrone", "Apfel"],
      heart_notes: ["Jasmin", "Rose", "Pfirsich"],
      base_notes: ["Zeder", "Moschus", "Vanille"],
      description: "Frisch. Modern. Lebendig. Ein jugendlicher Duft mit fruchtigen und blumigen Noten.",
      year: "1998",
      gender: "Female",
      productNumbers: ["150"],
      shopifyProduct: {
        title: "No. 150— Senteur Inspirée Emporio She",
        url: "https://magyx.fr/products/magic-perfume-no-150w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/150W_c.webp?v=1771385147&width=300"
      }
    }
  ],

  // ===== CHANEL =====
  chanel: [
    {
      id: "chanel_no5",
      name: "No. 5",
      brand: "Chanel",
      image: "https://magyx.fr/cdn/shop/files/077W_c.webp?v=1771385150&width=300",
      top_notes: ["Ylang-Ylang", "Neroli", "Bergamotte"],
      heart_notes: ["Maiglöckchen", "Iris", "Jasmin", "Rose"],
      base_notes: ["Vanille", "Sandelholz", "Moschus", "Vetiver"],
      description: "Legendär. Zeitlos. Ikonisch. Der weltberühmte Duft, der die Parfümwelt revolutionierte.",
      year: "1921",
      gender: "Female",
      productNumbers: ["077"],
      shopifyProduct: {
        title: "No. 077— Senteur Inspirée No.5",
        url: "https://magyx.fr/products/magic-perfume-no-077w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/077W_c.webp?v=1771385150&width=300"
      }
    },
    {
      id: "chanel_coco",
      name: "Coco Mademoiselle",
      brand: "Chanel",
      image: "https://magyx.fr/cdn/shop/files/079W_c.webp?v=1771385207&width=300",
      top_notes: ["Orange", "Bergamotte", "Mandarine"],
      heart_notes: ["Jasmin", "Rose", "Ylang-Ylang"],
      base_notes: ["Patschuli", "Vanille", "Moschus", "Tonkabohne"],
      description: "Modern. Selbstbewusst. Verführerisch. Ein frischer, sinnlicher Duft für die moderne Frau.",
      year: "2001",
      gender: "Female",
      productNumbers: ["079"],
      shopifyProduct: {
        title: "No. 079 — Senteur Inspirée Coco",
        url: "https://magyx.fr/products/magic-perfume-no-079w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/079W_c.webp?v=1771385207&width=300"
      }
    },
    {
      id: "chanel_chance",
      name: "Chance",
      brand: "Chanel",
      image: "https://magyx.fr/cdn/shop/files/006W_c.webp?v=1771385217&width=300",
      top_notes: ["Pink Pfeffer", "Zitrone", "Mandarine"],
      heart_notes: ["Jasmin", "Hyazinthe", "Iris"],
      base_notes: ["Moschus", "Patschuli", "Vanille", "Zeder"],
      description: "Frisch. Optimistisch. Lebendig. Ein blumiger Duft mit einer Prise Pfeffer für die Frau, die an ihre Träume glaubt.",
      year: "2003",
      gender: "Female",
      productNumbers: ["006"],
      shopifyProduct: {
        title: "No. 006 — Senteur Inspirée Chance",
        url: "https://magyx.fr/products/magic-perfume-no-006w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/006W_c.webp?v=1771385217&width=300"
      }
    },
    {
      id: "chanel_allure_homme_sport",
      name: "Allure Homme Sport",
      brand: "Chanel",
      image: "https://magyx.fr/cdn/shop/files/222M_c.webp?v=1771385186&width=300",
      top_notes: ["Mandarine", "Orangenblüte", "Bergamotte"],
      heart_notes: ["Neroli", "Zeder"],
      base_notes: ["Tonkabohne", "Ambra", "Vanille", "Moschus"],
      description: "Sportlich. Dynamisch. Elegant. Ein frischer, aromatischer Duft für den aktiven Mann.",
      year: "2004",
      gender: "Male",
      productNumbers: ["222"],
      shopifyProduct: {
        title: "No. 222— Senteur Inspirée Allure Homme Sport",
        url: "https://magyx.fr/products/magic-perfume-no-222m",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/222M_c.webp?v=1771385186&width=300"
      }
    }
  ],

  // ===== TOM FORD =====
  tomFord: [
    {
      id: "tom_ford_vanille_fatale",
      name: "Vanille Fatale",
      brand: "Tom Ford",
      image: "https://magyx.fr/cdn/shop/files/053W_c.webp?v=1771385216&width=300",
      top_notes: ["Krokus", "Koriander", "Rum"],
      heart_notes: ["Jasmin", "Orangenblüte"],
      base_notes: ["Vanille", "Mahagoni", "Leder", "Moschus", "Styrax"],
      description: "Dunkel. Sinnlich. Verführerisch. Eine reichhaltige, süchtig machende Vanille-Komposition.",
      year: "2017",
      gender: "Female",
      productNumbers: ["053"],
      shopifyProduct: {
        title: "No. 053 — Senteur Inspirée Vanille Fatale",
        url: "https://magyx.fr/products/magic-perfume-no-053w-m",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/053W_c.webp?v=1771385216&width=300"
      }
    },
    {
      id: "tom_ford_tobacco_vanille",
      name: "Tobacco Vanille",
      brand: "Tom Ford",
      image: "https://magyx.fr/cdn/shop/files/193W_c.webp?v=1771385212&width=300",
      top_notes: ["Tabakblatt", "Vanille"],
      heart_notes: ["Kakao", "Tonkabohne", "Trockenfrüchte"],
      base_notes: ["Holzige Noten", "Vanille", "Tabak"],
      description: "Warm. Würzig. Verführerisch. Ein opulenter Duft mit reichhaltigen Tabak- und Vanillenoten.",
      year: "2007",
      gender: "Male",
      productNumbers: ["193"],
      shopifyProduct: {
        title: "No. 193 — Senteur Inspirée Tobacco Vanille",
        url: "https://magyx.fr/products/magic-perfume-no-193w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/193W_c.webp?v=1771385212&width=300"
      }
    }
  ],

  // ===== HUGO BOSS =====
  hugoBoss: [
    {
      id: "hugo_boss_hugo",
      name: "Hugo",
      brand: "Hugo Boss",
      image: "https://magyx.fr/cdn/shop/files/223M_c.webp?v=1771385167&width=300",
      top_notes: ["Apfel", "Minze", "Lavendel"],
      heart_notes: ["Nelke", "Geranie", "Jasmin"],
      base_notes: ["Zeder", "Sandelholz", "Moschus", "Vanille"],
      description: "Frisch. Modern. Selbstbewusst. Ein klassischer Duft für den dynamischen Mann.",
      year: "1995",
      gender: "Male",
      productNumbers: ["223"],
      shopifyProduct: {
        title: "No. 223— Senteur Inspirée Hugo",
        url: "https://magyx.fr/products/magic-perfume-no-223m",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/223M_c.webp?v=1771385167&width=300"
      }
    },
    {
      id: "hugo_boss_the_scent",
      name: "The Scent",
      brand: "Hugo Boss",
      image: "https://magyx.fr/cdn/shop/files/184W_c.webp?v=1771385182&width=300",
      top_notes: ["Ingwer", "Bergamotte"],
      heart_notes: ["Männliche Akkorde", "Lavendel"],
      base_notes: ["Leder", "Moschus", "Zeder"],
      description: "Verführerisch. Maskulin. Modern. Ein sinnlicher Duft mit einer einzigartigen Ingwer-Note.",
      year: "2015",
      gender: "Female",
      productNumbers: ["184"],
      shopifyProduct: {
        title: "No. 184— Senteur Inspirée The Scent",
        url: "https://magyx.fr/products/magic-perfume-no-184w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/184W_c.webp?v=1771385182&width=300"
      }
    },
    {
      id: "hugo_boss_boss_woman",
      name: "Boss Woman",
      brand: "Hugo Boss",
      image: "https://magyx.fr/cdn/shop/files/060W_c.webp?v=1771385203&width=300",
      top_notes: ["Mandarine", "Apfel", "Birne"],
      heart_notes: ["Jasmin", "Maiglöckchen", "Freesie"],
      base_notes: ["Zeder", "Sandelholz", "Moschus"],
      description: "Modern. Selbstbewusst. Weiblich. Ein Duft für die starke, unabhängige Frau.",
      year: "1998",
      gender: "Female",
      productNumbers: ["060"],
      shopifyProduct: {
        title: "No. 060 — Senteur Inspirée Boss Woman",
        url: "https://magyx.fr/products/magic-perfume-no-060w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/060W_c.webp?v=1771385203&width=300"
      }
    },
    {
      id: "hugo_boss_deep_red",
      name: "Deep Red",
      brand: "Hugo Boss",
      image: "https://magyx.fr/cdn/shop/files/022W_c.webp?v=1771385163&width=300",
      top_notes: ["Apfel", "Ingwer", "Mandarine"],
      heart_notes: ["Rose", "Orchidee", "Jasmin"],
      base_notes: ["Sandelholz", "Zeder", "Vanille", "Moschus"],
      description: "Leidenschaftlich. Sinnlich. Verführerisch. Ein warmer, holziger Duft mit fruchtigen Akzenten.",
      year: "2001",
      gender: "Female",
      productNumbers: ["022"],
      shopifyProduct: {
        title: "No. 022— Senteur Inspirée Deep Red",
        url: "https://magyx.fr/products/magic-perfume-no-022w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/022W_c.webp?v=1771385163&width=300"
      }
    },
    {
      id: "hugo_boss_alive",
      name: "Alive",
      brand: "Hugo Boss",
      image: "https://magyx.fr/cdn/shop/files/098W_c.webp?v=1771385196&width=300",
      top_notes: ["Apfel", "Mandarine", "Zimt"],
      heart_notes: ["Jasmin", "Rose", "Orangenblüte"],
      base_notes: ["Zeder", "Sandelholz", "Vanille"],
      description: "Lebendig. Modern. Selbstbewusst. Ein fruchtig-blumiger Duft für die energiegeladene Frau.",
      year: "2020",
      gender: "Female",
      productNumbers: ["098"],
      shopifyProduct: {
        title: "No. 098 — Senteur Inspirée Alive",
        url: "https://magyx.fr/products/magic-perfume-no-021w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/098W_c.webp?v=1771385196&width=300"
      }
    }
  ],

  // ===== LANCOME =====
  lancome: [
    {
      id: "lancome_tresor",
      name: "Trésor",
      brand: "Lancôme",
      image: "https://magyx.fr/cdn/shop/files/141W_c.webp?v=1771385201&width=300",
      top_notes: ["Rose", "Aprikose", "Pfirsich"],
      heart_notes: ["Maiglöckchen", "Iris", "Jasmin"],
      base_notes: ["Sandelholz", "Vanille", "Moschus", "Aprikose"],
      description: "Romantisch. Zeitlos. Elegant. Ein klassischer blumiger Duft mit fruchtigen Akzenten.",
      year: "1990",
      gender: "Female",
      productNumbers: ["141"],
      shopifyProduct: {
        title: "No. 141 — Senteur Inspirée Tresor",
        url: "https://magyx.fr/products/magic-perfume-no-141w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/141W_c.webp?v=1771385201&width=300"
      }
    }
  ],

  // ===== DIOR =====
  dior: [
    {
      id: "dior_miss_cherie",
      name: "Miss Cherie",
      brand: "Dior",
      image: "https://magyx.fr/cdn/shop/files/082W_c.webp?v=1771385151&width=300",
      top_notes: ["Orangenblüte", "Mandarine"],
      heart_notes: ["Jasmin", "Rose", "Karambole"],
      base_notes: ["Patschuli", "Karamell", "Moschus"],
      description: "Modern. Sinnlich. Verführerisch. Ein süßer, blumiger Duft mit einer einzigartigen Karamell-Note.",
      year: "2005",
      gender: "Female",
      productNumbers: ["082"],
      shopifyProduct: {
        title: "No. 082— Senteur Inspirée Miss Cherie",
        url: "https://magyx.fr/products/magic-perfume-no-082w",
        price: "€11.99",
        image: "https://magyx.fr/cdn/shop/files/082W_c.webp?v=1771385151&width=300"
      }
    }
  ],

  // ===== CREED =====
  creed: [
    {
      id: "creed_aventus_for_her",
      name: "Aventus for Her",
      brand: "Creed",
      image: "https://magicperfume.co/cdn/shop/files/aventus.webp?v=1772533006",
      top_notes: ["Grüner Apfel", "Bergamotte", "Zitrone", "Rosa Pfeffer"],
      heart_notes: ["Pfirsich", "Schwarze Johannisbeere", "Rose", "Jasmin"],
      base_notes: ["Sandelholz", "Moschus", "Amber", "Patschuli", "Eichenmoos"],
      description: "Elegant. Strahlend. Selbstbewusst. Ein lebendiger und raffinierter Duft für Frauen, die moderne Eleganz mit einer frischen, fruchtigen Note lieben.",
      year: "2016",
      gender: "Female",
      productNumbers: ["488"],
      shopifyProduct: {
        title: "No. 488 – Fruity Floral (w)",
        url: "https://magicperfume.co/products/no-488-inspired-by-aventus-for-her",
        price: "€11.99",
        image: "https://cdn.shopify.com/s/files/1/0700/7928/3458/files/488W_i.webp?v=1772529681"
      }
    },
    {
      id: "creed_aventus_for_him",
      name: "Aventus for Him",
      brand: "Creed",
      image: "https://magicperfume.co/cdn/shop/files/aventus_m.webp?v=1772533006",
      top_notes: ["Schwarze Johannisbeere", "Bergamotte", "Apfel", "Ananas"],
      heart_notes: ["Rose", "Birke", "Jasmin", "Patschuli"],
      base_notes: ["Moschus", "Eichenmoos", "Amber", "Vanille"],
      description: "Legendär. Kraftvoll. Erfolgreich. Ein ikonischer Duft, der Stärke und Erfolg verkörpert mit einer einzigartigen Mischung aus fruchtigen und holzigen Noten.",
      year: "2010",
      gender: "Male",
      productNumbers: ["288"],
      shopifyProduct: {
        title: "No. 288 – Fruity Aromatic (m)",
        url: "https://magicperfume.co/products/no-288-inspired-by-aventus-for-him",
        price: "€11.99",
        image: "https://cdn.shopify.com/s/files/1/0700/7928/3458/files/288M_i.webp?v=1772529681"
      }
    }
  ]
};

// ===== HELPER FUNCTIONS =====
function getAllPerfumes() {
  const allPerfumes = [];
  for (const brand in PerfumeCatalog) {
    if (Array.isArray(PerfumeCatalog[brand])) {
      allPerfumes.push(...PerfumeCatalog[brand]);
    }
  }
  return allPerfumes;
}

function getPerfumeById(id) {
  const allPerfumes = getAllPerfumes();
  return allPerfumes.find(p => p.id === id);
}

function getPerfumesByBrand(brand) {
  const brandKey = brand.toLowerCase().replace(/[^a-z]/g, '');
  for (const key in PerfumeCatalog) {
    if (key === brandKey && Array.isArray(PerfumeCatalog[key])) {
      return PerfumeCatalog[key];
    }
  }
  return [];
}

function getPerfumesByGender(gender) {
  const allPerfumes = getAllPerfumes();
  return allPerfumes.filter(p => p.gender?.toLowerCase() === gender.toLowerCase());
}

function searchPerfumes(query) {
  const allPerfumes = getAllPerfumes();
  const searchTerm = query.toLowerCase();
  
  return allPerfumes.filter(perfume => {
    return perfume.name.toLowerCase().includes(searchTerm) ||
           perfume.brand.toLowerCase().includes(searchTerm) ||
           perfume.productNumbers?.some(num => num.includes(searchTerm)) ||
           perfume.description?.toLowerCase().includes(searchTerm);
  });
}

// ===== EXPORT FOR USE IN OTHER FILES =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PerfumeCatalog,
    getAllPerfumes,
    getPerfumeById,
    getPerfumesByBrand,
    getPerfumesByGender,
    searchPerfumes
  };
}

// Make available globally for browser
if (typeof window !== 'undefined') {
  window.PerfumeCatalog = PerfumeCatalog;
  window.getAllPerfumes = getAllPerfumes;
  window.getPerfumeById = getPerfumeById;
  window.getPerfumesByBrand = getPerfumesByBrand;
  window.getPerfumesByGender = getPerfumesByGender;
  window.searchPerfumes = searchPerfumes;
}

console.log('✓ Perfume Catalog loaded with', getAllPerfumes().length, 'perfumes');