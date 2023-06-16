import { useSelector } from "react-redux";
import {selectRecipes} from 'redux/selectors';

export const useRecipes = ()=> useSelector(selectRecipes);