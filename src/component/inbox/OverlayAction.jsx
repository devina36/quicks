import React, { useEffect, useRef } from 'react';

const OverlayAction = ({ open, setOpen }) => {
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
      className="absolute left-0 top-2 flex flex-col w-[120px] bg-white rounded-md border-[1px] border-primary-very-light"
    >
      <button className="border-b-[1px] border-primary-very-light py-2 px-3 text-xs text-start text-primary-blue">
        Edit
      </button>
      <button className="text-xs py-2 px-3 text-start text-ind-red">Delete</button>
    </div>
  );
};

export default OverlayAction;
