import React from 'react';
import Link from '@docusaurus/Link';
import classnames from 'classnames';

const SubmitYouProject: React.FC<{ blackMode?: boolean }> = ({ blackMode }) => {
  return (
    <a
      href="/submit-your-project"
      className={
        'ml-5 shrink-0 cursor-pointer border-2 border-solid border-white bg-black px-6 py-3 font-semibold text-white'
      }
    >
      Submit your project
    </a>
  );
};

export default SubmitYouProject;
