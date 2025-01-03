import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
};

export default NoPage;