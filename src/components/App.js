import RecipesList from "./RecipesList";
import recipes from "../recipes.json"

export const App = () => {
  return (
    <div>
      <RecipesList items={recipes} />
     {/* style={{
       height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
      }} */}

    </div>
  );
};
