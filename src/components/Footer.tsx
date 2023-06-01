import React from 'react';
import FooterLinks from './FooterLinks';
import { ThemeConfig } from '@docusaurus/theme-common/src/utils/useThemeConfig';

const Footer: React.FC<{ footerConfig: ThemeConfig['footer'] }> = ({
  footerConfig,
}) => {
  return (
    <footer className="tailwind bg-[#f9fafb]">
      <div className="mx-auto w-[1200px] lg:w-full">
        test
        <FooterLinks footerConfig={footerConfig} />
      </div>
    </footer>
  );
};

export default Footer;
