// Packages
import { StyleSheet } from 'react-native';

// Utils
import { colors } from '../../utils/colors';
import { fontSizes, spacing } from '../../utils/sizes';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
