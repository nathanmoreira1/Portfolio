//css
import "../components/SkillCard.css"
//libs
export const SkillCard = ({ name, description, image }) => {
    return (
        <div className="skillCard">
            <div className="container">
                <div className="card">
                    <div className="slide slide1">
                        <div className="content">
                            <div className="icon">
                                <img src={image} />
                            </div>
                        </div>
                    </div>
                    <div className="slide slide2">
                        <div className="content">
                            <h3>
                                {name}
                            </h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}