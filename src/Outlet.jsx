import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'

const OutletManager = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // cuando carge por completo se volverá falso
        window.addEventListener('load', () => {
            setLoading(false)
        })
    }, [])

    return (
        <>
        {/* { loading 
        ? (<p>cargando</p>) 
        : (
                <>
                <Menu/>
                <Outlet/>
                <Footer/>
                </>
            )
        } */}

        <Menu/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}

export default OutletManager
