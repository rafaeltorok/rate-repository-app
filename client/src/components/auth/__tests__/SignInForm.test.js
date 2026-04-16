// Testing dependencies
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';

// Component
import SignInForm from '../SignInForm';

// Tests
describe('SignIn', () => {
  describe('SignInForm', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // Mock the submit function to the form
      const onSubmit = jest.fn();

      // Render the Sign-in form
      render(<SignInForm onSubmit={onSubmit}/>);

      // Enter both username and password on the form input fields
      fireEvent.changeText(screen.getByPlaceholderText('username'), 'user');
      fireEvent.changeText(screen.getByPlaceholderText('password'), 'password');

      // Submit the credentials
      fireEvent.press(screen.getByText('Submit'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument

        // Confirm the form called the function only once
        expect(onSubmit).toHaveBeenCalledTimes(1);

        // onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'user',
          password: 'password',
        });
      });
    });
  });
});
