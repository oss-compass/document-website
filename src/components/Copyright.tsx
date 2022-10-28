import React from 'react';
import Link from '@docusaurus/Link';
import { Center } from '@site/src/components/Layout';
import { AiFillGithub } from 'react-icons/ai';
import { SiGitee } from 'react-icons/si';

const Copyright: React.FC<{ copyright: string }> = ({ copyright }) => {
  return (
    <div className="w-full bg-gray-100 py-6 md:px-4">
      <Center className="flex h-full items-center justify-between">
        <div className="flex flex-col justify-center text-gray-500">
          <p className="mb-2 text-xs ">{copyright}</p>
        </div>
        <div className="flex">
          <Link
            href="https://gitee.com/oss-compass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGitee className="mr-4 h-6 w-6 cursor-pointer text-[#c71c27]" />
          </Link>
          <Link
            href="https://github.com/oss-compass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="h-6 w-6 cursor-pointer text-black" />
          </Link>
        </div>
      </Center>
    </div>
  );
};

export default Copyright;
