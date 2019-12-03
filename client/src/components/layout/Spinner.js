import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <div className="hotkeys-wrap">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40" style={{position: 'absolute'}}>
        <defs>
          <filter id="goo"><feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur><feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo"></feColorMatrix><feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend></filter>
        </defs>
      </svg>
        <div className="loader">
          <div className="loader-blob"></div>
          <div className="loader-blob"></div>
        </div>
      </div>
  </Fragment>
);
