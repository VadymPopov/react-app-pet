import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';
import { useRecipes } from "hooks/useRecipes";

const RecipeDetails = () => {
    const {recipeId} = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/recipes";

    const recipes = useRecipes();
    const getRecipeById = (recipeId) => {
        return recipes.find((recipe) => recipe.id === recipeId);
    };

    const {name, time,servings,calories,image,ingredients,instructions} = getRecipeById(recipeId);

    return(
        <main>
            <BackLink to={backLinkHref} >Back to recipes</BackLink>
            <div>
                <h2>{name}</h2>
                <img src={image} alt={name} />
                <ul>
                    <li>
                      <BsAlarm />
                      {time} min
                    </li>
                    <li>
                      <AiOutlinePieChart />
                      {servings} servings
                    </li>
                    <li>
                      <HiOutlineChartBar />
                      {calories} calories
                    </li>
                </ul>
                <div>
                    <h3>Ingredients</h3>
                    <p>{ingredients}</p>
                </div>
                <div>
                    <h3>Instructions</h3>
                    <p>{instructions}</p>
                </div>
                
            </div>
        </main>
    )
};

export default RecipeDetails;