// React Native
import { View, StyleSheet } from 'react-native';

// Components
import ItemHeader from './ItemHeader';
import ItemStatistics from './ItemStatistics';

// Styles
import theme from '../../theme';

const styles = StyleSheet.create({
  repositoryItem: {
    padding: theme.spacing.large,
    backgroundColor: theme.colors.white,
  },
});

// Component
export default function RepositoryItem({ repository }) {
  return (
    <View style={styles.repositoryItem}>
      <ItemHeader repository={repository} />
      <ItemStatistics repository={repository} />
    </View>
  );
};
