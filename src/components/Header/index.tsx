import React from 'react';
import Translate from '@docusaurus/Translate';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import Logo from '@site/src/components/Logo';
import SubmitYouProject from './SubmitYouProject';
import MobileHeader from './MobileHeader';
import CommunityDropdown from './CommunityDropdown';
import ChangeLanguage from './ChangeLanguage';

import LogoGitee from '../svgs/gitee-red.svg';
import LogoGithub from '../svgs/github.svg';

const Header: React.FC<{
  mobileMenu?: React.ReactNode;
  className?: string;
}> = ({ className, mobileMenu }) => {
  return (
    <header className="w-full">
      <div className={classnames('bg-black lg:hidden')}>
        <div
          className={classnames(
            'h-20 px-8',
            'flex items-center justify-between'
          )}
        >
          <div className="flex h-full items-center">
            <a href="/" className="mr-6">
              <Logo color="white" />
            </a>

            {/*<a href="/explore">*/}
            {/*  <span className={'mx-6 px-2.5 font-medium text-white'}>*/}
            {/*    <Translate id={'header.explore'} />*/}
            {/*  </span>*/}
            {/*</a>*/}

            <Link href="/dimensions-define">
              <span className={'mx-6 px-2.5 font-medium text-white'}>
                <Translate id={'header.metrics_models'} />
              </span>
            </Link>

            <CommunityDropdown />

            <a href="/about">
              <span className={'mx-6 px-2.5 font-medium text-white'}>
                <Translate id={'header.about'} />
              </span>
            </a>
          </div>

          <div className="flex h-full cursor-pointer items-center">
            <div className="mx-5">
              <Link
                href="https://gitee.com/oss-compass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoGitee />
              </Link>
            </div>
            <div className="mx-5 cursor-pointer">
              <Link
                href="https://github.com/oss-compass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoGithub />
              </Link>
            </div>
            <ChangeLanguage />
            <SubmitYouProject />
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
