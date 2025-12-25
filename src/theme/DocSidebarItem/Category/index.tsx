import React, { type ComponentProps, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import {
  ThemeClassNames,
  useThemeConfig,
  usePrevious,
  Collapsible,
  useCollapsible,
} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useIsBrowser from '@docusaurus/useIsBrowser';
import DocSidebarItems from '@theme/DocSidebarItems';
import type { Props } from '@theme/DocSidebarItem/Category';
import { HiOutlineChevronRight } from 'react-icons/hi';

// Helper function to check if two paths are the same
function isSamePath(path1: string | undefined, path2: string | undefined): boolean {
  if (!path1 || !path2) {
    return false;
  }
  // Normalize paths by removing trailing slashes and comparing
  const normalize = (p: string) => p.replace(/\/$/, '') || '/';
  return normalize(path1) === normalize(path2);
}

// Helper function to check if a sidebar item is active
function isActiveSidebarItem(item: any, activePath: string): boolean {
  if (item.type === 'link') {
    return isSamePath(item.href, activePath);
  }
  if (item.type === 'category') {
    return item.items.some((subItem: any) => isActiveSidebarItem(subItem, activePath));
  }
  return false;
}

// Context for managing expanded state of sidebar items
const DocSidebarItemsExpandedStateContext = React.createContext<{
  expandedItem: number | null;
  setExpandedItem: (index: number | null) => void;
} | null>(null);

function useDocSidebarItemsExpandedState() {
  const context = React.useContext(DocSidebarItemsExpandedStateContext);
  if (!context) {
    // Fallback if provider is not available
    const [expandedItem, setExpandedItem] = React.useState<number | null>(null);
    return { expandedItem, setExpandedItem };
  }
  return context;
}

// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({
  isActive,
  collapsed,
  updateCollapsed,
}: {
  isActive: boolean;
  collapsed: boolean;
  updateCollapsed: (b: boolean) => void;
}) {
  const wasActive = usePrevious(isActive);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}

/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(
  item: Props['item']
): string | undefined {
  const isBrowser = useIsBrowser();
  return useMemo(() => {
    if (item.href) {
      return item.href;
    }
    // In these cases, it's not necessary to render a fallback
    // We skip the "findFirstCategoryLink" computation
    if (isBrowser || !item.collapsible) {
      return undefined;
    }
    // Manually find the first link in the category
    const findFirstLink = (items: any[]): string | undefined => {
      for (const subItem of items) {
        if (subItem.type === 'link' && subItem.href) {
          return subItem.href;
        }
        if (subItem.type === 'category' && subItem.items) {
          const link = findFirstLink(subItem.items);
          if (link) return link;
        }
      }
      return undefined;
    };
    return findFirstLink(item.items);
  }, [item, isBrowser]);
}

function CollapseButton({
  categoryLabel,
  onClick,
  collapsed,
}: {
  categoryLabel: string;
  collapsed: boolean;
  onClick: ComponentProps<'button'>['onClick'];
}) {
  return (
    <button
      aria-label={translate(
        {
          id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',
          message: "Toggle the collapsible sidebar category '{label}'",
          description:
            'The ARIA label to toggle the collapsible sidebar category',
        },
        { label: categoryLabel }
      )}
      type="button"
      className="clean-btn rounded-md px-2 py-1 hover:bg-gray-200 "
      onClick={onClick}
    >
      <HiOutlineChevronRight
        className={clsx('text-xl text-gray-400 transition-all', {
          'rotate-90': !collapsed,
        })}
      />
    </button>
  );
}

export default function DocSidebarItemCategory({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): JSX.Element {
  const { items, label, collapsible, className, href } = item;
  const {
    docs: {
      sidebar: { autoCollapseCategories },
    },
  } = useThemeConfig();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);

  const isActive = isActiveSidebarItem(item, activePath);
  const isCurrentPage = isSamePath(href, activePath);

  const { collapsed, setCollapsed } = useCollapsible({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    },
  });

  const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState();
  // Use this instead of `setCollapsed`, because it is also reactive
  const updateCollapsed = (toCollapsed: boolean = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });
  useEffect(() => {
    if (
      collapsible &&
      expandedItem != null &&
      expandedItem !== index &&
      autoCollapseCategories
    ) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemCategory,
        ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
        'menu__list-item',
        {
          'menu__list-item--collapsed': collapsed,
        },
        className
      )}
    >
      <div
        className={clsx('menu__list-item-collapsible', {
          'menu__list-item-collapsible--active': isCurrentPage,
        })}
      >
        <Link
          className={clsx('menu__link', {
            'menu__link--sublist': collapsible,
            'menu__link--sublist-caret': !href && collapsible,
            'menu__link--active': isActive,
          })}
          onClick={
            collapsible
              ? (e) => {
                  onItemClick?.(item);
                  if (href) {
                    updateCollapsed(false);
                  } else {
                    e.preventDefault();
                    updateCollapsed();
                  }
                }
              : () => {
                  onItemClick?.(item);
                }
          }
          aria-current={isCurrentPage ? 'page' : undefined}
          aria-expanded={collapsible ? !collapsed : undefined}
          href={collapsible ? hrefWithSSRFallback ?? '#' : hrefWithSSRFallback}
          {...props}
        >
          {label}
        </Link>
        {href && collapsible && (
          <CollapseButton
            collapsed={collapsed}
            categoryLabel={label}
            onClick={(e) => {
              e.preventDefault();
              updateCollapsed();
            }}
          />
        )}
      </div>

      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        <DocSidebarItems
          items={items}
          tabIndex={collapsed ? -1 : 0}
          onItemClick={onItemClick}
          activePath={activePath}
          level={level + 1}
        />
      </Collapsible>
    </li>
  );
}
