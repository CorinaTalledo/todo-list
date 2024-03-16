import React from 'react'

export default function Select() {
  return (
    <div>
        <FormControl sx={{ width: '40%' }}>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" /* value={select} */ label="Select" /* onChange={handleChange} */ >
                <MenuItem /* value={all} */>Todas</MenuItem>
                <MenuItem /* value={done} */>Completas</MenuItem>
                <MenuItem /* value={todo} */>Incompletas</MenuItem>
            </Select>
        </FormControl>
    </div>
  )
}
