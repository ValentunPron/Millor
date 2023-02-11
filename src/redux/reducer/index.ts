import { combineReducers } from "redux";

import { coffe } from './coffe';
import { catalogItem } from "./catalogItem";
import { filter } from './filter';

export const rootReducers = combineReducers({
	coffe, catalogItem, filter,
})