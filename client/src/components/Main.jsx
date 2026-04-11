// React Native
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

// Components
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './tabs/SignIn';
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
});

// Main component
export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path='/faq' element={<Faq />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};
