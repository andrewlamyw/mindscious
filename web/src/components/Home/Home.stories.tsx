// https://mui.com/material-ui/react-css-baseline/#global-reset
import CssBaseline from '@mui/material/CssBaseline'

import { MainThemeProvider } from 'src/contexts/MainThemeContext'

import Home from './Home'

export const generated = () => {
  return (
    <MainThemeProvider>
      <CssBaseline />
      <Home />
    </MainThemeProvider>
  )
}

export default { title: 'Components/Home' }
