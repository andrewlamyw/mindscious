import { UserButton, SignInButton } from '@clerk/clerk-react'
import Typography from '@mui/material/Typography'

import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { currentUser, isAuthenticated } = useAuth()
  return (
    <>
      {isAuthenticated ? (
        <UserButton afterSignOutUrl={window.location.href} />
      ) : (
        <SignInButton mode="modal">
          <button>Log in</button>
        </SignInButton>
      )}

      <Typography variant="h2" component="h1" gutterBottom>
        👋Hi {isAuthenticated ? currentUser.firstName : 'there'}, how are you?
      </Typography>
    </>
  )
}

export default HomePage
