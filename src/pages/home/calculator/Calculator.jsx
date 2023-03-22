import './calculator.css'

const Calculator = () => {
    return (
        <div id="calculator">
            <div id="calculator-flex">
                <div id="calculator-left">
                    <h1>Tu Bot con calculadora!</h1>
                    <p>Puedes usar la misma calculadora que uso en mis comandos de Matemáticas <a id="calculator-link" href="https://donatto22.github.io/ax-calculator/">desde este enlace</a>.</p>
                </div>

                <div id="calculator-right">
                    <img id="bgmath" src="./mathbg.webp" alt="mathbg" />
                    <img id="logoax" src="./logo.webp" alt="logo calculator" />
                </div>
            </div>
        </div>
    )
}

export default Calculator
