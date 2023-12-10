import React from 'react';
import Translate from '@docusaurus/Translate';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import Logo from '@site/src/components/Logo';
import SubmitYouProject from './SubmitYouProject';
import MobileHeader from './MobileHeader';
import CommunityDropdown from './CommunityDropdown';
import ChangeLanguage from './ChangeLanguage';
import User from './User';

import LogoGitee from '../svgs/gitee-red.svg';
import LogoGithub from '../svgs/github.svg';

const Header: React.FC<{
  mobileMenu?: React.ReactNode;
  className?: string;
}> = ({ className, mobileMenu }) => {
  return (
    <header className="tailwind w-full">
      <div className={classnames('bg-black lg:hidden')}>
        <div
          className={classnames(
            'h-20 px-8',
            'flex items-center justify-between'
          )}
        >
          <div className="flex h-full flex-shrink-0 items-center">
            <a href="/" className="mr-6 2xl:mr-2">
              <Logo color="white" />
            </a>

            <Link
              href="/docs/dimensions-define"
              className={
                'mx-6 flex-shrink-0 px-2.5 font-medium text-white 2xl:mx-2'
              }
            >
              <Translate id={'header.docs'} />
            </Link>

            <a
              href="/explore"
              className={'mx-6 px-2.5 font-medium text-white 2xl:mx-2'}
            >
              <Translate id={'header.projects'} />
            </a>

            <Link
              href="/collaboration"
              className={
                'mx-6 flex-shrink-0 px-2.5 font-medium text-white 2xl:mx-2'
              }
            >
              <Translate id={'header.academe'} />
            </Link>

            <a
              href="/lab"
              className={'mx-6 px-2.5 font-medium text-white 2xl:mx-2'}
            >
              <Translate id={'header.lab'} />
            </a>

            <Link href="/blog" className={'mx-6 px-2.5 font-medium text-white'}>
              <Translate id={'header.news'} />
            </Link>

            <CommunityDropdown />

            <a
              href="/about"
              className={'mx-6 px-2.5 font-medium text-white 2xl:mx-2'}
            >
              <Translate id={'header.about'} />
            </a>
          </div>

          <div className="flex h-full items-center">
            <ChangeLanguage />
            <SubmitYouProject />
            <User />
          </div>
        </div>
      </div>
      <div className={classnames('h-full bg-white >lg:hidden')}>
        <MobileHeader>{mobileMenu}</MobileHeader>
      </div>
    </header>
  );
};
export default Header;
