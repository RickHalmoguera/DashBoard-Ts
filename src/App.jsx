import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from "styled-components"
import { GlobalStyles, darkTheme, lightTheme } from "./theme/GlobalStyles"
import { getTheme } from "./features/theme/themeSlice"
import { useSelector } from "react-redux"
import { LoginPage } from "./pages/LoginPage"
import {RootPage} from "./pages/RootPage"
import { DashBoardPage } from './pages/DashBoardPage';

function App() {
  const themeData = useSelector(getTheme)

  return (
        <BrowserRouter>
          <ThemeProvider theme={themeData ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path='/root' element={<RootPage />}>
                <Route path='/root/dashboard' element={<DashBoardPage />} />
              </Route>
            </Routes>
           
          </ThemeProvider>
        </BrowserRouter>
  )
}

export default App
