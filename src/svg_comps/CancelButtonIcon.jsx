import React from 'react';

const CancelButtonIcon = ({ className = '', width = 95, height = 36, alt = 'Cancel', ...props }) => {
  const src = new URL('./Cancel.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default CancelButtonIcon;
