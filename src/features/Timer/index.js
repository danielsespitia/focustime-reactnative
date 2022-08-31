// Packages
import React, { useState } from 'react';
import { View, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

// Components
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';

// Features
import Timing from '../Timing/index';

// Utils
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';

// Styles
import { styles } from './styles';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}> {focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.notSoDarkBlue}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title={'-'} onPress={clearSubject} />
      </View>
    </View>
  );
};

export default Timer;
