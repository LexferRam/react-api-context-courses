import { useRoutes } from 'react-router-dom';

import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import './App.css';

function App() {
  const element = useRoutes([
    { path: '/', element: <TaskList /> },
    { path: '/add', element: <TaskForm /> },
    { path: '/edit/:id', element: <TaskForm /> },
  ]);
  return (
    <div>
      <div className='h-screen text-white text-center p-10'>
        <div className='container mx-auto h-full'>
          <Heading />
          {element}
        </div>
      </div>
    </div>
  );
}

export default App;
