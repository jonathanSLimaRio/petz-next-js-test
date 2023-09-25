import React from 'react';

const Pokeball: React.FC = () => {
  return (
    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="17" r="17" fill="white"/>
      <line y1="17" x2="37" y2="17" stroke="#E40F0F" strokeWidth="2"/>
      <circle cx="19.5" cy="17.5" r="6.5" fill="#E40F0F"/>
      <circle cx="19.5" cy="17.5" r="4.5" fill="white"/>
    </svg>
  );
};

export default Pokeball;
