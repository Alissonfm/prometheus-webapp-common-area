import { v4 as uuidv4 } from 'uuid';


const table_data = [
    [ 'Amanda Ribeiro', '7.0', '6.5', '', '', '' ],
    [ 'Carlos José', '7.0', '6.5', '', '', '' ],
    [ 'Jessica Silva', '7.0', '6.5', '', '', '' ],
    [ 'Marco Antônio', '7.0', '6.5', '', '', '' ],
];

const table_config = {
    id: uuidv4(),
    name: 'Matemática',
    columns: ['Nome', 'Trabalhos', 'Prova 1', 'Prova 2', 'Recuperação', 'Total'],
    data: table_data
};

const grades_mock = [
    {
        id: uuidv4(),
        name: 'Turma 1000',
        content: [
            { name: 'Matemática', icon: '', contentType: 'table', content: table_config, },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
    {
        id: uuidv4(),
        name: 'Turma 2000',
        content: [
            { name: 'Português', icon: '' },
            { name: 'Ciências', icon: '' },
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
        contentType: 'card',
        content: grades_mock,
    },
    {
        id: uuidv4(),
        name: 'Notas',
        className: 'points-launcher',
        contentType: 'card',
        content: grades_mock2,
    }
];

export {grades_mock, grades_mock2, BASE_LEVEL};