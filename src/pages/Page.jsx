import React from 'react';
import Navbar from '../molecules/Navbar/Navbar';
import './index.css';

const Page = ({ children }) => {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <p>2024 Ⓒ All rights reserved</p>
            </footer>
        </div>
    );
};

export default Page;
