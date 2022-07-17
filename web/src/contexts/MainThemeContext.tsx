import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10rem',
        },
      },
    },
  },
})

// https://mui.com/material-ui/react-typography/#install-with-npm
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const MainThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
