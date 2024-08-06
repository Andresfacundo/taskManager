import React, { useContext } from 'react'
import './FilterTasks.css'
import { taskContext } from '../../Context/Context'


export const FilterTasks = () => {

    const context = useContext(taskContext)

    const handleFilters = (e) =>{

        let currentOption = e.target.value
        // console.log(currentOption);
        if(currentOption === 'Pendientes'){
            context.setFilterTasks(context.tasks.filter(task => !task.status))
        }else if(currentOption === 'Realizadas'){
            context.setFilterTasks(context.tasks.filter(task => task.status))
        }else{
            context.setFilterTasks(context.tasks)
        }
        
    }

    return (
        <div className='container-filters'>
            <label>Filtrar Por</label>
            <select onChange={handleFilters}>
                <option value="Todas" className='opt opt1'>Todas</option>
                <option value="Pendientes" className='opt opt2'>Pendientes</option>
                <option value="Realizadas" className='opt opt3'>Realizadas</option>
            </select>
        </div>
    )
}
