import { combineReducers } from "redux";

import { coffe } from './coffe';
import { filter } from './filter';

export const rootReducers = combineReducers({
	coffe, filter,
})