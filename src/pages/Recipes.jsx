import { RecipeList } from "../components/RecipeList/RecipeList";
import { GlobalStyle } from "../GlobalStyles";
import { Layout } from "../components/Layout/Layout";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate();

return (
      <Layout>
      <RecipeList />
      <button type="button" onClick={()=>navigate("form", { replace: false })} >Add new pecipe</button>
      <Outlet/>
      <GlobalStyle/>
    </Layout>
    )};

    export default Recipes;