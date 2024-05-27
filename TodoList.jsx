import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let[todos,settodos]=useState([{task:"Sample Task",id:uuidv4()}])
    let[newtodo,setnewtodo] = useState("");
    function AddnewTask(event){
        setnewtodo(event.target.value);
        
    }
    function ImplementTodo(){
        settodos((preTodo)=>{
           return [...preTodo,{task:newtodo,id:uuidv4()}]
        })
        setnewtodo("")
    }
    function DeleteToDo(id){
       settodos(todos.filter((todo) => todo.id !== id));
    }
    function Updatetodo(){
        settodos(todos.map((todo)=>{
            return{
                ...todo,task:todo.task.toUpperCase()
            }
        }))
    }
 return (
    <>
    <input placeholder="Add Task" value={newtodo} onChange={AddnewTask}></input>
    <br></br>
    <button onClick={ImplementTodo}>Add</button>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr></hr>
    <h1>Task</h1>
    <ul>
        {
            todos.map((todos)=>{
                return(
                    <li key={todos.id}>
                    <span>{todos.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>DeleteToDo(todos.id)}>Delete</button>
                    </li>
                )
            })
        }
    </ul>
    <button onClick={Updatetodo}>Update</button>
    </>
 )
}