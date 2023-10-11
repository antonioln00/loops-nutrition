import { Link } from 'react-router-dom'
import logo from '../imgs/logo.jpeg'
import logoWhats from '../imgs/whats-logo.svg'
import logoInsta from "../imgs/logo-instagram.svg"
import logoYt from '../imgs/logo-youtube.svg'
import '../style/Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <section className='section1-footer'>
                <div>
                    <img className='logo-footer' src={logo} alt="logo-footer" />
                    <p>CNPJ: XX.XXX.XXX/XXXX-XX</p>
                    <p>Fique à vontade para nos contatar a qualquer momento! :)</p>

                    <div className='whats-app'>
                        <img className='logo-whatsapp' src={logoWhats} alt="logo-whatsapp" />
                        <p>(16) 9 9796-5930</p>
                    </div>


                </div>

                <div className='redes-sociais'>
                    <ul>
                        <h3>Loops nas redes sociais</h3>
                        <li>
                            <a href="https://www.instagram.com/loopsnutrition/" target="_blank" rel="noreferrer">
                                <img className="logo-instagram" src={logoInsta} alt="logo-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@loopsnutrition1037" target="_blank" rel="noreferrer">
                                <img className="logo-youtube" src={logoYt} alt="logo-youtube" />
                            </a>

                        </li>

                    </ul>
                </div>

                <div>

                    <ul>
                        <h3>Links</h3>
                        <li>
                            <Link to="politica-de-privacidade">Politica de privacidade</Link>
                        </li>
                        <li>
                            <Link to="politica-de-devolução-e-reembolso">Política de troca, devolução e arrependimento</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Formas de pagamento</h3>
                    <div>
                        <input type="text" />
                        <button>Enviar</button>
                    </div>
                </div>


            </section>
        </footer>
    )
}

export default Footer