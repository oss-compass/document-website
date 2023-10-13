#!/bin/sh

mkdir -p i18n/en/docusaurus-plugin-content-docs/current
mkdir -p modules/community/blog
mkdir -p modules_i18n/community-zh/blog

# en doc
rsync -a --delete --exclude={'.github'} modules/docs/ i18n/en/docusaurus-plugin-content-docs/current/docs/
# en community
rsync -a --delete --exclude={'.github'} modules/community/ i18n/en/docusaurus-plugin-content-docs/current/community/
# en blog
rsync -a --delete --exclude={'.github'} modules/community/blog/ blog/



# zh
mkdir -p i18n/zh/docusaurus-plugin-content-docs/current
# zh docs
rsync -a --delete --exclude={'.github'} modules_i18n/docs-zh/ i18n/zh/docusaurus-plugin-content-docs/current/docs/
# zh community
rsync -a --delete --exclude={'.github'} modules_i18n/community-zh/ i18n/zh/docusaurus-plugin-content-docs/current/community/
# zh blog
rsync -a --exclude={'.github'} modules_i18n/community-zh/blog/ i18n/zh/docusaurus-plugin-content-blog/

