import { format, parseISO } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addChat } from '../../redux/chatSlice';
import Bubble from './Bubble';

const ChatBox = ({ closes }) => {
  const { id } = useParams();
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const boxChat = useRef(null);

  const scrollToBottom = () => {
    boxChat.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  });

  const { list } = useSelector((state) => state.chat);

  const data = list.filter((item) => item.id === parseInt(id));

  const chat = data[0];

  const sendChat = () => {
    dispatch(addChat({ postId: chat.id, body }));
    setBody('');
  };

  return (
    <>
      <div className="absolute top-0 w-full left-0 bg-white rounded-t-md">
        <div className=" w-full flex justify-between px-8 py-5 gap-x-5 border-b-[1px] border-primry-light">
          <button aria-label="back" onClick={() => navigate(-1)} className="min-w-16 group">
            <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-[#333] group-hover:fill-primary-blue "
                d="M20.9883 8.83041H5.68683L12.7152 1.80204L10.9298 0.0292358L0.871338 10.0877L10.9298 20.1462L12.7026 18.3734L5.68683 11.345H20.9883V8.83041Z"
                fill="#F2F2F2"
              />
            </svg>
          </button>
          <div className="w-full overflow-hidden">
            <h4 className="text-primary-blue capitalize font-semibold truncate">{chat.title}</h4>
            <p className="text-[#333] text-[11px]">6 Participants</p>
          </div>
          <button aria-label="Close" onClick={closes} className="min-w-16 group">
            <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-[#333] group-hover:fill-primary-blue"
                d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z"
                fill="#F2F2F2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className=" my-[70px] chat-h overflow-y-auto scroll-bar">
        <div className="w-full flex flex-col">
          {chat.chat.map((item, i) => {
            return <Bubble key={item.id} item={item} index={i} />;
          })}
          <div ref={boxChat} />
        </div>
      </div>

      <div className="absolute w-full bottom-0 left-0 px-5 pb-5 pt-3 flex items-center gap-x-3 rounded-b-md bg-white">
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Type a new message"
          className="py-3 px-4 w-full border-[1px] placeholder:text-[#333] border-primary-light rounded-md"
        />
        <button
          className="w-fit px-4 py-3 bg-primary-blue hover:bg-opacity-80 text-white rounded-md"
          onClick={sendChat}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default ChatBox;
