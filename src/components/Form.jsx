import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FormControl from '@mui/material/FormControl';

import { useFormik } from 'formik';  

export default function Form({ addTask, tasks }) {

  const formik = useFormik({
    initialValues:{
      taskDescription: "",
      state: false,
      id: crypto.randomUUID()
    },
    validate: (values) =>{
      const errors = {};
        if (!values.taskDescription) {
          errors.taskDescription = 'Escribe una tarea';
        } else if (values.taskDescription.length > 30) {
          errors.taskDescription = 'No puedes ingresar tareas de más de 30 caracteres';
        } else if (values.taskDescription.length < 5) {
          errors.taskDescription = 'Por favor, ingresa una tarea que contenga mas de 5 caracteres';
        } else if (tasks.includes(values.taskDescription))
          errors.taskDescription = 'Ya has ingresado esta tarea, ingresa otra o destildá la existente';
      return errors;
    },
    onSubmit: (values) =>{
      addTask(values)
    }
  });


  return (
      <FormControl component="form" sx={{ width: '50%' }} noValidate autoComplete="off" onSubmit={formik.handleSubmit} >
        <TextField id="taskDescription" name='taskDescription' label="Insert Task" variant="filled" sx={{ width: '80%' }} onChange={formik.handleChange} value={formik.values.taskDescription} onBlur={formik.handleBlur} />

        {formik.touched.taskDescription && formik.errors.taskDescription ? (<div>{formik.errors.taskDescription}</div>) : null}

        <IconButton aria-label="add task" sx={{ width: '10%' }} type='submit' >
          <AddBoxOutlinedIcon />
        </IconButton>
      </FormControl>
  )
}