import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import initialRecipes from '../recipes.json';


export class App extends Component {
  state = {
    recipes: initialRecipes,
    // selectedImage: null,
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => {
     return {
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId)
      }
    })    
  }
 
  // selectedImage = imageUrl => {
  //   this.setState({
  //     selectedImage: imageUrl
  //   });
  // }

  render() {
    return (
      <Layout>
        {/* {this.state.selectedImage && (
          <div>
            <h2>Modal</h2>
            <img src={this.state.selectedImage} alt="" width="320"/>
        </div>
  )} */}
        <RecipeList
          items={this.state.recipes}
          onDelete={this.deleteRecipe}
          /* onSelect={this.selectedImage} */ />        
        <GlobalStyle />
      </Layout>
    );
  }
};