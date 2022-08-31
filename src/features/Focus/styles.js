// Packages
import { StyleSheet } from 'react-native';

// Utils
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';

export const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: spacing.lg,
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    color: colors.white,
  },
});
