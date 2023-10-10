import React from "react";
import logo from '../imgs/logo.jpeg'
import carrinho from '../imgs/carrinho-de-compras.svg'
import perfil from '../imgs/perfil.svg'
import Nav from "./Nav";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header class="header">
                <Link to="/central-loops">
                    <img class="img" src={logo} alt="sacola-de-compras" />
                </Link>

                <Nav />

                <section>
                <Link to="/seu-mundo-loops">
                    <img class="img" src={perfil} alt="seu-mundo-loops" />    
                </Link>
                <Link to="/carrinho">
                    <img class="img" src={carrinho} alt="carrinho" />
                </Link>
                </section>
            </header>
        )
    }
}

export default Header