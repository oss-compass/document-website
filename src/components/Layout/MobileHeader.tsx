import React, { PropsWithChildren } from 'react';
import Link from '@docusaurus/Link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { useToggle } from 'react-use';
import Drawer from '../Drawer';

const headLinks = [
  {
    title: 'Metrics Models',
    href: '/docs/dimensions-define',
    icon: <AiOutlineHome />,
  },
  {
    title: 'Community',
    href: '/docs/community',
    icon: <AiOutlineHome />,
  },
  {
    title: 'About',
    href: '/docs/about',
    icon: <AiOutlineHome />,
  },
];

const MenuItem: React.FC<
  PropsWithChildren<{ title: string; href: string }>
> = ({ title, href, children }) => {
  return (
    <Link
      href={href}
      className="flex cursor-pointer items-center py-2 px-6 hover:bg-gray-200"
    >
      {children}
      <h2 className="pl-2 text-base font-semibold">{title}</h2>
    </Link>
  );
};

const MobileHeader: React.FC<PropsWithChildren> = ({ children }) => {
  const [show, toggle] = useToggle(false);

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
          <Link
            href="/submit-your-project"
            className="cursor-pointer border border-solid border-black px-1 py-1 text-sm text-black "
          >
            Submit your project
          </Link>
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
                <MenuItem key={item.title} title={item.title} href={item.href}>
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
