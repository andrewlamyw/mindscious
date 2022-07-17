import { render } from '@redwoodjs/testing/web'

import Home from './Home'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Home', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Home />)
    }).not.toThrow()
  })
})
