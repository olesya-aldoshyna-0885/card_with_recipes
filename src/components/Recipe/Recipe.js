import PropTypes from "prop-types";
import { BsAlarmFill, BsFillPeopleFill, BsCalculatorFill } from "react-icons/bs";
import {
    Image,
    Container,
    RecipeInfo,
    InfoItem,
    RecipeDifficulty,
    BadgeList,
    Badge
} from "./Recipe.styled"

export const Recipe = ({ item: { name, image, time, servings, calories, difficulty } }) => {
    return (
        <Container>
          <Image src={image} alt={name} />
          <h2>{name}</h2>
          <RecipeInfo>
                
            <InfoItem>
                <BsAlarmFill />
                {time} min
            </InfoItem>
            <InfoItem>
                <BsFillPeopleFill />
                {servings} servings
            </InfoItem>
            <InfoItem>
                <BsCalculatorFill />
                {calories} calories
            </InfoItem>        
          </RecipeInfo>        
            <RecipeDifficulty>
                <h3>Difficulty</h3>
                <BadgeList>
                    <Badge isActive={difficulty === `easy`}>Easy</Badge>
                  <Badge isActive={difficulty === `medium`}>Medium</Badge>
                  <Badge isActive={difficulty === `hard`}>Hard</Badge>
                </BadgeList>
            </RecipeDifficulty>
        </Container>
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