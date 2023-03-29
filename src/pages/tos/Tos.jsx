import Terminos from './terminos/Terminos'
import './tos.css'

const Tos = () => {
    return (
        <div id="container-tos">
            <div id="tos">
                <div id="title-tos">
                    <div>Términos y Condiciones</div>
                </div>

                <div id="description-tos">
                    <Terminos/>
                </div>
            </div>
        </div>
    )
}

export default Tos
