import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import { useLockBodyScroll } from 'react-use';

const Drawer: React.FC<
  PropsWithChildren<{ visible: boolean; onClose: () => void }>
> = ({ visible, onClose, children }) => {
  useLockBodyScroll(visible);
  return (
    <>
      {/* backdrop  */}
      <div
        className={classnames(
          'fixed top-0 left-0 bottom-0 right-0 z-mask bg-mask ',
          'invisible -translate-x-full opacity-0',
          { '!visible !translate-x-0 !opacity-100': visible }
        )}
        onClick={() => onClose()}
      />
      {/* content  */}
      <div
        className={classnames(
          'fixed top-0 left-0 bottom-0 z-drawer w-8/12 overflow-auto bg-white',
          'transition-all duration-200 ease-in-out',
          'invisible -translate-x-full opacity-0',
          { '!visible !translate-x-0 !opacity-100': visible }
        )}
      >
        {visible && <div>{children}</div>}
      </div>
    </>
  );
};

export default Drawer;
