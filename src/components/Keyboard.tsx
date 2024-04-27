import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

import { RootState } from '@redux/slices';
import { KeyBoardType } from '@redux/slices/contants';

import { alphabetKeys, deviceWidth, numericKeys } from '@utils/contants';
import { KeyboardProps } from '@typings/keyboard.type';

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress, onToggleMode, onToggleCapsLock }) => {
  const keyBoardModes = useSelector((state: RootState) => state.keyBoardMode.keyBoardMode);
  const capsLockEnabled = useSelector((state: RootState) => state.capsLock.capsLockEnabled);

  const isAlpabeticalKeyboard = keyBoardModes === KeyBoardType.alphabetical;

  const handleDeletePress = useCallback(() => {
    return onKeyPress('DEL');
  }, []);

  const renderKeys = (keys: string) => {
    return keys.split('').map((key, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.3}
          key={index}
          style={styles.key}
          onPress={() => onKeyPress(capsLockEnabled ? key : key.toLowerCase())}>
          <Text style={styles.keyText}>{capsLockEnabled ? key : key.toLowerCase()}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      {isAlpabeticalKeyboard ? (
        <View style={styles.row}>{renderKeys(alphabetKeys)}</View>
      ) : (
        <View style={styles.row}>{renderKeys(numericKeys)}</View>
      )}
      <View style={[styles.footerSpecialKey, { left: isAlpabeticalKeyboard ? deviceWidth / 4.2 : deviceWidth / 3 }]}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.key, styles.specialKey]} onPress={onToggleMode}>
            <Text style={styles.specialKeyText}>Toggle</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.key, styles.specialKey]} onPress={handleDeletePress}>
          <Text style={styles.specialKeyText}>Delete</Text>
        </TouchableOpacity>
        {isAlpabeticalKeyboard && (
          <TouchableOpacity style={[styles.key, styles.specialKey]} onPress={onToggleCapsLock}>
            <Text style={styles.specialKeyText}>{capsLockEnabled ? 'CAPS' : 'caps'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Keyboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
  key: {
    padding: 4,
    margin: 5,
    height: 50,
    width: 50,
    borderWidth: 0.8,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  specialKey: {
    backgroundColor: '#DDD',
    height: 50,
    width: 63,
  },
  specialKeyText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footerSpecialKey: {
    flexDirection: 'row',
    marginTop: 18,
  },
});
