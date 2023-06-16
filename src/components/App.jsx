import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Recipes = lazy(() => import("../pages/Recipes"));
const RecipeForm = lazy(() => import("./RecipeForm/RecipeForm"));
const RecipeDetails = lazy(() => import("../pages/RecipeDetails"));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />}>
          <Route path="form" element={<RecipeForm/>}/>  
        </Route>
        <Route path="/recipes/:recipeId" element={<RecipeDetails/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
      
    </Routes>
  );
};
