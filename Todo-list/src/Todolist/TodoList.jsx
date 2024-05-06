import React, { useState } from 'react'
import Todoitems from '../Todoitems';

const TodoList = () => {
    const[value,setValue] =useState("");
    const [todo,setTodo]= useState([])
    const handlechange = ()=>{
        
        setValue(event.target.value)
        console.log(value);
    }
    const HandleSubmit=()=>{
        let newItem = {
            text : value,
            id : new Date().toDateString()+value
        }
        
        setTodo([...todo,newItem])
        setValue("")
       

    }
    const handleDelete = (id)=>{
        console.log(id);
        const afterDeletion = todo.filter((element,index)=>{
            return element.id!==id
        })
        setTodo(afterDeletion)
    }
    const handleEditTodo =(element,id)=>{
        let updatedTodo = todo.map((element)=>{
            if(element.id===id){
                return{...element,text:value}
            }
            return element;

        })
        setTodo(updatedTodo);
    }
    
   
    console.log(todo);
   
   
  return (
    <div>
        <input type="text" name="" id="" value={value} onChange={handlechange}/>
        <button onClick={HandleSubmit}>submit</button>
        <ol>
            {/* {todo.map((element,index)=>{
                return (
                    <li key={index}>{element.text}</li>
                    
                ) 

            })} */}
            <Todoitems todo = {todo} handleDelete = {handleDelete} handleEditTodo={handleEditTodo}/>
      
        </ol>
        
    </div>
  )
}

export default TodoList