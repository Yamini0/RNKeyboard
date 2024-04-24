import Keyboard from '@components/Keyboard';
import { AppDispatch, RootState } from '@redux/slices';
import { toggleCapsLock } from '@redux/slices/capsLockSlice';
import { addText, deleteText, setCaretPosition } from '@redux/slices/displayAreaSlice';
import { toggleKeyBoardMode } from '@redux/slices/keyboardMode';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const keyBoardModes = useSelector((state: RootState) => state.keyBoardMode.keyBoardMode);
  const capsLockEnabled = useSelector((state: RootState) => state.capsLock.capsLockEnabled);

  console.log('capsLockEnabled', capsLockEnabled, 'keyBoardModes', keyBoardModes);

  const { caretPosition, text } = useSelector((state: RootState) => state.displayArea);

  const handleCaretTap = (position: number) => {
    dispatch(setCaretPosition(position));
  };

  const renderTextWithCaret = () => {
    const textParts = text.split('');
    return textParts.map((char, index) => (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
        }}
        key={index}
        onPress={() => handleCaretTap(index)}>
        <Text style={{ flexDirection: 'row', fontWeight: index === caretPosition ? 'bold' : 'normal' }}>{char}</Text>
        {index === caretPosition - 1 && <Text style={{ fontWeight: 'bold' }}>|</Text>}
      </TouchableOpacity>
    ));
  };

  const handleKeyPress = (key: string) => {
    console.log('key-->', key);
    if (key === 'DEL') {
      dispatch(deleteText());
    } else {
      dispatch(addText({ text: key, caretPosition }));
    }
  };

  const handleToggleCapsLock = () => {
    dispatch(toggleCapsLock());
  };

  const handleToggleMode = () => {
    console.log('-->to toggle keyboard');
    dispatch(toggleKeyBoardMode());
  };

  console.log('handleKeyPress', caretPosition, 'text', text);
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {renderTextWithCaret()}
      </View>
      <View style={styles.container}>
        <Keyboard onKeyPress={handleKeyPress} onToggleMode={handleToggleMode} onToggleCapsLock={handleToggleCapsLock} />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
