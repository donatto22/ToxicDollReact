import { NavLink } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import './menu.css'
import { useState } from 'react'

import CableIcon from '@mui/icons-material/Cable'
import CodeIcon from '@mui/icons-material/Code'

const Menu = () => {
    const [active, setActive] = useState(false)

    return (
        <nav className="menu">
            <div className="menu-left">
                <NavLink to='/'>
                    <img id='menu-icon' src='./avatar.webp' alt="Logo Bot" />
                </NavLink>
                <MenuOutlinedIcon onClick={(() => setActive(!active))}/> 
            </div>

            <div className={active ? 'menu-right menu-right-active' : 'menu-right'}>
                <NavLink onClick={(() => setActive(!active))} to='/integraciones'><CableIcon/> Integraciones</NavLink>
                <NavLink onClick={(() => setActive(!active))} to='/comandos'> <CodeIcon/> Comandos</NavLink>
            </div>
        </nav>
    )
}

export default Menu
