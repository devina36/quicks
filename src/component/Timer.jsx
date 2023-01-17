import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

const Timer = ({ timestamp }) => {
  let time = '';

  const dates = new Date().toISOString();
  const dateNow = parseISO(dates);
  const deadline = parseISO(timestamp);

  if (deadline >= dateNow) {
    const timer = formatDistanceToNow(deadline);
    time = `${timer} left`;
  }

  return (
    <span title={timestamp} className="text-sm text-ind-red capitalize">
      {time}
    </span>
  );
};

export default Timer;
