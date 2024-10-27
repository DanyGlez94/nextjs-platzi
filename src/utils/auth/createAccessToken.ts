import { GraphQLClientSingleton } from 'app/graphql';
import { customerAccessTokenCreateMutation } from 'app/graphql/mutations/customerAccessTokenCreate';
import { cookies } from 'next/headers';

type CustomerAccessTokenCreateResponse = {
  customerAccessTokenCreate: {
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
  };
};

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies();
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const {
    customerAccessTokenCreate: {
      customerAccessToken: { accessToken, expiresAt },
    },
  }: CustomerAccessTokenCreateResponse = await graphqlClient.request(customerAccessTokenCreateMutation, {
    email: email,
    password: password,
  });

  if (accessToken) {
    cookiesStore.set('accessToken', accessToken, {
      path: '/',
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: 'strict',
    });

    return accessToken;
  }
};
