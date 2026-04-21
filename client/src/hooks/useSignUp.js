// Apollo client dependencies
import { useMutation } from "@apollo/client/react";
import { CREATE_USER } from "../graphql/users";

// Custom hook
export default function useSignUp() {
  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    // Sends the mutation query to create a new user
    const result = await mutate({ variables: { username, password } });

    // Extracts the data from the mutation result
    const { data } = result;

    return data;
  };

  return [signUp, result];
}
