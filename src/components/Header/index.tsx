import React from 'react';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import Logo from '@site/src/components/Logo';
import SubmitYouProject from '@site/src/components/Misc/SubmitYouProject';
import MobileHeader from '@site/src/components/Layout/MobileHeader';
import { HeaderCommunityMenu } from '@site/src/components/MenuDropdown';
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
            <Link href="/docs/dimensions-define">
              <span className={'mx-6 px-2.5 font-medium text-white'}>
                Metrics Models
              </span>
            </Link>
            <HeaderCommunityMenu />
            <Link href="/docs/about">
              <span className={'mx-6 px-2.5 font-medium text-white'}>
                About
              </span>
            </Link>
          </div>
          <div className="flex cursor-pointer items-center">
            <div className="ml-10">
              <Link
                href="https://gitee.com/oss-compass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoGitee />
              </Link>
            </div>
            <div className="ml-10 mr-10 cursor-pointer">
              <Link
                href="https://github.com/oss-compass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoGithub />
              </Link>
            </div>
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
