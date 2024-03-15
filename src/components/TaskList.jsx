import React from 'react'
import Task from './Task'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from "@mui/material/List";



export default function TaskList({ tasks }) {

  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

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
        
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {tasks.map((task) =>(
        <Task 
          key={task.id}
          id={task.id}
          task={task.task}
          state={task.completed}
        />
        ))}
      </List>
      
    </Box>
  )
}
