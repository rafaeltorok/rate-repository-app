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
  const [searchQuery, setSearchQuery] = useState("");

  // Handle the search query debounce
  const [debounceValue] = useDebounce(searchQuery, 500);

  // Fetch the list with all available repositories
  const { repositories, loading, error } = useRepositories(orderBy, orderDirection, debounceValue);

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
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      handlePress={handlePress}
    />
  );
}
