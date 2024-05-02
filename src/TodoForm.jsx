import { ListItem } from '@mui/material'
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import Create from "@mui/icons-material/Create"
import { InputAdornment } from '@mui/material';
import{ IconButton} from '@mui/material';



function TodoForm({addTodo}) {
    const [text,setText]=useState("");
    const hndlechnge=(e)=>{
        setText(e.target.value )
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      addTodo(text);
      setText("");
    }
      return (
    <ListItem>
      <form onSubmit={handleSubmit}>

    <TextField id="filled-basic" label="Filled" variant="filled" 
    onChange={hndlechnge}
    value={text}
    InputProps={{
        endAdornment:(  
            <InputAdornment position="end">
               <IconButton aria-label="create todos" edge="end" type='submit'>
                <Create />
                </IconButton>
       
        </InputAdornment>)

    }}
      
   />
   </form>
    </ListItem>
  )
}

export default TodoForm;