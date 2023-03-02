import './home.css'
import Typed from 'react-typed'
import { BasicOperations } from 'ax-calculator'

const App = () => {
	const a = BasicOperations.sum(0.3, 0.2).result
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
					<div id="calculator">
						<div id="calculator-flex">
							<div id="calculator-left">
								<h1>Tu Bot con calculadora!</h1>
								<p>Puedes usar la misma calculadora que uso en mis comandos de Matemáticas <a id="calculator-link" href="https://github.com/donatto22/ax-calculator">desde este enlace</a>.</p>
							</div>

							<div id="calculator-right">
								<img src="./mathbg.jpg" alt="" />
								<img src="./logo.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
