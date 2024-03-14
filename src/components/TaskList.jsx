import React from 'react'
import Task from './Task'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function TaskList() {

  return (
    <Box>
      <FormControl sx={{ width: '40%' }}>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" /* value={select} */ label="Select" /* onChange={handleChange} */ >
          <MenuItem /* value={all} */>Todas</MenuItem>
          <MenuItem /* value={done} */>Completas</MenuItem>
          <MenuItem /* value={todo} */>Incompletas</MenuItem>
        </Select>
      </FormControl>
        
      <Task />
    </Box>
  )
}
