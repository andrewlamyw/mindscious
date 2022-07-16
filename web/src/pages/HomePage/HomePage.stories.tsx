import { ClerkAuthProvider } from 'src/contexts/ClerkAuthContext'

import HomePage from './HomePage'

export const generated = () => {
  return (
    <ClerkAuthProvider>
      <HomePage />
    </ClerkAuthProvider>
  )
}

export default { title: 'Pages/HomePage' }
