import { Main } from '../../Layouts/Main/Main';
import { Header } from '../../Layouts/Header/Header';
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks';
import { ItemTask } from '../../Ui/ItemTask/ItemTask';
import { useContext } from 'react';
import { taskContext } from '../../Context/Context';
import { NewTask } from '../../Layouts/NewTask/NewTask';
import { InfoTasks } from '../../Layouts/InfoTasks/InfoTasks';
import { FilterTasks } from '../../Ui/FilterTasks/FilterTasks';




export const Home = () => {
  
  const context = useContext(taskContext)

  return (
    <>
      <Header>
        <h1>Hello world</h1>
        <NewTask />
        <InfoTasks/>
        <FilterTasks/>
      
      </Header>
      <Main>
        <ContainerTasks>
          {
            context.filteredTasks.map(task => <ItemTask key={task.id} idTask={task.id} titleTask={task.title} content={task.description} />)
          }
        </ContainerTasks>
      </Main>
    </>
  )
}
