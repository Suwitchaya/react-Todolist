import React from 'react'

import Navigation from '../Navigations/Navigation';
import './Toolbar.css';

const toolbar = (props) =>(
    <div>
        <header className="Toolbar">
        <nav>
            <Navigation />
        </nav>
        <div className="Todo"></div>
        </header>
    </div>
);
export default toolbar;