import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar, HiTrash, HiZoomIn, HiHeart } from 'react-icons/hi';
import { Badge, Container, Image, InfoItem, RecipeDifficulty, RecipeInfo, Actions, Meta, Title, Favorite } from './Recipe.styled';
import { useDispatch } from 'react-redux';
import { deleteRecipe, addFavorite } from 'redux/recipesSlice';
import { useNavigate } from 'react-router-dom';

export const Recipe = ({item:{id, image, name, time, servings, calories, difficulty, favorite}}) =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

    return (
      <Container>
      <Image src={image} alt={name} width="240"/>
      <Meta>
      <Title>{name}</Title>

      <RecipeInfo>
        <InfoItem>
          <BsAlarm />
          {time} min
        </InfoItem>
        <InfoItem>
          <AiOutlinePieChart />
          {servings} servings
        </InfoItem>
        <InfoItem>
          <HiOutlineChartBar />
          {calories} calories
        </InfoItem>
      </RecipeInfo>

      <RecipeDifficulty>
        <Badge isActive ={difficulty ==='easy'} value={difficulty} >Easy </Badge>
        <Badge isActive ={difficulty ==='medium'} value={difficulty}>Medium </Badge>
        <Badge isActive ={difficulty ==='hard'} value={difficulty}>Hard </Badge>
      </RecipeDifficulty>

      <Actions>
        <button onClick={()=>dispatch(deleteRecipe(id))} aria-label="Delete"><HiTrash/></button>
        <button onClick={()=>navigate(id)} aria-label="Zoom"><HiZoomIn/></button>
      </Actions>
          <Favorite onClick={() => dispatch(addFavorite(id))}>{favorite ? <HiHeart /> : 'add to'}</Favorite>
      </Meta> 
      </Container>
    );
  };

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.number,
    servings: PropTypes.number,
    calories: PropTypes.number,
    image: PropTypes.string,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }
 )
};
