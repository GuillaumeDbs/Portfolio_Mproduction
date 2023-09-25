
//projets vidéo 

// Review Av concept
import imgBcinema from 'assets/project/black/BReviewAV.png';
import imgWcinema from 'assets/project/white/WSallecinéma.jpg';

// Best of adyce
import imgBmariokart from 'assets/project/black/B_mario kart.jpg';
import imgWmariokart from 'assets/project/white/W_mario kart.jpg';

// Overtime
import imgBparking from 'assets/project/black/Bparking.jpg';
import imgWparking from 'assets/project/white/w_parking tokyo.jpg';

// Shiny color 

import imgBpokemon01 from 'assets/project/black/background-pokemonshiny.jpg';
import imgWpokemon01 from 'assets/project/white/background-pokemonshiny.jpg';

// Shiny Race

import imgBpokemon02 from 'assets/project/black/pikachu.jpeg';
import imgWpokemon02 from 'assets/project/white/w_pokémon02.jpg';

// Emilie Rouge

import imgBgraf01 from 'assets/project/black/Bgraf01.jpg';
import imgWgraf01 from 'assets/project/white/WGraf01.jpg';

// Tank & Popek

import imgBgraf02 from 'assets/project/black/Bgraf02.jpg';
import imgWgraf02 from 'assets/project/white/Wgraf02.jpg';

// Vincent Audoin 

import imgBgraf03 from 'assets/project/black/Bgraf03.jpg';
import imgWgraf03 from 'assets/project/white/Wgraf03.jpg';


const data = [
  {
    backgroundOverlayOpacity: {
      white: 0.3,
      black: 0.6
    },
    backgroundElement: {
      srcImg: {
        white: imgWcinema,
        black: imgBcinema
      },
      alt: "Merci de refresh la page"
    },
    sectionHeading: "Review",
    sectionText: {
      titreVideo: "Review AV Concept ",
      dateCreation: "Aout 2023",
      contexte: "Montage d'une vidéo review sur du matériel de salle de cinéma.",
      outils: "Première pro, After effects, Photoshop"
    },
    videoSrc: "https://www.youtube.com/embed/a1Y2gEIHE2M"
  },
  {
    backgroundOverlayOpacity: {
      white: 0.3,
      black: 0.8
    },
    backgroundElement: {
      srcImg: {
        white: imgWmariokart,
        black: imgBmariokart
      },
      alt: "Merci de refresh la page"
    },
    sectionHeading: "Best of",
    sectionText: {
      titreVideo: "BEST OF ADYCE #18 - EN MODE MALVEILLANCE MAX ???",
      dateCreation: "Juillet 2023",
      contexte: "Montage d'un Best of Twitch.",
      outils: "Première pro, After effects, Photoshop"
    },
    videoSrc: "https://www.youtube.com/embed/yzJxQp5YJ_c"
  },
  {
    backgroundOverlayOpacity: {
      white: 0.5,
      black: 0.7
    },
    backgroundElement: {
      srcImg: {
        white: imgWparking,
        black: imgBparking
      },
      alt: "Merci de refresh la page"
    },
    sectionHeading: "Overtime",
    sectionText: {
      titreVideo: "Overtime",
      dateCreation: "Juin 2023",
      contexte: "Pour m'exercer sur Avid Media Composer, j'ai utilisé des rushs pour recréer le court-métrage nommé Overtime, en respectant une limite de 6 minutes (au lieu des 8 minutes originales) et en exportant en 720P.",
      outils: "Avid Media Composer, After effects, Photoshop"
    },
    videoSrc: "https://www.youtube.com/embed/t1wje4D5_M0"
  },
  {
    backgroundOverlayOpacity: {
      white: 0.4,
      black: 0.7
    },
    backgroundElement: {
      srcImg: {
        white: imgWpokemon01,
        black: imgBpokemon01
      },
      alt: "Merci de refresh la page"
    },
    sectionHeading: "Shiny Color",
    sectionText: {
      titreVideo: "LE PREMIER À AVOIR UNE EQUIPE POKEMON SHINY ARC-EN-CIEL GAGNE !!",
      dateCreation: "Mai 2023",
      contexte: "Montage d'un concept réalisé en live. L'objectif était de réaliser un condensé pour la chaîne Youtube d'Adyce.",
      outils: "Première pro, After effects, Photoshop"
    },
    videoSrc: "https://www.youtube.com/embed/KasmnMw-qNU"
  },
  {
    backgroundOverlayOpacity: {
      white: 0.2,
      black: 0.9
    },
    backgroundElement: {
      srcImg: {
        white: imgWpokemon02,
        black: imgBpokemon02
      },
      alt: "Merci de refresh la page"
    },
    sectionHeading: "Shiny Race",
    sectionText: {
      titreVideo: "UNE COURSE de SHINY SUR Pokémon Rubis Oméga et Saphir Alpha ! ( une shiny race incroyable )",
      dateCreation: "Janvier 2023",
      contexte: "Montage d'un concept réalisé en live. L'objectif était de faire un condensé pour la chaîne Youtube d'Adyce.",
      outils: "Première pro, After effects, Photoshop"
    },
    videoSrc: "https://www.youtube.com/embed/zR06FaOUxpY"
  },
  {
    backgroundOverlayOpacity: {
      white: 0.3,
      black: 0.8
    },
    backgroundElement: {
      srcImg: {
        white: imgBgraf01,
        black: imgWgraf01
      },
      alt: "Merci de refresh la page"
    },
    sectionHeading: "Interview Loire Art Show",
    sectionText: {
      titreVideo: "Interview Emilie Rouge",
      dateCreation: "Juillet 2022",
      contexte: "Montage d'interviews que j'ai réalisé chez DTMC Production pour l'événement Loire Art ",
      instagram : "@loire_art_show @dtmcproduction @emilierouge",
      outils: "Première pro, After effects"
    },
    videoSrc: "https://www.youtube.com/embed/_HJ6z-DsNcw"
  },

  {
    backgroundOverlayOpacity: {
      white: 0.6,
      black: 0.9
    },
    backgroundElement: {
      srcImg: {
        white: imgBgraf02,
        black: imgWgraf02
      },
      alt: "Merci de refresh la page"
    },
    sectionHeading: "Interview Loire Art Show",
    sectionText: {
      titreVideo: "Interview Tank & Popek",
      dateCreation: "Juillet 2022",
      contexte: "Montage d'interviews que j'ai réalisé chez DTMC Production pour l'événement Loire Art ",
      instagram : "@loire_art_show @dtmcproduction @emilierouge",
      outils: "Première pro, After effects"
    },
    videoSrc: "https://www.youtube.com/embed/Bmg7OQQITdY"
  }, 
  {
    backgroundOverlayOpacity: {
      white: 0.5,
      black: 1
    },
    backgroundElement: {
      srcImg: {
        white: imgBgraf03,
        black: imgWgraf03
      },
      alt: "Merci de refresh la page"
    },
    sectionHeading: "Interview Loire Art Show",
    sectionText: {
      titreVideo: "Interview Vincent Audoin",
      dateCreation: "Juillet 2022",
      contexte: "Montage d'interviews que j'ai réalisé chez DTMC Production pour l'événement Loire Art ",
      instagram : "@loire_art_show @dtmcproduction @emilierouge",
      outils: "Première pro, After effects"
    },
    videoSrc: "https://www.youtube.com/embed/Tp_6dePjEoM"
  },
];

export default data;
