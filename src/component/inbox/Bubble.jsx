import { format, parseISO } from 'date-fns';
import React, { useState } from 'react';
import OverlayAction from './OverlayAction';

const Bubble = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return item.email === 'bixxy@org.com' ? (
    <div key={item.id} className={`max-w-[80%] w-[80%] self-end ${index !== 0 && 'mt-8'}`}>
      <h5 className="text-chat-accent-prl text-end">You</h5>
      <div className="flex items-start w-full justify-between gap-x-2">
        <div className="w-fit max-w-full p-[10px] rounded-md bg-chat-prl">
          <p className=" text-xs text-primary-gray">{item.body}</p>
          <p className="text-[9px] mt-3 text-primary-gray">{format(parseISO(item.date), 'hh:mm')}</p>
        </div>
        <button aria-label="dot" className="order-first min-w-fit mt-1 relative" onClick={() => setOpen(!open)}>
          <svg width="11" height="3" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-[#333]"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.07016 0.573059C1.68712 0.573059 0.555542 1.70464 0.555542 3.08768C0.555542 4.47072 1.68712 5.6023 3.07016 5.6023C4.4532 5.6023 5.58478 4.47072 5.58478 3.08768C5.58478 1.70464 4.4532 0.573059 3.07016 0.573059ZM18.1579 0.573059C16.7748 0.573059 15.6433 1.70464 15.6433 3.08768C15.6433 4.47072 16.7748 5.6023 18.1579 5.6023C19.5409 5.6023 20.6725 4.47072 20.6725 3.08768C20.6725 1.70464 19.5409 0.573059 18.1579 0.573059ZM8.0994 3.08768C8.0994 1.70464 9.23098 0.573059 10.614 0.573059C11.9971 0.573059 13.1286 1.70464 13.1286 3.08768C13.1286 4.47072 11.9971 5.6023 10.614 5.6023C9.23098 5.6023 8.0994 4.47072 8.0994 3.08768Z"
              fill="white"
            />
          </svg>
          <OverlayAction open={open} setOpen={() => setOpen(false)} />
        </button>
      </div>
    </div>
  ) : (
    <div key={item.id} className={`max-w-[80%] ${index !== 0 && 'mt-8'}`}>
      <h5 className="text-chat-accent-org">{item.email.split('@')[0]}</h5>
      <div className="flex items-start gap-x-2">
        <div className="w-fit max-w-full p-[10px] rounded-md bg-chat-org">
          <p className=" text-xs text-primary-gray">{item.body}</p>
          <p className="text-[9px] mt-3 text-primary-gray">{format(parseISO(item.date), 'hh:mm')}</p>
        </div>
        <button className="mt-1">
          <svg width="11" height="3" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-[#333]"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.07016 0.573059C1.68712 0.573059 0.555542 1.70464 0.555542 3.08768C0.555542 4.47072 1.68712 5.6023 3.07016 5.6023C4.4532 5.6023 5.58478 4.47072 5.58478 3.08768C5.58478 1.70464 4.4532 0.573059 3.07016 0.573059ZM18.1579 0.573059C16.7748 0.573059 15.6433 1.70464 15.6433 3.08768C15.6433 4.47072 16.7748 5.6023 18.1579 5.6023C19.5409 5.6023 20.6725 4.47072 20.6725 3.08768C20.6725 1.70464 19.5409 0.573059 18.1579 0.573059ZM8.0994 3.08768C8.0994 1.70464 9.23098 0.573059 10.614 0.573059C11.9971 0.573059 13.1286 1.70464 13.1286 3.08768C13.1286 4.47072 11.9971 5.6023 10.614 5.6023C9.23098 5.6023 8.0994 4.47072 8.0994 3.08768Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Bubble;
