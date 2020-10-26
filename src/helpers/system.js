const REQUEST_TYPES = {
    'test-validation': 'Correção de prova',
    'test-second-chance': 'Segunda Chamada',
    'special-need': 'Necessidades especiais',
};

const REQUEST_STATUS = {
    'open': { statusText: 'Em aberto', statusStyle: 'statys--open'},
    'waiting': { statusText: 'Aguardando retorno', statusStyle: 'statys--waiting'},
    'done': { statusText: 'Concluído', statusStyle: 'statys--done'},
    'dispatched': { statusText: 'Fechado', statusStyle: 'statys--dispatched'},
};

const ACTIVITIES_TYPES = {
    'test': { displayText: 'Prova', icon: 'ballot_outlined' },
    'list': { displayText: 'Lista de exercícios', icon: 'edit' },
    'home-work': { displayText: 'Trabalho', icon: 'home_work' },
    'workshop': { displayText: 'Seminário', icon: 'reduce_capacity' }
};

const ACTIVITIES_STATUS = {
    'open': {statusText: 'Aplicado', statusStyle: 'status--open'},
    'done': {statusText: 'Corrigido', statusStyle: 'status--done'},
    'waiting': {statusText: 'Aguardando Aplicação/Programado', statusStyle: 'status--waiting'},
};

export {
    REQUEST_TYPES,
    REQUEST_STATUS,
    ACTIVITIES_TYPES,
    ACTIVITIES_STATUS
};