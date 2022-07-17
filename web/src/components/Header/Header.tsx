import { SignInButton, UserButton } from '@clerk/clerk-react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { useAuth } from '@redwoodjs/auth'

import '@fontsource/satisfy'

const Header = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        <AppBar
          position="sticky"
          color="transparent"
          sx={{ boxShadow: 'none' }}
        >
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              component="a"
              sx={{
                color: 'inherit',
                flexGrow: 1,
                fontFamily: 'satisfy',
                textDecoration: 'none',
              }}
              href="/"
            >
              Mindscious
            </Typography>

            {isAuthenticated && (
              <UserButton afterSignOutUrl={window.location.href} />
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  )
}

export default Header
