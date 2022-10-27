import React from 'react';

import { useThemeConfig } from '@docusaurus/theme-common';

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;

  return <div></div>;
}

export default React.memo(Footer);
