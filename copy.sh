#!/bin/sh

rsync -a -v --ignore-existing modules/ i18n/en/docusaurus-plugin-content-docs/current/
rsync -a -v --ignore-existing modules/ i18n/zh/docusaurus-plugin-content-docs/current/
