import { BsThreeDotsVertical } from "react-icons/bs"

const Card = () => {
    return (
        <div className={`card outline paper full-width `}>
            <div className="card-header box full-width">
                <span className="small">
                    2024/09/25
                </span>
                <button className="icon">
                    <BsThreeDotsVertical />
                </button>
            </div>
            <div className="card-body box column full-width small-gap">
                <p className="card-text full-width">6,123</p>
                <h3 className="card-title full-width disable-guitters">Students</h3>
            </div>
        </div>
    )
}

export default Card