import React from 'react';
import classnames from 'classnames';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { AiFillCaretDown } from 'react-icons/ai';
import Slack from '../svgs/slack.svg';
import Wechat from '../svgs/wechat.svg';
import Github from '../svgs/github.svg';
import GiteeRed from '../svgs/gitee-red.svg';

const itemClass =
  'flex cursor-pointer items-center py-4 pl-6 hover:bg-[#333333]';
const borderClass =
  'border-b border-x-0 border-t-0 border-solid border-white/20';

const CommunityDropdown = () => {
  return (
    <div className="group relative flex h-full items-center transition">
      <div className="flex cursor-pointer items-center justify-center py-3 px-7 group-hover:bg-[#333333]">
        <a className={'font-medium text-white'}>
          <Translate id="header.community" />
        </a>
        <AiFillCaretDown color="#fff" className="ml-2" />
      </div>

      <ul className="absolute top-[100%] z-dropdown hidden w-[360px] border-x-0 border-t-2 border-solid bg-black/90 text-white group-hover:block">
        <li className={classnames(itemClass, borderClass)}>
          <div className="mr-4 w-8">
            <Slack />
          </div>
          <Link href="/community/slack">
            <p className="text-base">
              <Translate id="community.slack" />
            </p>
            <p className="text-sm text-white/50">
              <Translate id="community.join_slack" />
            </p>
          </Link>
        </li>

        <li className={classnames(itemClass, borderClass)}>
          <div className="mr-4 w-8">
            <Wechat />
          </div>
          <Link href="/community/wechat">
            <div className="text-base">
              <Translate id="community.wechat" />
            </div>
            <div className="text-sm text-white/50">
              <Translate id="community.join_wechat" />
            </div>
          </Link>
        </li>

        <li className={classnames(itemClass, borderClass)}>
          <div className="mr-4 w-8">
            <Github />
          </div>
          <a
            href="https://github.com/oss-compass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-base">
              <Translate id="community.github" />
            </div>
            <div className="text-sm text-white/50">
              <Translate id="community.official_repository_on_github" />
            </div>
          </a>
        </li>

        <li className={classnames(itemClass, borderClass)}>
          <div className="mr-4 w-8">
            <GiteeRed />
          </div>
          <a
            href="https://gitee.com/oss-compass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-base">
              <Translate id="community.gitee" />
            </div>
            <div className="text-sm text-white/50">
              <Translate id="community.official_repository_on_gitee" />
            </div>
          </a>
        </li>

        <li className={classnames(itemClass)}>
          <div className="mr-4 w-8">
            <img
              className="h-full w-full"
              src={useBaseUrl('/img/tencentMeeting.png')}
              alt=""
            />
          </div>
          <Link href="/docs/community/metting/">
            <div className="text-base">
              <Translate id="community.meeting" />
            </div>
            <div className="text-sm text-white/50">
              <Translate id="community.join_meeting" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CommunityDropdown;
