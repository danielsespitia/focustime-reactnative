// Packages
import { StyleSheet } from 'react-native';

// Utils
import { colors } from '../../utils/colors';
import { spacing, fontSizes } from '../../utils/sizes';

export const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
