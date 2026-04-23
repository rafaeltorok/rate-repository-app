// React Native
import { View, Text, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

// Components
import CreateReviewForm from "../repositories/reviews/CreateReviewForm";

// Hooks
import useCreateReview from "../../hooks/useCreateReview";
import useRepositories from "../../hooks/useRepositories";

// CSS Styles
import theme from "../../theme";

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.medium,
  },
});

// Component
export default function CreateReview() {
  // Custom hook to handle creating a new review
  const [createReview, reviewResult] = useCreateReview();

  // Fetch the list with all available repositories
  const { data } = useRepositories();

  // Filter the repository information from the response
  const repositories = data
    ? data.repositories?.edges
        .map((edge) => edge.node)
        .filter((repo) => repo != null)
    : [];

  // Remove any owner duplicates from the list
  const repositoryOwners = [
    ...new Set(
      repositories.map(repository => repository.ownerName)
    )
  ];

  // React Router hook
  const navigate = useNavigate();

  // Submit button function
  async function onSubmit(values) {
    // Extract the review data
    const { ownerName, repositoryName, rating, text } = values;

    try {
      // Convert the string rating into a number
      const numberRating = Number(rating);

      // Create review mutation with a valid rating number
      const review = await createReview({
        ownerName,
        repositoryName,
        rating: numberRating,
        text,
      });

      // Redirect after successfully creating a new review
      navigate(`/repository/${review.repositoryId}`);
    } catch (err) {
      console.log(err);
    }
  }

  // Loading screen
  if (reviewResult.loading) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Adding review...</Text>
      </View>
    );
  }

  // Login form when there are no currently logged in users
  return (
    <CreateReviewForm
      repositoriesList={repositories}
      repositoryOwners={repositoryOwners}
      onSubmit={onSubmit}
      error={reviewResult?.error}
    />
  );
}
