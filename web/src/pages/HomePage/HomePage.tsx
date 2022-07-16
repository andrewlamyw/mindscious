import { UserButton, SignInButton } from '@clerk/clerk-react'

import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { currentUser, isAuthenticated, logIn, logOut } = useAuth()
  return (
    <>
      <h1>👋Hi {isAuthenticated ? currentUser.firstName : 'there'}!</h1>

      {isAuthenticated ? (
        <UserButton afterSignOutAll={window.location.href} />
      ) : (
        <SignInButton mode="modal">
          <button>Log in</button>
        </SignInButton>
      )}
    </>
  )
}

export default HomePage
