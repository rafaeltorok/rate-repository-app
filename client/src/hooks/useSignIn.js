// Apollo client dependencies
import { useMutation } from '@apollo/client';
import { AUTHENTICATE_USER } from '../graphql/queries';

// Custom hook
export default function useSignIn() {
  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({ username, password }) => {
    return await mutate({ variables: { username, password} });
  }

  return [signIn, result];
};
