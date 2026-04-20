// React Native
import { FlatList, View, StyleSheet, Pressable, Text } from "react-native";

// React
import React from "react";

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

  // Conditionally renders the UI messages
  renderEmptyState = () => {
    if (this.props.loading) {
      // Loading message
      return <Text style={styles.header}>Loading repositories...</Text>;
    } else if (this.props.error) {
      // Error message
      return <Text style={styles.header}>Failed to load repositories</Text>;
    } else if (this.props.repositories.length === 0) {
      // Empty repositories list message
      return <Text style={styles.header}>No repositories found</Text>;
    }
  }

  // Render the repositories list
  render() {
    // Render the flatlist containing all of the repositories
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.repositories}
          keyExtractor={(item, index) => item?.id ?? index.toString()}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={this.renderHeader}
          renderItem={({ item }) => (
            <Pressable 
              onPress={() => this.props.handlePress(item.id)}
              style={({pressed}) => pressed ? styles.pressed : styles.normal}
            >
              <RepositoryItem repository={item} />
            </Pressable>
          )}
          ListEmptyComponent={this.renderEmptyState}
        />
      </View>
    );
  }
}
