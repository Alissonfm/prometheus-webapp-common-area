const REQUEST_TYPES = {
    'test-validation': 'Correção de prova',
    'test-second-chance': 'Segunda Chamada',
    'special-need': 'Necessidades especiais',
}

const REQUEST_STATUS = {
    'open': { statusText: 'Em aberto', statusStyle: 'statys--open'},
    'waiting': { statusText: 'Aguardando retorno', statusStyle: 'statys--waiting'},
    'done': { statusText: 'Concluído', statusStyle: 'statys--done'},
    'dispatched': { statusText: 'Fechado', statusStyle: 'statys--dispatched'},
};

export {
    REQUEST_TYPES,
    REQUEST_STATUS
};