import { format, parseISO } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

const CardInbox = ({ data, index }) => {
  const formatLast = parseISO(data.chat[data.chat.length - 1].date);
  const dateLast = format(formatLast, 'dd/MM/YYY hh:mm');
  return (
    <div className={`py-[22px] ${index === 0 ? 'border-none' : 'border-t-[1px] border-primary-light'}`}>
      <div className="flex items-center gap-x-[17px]">
        <div className="min-w-[51px] relative">
          <span className="absolute top-0 left-0 w-[34px] h-[34px] rounded-full bg-primary-very-light flex justify-center items-center">
            <svg width="12" height="12" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-black/50"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3685 0.0292358C7.58987 0.0292358 5.33928 2.27982 5.33928 5.05848C5.33928 7.83713 7.58987 10.0877 10.3685 10.0877C13.1472 10.0877 15.3978 7.83713 15.3978 5.05848C15.3978 2.27982 13.1472 0.0292358 10.3685 0.0292358ZM12.8831 5.0585C12.8831 3.67546 11.7515 2.54388 10.3685 2.54388C8.98544 2.54388 7.85386 3.67546 7.85386 5.0585C7.85386 6.44154 8.98544 7.57312 10.3685 7.57312C11.7515 7.57312 12.8831 6.44154 12.8831 5.0585ZM17.9123 17.6316C17.6608 16.7389 13.7632 15.117 10.3684 15.117C6.98627 15.117 3.11375 16.7263 2.82457 17.6316H17.9123ZM0.309998 17.6316C0.309998 14.2871 7.01146 12.6023 10.3685 12.6023C13.7255 12.6023 20.427 14.2871 20.427 17.6316V20.1462H0.309998V17.6316Z"
                fill="#F2F2F2"
              />
            </svg>
          </span>
          <span className="w-[34px] h-[34px] rounded-full bg-primary-blue flex justify-center items-center translate-x-[17px]">
            <svg width="12" height="12" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3685 0.0292358C7.58987 0.0292358 5.33928 2.27982 5.33928 5.05848C5.33928 7.83713 7.58987 10.0877 10.3685 10.0877C13.1472 10.0877 15.3978 7.83713 15.3978 5.05848C15.3978 2.27982 13.1472 0.0292358 10.3685 0.0292358ZM12.8831 5.0585C12.8831 3.67546 11.7515 2.54388 10.3685 2.54388C8.98544 2.54388 7.85386 3.67546 7.85386 5.0585C7.85386 6.44154 8.98544 7.57312 10.3685 7.57312C11.7515 7.57312 12.8831 6.44154 12.8831 5.0585ZM17.9123 17.6316C17.6608 16.7389 13.7632 15.117 10.3684 15.117C6.98627 15.117 3.11375 16.7263 2.82457 17.6316H17.9123ZM0.309998 17.6316C0.309998 14.2871 7.01146 12.6023 10.3685 12.6023C13.7255 12.6023 20.427 14.2871 20.427 17.6316V20.1462H0.309998V17.6316Z"
                fill="#F2F2F2"
              />
            </svg>
          </span>
        </div>
        <div className="text-primary-gray">
          <div className="flex gap-x-4">
            <Link to={`/inbox/${data.id}`} className="text-primary-blue w-auto font-bold text-sm capitalize">
              {data.title}
            </Link>
            <p className="text-[11px] min-w-[115px]">{dateLast}</p>
          </div>
          <h5 className="text-[11px] font-bold">{data.chat[data.chat.length - 1].email.split('@')[0]}</h5>
          <p className="text-[11px]">{data.chat[data.chat.length - 1].body.slice(0, 50)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardInbox;
