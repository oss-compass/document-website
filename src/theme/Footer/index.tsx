/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { useThemeConfig } from '@docusaurus/theme-common';
import Footer from '@site/src/components/Footer';
import Copyright from '@site/src/components/Copyright';

function FooterLayout(): JSX.Element | null {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright } = footer;
  return (
    <>
      <Footer footerConfig={footer} />
      <Copyright copyright={copyright} />
    </>
  );
}

export default React.memo(FooterLayout);
