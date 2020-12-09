import { v4 as uuidv4 } from 'uuid';


const note_data = [
    [ 'Amanda Ribeiro', '7.0', '6.5', '7', '0', '0' ],
    [ 'Carlos José', '5.0', '8', '2', '0', '0' ],
    [ 'Jessica Silva', '10', '4', '0', '0', '0' ],
    [ 'Marco Antônio', '2.0', '7', '3', '0', '0' ],
    [ 'Lucas Caetano', '3.0', '7', '8', '0', '0' ],
    [ 'Ana Maria', '9.0', '6', '10', '0', '0' ],
    [ 'Washington Nunes', '1.0', '7', '9.5', '0', '0' ],
    [ 'Marco Paulo', '4.0', '3', '7.3', '0', '0' ],
    [ 'Fabio Alves', '6.7', '9', '6.7', '0', '0' ],
    [ 'Elisa Ricardo', '3.0', '5', '4.9', '0', '0' ],
    [ 'Júlia Nunes', '6.0', '9', '8.7', '0', '0' ],
    [ 'Michele Ribeiro', '5.0', '7', '6.9', '0', '0' ],
];

const presence_data = [
    [ 'Amanda Ribeiro', '1', '1', '1', '0', '0' ],
    [ 'Carlos José', '1', '1', '1', '0', '0' ],
    [ 'Jessica Silva', '1', '1', '0', '0', '0' ],
    [ 'Marco Antônio', '1', '1', '1', '0', '0' ],
    [ 'Lucas Caetano', '1', '1', '1', '0', '0' ],
    [ 'Ana Maria', '1', '1', '1', '0', '0' ],
    [ 'Washington Nunes', '1', '1', '1', '0', '0' ],
    [ 'Marco Paulo', '1', '1', '1', '0', '0' ],
    [ 'Fabio Alves', '1', '1', '1', '0', '0' ],
    [ 'Elisa Ricardo', '1', '1', '1', '0', '0' ],
    [ 'Júlia Nunes', '1', '1', '1', '0', '0' ],
    [ 'Michele Ribeiro', '1', '7', '1', '0', '0' ],
];

const table_point_config = {
    id: uuidv4(),
    name: 'Matemática',
    columns: ['Nome', 'Trabalhos', 'Prova 1', 'Prova 2', 'Recuperação', 'Total'],
    data: note_data
};

const table_presence_config = {
    id: uuidv4(),
    name: 'Matemática',
    columns: ['Nome'],
    data: presence_data
};

const grades_mock = [
    {
        id: uuidv4(),
        name: 'Turma 1000',
        content: [
            { name: 'Matemática', icon: '', contentType: 'presence-table', content: table_presence_config, contentEditable: true },
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
            { name: 'Matemática', icon: '', contentType: 'point-table', content: table_point_config, contentEditable: true },
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