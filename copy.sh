#!/bin/sh

# en
mkdir -p i18n/en/docusaurus-plugin-content-docs/current
rsync -a -v --ignore-existing modules/docs/ i18n/en/docusaurus-plugin-content-docs/current/docs/
rsync -a -v --ignore-existing modules/community/ i18n/en/docusaurus-plugin-content-docs/current/community/

# zh
mkdir -p i18n/zh/docusaurus-plugin-content-docs/current
rsync -a -v modules/docs-zh/ i18n/zh/docusaurus-plugin-content-docs/current/docs/
