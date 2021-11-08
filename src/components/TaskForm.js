import { useState, useContext, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalContext'

const TaskForm = () => {
    const navigate = useNavigate()
    const params = useParams()

    const {tasks, addTask, updateTask} = useContext(GlobalContext)

    const [task, setTask] = useState({
        id:'',
        title: '',
        description: ''
    });

    const handleChange = (e) => {
        setTask({...task,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(task.id){
            updateTask(task)
        }else{
            addTask(task)
        }
        navigate("/")
    }

    useEffect(() => {
        const taskFound = tasks.find(task => task.id ===params.id)
        if(taskFound){
            console.log(taskFound)
            setTask(taskFound)
        }
    },[params.id, tasks])

    return (
        <div className='flex justify-center items-center h-3/4'>
            <form className='bg-gray-900 p-10' onSubmit={handleSubmit}>
                <h2 className='mb-6 text-3x1'>{task.id ? 'Editing a Task':'Creating A Task'}</h2>
                <div className='mb-5'>
                    <input
                        type='text'
                        name='title'
                        value={task.title}
                        placeholder='write a title'
                        className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                        onChange={handleChange}
                    />

                </div>

                <div className='mb-5'>
                    <textarea
                        name='description'
                        value={task.description}
                        rows='2'
                        placeholder='Description'
                        className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                        onChange={handleChange}
                    >

                    </textarea>
                </div>

                <button className='bg-green-600 w-full hover:bg-green-500 py-2 mt-5'>
                    {task.id ? "Edit Task":"Create Task"}
                </button>

            </form>
        </div>
    )
}

export default TaskForm
