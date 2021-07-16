import { useState }from 'react'
import InputForm from "./InputForm";

const AddTask = ({ onAdd }) => {
    
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('please add a task')
            return
        }

        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className ='add-form' onSubmit=
         {onSubmit}>
            <InputForm onChangeEvent={setText} value={text} lableName="Task" placeholer="Add Task" />

            <InputForm onChangeEvent={setDay} value={day} lableName="Day and Time" placeholer="Add Day and Time" />
           
            <div className='form-control
             form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                checked={reminder}
                value = {reminder}
                onChange={(e) => setReminder
                (e.currentTarget.checked)}/>
            </div>
            <InputForm type="submit" value="save task" classNames="btn btn-block" />
            

            
                
            
        </form>
    )
}

export default AddTask
