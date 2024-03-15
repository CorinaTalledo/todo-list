import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FormControl from '@mui/material/FormControl';

import { useState } from 'react';

export default function Form({ addTask }) {

  // // Estado para guardar la nueva tarea que va a agregarse al listado general
  const [newTask, setNewTask] = useState({
    taskDescription: "",
    state: false,
    id: crypto.randomUUID()
  })


    // Actualiza el estado de la task, o sea las letritas  
    const handleInput = (e) =>{
      setNewTask({...newTask, taskDescription: e.target.value})
    }

  const handleSubmit = (e) =>{
    e.preventDefault()
    addTask(newTask)

    setNewTask({
      taskDescription: "",
      state: "",
      id: crypto.randomUUID()
    })
  }


  return (
      <FormControl component="form" sx={{ width: '50%' }} noValidate autoComplete="off" onSubmit={handleSubmit} >
        <TextField id="filled-basic" label="Insert Task" variant="filled" sx={{ width: '80%' }} onChange={handleInput} value={newTask.taskDescription} />
        <IconButton aria-label="add task" sx={{ width: '10%' }} type='submit' >
          <AddBoxOutlinedIcon />
        </IconButton>
      </FormControl>
  )
}