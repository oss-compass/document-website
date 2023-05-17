import React, { useState } from 'react';
import Translate from '@docusaurus/Translate';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLogout } from 'react-icons/md';
import {
  fetchUserInfo,
  signOut,
  findSpecifyProvider,
} from '../../common/api/user';
import { getAuthProvider } from '../../common/cookie';

const User = () => {
  const provider = getAuthProvider() || 'github';
  const [user, setUser] = useState(null);

  const info = findSpecifyProvider({
    loginBinds: user?.currentUser?.loginBinds,
    provider,
  });

  console.log(provider);
  console.log(info);

  React.useEffect(() => {
    fetchUserInfo().then((data: any) => {
      if (data && data.currentUser) {
        setUser(data);
      }
    });
  }, []);

  if (!user) {
    return (
      <a className={'ml-6 font-medium text-white'} href="/auth/signin">
        <Translate id={'header.signin'} />
      </a>
    );
  }

  return (
    <div className="group relative flex h-full items-center pl-6 transition">
      <div className="flex h-[32px] cursor-pointer items-center justify-center overflow-hidden rounded-full group-hover:bg-[#333333]">
        <img src={info.avatarUrl!} width={32} height={32} alt="" />
      </div>

      <div className="absolute top-[100%] -right-4 z-dropdown hidden w-auto group-hover:block">
        <div className="mt-[2px] bg-black/90 text-white">
          {/*<Link href="/settings/subscribe">*/}
          {/*  <a className="flex cursor-pointer border-b border-white/20 py-4 pl-6 text-center last:border-b-0 hover:bg-[#333333]">*/}
          {/*    {t('common:subscribe')}*/}
          {/*  </a>*/}
          {/*</Link>*/}

          <a
            href="/settings/profile"
            className="flex cursor-pointer items-center whitespace-nowrap border-b border-white/20 py-4 px-6 text-center last:border-b-0 hover:bg-[#333333]"
          >
            <AiOutlineUser className="mr-2 text-base" />
            <Translate id={'header.profile_setting'} />
          </a>

          <div
            className="flex cursor-pointer items-center  whitespace-nowrap border-b border-white/20 py-4 pl-6 text-center last:border-b-0 hover:bg-[#333333]"
            onClick={() => {
              signOut().then(() => {
                window.location.href = '/auth/signin';
              });
            }}
          >
            <MdOutlineLogout className="mr-2 text-base" />
            <Translate id={'header.signout'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
