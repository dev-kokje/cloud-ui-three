import { createContext, useState } from "react";

export const ThemeContext = createContext({
    darkMode: false,
    toggleColorMode: () => {}
});

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleColorMode = () => {
        setDarkMode(!darkMode)
    }

    return <ThemeContext.Provider value={{ darkMode, toggleColorMode }}>
        { children }
    </ThemeContext.Provider>
}

export default ThemeProvider