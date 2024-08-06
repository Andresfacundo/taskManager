import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { taskContext } from '../../Context/Context';
import { useContext,useRef,useState } from 'react';
import './NewTask.css'

export const NewTask = () => {

const context = useContext(taskContext)

const [titleTask,setTitleTask]=useState('')
const [descriptionTask,setDescriptionTask]=useState('')

const txtTitle=useRef('')
const txtDescription=useRef('')


const handleTitleTask =(event)=>setTitleTask(event.target.value)
const handleDescriptionTask =(event)=>setDescriptionTask(event.target.value)
const handleCreateTask =(event)=>{
  event.preventDefault()
  const newTask={
    id:uuidv4(),
    title: titleTask,
    description:descriptionTask,
    status:false
  }

  context.setTasks([...context.tasks,newTask])
  context.setFilterTasks([...context.tasks,newTask])

  txtTitle.current.value=''
  txtDescription.current.value=''


}

  return (
    <form className='frm-task'>
      <fieldset>
        <label>Titulo de la tarea</label>
        <input ref={txtTitle} onChange={handleTitleTask} id='txt-title' placeholder='Ej: Aseo ambiente' type="text" />
      </fieldset>
      <fieldset>
        <label>Descripción de la tarea</label>
        <input ref={txtDescription} onChange={handleDescriptionTask} id='txt-description' placeholder='Ej: Realizar aseo del ambiente' type="text" />

      </fieldset>
      <button onClick={handleCreateTask} className='btn-new-task'>Crear Nueva Tarea</button>
    </form>
  )
}

