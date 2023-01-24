import { combineReducers } from "redux";

import { coffe } from './coffe';
import { tea } from './tea';
import { filter } from './filter';

export const rootReducers = combineReducers({
	coffe, tea, filter,
})