// React Native
import { FlatList, View, StyleSheet, Pressable, Text } from "react-native";

// React
import React from "react";

// Utils
import getLatestReview from "../../utils/getLatestReview";

// Components
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";

// Styles
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.medium,
    textAlign: "center",
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
export default class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // Filter only the necessary props for the component
    const { value, setValue, searchQuery, setSearchQuery } = this.props;

    // Render the header component on the main page
    return(
      <RepositoryListHeader
        value={value} 
        setValue={setValue} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    )
  }

  // Render the repositories list
  render() {
    // Mutable array to hold the three order options
    let orderedRepositories = this.props.repositories;

    // Order the repositories based on the newest reviewed to oldest
    if (this.props.value === "Latest") {
      orderedRepositories = this.props.repositories.slice().sort((a, b) => {
        return getLatestReview(b) - getLatestReview(a);
      });
    }

    // Render the flatlist containing all of the repositories
    return (
      <View style={styles.container}>
        <FlatList
          data={orderedRepositories}
          keyExtractor={(item, index) => item?.id ?? index.toString()}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={this.renderHeader}
          renderItem={({ item }) => (
            <Pressable 
              onPress={() => this.props.handlePress(item.id)}
              style={({pressed}) => pressed ? styles.pressed : styles.normal}
            >
              {this.props.loading && <Text style={styles.header}>Loading repositories...</Text>}
              {this.props.error && <Text style={styles.header}>Failed to load repositories</Text>}
              <RepositoryItem repository={item} />
            </Pressable>
          )}
        />
      </View>
    );
  }
}
