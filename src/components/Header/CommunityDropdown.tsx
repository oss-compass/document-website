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
import BlogSvg from '../svgs/blog.svg';
import TencentMeeting from '../svgs/tencentmeeting.svg';

const categoryClass =
  'flex cursor-pointer text-gray-300 items-center py-4 pl-6';

const subItemClass =
  'flex cursor-pointer items-center py-2 pl-6 hover:bg-[#333333]';

const borderBottomClass = 'border-b border-white/20';

const Discussion = () => {
  return (
    <>
      <div className={classnames(categoryClass)}>
        <Translate id="community.discussion" />
      </div>
      <div className={classnames('pb-4', borderBottomClass)}>
        <Link href="/docs/community/slack" className={classnames(subItemClass)}>
          <div className="mr-4 w-8">
            <Slack />
          </div>
          <div>
            <p className="text-base">
              <Translate id="community.slack" />
            </p>
            <p className="text-sm text-white/50">
              <Translate id="community.join_slack" />
            </p>
          </div>
        </Link>
        <Link
          href="/docs/community/wechat"
          className={classnames(subItemClass)}
        >
          <div className="mr-4 w-8">
            <Wechat />
          </div>
          <div>
            <p className="text-base">{<Translate id="community.wechat" />}</p>
            <p className="text-sm text-white/50">
              <Translate id="community.join_wechat" />
            </p>
          </div>
        </Link>
        <Link
          href="/docs/community/metting/"
          className={classnames(subItemClass)}
        >
          <div className="mr-4 w-8">
            <TencentMeeting />
          </div>
          <div>
            <p className="text-base">
              <Translate id="community.meeting" />
            </p>
            <p className="text-sm text-white/50">
              <Translate id="community.join_meeting" />
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

const RepoLinks = () => {
  return (
    <>
      <div className={classnames(categoryClass)}>
        <Translate id="community.code_base" />
      </div>
      <div className={classnames('pb-4', borderBottomClass)}>
        <a
          href="https://github.com/oss-compass"
          target="_blank"
          className={classnames(subItemClass)}
          rel="noopener noreferrer"
        >
          <div className="mr-4 w-8">
            <Github />
          </div>
          <div>
            <p className="text-base">
              {' '}
              <Translate id="community.github" />
            </p>
            <p className="text-sm text-white/50">
              <Translate id="community.official_repository_on_github" />
            </p>
          </div>
        </a>
        <a
          href="https://gitee.com/oss-compass"
          target="_blank"
          rel="noopener noreferrer"
          className={classnames(subItemClass)}
        >
          <div className="mr-4 w-8">
            <GiteeRed />
          </div>
          <div>
            <p className="text-base">
              <Translate id="community.gitee" />
            </p>
            <p className="text-sm text-white/50">
              <Translate id="community.official_repository_on_gitee" />
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

const Blog = () => {
  return (
    <Link
      href="/blog"
      className={classnames(categoryClass, 'hover:bg-[#333333]')}
    >
      <div className="mr-4 w-8">
        <BlogSvg />
      </div>
      <div>
        <Translate id="header.blog" />
      </div>
    </Link>
  );
};

const CommunityDropdown = () => {
  return (
    <div className="group relative flex h-full items-center transition">
      <div className="flex cursor-pointer items-center justify-center py-3 px-7 group-hover:bg-[#333333] 2xl:px-4">
        <a className={'font-medium text-white'}>
          <Translate id="header.community" />
        </a>
        <AiFillCaretDown color="#fff" className="ml-2" />
      </div>

      <div className="absolute top-[100%] z-dropdown hidden w-[360px] border-x-0 border-t-2 border-solid bg-black/90 text-white group-hover:block">
        <div className="mt-[2px] bg-black/95 text-white">
          <Discussion />
          <RepoLinks />
          {/*<Blog />*/}
        </div>
      </div>
    </div>
  );
};

export default CommunityDropdown;
