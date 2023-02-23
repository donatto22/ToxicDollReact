import { Link } from 'react-router-dom'
import './footer.css'
import { useState } from 'react'
import { createPortal } from 'react-dom'

const Footer = () => {
    const [dolly, setDolly] = useState(false)

    return (
        // Contenedor general
        <div id="footer">
            {/* Enlaces en el footer */}
            <div id="container-footer">
                <div className="centre-footer">
                    <div id="container-footer-left">
                        <h1 className="bot-name">ToxicDoll</h1>
                        <p className="description-bot">
                            Soy un bot para ti y tu servidor. Con todas las funcionalidad que necesitas, mientras más mejor.
                        </p>
                    </div>

                    <div id="container-footer-right">
                        <div className="footer-box-links">
                            <div className="title-links">
                                <span>&#128220; Legal</span>
                            </div>

                            <div className="footer-link">
                                <Link to='/tos'>Términos y Condiciones</Link>
                                <Link to='/privacidad'>Política de Privacidad</Link>
                                <Link to='/apoyar'>Apoyar</Link>
                            </div>
                        </div>

                        <div className="footer-box-links">
                            <div className="title-links">
                                <span>&#128204; Enlaces</span>
                            </div>

                            <div className="footer-link">
                                <Link to='/afiliar'>Afiliar</Link>
                                <Link to='/calculadora'>Calculadora del Bot</Link>
                                <a href="#">Código fuente</a>
                                <Link to='/comandos'>Comandos</Link>
                            </div>
                        </div>

                        <div className="footer-box-links">
                            <div className="title-links">
                                <span>&#128101; Franquicia</span>
                            </div>

                            <div className="footer-link">
                                <a onClick={() => setDolly(!dolly)}>Dolly</a>
                                <a>D.Loli</a>
                            </div>
                        </div>

                        {
                            dolly &&
                            createPortal(
                                <div id="container-bot">
                                    <div id="bot">
                                        {/* La foto del bot con sus tags */}
                                        <div id="bot-left">
                                            a
                                        </div>

                                        {/* Descripción dell bot y link de invitación */}
                                        <div id="bot-right">
                                            a
                                        </div>
                                    </div>
                                </div>,
                                document.querySelector('#botPortal')
                            )
                        }
                    </div>
                </div>
            </div>

            {/* Parte inferior del footer */}
            <div id="min-footer">
                <div className="centre-footer" id="centre-footer-bottom">
                    <div id="centre-footer-left">
                    </div>

                    <div id="cente-footer-right">
                        Con amor para ti, por !Marenol &mdash; &copy; 2022
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
