import jsCookie from 'js-cookie';

export const cookieKeys = {
  AUTH_PROVIDER: 'auth.provider',
};

export const getAuthProvider = () => {
  return jsCookie.get(cookieKeys.AUTH_PROVIDER);
};
