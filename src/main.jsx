
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/home/Home'
import Integrations from './pages/integrations/Integrations'
import Commands from './pages/commands/Commands'
import Afiliate from './pages/afiliate/Afiliate'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import OutletManager from './Outlet'
import Tos from './pages/tos/Tos'
import Privacy from './pages/privacy/Privacy'

/* eslint-disable no-tabs */
createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<OutletManager />}>
				<Route index element={<Home />} />
				<Route path='/integraciones' element={<Integrations />} />
				<Route path='/comandos' element={<Commands />} />
				<Route path='/afiliar' element={<Afiliate />} />
				<Route path='/tos' element={<Tos />} />
				<Route path='/privacidad' element={<Privacy />} />
			</Route>
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	</BrowserRouter>
)
