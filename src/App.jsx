import { useState } from 'react';
import { NavLink, Route, Routes, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import Message from './component/Message';
import Task from './component/Task';
// import About from './component/About';

function App() {
  const [open, setOpen] = useState(false);
  const [inbox, setInbox] = useState(false);
  const [task, setTask] = useState(false);
  const [box, setBox] = useState(false);

  return (
    <>
      <div className="fixed bottom-[27px] right-[27px]">
        {box && (
          <div className="w-[38vw] max-w-[734px] bg-white h-[73vh] max-h-[737px] py-6 px-8 rounded-md mb-3 ">
            <Routes>
              <Route path="task" element={<Task />} />
              <Route path="inbox" element={<Message />} />
            </Routes>
          </div>
        )}

        {/* task */}
        <div className="flex items-center justify-end">
          <div
            className={`transition-all rounded-full duration-200 ease-in-out relative group ${
              !open ? 'translate-x-24 opacity-0' : ''
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
                // navigate('/task');
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
              !open ? 'translate-x-24 opacity-0' : ''
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
                // navigate('/inbox');
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
            <button onClick={() => setOpen(!open)} className="h-fit -mb-1 z-10 order-last ml-6">
              <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2_260)">
                  <path
                    d="M72 34C72 52.7777 56.7777 68 38 68C19.2223 68 4 52.7777 4 34C4 15.2223 19.2223 0 38 0C56.7777 0 72 15.2223 72 34Z"
                    fill="#2F80ED"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41.4427 18.3359C42.3618 18.9486 42.6101 20.1903 41.9974 21.1094L34.737 32H45C45.7376 32 46.4153 32.4059 46.7634 33.0563C47.1114 33.7066 47.0732 34.4957 46.6641 35.1094L37.3308 49.1094C36.7181 50.0284 35.4763 50.2768 34.5573 49.6641C33.6382 49.0514 33.3899 47.8096 34.0026 46.8906L41.263 36H31C30.2624 36 29.5847 35.594 29.2367 34.9437C28.8886 34.2934 28.9268 33.5043 29.3359 32.8906L38.6692 18.8906C39.2819 17.9715 40.5237 17.7232 41.4427 18.3359Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_2_260"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_260" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_260" result="shape" />
                  </filter>
                </defs>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* <Routes>
        <Route path="/*" element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
