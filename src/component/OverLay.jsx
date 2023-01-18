import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ChatBox from './inbox/ChatBox';
import Message from './inbox/Message';
import Task from './todo/Task';

const OverLay = () => {
  const [open, setOpen] = useState(false);
  const [inbox, setInbox] = useState(false);
  const [task, setTask] = useState(false);
  const [box, setBox] = useState(false);

  return (
    <div className="fixed bottom-[27px] right-[27px]">
      {box && (
        <div className="w-[38vw] max-w-[734px] relative bg-white h-[73vh] max-h-[737px] py-6 px-8 rounded-md mb-3 ">
          <Routes>
            <Route path="task" element={<Task />} />
            <Route path="inbox" element={<Message />} />
            <Route
              path="inbox/:id"
              element={
                <ChatBox
                  closes={() => {
                    setOpen(false);
                    setBox(false);
                    setInbox(false);
                    setTask(false);
                  }}
                />
              }
            />
          </Routes>
        </div>
      )}

      {/* task */}
      <div className="flex items-center justify-end">
        <div
          className={`transition-all rounded-full duration-200 ease-in-out relative group ${
            !open ? 'translate-x-[160px] opacity-0' : ''
          } ${task ? 'order-last ml-8 h-[68px] w-[68px]' : 'ml-3 w-[60px] h-[60px]'}`}
        >
          <div
            className={`absolute w-full h-full top-0 bg-primary-gray rounded-full cursor-pointer ${
              task ? '-left-[15px]' : 'right-0'
            }`}
            onClick={() => {
              setOpen(false);
              setBox(false);
              setInbox(false);
              setTask(false);
            }}
          ></div>
          <NavLink
            to="task"
            className={`absolute w-full h-full flex justify-center items-center rounded-full right-0 ${
              task ? 'bg-ind-org' : 'bg-myWhite'
            }`}
            onClick={() => {
              setBox(true);
              setTask(true);
              setInbox(false);
            }}
          >
            <span className={`absolute w-full text-white text-center -top-8 ${box && 'hidden'}`}>Task</span>
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className={task ? 'fill-myWhite' : 'fill-ind-org'}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.70175 0.400635H25.3333C26.7164 0.400635 27.848 1.53221 27.848 2.91526V19.2603C27.848 20.6433 26.7164 21.7749 25.3333 21.7749H2.70175C1.31871 21.7749 0.187134 20.6433 0.187134 19.2603V2.91526C0.187134 1.53221 1.31871 0.400635 2.70175 0.400635ZM2.70172 2.91528V19.2603H12.7602V2.91528H2.70172ZM25.3333 19.2603H15.2749V2.91528H25.3333V19.2603ZM24.0761 7.31582H16.5322V9.20178H24.0761V7.31582ZM16.5322 10.4591H24.0761V12.3451H16.5322V10.4591ZM24.0761 13.6024H16.5322V15.4883H24.0761V13.6024Z"
                fill="white"
              />
            </svg>
          </NavLink>
        </div>

        {/* inbox */}
        <div
          className={`transition-all rounded-full duration-200 ease-in-out relative group ${
            !open ? 'translate-x-[85px] opacity-0' : ''
          } ${inbox ? 'order-last ml-8 h-[68px] w-[68px]' : 'ml-3 w-[60px] h-[60px]'}`}
        >
          <div
            className={`absolute w-full h-full top-0 bg-primary-gray rounded-full cursor-pointer ${
              inbox ? '-left-[15px]' : 'right-0 '
            }`}
            onClick={() => {
              setOpen(false);
              setBox(false);
              setInbox(false);
              setTask(false);
            }}
          ></div>
          <NavLink
            to="inbox"
            className={`absolute w-full h-full flex justify-center items-center rounded-full right-0 ${
              inbox ? 'bg-ind-blue' : 'bg-myWhite'
            }`}
            onClick={() => {
              setBox(true);
              setInbox(true);
              setTask(false);
            }}
          >
            <span className={`absolute w-full text-white text-center -top-8 ${box && 'hidden'}`}>Inbox</span>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className={inbox ? 'fill-myWhite' : 'fill-ind-blue'}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6433 0.514526H1.29826C0.606744 0.514526 0.0409546 1.08032 0.0409546 1.77184V19.3742L5.07019 14.3449H17.6433C18.3348 14.3449 18.9006 13.7791 18.9006 13.0876V1.77184C18.9006 1.08032 18.3348 0.514526 17.6433 0.514526ZM16.386 3.02908V11.8302H4.02665L3.28484 12.5721L2.5556 13.3013V3.02908H16.386ZM21.4152 5.54381H23.9298C24.6213 5.54381 25.1871 6.10959 25.1871 6.80112V25.6608L20.1579 20.6315H6.32748C5.63596 20.6315 5.07017 20.0657 5.07017 19.3742V16.8596H21.4152V5.54381Z"
                fill="white"
              />
            </svg>
          </NavLink>
        </div>

        {!box && (
          <button
            onClick={() => setOpen(!open)}
            className="w-[68px] h-[68px] bg-primary-blue rounded-full flex justify-center items-center  z-50 order-last ml-6"
          >
            <svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4427 0.335929C13.3618 0.948634 13.6101 2.19037 12.9974 3.10943L5.73704 14H16C16.7376 14 17.4153 14.406 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0285 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8097 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.5941 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890629C10.2819 -0.0284284 11.5237 -0.276776 12.4427 0.335929Z"
                fill="white"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default OverLay;
