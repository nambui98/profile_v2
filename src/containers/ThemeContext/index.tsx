import React, { createContext, useContext } from 'react';
export enum Theme {
    Dark = 'Dark',
    Light = 'Light',
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
}
const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

    return 'light' // light theme as the default;
};

export const ThemeContext = createContext<ThemeContextType>({ theme: Theme.Dark, setTheme: theme => console.warn('no theme provider') });
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({ initialTheme, children }: any) => {
    const [theme, setTheme] = React.useState<any>(getInitialTheme);

    const rawSetTheme = (rawTheme: any) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    React.useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};