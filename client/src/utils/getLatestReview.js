export default function getLatestReview(repository) {
  // Handle a repository with no reviews yet
  if (repository.reviews.edges.length === 0) {
    return -Infinity;  // Guarantees that the repository will appear on last
  }

  // Map the timestamps into an array
  const timestamps = repository.reviews.edges.map(
    edge => new Date(edge.node.createdAt).getTime()
  );

  // Select the newest date and return it
  const newest = Math.max(...timestamps);
  return newest;
}
