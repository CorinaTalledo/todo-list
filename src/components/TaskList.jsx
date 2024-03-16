import Task from './Task'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from "@mui/material/List";



export default function TaskList({ tasks, deleteTask }) {

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
      />
        ))}
      </List>
    </Box>
  )
}
