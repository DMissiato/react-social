
import { render, screen } from '@testing-library/react';
import Footer from './index';

test('render and check the <Footer /> component', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    const msg = screen.getByText(`Copyright ${year} - Created by Davide Missiato`);
    expect(msg).toBeInTheDocument();
});

test('checks markup in <Footer /> component', () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector('footer');
    const p = container.querySelector('footer p');
    
    expect(footer).toBeTruthy();
    expect(p).toBeTruthy();
});