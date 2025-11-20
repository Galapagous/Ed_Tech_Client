import { describe, expect} from 'vitest';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Login from './login';

describe('It should render login', () => {
  it('Should render the title', () => {
    render( <Login/> );
    expect(screen.getByText(/M-Learn-ai/)).toBeInTheDocument();
  });

  it('Should render sign up prompt', ()=>{
    render(<Login/>);
    expect(screen.getByText(/Don't have an account? Sign up/)).toBeInTheDocument()
  })

  it("Submit form and set loading state", ()=>{
    render(<Login/>);
    const button = screen.getByRole('button', {name: /login/})
    fireEvent.click(button)

    await waitFor(()=>{
        expect(button).toBeInTheDocument()
    })
  })
});
