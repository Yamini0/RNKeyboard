import { RootState } from '@redux/slices';
import { KeyBoardType } from '@redux/slices/contants';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  onToggleMode: () => void;
  onToggleCapsLock: () => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress, onToggleMode, onToggleCapsLock }) => {
  const alphabetKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericKeys = '1234567890';

  const keyBoardModes = useSelector((state: RootState) => state.keyBoardMode.keyBoardMode);
  const capsLockEnabled = useSelector((state: RootState) => state.capsLock.capsLockEnabled);

  const renderKeys = (keys: string) => {
    return keys.split('').map((key, index) => (
      <TouchableOpacity key={index} style={styles.key} onPress={() => onKeyPress(key)}>
        {capsLockEnabled ? <Text>{key}</Text> : <Text>{key.toLowerCase()}</Text>}
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      {keyBoardModes === KeyBoardType.alphabetical ? (
        <>
          <View style={styles.row}>{renderKeys(alphabetKeys)}</View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.key, styles.specialKey]} onPress={() => onKeyPress('DEL')}>
              <Text>DEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.key, styles.specialKey]} onPress={onToggleCapsLock}>
              <Text>{capsLockEnabled ? 'CAPS' : 'caps'}</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.row}>{renderKeys(numericKeys)}</View>
      )}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.key, styles.specialKey]} onPress={onToggleMode}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Keyboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexWrap: 'wrap',
    // backgroundColor: '#0aa',
  },
  row: {
    // flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#00a',
  },
  key: {
    padding: 4,
    margin: 5,
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  specialKey: {
    backgroundColor: 'lightgray',
  },
});
