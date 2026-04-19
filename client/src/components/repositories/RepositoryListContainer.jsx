// React Native
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { Picker } from "@react-native-picker/picker";

// Utils
import getLatestReview from "../../utils/getLatestReview";

// Components
import RepositoryItem from "./RepositoryItem";

// Styles
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  separator: {
    height: theme.spacing.medium,
  },
  pressed: {
    backgroundColor: theme.colors.input,
  },
  normal: {
    backgroundColor: theme.colors.white,
  }
});

// Separator
const ItemSeparator = () => <View style={styles.separator} />;

// Component
export default function RepositoryListContainer({ repositories, value, setValue }) {
  let orderedRepositories = repositories;

  // React Router hook
  const navigate = useNavigate();

  // Handles clicking on a single repository
  function handlePress(id) {
    navigate(`/repository/${id}`);
  }

  // Order the repositories based on the newest reviewed to oldest
  if (value === "Latest") {
    orderedRepositories = repositories.slice().sort((a, b) => {
      return getLatestReview(b) - getLatestReview(a);
    });
  }

  // Repositories list
  return (
    <View style={styles.container}>
      <FlatList
        data={orderedRepositories}
        keyExtractor={(item, index) => item?.id ?? index.toString()}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={() => 
          <Picker
            selectedValue={value}
            onValueChange={setValue}>
              <Picker.Item
                label="Latest repositories"
                value={"Latest"}
              />
              <Picker.Item
                label="Highest rate repositories"
                value={"Highest"}
              />
              <Picker.Item
                label="Lowest rated repositories"
                value={"Lowest"}
              />
          </Picker>        
        }
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => handlePress(item.id)}
            style={({pressed}) => pressed ? styles.pressed : styles.normal}
          >
            <RepositoryItem repository={item} />
          </Pressable>
        )}
      />
    </View>
  );
}
