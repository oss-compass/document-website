import React from 'react';
import Link from '@docusaurus/Link';
import { AiFillCaretDown } from 'react-icons/ai';
import Slack from './logo-slack.svg';
import Wechat from './logo-wechat.svg';

export const HeaderCommunityMenu = () => {
  return (
    <div className="group relative flex h-full items-center transition">
      <div className="flex cursor-pointer items-center justify-center py-3 px-7 group-hover:bg-[#333333]">
        <a className={'font-medium text-white'}>Community</a>
        <AiFillCaretDown color="#fff" className="ml-2" />
      </div>
      <ul className="absolute top-[100%] z-dropdown hidden w-[360px] border-x-0 border-t-2 border-b-0 border-solid border-transparent text-white group-hover:block">
        <li className="flex cursor-pointer items-center border-x-0 border-b border-t-0 border-b-0 border-solid border-white/30 bg-black/90 py-4 pl-6 hover:bg-[#333333]">
          <div className="mr-4 w-8">
            <Slack />
          </div>
          <Link href="/docs/community/slack">
            <p className="text-base">Slack</p>
            <p className="text-sm text-white/50">
              Join our community channel on Slack
            </p>
          </Link>
        </li>
        <li className="flex cursor-pointer items-center bg-black/90 py-4 pl-6 hover:bg-[#333333]">
          <div className="mr-4 w-8">
            <Wechat />
          </div>
          <Link href="/docs/community/wechat">
            <div className="text-base">Wechat</div>
            <div className="text-sm text-white/50">
              Scan our group chat QR code to join
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
