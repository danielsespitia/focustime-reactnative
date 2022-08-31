// Packages
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

// Components
import { RoundedButton } from '../../components/RoundedButton/index';

// Styles
import { styles } from './styles';

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          value={subject}
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            onPress={() => addSubject(subject)}
            title="+"
            size={50}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;
