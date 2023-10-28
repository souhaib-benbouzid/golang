import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TodosList from '../components/TodosList';
import { Todo } from '../types/todos';

const Dashboard = () => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const response = await fetch('https://dummyjson.com/todos?limit=10');
        const body = await response.json();
        setData(body.todos);
      };

      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='bg-slate-300 h-screen'>
      <Navbar />
      <div
        data-testid='dashboard-content'
        className='flex flex-col justify-center items-center'
      >
        <TodosList data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
