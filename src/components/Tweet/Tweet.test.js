import { render } from '@testing-library/react'
import React from 'react'
import Tweet from './Tweet'
import '@testing-library/jest-dom/extend-expect'

test('renders content', () => {
  const tweet = {
    text: 'My first tweet',
    tweetedAt: '2021-07-15T06:14:25.701Z',
    id: '60efd241c9a2bac655e60510',
  }

  const component = render(<Tweet tweet={tweet} />)

  expect(component.container).toHaveTextContent('My first tweet')
})
