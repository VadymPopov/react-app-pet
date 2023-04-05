import { Recipe } from '../Recipe/Recipe';
import { List, ListItem } from './RecipeList.styled';
import { getRecipes } from "redux/selectors";
import { useSelector } from 'react-redux';

export const RecipeList = () => {
  const recipes = useSelector(getRecipes);

  return (
    <List style={{ display: 'flex', gap: 16 }}>
      {recipes.map(item => (
        <ListItem key={item.id}>
        <Recipe item={item} />
        </ListItem>
      ))}
    </List>
  );
};
