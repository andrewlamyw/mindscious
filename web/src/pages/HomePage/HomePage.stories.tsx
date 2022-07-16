import { ClerkProvider } from '@clerk/clerk-react'

import HomePage from './HomePage'

export const generated = () => {
  return (
    <ClerkProvider>
      <HomePage />
    </ClerkProvider>
  )
}

export default { title: 'Pages/HomePage' }
