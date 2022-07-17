import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { ClerkAuthProvider } from 'src/contexts/ClerkAuthContext'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { MainThemeProvider } from './contexts/MainThemeContext'
import './index.css'
import './scaffold.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ClerkAuthProvider>
        <AuthProvider type="clerk">
          <RedwoodApolloProvider>
            <MainThemeProvider>
              <Routes />
            </MainThemeProvider>
          </RedwoodApolloProvider>
        </AuthProvider>
      </ClerkAuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
