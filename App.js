import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

// Styles
import { styles } from './styles';

// Features
import Focus from './src/features/Focus';
import FocusHistory from './src/features/FocusHistory';
import Timer from './src/features/Timer';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}
