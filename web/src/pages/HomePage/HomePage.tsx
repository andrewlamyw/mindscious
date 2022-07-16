import { UserButton, SignInButton } from '@clerk/clerk-react'

import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { currentUser, isAuthenticated } = useAuth()
  return (
    <>
      <h1>
        👋Hi {isAuthenticated ? currentUser.firstName : 'there'}, how are you?
      </h1>

      {isAuthenticated ? (
        <UserButton afterSignOutUrl={window.location.href} />
      ) : (
        <SignInButton mode="modal">
          <button>Log in</button>
        </SignInButton>
      )}
    </>
  )
}

export default HomePage
