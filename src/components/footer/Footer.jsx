import { Link } from 'react-router-dom'
import './footer.css'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import Dolly from '../bots/Dolly'
import Dollyloli from '../bots/Dollyloli'

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'

const Footer = () => {
    const [dolly, setDolly] = useState(false)
    const [dollyloli, setDollyloli] = useState(false)

    return (
        // Contenedor general
        <div id="footer">
            {/* Enlaces en el footer */}
            <div id="container-footer">
                <div className="centre-footer">
                    <div id="container-footer-left">
                        <h1 className="bot-name">ToxicDoll</h1>
                        <p className="description-bot-footer">
                            Soy un bot para ti y tu servidor. Con todas las funcionalidad que necesitas, mientras más mejor.
                        </p>
                    </div>

                    <div id="container-footer-right">
                        <div className="footer-box-links">
                            <div className="title-links">
                                <span><AssignmentTurnedInOutlinedIcon/> Legal</span>
                            </div>

                            <div className="footer-link">
                                <Link to='/tos'>Términos y Condiciones</Link>
                                <Link to='/privacidad'>Política de Privacidad</Link>
                                <Link to='/apoyar'>Apoyar</Link>
                            </div>
                        </div>

                        <div className="footer-box-links">
                            <div className="title-links">
                                <span><AttachFileOutlinedIcon/> Enlaces</span>
                            </div>

                            <div className="footer-link">
                                <Link to='/afiliar'>Afiliar</Link>
                                <a href='https://donatto22.github.io/ax-calculator/'>Calculadora</a>
                                <a href="#">Código fuente</a>
                                <Link to='/comandos'>Comandos</Link>
                            </div>
                        </div>

                        <div className="footer-box-links">
                            <div className="title-links">
                                <span><GroupsOutlinedIcon/> Franquicia</span>
                            </div>

                            <div className="footer-link">
                                <a onClick={() => setDolly(!dolly)}>Dolly</a>
                                <a onClick={() => setDollyloli(!dollyloli)}>Dolly Loli</a>
                            </div>
                        </div>

                        { dolly && createPortal(<Dolly state={'Apagado'} exit={() => setDolly(!dolly)}/>, document.querySelector('#botPortal')) }
                        { dollyloli && createPortal(<Dollyloli state={'Apagado'} exit={() => setDollyloli(!dollyloli)}/>, document.querySelector('#botPortal')) }
                    </div>
                </div>
            </div>

            {/* Parte inferior del footer */}
            <div id="min-footer">
                <div className="centre-footer" id="centre-footer-bottom">
                    <div id="centre-footer-left">
                    </div>

                    <div id="cente-footer-right">
                        Con amor para ti, por !Marenol &mdash; &copy; { new Date().getFullYear() }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
