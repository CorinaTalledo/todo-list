import React from 'react'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';


// Condicional 1 >> Si el la prop del boton dice trash entonces el icono tiene que ser el del tachito de basura. Sino el icono tiene que ser el tick.

// Condicional 2 >> Si el valor del estado del boton es checked, entonces poner x icono, sino poner el otro.

// ----------------------------------------

// Estado para guardar si esta tickeado o no


export default function TaskButtons() {

  // const [checked, setChecked] = useState(false);

  return (
    <div>

      {/* {trash === 'true' ? (
        <IconButton aria-label="delete" true>
          <DeleteIcon />
        </IconButton>
      ) : (
        <ToggleButton value="check" selected={checked} onChange={() => { setChecked(!checked); }} >
          {checked ? <CheckIcon /> : <RadioButtonUncheckedIcon />}
        </ToggleButton>
      )} */}

{/* 
      <ToggleButton value="check" selected={selected} onChange={() => { setSelected(!selected); }} >
        <CheckIcon />
      </ToggleButton>

      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton> */}
    </div>
  )
}
