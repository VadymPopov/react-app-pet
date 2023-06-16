import { useSelector } from "react-redux";
import {selectStatusFilter} from 'redux/selectors';

export const useFilter = ()=> useSelector(selectStatusFilter);