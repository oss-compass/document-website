import React from 'react';
import Link from '@docusaurus/Link';
import LogoSquare from '@site/src/components/LogoSquare';
import LinkItem from '@site/src/theme/Footer/LinkItem';
import { ThemeConfig } from '@docusaurus/theme-common/src/utils/useThemeConfig';

const FooterLinks: React.FC<{ footerConfig: ThemeConfig['footer'] }> = ({
  footerConfig,
}) => {
  const { links } = footerConfig;
  return (
    <div className="grid grid-cols-5 gap-4 px-6 pt-20 pb-16 md:grid-cols-2 md:flex-col ">
      <LogoSquare />
      {links.map((linkCol) => {
        return (
          <div
            className="mr-4 ml-4 mb-4 flex w-44 flex-col "
            key={linkCol.title}
          >
            <h3 className="mb-4 text-sm font-bold">{linkCol.title}</h3>
            {linkCol.items.map((link) => {
              return <LinkItem key={link.label} item={link} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FooterLinks;
