import { GraphQLClientSingleton } from 'app/graphql';
import { customerName } from 'app/graphql/queries/customerName';
import { cookies } from 'next/headers';

export const validateAccessToken = async () => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get('accessToken')?.value;

  if (accessToken) {
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    const { customer }: { customer: { firstName: string } } =
      await graphqlClient.request(customerName, {
        customerAccessToken: accessToken,
      });

    return customer;
  }
};
