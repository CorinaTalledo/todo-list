import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import GradeIcon from '@mui/icons-material/Grade';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

export default function Task({ taskDescription, state, id, deleteTask }) {

  return (
    <div>
      <ListItem disablePadding id={id} state={state}>
          <IconButton aria-label="delete">
            <SentimentDissatisfiedOutlinedIcon />
          </IconButton>

          <ListItemText primary={taskDescription} />
          
          <IconButton aria-label="delete" onClick={() => deleteTask(id)}>
            <DeleteIcon />
          </IconButton>
      </ListItem>
    </div>
  );
}


  // const [checked, setChecked] = React.useState([0]);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };