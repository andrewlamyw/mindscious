import { render } from '@redwoodjs/testing/web'

import KeyTrends from './KeyTrends'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeyTrends', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KeyTrends />)
    }).not.toThrow()
  })
})
