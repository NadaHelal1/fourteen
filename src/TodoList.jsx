
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import { useState } from 'react';
import React from 'react';
import TodoForm from './TodoForm';


const initialTodos=[
    {id:1,text:'Have breakfast',completed:false},
    {id:2,text:'feed Elena',completed:false},
    {id:3,text:'Clean the house',completed:false},
    {id:4,text:'cook lunch',completed:true},
    {id:5,text:'go out with my baby',completed:true}
]


function TodoList() {
    const [todos,setTodos]=useState(initialTodos)
    

    const removeTodo=(id)=>{
      setTodos((pretodo)=>{
        return pretodo.filter((t)=>t.id !== id)
      })

    }

    const toggleTodo=(id)=>{
      setTodos((pretodo)=>{
       return pretodo.map((todo)=>{
          if(todo.id===id){
            return {...todo,completed:!todo.completed};
          }else { 
            return todo
          } 
          }
      )})
      
    }
    const addTodo =(text)=>{
      setTodos((prevTodos)=>{
       return [...prevTodos,{text:text,id:8,completed:false}]
      })
    }
  
    return (

     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     {todos.map((todo) => {
     return <TodoItem 
     todo={todo} 
     key={todo.id}
     removeTodo={()=>removeTodo(todo.id)}
     toggle={()=>toggleTodo(todo.id)}
     />  
})}
    <TodoForm addTodo={addTodo}/>
        
     </List>
        
   
  );
}


export default TodoList;





