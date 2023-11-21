import React, { PropsWithChildren } from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { useToggle } from 'react-use';
import Drawer from '../Drawer';

interface LinkProps {
  title: string;
  href: string;
  icon: React.ReactNode;
  legacyBehavior?: boolean;
}

const MenuItem: React.FC<
  PropsWithChildren<{ title: string; href: string; legacyBehavior?: boolean }>
> = ({ title, href, children, legacyBehavior = false }) => {
  if (legacyBehavior) {
    return (
      <a
        href={href}
        className="flex cursor-pointer items-center py-2 px-6 text-black hover:bg-gray-200"
      >
        {children}
        <h2 className="pl-2 text-base font-semibold">{title}</h2>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="flex cursor-pointer items-center py-2 px-6 text-black hover:bg-gray-200"
    >
      {children}
      <h2 className="pl-2 text-base font-semibold">{title}</h2>
    </Link>
  );
};

const MobileHeader: React.FC<PropsWithChildren> = ({ children }) => {
  const [show, toggle] = useToggle(false);
  const headLinks: LinkProps[] = [
    {
      title: translate({ id: 'header.home' }),
      href: '/',
      icon: null,
      legacyBehavior: true,
    },
    {
      title: translate({ id: 'header.projects' }),
      href: '/explore',
      icon: null,
      legacyBehavior: true,
    },
    {
      title: translate({ id: 'header.Docs' }),
      href: '/docs/dimensions-define',
      icon: null,
    },
    {
      title: translate({ id: 'header.community' }),
      href: '/docs/community',
      icon: null,
    },
    {
      title: translate({ id: 'header.news' }),
      href: '/blog',
      icon: null,
    },
    {
      title: translate({ id: 'header.lab' }),
      href: '/lab',
      icon: null,
      legacyBehavior: true,
    },
    {
      title: translate({ id: 'header.about' }),
      href: '/about',
      icon: null,
      legacyBehavior: true,
    },
  ];

  return (
    <>
      <div className="flex h-full w-full justify-between px-4">
        <div className="flex items-center">
          <div
            className="mr-2"
            onClick={() => {
              toggle();
            }}
          >
            <AiOutlineMenu className="text-xl" />
          </div>
          <h1 className="text-base font-semibold">OSS compass</h1>
        </div>
        <div className="flex items-center">
          <a
            href="/submit-your-project"
            className="cursor-pointer border border-solid border-black px-1 py-1 text-sm text-black "
          >
            <Translate id={'header.submit_your_project'} />
          </a>
        </div>
      </div>

      <Drawer
        visible={show}
        onClose={() => {
          toggle();
        }}
      >
        <div className="pt-14">
          <div
            className="absolute top-2 right-2 cursor-pointer p-2"
            onClick={() => toggle()}
          >
            <AiOutlineClose />
          </div>
          <div
            className=""
            onClickCapture={() => {
              toggle();
            }}
          >
            {headLinks.map((item) => {
              return (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  legacyBehavior={item.legacyBehavior}
                >
                  {item.icon}
                </MenuItem>
              );
            })}
            {children}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileHeader;
