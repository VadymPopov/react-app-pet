import { useRecipes } from 'hooks/useRecipes';
import { Recipe } from '../Recipe';
import { List, ListItem } from './RecipeList.styled';

export const RecipeList = () => {
  const recipes = useRecipes();

  return (
    <List style={{ display: 'flex', gap: 25 }}>
      {recipes.map(item => (
        <ListItem key={item.id}>
        <Recipe item={item} />
        </ListItem>
      ))}
    </List>
  );
};
