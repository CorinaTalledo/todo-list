  import ListItem from "@mui/material/ListItem";
  import ListItemText from "@mui/material/ListItemText";
  import IconButton from "@mui/material/IconButton";
  import DeleteIcon from "@mui/icons-material/Delete";
  import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
  import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";


  export default function Task({ taskDescription, state, id, deleteTask, handleToggle }) {

    return (
      <ListItem disablePadding id={id}>

          <IconButton aria-label="toggle" onClick={() => handleToggle(id)}>
              {state ? (
              <SentimentSatisfiedAltOutlinedIcon />
              ) : (
              <SentimentDissatisfiedOutlinedIcon />
              )}
          </IconButton>

        <ListItemText primary={taskDescription} style={{ textDecoration: state ? 'line-through' : 'none' }} />

        <IconButton aria-label="delete" onClick={() => deleteTask(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    );
  }
