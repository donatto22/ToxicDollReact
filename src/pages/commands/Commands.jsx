import './commands.css'
import Command from '../../components/command/Command'

// Icons
import GppGoodIcon from '@mui/icons-material/GppGood'
import ConstructionIcon from '@mui/icons-material/Construction'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import PersonIcon from '@mui/icons-material/Person'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import CmdCategory from '../../components/cmdcategory/CmdCategory'

const Commands = () => {
    return (
        <div id="container-commands">
            <div id="text-container">
                <div id="text-commands">
                    <span className="focus">Explorando </span>
                    tus herramientas para el futuro
                </div>
            </div>

            <div id="box-commands">
                <div id="notice-commands">
                    <span>&#123; / &#125;</span> Todos los comandos deben ser usados con slash a excepción de la categoría Aplicación
                </div>

                <div id="centre-commands">
                    <div id="categories">
                        <CmdCategory icon={<GppGoodIcon/>} phase='stable' categoryName='Moderación' />
                        <CmdCategory icon={<ConstructionIcon/>} phase='stable' categoryName='Configuración' />
                        <CmdCategory icon={<ConstructionIcon/>} phase='stable' categoryName='Música' />
                        <CmdCategory icon={<MusicNoteIcon/>} phase='beta' categoryName='Matrimonio' />
                        <CmdCategory icon={<PersonIcon/>} phase='app' categoryName='Aplicación' />
                        <CmdCategory icon={<BuildCircleOutlinedIcon/>} phase='beta' categoryName='Programación' />
                        <CmdCategory icon={<WorkOutlineOutlinedIcon/>} phase='stable' categoryName='Utilidad' />
                        <CmdCategory icon={<TurnedInNotOutlinedIcon/>} phase='stable' categoryName='Diccionario' />
                        <CmdCategory icon={<SearchOutlinedIcon/>} phase='stable' categoryName='Búsqueda' />
                        <CmdCategory icon={<RemoveCircleOutlineIcon/>} phase='nsfw' categoryName='NSFW' />
                        <CmdCategory icon={<BuildOutlinedIcon/>} phase='beta' categoryName='Steam' />
                        <CmdCategory icon={<CalculateOutlinedIcon/>} phase='stable' categoryName='Matemáticas' />
                        <CmdCategory icon={<CelebrationOutlinedIcon/>} phase='stable' categoryName='Diversión' />
                    </div>

                    <div id="commands">
                        <Command type='moderation' command='ban' description='Baneo a un usuario' />
                        <Command type='moderation' command='clear' description='Limpio los mensajes de un canal' />
                        <Command type='moderation' command='createchannel' description='Creo un canal' />
                        <Command type='moderation' command='deletechannel' description='Elimino un canal' />
                        <Command type='moderation' command='lock' description='Bloqueo los mensajes de un canal' />
                        <Command type='moderation' command='unlock' description='Desbloqueo los mensajes de un canal' />

                        <Command type='configuration' command='reset' description='Elimino toda la configuración de disparadores en el servidor' />
                        <Command type='configuration' command='setauditlog' description='Configuro un canal de texto para la auditoría visible' />
                        <Command type='configuration' command='setban' description='Configuro un canal de texto para mostrar usuarios baneados' />
                        <Command type='configuration' command='setconfession' description='Configuro un canal de texto para mostrar confesiones' />
                        <Command type='configuration' command='setfarewell' description='Configuro un canal de texto para mostrar mensajes de despedida' />
                        <Command type='configuration' command='seticket' description='Coloco un acceso a generar ticket en un canal' />
                        <Command type='configuration' command='setwelcome' description='Configuro un canal de texto para mostrar mensajes de bienvenida' />
                        <Command type='configuration' command='showconfig' description='Muestro todos los canales configurados con disparadores' />

                        <Command type='music' command='play' description='Reproduzco algo de youtube' />
                        <Command type='music' command='skip' description='Salto a la sgte. canción en la lista de espera' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commands
