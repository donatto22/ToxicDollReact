import './bot.css'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import CircleIcon from '@mui/icons-material/Circle'

const Dolly = ({ state, exit, inviteLink }) => {
    return (
        <div id="container-bot">
            <div id="bot">
                {/* La foto del bot con sus tags */}
                <div id="bot-left">
                    <div id="profile-image">
                        <img src="./dolly_profile.webp" alt="bot image" />
                    </div>

                    <div id="details">
                        <div>Dolly</div>

                        <div id="tags">
                            <div className="tag">Social</div>
                            <div className="tag">Útil</div>
                        </div>
                    </div>
                </div>

                {/* Descripción dell bot y link de invitación */}
                <div id="bot-right">
                    {/* Botón para cerrar */}
                    <div id='exit' onClick={exit}><CloseOutlinedIcon/></div>
                
                    <div id="state">
                        <div data-state={state}><CircleIcon/> { state }</div>
                    </div>

                    <div id="description-bot">
                        <span>Brindo notificaciones de Youtube y futuras redes sociales.</span>
                    </div>

                    <div id="button-invite">
                        <a href={inviteLink} target='_blank'>Agregar al Servidor</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dolly
