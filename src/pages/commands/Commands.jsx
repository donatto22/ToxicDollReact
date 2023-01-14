import './commands.css'

// Icons
import GppGoodIcon from '@mui/icons-material/GppGood';
import ConstructionIcon from '@mui/icons-material/Construction';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

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
                        <div className="category">
                            <GppGoodIcon/> Moderación
                        </div>

                        <div className="category">
                            <ConstructionIcon/> Configuración
                        </div>

                        <div className="category">
                            <MusicNoteIcon/> Música
                        </div>

                        <div className="category" data-phase="beta">
                            <FavoriteIcon/> Matrimonio
                        </div>

                        <div className="category" data-phase="app">
                            <PersonIcon/> Aplicación
                        </div>

                        <div className="category" data-phase="beta">
                            <BuildCircleOutlinedIcon/> Programación
                        </div>

                        <div className="category">
                            <WorkOutlineOutlinedIcon/> Utilidad
                        </div>

                        <div className="category">
                            <TurnedInNotOutlinedIcon/> Diccionario
                        </div>

                        <div className="category">
                            <SearchOutlinedIcon/> Búsqueda
                        </div>

                        <div className="category">
                            <RemoveCircleOutlineIcon/> NSFW
                        </div>

                        <div className="category" data-phase="beta">
                            <BuildOutlinedIcon/> Steam
                        </div>

                        <div className="category">
                            <CalculateOutlinedIcon/> Matemáticas
                        </div>

                        <div className="category">
                            <CelebrationOutlinedIcon/> Diversión
                        </div>
                    </div>

                    <div id="commands">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commands
