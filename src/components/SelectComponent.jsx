import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function SelectComponent({ setTasks }) {
  const [filterValue, setfilterValue] = useState("all");

  const handleChange = (e) => {
    setfilterValue(e.target.value);

    let filteredTasks = JSON.parse(localStorage.getItem("task"));

    if (e.target.value === "true") {
      filteredTasks = filteredTasks.filter((task) => task.state === true);
    } else if (e.target.value === "false") {
      filteredTasks = filteredTasks.filter((task) => task.state === false);
    }

    setTasks(filteredTasks);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Filtra</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Select"
        value={filterValue}
        onChange={handleChange}
      >
        <MenuItem value="all">Todas</MenuItem>
        <MenuItem value="true">Completas</MenuItem>
        <MenuItem value="false">Incompletas</MenuItem>
      </Select>
    </FormControl>
  );
}
