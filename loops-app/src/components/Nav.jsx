import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <Link to="/central-loops">
                    Central Loops
                </Link>
                <Link to="/produtos-loops">
                    Produtos Loops
                </Link>
                <Link to="/nosso-dna-loops">
                    Nosso DNA Loops
                </Link>
                <Link to="/loop-conhecimento">
                    Loop de Conhecimentos
                </Link>
            </nav>
        )
    }
}

export default Nav