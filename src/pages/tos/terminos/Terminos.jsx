import data from './terminos.json'

const Termino = ({ title, description }) => {
    return (
        <div className="termino">
            <div className="encabezado">
                { title }
            </div>
            <div className="descripcion">
                { description }
            </div>
        </div>
    )
}

const Terminos = () => {
    return ( 
        <>
        {
            data.map(d => (<Termino key={d.termid} title={d.title} description={d.description}/>))
        }
        </>
    )
}

export default Terminos
