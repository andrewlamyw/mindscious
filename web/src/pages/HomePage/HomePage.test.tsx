import { render } from '@redwoodjs/testing/web'

import { ClerkAuthProvider } from 'src/contexts/ClerkAuthContext'

import HomePage from './HomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ClerkAuthProvider>
          <HomePage />
        </ClerkAuthProvider>
      )
    }).not.toThrow()
  })
})
