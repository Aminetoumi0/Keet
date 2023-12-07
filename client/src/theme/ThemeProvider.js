import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const ThemeProvider = ({ children }) => {
  const defaultTheme = createTheme()

  return (
    <>
      <CssBaseline />
      <MUIThemeProvider theme={defaultTheme}>{children}</MUIThemeProvider>
    </>
  )
}

export default ThemeProvider
