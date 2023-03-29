import { Disclosure } from '@headlessui/react'
import preguntas from './preguntas.json'
import './faq.css'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import ReactMarkdown from 'react-markdown'

const Pregunta = ({ id, title, answer }) => {
    return (
        <Disclosure key={id} as='div' className='contenedor-pregunta'>
            <Disclosure.Button className='pregunta'>
                { title }

                <KeyboardArrowRightOutlinedIcon/>
            </Disclosure.Button>

            <Disclosure.Panel className='respuesta'>
                <ReactMarkdown>{ answer }</ReactMarkdown>
            </Disclosure.Panel>
        </Disclosure>
    )
}

const Faq = () => {
    return (
        <div id="preguntas">
            {
               preguntas.map(p => (
                   <Pregunta key={p.id} title={p.question} answer={p.answer}/>
               ))
           } 
        </div>
    )
}

export default Faq
