import { createSlice } from '@reduxjs/toolkit';

interface DisplayAreaState {
  text: string;
  caretPosition: number;
}

const initialState: DisplayAreaState = {
  text: '',
  caretPosition: 0,
};

const displayAreaSlice = createSlice({
  name: 'displayArea',
  initialState,
  reducers: {
    addText(state, action) {
      const { text, caretPosition } = action.payload;
      const newText = state.text.slice(0, caretPosition) + text + state.text.slice(caretPosition);
      state.text = newText;
      state.caretPosition += text.length;
    },
    deleteText(state) {
      if (state.caretPosition > 0) {
        const newText = state.text.slice(0, state.caretPosition - 1) + state.text.slice(state.caretPosition);
        state.text = newText;
        state.caretPosition -= 1;
      } else if (state.text.length > 0) {
        // Delete character at caret position 0
        const newText = state.text.slice(1);
        state.text = newText;
      }
    },
    setCaretPosition(state, action) {
      state.caretPosition = action.payload;
    },
  },
});

export const { addText, deleteText, setCaretPosition } = displayAreaSlice.actions;
export const displayAreaReducer = displayAreaSlice.reducer;
