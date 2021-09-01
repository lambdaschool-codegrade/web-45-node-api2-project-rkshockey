import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

test('renders App without errors', () => {
  render(<Router><App /></Router>);
});
