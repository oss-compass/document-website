#!/usr/bin/env bash

# scripts for local build

GIT_COMMIT=$(git log -1 --format=%h)
echo "commit:$GIT_COMMIT"

docker buildx build --platform linux/amd64 \
  -t "registry.cn-hongkong.aliyuncs.com/oss-compass/compass-docs:sha-$GIT_COMMIT" \
  -t "registry.cn-hongkong.aliyuncs.com/oss-compass/compass-docs:latest" \
  -f "./Dockerfile" \
  .

docker push registry.cn-hongkong.aliyuncs.com/oss-compass/compass-docs:latest
docker push registry.cn-hongkong.aliyuncs.com/oss-compass/compass-docs:$GIT_COMMIT
