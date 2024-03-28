import { Box, Typography, Stack, Paper, IconButton } from "@mui/material";
import {
  Delete as DeleteIcon,
  SentimentSatisfiedAltOutlined as SentimentSatisfiedAltOutlinedIcon,
  SentimentDissatisfiedOutlined as SentimentDissatisfiedOutlinedIcon,
} from "@mui/icons-material";

export default function Task({
  taskDescription,
  state,
  id,
  deleteTask,
  handleToggle,
}) {
  return (
    <Box
      id={id}
      width="95%"
      height="100%"
      px={2}
      position="relative"
      sx={{ backgroundColor: state ? "#afe56d" : "#fbeb72" }}
    >
      <Paper
        square
        sx={{
          width: 100,
          height: 25,
          position: "absolute",
          left: "80px",
          top: "-15px",
          transform: "rotate(140deg)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      />

      <Typography
        variant="h5"
        component="div"
        sx={{
          height: "80%",
          alignContent: "center",
          overflowWrap: "break-word",
        }}
        style={{ color: state ? "#506932" : "black" }}
      >
        {taskDescription}
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <IconButton aria-label="toggle" onClick={() => handleToggle(id)}>
          {state ? (
            <SentimentSatisfiedAltOutlinedIcon />
          ) : (
            <SentimentDissatisfiedOutlinedIcon />
          )}
        </IconButton>

        <IconButton aria-label="delete" onClick={() => deleteTask(id)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
