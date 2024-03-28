import { TextField, IconButton, FormControl, Stack } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import { useFormik } from "formik";

export default function Form({ addTask, tasks }) {
  const formik = useFormik({
    initialValues: {
      taskDescription: "",
      state: false
      /* "id: crypto.randomUUID()" se agrega en la funcion onSubmit para que no duplique el id y por ende la key de las tareas */
    },
    validate: (values) => {
      const errors = {};
      if (!values.taskDescription) {
        errors.taskDescription =
          "Escribe una tarea para poder visualizarla";
      } else if (values.taskDescription.length > 45) {
        errors.taskDescription =
          "No puedes ingresar tareas de más de 45 caracteres";
      } else if (values.taskDescription.length < 5) {
        errors.taskDescription =
          "Por favor, ingresa una tarea que contenga más de 5 caracteres";
      } else if (
        tasks.some((task) => task.taskDescription === values.taskDescription)
      ) {
        errors.taskDescription =
          "Ya has ingresado esta tarea, ingresá otra o destildá la existente";
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      addTask({ ...values, id: crypto.randomUUID() });
      resetForm();
    },
  });

  return (
    <FormControl
      component="form"
      fullWidth
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <TextField
          id="taskDescription"
          name="taskDescription"
          label="Escribe una tarea"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={formik.handleChange}
          value={formik.values.taskDescription}
          onBlur={formik.handleBlur}
          error={
            formik.touched.taskDescription &&
            Boolean(formik.errors.taskDescription)
          }
          helperText={
            formik.touched.taskDescription && formik.errors.taskDescription
          }
        />

        <IconButton
          aria-label="add task"
          size="small"
          sx={{ p: 1.5 }}
          type="submit"
        >
          <AddBoxOutlinedIcon />
        </IconButton>
      </Stack>
    </FormControl>
  );
}
