import { combineReducers } from "redux";

import { coffe } from './coffe';
import { tea } from './tea';
import { vending } from './vending';
import { filter } from './filter';

export const rootReducers = combineReducers({
	coffe, tea, vending, filter,
})