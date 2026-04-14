// React Native
import { StyleSheet, View, Text } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

// GraphQL queries
import { useQuery } from '@apollo/client';
import { LOGGED_USER } from '../graphql/queries';

// Components
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './tabs/SignIn';
import SignOut from './tabs/SignOut';
import Favorites from './tabs/Favorites';
import Settings from './tabs/Settings';
import About from './tabs/About';
import Faq from './tabs/Faq';

// Styles
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.large,
    textAlign: "center",
  },
});

// Main component
export default function Main() {
  // Fetches the currently logged in user data if present
  const { data, loading } = useQuery(LOGGED_USER);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Loading app information...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            data?.me
              ? <RepositoryList />
              : <Navigate to="/signin" replace />
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/signout"
          element={
            data?.me
              ? <SignOut />
              : <Navigate to="/signin" replace />
          }
        />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path='/faq' element={<Faq />} />
        {data?.me ? (
          <Route path="*" element={<Navigate to="/" replace />} />
        ) : (
          <Route path="*" element={<Navigate to="/signin" replace />} />
        )}
      </Routes>
    </View>
  );
};
