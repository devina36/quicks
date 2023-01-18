import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../../redux/todoSlice';
import CardTodo from './CardTodo';
import Loader from '../Loader';
import NewTodo from './NewTodo';

const Task = () => {
  const dispatch = useDispatch();
  const [newtodo, setNewTodo] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const { todo, status, error } = useSelector((state) => state.todo);

  let content;

  if (status === 'loading') {
    content = <Loader teks={'Task List'} />;
  }

  if (status === 'failed') {
    content = <div>Error: {error}</div>;
  }

  if (status === 'succeeded') {
    content = (
      <div>
        {todo.map((item, i) => {
          return <CardTodo key={i} data={item} index={i} />;
        })}
        {newtodo && <NewTodo closes={setNewTodo} />}
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <div className=" w-[228px] relative flex justify-center">
          <button
            className=" h-fit py-[10px] px-[14px] border-[1px] rounded-md border-primary-light flex justify-between items-center gap-x-3"
            onClick={() => setOpen(!open)}
          >
            <span className="text-primary-gray">My Task</span>
            <span className={`transition-all duration-200 ease-linear  ${!open ? 'rotate-180' : 'rotate-0'}`}>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.825 0.912506L5 4.72917L1.175 0.912506L0 2.08751L5 7.08751L10 2.08751L8.825 0.912506Z"
                  fill="#4F4F4F"
                />
              </svg>
            </span>
          </button>

          {open && (
            <div className="absolute w-full -bottom-[97px] z-20 bg-white border-[1px] border-primary-light rounded-md shadow-md">
              <button className="w-full py-3 px-4 text-start text-primary-gray border-b-[1px] border-primary-light">
                Personal Errands
              </button>
              <button className="w-full py-3 px-4 text-start  text-primary-gray">Urgent To-Do</button>
            </div>
          )}
        </div>
        <button
          className=" bg-primary-blue py-[14px] px-4 hover:bg-opacity-80 text-white rounded-[5px]"
          onClick={() => setNewTodo(true)}
        >
          New Task
        </button>
      </div>
      <div className="w-full box-h overflow-y-auto scroll-bar">{content}</div>
    </div>
  );
};

export default Task;
