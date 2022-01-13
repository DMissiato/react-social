
import { render, screen } from '@testing-library/react';
import Header from './index';

import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';


test('<Header /> component as default', () => {

    const history = createMemoryHistory();

    render(
        <Router location={history.location} navigator={history}>
            <Header name={'Feisbrut'} />
        </Router>
    );

    const title = screen.getByText('Feisbrut');
    expect(title).toBeInTheDocument();
});


test('<Header /> component with custom links', () => {

    const history = createMemoryHistory();
    const links = [
        { link: '/', label: 'Home' },
        { link: '/friends', label: 'Friends' },
        { link: '/messages', label: 'Messages' }
    ];

    const { container } = render(
        <Router location={history.location} navigator={history}>
            <Header links={links} />
        </Router>
    );

    const lis  = container.querySelectorAll('nav li');
    expect(lis.length).toBe(links.length);
});