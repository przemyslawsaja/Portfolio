import projectIMG1 from "./assets/mockups/homepantry.png";
import projectIMG2 from "./assets/mockups/Favnote.png";
import projectIMG3 from "./assets/mockups/LightsOut.png";

const projectsData =  [
    {
        "name": 'HomePantry',
        "img": projectIMG1,
        "codeLink": 'https://github.com/przemyslawsaja/home_pantry',
        'liveLink': 'https://lucid-mirzakhani-845de8.netlify.com/',
        'description': 'User can add own products to "MyPantry" list specyfing its name,quantity,unit and also limit. ' +
            'If quantity of item is less than determined limit, its automatically added to shopping list, so user won\'t forget ' +
            'what he needs to buy being on shopping. It will also help to provide buying products that user already has in home.',
        'technologies': [
            'HTML/CSS/JS',
            'REACT',
            'REACT ROUTES',
            'SASS'
        ]
    },
    {
        "name": 'FavNote',
        "img": projectIMG2,
        "codeLink": 'https://github.com/przemyslawsaja/FavNote',
        'liveLink': 'https://www.netlify.com/',
        'description':  'The react app, which allows you to save notes, twitter accounts, or articles. ' +
                         'It is based on "Adam Romański" course.',
        'technologies': [
            'HTML/CSS/JS',
            'REACT & REDUX',
            'REACT ROUTES',
            'STYLED COMPONENTS',
            'STORYBOOK'
        ]
    },
    {
        "name": 'LightsOut',
        "img": projectIMG3,
        "codeLink": 'https://github.com/przemyslawsaja/Lights-Out',
        'liveLink': 'https://www.netlify.com/',
        'description': 'The game consists of a 5 by 5 grid of lights. When the game starts, a random number or a ' +
            'stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the adjacent lights. ' +
            'Your goal is to turn off all of the lights. Its not that easy as you think! :)',
        'technologies': [
            'HTML/CSS/JS',
            'REACT ',
        ]
    },

]

export { projectsData }