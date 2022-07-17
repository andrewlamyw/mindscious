import { render } from '@redwoodjs/testing/web'

import MainDateTime from './MainDateTime'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainDateTime', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainDateTime />)
    }).not.toThrow()
  })
})
