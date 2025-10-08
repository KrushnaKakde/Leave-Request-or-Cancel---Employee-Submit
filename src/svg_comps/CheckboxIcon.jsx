import React from 'react';

const CheckboxIcon = ({ className = '', width = 15, height = 15, alt = 'checkbox', ...props }) => {
  const src = new URL('./checkbox.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default CheckboxIcon;
