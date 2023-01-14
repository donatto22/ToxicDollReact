import './command.css'

const Command = ({ type, command, description }) => {
    return (
        <div className="command" data-type={type}>
            <span className="command-name">{command}</span>
            <span className="command-description">{description}</span>
        </div>
    )
}

export default Command
