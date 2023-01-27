import { combineReducers } from "redux";

import { coffe } from './coffe';
import { tea } from './tea';
import { vending } from './vending';
import { eating } from "./eating";
import { filter } from './filter';

export const rootReducers = combineReducers({
	coffe, tea, vending, eating, filter,
})