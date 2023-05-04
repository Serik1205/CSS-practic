// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================


var header = {
  name: {
    firstname: `Ivan`,
    lastname: `Ivanov`,
  },
  position: `Junior Fullstack JS Developer`,
  salary: `600$ в місяць`,
  address: `Київ, вул.Коновальця, буд.50`,
};
var footer = {
  social: {
    email: {
      text: `ivanov@mail.com`,
      href: `mailto:ivanov@mail.com`,
    },
    phone: {
      text: `+380670000123`,
      href: `tel:+380670000123`,
    },
    linkedin: {
      text: `linkedin`,
      href: `https://www.linkedin.com/in/dmytro-test`,
    },
  },
}


//=================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: `Resume | Summary`,
    },

    header,

    position: `Junior Fullstack JS Developer`,
    salary: `600$ в місяць`,
    main: {
      summary: {
        title: `Summary`,
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      eEperience: {
        title: `Other experience`,
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})


// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: `Resume | Skills`,
    },

    header,
    main: {
      hobbies: [
        {
          name: `Vovan`,
          isMain: true
        },
        {
          name: `Vitan`,
          isMain: true
        },
        {
          name: `Vityan`,
          isMain: false
        },

      ],
      skills: [
        {
          name: `HTML`,
          point: 10,
          isTop: true,
        },
        {
          name: `endlebars`,
          point: 20,
          isTop: true,
        },
        {
          name: `VS code`,
          point: 15,
          isTop: true,
        },
        {
          name: `terminal`,
          point: 25,
          isTop: false,
        },
        {
          name: `GIT`,
          point: 35,
          isTop: false,
        },
        {
          name: `NPM`,
          point: 37,

        },
        {
          name: `React.js`,
          point: 0,

        },
        {
          name: `PHP`,
          point: null,

        },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get("/education", function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render(`education`, {
    // ↙ сюди вводимо JSON дані
    page: {
      title: `Resume | Education`,
    },

    header,
    main: {
      certificates: [
        {
          name: `Sholc`,
          id: 2433,
        },
        {
          name: `Ollllo`,
          id: 2443,
        },
        {
          name: `Boocks`,
          id: 2444,
        },
      ],
      educations: [
        {
          name: `KПИ`,
          isEnd: true,
        },
        {
          name: `САУ`,
          isEnd: true,
        },
        {
          name: `ПКСХ`,
          isEnd: false,
        },

      ],
    },
    footer,
  })

  router.get("/work", function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render(`work`, {
      // ↙ сюди вводимо JSON дані
      layout: `big`,
      page: {
        title: `Resume | Work`,
      },
      header,
      main: {
        works: [
          {
            position: `Junior Fullstack Developer `,
            company: {
              name: `IT Brains`,
              url: `https://it-brains.com.ua/`,
            },
            duration: {
              from: `10.10.2022`,
              to: null,
            },
            projectAmount: 3,
            project: [
              {
                name: `Resume`,
                url: `http://dobrava.com.ua/`,
                about: `Very useful information`,
                stackAmount: 4,
                stacks: [
                  {
                    name: `React.js`,
                  },
                  {
                    name: `HTML/CSS`,
                  },
                  {
                    name: `Nodejs`,
                  },
                ],
                awardAmount: 5,
                awards: [
                  {
                    name: `A lot of achievements`,
                  },
                  {
                    name: `Diploma for creating a very important project`,
                  },
                ],
              },
            ],
          },
        ],
      },
    },


      footer,
})
})
// Підключаємо роутер до бек-енду
module.exports = router
