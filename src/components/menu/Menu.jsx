import { NavLink } from 'react-router-dom'
import './menu.css'
import logo from '../../images/avatar.jpg'

const Menu = () => {
    return (
        <nav className="menu">
            <div className="menu-left">
                <NavLink to='/'>
                    <img id='menu-icon' src={logo} alt="Logo Bot" />
                </NavLink>
            </div>

            <div className="menu-right">
                <NavLink to='/integraciones'>Integraciones</NavLink>
                <NavLink to='/comandos'>Comandos</NavLink>
            </div>
        </nav>
    )
}

export default Menu
