import React from 'react';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/DocPage/Layout/Sidebar/ExpandButton';

import styles from './styles.module.css';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import clsx from 'clsx';

export default function DocPageLayoutSidebarExpandButton({
  toggleSidebar,
}: Props): JSX.Element {
  return (
    <div
      className={styles.expandButton}
      title={translate({
        id: 'theme.docs.sidebar.expandButtonTitle',
        message: 'Expand sidebar',
        description:
          'The ARIA label and title attribute for expand button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.expandButtonAriaLabel',
        message: 'Expand sidebar',
        description:
          'The ARIA label and title attribute for expand button of doc sidebar',
      })}
      tabIndex={0}
      role="button"
      onKeyDown={toggleSidebar}
      onClick={toggleSidebar}
    >
      <HiOutlineChevronDoubleRight
        className={clsx(
          styles.expandButtonIcon,
          'inline text-xl text-gray-400'
        )}
      />
    </div>
  );
}
