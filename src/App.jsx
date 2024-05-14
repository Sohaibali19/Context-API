import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // , we have to get acces of these methods


  // actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themMode)
  }, [themMode]) 

  return (
    <ThemeProvider value={{themMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                   </div>

                  <div className="w-full max-w-sm mx-auto">
                        <Card/>
                  </div>
            </div>
        </div>
      </ThemeProvider>
  )
}

export default App
