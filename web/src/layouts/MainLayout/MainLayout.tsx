import Container from '@mui/material/Container'
// https://mui.com/material-ui/react-css-baseline/#global-reset
import CssBaseline from '@mui/material/CssBaseline'

import Header from 'src/components/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <CssBaseline />

      <Header />
      <Container maxWidth="lg">{children}</Container>
    </>
  )
}

export default MainLayout
