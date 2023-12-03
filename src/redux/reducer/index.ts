import { combineReducers } from "redux";

import { coffe } from './coffe';
import { tea } from "./tea";
import { vending } from './vending';
import { eating } from "./eating";

import { catalogItem } from "./catalogItem";
import { filter } from './filter';
import { cart } from './cart';
import { auth } from "./auth";

export const rootReducers = combineReducers({
	coffe, tea, vending, eating, catalogItem, filter, cart, auth
})