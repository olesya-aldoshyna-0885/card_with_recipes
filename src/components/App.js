import RecipesList from "./RecipeList/RecipesList";
import recipes from "../recipes.json";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";


export const App = () => {
  return (
    <Layout>
      <RecipesList items={recipes} />
      <GlobalStyle />


    </Layout>
  );
};
