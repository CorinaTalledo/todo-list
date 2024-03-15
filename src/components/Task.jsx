import React from "react";
import TaskButtons from "./TaskButtons";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

export default function Task({ task, trash }) {
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

  return (
    <div>
      {/* <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}> */}
        {/* {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`; */}


            <ListItem
              // secondaryAction={
              //   <IconButton edge="end" aria-label="comments">
              //     <CommentIcon />
              //   </IconButton>
              // }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                // onClick={handleToggle(value)}
                dense
              >
                {/* <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon> */}
                <ListItemText task={task} />
              </ListItemButton>
            </ListItem>
        {/* })} */}
      {/* </List> */}

      <TaskButtons />   {/* Toggle */}
      <TaskButtons />   {/* Trash */}
    </div>
  );
}
