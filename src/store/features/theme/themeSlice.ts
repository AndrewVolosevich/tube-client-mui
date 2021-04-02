import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface ThemeState {
  mode: 'light' | 'dark' | undefined;
}

const initialState: ThemeState = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<'light' | 'dark' | undefined>) => {
      if (state.mode === 'light') {
        state.mode = 'dark'
      } else {
        state.mode = 'light'
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectThemeMode = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
