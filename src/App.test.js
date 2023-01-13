import { render as rtlRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers'

import { debug } from 'console';
import {MemoryRouter} from 'react-router-dom'

import App from './App';

const render = component => rtlRender(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    {component}
  </Provider>
)

describe("Home page to Order Page", () => {
  test('clicks button and renders the order page', () => {
    render(<App />);
    const theElement = screen.getAllByRole('link', {name:/order/i})
    expect(theElement[0]).toBeInTheDocument()
    userEvent.click(theElement[0])
    const head = screen.getByText(/current location/i)
    expect(head).toBeInTheDocument()
  });
})

describe("Order Page", () => {
  test("renders the menu", () => {

  })
})


