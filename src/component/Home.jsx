// import { useState } from 'react';
// import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
// import Task from './Task';
// import Message from './Message';

// const activeInbox =
//   'w-[60px] h-[60px] flex justify-center transition-all duration-200 ease-in-out items-center rounded-full bg-ind-blue shadow-btn';
// const nonactInbox =
//   'w-[60px] h-[60px] flex justify-center transition-all duration-200 ease-in-out items-center rounded-full bg-myWhite fill-ind-blue';

// const activeInboxOrg =
//   'w-[60px] h-[60px] flex justify-center transition-all duration-200 ease-in-out items-center rounded-full bg-ind-org shadow-btn ';
// const nonactInboxOrg =
//   'w-[60px] h-[60px] flex justify-center transition-all duration-200 ease-in-out items-center rounded-full bg-myWhite';

// const Home = () => {
//   const [open, setOpen] = useState(false);
//   const [box, setBox] = useState(false);

//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="absolute bottom-[27px] right-[27px]">
//         {box && (
//           <Routes>
//             <Route path="/task" element={<Task />} />
//             <Route path="/inbox" element={<Message />} />
//           </Routes>
//         )}

//         <div className="flex items-center justify-end gap-x-[26px]">
//           <NavLink
//             to="/task"
//             className={({ isActive }) => (isActive ? 'transition-all duration-200 ease-in-out order-last' : '')}
//           >
//             {({ isActive }) => (
//               <div
//                 className={`transition-all duration-200 ease-in-out relative group ${
//                   !open ? 'translate-x-24 opacity-0' : ''
//                 }`}
//               >
//                 <span className=" absolute w-full text-white text-center -top-8">Task</span>
//                 <span className={isActive && box ? activeInboxOrg : nonactInboxOrg} onClick={() => setBox(true)}>
//                   <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       className={isActive && box ? 'fill-myWhite' : 'fill-ind-org'}
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M2.70175 0.400635H25.3333C26.7164 0.400635 27.848 1.53221 27.848 2.91526V19.2603C27.848 20.6433 26.7164 21.7749 25.3333 21.7749H2.70175C1.31871 21.7749 0.187134 20.6433 0.187134 19.2603V2.91526C0.187134 1.53221 1.31871 0.400635 2.70175 0.400635ZM2.70172 2.91528V19.2603H12.7602V2.91528H2.70172ZM25.3333 19.2603H15.2749V2.91528H25.3333V19.2603ZM24.0761 7.31582H16.5322V9.20178H24.0761V7.31582ZM16.5322 10.4591H24.0761V12.3451H16.5322V10.4591ZM24.0761 13.6024H16.5322V15.4883H24.0761V13.6024Z"
//                       fill="white"
//                     />
//                   </svg>
//                 </span>
//               </div>
//             )}
//           </NavLink>

//           <NavLink
//             to="/inbox"
//             className={({ isActive }) => (isActive ? 'transition-all duration-200 ease-in-out order-last' : '')}
//           >
//             {({ isActive }) => (
//               <div
//                 className={`transition-all duration-200 ease-in-out relative group ${
//                   !open ? 'translate-x-24 opacity-0' : ''
//                 }`}
//               >
//                 <span className=" absolute w-full text-white text-center -top-8">Inbox</span>
//                 <span className={isActive && box ? activeInbox : nonactInbox} onClick={() => setBox(true)}>
//                   <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       className={isActive && box ? 'fill-myWhite' : 'fill-ind-blue'}
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M17.8187 0.514526H1.47368C0.782159 0.514526 0.21637 1.08032 0.21637 1.77184V19.3742L5.24561 14.3449H17.8187C18.5102 14.3449 19.076 13.7791 19.076 13.0876V1.77184C19.076 1.08032 18.5102 0.514526 17.8187 0.514526ZM16.5614 3.02908V11.8302H4.20201L3.46019 12.5721L2.73095 13.3013V3.02908H16.5614ZM21.5907 5.54381H24.1053C24.7968 5.54381 25.3626 6.10959 25.3626 6.80112V25.6608L20.3334 20.6315H6.50296C5.81144 20.6315 5.24565 20.0657 5.24565 19.3742V16.8596H21.5907V5.54381Z"
//                       fill="white"
//                     />
//                   </svg>
//                 </span>
//               </div>
//             )}
//           </NavLink>

//           {!box && (
//             <button onClick={() => setOpen(!open)} className="h-fit -mb-1 z-10 order-last">
//               <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <g filter="url(#filter0_d_2_260)">
//                   <path
//                     d="M72 34C72 52.7777 56.7777 68 38 68C19.2223 68 4 52.7777 4 34C4 15.2223 19.2223 0 38 0C56.7777 0 72 15.2223 72 34Z"
//                     fill="#2F80ED"
//                   />
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M41.4427 18.3359C42.3618 18.9486 42.6101 20.1903 41.9974 21.1094L34.737 32H45C45.7376 32 46.4153 32.4059 46.7634 33.0563C47.1114 33.7066 47.0732 34.4957 46.6641 35.1094L37.3308 49.1094C36.7181 50.0284 35.4763 50.2768 34.5573 49.6641C33.6382 49.0514 33.3899 47.8096 34.0026 46.8906L41.263 36H31C30.2624 36 29.5847 35.594 29.2367 34.9437C28.8886 34.2934 28.9268 33.5043 29.3359 32.8906L38.6692 18.8906C39.2819 17.9715 40.5237 17.7232 41.4427 18.3359Z"
//                     fill="white"
//                   />
//                 </g>
//                 <defs>
//                   <filter
//                     id="filter0_d_2_260"
//                     x="0"
//                     y="0"
//                     width="76"
//                     height="76"
//                     filterUnits="userSpaceOnUse"
//                     colorInterpolationFilters="sRGB"
//                   >
//                     <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                     <feColorMatrix
//                       in="SourceAlpha"
//                       type="matrix"
//                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                       result="hardAlpha"
//                     />
//                     <feOffset dy="4" />
//                     <feGaussianBlur stdDeviation="2" />
//                     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
//                     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_260" />
//                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_260" result="shape" />
//                   </filter>
//                 </defs>
//               </svg>
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from 'react';

const Home = () => {
  return <div>Home</div>;
};

export default Home;
