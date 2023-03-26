import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { RecipeForm } from './RecipeForm/RecipeForm'
import initialRecipes from '../recipes.json';


export class App extends Component {
  state = {
    recipes: [],
    // selectedImage: null,
  };

  componentDidMount = () => {
    const savedRecipes = localStorage.getItem('recipes');
    // console.log(savedRecipes);
    if (savedRecipes !== null) {
      const parseRecipes = JSON.parse(savedRecipes);
      this.setState({ recipes: parseRecipes });
      return;
    }
    this.setState({recipes: initialRecipes})
  }
  

  componentDidUpdate = (_, prevState) => {
  if (prevState.recipes !== this.state.recipes) {
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
  }
}


   addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe],
      };
    });
  }

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
  
        <RecipeForm onSave={this.addRecipe} />
        <RecipeList
          items={this.state.recipes}
          onDelete={this.deleteRecipe}
          /* onSelect={this.selectedImage} */ />        
        <GlobalStyle />
      </Layout>
    );
  }
};