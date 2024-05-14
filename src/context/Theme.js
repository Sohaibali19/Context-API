import { createContext, useContext } from "react";


export const ThemeContext = createContext(
    {
        themMode : "light", // variable
        darkTheme : () => {}, // method
        lightTheme : () => {}, //method
    }
)

export const ThemeProvider = ThemeContext.Provider

//  custom hook, and can be export

export default function useTheme() {
    return useContext(ThemeContext)
}