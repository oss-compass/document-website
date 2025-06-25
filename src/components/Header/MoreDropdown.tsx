import React from 'react';
import Translate from '@docusaurus/Translate';
import { AiFillCaretDown } from 'react-icons/ai';
import { getAuthRole } from '../../common/cookie';

const MoreDropdown = () => {
  const authRole = getAuthRole();
  const showOpenHarmony = authRole !== null && authRole >= 1;

  return (
    <div className="group relative flex h-full items-center transition">
      <div className="flex cursor-pointer items-center justify-center py-3 px-7 group-hover:bg-[#333333] 2xl:px-4 xl:mx-1">
        <a className={'font-medium text-white'}>
          <Translate id={'header.more'} />
        </a>
        <AiFillCaretDown color="#fff" className="ml-2" />
      </div>

      <div className="absolute top-[100%] z-dropdown hidden w-[250px] group-hover:block">
        <div className="mt-[2px] flex flex-col gap-6 bg-black/95 p-6 text-white">
          <div className="mx-4 px-2.5 font-medium text-white 2xl:mx-2 xl:mx-1">
            <a href="/explore">
              <Translate id={'header.projects'} />
            </a>
          </div>
          <div className="mx-4 px-2.5 font-medium text-white 2xl:mx-2 xl:mx-1">
            <a href="/lab">
              <Translate id={'header.lab'} />
            </a>
          </div>
          {showOpenHarmony && (
            <div className="mx-4 px-2.5 font-medium text-white 2xl:mx-2 xl:mx-1">
              <a href="/oh">OpenHarmony</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreDropdown;
