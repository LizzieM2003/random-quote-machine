import React from 'react';

const quotes = props => {
  return (
    <svg
      style={{
        position: 'absolute',
        top: '-75px',
        left: '10px',
        width: '32px',
        overflow: 'hidden',
        fill: props.color
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-quotes-left" viewBox="0 0 32 32">
          <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z" />
        </symbol>
      </defs>
      <use xlinkHref="#icon-quotes-left" />
    </svg>
  );
};

export default quotes;