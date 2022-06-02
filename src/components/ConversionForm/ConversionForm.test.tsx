import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConversionForm from './ConversionForm';

describe('<ConversionForm />', () => {
  test('it should mount', () => {
    render(<ConversionForm />);
    
    const conversionForm = screen.getByTestId('ConversionForm');

    expect(conversionForm).toBeInTheDocument();
  });
});