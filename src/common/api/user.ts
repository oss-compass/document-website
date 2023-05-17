import { GraphQLClient, gql } from 'graphql-request';

const endpoint = '/api/graphql';
const graphQLClient = new GraphQLClient(endpoint);

export async function fetchUserInfo() {
  const query = gql`
    query userinfo {
      currentUser {
        id
        name
        email
        emailVerified
        loginBinds {
          account
          avatarUrl
          nickname
          provider
        }
      }
    }
  `;

  return await graphQLClient.request(query);
}

export async function signOut() {
  const query = gql`
    mutation signOut {
      signOut
    }
  `;
  return await graphQLClient.request(query);
}

export function findSpecifyProvider({
  loginBinds,
  provider,
}: {
  loginBinds?: any[];
  provider?: string;
}) {
  let providerUser;

  if (provider && loginBinds && loginBinds.length > 1) {
    providerUser = loginBinds?.find(
      (bindInfo) => bindInfo.provider === provider
    );
  } else {
    providerUser = loginBinds?.[0];
  }

  if (providerUser) {
    providerUser = {
      ...providerUser,
      // todo Let the backend modify
      // The naming of the returned fields in the interface data is reversed.
      account: providerUser?.nickname,
      nickname: providerUser?.account,
    };
  }

  return providerUser || null;
}
