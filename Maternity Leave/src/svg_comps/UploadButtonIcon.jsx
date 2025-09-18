import React from 'react';

const UploadButtonIcon = ({ className = '', width = 95, height = 36, alt = 'Upload', ...props }) => {
  const src = new URL('./uplodebutton.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default UploadButtonIcon;
