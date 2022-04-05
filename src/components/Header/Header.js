import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <h2>Reveal</h2>
            <div className='navigation'>
                <NavLink
                    to="home"
                    style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f',
                        background: isActive ? '#7600dc' : '#f0f0f0',
                    })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="reviews"
                    style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f',
                        background: isActive ? '#7600dc' : '#f0f0f0',
                    })}
                >
                    Reviews
                </NavLink>
                <NavLink
                    to="dashboard"
                    style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f',
                        background: isActive ? '#7600dc' : '#f0f0f0',
                    })}
                >
                    DahsBoard
                </NavLink>
                <NavLink
                    to="blogs"
                    style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f',
                        background: isActive ? '#7600dc' : '#f0f0f0',
                    })}
                >
                    Blogs
                </NavLink>
                <NavLink
                    to="About"
                    style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f',
                        background: isActive ? '#7600dc' : '#f0f0f0',
                    })}
                >
                    About
                </NavLink>
            </div>
        </div>

    );
};

export default Header;