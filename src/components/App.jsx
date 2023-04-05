import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Recipes = lazy(() => import("../pages/Recipes"));
const ToDo = lazy(() => import("../pages/ToDo"));
const RecipeDetails = lazy(() => import("../pages/RecipeDetails"));
const RecipeForm = lazy(() => import("./RecipeForm/RecipeForm"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="todo" element={<ToDo />}/>
        <Route path="recipes" element={<Recipes />}>
          <Route path="form" element={<RecipeForm/>}/>  
        </Route>
        <Route path="/recipes/:recipeId" element={<RecipeDetails/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
      
    </Routes>
  );
};
