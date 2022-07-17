import { render } from '@redwoodjs/testing/web'

import AuthDialog from './AuthDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthDialog />)
    }).not.toThrow()
  })
})
