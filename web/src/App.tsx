// https://mui.com/material-ui/react-css-baseline/#global-reset
import CssBaseline from '@mui/material/CssBaseline'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { ClerkAuthProvider } from 'src/contexts/ClerkAuthContext'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'
import './scaffold.css'

// https://mui.com/material-ui/react-typography/#install-with-npm
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ClerkAuthProvider>
        <AuthProvider type="clerk">
          <RedwoodApolloProvider>
            <CssBaseline />
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </ClerkAuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
