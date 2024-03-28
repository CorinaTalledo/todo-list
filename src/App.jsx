import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SelectComponent from "./components/SelectComponent";
import { Box, Container } from "@mui/material";

import { useState } from "react";

function App() {
  
  // Todas las tareas
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };

  const handleToggle = (id) => {
    const newArray = [...tasks];
    const completedTask = newArray.find((task) => task.id === id);

    completedTask.state = !completedTask.state;

    setTasks(newArray);
    localStorage.setItem("task", JSON.stringify(newArray));
  };

  return (
    <Container
      fixed
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Header />

      <Box
        minHeight="20vh"
        display="flex"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={4}
      >
        <Form addTask={addTask} tasks={tasks} />
        <SelectComponent setTasks={setTasks} />
      </Box>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        handleToggle={handleToggle}
      />

      <Footer />
    </Container>
  );
}

export default App;
