// Packages
import React from 'react';
import { View } from 'react-native';

// Components
import { RoundedButton } from '../../components/RoundedButton/index';

// Styles
import { styles } from './styles.js';

const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

export default Timing;
