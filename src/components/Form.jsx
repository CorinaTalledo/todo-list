import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FormControl from '@mui/material/FormControl';

export default function Form() {

  return (
      <FormControl component="form" sx={{ width: '50%' }} noValidate autoComplete="off">
        <TextField id="filled-basic" label="Insert Task" variant="filled" sx={{ width: '80%' }} />

        <IconButton aria-label="add task" sx={{ width: '10%' }}>
          <AddBoxOutlinedIcon />
        </IconButton>
      </FormControl>
  )
}