import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Particle from './components/particles/Particle'

const OutletManager = () => {

    return (
        <>
        <Menu/>
        <Particle/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default OutletManager
