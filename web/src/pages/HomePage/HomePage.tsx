import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { currentUser, isAuthenticated, logIn, logOut } = useAuth()
  return (
    <>
      <h1>👋Hi {isAuthenticated ? currentUser.firstName : 'there'}!</h1>

      <button onClick={isAuthenticated ? logOut : logIn}>
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
    </>
  )
}

export default HomePage
