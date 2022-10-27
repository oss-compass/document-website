import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import type { Props } from '@theme/DocSidebar/Desktop/CollapseButton';

import styles from './styles.module.css';

export default function CollapseButton({ onClick }: Props): JSX.Element {
  return (
    <button
      type="button"
      title={translate({
        id: 'theme.docs.sidebar.collapseButtonTitle',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.collapseButtonAriaLabel',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      className={clsx(
        'button button--secondary button--outline',
        styles.collapseSidebarButton
      )}
      onClick={onClick}
    >
      <HiOutlineChevronDoubleRight
        className={clsx(
          styles.collapseSidebarButtonIcon,
          'inline text-xl text-gray-400'
        )}
      />
    </button>
  );
}
