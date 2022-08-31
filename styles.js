import { StyleSheet, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';

const androidStatusBarPadding = () =>
  Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: androidStatusBarPadding(),
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});
