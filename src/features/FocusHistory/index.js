// Packages
import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Styles
import {styles} from './styles'

const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.title}>I haven't focused on anything yet</Text>;
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

export default FocusHistory;


