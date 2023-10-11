import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/Nav.css'

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const dropdownClasses = isOpen ? 'dropdown-content show-dropdown' : 'dropdown-content';

    return (
        <div>
            <nav className="navbar">
                <Link to="/central-loops">Central Loops</Link>
                <Link to="/produtos-loops">Produtos Loops</Link>
                <Link to="/nosso-dna-loops">Nosso DNA Loops</Link>
                <Link to="/loop-conhecimento">Loop de Conhecimentos</Link>
                <a href="teste" className="dropdown-icon" onClick={toggleDropdown}>☰</a>
            </nav>
            {isOpen && (
                <nav className={dropdownClasses}>
                    <Link to="/central-loops">Central Loops</Link>
                    <Link to="/produtos-loops">Produtos Loops</Link>
                    <Link to="/nosso-dna-loops">Nosso DNA Loops</Link>
                    <Link to="/loop-conhecimento">Loop de Conhecimentos</Link>
                </nav>
            )}
        </div>
    );
}

export default Nav;