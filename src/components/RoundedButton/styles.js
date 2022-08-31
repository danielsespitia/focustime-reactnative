// Utils
import { colors } from '../../utils/colors';

export const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 2,
  },
  text: { color: colors.white, fontSize: size / 3 },
});
