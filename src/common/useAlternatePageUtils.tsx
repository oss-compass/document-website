import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

export function useAlternatePageUtils(): {
  /**
   * Everything (pathname, base URL, etc.) is read from the context. Just tell
   * it which locale to link to and it will give you the alternate link for the
   * current page.
   */
  createUrl: ({
    /** The locale name to link to. */
    locale,
    /**
     * For hreflang SEO headers, we need it to be fully qualified (full
     * protocol/domain/path...); but for locale dropdowns, using a pathname is
     * good enough.
     */
    fullyQualified,
  }: {
    locale: string;
    fullyQualified: boolean;
  }) => string;
} {
  const {
    siteConfig: { baseUrl, url },
    i18n: { defaultLocale, currentLocale },
  } = useDocusaurusContext();
  const { pathname } = useLocation();

  const baseUrlUnlocalized =
    currentLocale === defaultLocale
      ? baseUrl
      : baseUrl.replace(`/${currentLocale}/`, '/');

  const pathnameSuffix = pathname.replace(baseUrl, '');

  function getLocalizedBaseUrl(locale: string) {
    return locale === defaultLocale
      ? `${baseUrlUnlocalized}`
      : `${baseUrlUnlocalized}${locale}/`;
  }

  // TODO support correct alternate url when localized site is deployed on
  // another domain
  function createUrl({
    locale,
    fullyQualified,
  }: {
    locale: string;
    fullyQualified: boolean;
  }) {
    const result = `${fullyQualified ? url : ''}${getLocalizedBaseUrl(
      locale
    )}${pathnameSuffix}`;

    return result.replace('//', '/');
  }

  return { createUrl };
}
