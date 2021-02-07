import React from 'react';
import { render } from '@testing-library/react';

import ReactHyper from './react-hyper';

describe('ReactHyper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactHyper />);
    expect(baseElement).toBeTruthy();
  });
});
