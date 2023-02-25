import './afiliate.css'

import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import CheckIcon from '@mui/icons-material/Check'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'

const Afiliate = () => {
    return (
        <>
            <div id="container-afiliate">
                <div id="img-afiliate">
                    <img src="./undraw_referral.svg" alt="afiliate_img" />
                </div>

                <div id="text-afiliate">
                    <div id="text-header">
                        <span>Unidos brindaremos mejores funciones al mundo </span>
                        <FavoriteOutlinedIcon/>
                    </div>

                    <div id="text-button">
                        <button id="button-afiliate">
                            <a target='_blank' href="https://forms.office.com/r/LPWtjKW3CY">Unirse</a>
                        </button>
                    </div>
                </div>
            </div>

            <div id="requeriments-afiliate">
                <div id="benefits">
                    <div className="central-div">
                        <div className="req-left">
                            <h1>Beneficios</h1>
                            <p>Muchas ventajas al afiliarte conmigo, el objetivo es crecer juntos, apoyar y mejorar la gran comunidad de Discord dando las mejores funciones con comandos.</p>
                        </div>

                        <div className="req-right">
                            <ul>
                                <li><StarOutlinedIcon/> Crecer en número de servidores</li>
                                <li><StarOutlinedIcon/> Descrubrimiento</li>
                                <li data-type="futuro"><StarOutlinedIcon/> Recompensas en juegos de Bots</li>
                                <li><StarOutlinedIcon/> Ayuda de otros creadores de bots</li>
                                <li><StarOutlinedIcon/> Nuevos comandos en mi servidor oficial</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="requeriments">
                    <div className="central-div">
                        <div className="req-left">
                            <h1>Lo que necesitas</h1>
                            <p>Debes cumplir con pocos detalles para poder afiliar,</p>
                        </div>

                        <div className="req-right">
                            <ul>
                                <li> <CheckIcon/> Un comando de afiliación</li>
                                <li> <CheckIcon/> Enlace de invitación de tu Bot</li>
                                <li> <CheckIcon/> Link de la Página Web</li>
                                <li> <CheckIcon/> Link del Servidor de tu Bot</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Afiliate
