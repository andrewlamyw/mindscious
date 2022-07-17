import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// https://mui.com/material-ui/react-css-baseline/#global-reset
import CssBaseline from '@mui/material/CssBaseline'
import LinearProgress from '@mui/material/LinearProgress'

import { useAuth } from '@redwoodjs/auth'

import Header from 'src/components/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { loading } = useAuth()

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <CssBaseline />

      {loading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}

      <Header />

      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

export default MainLayout
