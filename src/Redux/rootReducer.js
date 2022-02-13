import { createStore, combineReducers } from "redux";
import { randomReducer } from "./RandomReducer";
import { favouritesReducer } from "./FavoritesReducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    random: randomReducer,
    favourites: favouritesReducer
})

export const store = createStore(rootReducer, composeWithDevTools())