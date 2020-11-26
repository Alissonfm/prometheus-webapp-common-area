import { v4 as uuidv4 } from 'uuid';

const grades_mock = [
    {
        id: uuidv4(),
        name: 'Turma 1000',
        content: [
            { name: 'Matemática', icon: '' },
            { name: 'História', icon: '' },
        ],
    },
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
        ],
    },
];

const grades_mock2 = [
    {
        id: uuidv4(),
        name: 'Turma 3000',
        content: [
            { name: 'Geografia', icon: '' },
            { name: 'Artes', icon: '' },
            { name: 'Matemática', icon: '' },
            { name: 'História', icon: '' },
            { name: 'Educação Física', icon: '' },
        ],
    },
    {
        id: uuidv4(),
        name: 'Turma 4000',
        content: [
            { name: 'Educação Física', icon: '' },
        ],
    },
    {
        id: uuidv4(),
        name: 'Turma 4000',
        content: [
            { name: 'Educação Física', icon: '' },
        ],
    },
    {
        id: uuidv4(),
        name: 'Turma 4000',
        content: [
            { name: 'Educação Física', icon: '' },
        ],
    },
    {
        id: uuidv4(),
        name: 'Turma 4000',
        content: [
            { name: 'Educação Física', icon: '' },
        ],
    },
    {
        id: uuidv4(),
        name: 'Turma 4000',
        content: [
            { name: 'Educação Física', icon: '' },
        ],
    },
    {
        id: uuidv4(),
        name: 'Turma 4000',
        content: [
            { name: 'Educação Física', icon: '' },
        ],
    },
];

const BASE_LEVEL = [
    {
        id: uuidv4(),
        name: 'Presença',
        className: 'presence-launcher',
        content: grades_mock,
    },
    {
        id: uuidv4(),
        name: 'Notas',
        className: 'points-launcher',
        content: grades_mock2,
    }
];

export {grades_mock, grades_mock2, BASE_LEVEL};