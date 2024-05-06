import React, { useState } from 'react'

const Todoitems = (props) => {
    const {todo,handleDelete,handleEditTodo}=props
    const [editText,setedittext]=useState("");
    const [editId,setNewId] = useState(null)


    const handleEdit = (id,newItem)=>{
      setedittext(newItem);
     setNewId(id)

  }
  const handleInputchange = (event)=>{
    setedittext(event.target.value);
    console.log(editText);
  }
const handleSave = (id)=>{
  handleEditTodo(id,editText);
  alert(`saved ${editText}`)
  setedittext("");
  setNewId(null)
  
}
  return (
    <>
      {todo.map((element,index)=>{
                return <div key={element.index}>
                {editId===element.id ?
                <>
                <input type="text" name="" id="" value={editText} onChange={handleInputchange}/>
                <button onClick={()=>handleSave(element.id)}>save</button>
                </>
                :
                
                <>
                <li key={element.id}>{element.text}</li>
                <button onClick={()=>{handleEdit(element.id,element.newItem)}}>Edit</button>
                <button onClick={()=>handleDelete(element.id)}>Delete</button>
                </>}
                </div>
                 
                    
                

            })}
    </>
  )
}

export default Todoitems