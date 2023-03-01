import PropTypes from "prop-types";
import { Recipe } from "../Recipe/Recipe";
import { List, ListItem } from "./RecipeList.styled";

export default function RecipesList({items}){
return (
    <List>
        {items.map(item => {
         return <ListItem key={item.id}>
             <Recipe item={item} />
         </ListItem>
        })}
    </List>)
}

RecipesList.prototype = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired,
}