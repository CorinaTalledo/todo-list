import './App.css'
import Form from './components/Form'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import Header from './components/Header'

import { useState } from 'react'
import SelectComponent from './components/SelectComponent'

function App() {

    // Todas las tareas
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("task")) || []) 


    const addTask = (newTask) =>{
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks)
      localStorage.setItem("task", JSON.stringify(updatedTasks))
    }


    const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id !== id))

      const updatedTasks = tasks.filter((task) => task.id !== id);
      localStorage.setItem("task", JSON.stringify(updatedTasks))
    }


    const handleToggle = (id) =>{
      const newArray = [...tasks]
      const completedTask = newArray.find((task) => task.id === id)

      completedTask.state = !completedTask.state

      setTasks(newArray)
      localStorage.setItem("task", JSON.stringify(newArray))
    }


  return (
    <>
      <Header />
      <Form addTask={addTask} tasks={tasks} />
      <SelectComponent setTasks={setTasks} />
      <TaskList tasks={tasks} deleteTask={deleteTask} handleToggle={handleToggle} />
      <Footer />
    </>
  )
}

export default App

