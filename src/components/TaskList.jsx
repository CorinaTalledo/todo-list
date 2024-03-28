import Task from "./Task";
import { Box, Paper, Typography } from "@mui/material";

export default function TaskList({ tasks, deleteTask, handleToggle }) {
  return (
    <Box
      minHeight="38vh"
      justifyContent="space-evenly"
      py="2%"
      display="flex"
      flexWrap="wrap"
      mt="3%"
      gap="40px"
    >
      {tasks.length === 0 ? (
        <Typography
          variant="h4"
          align="center"
          mt={2}
          sx={{ color: "#3a3e2d" }}
        >
          No hay tareas que mostrar ;)
        </Typography>
      ) : (
        tasks.map((task) => (
          <Paper
            key={task.id}
            elevation={24}
            square={true}
            sx={{ width: "200px", height: "200px", transform: "rotate(5deg)" }}
            children={
              <Task
                key={task.id}
                id={task.id}
                taskDescription={task.taskDescription}
                state={task.state}
                deleteTask={deleteTask}
                handleToggle={handleToggle}
              />
            }
          />
        ))
      )}
    </Box>
  );
}
