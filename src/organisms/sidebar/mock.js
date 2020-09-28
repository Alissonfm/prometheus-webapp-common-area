import { IconButton } from '@material-ui/core';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import React from 'react';

const avatarProps = {
  className: 'menu--avatar',
  theme: 'dark',
  name: 'Augusto Lima',
  description: 'Professor e Coordenador',
  imageSrc: '../../assets/img/user-test.jpg',
  action: <IconButton onClick={() => console.log("Activity widget action")}><FormatAlignRightIcon /></IconButton>
};

const MESSAGES = [
  {
    id: 1,
    content: 'Olá, estou com uma dúvida no exercício 4 ...',
  },
  {
    id: 2,
    content: 'Você pode consultar a página 267 do livro ...',
    myMessage: true,
  },
];

const ACTIVITIES = [
  {
    person: { ...avatarProps },
    description: 'Completou a tarefa Funções logarítmicas',
    status: 'done',
  },
  {
    person: { ...avatarProps },
    description: 'Completou a tarefa Funções logarítmicas',
    status: 'done',
  },
  {
    person: { ...avatarProps },
    description: 'Enviou uma mensagem',
    status: 'doing',
    messages: MESSAGES,
  },
  {
    person: { ...avatarProps },
    description: 'Completou a tarefa Funções logarítmicas',
    status: 'done',
  },
];

const WDG = [
  { type: "activity", title: "Atividades recentes", content: ACTIVITIES },
  { type: "activity", title: "Atividades recenter", content: ACTIVITIES },
  { type: "activity", title: "Atividades recenter", content: ACTIVITIES },
];

export default WDG;