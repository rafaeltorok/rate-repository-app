// Testing dependencies
import { render, screen } from '@testing-library/react-native';

// Components
import RepositoryListContainer from "../RepositoryListContainer";

// Data
import repositories from "../../../../test-utils/fixtures/repositories";

// Test utils
import checkRepoInfo from '../../../../test-utils/repositories/checkRepoInfo';

// Tests
describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      // Transform the test data to match the current format used by the component
      const repositoriesList = repositories.edges.map(edge => edge.node);

      // Render the component
      render(<RepositoryListContainer repositories={repositoriesList} />);

      // Get all repositories being displayed on the UI
      const repositoryItems = screen.getAllByTestId('repositoryItem');

      // Isolate the first two
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      // Confirm they are being properly rendered with all available information
      // First repository
      checkRepoInfo(firstRepositoryItem, repositoriesList[0]);

      // Second repository
      checkRepoInfo(secondRepositoryItem, repositoriesList[1]);
    });
  });
});
