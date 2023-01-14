import './cmdcategory.css'

const CmdCategory = ({
    icon, phase, categoryName
}) => {
    return (
        <div className="category" data-phase={phase}>
            {icon} {categoryName}
        </div>
    )
}

export default CmdCategory
