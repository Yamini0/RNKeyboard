import { useCallback, useMemo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/slices';
import { setCaretPosition } from '@redux/slices/displayAreaSlice';

export const TextWithCaret: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { caretPosition, text } = useSelector((state: RootState) => state.displayArea);

  const handleCaretTap = useCallback(
    (position: number) => () => {
      dispatch(setCaretPosition(position));
    },
    [],
  );

  const textParts = useMemo(() => {
    return text.split('');
  }, [text]);

  return textParts.map((char, index) => (
    <TouchableOpacity style={styles.container} key={`${char}_${index}`} onPress={handleCaretTap(index)}>
      <Text style={styles.enterText}>{char}</Text>
      {index === caretPosition - 1 && <Text style={styles.caret}>|</Text>}
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  enterText: {
    flexDirection: 'row',
    fontWeight: 'normal',
    fontSize: 32,
    color: '#4e4e4e',
  },
  caret: {
    fontWeight: 'medium',
    fontSize: 36,
    color: '#5ec8e5',
  },
});
