import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Loading from '../loader'

test('shows the loader', () => {
  const testMessage = 'Test Message'
  render(<Loading />)
})