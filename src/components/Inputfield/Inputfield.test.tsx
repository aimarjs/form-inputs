import React from 'react';
import { render } from '@testing-library/react';

import Inputfield from './Inputfield';

describe('Button', () => {
  test('renders the Inputfield component', () => {
    render(<Inputfield type="text" />);
  });
});
