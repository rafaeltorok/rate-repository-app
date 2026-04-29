// Testing dependencies
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";

// Component
import SignInForm from "../SignInForm";

// CSS styles
import theme from "../../../theme";

// Tests
describe("Testing the Sign in form", () => {
  describe("The onSubmit function", () => {
    it("calls the function with correct arguments when a valid form is submitted", async () => {
      // Mock the submit function to the form
      const onSubmit = jest.fn();

      // Render the Sign-in form
      render(<SignInForm onSubmit={onSubmit} error={null} />);

      // Enter both username and password on the form input fields
      fireEvent.changeText(screen.getByPlaceholderText("username"), "user");
      fireEvent.changeText(screen.getByPlaceholderText("password"), "password");

      // Submit the credentials
      fireEvent.press(screen.getByText("Submit"));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument

        // Confirm the form called the function only once
        expect(onSubmit).toHaveBeenCalledTimes(1);

        // onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "user",
          password: "password",
        });
      });
    });
  });

  describe("Error message", () => {
    it("the invalid credentials error message is properly displayed", () => {
      // Mock the submit function to the form
      const onSubmit = jest.fn();

      // Render the Sign-in form
      render(<SignInForm onSubmit={onSubmit} error={{ message: "Invalid username or password" }} />);

      // Get the error message element
      const errorMessage = screen.getByText(/invalid username or password/i);

      // Check if the error message is displayed
      expect(errorMessage).toBeOnTheScreen();

      // Confirm the message appears on the correct color
      expect(errorMessage).toHaveStyle({ color: theme.colors.error });
    });
  });
});
