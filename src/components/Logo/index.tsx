import React from 'react';
import clsx from 'clsx';
import LogoWhite from './logo-white.svg';
import LogoBlack from './logo-black.svg';

const Logo: React.FC<{ className?: string; color?: 'black' | 'white' }> = ({
  className,
  color = 'black',
}) => {
  return (
    <div className={clsx('h-[42px] w-[230px]  md:hidden', className)}>
      {color === 'black' ? <LogoBlack /> : <LogoWhite />}
    </div>
  );
};

export default Logo;
