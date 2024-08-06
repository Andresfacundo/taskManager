import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const taskContext = createContext()

const task = [
    { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripcion pendiente1', status: false },
    { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripcion pendiente2', status: true },
    { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripcion pendiente3', status: true }
]

export const TasksProvider = ({ children }) => {

    const [tasks, setTasks] = useState(task)
    const [filteredTasks, setFilterTasks] = useState(task)
    const [pendingTasks, setPendingTasks] = useState(0)
    const [doneTasks, setDoneTasks] = useState(0)
    const [isChecked, setIsChecked] = useState(false)

    const updateTaskStatus = (taskId, newStatus) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    }
    return (
        <taskContext.Provider value={{
            tasks
            , setTasks
            , pendingTasks
            , setPendingTasks
            , doneTasks
            , setDoneTasks
            , filteredTasks
            , isChecked
            , setIsChecked
            , setFilterTasks
            , updateTaskStatus
            ,
        }}>
            {children}
        </taskContext.Provider>


    )
}




