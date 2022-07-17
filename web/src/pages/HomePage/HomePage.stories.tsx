import { ClerkAuthProvider } from 'src/contexts/ClerkAuthContext'
import MainLayout from 'src/layouts/MainLayout'

import HomePage from './HomePage'

export const generated = () => {
  return (
    <ClerkAuthProvider>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </ClerkAuthProvider>
  )
}

export default { title: 'Pages/HomePage' }
