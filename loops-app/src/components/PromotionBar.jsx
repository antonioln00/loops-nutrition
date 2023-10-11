import React from "react";
import logoInsta from "../imgs/logo-instagram.svg"
import '../style/PromotionBar.css'

function PromotionBar() {
        return(
                <div className="promotiotion-bar">
                    <p className="p-">Frete grátis em compas á cima de R$300,00</p>
                    <a href="https://www.instagram.com/loopsnutrition/" target="_blank" rel="noreferrer">
                        <img className="logo-instagram" src={logoInsta} alt="logo-instagram" />
                    </a>
                </div>
            )
        }


export default PromotionBar