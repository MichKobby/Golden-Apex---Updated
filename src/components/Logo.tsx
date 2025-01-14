import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 142, height = 40 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="28.530000686645508 12.119999885559082 142.94000244140625 175.760009765625"
      width={width}
      height={height}
      className={className}
    >
      <polygon 
        className="cls-1" 
        points="89.58 72.04 158.23 85.87 158.23 59.77 28.53 12.12 28.53 151.88 55 148.97 55 69.3 38.45 66.12 68.09 46.53 89.58 72.04" 
        style={{ fill: '#CD8E33' }}
      />
      <polygon 
        className="cls-2" 
        points="171.47 96.54 171.47 163.53 145.26 170.08 145.26 136.27 150.82 136 136.79 119.59 122.76 136.8 131.23 136.8 131.23 173.59 111.78 178.45 111.78 118.53 120.65 118.53 102.91 97.62 80.15 117.47 92.85 118.53 92.85 183.18 74.06 187.88 74.06 76.92 171.47 96.54" 
        style={{ fill: '#314270' }}
      />
    </svg>
  );
};

export default Logo;