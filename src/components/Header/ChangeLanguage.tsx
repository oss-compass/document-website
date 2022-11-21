import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import { MdLanguage } from 'react-icons/md';
import { useAlternatePageUtils } from '@site/src/common/useAlternatePageUtils';
import { AiFillCaretDown } from 'react-icons/ai';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { LinkLikeNavbarItemProps } from '@theme/NavbarItem';

const ChangeLanguage = () => {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const { createUrl } = useAlternatePageUtils();
  const { search, hash } = useLocation();

  const localeItems = locales.map((locale): LinkLikeNavbarItemProps => {
    const baseTo = `pathname://${createUrl({ locale, fullyQualified: false })}`;
    // preserve ?search#hash suffix on locale switches

    const to = `${baseTo}${search}${hash}`;
    return {
      label: localeConfigs[locale]!.label,
      lang: localeConfigs[locale]!.htmlLang,
      to,
      target: '_self',
    };
  });

  console.log(localeItems);

  return (
    <div className="group relative mx-5 flex h-full items-center transition">
      <div className="flex h-[32px] cursor-pointer items-center justify-center border border-solid border-gray-200 px-2">
        <MdLanguage className="mr-1 text-white" />
        <span className="mr-1 text-white">{currentLocale}</span>
        <AiFillCaretDown className="text-white" />
      </div>

      <div className="absolute top-[100%] z-dropdown hidden w-[120px] border-x-0 border-t-2 border-b border-solid bg-black/90 text-white group-hover:block">
        {localeItems.map((item) => (
          <Link
            key={item.lang}
            className="flex cursor-pointer items-center border-x-0 border-t-0 border-b border-solid border-white/30 py-3 pl-6 hover:bg-[#333333]"
            {...item}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChangeLanguage;
