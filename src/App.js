import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const initialTasks = [
    { id: 1,
     text: 'Doctors Appointment',
     day: 'Febuary 5th at 2:30pm',
     reminder: true
    },
   
    { id: 2,
     text: 'meeting at school',
     day: 'Febuary 6th at 01:30pm',
     reminder: true
    },
   
    { id: 3,
     text: 'Food shopping',
     day: 'Febuary 12 at 2:00pm',
     reminder: false
    },
   
   ];
  const [tasks, setTasks]= useState(initialTasks);

//Add Task
const addTask = (task) => {
const id = Math.floor(Math.random() * 10000)
+ 1
const newTask={ id, ...task}
setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !==
  id))
}
//toggler reminder

const toggleReminder= (id) => {
  setTasks(tasks.map ((task) => task.id === id ? {
    ...!task, reminder :task
  } : task))
}
 
 return (
    <div className="container">
     <Header onAdd={() => { 
       console.log(showAddTask);
       setShowAddTask(!showAddTask) }}
     showAdd={showAddTask} />
    {  showAddTask && <AddTask onAdd={addTask}   />}
     {tasks.length > 0 ?<Tasks tasks={tasks} onDelete=
     {deleteTask} onToggle = {toggleReminder} /> 
     : 'No Tasks Available'}
    </div>
  )
 }
 
 


export default App
