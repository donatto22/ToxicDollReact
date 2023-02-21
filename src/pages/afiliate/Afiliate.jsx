import './afiliate.css'
import { AiFillStar } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'

const Afiliate = () => {
    return (
        <>
            <div id="container-afiliate">
                <div id="img-afiliate">
                    <img src="./undraw_referral.svg" alt="afiliate_img" />
                </div>

                <div id="text-afiliate">
                    <div id="text-header">
                        <span>Unidos brindamos mejores funciones al mundo</span>
                    </div>

                    <div id="text-button">
                        <button id="button-afiliate">
                            Unirse 
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
                                <li><AiFillStar/> Crecer en número de servidores</li>
                                <li><AiFillStar/> Descrubrimiento</li>
                                <li data-type="futuro"><AiFillStar/> Recompensas en juegos de Bots</li>
                                <li><AiFillStar/> Ayuda de otros creadores de bots</li>
                                <li><AiFillStar/> Nuevos comandos en mi servidor oficial</li>
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
                                <li> <BsCheckLg/> Un comando de afiliación</li>
                                <li> <BsCheckLg/> Enlace de invitación de tu Bot</li>
                                <li> <BsCheckLg/> Link de la Página Web</li>
                                <li> <BsCheckLg/> Link del Servidor de tu Bot</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Afiliate
