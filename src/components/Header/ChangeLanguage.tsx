import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { MdLanguage } from 'react-icons/md';
import { useAlternatePageUtils } from '@site/src/common/useAlternatePageUtils';
import { AiFillCaretDown } from 'react-icons/ai';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Cookies from 'js-cookie';

const USER_LOCALE_KEY = 'locale';

const localeLabel = {
  zh: {
    id: 'zh',
    label: '简体中文',
    value: '中文',
  },
  en: {
    id: 'en',
    label: 'English',
    value: 'EN',
  },
};

const ChangeLanguage = () => {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();

  useEffect(() => {
    Cookies.set(USER_LOCALE_KEY, currentLocale, {
      expires: 365,
      path: '/',
      domain: document.domain,
    });
  }, [currentLocale]);

  const { createUrl } = useAlternatePageUtils();
  const { search, hash } = useLocation();

  const localeItems = locales.map((locale) => {
    const baseTo = `pathname://${createUrl({ locale, fullyQualified: false })}`;
    const to = `${baseTo}${search}${hash}`;
    return {
      to,
      target: '_self',
      lang: locale,
      extra: localeLabel[locale],
    };
  });

  return (
    <div className="group relative mx-5 flex h-full items-center transition">
      <div className="flex h-[32px] cursor-pointer items-center justify-center px-3 group-hover:bg-[#333333]">
        <MdLanguage className="mr-1 text-white" />
        <span className="mr-1 text-sm text-white">
          {localeLabel[currentLocale].value}
        </span>
        <AiFillCaretDown className="text-white" />
      </div>

      <div className="absolute top-[100%] z-dropdown hidden w-[160px] border-x-0 border-t-2 border-solid bg-black/90 text-white group-hover:block">
        {localeItems.map((item) => (
          <a
            key={item.lang}
            className="flex cursor-pointer items-center border-x-0 border-t-0 border-b border-solid border-white/30 py-4 pl-6 hover:bg-[#333333]"
            href={item.to.replace('pathname://', '')}
          >
            {item.extra.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChangeLanguage;
