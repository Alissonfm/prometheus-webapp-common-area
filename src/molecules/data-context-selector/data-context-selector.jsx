import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './data-context-selector.scss';

const MenuDataContextSelector = (props) => {

  const [context, updateContext] = React.useState({classroom: '', subject: ''});
  const { classroom, subject } = context;

  const updateClassroom = ($event) => { console.log("Evento de troca de turma: ", $event.target); updateContext(() => ({classroom: $event.target.value, subject: ''}) )};
  const updateSubject = ($event) => { console.log("Evento de troca da materia: ", $event.target); updateContext(({classroom}) => ({classroom, subject: $event.target.value}))};

  return (
    <div className="context-selector-wrapper">
      <FormControl variant="outlined" className="selector-wrapper">
        <Select
          labelId="Seletor de turma"
          id="class-selector"
          label="Turma"
          defaultValue={classroom}
          onChange={updateClassroom}
        >
          <MenuItem value={1}>T 1000</MenuItem>
          <MenuItem value={2}>T 2000</MenuItem>
          <MenuItem value={3}>T 3000</MenuItem>
          <MenuItem value={4}>T 4000</MenuItem>
          <MenuItem value={5}>T 5000</MenuItem>
        </Select>
      </FormControl>
      { !!classroom && ( 
        <FormControl variant="outlined" className="selector-wrapper">
          <Select
            labelId="Seletor de Matéria"
            id="subject-selector"
            label="Disciplina"
            defaultValue={subject}
            onChange={updateSubject}
          >
            <MenuItem value={1}>Matemática</MenuItem>
            <MenuItem value={2}>Português</MenuItem>
            <MenuItem value={3}>História</MenuItem>
            <MenuItem value={4}>Ciências</MenuItem>
            <MenuItem value={5}>Geografia</MenuItem>
          </Select>
        </FormControl> 
      )}
    </div>
  );
};

export default MenuDataContextSelector;