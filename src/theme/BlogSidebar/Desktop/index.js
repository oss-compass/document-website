/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function BlogSidebarDesktop ({ sidebar }) {
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div className={clsx(styles.sidebarHeader, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map(item => {
            console.log(item.permalink)
            const postYear = item.permalink.split('/')[2] + '-' + item.permalink.split('/')[3] + '-' + item.permalink.split('/')[4];
            const yearHeader = (
              <div className={styles.sidebarItemTitle}>{postYear}</div>
            );
            return (
              <>
                <li key={item.permalink} className={styles.sidebarItem}>
                  <Link
                    isNavLink
                    to={item.permalink}
                    className={styles.sidebarItemLink}
                    activeClassName={styles.sidebarItemLinkActive}>
                    {item.title}
                    {yearHeader}
                  </Link>
                </li>

              </>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}