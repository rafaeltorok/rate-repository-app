// React Native
import { View, StyleSheet, Text } from 'react-native';

// Apollo client
import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../../graphql/queries';

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
  const { data, loading , error } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { repositoryId: repository.id },
  });

  if (loading) return <View><Text>Loading repository information...</Text></View>;

  if (error) return <View><Text>Failed to load repository information</Text></View>;

  return (
    <View style={styles.repositoryItem}>
      <ItemHeader repository={data.repository} />
      <ItemStatistics repository={data.repository} />
    </View>
  );
};
