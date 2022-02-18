const header = 
  "<h1>Welkom in Marc's Logbook</h1> \
   <p>Yup. Nederlands. Engels. Alles door elkaar. Veel content is namelijk Engels en tegelijk heeft het betrekking om Nederland en de Nederlandse samenleving en overheid. Dus Nederlandse posts en Engels posts ... en mixed &#128540;</p> \
   <p>Dit logboek bevat posts over verschillende onderwerpen, meestal wel gerelateerd aan technologie en/of trends ... en met impact of relatie naar de digitale maatschappij.</p>";
const footer = "&copy; 2022 Marc van Andel - see <a href='https://github.com/marcvanandel/logbook'>GitHub repo</a>";
const entries = [
  {
    id: 'koers-live',
    categories: ['events'],
    color: 'green',
    faicon: 'layer-group',
    date: '2018-11-15',
    title: 'KOERS live !! &#127881;',
    image: {
      link: 'https://kadaster.nl',
      src: 'https://www.kadaster.nl/image/layout_set_logo?img_id=5221262&t=1645190383860',
      alt: 'Kadaster (NL)',
      caption: 'Kadaster',
    },
    body: 
    "Na vier jaar hard bouwen, testen, schaduw productie draaien, 2-wekelijks migreren, vele uitdagingen en nog meer overleggen ... \
    is het nieuwe systeem voor het bijhouden van de BRK live!! &#127881; JAHOE! Wat een MEGA presetatie!",
  },
  {
    id: 'koers-realisatie',
    categories: ['events'],
    color: 'green',
    faicon: 'layer-group',
    date: '2016-06-01',
    title: 'KOERS realisatie',
    image: {
      link: 'https://kadaster.nl',
      src: 'https://www.kadaster.nl/image/layout_set_logo?img_id=5221262&t=1645190383860',
      alt: 'Kadaster (NL)',
      caption: 'Kadaster',
    },
    body: 
    "Het systeem waarin het Kadaster de BasisRegistratie Kadaster, de BRK, bijhoudt, wordt vernieuwd. Ik mag als software architect \
    dit nieuwe systeem ontwerken. Event Sourcing is één van de 'core' architectuur patronen. Samen met 4 agile / DevOps teams realiseren \
    we dit nieuwe systemen. We passen Continuous Delivery toe en bouwen een microservices systeem ... wat in voortbrenging toch nog wel \
    de nodige monolitische aspecten heeft. Maar in ieder geval is de ontkoppeling door toepassing van CQRS (Command Query Responsibility \
    Seggregation) wel echt top! Dit (architectuur) patroon is voorwaardelijk om Event Sourcing te kunnen toepassen. Al doende, zowel \
    in uitleggen, toelichten en uitdenken als in realisatie, levert dit project veel kennis en begrip van Event Sourcing (en CQRS en \
    Continuous Delivery en microservices en Kadaster domeinkennis &1F609; ). Het heeft mij nóg enthousiaster gemaakt over \
    het 'denken in events'.",
    links: [
      {
        href: 'https://levelup.gitconnected.com/paradigm-shift-from-single-model-to-commands-events-and-queries-ee68a97de9aa?sk=df5dcf092d31eb2da5f6a95940cbd74f',
        linkText: 'Blog: Paradigm Shift from Single Model to Commands, Events and Queries - by me',
      },
      {
        href: 'https://eventmodeling.org/',
        linkText: 'EventModeling.org',
      },
      {
        href: 'https://www.sciencedirect.com/science/article/pii/S0164121221000674',
        linkText: 'Lessons Learned from the Industry',
      },
    ],
  },
  {
    id: 'koers-het-plan',
    categories: ['events'],
    color: 'green',
    faicon: 'layer-group',
    date: '2014-05-23',
    title: 'De Nieuwe KOERS',
    image: {
      link: 'https://kadaster.nl',
      src: 'https://www.kadaster.nl/image/layout_set_logo?img_id=5221262&t=1645190383860',
      alt: 'Kadaster (NL)',
      caption: 'Kadaster',
    },
    body: 
    "Het systeem waarin het Kadaster de BasisRegistratie Kadaster, de BRK, bijhoudt, is ruim 30 jaar in gebruik. Tijd voor vernieuwing! \
    Hoezeer dat waar is, dat is geen eenvoudige taak. Dat wordt een open hart operatie terwijl de winkel open blijft. Als één van de \
    oplossingen is gekozen voor 'Event Sourcing' als intern architectuur patroon. Als software architect heb ik die introductie gedaan \
    en samen met de teams de realisatie daarvan. Dit heeft mij veel begrip van dit architectuurpatroon gegeven én zeer enthousiast gemaakt over \
    het 'denken in events'.",
    links: [
      {
        href: 'https://martinfowler.com/eaaDev/EventSourcing.html',
        linkText: 'Martin Fowler | Event Sourcing',
      },
    ],
  },
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
