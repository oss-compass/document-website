import React, { type ComponentProps } from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
  // @ts-ignore
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type { Props } from '@theme/Navbar/Layout';
import Header from '@site/src/components/Header';

import styles from './styles.module.css';
import useBreakpoint from '@site/src/common/useBreakpoint';

function NavbarBackdrop(props: ComponentProps<'div'>) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  );
}

export default function NavbarLayout({ children }: Props): JSX.Element {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const breakpoint = useBreakpoint();
  console.log(breakpoint);

  return (
    <nav
      ref={navbarRef}
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebar.shown,
          'custom-desktop-nav': breakpoint === 'lg',
          'custom-mobile-nav': breakpoint === 'md',
        },
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ]
      )}
    >
      {/*{children}*/}
      <Header />
      {/*<NavbarBackdrop onClick={mobileSidebar.toggle} />*/}
      {/*<NavbarMobileSidebar />*/}
    </nav>
  );
}
