import { ClerkAuthProvider } from 'src/contexts/ClerkAuthContext'

import MainLayout from './MainLayout'

export const generated = () => {
  return (
    <ClerkAuthProvider>
      <MainLayout />
    </ClerkAuthProvider>
  )
}

export default { title: 'Layouts/MainLayout' }
