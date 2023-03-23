import './bot.css'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import CircleIcon from '@mui/icons-material/Circle'

const Dollyloli = ({ state, exit, inviteLink }) => {
    return (
        <div id="container-bot">
            <div id="bot">
                {/* La foto del bot con sus tags */}
                <div id="bot-left">
                    <div id="profile-image">
                        <img src="./dolly_loli_profile.webp" alt="bot image" />
                    </div>

                    <div id="details">
                        <div>Dolly Loli</div>

                        <div id="tags">
                            <div className="tag">NSFW</div>
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
                        <span>Muestro contenido para mayores de edad en los canales permitidos.</span>
                    </div>

                    <div id="button-invite">
                        <a href={inviteLink} target='_blank'>Agregar al Servidor</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dollyloli
