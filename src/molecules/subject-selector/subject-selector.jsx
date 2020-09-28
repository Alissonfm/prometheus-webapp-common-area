import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import './subject-selector.scss';

const SubjectSelector = (props) => {

  return (
    <div className="subject-wrapper">
      <FormControl variant="outlined" className="selector-wrapper">
        <div>
          <InputLabel id="demo-simple-select-outlined-label">Disciplina: </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Disciplina"
          >
            <MenuItem value="">
              <em>Selecione uma</em>
            </MenuItem>
            <MenuItem value={1}>Matemática</MenuItem>
            <MenuItem value={2}>Português</MenuItem>
            <MenuItem value={3}>História</MenuItem>
            <MenuItem value={4}>Ciências</MenuItem>
            <MenuItem value={5}>Geografia</MenuItem>
          </Select>
        </div>
      </FormControl>
    </div>
  );
}

export default SubjectSelector;