import './App.css'
import Form from './components/Form'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import Header from './components/Header'

import { useState } from 'react'

function App() {

  return (
    <>
      <Header />
      <Form />
      <TaskList />
      <Footer />
    </>
  )
}

export default App
