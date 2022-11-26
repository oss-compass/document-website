import React from 'react';
import Translate from '@docusaurus/Translate';

const SubmitYouProject: React.FC<{ blackMode?: boolean }> = ({ blackMode }) => {
  return (
    <a
      href="/submit-your-project"
      className={
        'ml-5 shrink-0 cursor-pointer truncate border-2  border-solid border-white bg-black px-6 py-3 font-medium text-white'
      }
    >
      <Translate id={'header.submit_your_project'} />
    </a>
  );
};

export default SubmitYouProject;
