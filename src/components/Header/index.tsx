import React from 'react';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import Logo from '@site/src/components/Logo';
import SubmitYouProject from '@site/src/components/Misc/SubmitYouProject';
import MobileHeader from '@site/src/components/Layout/MobileHeader';
import { HeaderCommunityMenu } from '@site/src/components/MenuDropdown';
import ChangeLanguage from './ChangeLanguage';

import LogoGitee from './logo-gitee.svg';
import LogoGithub from './logo-github.svg';

const Header: React.FC<{
  mobileMenu?: React.ReactNode;
  className?: string;
}> = ({ className, mobileMenu }) => {
  return (
    <>
      <header
        className={classnames(
          className,
          'w-full flex-shrink-0 bg-black lg:hidden'
        )}
      >
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
            <Link href="/dimensions-define">
              <span className={'mx-6 px-2.5 font-medium text-white'}>
                Metrics Models
              </span>
            </Link>
            <HeaderCommunityMenu />
            <Link href="/about">
              <span className={'mx-6 px-2.5 font-medium text-white'}>
                About
              </span>
            </Link>
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
      </header>
      <header className={classnames('w-full flex-shrink-0 >lg:hidden')}>
        <MobileHeader>{mobileMenu}</MobileHeader>
      </header>
    </>
  );
};
export default Header;
