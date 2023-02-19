import PropTypes from "prop-types";
import { BsAlarmFill, BsFillPeopleFill, BsCalculatorFill } from "react-icons/bs";


export const Recipe = ({ item: { name, image, time, servings, calories } }) => {
    return (
        <section>
            <img src={image} alt={name} width="240" />
            <h2>{name}</h2>
        <div>
        <div>
            <BsAlarmFill />
            {time} min
        </div>
        <div>
            <BsFillPeopleFill />
            {servings} servings
        </div>
        <div>
            <BsCalculatorFill />
            {calories} calories
        </div>
        </div>
            <div>
                <h3>Difficulty</h3>
                <span>Easy</span>
                <span>Medium</span>
                <span>Hard</span>
        </div>

        </section>
    )
}

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};