import Typography from '@mui/material/Typography'

import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { currentUser, isAuthenticated } = useAuth()
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mt: 2 }}
      >
        👋Hi {isAuthenticated ? currentUser.firstName : 'there'}, how are you?
      </Typography>
    </>
  )
}

export default HomePage
