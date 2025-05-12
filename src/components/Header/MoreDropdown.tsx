import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { AiFillCaretDown } from 'react-icons/ai';

const MoreDropdown = () => {
  return (
    <div className="group relative flex h-full items-center transition">
      <div className="flex cursor-pointer items-center justify-center py-3 px-7 group-hover:bg-[#333333] 2xl:px-4 xl:mx-1">
        <a className={'font-medium text-white'}>
          {' '}
          <Translate id={'header.more'} />
        </a>
        <AiFillCaretDown color="#fff" className="ml-2" />
      </div>

      <div className="absolute top-[100%] z-dropdown hidden w-[160px] group-hover:block">
        <div className="mt-[2px] flex flex-col bg-black/95 text-white">
          <div className="border-b border-white/20 py-4 pl-6 hover:bg-[#333333] >3xl:hidden ">
            <Link href="/blog">
              <a className={'mx-4 flex-shrink-0 px-2.5 font-medium text-white'}>
                <Translate id={'header.news'} />
              </a>
            </Link>
          </div>
          <div className="border-b border-white/20 py-4 pl-6 hover:bg-[#333333] >3xl:hidden ">
            <Link
              href="/about"
              className={'mx-4 px-2.5 font-medium text-white'}
            >
              <Translate id={'header.about'} />
            </Link>
          </div>
          <div className="border-b border-white/20 py-4 pl-6 hover:bg-[#333333]">
            <Link
              href="/openApi"
              className={'mx-4 px-2.5 font-medium text-white'}
            >
              API
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDropdown;
