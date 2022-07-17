import { ClerkAuthProvider } from 'src/contexts/ClerkAuthContext'

import Header from './Header'

export const generated = () => {
  return (
    <ClerkAuthProvider>
      <Header />
    </ClerkAuthProvider>
  )
}

export default { title: 'Components/Header' }
