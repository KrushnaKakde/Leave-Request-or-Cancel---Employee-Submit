import React from 'react';

const NoteIcon = ({ className = '', width = 20, height = 20, alt = 'Note', ...props }) => {
  const src = new URL('./purpuleicon.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default NoteIcon;
