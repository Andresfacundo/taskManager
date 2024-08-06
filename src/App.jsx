
import './App.css'
import { TasksProvider } from './components/Context/Context'
import { Home } from './components/Pages/Home/Home'

function App() {
  return (
    <>
      <TasksProvider>
        <Home />
      </TasksProvider>
    </>
  )
}

export default App
