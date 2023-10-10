import React from "react";
import logoInsta from "../imgs/logo-instagram.svg"

class PromotionBar extends React.Component {
    render() {
        return(
                <div class = "promotiotion-bar" >
                    <p>Frete grátis em compas á cima de R$300,00</p>
                    <a href="https://www.instagram.com/loopsnutrition/" target="_blank" rel="noreferrer">
                        <img class="img" src={logoInsta} alt=""instagram />
                    </a>
                </div>
            )
        }
    }


export default PromotionBar