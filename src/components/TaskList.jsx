import Task from './Task'

import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import List from "@mui/material/List";



export default function TaskList({ tasks, deleteTask, handleToggle }) {

  return (
    <Box>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {tasks.map((task) =>(
        <Task 
          key={task.id}
          id={task.id}
          taskDescription={task.taskDescription}
          state={task.state}

          deleteTask={deleteTask}
          handleToggle={handleToggle}
      />
        ))}
      </List>
    </Box>
  )
}
