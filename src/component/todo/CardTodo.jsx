import { format, parseISO } from 'date-fns';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editCheckedTodo, editDateTodo, editDescTodo } from '../../redux/todoSlice';
import Timer from '../Timer';
import OverlayDelete from './OverlayDelete';

const CardTodo = ({ data, index }) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(data.completed);
  const [date, setDate] = useState(data.date);
  const [editDesc, setEditDesc] = useState(false);
  const [desc, setDesc] = useState(data.description);
  const [dotDelete, setDotDelete] = useState(false);

  const dispatch = useDispatch();

  let formatDate;
  if (date === undefined || date === '') {
    formatDate = '';
  } else {
    const deadline = parseISO(data.date);
    formatDate = format(deadline, 'dd/MM/yyyy');
  }

  const editDates = (e) => {
    setDate(e.target.value);
    dispatch(editDateTodo({ id: data.id, date: e.target.value }));
  };

  const editDescrip = (e) => {
    setDesc(e.target.value);
  };

  const descSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setEditDesc(false);
      dispatch(editDescTodo({ id: data.id, description: desc }));
    }
  };

  const handleChecked = () => {
    setChecked(!checked);
    dispatch(editCheckedTodo({ id: data.id, completed: !checked }));
  };

  return (
    <>
      <div
        className={`flex justify-between gap-x-[22px] py-[22px] transition-all duration-500 ${
          index === 0 ? 'border-none' : 'border-t-[1px] border-primary-light'
        }`}
      >
        <div className="w-[18px] h-[18px] relative">
          <input
            type="checkbox"
            className="absolute w-full h-full opacity-0 z-10 cursor-pointer"
            checked={checked}
            onChange={handleChecked}
          />
          <span className="absolute w-full h-full top-0">
            {checked ? (
              <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.5089 0.526306H3.38607C1.72642 0.526306 0.36853 1.8842 0.36853 3.54385V24.6667C0.36853 26.3263 1.72642 27.6842 3.38607 27.6842H24.5089C26.1685 27.6842 27.5264 26.3263 27.5264 24.6667V3.54385C27.5264 1.8842 26.1685 0.526306 24.5089 0.526306ZM24.5089 24.6667H3.38607V3.54385H24.5089V24.6667ZM20.8576 7.43649L22.985 9.57895L10.9148 21.6491L4.87975 15.6291L7.02221 13.5018L10.9148 17.3793L20.8576 7.43649Z"
                  fill="#BDBDBD"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.54391 0.526306H24.6667C26.3264 0.526306 27.6843 1.8842 27.6843 3.54385V24.6667C27.6843 26.3263 26.3264 27.6842 24.6667 27.6842H3.54391C1.88426 27.6842 0.526367 26.3263 0.526367 24.6667V3.54385C0.526367 1.8842 1.88426 0.526306 3.54391 0.526306ZM24.6667 24.6667V3.54385H3.54391V24.6667H24.6667Z"
                  fill="#BDBDBD"
                />
              </svg>
            )}
          </span>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h4
              className={`capitalize font-lato text-sm ${
                checked ? 'line-through font-normal text-primary-light' : 'text-primary-gray font-bold'
              }`}
            >
              {data.title}
            </h4>
            <div className="flex justify-between items-center gap-x-4">
              {data.completed === false && <Timer timestamp={data.date} />}
              <p className="text-xs text-primary-gray">{formatDate}</p>
              <button
                className={` transition-all duration-200 ease-linear  ${!open ? 'rotate-180' : 'rotate-0'}`}
                onClick={() => setOpen(!open)}
                aria-label="expand"
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.825 0.912506L5 4.72917L1.175 0.912506L0 2.08751L5 7.08751L10 2.08751L8.825 0.912506Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <>
              <div className="flex mt-4 gap-x-5 items-center">
                <span>
                  <svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className={date === undefined || date === '' ? 'fill-primary-gray' : 'fill-primary-blue'}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2508 0.514648C6.31048 0.514648 0.690308 6.1474 0.690308 13.0877C0.690308 20.0281 6.31048 25.6608 13.2508 25.6608C20.2038 25.6608 25.8365 20.0281 25.8365 13.0877C25.8365 6.1474 20.2038 0.514648 13.2508 0.514648ZM13.2637 23.1462C7.70636 23.1462 3.20519 18.6451 3.20519 13.0878C3.20519 7.53045 7.70636 3.02928 13.2637 3.02928C18.821 3.02928 23.3221 7.53045 23.3221 13.0878C23.3221 18.6451 18.821 23.1462 13.2637 23.1462ZM12.0061 6.80121H13.8921V13.4021L19.55 16.7591L18.607 18.3056L12.0061 14.3451V6.80121Z"
                      fill="#2F80ED"
                    />
                  </svg>
                </span>
                <input
                  type="date"
                  value={date}
                  onChange={editDates}
                  className="w-[193px] py-3 px-4 placeholder:text-primary-gray text-primary-gray border-[1px] border-primary-light rounded-[5px]"
                />
              </div>
              <div className="flex mt-4 gap-x-5">
                <span className="cursor-pointer" onClick={() => setEditDesc(true)}>
                  <svg width="15" height="15" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className={
                        data.description === undefined || data.description === ''
                          ? 'fill-primary-gray'
                          : 'fill-primary-blue'
                      }
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.3092 0C18.9949 0 18.668 0.125731 18.4291 0.36462L16.1282 2.6655L20.8431 7.38041L23.144 5.07953C23.6343 4.58918 23.6343 3.79708 23.144 3.30673L20.2019 0.36462C19.9504 0.113158 19.6361 0 19.3092 0ZM14.7831 7.569L15.9398 8.72573L4.54857 20.117H3.39185V18.9602L14.7831 7.569ZM0.877197 17.9167L14.783 4.01081L19.498 8.72572L5.59211 22.6316H0.877197V17.9167Z"
                      fill="#2F80ED"
                    />
                  </svg>
                </span>
                <div className="w-full cursor-pointer" onClick={() => setEditDesc(true)}>
                  {editDesc ? (
                    <textarea
                      onKeyPress={descSubmit}
                      value={desc}
                      onChange={editDescrip}
                      className="p-3 border-[1px] border-primary-light rounded-md w-full"
                    />
                  ) : (
                    <p className="text-primary-light">{desc === '' ? 'No Description' : data.description}</p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <button className=" h-[3.5px] mt-2 pr-2 relative" onClick={() => setDotDelete(!dotDelete)}>
          <svg width="14" height="3.5" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-primary-light"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.07016 0.573059C1.68712 0.573059 0.555542 1.70464 0.555542 3.08768C0.555542 4.47072 1.68712 5.6023 3.07016 5.6023C4.4532 5.6023 5.58478 4.47072 5.58478 3.08768C5.58478 1.70464 4.4532 0.573059 3.07016 0.573059ZM18.1579 0.573059C16.7748 0.573059 15.6433 1.70464 15.6433 3.08768C15.6433 4.47072 16.7748 5.6023 18.1579 5.6023C19.5409 5.6023 20.6725 4.47072 20.6725 3.08768C20.6725 1.70464 19.5409 0.573059 18.1579 0.573059ZM8.0994 3.08768C8.0994 1.70464 9.23098 0.573059 10.614 0.573059C11.9971 0.573059 13.1286 1.70464 13.1286 3.08768C13.1286 4.47072 11.9971 5.6023 10.614 5.6023C9.23098 5.6023 8.0994 4.47072 8.0994 3.08768Z"
              fill="white"
            />
          </svg>

          <OverlayDelete
            open={dotDelete}
            setOpen={() => setDotDelete(false)}
            remove={() => dispatch(deleteTodo({ id: data.id }))}
          />
        </button>
      </div>
    </>
  );
};

export default CardTodo;
