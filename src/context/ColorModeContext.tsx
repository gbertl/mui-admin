import { createContext, useMemo, useState } from 'react';
import { Theme } from '../../typings';

// context for color mode
interface ColorMode {
  mode: Theme;
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorMode>({
  mode: 'dark',
  toggleColorMode: () => {},
});

export const ColorModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<Theme>('dark');

  const toggleColorMode = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
