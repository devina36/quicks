import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

const Timer = ({ timestamp }) => {
  let time = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timer = formatDistanceToNow(date);
    time = `${timer} left`;
  }

  return (
    <span title={timestamp} className="text-sm text-ind-red capitalize">
      {time}
    </span>
  );
};

export default Timer;
