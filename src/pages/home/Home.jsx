import './home.css'
import Typed from 'react-typed'
import Calculator from './calculator/Calculator'

const App = () => {
	return (
		<>
			<div className="main-header">
				<div id="centre-header">
					<div id="avatar-bot">
						<img src='./avatar.jpg' alt="avatar bot" />
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

			<div id="main">
				<div id="centre-main">
					<Calculator/>
				</div>
			</div>
		</>
	)
}

export default App
