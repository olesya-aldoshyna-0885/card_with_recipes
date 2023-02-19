import PropTypes from "prop-types"
import { Recipe } from "./Recipe"

export default function RecipesList({items}){
return (
    <ul style ={{display: 'flex', gap: 16}}>
        {items.map(item => {
         return <li key={item.id}>
             <Recipe item={item} />
         </li>
        })}
    </ul>)
}

RecipesList.prototype = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired,
}