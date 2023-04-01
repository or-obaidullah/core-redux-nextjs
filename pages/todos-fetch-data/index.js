import { getAllTodos } from '@/services/actions/todosActions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
  const { isloading, todos, error } = useSelector((state) => state);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h1>Welcome to TODO INFO</h1>
      {isloading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {
          todos &&
          todos.map((todo, index) => {
            return <div Key={index}>
              <h5>{todo.id}</h5>
              <h5>{todo.title}</h5>
            </div>
          })
        }
      </section>
    </div>
  );
};

export default Index;