import React from 'react';
import clsx from 'clsx';
import LogoBlack from './svgs/compass-black.svg';
import LogoWhite from './svgs/compass-white.svg';

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
