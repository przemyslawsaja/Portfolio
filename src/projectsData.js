import projectIMG1 from "./assets/mockups/homepantry.png";
import projectIMG2 from "./assets/mockups/Favnote.png";
import projectIMG3 from "./assets/mockups/TrainingCenter.png";

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
        'liveLink': 'https://favoritenotes.netlify.app',
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
        "name": 'TraingCenter',
        "img": projectIMG3,
        "codeLink": 'https://github.com/CodeEnthusiasts/TrainingCenter-fe',
        'liveLink': 'https://github.com/CodeEnthusiasts/TrainingCenter-fe',
        'description': 'Having a plan and reflection on the outcomes are the key elements of achieving great results. The process of training, developing muscles or any skill are governed by the same rules. Do you want to get to know your body better, design and analyze the plan which allows you to succeed faster and better? If the answer is yes, this application is perfect for you.',
        'technologies': [
            'TYPESCRIPT',
            'REACT ',
            'REACT HOOKS FORM',
            'STYLED COMPONENTS',
            'REACT ROUTER',
            'CONTEXT',
            'AXIOS'
        ]
    },

]

export { projectsData }