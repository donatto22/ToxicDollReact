import './home.css'
import Typed from 'react-typed'
import logo from '../../images/avatar.jpg'

const App = () => {
	return (
		<div className="main-header">
			<div id="centre-header">
				<div id="avatar-bot">
					<img src={logo} alt="avatar bot" />
				</div>

				<div id="typed-text">
					<Typed
						strings={[
							'Música',
							'Diversión',
							'Moderación',
							'Administración',
							'El futuro'
						]} typeSpeed={70}
						backDelay={2500}
						backSpeed={70} loop
					/>
					en tu servidor
				</div>
			</div>
			<button id="ver-mas"><span></span>Ver más </button>
		</div>
	)
}

export default App
