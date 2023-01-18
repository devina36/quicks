import React, { useEffect, useRef } from 'react';

const OverlayDelete = ({ open, setOpen, remove }) => {
  const ref = useRef(null);
  const onClickOutside = setOpen;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!open) return null;
  return (
    <div
      ref={ref}
      className="absolute -bottom-[55px] right-0 border-[1px] border-primary-light rounded-md w-[126px] bg-white z-20"
    >
      <button className="text-start text-ind-red px-4 py-3 text-sm w-full" onClick={remove}>
        Delete
      </button>
    </div>
  );
};

export default OverlayDelete;
