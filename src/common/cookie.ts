import jsCookie from 'js-cookie';

export const cookieKeys = {
  AUTH_PROVIDER: 'auth.provider',
  AUTH_ROLE: 'auth.role',
};

export const getAuthProvider = () => {
  return jsCookie.get(cookieKeys.AUTH_PROVIDER);
};

export const getAuthRole = () => {
  const role = jsCookie.get(cookieKeys.AUTH_ROLE);
  return role ? parseInt(role, 10) : null;
};
