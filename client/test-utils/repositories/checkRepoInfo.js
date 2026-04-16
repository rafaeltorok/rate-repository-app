// Test dependencies
import { within } from '@testing-library/react-native';

// Utils
import formatNumber from '../../src/utils/formatNumber';

export default function checkRepoInfo(repositoryItem, repositoryInfo) {
  // Isolate the test repository on the page
  const repo = within(repositoryItem);
  
  // Repository full name field
  expect(repo.getByText(repositoryInfo.fullName));

  // Description field
  expect(repo.getByText(repositoryInfo.description));

  // Language field
  expect(repo.getByText(repositoryInfo.language));

  // Stargazers count
  expect(repo.getByText(formatNumber(repositoryInfo.stargazersCount)));

  // Forks count
  expect(repo.getByText(formatNumber(repositoryInfo.forksCount)));

  // Review count
  expect(repo.getByText(formatNumber(repositoryInfo.reviewCount)));

  // Rating average
  expect(repo.getByText(formatNumber(repositoryInfo.ratingAverage)));
}
