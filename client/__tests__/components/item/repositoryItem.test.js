// Testing dependencies
import { render, screen } from '@testing-library/react-native';
import { within } from '@testing-library/dom';

// Components
import RepositoryListContainer from "../../../src/components/repositories/RepositoryListContainer";

// Tests
describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Render the component
      render(<RepositoryListContainer repositories={repositories.edges} />);

      // Get all repositories being displayed on the UI
      const repositoryItems = screen.getAllByTestId('repositoryItem');

      // Isolate the first two
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      // Confirm they are being properly rendered with all available information
      expect(within(firstRepositoryItem)).toHaveTextContent("jaredpalmer/formik");
      //expect(firstRepositoryItem).toHaveTextContent("Build forms in React, without the tears");
      //expect(firstRepositoryItem).toHaveTextContent("TypeScript");
      //expect(firstRepositoryItem).toHaveTextContent("21.8k");
      //expect(firstRepositoryItem).toHaveTextContent("1.6k");
      //expect(firstRepositoryItem).toHaveTextContent("3");
      //expect(firstRepositoryItem).toHaveTextContent("88");
    });
  });
});
