// React Native
import { useNavigate } from "react-router-native";

// React
import { useState } from "react";

// Hooks
import useRepositories from "../../hooks/useRepositories";

// Components
import RepositoryListContainer from "./RepositoryListContainer";

// Debounce
import { useDebounce } from "use-debounce";

// Component responsible for rendering the main page
export default function RepositoryList() {
  // Handle the ordering for the repositories list on the main page
  const [value, setValue] = useState("Latest");
  let orderBy;
  let orderDirection;

  // Match the option to the respective query variable
  switch (value) {
    case "Latest":
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
      break;
    case "Highest":
      orderBy = "RATING_AVERAGE";
      orderDirection = "DESC";
      break;
    case "Lowest":
      orderBy = "RATING_AVERAGE";
      orderDirection = "ASC";
      break;
  }

  // Hold the repositories search field value
  const [searchKeyword, setSearchKeyword] = useState("");

  // Handle the search query debounce
  const [debounceValue] = useDebounce(searchKeyword, 500);

  // Fetch the list with all available repositories
  const { data, loading, error, fetchMore } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword: debounceValue,
    first: 5,
  });

  // Filter the repository information from the response
  const repositories = data
    ? data.repositories?.edges
        .map((edge) => edge.node)
        .filter((repo) => repo != null)
    : [];

  // React Router hook
  const navigate = useNavigate();

  // Handles clicking on a single repository
  function handlePress(id) {
    navigate(`/repository/${id}`);
  }

  // Render the repositories container
  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      error={error}
      value={value}
      setValue={setValue}
      setSearchKeyword={setSearchKeyword}
      handlePress={handlePress}
      onEndReached={fetchMore}
    />
  );
}
