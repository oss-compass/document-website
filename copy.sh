#!/bin/sh

# en
mkdir -p i18n/en/docusaurus-plugin-content-docs/current
# en doc
rsync -a -v --ignore-existing modules/docs/ i18n/en/docusaurus-plugin-content-docs/current/docs/
# en community
rsync -a -v --ignore-existing modules/community/ i18n/en/docusaurus-plugin-content-docs/current/community/





# zh
mkdir -p i18n/zh/docusaurus-plugin-content-docs/current
# zh docs
rsync -a -v modules_i18n/docs-zh/ i18n/zh/docusaurus-plugin-content-docs/current/docs/
# zh community
rsync -a -v modules_i18n/community-zh/ i18n/zh/docusaurus-plugin-content-docs/current/community/

# sync images
rsync -a -v --ignore-existing modules/community/ i18n/zh/docusaurus-plugin-content-docs/current/community/
