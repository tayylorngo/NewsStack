import React, {Component} from 'react';
import {FaRegNewspaper} from 'react-icons/fa';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h1><span className="Title">NewsStack</span> <span className="Icon"><FaRegNewspaper/></span></h1>
            </div>
        );
    }
}

export default Header;